import { Menu, Bell, LogIn, User, Award } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface TopBarProps {
  isLoggedIn: boolean;
  currentUser: any;
  onMenuClick: () => void;
  onNotificationClick: () => void;
  onLogin: () => void;
  onLogout: () => void;
}

export function TopBar({
  isLoggedIn,
  currentUser,
  onMenuClick,
  onNotificationClick,
  onLogin,
  onLogout,
}: TopBarProps) {
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm z-30">
      <div className="px-4 py-3 flex items-center justify-between">
        {/* Left - Menu & Logo */}
        <div className="flex items-center gap-4">
          <button
            onClick={onMenuClick}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm">G</span>
            </div>
            <span className="text-gray-900 hidden sm:inline">
              Groupby.Me
            </span>
          </div>
        </div>

        {/* Right - User Actions */}
        <div className="flex items-center gap-2">
          {isLoggedIn ? (
            <>
              {/* Notifications */}
              <button
                onClick={onNotificationClick}
                className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Bell className="w-6 h-6 text-gray-700" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              {/* User Info */}
              <div className="hidden sm:flex items-center gap-3 ml-2 px-3 py-2 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-blue-600" />
                  <span className="text-sm text-gray-700">
                    Nível {currentUser?.level}
                  </span>
                </div>
                <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                  {currentUser?.points} pts
                </Badge>
              </div>

              <div className="flex items-center gap-2 ml-2">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">
                    {currentUser?.name?.charAt(0) || 'U'}
                  </span>
                </div>
                <span className="text-sm text-gray-900 hidden md:inline">
                  {currentUser?.name}
                </span>
              </div>
            </>
          ) : (
            <Button onClick={onLogin} className="bg-blue-600 hover:bg-blue-700">
              <LogIn className="w-4 h-4 mr-2" />
              Entrar
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
