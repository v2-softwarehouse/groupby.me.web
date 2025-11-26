import { X, MapPin, Phone, Mail, Globe, Clock, Tag, MessageCircle, ExternalLink, Plus, Minus, ShoppingCart } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Pin } from '../App';
import { useState } from 'react';

interface PinDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  pin: Pin;
  onStartChat: (withInterest?: { products: any[], services: any[] }) => void;
  isLoggedIn: boolean;
  onLogin: () => void;
}

export function PinDetailsModal({ isOpen, onClose, pin, onStartChat, isLoggedIn, onLogin }: PinDetailsModalProps) {
  const [selectedProducts, setSelectedProducts] = useState<{[key: string]: number}>({});
  const [selectedServices, setSelectedServices] = useState<{[key: string]: boolean}>({});
  const [showCart, setShowCart] = useState(false);

  if (!isOpen) return null;

  const colorClass =
    pin.type === 'business' ? 'from-blue-600 to-blue-700' : 'from-green-600 to-green-700';

  const isCommerce = pin.type === 'business';
  const hasProducts = pin.businessInfo?.products && pin.businessInfo.products.length > 0;
  const hasServices = pin.businessInfo?.services && pin.businessInfo.services.length > 0;

  const handleProductQuantityChange = (product: string, delta: number) => {
    setSelectedProducts(prev => {
      const current = prev[product] || 0;
      const newValue = Math.max(0, current + delta);
      if (newValue === 0) {
        const { [product]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [product]: newValue };
    });
  };

  const handleServiceToggle = (service: string) => {
    setSelectedServices(prev => ({
      ...prev,
      [service]: !prev[service]
    }));
  };

  const getTotalItems = () => {
    const productsCount = Object.values(selectedProducts).reduce((sum, qty) => sum + qty, 0);
    const servicesCount = Object.values(selectedServices).filter(Boolean).length;
    return productsCount + servicesCount;
  };

  const handleStartChatWithInterest = () => {
    const interest = {
      products: Object.entries(selectedProducts).map(([name, quantity]) => ({ name, quantity })),
      services: Object.entries(selectedServices)
        .filter(([_, selected]) => selected)
        .map(([name]) => ({ name }))
    };
    
    if (interest.products.length > 0 || interest.services.length > 0) {
      onStartChat(interest);
    } else {
      onStartChat();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header with close button */}
        <div className={`bg-gradient-to-r ${colorClass} p-6 relative`}>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors backdrop-blur-sm"
            aria-label="Fechar"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          
          <div className="flex items-start gap-4 mt-2">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <MapPin className="w-10 h-10 text-white" />
            </div>
            <div className="flex-1 pr-12">
              <h2 className="text-white mb-2">{pin.name}</h2>
              <p className="text-white/80 text-sm mb-3">{pin.description}</p>
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <MapPin className="w-4 h-4" />
                {pin.address}
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <div className="text-2xl text-gray-900 mb-1">{pin.stats.views}</div>
              <div className="text-xs text-gray-600">Visualizações</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <div className="text-2xl text-gray-900 mb-1">{pin.stats.chatsStarted}</div>
              <div className="text-xs text-gray-600">Conversas iniciadas</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <div className="text-2xl text-gray-900 mb-1">{pin.stats.messages}</div>
              <div className="text-xs text-gray-600">Mensagens trocadas</div>
            </div>
          </div>

          {/* Contact Information */}
          {pin.businessInfo && (
            <div className="space-y-6">
              <div>
                <h3 className="text-gray-900 mb-4">Informações de contato</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-700">
                    <Phone className="w-5 h-5 text-gray-400" />
                    <span>{pin.businessInfo.phone}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <Mail className="w-5 h-5 text-gray-400" />
                    <span>{pin.businessInfo.email}</span>
                  </div>
                  {pin.businessInfo.website && (
                    <div className="flex items-center gap-3 text-gray-700">
                      <Globe className="w-5 h-5 text-gray-400" />
                      <a
                        href={`https://${pin.businessInfo.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline flex items-center gap-1"
                      >
                        {pin.businessInfo.website}
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  )}
                  {pin.businessInfo.hours && (
                    <div className="flex items-center gap-3 text-gray-700">
                      <Clock className="w-5 h-5 text-gray-400" />
                      <span>{pin.businessInfo.hours}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* CNPJ for businesses */}
              {pin.businessInfo.cnpj && (
                <div>
                  <h4 className="text-sm text-gray-600 mb-2">CNPJ</h4>
                  <p className="text-gray-900">{pin.businessInfo.cnpj}</p>
                </div>
              )}

              {/* Categories */}
              {pin.businessInfo.categories && pin.businessInfo.categories.length > 0 && (
                <div>
                  <h3 className="text-gray-900 mb-3">Categorias</h3>
                  <div className="flex flex-wrap gap-2">
                    {pin.businessInfo.categories.map((category, index) => (
                      <Badge key={index} variant="secondary">
                        <Tag className="w-3 h-3 mr-1" />
                        {category}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Products Catalog (iFood-like) */}
              {isCommerce && hasProducts && (
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-gray-900">Produtos disponíveis</h3>
                    {getTotalItems() > 0 && (
                      <Badge className="bg-blue-600 text-white">
                        <ShoppingCart className="w-3 h-3 mr-1" />
                        {getTotalItems()} {getTotalItems() === 1 ? 'item' : 'itens'}
                      </Badge>
                    )}
                  </div>
                  <div className="space-y-3">
                    {pin.businessInfo.products!.map((product, index) => (
                      <div
                        key={index}
                        className={`border-2 rounded-xl p-4 transition-all ${
                          selectedProducts[product]
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-200 hover:border-blue-300'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <h4 className="text-gray-900 mb-1">{product}</h4>
                            <p className="text-sm text-gray-600">
                              Disponível para consulta
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            {selectedProducts[product] ? (
                              <>
                                <button
                                  onClick={() => handleProductQuantityChange(product, -1)}
                                  className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                                >
                                  <Minus className="w-4 h-4" />
                                </button>
                                <span className="w-8 text-center text-gray-900">
                                  {selectedProducts[product]}
                                </span>
                                <button
                                  onClick={() => handleProductQuantityChange(product, 1)}
                                  className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                                >
                                  <Plus className="w-4 h-4" />
                                </button>
                              </>
                            ) : (
                              <button
                                onClick={() => handleProductQuantityChange(product, 1)}
                                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                              >
                                <Plus className="w-4 h-4" />
                                Adicionar
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Services Catalog */}
              {isCommerce && hasServices && (
                <div>
                  <h3 className="text-gray-900 mb-4">Serviços disponíveis</h3>
                  <div className="space-y-3">
                    {pin.businessInfo.services!.map((service, index) => (
                      <div
                        key={index}
                        className={`border-2 rounded-xl p-4 transition-all cursor-pointer ${
                          selectedServices[service]
                            ? 'border-green-500 bg-green-50'
                            : 'border-gray-200 hover:border-green-300'
                        }`}
                        onClick={() => handleServiceToggle(service)}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <h4 className="text-gray-900 mb-1">{service}</h4>
                            <p className="text-sm text-gray-600">
                              Clique para demonstrar interesse
                            </p>
                          </div>
                          <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                            selectedServices[service]
                              ? 'bg-green-600 border-green-600'
                              : 'border-gray-300'
                          }`}>
                            {selectedServices[service] && (
                              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Info for public services */}
              {!isCommerce && hasServices && (
                <div>
                  <h3 className="text-gray-900 mb-3">Serviços</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {pin.businessInfo.services!.map((service, index) => (
                      <div key={index} className="bg-green-50 rounded-lg px-3 py-2 text-sm text-gray-700">
                        • {service}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Interest Summary */}
          {isCommerce && getTotalItems() > 0 && (
            <div className="mt-6 bg-gradient-to-r from-blue-50 to-green-50 border-2 border-blue-300 rounded-xl p-4">
              <h4 className="text-gray-900 mb-3 flex items-center gap-2">
                <ShoppingCart className="w-5 h-5 text-blue-600" />
                Seu interesse será enviado
              </h4>
              <div className="space-y-2 text-sm">
                {Object.entries(selectedProducts).map(([product, quantity]) => (
                  <div key={product} className="flex items-center justify-between text-gray-700">
                    <span>• {product}</span>
                    <Badge variant="secondary">Qtd: {quantity}</Badge>
                  </div>
                ))}
                {Object.entries(selectedServices)
                  .filter(([_, selected]) => selected)
                  .map(([service]) => (
                    <div key={service} className="flex items-center text-gray-700">
                      <span>• {service}</span>
                    </div>
                  ))}
              </div>
              <p className="text-xs text-gray-600 mt-3">
                💡 O estabelecimento receberá uma notificação com seus interesses e poderá responder via chat.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200 bg-white">
          {isLoggedIn ? (
            <Button
              onClick={handleStartChatWithInterest}
              className={`w-full bg-gradient-to-r ${colorClass}`}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              {getTotalItems() > 0 
                ? `Iniciar conversa e enviar interesse (${getTotalItems()} ${getTotalItems() === 1 ? 'item' : 'itens'})`
                : 'Iniciar conversa (1:1)'
              }
            </Button>
          ) : (
            <div className="text-center">
              <p className="text-gray-600 mb-3">Faça login para {getTotalItems() > 0 ? 'enviar seu interesse e ' : ''}iniciar uma conversa</p>
              <Button className="bg-blue-600 hover:bg-blue-700" onClick={onLogin}>
                Entrar ou criar conta
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
