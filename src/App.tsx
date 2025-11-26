import { MapView } from './components/MapView';
import { Sidebar } from './components/Sidebar';
import { TopBar } from './components/TopBar';
import { CreatePinModal } from './components/CreatePinModal';
import { PinDetailsModal } from './components/PinDetailsModal';
import { ChatModal } from './components/ChatModal';
import { NotificationPanel } from './components/NotificationPanel';
import { RewardsPanel } from './components/RewardsPanel';
import { ModerationPanel } from './components/ModerationPanel';
import { PinManagement } from './components/PinManagement';
import { useEffect, useRef, useState } from 'react';
import { collection, doc, onSnapshot, addDoc, updateDoc, serverTimestamp, increment } from 'firebase/firestore';
import { ref, onValue, runTransaction, serverTimestamp as rtdbServerTimestamp, set } from 'firebase/database';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { AuthModal } from './components/AuthModal';
import { firestore, realtimeDb, firebaseAuth } from './firebase';

export interface Pin {
  id: string;
  type: 'personal' | 'business' | 'public';
  name: string;
  lat: number;
  lng: number;
  address: string;
  createdBy: string;
  createdAt: Date;
  avatar?: string;
  description?: string;
  // Business/Public specific
  businessInfo?: {
    cnpj?: string;
    phone: string;
    email: string;
    website?: string;
    hours?: string;
    categories: string[];
    products?: string[];
    services?: string[];
  };
  // Stats
  stats: {
    views: number;
    chatsStarted: number;
    messages: number;
  };
  // Moderation
  reported: boolean;
  moderationStatus?: 'pending' | 'approved' | 'rejected';
}

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCreatePinOpen, setIsCreatePinOpen] = useState(false);
  const [selectedPin, setSelectedPin] = useState<Pin | null>(null);
  const [isPinDetailsOpen, setIsPinDetailsOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isRewardsOpen, setIsRewardsOpen] = useState(false);
  const [isModerationOpen, setIsModerationOpen] = useState(false);
  const [currentInterest, setCurrentInterest] = useState<{ products: any[], services: any[] } | undefined>(undefined);
  const [showPinManagement, setShowPinManagement] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const statsUnsubRef = useRef<Record<string, () => void>>({});

  const [pins, setPins] = useState<Pin[]>([]);

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        setIsLoggedIn(true);
        setCurrentUser({
          id: user.uid,
          name: user.displayName || user.email || 'Usuário',
          email: user.email,
          type: 'user',
          points: 0,
          level: 1,
        });
      } else {
        setIsLoggedIn(false);
        setCurrentUser(null);
      }
    });

    const pinsCollection = collection(firestore, 'pins');

    const unsubscribe = onSnapshot(
      pinsCollection,
      (snapshot) => {
        const fetchedPins: Pin[] = snapshot.docs.map((docSnapshot) => {
          const data = docSnapshot.data() as any;
          const createdAtValue = data.createdAt?.toDate ? data.createdAt.toDate() : new Date(data.createdAt ?? Date.now());

          return {
            id: docSnapshot.id,
            type: data.type,
            name: data.name,
            lat: data.lat,
            lng: data.lng,
            address: data.address,
            createdBy: data.createdBy,
            createdAt: createdAtValue,
            avatar: data.avatar,
            description: data.description,
            businessInfo: data.businessInfo,
            stats: data.stats ?? { views: 0, chatsStarted: 0, messages: 0 },
            reported: Boolean(data.reported),
            moderationStatus: data.moderationStatus,
          };
        });

        setPins(fetchedPins);

        const fetchedIds = new Set(fetchedPins.map((pin) => pin.id));
        Object.entries(statsUnsubRef.current).forEach(([id, cleanup]) => {
          if (!fetchedIds.has(id)) {
            cleanup();
            delete statsUnsubRef.current[id];
          }
        });

        fetchedPins.forEach((pin) => {
          if (statsUnsubRef.current[pin.id]) return;

          const statsRef = ref(realtimeDb, `pinStats/${pin.id}`);
          const unsubscribeStats = onValue(statsRef, (statsSnapshot) => {
            const liveStats = statsSnapshot.val();
            if (!liveStats) return;

            setPins((currentPins) =>
              currentPins.map((p) =>
                p.id === pin.id
                  ? { ...p, stats: { ...p.stats, ...liveStats } }
                  : p
              )
            );
          });

          statsUnsubRef.current[pin.id] = unsubscribeStats;
        });
      },
      (error) => {
        console.error('Error loading pins from Firestore', error);
      }
    );

    return () => {
      unsubscribeAuth();
      unsubscribe();
      Object.values(statsUnsubRef.current).forEach((cleanup) => cleanup());
      statsUnsubRef.current = {};
    };
  }, []);

  const handlePinClick = async (pin: Pin) => {
    setSelectedPin(pin);
    
    // Update view count
    try {
      const pinRef = doc(firestore, 'pins', pin.id);
      await updateDoc(pinRef, { 'stats.views': increment(1) });
      await runTransaction(ref(realtimeDb, `pinStats/${pin.id}/views`), (current) => (current || 0) + 1);
    } catch (error) {
      console.error('Failed to increment views', error);
    }

    // Check if user is the owner of this pin
    if (isLoggedIn && currentUser?.id === pin.createdBy) {
      // Owner clicks their own pin - go to management
      setShowPinManagement(true);
    } else {
      // Regular user clicks pin
      // For business/public pins, show details first
      if (pin.type === 'business' || pin.type === 'public') {
        setIsPinDetailsOpen(true);
      } else {
        // For personal pins, go straight to chat
        setIsChatOpen(true);
      }
    }
  };

  const handleStartChat = (interest?: { products: any[], services: any[] }) => {
    // Update chat started count
    if (selectedPin) {
      const pinRef = doc(firestore, 'pins', selectedPin.id);
      updateDoc(pinRef, { 'stats.chatsStarted': increment(1) }).catch((error) => {
        console.error('Failed to increment chat counter', error);
      });

      runTransaction(ref(realtimeDb, `pinStats/${selectedPin.id}/chatsStarted`), (current) => (current || 0) + 1).catch((error) => {
        console.error('Failed to increment chat counter (RTDB)', error);
      });
    }

    setIsPinDetailsOpen(false);
    setIsChatOpen(true);
    
    // If there's interest, we could send a notification or add initial message
    // This would be handled in ChatModal to show the interest as first message
    if (interest) {
      setCurrentInterest(interest);
    }
  };

  const handleCreatePin = (pinData: Partial<Pin>) => {
    const sanitizedBusinessInfo =
      pinData.type !== 'personal' && pinData.businessInfo
        ? {
            ...pinData.businessInfo,
            products: (pinData.businessInfo.products || []).filter(Boolean),
            services: (pinData.businessInfo.services || []).filter(Boolean),
            categories: (pinData.businessInfo.categories || []).filter(Boolean),
          }
        : null;

    const basePin = {
      type: pinData.type!,
      name: pinData.name!,
      lat: pinData.lat!,
      lng: pinData.lng!,
      address: pinData.address!,
      createdBy: currentUser?.id || 'user',
      createdAt: new Date(),
      description: pinData.description,
      stats: { views: 0, chatsStarted: 0, messages: 0 },
      reported: false,
    };

    const newPin: Omit<Pin, 'id'> = sanitizedBusinessInfo
      ? { ...basePin, businessInfo: sanitizedBusinessInfo }
      : basePin;
    
    const firestorePayload = sanitizedBusinessInfo
      ? { ...basePin, businessInfo: sanitizedBusinessInfo, createdAt: serverTimestamp() }
      : { ...basePin, createdAt: serverTimestamp() };

    addDoc(collection(firestore, 'pins'), firestorePayload)
      .then((docRef) => {
        const rtdbPayload = sanitizedBusinessInfo
          ? { ...basePin, businessInfo: sanitizedBusinessInfo, createdAt: rtdbServerTimestamp() }
          : { ...basePin, createdAt: rtdbServerTimestamp() };

        // Primeiro cria o pino no RTDB para liberar permissões de pinStats
        set(ref(realtimeDb, `pins/${docRef.id}`), rtdbPayload)
          .then(() =>
            set(ref(realtimeDb, `pinStats/${docRef.id}`), newPin.stats).catch((error) => {
              console.error('Failed to seed stats in Realtime Database', error);
            })
          )
          .catch((error) => {
            console.error('Failed to create pin in Realtime Database', error);
          });

        setIsCreatePinOpen(false);
      })
      .catch((error) => {
        console.error('Failed to create pin in Firestore', error);
      });
  };

  const handleLogin = () => setIsAuthOpen(true);

  const handleLogout = () => {
    signOut(firebaseAuth).catch((error) => {
      console.error('Failed to logout', error);
    });
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-gray-900">
      {showPinManagement && selectedPin ? (
        <PinManagement
          pin={selectedPin}
          onBack={() => {
            setShowPinManagement(false);
            setSelectedPin(null);
          }}
          onUpdate={(updatedData) => {
            setPins(pins.map(p =>
              p.id === selectedPin.id
                ? { ...p, ...updatedData }
                : p
            ));
          }}
        />
      ) : (
        <>
          {/* Top Bar */}
          <TopBar
            isLoggedIn={isLoggedIn}
            currentUser={currentUser}
            onMenuClick={() => setIsSidebarOpen(true)}
            onNotificationClick={() => setIsNotificationOpen(true)}
            onLogin={handleLogin}
            onLogout={handleLogout}
          />

          {/* Main Content - Map */}
          <div className="flex-1 relative">
            <MapView
              pins={pins}
              onPinClick={handlePinClick}
              onCreatePin={() => setIsCreatePinOpen(true)}
              isLoggedIn={isLoggedIn}
            />
          </div>

          {/* Sidebar */}
          <Sidebar
            isOpen={isSidebarOpen}
            onClose={() => setIsSidebarOpen(false)}
            isLoggedIn={isLoggedIn}
            currentUser={currentUser}
            onOpenRewards={() => {
              setIsRewardsOpen(true);
              setIsSidebarOpen(false);
            }}
            onOpenModeration={() => {
              setIsModerationOpen(true);
              setIsSidebarOpen(false);
            }}
          />

          {/* Create Pin Modal */}
          <CreatePinModal
            isOpen={isCreatePinOpen}
            onClose={() => setIsCreatePinOpen(false)}
            onCreate={handleCreatePin}
            currentUser={currentUser}
          />

          {/* Pin Details Modal (for business/public) */}
          {selectedPin && (
            <PinDetailsModal
              isOpen={isPinDetailsOpen}
              onClose={() => {
                setIsPinDetailsOpen(false);
                setSelectedPin(null);
              }}
              pin={selectedPin}
              onStartChat={handleStartChat}
              isLoggedIn={isLoggedIn}
              onLogin={handleLogin}
            />
          )}

          {/* Chat Modal */}
          {selectedPin && (
            <ChatModal
              isOpen={isChatOpen}
              onClose={() => {
                setIsChatOpen(false);
                setSelectedPin(null);
                setCurrentInterest(undefined);
              }}
              pin={selectedPin}
              isLoggedIn={isLoggedIn}
              currentUser={currentUser}
              onLogin={handleLogin}
              interest={currentInterest}
            />
          )}

          {/* Notification Panel */}
          <NotificationPanel
            isOpen={isNotificationOpen}
            onClose={() => setIsNotificationOpen(false)}
            currentUser={currentUser}
          />

          {/* Rewards Panel */}
          <RewardsPanel
            isOpen={isRewardsOpen}
            onClose={() => setIsRewardsOpen(false)}
            currentUser={currentUser}
          />

          {/* Moderation Panel */}
          <ModerationPanel
            isOpen={isModerationOpen}
            onClose={() => setIsModerationOpen(false)}
            pins={pins}
            onModerate={(pinId, action) => {
              setPins(pins.map(p =>
                p.id === pinId
                  ? { ...p, moderationStatus: action, reported: false }
                  : p
              ));
            }}
          />

          <AuthModal
            isOpen={isAuthOpen}
            onClose={() => setIsAuthOpen(false)}
            onLoginSuccess={() => setIsAuthOpen(false)}
          />
        </>
      )}
    </div>
  );
}
