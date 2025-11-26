import { X, Send, Smile, Paperclip, LogIn, Users, Flag, Info, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { useState, useEffect } from 'react';
import { Pin } from '../App';
import { InterestNotification } from './InterestNotification';

interface Message {
  id: number;
  sender: string;
  senderId: string;
  message: string;
  time: string;
  isOwn: boolean;
  isOfficial?: boolean;
}

interface ChatModalProps {
  isOpen: boolean;
  onClose: () => void;
  pin: Pin;
  isLoggedIn: boolean;
  currentUser: any;
  onLogin: () => void;
  interest?: { products: any[], services: any[] };
}

export function ChatModal({ isOpen, onClose, pin, isLoggedIn, currentUser, onLogin, interest }: ChatModalProps) {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, sender: 'Carlos S.', senderId: 'carlos', message: 'Olá! Está funcionando?', time: '10:15', isOwn: false },
    { id: 2, sender: pin.name, senderId: pin.id, message: 'Sim! Como posso ajudar?', time: '10:16', isOwn: false, isOfficial: true },
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [showReportModal, setShowReportModal] = useState(false);
  const [showInterestNotification, setShowInterestNotification] = useState(false);

  useEffect(() => {
    if (interest && (interest.products.length > 0 || interest.services.length > 0)) {
      setShowInterestNotification(true);
    }
  }, [interest]);

  if (!isOpen) return null;

  const isGroupChat = pin.type === 'personal';
  const colorClass =
    pin.type === 'business'
      ? 'bg-gradient-to-r from-blue-600 to-blue-700'
      : pin.type === 'public'
      ? 'bg-gradient-to-r from-green-600 to-green-700'
      : 'bg-gradient-to-r from-purple-600 to-purple-700';

  const handleSendMessage = () => {
    if (newMessage.trim() && isLoggedIn) {
      const newMsg: Message = {
        id: messages.length + 1,
        sender: currentUser?.name || 'Você',
        senderId: currentUser?.id || 'you',
        message: newMessage,
        time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
        isOwn: true,
      };
      setMessages([...messages, newMsg]);
      setNewMessage('');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[80vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className={`${colorClass} p-4 flex items-center justify-between relative`}>
          <div className="flex items-center gap-3 flex-1 pr-12">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-white">{pin.name}</h3>
              <p className="text-white/80 text-sm">
                {isGroupChat ? `${pin.stats.chatsStarted} participantes` : 'Chat privado (1:1)'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors backdrop-blur-sm"
            aria-label="Fechar"
          >
            <X className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 space-y-4 bg-gray-50 overflow-y-auto">
          {/* Interest Notification - only shown for business owner */}
          {showInterestNotification && interest && currentUser?.id === pin.createdBy && (
            <InterestNotification
              userName={currentUser?.name || 'Usuário'}
              products={interest.products}
              services={interest.services}
            />
          )}

          {messages.map((msg) => (
            <MessageBubble key={msg.id} {...msg} />
          ))}
        </div>

        {/* Input Area */}
        {isLoggedIn ? (
          <div className="p-4 border-t border-gray-200 bg-white">
            <div className="flex items-center gap-2">
              <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                <Paperclip className="w-5 h-5" />
              </button>
              <input
                type="text"
                placeholder="Digite sua mensagem..."
                className="flex-1 px-4 py-2 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                <Smile className="w-5 h-5" />
              </button>
              <button className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors" onClick={handleSendMessage}>
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        ) : (
          <div className="p-4 border-t border-gray-200 bg-gradient-to-r from-blue-50 to-green-50">
            <div className="flex flex-col items-center gap-3 py-2">
              <div className="flex items-center gap-2 text-gray-700">
                <LogIn className="w-5 h-5" />
                <span>Faça login para participar da conversa</span>
              </div>
              <Button
                onClick={onLogin}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Entrar ou Criar conta
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function MessageBubble({ sender, message, time, isOwn, isOfficial }: Message) {
  return (
    <div className={`flex flex-col ${isOwn ? 'items-end' : 'items-start'}`}>
      <div className={`max-w-[80%] rounded-2xl px-4 py-2 ${
        isOwn
          ? 'bg-blue-600 text-white'
          : isOfficial
            ? 'bg-green-100 border border-green-300'
            : 'bg-white border border-gray-200'
      }`}>
        {!isOwn && (
          <div className={`text-xs mb-1 ${isOfficial ? 'text-green-700' : 'text-gray-600'}`}>
            {sender} {isOfficial && '✓'}
          </div>
        )}
        <div className={`${isOwn ? 'text-white' : isOfficial ? 'text-green-900' : 'text-gray-900'}`}>
          {message}
        </div>
        <div className={`text-xs mt-1 ${isOwn ? 'text-blue-100' : 'text-gray-500'}`}>
          {time}
        </div>
      </div>
    </div>
  );
}