import { ShoppingCart, Package, Wrench } from 'lucide-react';
import { Badge } from './ui/badge';

interface InterestNotificationProps {
  userName: string;
  products?: { name: string; quantity: number }[];
  services?: { name: string }[];
}

export function InterestNotification({ userName, products = [], services = [] }: InterestNotificationProps) {
  if (products.length === 0 && services.length === 0) return null;

  return (
    <div className="bg-gradient-to-r from-blue-50 to-green-50 border-2 border-blue-300 rounded-xl p-4 mb-4">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
          <ShoppingCart className="w-5 h-5 text-white" />
        </div>
        <div className="flex-1">
          <h4 className="text-gray-900 mb-2">
            {userName} demonstrou interesse!
          </h4>
          
          {products.length > 0 && (
            <div className="mb-3">
              <div className="flex items-center gap-2 mb-2">
                <Package className="w-4 h-4 text-blue-600" />
                <span className="text-sm text-gray-700">Produtos:</span>
              </div>
              <div className="space-y-1">
                {products.map((product, index) => (
                  <div key={index} className="flex items-center justify-between bg-white rounded-lg px-3 py-2">
                    <span className="text-sm text-gray-900">{product.name}</span>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                      Qtd: {product.quantity}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          )}

          {services.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Wrench className="w-4 h-4 text-green-600" />
                <span className="text-sm text-gray-700">Serviços:</span>
              </div>
              <div className="space-y-1">
                {services.map((service, index) => (
                  <div key={index} className="bg-white rounded-lg px-3 py-2">
                    <span className="text-sm text-gray-900">{service.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <p className="text-xs text-gray-600 mt-3">
            💬 Responda para fornecer mais informações sobre disponibilidade e preços!
          </p>
        </div>
      </div>
    </div>
  );
}
