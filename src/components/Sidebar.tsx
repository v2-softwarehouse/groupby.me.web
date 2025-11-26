import { X, Home, Info, Users, Building2, Award, ShieldAlert, Settings, LogOut, HelpCircle } from 'lucide-react';
import { Button } from './ui/button';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  isLoggedIn: boolean;
  currentUser: any;
  onOpenRewards: () => void;
  onOpenModeration: () => void;
}

export function Sidebar({
  isOpen,
  onClose,
  isLoggedIn,
  currentUser,
  onOpenRewards,
  onOpenModeration,
}: SidebarProps) {
  const menuItems = [
    { icon: Home, label: 'Início', href: '#' },
    { icon: Info, label: 'Como funciona', href: '#como-funciona' },
    { icon: Users, label: 'Para pessoas', href: '#pessoas' },
    { icon: Building2, label: 'Para negócios', href: '#negocios' },
    { icon: Building2, label: 'Para serviços públicos', href: '#servicos' },
    { icon: HelpCircle, label: 'FAQ', href: '#faq' },
  ];

  const userMenuItems = isLoggedIn ? [
    { icon: Award, label: 'Minhas recompensas', action: onOpenRewards },
    { icon: ShieldAlert, label: 'Moderação', action: onOpenModeration },
    { icon: Settings, label: 'Configurações', href: '#config' },
  ] : [];

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        onClick={onClose}
      ></div>

      {/* Sidebar */}
      <div className="fixed top-0 left-0 h-full w-80 bg-white shadow-2xl z-50 overflow-y-auto">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center">
                <span className="text-white">G</span>
              </div>
              <span className="text-gray-900">Groupby.Me</span>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          {isLoggedIn && currentUser && (
            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white">{currentUser.name.charAt(0)}</span>
                </div>
                <div>
                  <div className="text-gray-900">{currentUser.name}</div>
                  <div className="text-sm text-gray-600">{currentUser.email}</div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-700">
                  Nível {currentUser.level}
                </div>
                <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
                  {currentUser.points} pontos
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Menu */}
        <nav className="p-4">
          <div className="space-y-1">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={onClose}
                className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </a>
            ))}
          </div>

          {isLoggedIn && userMenuItems.length > 0 && (
            <>
              <div className="my-4 border-t border-gray-200"></div>
              <div className="space-y-1">
                {userMenuItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => {
                      if (item.action) item.action();
                      else onClose();
                    }}
                    className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </>
          )}
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 bg-white">
          <div className="text-xs text-gray-500 mb-3">
            © 2024 Groupby.Me • Internet 4.0 • Figital
          </div>
          {isLoggedIn && (
            <Button variant="outline" className="w-full">
              <LogOut className="w-4 h-4 mr-2" />
              Sair
            </Button>
          )}
        </div>
      </div>
    </>
  );
}
