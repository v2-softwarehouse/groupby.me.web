import { X, Award, TrendingUp, Trophy, Star, Zap } from 'lucide-react';
import { Badge } from './ui/badge';

interface RewardsPanelProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser: any;
}

export function RewardsPanel({ isOpen, onClose, currentUser }: RewardsPanelProps) {
  const achievements = [
    {
      id: 1,
      name: 'Primeira Conversa',
      description: 'Inicie sua primeira conversa em um pino',
      points: 10,
      icon: Star,
      unlocked: true,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
    },
    {
      id: 2,
      name: 'Criador de Comunidade',
      description: 'Crie 5 pinos diferentes',
      points: 50,
      icon: Trophy,
      unlocked: true,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      id: 3,
      name: 'Influenciador Local',
      description: 'Tenha 100 interações nos seus pinos',
      points: 100,
      icon: TrendingUp,
      unlocked: false,
      progress: 45,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      id: 4,
      name: 'Super Ativo',
      description: 'Envie 500 mensagens',
      points: 150,
      icon: Zap,
      unlocked: false,
      progress: 230,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
  ];

  const levels = [
    { level: 1, minPoints: 0, name: 'Iniciante', color: 'bg-gray-400' },
    { level: 2, minPoints: 50, name: 'Explorador', color: 'bg-blue-400' },
    { level: 3, minPoints: 150, name: 'Contribuidor', color: 'bg-purple-400' },
    { level: 4, minPoints: 300, name: 'Líder', color: 'bg-yellow-400' },
    { level: 5, minPoints: 500, name: 'Lenda', color: 'bg-red-400' },
  ];

  const currentLevel = levels.find((l) => currentUser?.points >= l.minPoints && (levels[l.level] ? currentUser?.points < levels[l.level].minPoints : true)) || levels[0];
  const nextLevel = levels[currentLevel.level] || null;
  const progress = nextLevel ? ((currentUser?.points - currentLevel.minPoints) / (nextLevel.minPoints - currentLevel.minPoints)) * 100 : 100;

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/30 z-40" onClick={onClose}></div>
      <div className="fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-2xl z-50 overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-yellow-400 to-orange-500 p-6">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>
          
          <div className="flex items-center gap-3 mb-6">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <Award className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-white mb-1">Recompensas</h3>
              <p className="text-white/80 text-sm">{currentUser?.name}</p>
            </div>
          </div>

          {/* Points & Level */}
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
            <div className="flex items-center justify-between mb-3">
              <div>
                <div className="text-white/80 text-sm mb-1">Nível {currentUser?.level}</div>
                <div className="text-white text-2xl">{currentUser?.points} pontos</div>
              </div>
              <Badge className={`${currentLevel.color} text-white`}>
                {currentLevel.name}
              </Badge>
            </div>
            
            {nextLevel && (
              <>
                <div className="w-full bg-white/30 rounded-full h-2 mb-2">
                  <div
                    className="bg-white rounded-full h-2 transition-all"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <div className="text-white/80 text-xs">
                  {nextLevel.minPoints - currentUser?.points} pontos para o próximo nível
                </div>
              </>
            )}
          </div>
        </div>

        {/* Achievements */}
        <div className="p-4">
          <h4 className="text-gray-900 mb-4">Conquistas</h4>
          <div className="space-y-3">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className={`p-4 rounded-xl border-2 transition-all ${
                  achievement.unlocked
                    ? `${achievement.bgColor} border-${achievement.color.replace('text-', '')}`
                    : 'bg-gray-50 border-gray-200 opacity-60'
                }`}
              >
                <div className="flex gap-3">
                  <div
                    className={`w-12 h-12 ${
                      achievement.unlocked ? achievement.bgColor : 'bg-gray-200'
                    } rounded-xl flex items-center justify-center flex-shrink-0`}
                  >
                    <achievement.icon
                      className={`w-6 h-6 ${achievement.unlocked ? achievement.color : 'text-gray-400'}`}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h5 className="text-sm text-gray-900">{achievement.name}</h5>
                      {achievement.unlocked && (
                        <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                          +{achievement.points} pts
                        </Badge>
                      )}
                    </div>
                    <p className="text-xs text-gray-600 mb-2">{achievement.description}</p>
                    
                    {!achievement.unlocked && achievement.progress !== undefined && (
                      <div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5 mb-1">
                          <div
                            className="bg-blue-600 rounded-full h-1.5"
                            style={{ width: `${(achievement.progress / 100) * 100}%` }}
                          ></div>
                        </div>
                        <div className="text-xs text-gray-500">
                          {achievement.progress}/100
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* How to Earn Points */}
          <div className="mt-6 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-4">
            <h4 className="text-gray-900 mb-3">Como ganhar pontos</h4>
            <div className="space-y-2 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-xs">
                  +5
                </div>
                <span>Por cada conversa iniciada</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-xs">
                  +10
                </div>
                <span>Por cada pino criado</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center text-xs">
                  +20
                </div>
                <span>Por cada 10 interações nos seus pinos</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center text-xs">
                  +50
                </div>
                <span>Por cada conquista desbloqueada</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
