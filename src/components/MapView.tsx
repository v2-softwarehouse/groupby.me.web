import { Plus, Search, Filter, MapPin as MapPinIcon } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Pin } from '../App';

interface MapViewProps {
  pins: Pin[];
  onPinClick: (pin: Pin) => void;
  onCreatePin: () => void;
  isLoggedIn: boolean;
}

export function MapView({ pins, onPinClick, onCreatePin, isLoggedIn }: MapViewProps) {
  return (
    <div className="relative w-full h-full">
      {/* Map Container - Simulated Google Maps */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50">
        {/* Grid pattern to simulate map */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(229, 231, 235, 0.3) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(229, 231, 235, 0.3) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        ></div>

        {/* Map Label */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-gray-200">
          <p className="text-sm text-gray-600">
            <MapPinIcon className="w-4 h-4 inline mr-2" />
            Google Maps será integrado aqui via API
          </p>
        </div>

        {/* Render Pins */}
        {pins.map((pin) => (
          <MapPin key={pin.id} pin={pin} onClick={() => onPinClick(pin)} />
        ))}

        {/* Center "You are here" marker */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            <div className="w-16 h-16 rounded-full bg-blue-600 border-4 border-white shadow-xl flex items-center justify-center animate-pulse">
              <MapPinIcon className="w-8 h-8 text-white fill-white" />
            </div>
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-900 text-white px-3 py-1 rounded-full text-xs">
              Você está aqui
            </div>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="absolute top-4 left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-2xl z-10">
        <div className="bg-white rounded-full shadow-lg border border-gray-200 flex items-center p-2">
          <Search className="w-5 h-5 text-gray-400 ml-2" />
          <input
            type="text"
            placeholder="Buscar endereço, estabelecimento ou serviço..."
            className="flex-1 px-4 py-2 focus:outline-none"
          />
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Filter className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Filter Chips */}
      <div className="absolute top-20 left-4 flex flex-wrap gap-2 z-10">
        <Badge variant="default" className="bg-white text-gray-900 hover:bg-gray-100 cursor-pointer">
          Todos
        </Badge>
        <Badge variant="outline" className="bg-white/90 backdrop-blur-sm cursor-pointer">
          Comércios
        </Badge>
        <Badge variant="outline" className="bg-white/90 backdrop-blur-sm cursor-pointer">
          Serviços públicos
        </Badge>
        <Badge variant="outline" className="bg-white/90 backdrop-blur-sm cursor-pointer">
          Pessoas
        </Badge>
      </div>

      {/* Create Pin Button */}
      {isLoggedIn && (
        <button
          onClick={onCreatePin}
          className="absolute bottom-6 right-6 w-14 h-14 bg-gradient-to-br from-blue-600 to-green-600 text-white rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-110 flex items-center justify-center z-10"
        >
          <Plus className="w-7 h-7" />
        </button>
      )}

      {/* Legend */}
      <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-200 z-10">
        <h4 className="text-sm text-gray-900 mb-3">Legenda</h4>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-xs text-gray-700">Comércios</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-xs text-gray-700">Serviços públicos</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
            <span className="text-xs text-gray-700">Pessoas/Grupos</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function MapPin({ pin, onClick }: { pin: Pin; onClick: () => void }) {
  // Calculate position based on pin index (simulated positioning)
  const positions = [
    { top: '30%', left: '35%' },
    { top: '40%', left: '65%' },
    { top: '60%', left: '40%' },
    { top: '35%', left: '75%' },
    { top: '70%', left: '30%' },
  ];

  const position = positions[parseInt(pin.id) % positions.length];

  const colorClass =
    pin.type === 'business'
      ? 'bg-blue-500'
      : pin.type === 'public'
      ? 'bg-green-500'
      : 'bg-purple-500';

  return (
    <div
      className="absolute group cursor-pointer z-10"
      style={{ top: position.top, left: position.left, transform: 'translate(-50%, -100%)' }}
      onClick={onClick}
    >
      {/* Pin Shape */}
      <div
        className={`w-10 h-10 ${colorClass} rounded-full border-2 border-white shadow-lg hover:scale-110 transition-transform relative`}
      >
        {/* Stats Badge */}
        {pin.stats.chatsStarted > 0 && (
          <div className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
            {pin.stats.chatsStarted > 99 ? '99+' : pin.stats.chatsStarted}
          </div>
        )}
      </div>

      {/* Tooltip */}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-gray-900 text-white px-3 py-2 rounded-lg text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <div className="font-medium">{pin.name}</div>
        <div className="text-gray-300 text-xs">{pin.address}</div>
        {pin.reported && (
          <div className="text-yellow-400 text-xs mt-1">⚠ Em moderação</div>
        )}
      </div>
    </div>
  );
}
