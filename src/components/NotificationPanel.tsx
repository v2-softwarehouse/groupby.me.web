import { X, MessageCircle, Flag, Award, CheckCircle } from 'lucide-react';

interface NotificationPanelProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser: any;
}

export function NotificationPanel({ isOpen, onClose, currentUser }: NotificationPanelProps) {
  const notifications = [
    {
      id: 1,
      type: 'message',
      title: 'Nova mensagem',
      description: 'Farmácia Central respondeu sua pergunta',
      time: '5 min atrás',
      icon: MessageCircle,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      unread: true,
    },
    {
      id: 2,
      type: 'reward',
      title: 'Conquista desbloqueada!',
      description: 'Você alcançou o nível 3 e ganhou 50 pontos',
      time: '1 hora atrás',
      icon: Award,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
      unread: true,
    },
    {
      id: 3,
      type: 'moderation',
      title: 'Seu pino foi aprovado',
      description: 'O pino "Grupo Moradores" passou pela moderação',
      time: '2 horas atrás',
      icon: CheckCircle,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      unread: false,
    },
    {
      id: 4,
      type: 'interaction',
      title: 'Seu pino teve interação',
      description: '15 pessoas iniciaram conversa no seu pino',
      time: '1 dia atrás',
      icon: MessageCircle,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      unread: false,
    },
  ];

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/30 z-40" onClick={onClose}></div>
      <div className="fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-2xl z-50 overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between">
          <h3 className="text-gray-900">Notificações</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Notifications List */}
        <div className="divide-y divide-gray-200">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-4 hover:bg-gray-50 cursor-pointer transition-colors ${
                notification.unread ? 'bg-blue-50/30' : ''
              }`}
            >
              <div className="flex gap-3">
                <div className={`w-10 h-10 ${notification.bgColor} rounded-full flex items-center justify-center flex-shrink-0`}>
                  <notification.icon className={`w-5 h-5 ${notification.color}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-1">
                    <h4 className="text-sm text-gray-900">{notification.title}</h4>
                    {notification.unread && (
                      <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 ml-2 mt-1"></div>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mb-1">{notification.description}</p>
                  <span className="text-xs text-gray-500">{notification.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {notifications.length === 0 && (
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-8 h-8 text-gray-400" />
            </div>
            <p className="text-gray-600">Nenhuma notificação</p>
          </div>
        )}
      </div>
    </>
  );
}
