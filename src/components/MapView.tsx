import { useEffect, useMemo, useRef, useState } from 'react';
import { Plus, Search, Filter } from 'lucide-react';
import { Badge } from './ui/badge';
import { Pin } from '../App';
import { useGoogleMaps } from '../hooks/useGoogleMaps';

interface MapViewProps {
  pins: Pin[];
  onPinClick: (pin: Pin) => void;
  onCreatePin: () => void;
  isLoggedIn: boolean;
}

const DEFAULT_CENTER = { lat: -23.55052, lng: -46.633308 };
const RADIUS_KM = 8;

export function MapView({ pins, onPinClick, onCreatePin, isLoggedIn }: MapViewProps) {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<google.maps.Map | null>(null);
  const userMarkerRef = useRef<google.maps.Marker | null>(null);
  const userCircleRef = useRef<google.maps.Circle | null>(null);
  const pinMarkersRef = useRef<google.maps.Marker[]>([]);

  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [geoError, setGeoError] = useState<string | null>(null);

  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string | undefined;
  const mapStatus = useGoogleMaps(apiKey);

  const nearbyPins = useMemo(() => {
    if (!userLocation) return pins;
    return pins.filter((pin) => distanceInKm(userLocation, { lat: pin.lat, lng: pin.lng }) <= RADIUS_KM);
  }, [pins, userLocation]);

  useEffect(() => {
    if (mapStatus !== 'ready' || mapRef.current || !mapContainerRef.current) return;

    mapRef.current = new google.maps.Map(mapContainerRef.current, {
      center: DEFAULT_CENTER,
      zoom: 13,
      disableDefaultUI: true,
      zoomControl: true,
      streetViewControl: false,
      mapTypeControl: false,
    });
  }, [mapStatus]);

  useEffect(() => {
    if (mapStatus !== 'ready') return;

    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        const coords = { lat: position.coords.latitude, lng: position.coords.longitude };
        setUserLocation(coords);
        setGeoError(null);
      },
      (error) => {
        setGeoError(error.message || 'Não foi possível obter sua localização.');
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 10000 }
    );

    return () => navigator.geolocation.clearWatch(watchId);
  }, [mapStatus]);

  useEffect(() => {
    if (!mapRef.current || !userLocation || mapStatus !== 'ready') return;

    mapRef.current.setCenter(userLocation);
    mapRef.current.setZoom(15);

    if (!userMarkerRef.current) {
      userMarkerRef.current = new google.maps.Marker({
        map: mapRef.current,
        position: userLocation,
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          scale: 10,
          fillColor: '#2563eb',
          fillOpacity: 1,
          strokeColor: '#ffffff',
          strokeWeight: 3,
        },
        title: 'Você está aqui',
      });
    } else {
      userMarkerRef.current.setPosition(userLocation);
    }

    if (!userCircleRef.current) {
      userCircleRef.current = new google.maps.Circle({
        map: mapRef.current,
        center: userLocation,
        radius: RADIUS_KM * 1000,
        fillColor: '#3b82f6',
        fillOpacity: 0.08,
        strokeColor: '#2563eb',
        strokeOpacity: 0.5,
        strokeWeight: 1,
      });
    } else {
      userCircleRef.current.setCenter(userLocation);
    }
  }, [userLocation, mapStatus]);

  useEffect(() => {
    if (!mapRef.current || mapStatus !== 'ready') return;

    pinMarkersRef.current.forEach((marker) => marker.setMap(null));
    pinMarkersRef.current = [];

    nearbyPins.forEach((pin) => {
      const marker = new google.maps.Marker({
        map: mapRef.current!,
        position: { lat: pin.lat, lng: pin.lng },
        title: pin.name,
        icon: {
          path: 'M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7z',
          fillColor: pin.type === 'business' ? '#3b82f6' : pin.type === 'public' ? '#22c55e' : '#a855f7',
          fillOpacity: 1,
          strokeColor: '#ffffff',
          strokeWeight: 2,
          scale: 1.2,
          anchor: new google.maps.Point(12, 24),
        },
      });

      marker.addListener('click', () => onPinClick(pin));
      pinMarkersRef.current.push(marker);
    });

    return () => {
      pinMarkersRef.current.forEach((marker) => marker.setMap(null));
      pinMarkersRef.current = [];
    };
  }, [nearbyPins, onPinClick, mapStatus]);

  return (
    <div className="relative w-full h-full">
      <div ref={mapContainerRef} className="absolute inset-0 rounded-2xl overflow-hidden bg-gray-100" />

      {mapStatus === 'error' && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/90 text-sm text-red-600">
          Configure a chave `VITE_GOOGLE_MAPS_API_KEY` para carregar o mapa.
        </div>
      )}

      {geoError && (
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 bg-white shadow-md rounded-full px-4 py-2 text-xs text-gray-700">
          {geoError}
        </div>
      )}

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
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 border border-blue-500/60 rounded-full"></div>
            <span className="text-xs text-gray-700">Raio {RADIUS_KM} km</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function distanceInKm(a: { lat: number; lng: number }, b: { lat: number; lng: number }) {
  const R = 6371;
  const dLat = toRad(b.lat - a.lat);
  const dLon = toRad(b.lng - a.lng);
  const lat1 = toRad(a.lat);
  const lat2 = toRad(b.lat);

  const sinDLat = Math.sin(dLat / 2);
  const sinDLon = Math.sin(dLon / 2);
  const c = sinDLat * sinDLat + sinDLon * sinDLon * Math.cos(lat1) * Math.cos(lat2);
  const d = 2 * Math.atan2(Math.sqrt(c), Math.sqrt(1 - c));
  return R * d;
}

function toRad(deg: number) {
  return (deg * Math.PI) / 180;
}
