import { 
  ArrowLeft, 
  Store, 
  Settings, 
  Package, 
  Clock, 
  MessageCircle, 
  TrendingUp,
  Edit,
  Save,
  Plus,
  Trash2,
  HelpCircle,
  CheckCircle,
  Users,
  BarChart3,
  Bell,
  Image as ImageIcon,
  DollarSign,
  FileText,
  AlertCircle,
  Calendar,
  Download
} from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Pin } from '../App';
import { useState } from 'react';
import { OnboardingTutorial } from './OnboardingTutorial';

interface PinManagementProps {
  pin: Pin;
  onBack: () => void;
  onUpdate: (updatedPin: Partial<Pin>) => void;
}

export function PinManagement({ pin, onBack, onUpdate }: PinManagementProps) {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'info' | 'products' | 'services' | 'schedule' | 'messages' | 'cashflow' | 'inventory' | 'operations'>('dashboard');
  const [isEditing, setIsEditing] = useState(false);
  const [showTutorial, setShowTutorial] = useState(false);
  
  const [editData, setEditData] = useState({
    name: pin.name,
    description: pin.description || '',
    phone: pin.businessInfo?.phone || '',
    email: pin.businessInfo?.email || '',
    website: pin.businessInfo?.website || '',
    hours: pin.businessInfo?.hours || '',
    categories: pin.businessInfo?.categories || [],
    products: pin.businessInfo?.products || [],
    services: pin.businessInfo?.services || [],
  });

  const [newCategory, setNewCategory] = useState('');
  const [newProduct, setNewProduct] = useState({ name: '', price: '', stock: '' });
  const [newService, setNewService] = useState({ name: '', description: '', duration: '' });

  const isCommerce = pin.type === 'business';

  const tabs = [
    { id: 'dashboard', label: 'Painel', icon: BarChart3 },
    { id: 'info', label: 'Informações', icon: Settings },
    { id: 'products', label: isCommerce ? 'Produtos' : 'Serviços', icon: Package },
    { id: 'inventory', label: 'Estoque', icon: Package, commerceOnly: true },
    { id: 'schedule', label: 'Horários', icon: Clock },
    { id: 'cashflow', label: 'Fluxo de Caixa', icon: DollarSign },
    { id: 'operations', label: 'Operacional', icon: FileText },
    { id: 'messages', label: 'Mensagens', icon: MessageCircle },
  ].filter(tab => !tab.commerceOnly || isCommerce);

  const handleSave = () => {
    onUpdate({
      name: editData.name,
      description: editData.description,
      businessInfo: {
        ...pin.businessInfo!,
        phone: editData.phone,
        email: editData.email,
        website: editData.website,
        hours: editData.hours,
        categories: editData.categories,
        products: editData.products,
        services: editData.services,
      },
    });
    setIsEditing(false);
  };

  const addCategory = () => {
    if (newCategory.trim()) {
      setEditData({ ...editData, categories: [...editData.categories, newCategory] });
      setNewCategory('');
    }
  };

  const removeCategory = (index: number) => {
    setEditData({ 
      ...editData, 
      categories: editData.categories.filter((_, i) => i !== index) 
    });
  };

  const addProduct = () => {
    if (newProduct.name.trim()) {
      setEditData({ 
        ...editData, 
        products: [...editData.products, newProduct.name] 
      });
      setNewProduct({ name: '', price: '', stock: '' });
    }
  };

  const removeProduct = (index: number) => {
    setEditData({ 
      ...editData, 
      products: editData.products.filter((_, i) => i !== index) 
    });
  };

  const addService = () => {
    if (newService.name.trim()) {
      setEditData({ 
        ...editData, 
        services: [...editData.services, newService.name] 
      });
      setNewService({ name: '', description: '', duration: '' });
    }
  };

  const removeService = (index: number) => {
    setEditData({ 
      ...editData, 
      services: editData.services.filter((_, i) => i !== index) 
    });
  };

  return (
    <div className="fixed inset-0 z-50 bg-white flex flex-col overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-6 shadow-lg">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={onBack}
              className="flex items-center gap-2 hover:bg-white/20 px-3 py-2 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Voltar ao mapa</span>
            </button>
            <Button
              onClick={() => setShowTutorial(true)}
              variant="outline"
              className="bg-white/20 border-white/30 text-white hover:bg-white/30"
            >
              <HelpCircle className="w-4 h-4 mr-2" />
              Ajuda e Tutorial
            </Button>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <Store className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl mb-1">{pin.name}</h1>
              <p className="text-white/80">{pin.address}</p>
            </div>
            <Badge className="ml-auto bg-white/20 text-white border-white/30">
              {isCommerce ? 'Comércio' : 'Serviço Público'}
            </Badge>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-1 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-3 border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto bg-gray-50">
        <div className="max-w-7xl mx-auto p-6">
          {/* Dashboard Tab */}
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              {/* Welcome Card */}
              <div className="bg-gradient-to-r from-blue-50 to-green-50 border-2 border-blue-200 rounded-xl p-6">
                <h2 className="text-gray-900 mb-3">
                  Bem-vindo à gestão do seu {isCommerce ? 'estabelecimento' : 'órgão'}!
                </h2>
                <p className="text-gray-700 mb-4">
                  {isCommerce 
                    ? 'Aqui você gerencia todas as informações do seu negócio no Groupby.Me. Configure seus produtos, serviços, horários e atenda clientes próximos em tempo real.'
                    : 'Aqui você gerencia as informações do serviço público. Configure os serviços oferecidos, horários de atendimento e mantenha comunicação direta com os cidadãos.'
                  }
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button onClick={() => setShowTutorial(true)} className="bg-blue-600 hover:bg-blue-700">
                    <HelpCircle className="w-4 h-4 mr-2" />
                    Ver tutorial completo
                  </Button>
                  <Button onClick={() => setActiveTab('info')} variant="outline">
                    <Edit className="w-4 h-4 mr-2" />
                    Editar informações
                  </Button>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid md:grid-cols-4 gap-4">
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-600">Visualizações</span>
                    <TrendingUp className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="text-3xl text-gray-900 mb-1">{pin.stats.views}</div>
                  <div className="text-sm text-green-600">+12% esta semana</div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-600">Conversas</span>
                    <MessageCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="text-3xl text-gray-900 mb-1">{pin.stats.chatsStarted}</div>
                  <div className="text-sm text-green-600">+8% esta semana</div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-600">Mensagens</span>
                    <Bell className="w-5 h-5 text-purple-600" />
                  </div>
                  <div className="text-3xl text-gray-900 mb-1">{pin.stats.messages}</div>
                  <div className="text-sm text-blue-600">23 não lidas</div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-600">Taxa de resposta</span>
                    <CheckCircle className="w-5 h-5 text-yellow-600" />
                  </div>
                  <div className="text-3xl text-gray-900 mb-1">94%</div>
                  <div className="text-sm text-gray-600">Tempo médio: 5min</div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-gray-900 mb-4">Ações rápidas</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <button
                    onClick={() => setActiveTab('products')}
                    className="p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all text-left"
                  >
                    <Package className="w-6 h-6 text-blue-600 mb-2" />
                    <div className="text-gray-900 mb-1">
                      Gerenciar {isCommerce ? 'Produtos' : 'Serviços'}
                    </div>
                    <div className="text-sm text-gray-600">
                      {editData.products.length + editData.services.length} cadastrados
                    </div>
                  </button>

                  <button
                    onClick={() => setActiveTab('schedule')}
                    className="p-4 border-2 border-gray-200 rounded-lg hover:border-green-500 hover:bg-green-50 transition-all text-left"
                  >
                    <Clock className="w-6 h-6 text-green-600 mb-2" />
                    <div className="text-gray-900 mb-1">Horário de funcionamento</div>
                    <div className="text-sm text-gray-600">
                      {editData.hours || 'Não configurado'}
                    </div>
                  </button>

                  <button
                    onClick={() => setActiveTab('messages')}
                    className="p-4 border-2 border-gray-200 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition-all text-left"
                  >
                    <MessageCircle className="w-6 h-6 text-purple-600 mb-2" />
                    <div className="text-gray-900 mb-1">Ver mensagens</div>
                    <div className="text-sm text-gray-600">23 não respondidas</div>
                  </button>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-gray-900 mb-4">Atividade recente</h3>
                <div className="space-y-3">
                  {[
                    { user: 'Maria Silva', action: 'demonstrou interesse em Medicamentos', time: '5 min atrás', type: 'interest' },
                    { user: 'João Santos', action: 'iniciou uma conversa', time: '15 min atrás', type: 'chat' },
                    { user: 'Ana Costa', action: 'visualizou seu pino', time: '30 min atrás', type: 'view' },
                    { user: 'Pedro Lima', action: 'perguntou sobre horários', time: '1 hora atrás', type: 'question' },
                  ].map((activity, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        activity.type === 'interest' ? 'bg-blue-100' :
                        activity.type === 'chat' ? 'bg-green-100' :
                        activity.type === 'view' ? 'bg-purple-100' : 'bg-yellow-100'
                      }`}>
                        <Users className={`w-5 h-5 ${
                          activity.type === 'interest' ? 'text-blue-600' :
                          activity.type === 'chat' ? 'text-green-600' :
                          activity.type === 'view' ? 'text-purple-600' : 'text-yellow-600'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-gray-900">
                          <span className="font-medium">{activity.user}</span> {activity.action}
                        </div>
                        <div className="text-xs text-gray-500">{activity.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Info Tab */}
          {activeTab === 'info' && (
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-gray-900">Informações básicas</h2>
                  {!isEditing ? (
                    <Button onClick={() => setIsEditing(true)} className="bg-blue-600 hover:bg-blue-700">
                      <Edit className="w-4 h-4 mr-2" />
                      Editar
                    </Button>
                  ) : (
                    <div className="flex gap-2">
                      <Button onClick={() => setIsEditing(false)} variant="outline">
                        Cancelar
                      </Button>
                      <Button onClick={handleSave} className="bg-green-600 hover:bg-green-700">
                        <Save className="w-4 h-4 mr-2" />
                        Salvar
                      </Button>
                    </div>
                  )}
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">Nome do estabelecimento *</label>
                    <input
                      type="text"
                      value={editData.name}
                      onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                      disabled={!isEditing}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-700 mb-2">Descrição</label>
                    <textarea
                      value={editData.description}
                      onChange={(e) => setEditData({ ...editData, description: e.target.value })}
                      disabled={!isEditing}
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50"
                      placeholder="Descreva seu estabelecimento para atrair mais clientes..."
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-700 mb-2">Telefone *</label>
                      <input
                        type="tel"
                        value={editData.phone}
                        onChange={(e) => setEditData({ ...editData, phone: e.target.value })}
                        disabled={!isEditing}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-700 mb-2">E-mail *</label>
                      <input
                        type="email"
                        value={editData.email}
                        onChange={(e) => setEditData({ ...editData, email: e.target.value })}
                        disabled={!isEditing}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-700 mb-2">Website</label>
                    <input
                      type="text"
                      value={editData.website}
                      onChange={(e) => setEditData({ ...editData, website: e.target.value })}
                      disabled={!isEditing}
                      placeholder="www.seusite.com.br"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-700 mb-2">Categorias</label>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {editData.categories.map((cat, index) => (
                        <Badge key={index} variant="secondary" className="flex items-center gap-1">
                          {cat}
                          {isEditing && (
                            <button
                              onClick={() => removeCategory(index)}
                              className="ml-1 hover:text-red-600"
                            >
                              <Trash2 className="w-3 h-3" />
                            </button>
                          )}
                        </Badge>
                      ))}
                    </div>
                    {isEditing && (
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={newCategory}
                          onChange={(e) => setNewCategory(e.target.value)}
                          placeholder="Nova categoria"
                          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          onKeyPress={(e) => e.key === 'Enter' && addCategory()}
                        />
                        <Button onClick={addCategory}>
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Products/Services Tab */}
          {activeTab === 'products' && (
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h2 className="text-gray-900 mb-4">
                  {isCommerce ? 'Gerenciar Produtos' : 'Gerenciar Serviços'}
                </h2>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                  <p className="text-sm text-blue-900">
                    💡 {isCommerce 
                      ? 'Mantenha seu catálogo atualizado! Clientes podem demonstrar interesse em produtos específicos e iniciar conversas sobre disponibilidade e preços.'
                      : 'Liste todos os serviços oferecidos. Cidadãos poderão ver o que está disponível e entrar em contato diretamente.'
                    }
                  </p>
                </div>

                {isCommerce ? (
                  <div className="space-y-4">
                    <h3 className="text-gray-900">Produtos cadastrados</h3>
                    <div className="space-y-2">
                      {editData.products.map((product, index) => (
                        <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                          <div className="flex-1">
                            <div className="text-gray-900">{product}</div>
                          </div>
                          <button
                            onClick={() => removeProduct(index)}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>

                    <div className="border-t border-gray-200 pt-4 mt-4">
                      <h4 className="text-gray-900 mb-3">Adicionar novo produto</h4>
                      <div className="space-y-3">
                        <input
                          type="text"
                          value={newProduct.name}
                          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                          placeholder="Nome do produto"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <Button onClick={addProduct} className="w-full bg-blue-600 hover:bg-blue-700">
                          <Plus className="w-4 h-4 mr-2" />
                          Adicionar produto
                        </Button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <h3 className="text-gray-900">Serviços oferecidos</h3>
                    <div className="space-y-2">
                      {editData.services.map((service, index) => (
                        <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                          <div className="flex-1">
                            <div className="text-gray-900">{service}</div>
                          </div>
                          <button
                            onClick={() => removeService(index)}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>

                    <div className="border-t border-gray-200 pt-4 mt-4">
                      <h4 className="text-gray-900 mb-3">Adicionar novo serviço</h4>
                      <div className="space-y-3">
                        <input
                          type="text"
                          value={newService.name}
                          onChange={(e) => setNewService({ ...newService, name: e.target.value })}
                          placeholder="Nome do serviço"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <Button onClick={addService} className="w-full bg-green-600 hover:bg-green-700">
                          <Plus className="w-4 h-4 mr-2" />
                          Adicionar serviço
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Schedule Tab */}
          {activeTab === 'schedule' && (
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h2 className="text-gray-900 mb-4">Horário de funcionamento</h2>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                  <p className="text-sm text-yellow-900">
                    ⏰ Mantenha seus horários sempre atualizados para que os clientes saibam quando você está disponível.
                  </p>
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-2">Horários</label>
                  <textarea
                    value={editData.hours}
                    onChange={(e) => setEditData({ ...editData, hours: e.target.value })}
                    rows={4}
                    placeholder="Ex: Seg-Sex: 8h-18h, Sáb: 8h-12h, Dom: Fechado"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <Button onClick={handleSave} className="mt-4 bg-green-600 hover:bg-green-700">
                  <Save className="w-4 h-4 mr-2" />
                  Salvar horários
                </Button>
              </div>
            </div>
          )}

          {/* Messages Tab */}
          {activeTab === 'messages' && (
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h2 className="text-gray-900 mb-4">Central de mensagens</h2>
                <p className="text-gray-600">
                  Gerencie todas as conversas com seus clientes em um só lugar. Responda rapidamente para manter uma boa reputação!
                </p>
                
                <div className="mt-6 p-8 text-center border-2 border-dashed border-gray-300 rounded-lg">
                  <MessageCircle className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                  <p className="text-gray-600">Esta funcionalidade estará disponível em breve</p>
                </div>
              </div>
            </div>
          )}

          {/* Cash Flow Tab */}
          {activeTab === 'cashflow' && (
            <div className="space-y-6">
              {/* Summary Cards */}
              <div className="grid md:grid-cols-4 gap-4">
                <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-green-100">Receitas</span>
                    <TrendingUp className="w-5 h-5 text-green-100" />
                  </div>
                  <div className="text-3xl mb-1">R$ 12.450</div>
                  <div className="text-sm text-green-100">Este mês</div>
                </div>

                <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-xl p-6 text-white">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-red-100">Despesas</span>
                    <TrendingUp className="w-5 h-5 text-red-100 rotate-180" />
                  </div>
                  <div className="text-3xl mb-1">R$ 7.890</div>
                  <div className="text-sm text-red-100">Este mês</div>
                </div>

                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-blue-100">Lucro</span>
                    <DollarSign className="w-5 h-5 text-blue-100" />
                  </div>
                  <div className="text-3xl mb-1">R$ 4.560</div>
                  <div className="text-sm text-blue-100">Este mês</div>
                </div>

                <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-purple-100">Margem</span>
                    <BarChart3 className="w-5 h-5 text-purple-100" />
                  </div>
                  <div className="text-3xl mb-1">36.6%</div>
                  <div className="text-sm text-purple-100">Lucro líquido</div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-gray-900">Ações rápidas</h3>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <Plus className="w-4 h-4 mr-2" />
                    Nova transação
                  </Button>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <button className="p-4 border-2 border-green-200 bg-green-50 rounded-lg hover:border-green-400 transition-all text-left">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                        <Plus className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-gray-900">Adicionar receita</span>
                    </div>
                    <p className="text-sm text-gray-600">Registre vendas e recebimentos</p>
                  </button>

                  <button className="p-4 border-2 border-red-200 bg-red-50 rounded-lg hover:border-red-400 transition-all text-left">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                        <Trash2 className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-gray-900">Adicionar despesa</span>
                    </div>
                    <p className="text-sm text-gray-600">Registre custos e pagamentos</p>
                  </button>
                </div>
              </div>

              {/* Recent Transactions */}
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-gray-900">Transações recentes</h3>
                  <Button variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Exportar
                  </Button>
                </div>

                <div className="space-y-3">
                  {[
                    { type: 'income', description: 'Venda - Cliente #1234', value: 150.00, date: '14/11/2024 14:30', category: 'Vendas' },
                    { type: 'income', description: 'Venda - Cliente #1235', value: 89.90, date: '14/11/2024 13:15', category: 'Vendas' },
                    { type: 'expense', description: 'Compra de estoque', value: 450.00, date: '14/11/2024 10:00', category: 'Estoque' },
                    { type: 'expense', description: 'Conta de luz', value: 320.00, date: '13/11/2024 16:45', category: 'Contas' },
                    { type: 'income', description: 'Venda - Cliente #1236', value: 230.00, date: '13/11/2024 15:20', category: 'Vendas' },
                  ].map((transaction, index) => (
                    <div key={index} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors border border-gray-100">
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          transaction.type === 'income' ? 'bg-green-100' : 'bg-red-100'
                        }`}>
                          <DollarSign className={`w-5 h-5 ${
                            transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
                          }`} />
                        </div>
                        <div>
                          <div className="text-gray-900">{transaction.description}</div>
                          <div className="text-sm text-gray-500">{transaction.date} • {transaction.category}</div>
                        </div>
                      </div>
                      <div className={`text-lg ${
                        transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {transaction.type === 'income' ? '+' : '-'} R$ {transaction.value.toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Info Card */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-6">
                <h4 className="text-gray-900 mb-3 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-blue-600" />
                  Dicas de gestão financeira
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Registre todas as transações diariamente para controle preciso</li>
                  <li>• Separe receitas e despesas por categorias para melhor análise</li>
                  <li>• Monitore sua margem de lucro semanalmente</li>
                  <li>• Planeje reservas para despesas fixas e emergências</li>
                  <li>• Analise períodos de maior/menor movimento para otimizar estoque</li>
                </ul>
              </div>
            </div>
          )}

          {/* Inventory Tab */}
          {activeTab === 'inventory' && isCommerce && (
            <div className="space-y-6">
              {/* Inventory Alerts */}
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white rounded-xl p-4 border-l-4 border-red-500">
                  <div className="flex items-center gap-3 mb-2">
                    <AlertCircle className="w-5 h-5 text-red-600" />
                    <span className="text-gray-900">Estoque baixo</span>
                  </div>
                  <div className="text-3xl text-gray-900 mb-1">8</div>
                  <div className="text-sm text-gray-600">produtos precisam reposição</div>
                </div>

                <div className="bg-white rounded-xl p-4 border-l-4 border-yellow-500">
                  <div className="flex items-center gap-3 mb-2">
                    <Clock className="w-5 h-5 text-yellow-600" />
                    <span className="text-gray-900">Próximo ao vencimento</span>
                  </div>
                  <div className="text-3xl text-gray-900 mb-1">3</div>
                  <div className="text-sm text-gray-600">produtos em 7 dias</div>
                </div>

                <div className="bg-white rounded-xl p-4 border-l-4 border-green-500">
                  <div className="flex items-center gap-3 mb-2">
                    <Package className="w-5 h-5 text-green-600" />
                    <span className="text-gray-900">Total em estoque</span>
                  </div>
                  <div className="text-3xl text-gray-900 mb-1">R$ 15.4k</div>
                  <div className="text-sm text-gray-600">valor total do inventário</div>
                </div>
              </div>

              {/* Stock Management */}
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-gray-900">Controle de estoque</h3>
                  <div className="flex gap-2">
                    <Button variant="outline">
                      <Download className="w-4 h-4 mr-2" />
                      Exportar
                    </Button>
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      <Plus className="w-4 h-4 mr-2" />
                      Adicionar produto
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  {[
                    { name: 'Dipirona 500mg', sku: 'MED-001', quantity: 145, min: 50, max: 200, price: 8.50, status: 'ok' },
                    { name: 'Paracetamol 750mg', sku: 'MED-002', quantity: 89, min: 50, max: 150, price: 6.90, status: 'ok' },
                    { name: 'Ibuprofeno 600mg', sku: 'MED-003', quantity: 23, min: 50, max: 100, price: 12.30, status: 'low' },
                    { name: 'Amoxicilina 500mg', sku: 'MED-004', quantity: 67, min: 40, max: 120, price: 15.80, status: 'ok' },
                    { name: 'Losartana 50mg', sku: 'MED-005', quantity: 12, min: 30, max: 80, price: 9.90, status: 'critical' },
                  ].map((item, index) => (
                    <div key={index} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex-1">
                          <div className="flex items-center gap-3">
                            <h4 className="text-gray-900">{item.name}</h4>
                            {item.status === 'low' && (
                              <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                                Estoque baixo
                              </span>
                            )}
                            {item.status === 'critical' && (
                              <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full flex items-center gap-1">
                                <AlertCircle className="w-3 h-3" />
                                Crítico
                              </span>
                            )}
                          </div>
                          <div className="text-sm text-gray-500 mt-1">SKU: {item.sku}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg text-gray-900">{item.quantity} un.</div>
                          <div className="text-sm text-gray-500">R$ {item.price.toFixed(2)}/un</div>
                        </div>
                      </div>
                      
                      {/* Progress bar */}
                      <div className="mt-3">
                        <div className="flex items-center justify-between text-xs text-gray-600 mb-1">
                          <span>Mín: {item.min}</span>
                          <span>Máx: {item.max}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${
                              item.status === 'critical' ? 'bg-red-500' :
                              item.status === 'low' ? 'bg-yellow-500' : 'bg-green-500'
                            }`}
                            style={{ width: `${(item.quantity / item.max) * 100}%` }}
                          ></div>
                        </div>
                      </div>

                      <div className="mt-3 flex gap-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          <Edit className="w-3 h-3 mr-1" />
                          Editar
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1">
                          <Plus className="w-3 h-3 mr-1" />
                          Adicionar estoque
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inventory Tips */}
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-xl p-6">
                <h4 className="text-gray-900 mb-3 flex items-center gap-2">
                  <Package className="w-5 h-5 text-purple-600" />
                  Dicas de gestão de estoque
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Configure alertas para quando produtos atingirem o estoque mínimo</li>
                  <li>• Monitore produtos próximos ao vencimento semanalmente</li>
                  <li>• Use o histórico de vendas para prever demanda</li>
                  <li>• Mantenha relacionamento com fornecedores para reposição rápida</li>
                  <li>• Faça inventário completo mensalmente para evitar divergências</li>
                </ul>
              </div>
            </div>
          )}

          {/* Operations Tab */}
          {activeTab === 'operations' && (
            <div className="space-y-6">
              {/* Operation Metrics */}
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-600">Atendimentos hoje</span>
                    <Users className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="text-3xl text-gray-900 mb-1">47</div>
                  <div className="text-sm text-green-600">+15% vs ontem</div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-600">Tempo médio</span>
                    <Clock className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="text-3xl text-gray-900 mb-1">12min</div>
                  <div className="text-sm text-gray-600">por atendimento</div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-600">Satisfação</span>
                    <CheckCircle className="w-5 h-5 text-yellow-600" />
                  </div>
                  <div className="text-3xl text-gray-900 mb-1">4.8/5</div>
                  <div className="text-sm text-gray-600">avaliação média</div>
                </div>
              </div>

              {/* Staff Schedule */}
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-gray-900">Escala de funcionários</h3>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <Calendar className="w-4 h-4 mr-2" />
                    Gerenciar escala
                  </Button>
                </div>

                <div className="space-y-3">
                  {[
                    { name: 'Maria Silva', role: 'Farmacêutica', shift: 'Manhã (8h-14h)', status: 'working' },
                    { name: 'João Santos', role: 'Atendente', shift: 'Integral (8h-18h)', status: 'working' },
                    { name: 'Ana Costa', role: 'Farmacêutica', shift: 'Tarde (14h-20h)', status: 'scheduled' },
                    { name: 'Pedro Lima', role: 'Entregador', shift: 'Tarde (14h-20h)', status: 'scheduled' },
                  ].map((staff, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white">
                          {staff.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <div className="text-gray-900">{staff.name}</div>
                          <div className="text-sm text-gray-600">{staff.role}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-900">{staff.shift}</div>
                        <div className="text-xs">
                          {staff.status === 'working' ? (
                            <span className="text-green-600 flex items-center gap-1">
                              <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
                              Trabalhando agora
                            </span>
                          ) : (
                            <span className="text-gray-500">Agendado</span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tasks/Checklist */}
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-gray-900">Checklist operacional diário</h3>
                  <span className="text-sm text-gray-600">6/10 concluídas</span>
                </div>

                <div className="space-y-2">
                  {[
                    { task: 'Abertura do caixa', completed: true, time: '08:00' },
                    { task: 'Conferência de estoque', completed: true, time: '08:15' },
                    { task: 'Limpeza e organização', completed: true, time: '08:30' },
                    { task: 'Verificar validades', completed: true, time: '09:00' },
                    { task: 'Atualizar preços promocionais', completed: true, time: '09:30' },
                    { task: 'Conferir pedidos online', completed: true, time: '10:00' },
                    { task: 'Almoço e revezamento', completed: false, time: '12:00' },
                    { task: 'Reposição de produtos', completed: false, time: '14:00' },
                    { task: 'Fechamento parcial', completed: false, time: '18:00' },
                    { task: 'Fechamento do caixa', completed: false, time: '20:00' },
                  ].map((item, index) => (
                    <div key={index} className={`flex items-center gap-3 p-3 rounded-lg border ${
                      item.completed ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'
                    }`}>
                      <input
                        type="checkbox"
                        checked={item.completed}
                        className="w-5 h-5 text-green-600 rounded"
                        readOnly
                      />
                      <div className="flex-1">
                        <span className={item.completed ? 'text-gray-500 line-through' : 'text-gray-900'}>
                          {item.task}
                        </span>
                      </div>
                      <span className="text-sm text-gray-500">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Operational Tips */}
              <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-xl p-6">
                <h4 className="text-gray-900 mb-3 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-green-600" />
                  Dicas de gestão operacional
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Mantenha checklists padronizados para garantir qualidade constante</li>
                  <li>• Monitore o tempo médio de atendimento para otimizar processos</li>
                  <li>• Treine equipe regularmente sobre produtos e atendimento</li>
                  <li>• Documente procedimentos para facilitar integração de novos funcionários</li>
                  <li>• Peça feedback dos clientes para melhorias contínuas</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Tutorial Modal */}
      {showTutorial && (
        <OnboardingTutorial
          isOpen={showTutorial}
          onClose={() => setShowTutorial(false)}
          pinType={pin.type}
        />
      )}
    </div>
  );
}