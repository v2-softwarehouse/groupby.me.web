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
import { useState } from 'react';

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

  const [pins, setPins] = useState<Pin[]>([
    {
      id: '1',
      type: 'business',
      name: 'Farmácia Central',
      lat: -23.550520,
      lng: -46.633308,
      address: 'Av. Paulista, 1000',
      createdBy: 'farmacia_central',
      createdAt: new Date('2024-01-15'),
      description: 'Farmácia 24h com delivery rápido',
      businessInfo: {
        cnpj: '12.345.678/0001-90',
        phone: '(11) 98765-4321',
        email: 'contato@farmaciacentral.com.br',
        website: 'www.farmaciacentral.com.br',
        hours: '24 horas',
        categories: ['Saúde', 'Farmácia', 'Delivery'],
        products: ['Medicamentos', 'Cosméticos', 'Higiene'],
        services: ['Delivery', 'Teste de COVID-19', 'Aferição de Pressão'],
      },
      stats: { views: 1250, chatsStarted: 89, messages: 456 },
      reported: false,
    },
    {
      id: '2',
      type: 'public',
      name: 'Hospital Municipal',
      lat: -23.548520,
      lng: -46.635308,
      address: 'Rua Augusta, 500',
      createdBy: 'prefeitura_sp',
      createdAt: new Date('2024-01-10'),
      description: 'Atendimento 24h - Emergência e pronto-socorro',
      businessInfo: {
        phone: '(11) 3000-0000',
        email: 'hospital@prefeitura.sp.gov.br',
        hours: '24 horas',
        categories: ['Saúde Pública', 'Emergência', 'Hospital'],
        services: ['Pronto-Socorro', 'Clínico Geral', 'Pediatria', 'Raio-X'],
      },
      stats: { views: 3420, chatsStarted: 1247, messages: 8934 },
      reported: false,
    },
    {
      id: '3',
      type: 'personal',
      name: 'Grupo: Rua das Flores',
      lat: -23.552520,
      lng: -46.631308,
      address: 'Rua das Flores',
      createdBy: 'joao_silva',
      createdAt: new Date('2024-02-01'),
      description: 'Grupo dos moradores da Rua das Flores para avisos e ajuda mútua',
      stats: { views: 580, chatsStarted: 234, messages: 2100 },
      reported: false,
    },
  ]);

  const handlePinClick = (pin: Pin) => {
    setSelectedPin(pin);
    
    // Update view count
    setPins(pins.map(p => 
      p.id === pin.id 
        ? { ...p, stats: { ...p.stats, views: p.stats.views + 1 } }
        : p
    ));

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
      setPins(pins.map(p => 
        p.id === selectedPin.id 
          ? { ...p, stats: { ...p.stats, chatsStarted: p.stats.chatsStarted + 1 } }
          : p
      ));
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
    const newPin: Pin = {
      id: Date.now().toString(),
      type: pinData.type!,
      name: pinData.name!,
      lat: pinData.lat!,
      lng: pinData.lng!,
      address: pinData.address!,
      createdBy: currentUser?.id || 'user',
      createdAt: new Date(),
      description: pinData.description,
      businessInfo: pinData.businessInfo,
      stats: { views: 0, chatsStarted: 0, messages: 0 },
      reported: false,
    };
    
    setPins([...pins, newPin]);
    setIsCreatePinOpen(false);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentUser({
      id: 'farmacia_central', // Set to farmacia_central to test management
      name: 'João Silva',
      email: 'joao@example.com',
      type: 'business',
      points: 150,
      level: 3,
    });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
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
        </>
      )}
    </div>
  );
}