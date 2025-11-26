import { X, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';

interface OnboardingTutorialProps {
  isOpen: boolean;
  onClose: () => void;
  pinType: 'business' | 'public' | 'personal';
}

export function OnboardingTutorial({ isOpen, onClose, pinType }: OnboardingTutorialProps) {
  const [currentStep, setCurrentStep] = useState(0);

  if (!isOpen) return null;

  const isCommerce = pinType === 'business';

  const steps = isCommerce ? [
    {
      title: 'Bem-vindo ao Groupby.Me! 🎉',
      description: 'Seu estabelecimento agora está no mapa e visível para clientes próximos em tempo real.',
      content: (
        <div className="space-y-4">
          <p className="text-gray-700">
            O Groupby.Me conecta seu negócio com pessoas que estão próximas e procurando exatamente o que você oferece.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="text-blue-900 mb-2">Por que usar o Groupby.Me?</h4>
            <ul className="space-y-2 text-sm text-blue-800">
              <li>✓ Clientes encontram você no mapa ao buscar produtos/serviços</li>
              <li>✓ Conversas diretas em tempo real (como WhatsApp)</li>
              <li>✓ Clientes demonstram interesse antes de comprar</li>
              <li>✓ Aumente suas vendas locais sem intermediários</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: 'Como seu pino funciona 📍',
      description: 'Entenda como clientes veem e interagem com seu estabelecimento',
      content: (
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-4">
            <h4 className="text-gray-900 mb-3">Quando alguém clica no seu pino:</h4>
            <ol className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm">1</span>
                <div>
                  <strong>Vê suas informações:</strong> Nome, descrição, horários, contato
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm">2</span>
                <div>
                  <strong>Escolhe produtos/serviços:</strong> Pode adicionar itens de interesse (como no iFood)
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm">3</span>
                <div>
                  <strong>Inicia conversa:</strong> Você recebe uma notificação com os interesses dele
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm">4</span>
                <div>
                  <strong>Você responde:</strong> Informa preços, disponibilidade e fecha a venda!
                </div>
              </li>
            </ol>
          </div>
        </div>
      ),
    },
    {
      title: 'Configure seus produtos 📦',
      description: 'Mantenha seu catálogo sempre atualizado',
      content: (
        <div className="space-y-4">
          <p className="text-gray-700">
            Na aba <strong>"Produtos"</strong>, você cadastra tudo que oferece. Isso ajuda clientes a:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              <span>Ver o que você tem disponível</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              <span>Demonstrar interesse em itens específicos</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              <span>Iniciar conversas mais objetivas (você já sabe o que eles querem!)</span>
            </li>
          </ul>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-sm text-yellow-900">
              💡 <strong>Dica:</strong> Atualize seus produtos regularmente! Isso aumenta as chances de aparecer nas buscas.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: 'Atenda com agilidade 💬',
      description: 'Responda rápido e conquiste mais clientes',
      content: (
        <div className="space-y-4">
          <p className="text-gray-700">
            Quando um cliente demonstra interesse, você recebe:
          </p>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-4">
            <h4 className="text-gray-900 mb-2">🔔 Notificação com:</h4>
            <ul className="space-y-1 text-gray-700 text-sm">
              <li>• Nome do cliente</li>
              <li>• Produtos de interesse (com quantidades)</li>
              <li>• Serviços solicitados</li>
            </ul>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h4 className="text-green-900 mb-2">✅ Melhores práticas:</h4>
            <ul className="space-y-2 text-sm text-green-800">
              <li>→ Responda em até 5 minutos (cliente está esperando!)</li>
              <li>→ Confirme disponibilidade e informe preços</li>
              <li>→ Seja cordial e profissional</li>
              <li>→ Ofereça opções de entrega/retirada</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: 'Dicas para ter sucesso 🚀',
      description: 'Maximize seus resultados no Groupby.Me',
      content: (
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-50 rounded-lg p-4">
              <h4 className="text-blue-900 mb-2">📝 Preencha tudo</h4>
              <p className="text-sm text-blue-800">
                Descrição completa, horários, categorias, produtos. Quanto mais informação, melhor!
              </p>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <h4 className="text-green-900 mb-2">⚡ Seja rápido</h4>
              <p className="text-sm text-green-800">
                Responda mensagens rapidamente. Taxa de resposta alta = mais visibilidade!
              </p>
            </div>
            <div className="bg-purple-50 rounded-lg p-4">
              <h4 className="text-purple-900 mb-2">🎯 Mantenha atualizado</h4>
              <p className="text-sm text-purple-800">
                Atualize horários, produtos em falta, promoções. Clientes valorizam informação precisa.
              </p>
            </div>
            <div className="bg-yellow-50 rounded-lg p-4">
              <h4 className="text-yellow-900 mb-2">🌟 Seja profissional</h4>
              <p className="text-sm text-yellow-800">
                Bom atendimento gera mais conversas, mais vendas e melhor reputação.
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ] : [
    {
      title: 'Bem-vindo ao Groupby.Me! 🏛️',
      description: 'Seu órgão público agora está mais acessível aos cidadãos',
      content: (
        <div className="space-y-4">
          <p className="text-gray-700">
            O Groupby.Me facilita a comunicação entre serviços públicos e cidadãos de forma direta e em tempo real.
          </p>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h4 className="text-green-900 mb-2">Benefícios para serviços públicos:</h4>
            <ul className="space-y-2 text-sm text-green-800">
              <li>✓ Canal direto de atendimento ao cidadão</li>
              <li>✓ Respostas rápidas a dúvidas e emergências</li>
              <li>✓ Transparência e proximidade com a população</li>
              <li>✓ Redução de filas presenciais</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: 'Configure seus serviços 🛠️',
      description: 'Informe o que seu órgão oferece',
      content: (
        <div className="space-y-4">
          <p className="text-gray-700">
            Liste todos os serviços disponíveis para que cidadãos saibam como você pode ajudá-los:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-blue-600">→</span>
              <span>Atendimento emergencial (hospitais, polícia, bombeiros)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600">→</span>
              <span>Serviços administrativos (certidões, licenças)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600">→</span>
              <span>Informações e orientações</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600">→</span>
              <span>Recebimento de denúncias e solicitações</span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Atenda o cidadão 👥',
      description: 'Comunicação eficiente e transparente',
      content: (
        <div className="space-y-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="text-blue-900 mb-2">💬 Quando um cidadão entrar em contato:</h4>
            <ul className="space-y-2 text-sm text-blue-800">
              <li>• Identifique a necessidade ou emergência</li>
              <li>• Forneça informações claras e precisas</li>
              <li>• Oriente sobre procedimentos necessários</li>
              <li>• Registre protocolos de atendimento quando aplicável</li>
            </ul>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <p className="text-sm text-green-800">
              <strong>Lembre-se:</strong> Respostas rápidas e profissionais fortalecem a confiança da população no serviço público.
            </p>
          </div>
        </div>
      ),
    },
  ];

  const isLastStep = currentStep === steps.length - 1;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          <h2 className="text-white pr-12">{steps[currentStep].title}</h2>
          <p className="text-white/80 text-sm mt-1">{steps[currentStep].description}</p>
        </div>

        {/* Progress */}
        <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">
              Passo {currentStep + 1} de {steps.length}
            </span>
            <span className="text-sm text-gray-600">
              {Math.round(((currentStep + 1) / steps.length) * 100)}% completo
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-blue-600 to-green-600 h-2 rounded-full transition-all"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[60vh] overflow-y-auto">
          {steps[currentStep].content}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200 flex items-center justify-between">
          <Button
            onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
            disabled={currentStep === 0}
            variant="outline"
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Anterior
          </Button>

          {!isLastStep ? (
            <Button
              onClick={() => setCurrentStep(currentStep + 1)}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Próximo
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <Button onClick={onClose} className="bg-green-600 hover:bg-green-700">
              <Check className="w-4 h-4 mr-2" />
              Concluir tutorial
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
