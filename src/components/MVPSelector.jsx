import React, { useState, useEffect } from 'react';
import { X, MessageCircle, Calendar, Code, FileText, User, Clock, Zap, Database, Monitor, Server, Rocket, HeadphonesIcon } from 'lucide-react';
import { Button } from './ui/button';
import RadialOrbitalTimeline from './ui/radial-orbital-timeline';
import { Spotlight } from './ui/spotlight-new';

// Hook para animação de digitação
const useTypewriter = (text, speed = 30) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (!text) {
      setDisplayText('');
      return;
    }

    setIsTyping(true);
    setDisplayText('');
    let i = 0;
    
    const typeTimer = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.slice(0, i + 1));
        i++;
      } else {
        setIsTyping(false);
        clearInterval(typeTimer);
      }
    }, speed);

    return () => clearInterval(typeTimer);
  }, [text, speed]);

  return { displayText, isTyping };
};

export const MVPSelector = ({ isOpen, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedNode, setSelectedNode] = useState(null);
  
  // Hook para animação de digitação na descrição detalhada
  const { displayText: typedDescription, isTyping } = useTypewriter(
    selectedNode?.detailedDescription || '', 
    25
  );

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
      // Pequeno delay para garantir que o elemento esteja no DOM
      setTimeout(() => {
        setIsVisible(true);
      }, 10);
    } else {
      setIsVisible(false);
      // Aguarda a animação de fade out antes de remover do DOM
      setTimeout(() => {
        setIsAnimating(false);
      }, 300);
    }
  }, [isOpen]);

  if (!isOpen && !isAnimating) {
    return null;
  }

  const handleWhatsApp = (version, type, price, duration) => {
    const message = encodeURIComponent(
      `Ola! Tenho interesse no projeto de capelania crista.\n\n` +
      `Opcao escolhida: ${version}\n` +
      `Tipo: ${type}\n` +
      `Investimento: ${price}\n` +
      `Prazo: ${duration}\n\n` +
      `Gostaria de mais informacoes sobre o desenvolvimento.`
    );
    
    window.open(`https://wa.me/5512997036922?text=${message}`, '_blank');
  };

  const timelineData = [
    {
      id: 1,
      title: "Planejamento",
      date: "Semana 1-2",
      content: "Refinamento do PRD, definicao de arquitetura tecnica, wireframes e design UX/UI. Configuracao inicial do projeto. CONCLUÍDO",
      category: "Planning",
      icon: Calendar,
      relatedIds: [2],
      status: "completed",
      energy: 100,
      detailedDescription: "Nesta etapa crucial, realizamos o refinamento completo do PRD (Product Requirements Document), definindo todas as funcionalidades do aplicativo de capelania cristã. Criamos a arquitetura técnica robusta, desenvolvemos wireframes detalhados e finalizamos o design UX/UI com foco na experiência do usuário religioso. Configuramos todo o ambiente de desenvolvimento, definimos as tecnologias que serão utilizadas (React Native, Node.js, PostgreSQL) e estabelecemos os padrões de codificação. Esta fase também inclui a definição da estrutura do banco de dados, APIs necessárias, integrações com serviços externos e o planejamento detalhado de todas as 9 funcionalidades principais: oração, chat, agendamentos, devocionais, geolocalização, perfis, relatórios, denúncias e o módulo Pílula para criação de conteúdo inspiracional.",
      pricing: {
        mvp1: { fullCode: "R$ 2.500", bubble: "R$ 2.500" },
        mvp2: { fullCode: "R$ 2.500", bubble: "R$ 2.500" },
        robust: { fullCode: "R$ 2.500", bubble: "R$ 2.500" }
      }
    },
    {
      id: 2,
      title: "Desenvolvimento Frontend",
      date: "Semana 3-6",
      content: "Interface do usuario com React Native, componentes UI, navegacao e integracao com APIs. Design responsivo.",
      category: "Frontend",
      icon: Monitor,
      relatedIds: [1, 3],
      status: "pending",
      energy: 0,
      detailedDescription: "Desenvolvimento completo da interface do usuário utilizando React Native para criar um aplicativo cross-platform (iOS e Android). Implementamos todos os componentes UI personalizados com design moderno e intuitivo, incluindo telas de login, dashboard, chat em tempo real, calendário de agendamentos, área de orações, devocionais diários e o inovador módulo Pílula. Criamos um sistema de navegação fluido entre as seções, implementamos autenticação segura, notificações push e integração com APIs externas. O design responsivo garante perfeita adaptação a diferentes tamanhos de tela, com componentes reutilizáveis e código otimizado. Inclui também a implementação de recursos offline, sincronização de dados, geolocalização para encontrar capelães próximos e sistema de perfis personalizados.",
      pricing: {
        mvp1: { fullCode: "R$ 8.000", bubble: "R$ 2.800" },
        mvp2: { fullCode: "R$ 15.000", bubble: "R$ 5.500" },
        robust: { fullCode: "R$ 28.000", bubble: "R$ 12.000" }
      }
    },
    {
      id: 3,
      title: "Desenvolvimento Backend",
      date: "Semana 5-10",
      content: "API REST com Node.js, autenticacao JWT, banco PostgreSQL, WebSocket para chat em tempo real.",
      category: "Backend",
      icon: Server,
      relatedIds: [2, 4],
      status: "pending",
      energy: 0,
      detailedDescription: "Criação de uma API REST robusta e escalável usando Node.js com Express, implementando todas as funcionalidades do backend. Desenvolvemos sistema de autenticação JWT seguro, banco de dados PostgreSQL otimizado com relacionamentos complexos para usuários, capelães, orações, agendamentos e conteúdos. Implementamos WebSocket para chat em tempo real entre membros e capelães, sistema de notificações push, APIs para geolocalização e integração com serviços de mapas. Criamos endpoints para o módulo de devocionais com IA, sistema de relatórios avançados, módulo de denúncias com moderação automática e o inovador sistema Pílula para geração de conteúdo inspiracional. Inclui também implementação de cache Redis, sistema de backup automático, logs detalhados, testes unitários e integração contínua para garantir alta disponibilidade e performance.",
      pricing: {
        mvp1: { fullCode: "R$ 10.000", bubble: "R$ 3.000" },
        mvp2: { fullCode: "R$ 18.000", bubble: "R$ 6.000" },
        robust: { fullCode: "R$ 35.000", bubble: "R$ 15.000" }
      }
    },
    {
      id: 4,
      title: "Deploy Testes",
      date: "Semana 11-13",
      content: "Deploy em producao, testes de carga, testes de usabilidade, correcao de bugs e otimizacoes.",
      category: "Testing",
      icon: Zap,
      relatedIds: [3, 5],
      status: "pending",
      energy: 0,
      detailedDescription: "Fase crítica de deployment e testes abrangentes em ambiente de produção. Realizamos deploy completo em servidores cloud (AWS/Azure) com configuração de alta disponibilidade, load balancer e CDN. Executamos testes de carga intensivos para garantir que o sistema suporte milhares de usuários simultâneos, testes de usabilidade com grupos focais de líderes religiosos e membros da comunidade. Realizamos testes de segurança, penetração e vulnerabilidades, além de testes de performance em diferentes dispositivos e conexões. Corrigimos todos os bugs identificados, otimizamos consultas de banco de dados, implementamos monitoramento em tempo real com alertas automáticos e configuramos backups automáticos. Esta etapa também inclui testes específicos para todas as funcionalidades: chat em tempo real, notificações push, geolocalização, sincronização offline e o módulo Pílula.",
      pricing: {
        mvp1: { fullCode: "R$ 2.500", bubble: "R$ 800" },
        mvp2: { fullCode: "R$ 4.000", bubble: "R$ 1.200" },
        robust: { fullCode: "R$ 8.000", bubble: "R$ 3.000" }
      }
    },
    {
      id: 5,
      title: "Lancamento",
      date: "Semana 14-15",
      content: "Publicacao nas lojas de aplicativos, configuracao de monitoramento, campanhas de marketing digital.",
      category: "Launch",
      icon: Rocket,
      relatedIds: [4, 6],
      status: "pending",
      energy: 0,
      detailedDescription: "Lançamento oficial do aplicativo de capelania cristã nas principais plataformas digitais. Publicamos nas lojas Google Play Store e Apple App Store, garantindo conformidade com todas as diretrizes e políticas das plataformas. Configuramos sistemas avançados de monitoramento, analytics e crash reporting para acompanhar performance em tempo real. Implementamos campanhas de marketing digital direcionadas para comunidades cristãs, incluindo SEO, marketing de conteúdo e parcerias com influenciadores religiosos. Criamos materiais promocionais, vídeos explicativos e tutoriais para maximizar a adoção. Estabelecemos canais de suporte ao usuário, documentação completa e sistema de feedback. Esta fase também inclui configuração de métricas de sucesso, KPIs de engajamento e ferramentas de análise de comportamento do usuário para otimização contínua.",
      pricing: {
        mvp1: { fullCode: "R$ 1.500", bubble: "R$ 200" },
        mvp2: { fullCode: "R$ 3.000", bubble: "R$ 300" },
        robust: { fullCode: "R$ 6.000", bubble: "R$ 1.500" }
      }
    },
    {
      id: 6,
      title: "Pos Suporte",
      date: "Semana 16+",
      content: "Suporte tecnico continuo, atualizacoes de seguranca, novas funcionalidades e manutencao preventiva. Valores totais do projeto completo.",
      category: "Support",
      icon: HeadphonesIcon,
      relatedIds: [5],
      status: "pending",
      energy: 0,
      detailedDescription: "Suporte técnico abrangente e evolução contínua do aplicativo de capelania. Oferecemos suporte 24/7 com SLA garantido, atualizações regulares de segurança e patches correcionais. Desenvolvemos novas funcionalidades baseadas no feedback dos usuários e tendências do mercado religioso digital. Realizamos manutenção preventiva, otimizações de performance, atualizações de compatibilidade com novas versões de sistemas operacionais e backups seguros. Implementamos melhorias na IA para sugestões bíblicas mais precisas, novos templates para o módulo Pílula e funcionalidades avançadas de relatórios. Fornecemos treinamento contínuo para administradores, webinars para capelães e documentação atualizada. Esta fase assegura que o aplicativo permaneça sempre atualizado, seguro e alinhado com as necessidades evolutivas da comunidade cristã, mantendo alta satisfação dos usuários e crescimento sustentável da plataforma.",
      pricing: {
        mvp1: { fullCode: "R$ 25.000 (Total)", bubble: "R$ 8.000 (Total)" },
        mvp2: { fullCode: "R$ 45.000 (Total)", bubble: "R$ 15.000 (Total)" },
        robust: { fullCode: "R$ 85.000 (Total)", bubble: "R$ 35.000 (Total)" }
      }
    },
  ];

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  const handleNodeSelect = (node) => {
    setSelectedNode(node);
  };

  return (
    <div 
      className={`fixed inset-0 z-50 bg-black transition-opacity duration-300 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 9999 }}
    >
      {/* Spotlight Effect */}
      <div className={`absolute inset-0 z-1 pointer-events-none transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <Spotlight 
          gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(210, 100%, 80%, .15) 0, hsla(210, 100%, 60%, .06) 50%, hsla(210, 100%, 45%, 0) 80%)"
          gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 80%, .10) 0, hsla(210, 100%, 60%, .04) 80%, transparent 100%)"
          gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 80%, .08) 0, hsla(210, 100%, 50%, .03) 80%, transparent 100%)"
          duration={10}
          xOffset={60}
          translateY={-250}
        />
      </div>
      {/* Close button */}
      <div className="absolute top-4 right-4 z-50" style={{ zIndex: 100 }}>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleClose}
          className="text-white hover:text-gray-300 hover:bg-white/10"
        >
          <X className="h-6 w-6" />
        </Button>
      </div>

      {/* Header */}
      <div className={`absolute top-4 left-4 z-50 transition-all duration-500 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
      }`} style={{ zIndex: 100 }}>
        <h2 className="text-2xl font-bold text-white">Timeline de Desenvolvimento</h2>
        <p className="text-white/70 text-sm">Clique nos nos para ver detalhes</p>
      </div>

      {/* Main Content Area */}
      <div className="flex h-full">
        {/* Left Sidebar - Pricing */}
        <div className={`absolute left-4 bottom-1/4 w-64 z-30 transition-all duration-500 ease-out ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
        }`}>
          {selectedNode && selectedNode.pricing && (
            <div className="bg-black/85 backdrop-blur-lg border border-white/20 rounded-lg p-4 max-h-96 overflow-y-auto sidebar-scroll">
              <h3 className="text-sm font-bold text-white mb-4 text-center border-b border-white/20 pb-2">
                {selectedNode.title} - Investimento
              </h3>
              
              <div className="space-y-3">
                {/* MVP v1 */}
                <div className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-400/20 rounded-lg p-3">
                  <h4 className="text-xs font-semibold text-blue-300 mb-2 flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                    MVP v1 - Inicio Rapido
                  </h4>
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-white/60">Full Code:</span>
                      <span className="text-sm font-bold text-blue-400">{selectedNode.pricing.mvp1.fullCode}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-white/60">Bubble.io:</span>
                      <span className="text-sm font-bold text-green-400">{selectedNode.pricing.mvp1.bubble}</span>
                    </div>
                  </div>
                </div>

                {/* MVP v2 */}
                <div className="bg-gradient-to-r from-purple-500/10 to-purple-600/10 border border-purple-400/20 rounded-lg p-3">
                  <h4 className="text-xs font-semibold text-purple-300 mb-2 flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                    MVP v2 - Completo
                  </h4>
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-white/60">Full Code:</span>
                      <span className="text-sm font-bold text-blue-400">{selectedNode.pricing.mvp2.fullCode}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-white/60">Bubble.io:</span>
                      <span className="text-sm font-bold text-green-400">{selectedNode.pricing.mvp2.bubble}</span>
                    </div>
                  </div>
                </div>
                
                {/* Versão Robusta */}
                <div className="bg-gradient-to-r from-teal-500/10 to-teal-600/10 border border-teal-400/20 rounded-lg p-3">
                  <h4 className="text-xs font-semibold text-teal-300 mb-2 flex items-center">
                    <span className="w-2 h-2 bg-teal-400 rounded-full mr-2"></span>
                    Versao Robusta
                  </h4>
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-white/60">Full Code:</span>
                      <span className="text-sm font-bold text-blue-400">{selectedNode.pricing.robust.fullCode}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-white/60">Bubble.io:</span>
                      <span className="text-sm font-bold text-green-400">{selectedNode.pricing.robust.bubble}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Preços Totais na Sidebar */}
              <div className="mt-4 pt-4 border-t border-white/10">
                <div className="bg-gradient-to-r from-gray-500/10 to-gray-600/10 border border-gray-400/20 rounded-lg p-3">
                  <h4 className="text-xs font-semibold text-gray-300 mb-3 text-center">
                    💰 Investimento Total do Projeto
                  </h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-white/60">Full Code:</span>
                      <span className="text-sm font-bold text-blue-400">R$ 25.000 - R$ 85.000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-white/60">Bubble.io:</span>
                      <span className="text-sm font-bold text-green-400">R$ 8.000 - R$ 35.000</span>
                    </div>
                    <div className="text-center mt-2 pt-2 border-t border-white/10">
                      <div className="text-xs text-white/50">
                        <span className="text-blue-300">8-24 semanas</span> | <span className="text-green-300">4-14 semanas</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {!selectedNode && (
            <div className="bg-black/60 backdrop-blur-lg border border-white/10 rounded-lg p-6">
              <div className="text-center text-white/60 text-sm">
                <div className="text-3xl mb-3">💰</div>
                <p className="font-medium">Investimento por Módulo</p>
                <p className="text-xs mt-2 text-white/40">Clique nos ícones da timeline para ver todas as versões de preços</p>
              </div>
            </div>
          )}
        </div>

        {/* Orbital Timeline - Center */}
        <div className={`relative z-20 flex-1 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          <RadialOrbitalTimeline 
            timelineData={timelineData} 
            onNodeSelect={handleNodeSelect}
          />
        </div>

        {/* Right Panel - Detailed Description */}
        <div className={`absolute right-4 top-0 bottom-0 w-80 z-30 transition-all duration-500 ease-out ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
        }`}>
          {selectedNode && (
            <div className="bg-black/90 backdrop-blur-lg border border-white/20 rounded-lg p-6 h-full overflow-y-auto flex flex-col">
              <div className="mb-4 pb-3 border-b border-white/20 flex-shrink-0">
                <h3 className="text-lg font-bold text-white flex items-center">
                  <selectedNode.icon className="w-5 h-5 mr-2 text-blue-400" />
                  {selectedNode.title}
                </h3>
                <p className="text-sm text-white/60 mt-1">{selectedNode.date}</p>
              </div>
              
              <div className="text-sm text-white/80 leading-relaxed flex-1 overflow-y-auto">
                <p className="mb-4">
                  {typedDescription}
                  {isTyping && (
                    <span className="inline-block w-2 h-4 bg-white/80 ml-1 animate-pulse"></span>
                  )}
                </p>
              </div>
              
              {selectedNode.status === "completed" && (
                <div className="mt-4 pt-3 border-t border-green-400/20 flex-shrink-0">
                  <div className="flex items-center text-green-400 text-sm">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                    <span className="font-semibold">ETAPA CONCLUÍDA</span>
                  </div>
                </div>
              )}
            </div>
          )}
          
          {!selectedNode && (
            <div className="bg-black/60 backdrop-blur-lg border border-white/10 rounded-lg p-8 h-full flex items-center justify-center">
              <div className="text-center text-white/60">
                <div className="text-4xl mb-4">📋</div>
                <h3 className="text-lg font-semibold text-white mb-2">Detalhes do Desenvolvimento</h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  Clique em qualquer ícone da timeline para ver uma explicação detalhada 
                  do que será desenvolvido em cada etapa do projeto.
                </p>
                <div className="mt-4 text-xs text-white/50">
                  ✨ Animação de digitação ativada
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom action buttons */}
      <div className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-600 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`} style={{ zIndex: 100 }}>
        <div className="flex justify-center">
          {/* Botão WhatsApp */}
          <Button
            onClick={() => handleWhatsApp('Consultoria Personalizada', 'Todas as versoes', 'Conforme versao escolhida', 'Conforme versao')}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-sm"
          >
            <MessageCircle className="h-4 w-4 mr-2" />
            Solicitar Orçamento no WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
}; 