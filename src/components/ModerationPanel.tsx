import { X, AlertTriangle, CheckCircle, XCircle, Flag } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Pin } from '../App';

interface ModerationPanelProps {
  isOpen: boolean;
  onClose: () => void;
  pins: Pin[];
  onModerate: (pinId: string, action: 'approved' | 'rejected') => void;
}

export function ModerationPanel({ isOpen, onClose, pins, onModerate }: ModerationPanelProps) {
  const reportedPins = pins.filter((pin) => pin.reported || pin.moderationStatus === 'pending');

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/30 z-40" onClick={onClose}></div>
      <div className="fixed top-0 right-0 h-full w-full sm:w-[500px] bg-white shadow-2xl z-50 overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-orange-500 to-red-500 p-6">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          <div className="flex items-center gap-3">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <AlertTriangle className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-white mb-1">Moderação</h3>
              <p className="text-white/80 text-sm">
                {reportedPins.length} pino(s) aguardando revisão
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          {reportedPins.length === 0 ? (
            <div className="py-12 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-gray-900 mb-2">Tudo em ordem!</h4>
              <p className="text-gray-600 text-sm">
                Não há pinos pendentes de moderação no momento.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {reportedPins.map((pin) => (
                <div key={pin.id} className="bg-white border-2 border-orange-200 rounded-xl p-4">
                  {/* Pin Info */}
                  <div className="flex items-start gap-3 mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        pin.type === 'business'
                          ? 'bg-blue-100'
                          : pin.type === 'public'
                          ? 'bg-green-100'
                          : 'bg-purple-100'
                      }`}
                    >
                      <Flag
                        className={`w-6 h-6 ${
                          pin.type === 'business'
                            ? 'text-blue-600'
                            : pin.type === 'public'
                            ? 'text-green-600'
                            : 'text-purple-600'
                        }`}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-gray-900">{pin.name}</h4>
                        <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                          {pin.type === 'business'
                            ? 'Negócio'
                            : pin.type === 'public'
                            ? 'Público'
                            : 'Pessoal'}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{pin.address}</p>
                      {pin.description && (
                        <p className="text-sm text-gray-700 bg-gray-50 rounded-lg p-2 mb-2">
                          {pin.description}
                        </p>
                      )}
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span>Por: {pin.createdBy}</span>
                        <span>
                          {new Date(pin.createdAt).toLocaleDateString('pt-BR')}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Report Info */}
                  <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5" />
                      <div>
                        <h5 className="text-sm text-red-900 mb-1">Motivo da denúncia</h5>
                        <p className="text-sm text-red-700">
                          Conteúdo inapropriado ou informações falsas reportadas por 3 usuários.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Stats */}
                  {pin.businessInfo && (
                    <div className="bg-gray-50 rounded-lg p-3 mb-4">
                      <div className="grid grid-cols-3 gap-2 text-center">
                        <div>
                          <div className="text-lg text-gray-900">{pin.stats.views}</div>
                          <div className="text-xs text-gray-600">Visualizações</div>
                        </div>
                        <div>
                          <div className="text-lg text-gray-900">{pin.stats.chatsStarted}</div>
                          <div className="text-xs text-gray-600">Conversas</div>
                        </div>
                        <div>
                          <div className="text-lg text-gray-900">{pin.stats.messages}</div>
                          <div className="text-xs text-gray-600">Mensagens</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Button
                      onClick={() => onModerate(pin.id, 'approved')}
                      variant="outline"
                      className="flex-1 border-green-300 text-green-700 hover:bg-green-50"
                    >
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Aprovar
                    </Button>
                    <Button
                      onClick={() => onModerate(pin.id, 'rejected')}
                      variant="outline"
                      className="flex-1 border-red-300 text-red-700 hover:bg-red-50"
                    >
                      <XCircle className="w-4 h-4 mr-2" />
                      Rejeitar
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Info Box */}
          <div className="mt-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4">
            <h4 className="text-gray-900 mb-3">Sobre a moderação</h4>
            <div className="space-y-2 text-sm text-gray-700">
              <p>
                • Pinos podem ser denunciados por usuários quando contêm informações falsas ou
                conteúdo inapropriado.
              </p>
              <p>• Após 3 denúncias, o pino entra automaticamente na fila de moderação.</p>
              <p>
                • Pinos rejeitados são removidos da plataforma e o criador é notificado.
              </p>
              <p>
                • Pinos aprovados voltam ao mapa e as denúncias são descartadas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
