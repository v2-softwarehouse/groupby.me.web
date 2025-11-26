import { X, MapPin, Search, Building2, User, Users } from 'lucide-react';
import { Button } from './ui/button';
import { useEffect, useRef, useState } from 'react';

interface CreatePinModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (pinData: any) => void;
  currentUser: any;
}

export function CreatePinModal({ isOpen, onClose, onCreate, currentUser }: CreatePinModalProps) {
  const [step, setStep] = useState(1);
  const [pinType, setPinType] = useState<'personal' | 'business' | 'public'>('personal');
  const [searchAddress, setSearchAddress] = useState('');
  const [selectedAddress, setSelectedAddress] = useState<any>(null);
  const [pinData, setPinData] = useState({
    name: '',
    description: '',
    phone: '',
    email: '',
    cnpj: '',
    website: '',
    hours: '',
    categories: [] as string[],
    products: '',
    services: '',
  });
  const inputRef = useRef<HTMLInputElement | null>(null);
  const placesServiceRef = useRef<google.maps.places.PlacesService | null>(null);
  const autocompleteServiceRef = useRef<google.maps.places.AutocompleteService | null>(null);
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string | undefined;
  const [mapsError, setMapsError] = useState<string | null>(null);
  const [predictions, setPredictions] = useState<{ placeId: string; mainText: string; secondaryText?: string }[]>([]);
  const [isFetchingPredictions, setIsFetchingPredictions] = useState(false);
  const sessionTokenRef = useRef<string>(crypto.randomUUID());

  const handleSubmit = () => {
    onCreate({
      type: pinType,
      name: pinData.name,
      lat: selectedAddress?.lat || -23.550520,
      lng: selectedAddress?.lng || -46.633308,
      address: selectedAddress?.address || searchAddress,
      description: pinData.description,
      businessInfo:
        pinType !== 'personal'
          ? {
              cnpj: pinData.cnpj,
              phone: pinData.phone,
              email: pinData.email,
              website: pinData.website,
              hours: pinData.hours,
              categories: pinData.categories,
              products: pinData.products.split(',').map(p => p.trim()),
              services: pinData.services.split(',').map(s => s.trim()),
            }
          : undefined,
    });
    
    // Reset form
    setStep(1);
    setPinData({
      name: '',
      description: '',
      phone: '',
      email: '',
      cnpj: '',
      website: '',
      hours: '',
      categories: [],
      products: '',
      services: '',
    });
  };

  // Simulate Google Places API search
  useEffect(() => {
    if (!apiKey) {
      setMapsError('Configure VITE_GOOGLE_MAPS_API_KEY com acesso ao Places API (New).');
    }
  }, [apiKey]);

  useEffect(() => {
    if (!apiKey) return;
    if (!searchAddress || searchAddress.length < 3) {
      setPredictions([]);
      return;
    }

    setIsFetchingPredictions(true);
    const controller = new AbortController();

    const fetchPredictions = async () => {
      try {
        const response = await fetch('https://places.googleapis.com/v1/places:autocomplete', {
          method: 'POST',
          signal: controller.signal,
          headers: {
            'Content-Type': 'application/json',
            'X-Goog-Api-Key': apiKey,
            'X-Goog-FieldMask': 'predictions.placeId,predictions.text',
            'X-Goog-Session-Token': sessionTokenRef.current,
          },
          body: JSON.stringify({
            input: searchAddress,
            types: ['route', 'street_address'],
          }),
        });

        if (!response.ok) {
          throw new Error('Falha ao consultar Places API (New)');
        }

        const data = await response.json();
        const parsed = (data?.predictions || []).map((p: any) => ({
          placeId: p.placeId,
          mainText: p.text?.primaryText || p.text?.text || '',
          secondaryText: p.text?.secondaryText || '',
        }));

        setPredictions(parsed);
        setMapsError(parsed.length === 0 ? 'Nenhum endereço encontrado. Refine a busca.' : null);
      } catch (error: any) {
        if (error.name !== 'AbortError') {
          setMapsError(error.message || 'Erro ao buscar endereços.');
          setPredictions([]);
        }
      } finally {
        setIsFetchingPredictions(false);
      }
    };

    const timeoutId = window.setTimeout(fetchPredictions, 300);
    return () => {
      controller.abort();
      window.clearTimeout(timeoutId);
    };
  }, [apiKey, searchAddress]);

  const handlePredictionSelect = async (prediction: { placeId: string; mainText: string; secondaryText?: string }) => {
    if (!apiKey) return;
    try {
      const response = await fetch(`https://places.googleapis.com/v1/places/${prediction.placeId}`, {
        method: 'GET',
        headers: {
          'X-Goog-Api-Key': apiKey,
          'X-Goog-FieldMask': 'id,displayName,formattedAddress,location',
          'X-Goog-Session-Token': sessionTokenRef.current,
        },
      });
      if (!response.ok) {
        throw new Error('Não foi possível obter detalhes do endereço.');
      }
      const place = await response.json();
      const lat = place?.location?.latitude;
      const lng = place?.location?.longitude;
      const address = place?.formattedAddress || place?.displayName?.text || searchAddress;

      if (lat === undefined || lng === undefined) {
        throw new Error('Endereço sem coordenadas.');
      }

      setSelectedAddress({ address, lat, lng });
      setSearchAddress(address);
      setPredictions([]);
      setMapsError(null);

      // renovar token após seleção
      sessionTokenRef.current = crypto.randomUUID();
    } catch (error: any) {
      setMapsError(error.message || 'Erro ao obter detalhes do endereço.');
    }
  };

  const handleManualSubmit = () => {
    if (predictions.length > 0) {
      handlePredictionSelect(predictions[0]);
    } else if (searchAddress.length >= 3) {
      setMapsError('Selecione uma sugestão da lista para validar o endereço.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 p-6 flex items-center justify-between">
          <h2 className="text-white">Criar novo pino</h2>
          <button
            onClick={onClose}
            className="w-10 h-10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Progress */}
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex items-center gap-2">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center flex-1">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    step >= s ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {s}
                </div>
                {s < 3 && (
                  <div className={`flex-1 h-1 mx-2 ${step > s ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-sm text-gray-600">
            <span>Tipo</span>
            <span>Localização</span>
            <span>Detalhes</span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {/* Step 1: Type Selection */}
          {step === 1 && (
            <div className="space-y-4">
              <h3 className="text-gray-900 mb-4">Selecione o tipo de pino</h3>
              
              <button
                onClick={() => setPinType('personal')}
                className={`w-full p-6 rounded-xl border-2 transition-all ${
                  pinType === 'personal'
                    ? 'border-purple-500 bg-purple-50'
                    : 'border-gray-200 hover:border-purple-300'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="flex-1 text-left">
                    <h4 className="text-gray-900 mb-1">Pessoa física / Grupo</h4>
                    <p className="text-sm text-gray-600">
                      Crie um pino para você ou um grupo de pessoas. Chat em grupo (n:n).
                    </p>
                  </div>
                </div>
              </button>

              <button
                onClick={() => setPinType('business')}
                className={`w-full p-6 rounded-xl border-2 transition-all ${
                  pinType === 'business'
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-blue-300'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1 text-left">
                    <h4 className="text-gray-900 mb-1">Negócio / Empresa</h4>
                    <p className="text-sm text-gray-600">
                      Cadastre seu estabelecimento comercial. Chat privado (1:1) com clientes.
                    </p>
                  </div>
                </div>
              </button>

              <button
                onClick={() => setPinType('public')}
                className={`w-full p-6 rounded-xl border-2 transition-all ${
                  pinType === 'public'
                    ? 'border-green-500 bg-green-50'
                    : 'border-gray-200 hover:border-green-300'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="flex-1 text-left">
                    <h4 className="text-gray-900 mb-1">Órgão público</h4>
                    <p className="text-sm text-gray-600">
                      Registre um serviço público. Chat privado (1:1) com cidadãos.
                    </p>
                  </div>
                </div>
              </button>
            </div>
          )}

          {/* Step 2: Address Search */}
          {step === 2 && (
            <div className="space-y-4">
              <h3 className="text-gray-900 mb-4">Encontre o endereço</h3>
              
              <div className="flex gap-2">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    ref={inputRef}
                    value={searchAddress}
                    onChange={(e) => setSearchAddress(e.target.value)}
                    placeholder="Digite o nome da rua..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    disabled={mapsStatus === 'loading'}
                  />
                </div>
                <Button
                  className="bg-blue-600 hover:bg-blue-700"
                  type="button"
                  onClick={handleManualSubmit}
                  disabled={mapsStatus !== 'ready'}
                >
                  Buscar
                </Button>
              </div>

              {mapsStatus !== 'ready' && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm text-blue-800">
                  Carregando Google Places...
                </div>
              )}

              {mapsError && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-sm text-red-700">
                  {mapsError}
                </div>
              )}

              {isFetchingPredictions && searchAddress.length >= 3 && (
                <div className="text-xs text-gray-500 mt-2">Buscando sugestões...</div>
              )}

              {predictions.length > 0 && (
                <div className="mt-3 border border-gray-200 rounded-lg divide-y max-h-48 overflow-y-auto bg-white shadow-sm">
                  {predictions.map((prediction) => (
                    <button
                      key={prediction.place_id}
                      type="button"
                      className="w-full text-left px-4 py-3 hover:bg-gray-50 flex items-start gap-3"
                      onClick={() => handlePredictionSelect(prediction)}
                    >
                      <MapPin className="w-5 h-5 text-green-600 mt-0.5" />
                      <div>
                        <div className="text-gray-900 text-sm font-medium">
                          {prediction.structured_formatting.main_text}
                        </div>
                        <div className="text-xs text-gray-600">
                          {prediction.structured_formatting.secondary_text}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              )}

              {selectedAddress && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-green-600 mt-1" />
                    <div className="flex-1">
                      <h4 className="text-gray-900 mb-1">Endereço encontrado</h4>
                      <p className="text-sm text-gray-600">{selectedAddress.address}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        Lat: {selectedAddress.lat.toFixed(6)}, Lng: {selectedAddress.lng.toFixed(6)}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Step 3: Details */}
          {step === 3 && (
            <div className="space-y-4">
              <h3 className="text-gray-900 mb-4">Informações do pino</h3>

              <div>
                <label className="block text-sm text-gray-700 mb-2">Nome *</label>
                <input
                  type="text"
                  value={pinData.name}
                  onChange={(e) => setPinData({ ...pinData, name: e.target.value })}
                  placeholder={
                    pinType === 'personal'
                      ? 'Ex: Grupo Moradores da Rua X'
                      : 'Ex: Farmácia Central'
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">Descrição</label>
                <textarea
                  value={pinData.description}
                  onChange={(e) => setPinData({ ...pinData, description: e.target.value })}
                  placeholder="Descreva brevemente..."
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              {pinType !== 'personal' && (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-700 mb-2">Telefone *</label>
                      <input
                        type="tel"
                        value={pinData.phone}
                        onChange={(e) => setPinData({ ...pinData, phone: e.target.value })}
                        placeholder="(11) 98765-4321"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-700 mb-2">E-mail *</label>
                      <input
                        type="email"
                        value={pinData.email}
                        onChange={(e) => setPinData({ ...pinData, email: e.target.value })}
                        placeholder="contato@exemplo.com"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  {pinType === 'business' && (
                    <div>
                      <label className="block text-sm text-gray-700 mb-2">CNPJ *</label>
                      <input
                        type="text"
                        value={pinData.cnpj}
                        onChange={(e) => setPinData({ ...pinData, cnpj: e.target.value })}
                        placeholder="00.000.000/0000-00"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  )}

                  <div>
                    <label className="block text-sm text-gray-700 mb-2">Horário de funcionamento</label>
                    <input
                      type="text"
                      value={pinData.hours}
                      onChange={(e) => setPinData({ ...pinData, hours: e.target.value })}
                      placeholder="Seg-Sex: 8h-18h, Sáb: 8h-12h"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-700 mb-2">
                      {pinType === 'business' ? 'Produtos' : 'Serviços'} (separados por vírgula)
                    </label>
                    <input
                      type="text"
                      value={pinType === 'business' ? pinData.products : pinData.services}
                      onChange={(e) =>
                        setPinData({
                          ...pinData,
                          [pinType === 'business' ? 'products' : 'services']: e.target.value,
                        })
                      }
                      placeholder={
                        pinType === 'business'
                          ? 'Medicamentos, Cosméticos, Higiene'
                          : 'Atendimento emergencial, Consultas, Exames'
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200 flex items-center justify-between">
          {step > 1 && (
            <Button variant="outline" onClick={() => setStep(step - 1)}>
              Voltar
            </Button>
          )}
          <div className="flex-1"></div>
          {step < 3 ? (
            <Button
              onClick={() => setStep(step + 1)}
              disabled={step === 2 && !selectedAddress}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Próximo
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              disabled={!pinData.name || (pinType !== 'personal' && (!pinData.phone || !pinData.email))}
              className="bg-green-600 hover:bg-green-700"
            >
              Criar pino
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
