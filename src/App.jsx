import React, { useState, useEffect } from 'react';
import './App.css';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Button } from './components/ui/button';
import { Badge } from './components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { ScrollArea } from './components/ui/scroll-area';
import { Separator } from './components/ui/separator';
import { Toaster } from './components/ui/sonner';
import { toast } from 'sonner';
import LoginPopup from './components/LoginPopup';
import { CompletionBanner } from './components/CompletionBanner';
import { MVPSelector } from './components/MVPSelector';
import { 
  Home, 
  FileText, 
  CheckCircle, 
  Search, 
  Zap, 
  Database, 
  GitBranch, 
  TrendingUp, 
  Lightbulb, 
  Smartphone, 
  Layout,
  Users,
  Target,
  DollarSign,
  AlertCircle,
  Shield,
  BarChart3,
  User,
  HelpCircle,
  Calendar,
  Layers,
  Server,
  Cloud,
  Cross,
  Heart,
  MessageCircle,
  Globe,
  UserCheck,
  Settings,
  Smile,
  Clock,
  LogIn,
  LogOut,
  Menu,
  X,
  Download,
  Palette
} from 'lucide-react';

// Import wireframe images
import wireframeLogin from './assets/wireframe_login.png';
import wireframeDashboard from './assets/wireframe_dashboard_membro.png';
import wireframeChat from './assets/wireframe_chat.png';
import flowchartImage from './assets/flowchart.png';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [requirementsTab, setRequirementsTab] = useState('functional');
  const [apisCostsTab, setApisCostsTab] = useState('apis');
  const [panelsTab, setPanelsTab] = useState('chaplain');
  const [discoveryTab, setDiscoveryTab] = useState('pains-gains');
  const [selectedMenu, setSelectedMenu] = useState('overview');
  const [isMVPSelectorOpen, setIsMVPSelectorOpen] = useState(false);

  // Proteção contra cópia e contexto
  useEffect(() => {
    // Desabilitar menu de contexto (botão direito)
    const handleContextMenu = (e) => {
      e.preventDefault();
      return false;
    };

    // Desabilitar atalhos de teclado comuns
    const handleKeyDown = (e) => {
      // Desabilitar Ctrl+C, Ctrl+A, Ctrl+V, Ctrl+X, Ctrl+S, Ctrl+P, F12, Ctrl+Shift+I, Ctrl+U
      if (
        (e.ctrlKey && (e.key === 'c' || e.key === 'C')) ||
        (e.ctrlKey && (e.key === 'a' || e.key === 'A')) ||
        (e.ctrlKey && (e.key === 'v' || e.key === 'V')) ||
        (e.ctrlKey && (e.key === 'x' || e.key === 'X')) ||
        (e.ctrlKey && (e.key === 's' || e.key === 'S')) ||
        (e.ctrlKey && (e.key === 'p' || e.key === 'P')) ||
        (e.ctrlKey && (e.key === 'u' || e.key === 'U')) ||
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i')) ||
        (e.ctrlKey && e.shiftKey && (e.key === 'J' || e.key === 'j')) ||
        (e.ctrlKey && e.shiftKey && (e.key === 'C' || e.key === 'c')) ||
        e.key === 'F12'
      ) {
        e.preventDefault();
        return false;
      }
    };

    // Desabilitar seleção de texto com mouse
    const handleSelectStart = (e) => {
      e.preventDefault();
      return false;
    };

    // Desabilitar drag and drop
    const handleDragStart = (e) => {
      e.preventDefault();
      return false;
    };

    // Adicionar event listeners
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('selectstart', handleSelectStart);
    document.addEventListener('dragstart', handleDragStart);

    // Cleanup
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('selectstart', handleSelectStart);
      document.removeEventListener('dragstart', handleDragStart);
    };
  }, []);

  const menuItems = [
    { id: 'overview', label: 'Visão Geral', icon: Home },
    { id: 'briefing', label: 'Briefing do Projeto', icon: FileText },
    { id: 'competitive', label: 'Análise Competitiva', icon: TrendingUp },
    { id: 'architecture', label: 'Arquitetura do Sistema', icon: Layers },
    { id: 'prd', label: 'PRD Refinado', icon: FileText },
    { id: 'requirements', label: 'Requisitos', icon: CheckCircle },
    { id: 'discovery', label: 'Descoberta', icon: Search },
    { id: 'apis-costs', label: 'APIs e Custos', icon: Zap },
    { id: 'schema', label: 'Esquema Prisma', icon: Database },
    { id: 'flowchart', label: 'Fluxograma', icon: GitBranch },
    { id: 'viability', label: 'Viabilidade', icon: TrendingUp },
    { id: 'names', label: 'Nomes Sugeridos', icon: Lightbulb },
    { id: 'wireframes', label: 'Wireframes', icon: Smartphone },
    { id: 'panels', label: 'Painéis', icon: Layout },
  ];

  const appNames = [
    { name: 'DivineBridge', description: 'Ponte divina que conecta almas em busca de conforto espiritual. Nome universal e memorável.' },
    { name: 'SoulConnect', description: 'Conexão direta entre almas, transmitindo esperança e apoio espiritual globalmente.' },
    { name: 'GraceLink', description: 'Link da graça divina, conectando pessoas com capelães através da tecnologia.' },
    { name: 'SpiritCare', description: 'Cuidado espiritual acessível, oferecendo apoio emocional e orientação religiosa.' },
    { name: 'FaithFlow', description: 'Fluxo de fé que conecta necessidades espirituais com orientação cristã qualificada.' },
    { name: 'DivineChat', description: 'Chat divino para conversas espirituais, oferecendo conforto e orientação cristã.' },
    { name: 'SoulSupport', description: 'Suporte para a alma, conectando pessoas em crise com capelães compassivos.' },
    { name: 'GraceGuide', description: 'Guia da graça divina, oferecendo orientação espiritual personalizada e acolhedora.' },
    { name: 'SpiritLink', description: 'Link espiritual que une pessoas em busca de conforto com capelães dedicados.' },
    { name: 'FaithConnect', description: 'Conexão de fé que transcende barreiras geográficas e linguísticas.' },
  ];

  // eslint-disable-next-line no-unused-vars
  const costEstimates = [
    {
      scenario: 'Conservador',
      users: '1.000 usuários ativos',
      messages: '50 mensagens/usuário/mês',
      characters: '5 milhões caracteres/mês',
      cost: 'R$ 540/mês'
    },
    {
      scenario: 'Moderado',
      users: '5.000 usuários ativos',
      messages: '100 mensagens/usuário/mês',
      characters: '75 milhões caracteres/mês',
      cost: 'R$ 8.940/mês'
    },
    {
      scenario: 'Otimista',
      users: '10.000 usuários ativos',
      messages: '200 mensagens/usuário/mês',
      characters: '400 milhões caracteres/mês',
      cost: 'R$ 47.940/mês'
    }
  ];

  // eslint-disable-next-line no-unused-vars
  const bubblePlans = [
    {
      plan: 'Starter',
      price: 'R$ 174/mês',
      users: '0-500 usuários',
      features: ['Aplicativo ao vivo', 'Domínio personalizado', 'Fluxos básicos']
    },
    {
      plan: 'Growth',
      price: 'R$ 804/mês',
      users: '500-5.000 usuários',
      features: ['Maior capacidade', 'Recursos avançados', 'Backup automático']
    },
    {
      plan: 'Team',
      price: 'R$ 2.394/mês',
      users: '5.000+ usuários',
      features: ['Colaboração em equipe', 'Recursos empresariais', 'Suporte prioritário']
    }
  ];

  const renderContent = () => {
    switch (selectedMenu) {
      case 'overview':
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 p-4 rounded-full">
                  <Cross className="h-12 w-12 text-blue-600" />
                </div>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Aplicativo de Capelania Cristã
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Uma plataforma digital que conecta capelães cristãos voluntários com pessoas que necessitam de apoio espiritual, emocional e orientação.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardHeader>
                  <Heart className="h-8 w-8 text-red-500 mx-auto mb-2" />
                  <CardTitle>Apoio Espiritual</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Conecta pessoas em necessidade com capelães qualificados para apoio espiritual e emocional.</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Users className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                  <CardTitle>Comunidade Global</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Plataforma global com tradução automática para superar barreiras linguísticas.</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <MessageCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
                  <CardTitle>Comunicação Segura</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Chat seguro com mensagens de texto e áudio, garantindo privacidade e confiança.</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Objetivos do MVP</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Shield className="h-4 w-4 text-green-500 mr-2" />
                    Conectar capelães cristãos qualificados com pessoas que precisam de apoio espiritual
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-4 w-4 text-green-500 mr-2" />
                    Facilitar comunicação através de mensagens de texto e áudio
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-4 w-4 text-green-500 mr-2" />
                    Implementar sistema robusto de cadastro e gerenciamento de perfis
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-4 w-4 text-green-500 mr-2" />
                    Oferecer módulo de bíblia com versículos e conteúdo devocional
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-4 w-4 text-green-500 mr-2" />
                    Disponibilizar gerador de pílulas de fé para capelães
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-4 w-4 text-green-500 mr-2" />
                    Estabelecer base escalável para futuras expansões
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        );

      case 'prd':
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="h-5 w-5 mr-2" />
                  PRD Refinado - Aplicativo de Capelania Cristã
                </CardTitle>
                <CardDescription>
                  Documento de Requisitos do Produto refinado e detalhado
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Problema a Resolver</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>Milhões de pessoas globalmente necessitam de apoio espiritual</li>
                      <li>Existe um grande número de capelães qualificados disponíveis</li>
                      <li>Ausência de plataforma centralizada para conectar essas necessidades</li>
                      <li>Barreiras geográficas e linguísticas na comunicação espiritual</li>
                    </ul>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Funcionalidades do MVP</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <h4 className="font-medium mb-2">Sistema de Autenticação</h4>
                        <ul className="list-disc list-inside text-sm text-gray-600">
                          <li>Cadastro de Membros e Capelães</li>
                          <li>Validação de credenciais</li>
                          <li>Perfis personalizados</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Comunicação</h4>
                        <ul className="list-disc list-inside text-sm text-gray-600">
                          <li>Chat de texto em tempo real</li>
                          <li>Mensagens de áudio</li>
                          <li>Tradução automática</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Solicitação de Apoio</h4>
                        <ul className="list-disc list-inside text-sm text-gray-600">
                          <li>Formulário de necessidades</li>
                          <li>Categorização de solicitações</li>
                          <li>Matching básico</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Perfis e Avaliações</h4>
                        <ul className="list-disc list-inside text-sm text-gray-600">
                          <li>Perfis de membros e capelães</li>
                          <li>Sistema de avaliações</li>
                          <li>Histórico de interações</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Módulo de Bíblia</h4>
                        <ul className="list-disc list-inside text-sm text-gray-600">
                          <li>Versículos diários</li>
                          <li>Conteúdo devocional</li>
                          <li>Sugestões por tema</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Módulo Pílula</h4>
                        <ul className="list-disc list-inside text-sm text-gray-600">
                          <li>Gerador de imagens inspiracionais</li>
                          <li>Templates para capelães</li>
                          <li>Compartilhamento automático</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Arquitetura Técnica</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm">Frontend</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-gray-600">React Native para iOS e Android</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm">Backend</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-gray-600">Node.js com Express</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm">Banco de Dados</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-gray-600">PostgreSQL</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center">
              <Button onClick={handleDownloadPRD}>
                <Download className="h-4 w-4 mr-2" />
                Baixar PRD Completo
              </Button>
            </div>
          </div>
        );

      case 'requirements':
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  Requisitos Funcionais e Não Funcionais
                </CardTitle>
                <CardDescription>
                  Especificações detalhadas dos requisitos do sistema
                </CardDescription>
              </CardHeader>
            </Card>

            <Tabs value={requirementsTab} onValueChange={setRequirementsTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="functional">Requisitos Funcionais</TabsTrigger>
                <TabsTrigger value="non-functional">Requisitos Não Funcionais</TabsTrigger>
              </TabsList>

              <TabsContent value="functional" className="space-y-6">
                <div className="grid gap-6">
                  {/* RF001 - Sistema de Autenticação e Cadastro */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                        RF001 - Sistema de Autenticação e Cadastro
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <Badge variant="secondary" className="mr-3 mt-1">RF001.1</Badge>
                          <p>O sistema deve permitir cadastro de membros com nome completo, email, telefone (opcional), país/localização, idioma preferencial e código de indicação (opcional).</p>
                        </div>
                        <div className="flex items-start">
                          <Badge variant="secondary" className="mr-3 mt-1">RF001.2</Badge>
                          <p>O sistema deve permitir cadastro de capelães com dados pessoais completos, formação/especialização, área de atuação, experiência e upload de certificados.</p>
                        </div>
                        <div className="flex items-start">
                          <Badge variant="secondary" className="mr-3 mt-1">RF001.3</Badge>
                          <p>O sistema deve validar emails únicos e formatos válidos durante o cadastro.</p>
                        </div>
                        <div className="flex items-start">
                          <Badge variant="secondary" className="mr-3 mt-1">RF001.4</Badge>
                          <p>O sistema deve detectar automaticamente país e idioma baseado na localização do usuário.</p>
                        </div>
                        <div className="flex items-start">
                          <Badge variant="secondary" className="mr-3 mt-1">RF001.5</Badge>
                          <p>O sistema deve permitir login com email e senha.</p>
                        </div>
                        <div className="flex items-start">
                          <Badge variant="secondary" className="mr-3 mt-1">RF001.6</Badge>
                          <p>O sistema deve permitir recuperação de senha via email.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* RF002 - Gestão de Perfis */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                        RF002 - Gestão de Perfis
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <Badge variant="secondary" className="mr-3 mt-1">RF002.1</Badge>
                          <p>O sistema deve permitir que membros visualizem e editem suas informações básicas.</p>
                        </div>
                        <div className="flex items-start">
                          <Badge variant="secondary" className="mr-3 mt-1">RF002.2</Badge>
                          <p>O sistema deve permitir que capelães gerenciem suas especialidades, áreas de atuação e status de disponibilidade.</p>
                        </div>
                        <div className="flex items-start">
                          <Badge variant="secondary" className="mr-3 mt-1">RF002.3</Badge>
                          <p>O sistema deve exibir perfis de capelães com especialidades, experiência e avaliações.</p>
                        </div>
                        <div className="flex items-start">
                          <Badge variant="secondary" className="mr-3 mt-1">RF002.4</Badge>
                          <p>O sistema deve permitir que capelães alterem seu status (Online/Offline/Ocupado/Disponível).</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* RF003 - Sistema de Solicitação de Apoio */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                        RF003 - Sistema de Solicitação de Apoio
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <Badge variant="secondary" className="mr-3 mt-1">RF003.1</Badge>
                          <p>O sistema deve permitir que membros criem solicitações de apoio com título, descrição e categoria.</p>
                        </div>
                        <div className="flex items-start">
                          <Badge variant="secondary" className="mr-3 mt-1">RF003.2</Badge>
                          <p>O sistema deve categorizar solicitações como: Oração, Aconselhamento, Desabafo ou Outro.</p>
                        </div>
                        <div className="flex items-start">
                          <Badge variant="secondary" className="mr-3 mt-1">RF003.3</Badge>
                          <p>O sistema deve notificar capelães disponíveis sobre novas solicitações.</p>
                        </div>
                        <div className="flex items-start">
                          <Badge variant="secondary" className="mr-3 mt-1">RF003.4</Badge>
                          <p>O sistema deve permitir que capelães aceitem ou recusem solicitações.</p>
                        </div>
                        <div className="flex items-start">
                          <Badge variant="secondary" className="mr-3 mt-1">RF003.5</Badge>
                          <p>O sistema deve criar automaticamente uma sala de chat quando uma solicitação for aceita.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* RF004 - Sistema de Comunicação */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                        RF004 - Sistema de Comunicação
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <Badge variant="secondary" className="mr-3 mt-1">RF004.1</Badge>
                          <p>O sistema deve permitir envio de mensagens de texto entre membros e capelões.</p>
                        </div>
                        <div className="flex items-start">
                          <Badge variant="secondary" className="mr-3 mt-1">RF004.2</Badge>
                          <p>O sistema deve permitir gravação e envio de mensagens de áudio (máximo 5 minutos).</p>
                        </div>
                        <div className="flex items-start">
                          <Badge variant="secondary" className="mr-3 mt-1">RF004.3</Badge>
                          <p>O sistema deve exibir status das mensagens (enviada, entregue, lida).</p>
                        </div>
                        <div className="flex items-start">
                          <Badge variant="secondary" className="mr-3 mt-1">RF004.4</Badge>
                          <p>O sistema deve manter histórico completo de conversas.</p>
                        </div>
                        <div className="flex items-start">
                          <Badge variant="secondary" className="mr-3 mt-1">RF004.5</Badge>
                          <p>O sistema deve enviar notificações push para novas mensagens.</p>
                        </div>
                        <div className="flex items-start">
                          <Badge variant="secondary" className="mr-3 mt-1">RF004.6</Badge>
                          <p>O sistema deve permitir reprodução de áudios com controles básicos (play/pause, barra de progresso).</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* RF005 - Sistema de Tradução */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                        RF005 - Sistema de Tradução
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <Badge variant="secondary" className="mr-3 mt-1">RF005.1</Badge>
                          <p>O sistema deve traduzir automaticamente mensagens de texto usando Google Translate API.</p>
                        </div>
                        <div className="flex items-start">
                          <Badge variant="secondary" className="mr-3 mt-1">RF005.2</Badge>
                          <p>O sistema deve detectar automaticamente o idioma das mensagens.</p>
                        </div>
                        <div className="flex items-start">
                          <Badge variant="secondary" className="mr-3 mt-1">RF005.3</Badge>
                          <p>O sistema deve permitir tradução manual de mensagens específicas.</p>
                        </div>
                        <div className="flex items-start">
                          <Badge variant="secondary" className="mr-3 mt-1">RF005.4</Badge>
                          <p>O sistema deve suportar tradução entre português, inglês e espanhol.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* RF006 - Sistema de Avaliação */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                        RF006 - Sistema de Avaliação
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <Badge variant="secondary" className="mr-3 mt-1">RF006.1</Badge>
                          <p>O sistema deve permitir que membros avaliem capelões após interações.</p>
                        </div>
                        <div className="flex items-start">
                          <Badge variant="secondary" className="mr-3 mt-1">RF006.2</Badge>
                          <p>O sistema deve calcular e exibir avaliação média dos capelões.</p>
                        </div>
                        <div className="flex items-start">
                          <Badge variant="secondary" className="mr-3 mt-1">RF006.3</Badge>
                          <p>O sistema deve permitir feedback simples (like/dislike) ou avaliação por estrelas (1-5).</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* RF007 - Sistema de Notificações */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                        RF007 - Sistema de Notificações
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <Badge variant="secondary" className="mr-3 mt-1">RF007.1</Badge>
                          <p>O sistema deve enviar notificações push para novas solicitações de apoio.</p>
                        </div>
                        <div className="flex items-start">
                          <Badge variant="secondary" className="mr-3 mt-1">RF007.2</Badge>
                          <p>O sistema deve enviar notificações para novas mensagens recebidas.</p>
                        </div>
                        <div className="flex items-start">
                          <Badge variant="secondary" className="mr-3 mt-1">RF007.3</Badge>
                          <p>O sistema deve enviar notificações sobre status de aprovação de capelães.</p>
                        </div>
                        <div className="flex items-start">
                          <Badge variant="secondary" className="mr-3 mt-1">RF007.4</Badge>
                          <p>O sistema deve permitir configuração de preferências de notificação.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* RF008 - Sistema de Moderação */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                        RF008 - Sistema de Moderação
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <Badge variant="secondary" className="mr-3 mt-1">RF008.1</Badge>
                          <p>O sistema deve permitir denúncia de usuários ou mensagens inadequadas.</p>
                        </div>
                        <div className="flex items-start">
                          <Badge variant="secondary" className="mr-3 mt-1">RF008.2</Badge>
                          <p>O sistema deve permitir bloqueio de usuários.</p>
                        </div>
                        <div className="flex items-start">
                          <Badge variant="secondary" className="mr-3 mt-1">RF008.3</Badge>
                          <p>O sistema deve suspender temporariamente usuários que violem as diretrizes.</p>
                        </div>
                        <div className="flex items-start">
                          <Badge variant="secondary" className="mr-3 mt-1">RF008.4</Badge>
                          <p>O sistema deve permitir que administradores revisem e aprovem capelões.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="non-functional" className="space-y-6">
                <div className="grid gap-6">
                  {/* RNF001 - Performance */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <AlertCircle className="h-5 w-5 mr-2 text-blue-600" />
                        RNF001 - Performance
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <Badge variant="outline" className="mr-3 mt-1">RNF001.1</Badge>
                          <p>O sistema deve responder a requisições de login em menos de 2 segundos.</p>
                        </div>
                        <div className="flex items-start">
                          <Badge variant="outline" className="mr-3 mt-1">RNF001.2</Badge>
                          <p>O sistema deve enviar mensagens de texto em menos de 1 segundo.</p>
                        </div>
                        <div className="flex items-start">
                          <Badge variant="outline" className="mr-3 mt-1">RNF001.3</Badge>
                          <p>O sistema deve carregar listas de conversas em menos de 3 segundos.</p>
                        </div>
                        <div className="flex items-start">
                          <Badge variant="outline" className="mr-3 mt-1">RNF001.4</Badge>
                          <p>O sistema deve suportar 5.000 usuários simultâneos sem degradação de performance.</p>
                        </div>
                        <div className="flex items-start">
                          <Badge variant="outline" className="mr-3 mt-1">RNF001.5</Badge>
                          <p>O sistema deve processar traduções de mensagens em menos de 3 segundos.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* RNF002 - Disponibilidade */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <AlertCircle className="h-5 w-5 mr-2 text-blue-600" />
                        RNF002 - Disponibilidade
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <Badge variant="outline" className="mr-3 mt-1">RNF002.1</Badge>
                          <p>O sistema deve ter uptime de 99.9% (máximo 8.76 horas de downtime por ano).</p>
                        </div>
                        <div className="flex items-start">
                          <Badge variant="outline" className="mr-3 mt-1">RNF002.2</Badge>
                          <p>O sistema deve implementar recuperação automática de falhas em menos de 5 minutos.</p>
                        </div>
                        <div className="flex items-start">
                          <Badge variant="outline" className="mr-3 mt-1">RNF002.3</Badge>
                          <p>O sistema deve manter backup automático dos dados a cada 24 horas.</p>
                        </div>
                        <div className="flex items-start">
                          <Badge variant="outline" className="mr-3 mt-1">RNF002.4</Badge>
                          <p>O sistema deve implementar redundância de servidores para alta disponibilidade.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* RNF003 - Segurança */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <AlertCircle className="h-5 w-5 mr-2 text-blue-600" />
                        RNF003 - Segurança
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <Badge variant="outline" className="mr-3 mt-1">RNF003.1</Badge>
                          <p>O sistema deve criptografar todas as mensagens em trânsito (TLS 1.3).</p>
                        </div>
                        <div className="flex items-start">
                          <Badge variant="outline" className="mr-3 mt-1">RNF003.2</Badge>
                          <p>O sistema deve armazenar senhas usando hash bcrypt com salt.</p>
                        </div>
                        <div className="flex items-start">
                          <Badge variant="outline" className="mr-3 mt-1">RNF003.3</Badge>
                          <p>O sistema deve implementar autenticação JWT com expiração de 24 horas.</p>
                        </div>
                        <div className="flex items-start">
                          <Badge variant="outline" className="mr-3 mt-1">RNF003.4</Badge>
                          <p>O sistema deve validar e sanitizar todas as entradas de usuário.</p>
                        </div>
                        <div className="flex items-start">
                          <Badge variant="outline" className="mr-3 mt-1">RNF003.5</Badge>
                          <p>O sistema deve implementar rate limiting para prevenir ataques de força bruta.</p>
                        </div>
                        <div className="flex items-start">
                          <Badge variant="outline" className="mr-3 mt-1">RNF003.6</Badge>
                          <p>O sistema deve ser compatível com LGPD e GDPR.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* RNF004 - Escalabilidade */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <AlertCircle className="h-5 w-5 mr-2 text-blue-600" />
                        RNF004 - Escalabilidade
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <Badge variant="outline" className="mr-3 mt-1">RNF004.1</Badge>
                          <p>O sistema deve suportar crescimento de 20% ao mês sem degradação.</p>
                        </div>
                        <div className="flex items-start">
                          <Badge variant="outline" className="mr-3 mt-1">RNF004.2</Badge>
                          <p>O sistema deve implementar cache distribuído para melhorar performance.</p>
                        </div>
                        <div className="flex items-start">
                          <Badge variant="outline" className="mr-3 mt-1">RNF004.3</Badge>
                          <p>O sistema deve usar balanceamento de carga para distribuir tráfego.</p>
                        </div>
                        <div className="flex items-start">
                          <Badge variant="outline" className="mr-3 mt-1">RNF004.4</Badge>
                          <p>O sistema deve implementar arquitetura de microserviços para facilitar escalabilidade.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* RNF005 - Usabilidade */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <AlertCircle className="h-5 w-5 mr-2 text-blue-600" />
                        RNF005 - Usabilidade
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <Badge variant="outline" className="mr-3 mt-1">RNF005.1</Badge>
                          <p>O sistema deve ser intuitivo para usuários com diferentes níveis de conhecimento tecnológico.</p>
                        </div>
                        <div className="flex items-start">
                          <Badge variant="outline" className="mr-3 mt-1">RNF005.2</Badge>
                          <p>O sistema deve funcionar em dispositivos móveis (iOS 12+ e Android 8+).</p>
                        </div>
                        <div className="flex items-start">
                          <Badge variant="outline" className="mr-3 mt-1">RNF005.3</Badge>
                          <p>O sistema deve ser responsivo e adaptável a diferentes tamanhos de tela.</p>
                        </div>
                        <div className="flex items-start">
                          <Badge variant="outline" className="mr-3 mt-1">RNF005.4</Badge>
                          <p>O sistema deve implementar design acessível (contraste adequado, tamanho de fonte ajustável).</p>
                        </div>
                        <div className="flex items-start">
                          <Badge variant="outline" className="mr-3 mt-1">RNF005.5</Badge>
                          <p>O sistema deve carregar em menos de 3 segundos em conexões 3G.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* RNF006 - Confiabilidade */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <AlertCircle className="h-5 w-5 mr-2 text-blue-600" />
                        RNF006 - Confiabilidade
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <Badge variant="outline" className="mr-3 mt-1">RNF006.1</Badge>
                          <p>O sistema deve garantir que mensagens não sejam perdidas durante transmissão.</p>
                        </div>
                        <div className="flex items-start">
                          <Badge variant="outline" className="mr-3 mt-1">RNF006.2</Badge>
                          <p>O sistema deve implementar retry automático para falhas temporárias de rede.</p>
                        </div>
                        <div className="flex items-start">
                          <Badge variant="outline" className="mr-3 mt-1">RNF006.3</Badge>
                          <p>O sistema deve validar integridade de dados antes de salvar no banco.</p>
                        </div>
                        <div className="flex items-start">
                          <Badge variant="outline" className="mr-3 mt-1">RNF006.4</Badge>
                          <p>O sistema deve implementar logs detalhados para auditoria e debugging.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* RNF007 - Compatibilidade */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <AlertCircle className="h-5 w-5 mr-2 text-blue-600" />
                        RNF007 - Compatibilidade
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <Badge variant="outline" className="mr-3 mt-1">RNF007.1</Badge>
                          <p>O sistema deve funcionar em iOS 12+ e Android 8+.</p>
                        </div>
                        <div className="flex items-start">
                          <Badge variant="outline" className="mr-3 mt-1">RNF007.2</Badge>
                          <p>O sistema deve ser compatível com diferentes navegadores web (Chrome, Safari, Firefox).</p>
                        </div>
                        <div className="flex items-start">
                          <Badge variant="outline" className="mr-3 mt-1">RNF007.3</Badge>
                          <p>O sistema deve funcionar em conexões de internet lentas (mínimo 1Mbps).</p>
                        </div>
                        <div className="flex items-start">
                          <Badge variant="outline" className="mr-3 mt-1">RNF007.4</Badge>
                          <p>O sistema deve ser compatível com diferentes resoluções de tela.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* RNF008 - Manutenibilidade */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <AlertCircle className="h-5 w-5 mr-2 text-blue-600" />
                        RNF008 - Manutenibilidade
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <Badge variant="outline" className="mr-3 mt-1">RNF008.1</Badge>
                          <p>O código deve seguir padrões de desenvolvimento e documentação claros.</p>
                        </div>
                        <div className="flex items-start">
                          <Badge variant="outline" className="mr-3 mt-1">RNF008.2</Badge>
                          <p>O sistema deve implementar monitoramento e alertas automáticos.</p>
                        </div>
                        <div className="flex items-start">
                          <Badge variant="outline" className="mr-3 mt-1">RNF008.3</Badge>
                          <p>O sistema deve permitir deploy contínuo sem downtime.</p>
                        </div>
                        <div className="flex items-start">
                          <Badge variant="outline" className="mr-3 mt-1">RNF008.4</Badge>
                          <p>O sistema deve ter documentação técnica completa e atualizada.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* RNF009 - Privacidade */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <AlertCircle className="h-5 w-5 mr-2 text-blue-600" />
                        RNF009 - Privacidade
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <Badge variant="outline" className="mr-3 mt-1">RNF009.1</Badge>
                          <p>O sistema deve implementar criptografia de ponta a ponta para mensagens.</p>
                        </div>
                        <div className="flex items-start">
                          <Badge variant="outline" className="mr-3 mt-1">RNF009.2</Badge>
                          <p>O sistema deve permitir exclusão completa de dados do usuário.</p>
                        </div>
                        <div className="flex items-start">
                          <Badge variant="outline" className="mr-3 mt-1">RNF009.3</Badge>
                          <p>O sistema deve implementar controle granular de permissões de dados.</p>
                        </div>
                        <div className="flex items-start">
                          <Badge variant="outline" className="mr-3 mt-1">RNF009.4</Badge>
                          <p>O sistema deve registrar e auditar todos os acessos a dados pessoais.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* RNF010 - Internacionalização */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <AlertCircle className="h-5 w-5 mr-2 text-blue-600" />
                        RNF010 - Internacionalização
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <Badge variant="outline" className="mr-3 mt-1">RNF010.1</Badge>
                          <p>O sistema deve suportar múltiplos idiomas (português, inglês, espanhol).</p>
                        </div>
                        <div className="flex items-start">
                          <Badge variant="outline" className="mr-3 mt-1">RNF010.2</Badge>
                          <p>O sistema deve adaptar formato de data e hora conforme localização.</p>
                        </div>
                        <div className="flex items-start">
                          <Badge variant="outline" className="mr-3 mt-1">RNF010.3</Badge>
                          <p>O sistema deve suportar diferentes fusos horários.</p>
                        </div>
                        <div className="flex items-start">
                          <Badge variant="outline" className="mr-3 mt-1">RNF010.4</Badge>
                          <p>O sistema deve implementar tradução automática de interface.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        );

      case 'apis-costs':
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="h-5 w-5 mr-2" />
                  APIs e Custos Estimados
                </CardTitle>
                <CardDescription>
                  Análise detalhada das APIs necessárias e custos estimados para cada serviço
                </CardDescription>
              </CardHeader>
            </Card>

            <Tabs value={apisCostsTab} onValueChange={setApisCostsTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="apis">APIs Necessárias</TabsTrigger>
                <TabsTrigger value="costs">Custos Estimados</TabsTrigger>
              </TabsList>

              <TabsContent value="apis" className="space-y-6">
                <div className="grid gap-6">
                  {/* Google Translate API */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <Globe className="h-5 w-5 mr-2 text-blue-600" />
                        Google Translate API
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Função no Sistema</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>Tradução automática de mensagens de texto em tempo real</li>
                            <li>Detecção automática de idioma das mensagens</li>
                            <li>Tradução da interface do usuário</li>
                            <li>Suporte a múltiplos idiomas (PT, EN, ES)</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Integração Técnica</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>API REST com autenticação via chave de API</li>
                            <li>Rate limiting: 100 requests/100 seconds</li>
                            <li>Suporte a 200+ idiomas</li>
                            <li>Latência média: 100-300ms por tradução</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Configuração Necessária</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>Conta Google Cloud Platform</li>
                            <li>Ativação da API de Tradução</li>
                            <li>Configuração de chave de API</li>
                            <li>Monitoramento de uso e custos</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Firebase Cloud Messaging */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <MessageCircle className="h-5 w-5 mr-2 text-green-600" />
                        Firebase Cloud Messaging (FCM)
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Função no Sistema</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>Envio de notificações push para dispositivos móveis</li>
                            <li>Notificações de novas mensagens recebidas</li>
                            <li>Alertas de novas solicitações de apoio</li>
                            <li>Notificações sobre status de aprovação de capelães</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Integração Técnica</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>SDK Firebase para React Native</li>
                            <li>Configuração de tokens de dispositivo</li>
                            <li>Segmentação por tópicos e usuários</li>
                            <li>Delivery rate superior a 95%</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Configuração Necessária</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>Projeto Firebase configurado</li>
                            <li>Arquivo google-services.json para Android</li>
                            <li>Arquivo GoogleService-Info.plist para iOS</li>
                            <li>Configuração de certificados push</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Google Maps Geocoding API */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <Globe className="h-5 w-5 mr-2 text-red-600" />
                        Google Maps Geocoding API
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Função no Sistema</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>Detecção automática de país/região do usuário</li>
                            <li>Identificação de fuso horário</li>
                            <li>Sugestão de idioma baseado na localização</li>
                            <li>Matching geográfico para capelães próximos</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Integração Técnica</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>Geocoding reverso via coordenadas GPS</li>
                            <li>Geocoding direto via endereços</li>
                            <li>Rate limiting: 2.500 requests/dia (gratuito)</li>
                            <li>Precisão de localização por país/região</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Configuração Necessária</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>Chave de API do Google Maps</li>
                            <li>Restrições de domínio/IP para segurança</li>
                            <li>Configuração de quotas de uso</li>
                            <li>Monitoramento de requisições</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Amazon S3 */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <Database className="h-5 w-5 mr-2 text-orange-600" />
                        Amazon S3 (Storage)
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Função no Sistema</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>Armazenamento de mensagens de áudio</li>
                            <li>Upload de certificados de capelães</li>
                            <li>Backup de documentos de validação</li>
                            <li>CDN para distribuição de conteúdo</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Integração Técnica</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>SDK AWS para Node.js</li>
                            <li>Upload direto via presigned URLs</li>
                            <li>Compressão automática de áudios</li>
                            <li>Configuração de CORS para acesso web</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Configuração Necessária</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>Bucket S3 configurado</li>
                            <li>Políticas de acesso e segurança</li>
                            <li>Configuração de lifecycle para arquivos</li>
                            <li>Integração com CloudFront (CDN)</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Twilio (SMS/WhatsApp) */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <MessageCircle className="h-5 w-5 mr-2 text-blue-600" />
                        Twilio (SMS/WhatsApp)
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Função no Sistema</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>Verificação de telefone via SMS</li>
                            <li>Notificações críticas via WhatsApp</li>
                            <li>Recuperação de conta via SMS</li>
                            <li>Alertas de segurança para usuários</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Integração Técnica</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>API REST para envio de SMS</li>
                            <li>Webhook para recebimento de respostas</li>
                            <li>Integração com WhatsApp Business API</li>
                            <li>Validação de números de telefone</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Configuração Necessária</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>Conta Twilio verificada</li>
                            <li>Número de telefone dedicado</li>
                            <li>Configuração de webhooks</li>
                            <li>Aprovação para WhatsApp Business</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* SendGrid (Email) */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <MessageCircle className="h-5 w-5 mr-2 text-green-600" />
                        SendGrid (Email)
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Função no Sistema</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>Envio de emails de boas-vindas</li>
                            <li>Recuperação de senha</li>
                            <li>Confirmação de cadastro</li>
                            <li>Notificações administrativas</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Integração Técnica</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>API REST para envio de emails</li>
                            <li>Templates HTML responsivos</li>
                            <li>Tracking de abertura e cliques</li>
                            <li>Lista de supressão automática</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Configuração Necessária</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>Conta SendGrid verificada</li>
                            <li>Domínio autenticado (SPF, DKIM)</li>
                            <li>Templates de email configurados</li>
                            <li>Configuração de webhooks</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="costs" className="space-y-6">
                <div className="grid gap-6">
                  {/* Custos por Cenário */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <DollarSign className="h-5 w-5 mr-2 text-green-600" />
                        Custos Estimados por Cenário
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {/* Cenário Conservador */}
                        <div className="border rounded-lg p-4">
                          <h4 className="font-semibold text-lg mb-3 text-blue-600">Cenário Conservador - 1.000 usuários ativos</h4>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <h5 className="font-medium mb-2">Google Translate API</h5>
                              <ul className="text-sm space-y-1">
                                <li>• 50 mensagens/usuário/mês = 50.000 mensagens</li>
                                <li>• 5 milhões caracteres/mês</li>
                                <li>• Custo: R$ 540/mês</li>
                              </ul>
                            </div>
                            <div>
                              <h5 className="font-medium mb-2">Firebase Cloud Messaging</h5>
                              <ul className="text-sm space-y-1">
                                <li>• 100.000 notificações/mês</li>
                                <li>• Plano gratuito até 1M/mês</li>
                                <li>• Custo: R$ 0/mês</li>
                              </ul>
                            </div>
                            <div>
                              <h5 className="font-medium mb-2">Amazon S3</h5>
                              <ul className="text-sm space-y-1">
                                <li>• 10GB armazenamento</li>
                                <li>• 100GB transferência/mês</li>
                                <li>• Custo: R$ 15/mês</li>
                              </ul>
                            </div>
                            <div>
                              <h5 className="font-medium mb-2">Twilio SMS</h5>
                              <ul className="text-sm space-y-1">
                                <li>• 2.000 SMS/mês</li>
                                <li>• R$ 0,27 por SMS</li>
                                <li>• Custo: R$ 540/mês</li>
                              </ul>
                            </div>
                            <div>
                              <h5 className="font-medium mb-2">SendGrid</h5>
                              <ul className="text-sm space-y-1">
                                <li>• 5.000 emails/mês</li>
                                <li>• Plano gratuito até 100/dia</li>
                                <li>• Custo: R$ 0/mês</li>
                              </ul>
                            </div>
                            <div>
                              <h5 className="font-medium mb-2">Google Maps API</h5>
                              <ul className="text-sm space-y-1">
                                <li>• 2.500 requests/mês</li>
                                <li>• Plano gratuito</li>
                                <li>• Custo: R$ 0/mês</li>
                              </ul>
                            </div>
                          </div>
                          <div className="mt-4 p-3 bg-green-50 rounded-lg">
                            <p className="font-semibold text-green-800">Total Estimado: R$ 1.095/mês</p>
                          </div>
                        </div>

                        {/* Cenário Moderado */}
                        <div className="border rounded-lg p-4">
                          <h4 className="font-semibold text-lg mb-3 text-orange-600">Cenário Moderado - 5.000 usuários ativos</h4>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <h5 className="font-medium mb-2">Google Translate API</h5>
                              <ul className="text-sm space-y-1">
                                <li>• 100 mensagens/usuário/mês = 500.000 mensagens</li>
                                <li>• 75 milhões caracteres/mês</li>
                                <li>• Custo: R$ 8.100/mês</li>
                              </ul>
                            </div>
                            <div>
                              <h5 className="font-medium mb-2">Firebase Cloud Messaging</h5>
                              <ul className="text-sm space-y-1">
                                <li>• 500.000 notificações/mês</li>
                                <li>• Plano gratuito até 1M/mês</li>
                                <li>• Custo: R$ 0/mês</li>
                              </ul>
                            </div>
                            <div>
                              <h5 className="font-medium mb-2">Amazon S3</h5>
                              <ul className="text-sm space-y-1">
                                <li>• 50GB armazenamento</li>
                                <li>• 500GB transferência/mês</li>
                                <li>• Custo: R$ 75/mês</li>
                              </ul>
                            </div>
                            <div>
                              <h5 className="font-medium mb-2">Twilio SMS</h5>
                              <ul className="text-sm space-y-1">
                                <li>• 10.000 SMS/mês</li>
                                <li>• R$ 0,27 por SMS</li>
                                <li>• Custo: R$ 2.700/mês</li>
                              </ul>
                            </div>
                            <div>
                              <h5 className="font-medium mb-2">SendGrid</h5>
                              <ul className="text-sm space-y-1">
                                <li>• 25.000 emails/mês</li>
                                <li>• Plano Essentials: R$ 15/mês</li>
                                <li>• Custo: R$ 15/mês</li>
                              </ul>
                            </div>
                            <div>
                              <h5 className="font-medium mb-2">Google Maps API</h5>
                              <ul className="text-sm space-y-1">
                                <li>• 12.500 requests/mês</li>
                                <li>• R$ 5 por 1.000 requests</li>
                                <li>• Custo: R$ 50/mês</li>
                              </ul>
                            </div>
                          </div>
                          <div className="mt-4 p-3 bg-orange-50 rounded-lg">
                            <p className="font-semibold text-orange-800">Total Estimado: R$ 10.940/mês</p>
                          </div>
                        </div>

                        {/* Cenário Otimista */}
                        <div className="border rounded-lg p-4">
                          <h4 className="font-semibold text-lg mb-3 text-red-600">Cenário Otimista - 10.000 usuários ativos</h4>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <h5 className="font-medium mb-2">Google Translate API</h5>
                              <ul className="text-sm space-y-1">
                                <li>• 200 mensagens/usuário/mês = 2.000.000 mensagens</li>
                                <li>• 400 milhões caracteres/mês</li>
                                <li>• Custo: R$ 43.200/mês</li>
                              </ul>
                            </div>
                            <div>
                              <h5 className="font-medium mb-2">Firebase Cloud Messaging</h5>
                              <ul className="text-sm space-y-1">
                                <li>• 1.000.000 notificações/mês</li>
                                <li>• Plano gratuito até 1M/mês</li>
                                <li>• Custo: R$ 0/mês</li>
                              </ul>
                            </div>
                            <div>
                              <h5 className="font-medium mb-2">Amazon S3</h5>
                              <ul className="text-sm space-y-1">
                                <li>• 100GB armazenamento</li>
                                <li>• 1TB transferência/mês</li>
                                <li>• Custo: R$ 150/mês</li>
                              </ul>
                            </div>
                            <div>
                              <h5 className="font-medium mb-2">Twilio SMS</h5>
                              <ul className="text-sm space-y-1">
                                <li>• 20.000 SMS/mês</li>
                                <li>• R$ 0,27 por SMS</li>
                                <li>• Custo: R$ 5.400/mês</li>
                              </ul>
                            </div>
                            <div>
                              <h5 className="font-medium mb-2">SendGrid</h5>
                              <ul className="text-sm space-y-1">
                                <li>• 50.000 emails/mês</li>
                                <li>• Plano Pro: R$ 90/mês</li>
                                <li>• Custo: R$ 90/mês</li>
                              </ul>
                            </div>
                            <div>
                              <h5 className="font-medium mb-2">Google Maps API</h5>
                              <ul className="text-sm space-y-1">
                                <li>• 25.000 requests/mês</li>
                                <li>• R$ 5 por 1.000 requests</li>
                                <li>• Custo: R$ 100/mês</li>
                              </ul>
                            </div>
                          </div>
                          <div className="mt-4 p-3 bg-red-50 rounded-lg">
                            <p className="font-semibold text-red-800">Total Estimado: R$ 48.940/mês</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Custos de Infraestrutura */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <Database className="h-5 w-5 mr-2 text-blue-600" />
                        Custos de Infraestrutura AWS
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold mb-2">EC2 (Servidores)</h4>
                            <ul className="text-sm space-y-1">
                              <li>• t3.medium (2 vCPU, 4GB RAM)</li>
                              <li>• 2 instâncias para alta disponibilidade</li>
                              <li>• Custo: R$ 200/mês por instância</li>
                              <li>• Total: R$ 400/mês</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">RDS PostgreSQL</h4>
                            <ul className="text-sm space-y-1">
                              <li>• db.t3.micro (1 vCPU, 1GB RAM)</li>
                              <li>• 20GB armazenamento</li>
                              <li>• Backup automático</li>
                              <li>• Custo: R$ 150/mês</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">ElastiCache Redis</h4>
                            <ul className="text-sm space-y-1">
                              <li>• cache.t3.micro (1 vCPU, 0.5GB RAM)</li>
                              <li>• Cache de sessões e dados</li>
                              <li>• Melhoria de performance</li>
                              <li>• Custo: R$ 100/mês</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">CloudFront (CDN)</h4>
                            <ul className="text-sm space-y-1">
                              <li>• Distribuição global de conteúdo</li>
                              <li>• 100GB transferência/mês</li>
                              <li>• Cache de arquivos estáticos</li>
                              <li>• Custo: R$ 50/mês</li>
                            </ul>
                          </div>
                        </div>
                        <div className="p-3 bg-blue-50 rounded-lg">
                          <p className="font-semibold text-blue-800">Total Infraestrutura: R$ 700/mês</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Custos de Desenvolvimento */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <Users className="h-5 w-5 mr-2 text-purple-600" />
                        Custos de Desenvolvimento e Manutenção
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold mb-2">Equipe de Desenvolvimento</h4>
                            <ul className="text-sm space-y-1">
                              <li>• 1 Desenvolvedor Full-Stack Senior</li>
                              <li>• 1 Desenvolvedor Mobile</li>
                              <li>• 1 DevOps Engineer</li>
                              <li>• 1 QA Engineer</li>
                              <li>• Custo: R$ 25.000/mês</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Ferramentas e Licenças</h4>
                            <ul className="text-sm space-y-1">
                              <li>• GitHub Pro: R$ 50/mês</li>
                              <li>• Figma Pro: R$ 100/mês</li>
                              <li>• Jira Software: R$ 200/mês</li>
                              <li>• Confluence: R$ 100/mês</li>
                              <li>• Total: R$ 450/mês</li>
                            </ul>
                          </div>
                        </div>
                        <div className="p-3 bg-purple-50 rounded-lg">
                          <p className="font-semibold text-purple-800">Total Desenvolvimento: R$ 25.450/mês</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Custos Bubble.io */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <Zap className="h-5 w-5 mr-2 text-blue-600" />
                        Custos Bubble.io (Alternativa de Desenvolvimento)
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold mb-3 text-blue-600">Vantagens do Bubble.io</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600 mb-4">
                            <li>Desenvolvimento mais rápido (redução de 60-70% no tempo)</li>
                            <li>Menor necessidade de equipe técnica especializada</li>
                            <li>Interface visual para desenvolvimento</li>
                            <li>Deploy automático e gerenciamento simplificado</li>
                            <li>Menor custo inicial de desenvolvimento</li>
                          </ul>
                        </div>

                        <div className="grid gap-4">
                          {/* Plano Starter */}
                          <div className="border rounded-lg p-4">
                            <h4 className="font-semibold text-lg mb-2 text-green-600">Plano Starter - R$ 174/mês</h4>
                            <div className="grid md:grid-cols-2 gap-4">
                              <div>
                                <h5 className="font-medium mb-2">Limitações</h5>
                                <ul className="text-sm space-y-1">
                                  <li>• 0-500 usuários</li>
                                  <li>• 50.000 execuções de workflow/mês</li>
                                  <li>• 1GB de armazenamento</li>
                                  <li>• Domínio bubble.io</li>
                                  <li>• Suporte por email</li>
                                </ul>
                              </div>
                              <div>
                                <h5 className="font-medium mb-2">Adequação ao Projeto</h5>
                                <ul className="text-sm space-y-1">
                                  <li>• Ideal para MVP inicial</li>
                                  <li>• Teste de conceito</li>
                                  <li>• Validação de mercado</li>
                                  <li>• Até 500 usuários ativos</li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          {/* Plano Growth */}
                          <div className="border rounded-lg p-4">
                            <h4 className="font-semibold text-lg mb-2 text-orange-600">Plano Growth - R$ 804/mês</h4>
                            <div className="grid md:grid-cols-2 gap-4">
                              <div>
                                <h5 className="font-medium mb-2">Limitações</h5>
                                <ul className="text-sm space-y-1">
                                  <li>• 500-5.000 usuários</li>
                                  <li>• 500.000 execuções de workflow/mês</li>
                                  <li>• 10GB de armazenamento</li>
                                  <li>• Domínio personalizado</li>
                                  <li>• Suporte prioritário</li>
                                </ul>
                              </div>
                              <div>
                                <h5 className="font-medium mb-2">Adequação ao Projeto</h5>
                                <ul className="text-sm space-y-1">
                                  <li>• Crescimento inicial</li>
                                  <li>• Funcionalidades avançadas</li>
                                  <li>• Integrações com APIs</li>
                                  <li>• Até 5.000 usuários ativos</li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          {/* Plano Team */}
                          <div className="border rounded-lg p-4">
                            <h4 className="font-semibold text-lg mb-2 text-red-600">Plano Team - R$ 2.394/mês</h4>
                            <div className="grid md:grid-cols-2 gap-4">
                              <div>
                                <h5 className="font-medium mb-2">Limitações</h5>
                                <ul className="text-sm space-y-1">
                                  <li>• 5.000+ usuários</li>
                                  <li>• 2.000.000 execuções de workflow/mês</li>
                                  <li>• 50GB de armazenamento</li>
                                  <li>• Colaboração em equipe</li>
                                  <li>• Suporte dedicado</li>
                                </ul>
                              </div>
                              <div>
                                <h5 className="font-medium mb-2">Adequação ao Projeto</h5>
                                <ul className="text-sm space-y-1">
                                  <li>• Escala significativa</li>
                                  <li>• Equipe de desenvolvimento</li>
                                  <li>• Funcionalidades complexas</li>
                                  <li>• 5.000+ usuários ativos</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          {/* Custos de Desenvolvimento Bubble.io */}
                          <div className="border rounded-lg p-4">
                            <h4 className="font-semibold mb-3 text-blue-600">Custos de Desenvolvimento Bubble.io</h4>
                            <div className="space-y-3">
                              <div>
                                <h5 className="font-medium mb-2">Equipe Reduzida</h5>
                                <ul className="text-sm space-y-1">
                                  <li>• 1 Desenvolvedor Bubble.io Senior</li>
                                  <li>• 1 Designer UX/UI</li>
                                  <li>• 1 QA Engineer</li>
                                  <li>• Custo: R$ 12.000/mês</li>
                                </ul>
                              </div>
                              <div>
                                <h5 className="font-medium mb-2">Ferramentas</h5>
                                <ul className="text-sm space-y-1">
                                  <li>• Figma Pro: R$ 100/mês</li>
                                  <li>• Notion: R$ 50/mês</li>
                                  <li>• Total: R$ 150/mês</li>
                                </ul>
                              </div>
                            </div>
                            <div className="mt-3 p-2 bg-blue-50 rounded">
                              <p className="font-semibold text-blue-800">Total Desenvolvimento: R$ 12.150/mês</p>
                            </div>
                          </div>

                          {/* Comparação de Custos */}
                          <div className="border rounded-lg p-4">
                            <h4 className="font-semibold mb-3 text-green-600">Comparação de Custos</h4>
                            <div className="space-y-3">
                              <div className="flex justify-between items-center">
                                <span className="text-sm">Desenvolvimento Tradicional:</span>
                                <span className="font-semibold text-red-600">R$ 25.450/mês</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-sm">Bubble.io:</span>
                                <span className="font-semibold text-green-600">R$ 12.150/mês</span>
                              </div>
                              <div className="border-t pt-2">
                                <div className="flex justify-between items-center">
                                  <span className="text-sm font-medium">Economia:</span>
                                  <span className="font-semibold text-green-600">R$ 13.300/mês</span>
                                </div>
                                <div className="flex justify-between items-center">
                                  <span className="text-sm font-medium">Redução:</span>
                                  <span className="font-semibold text-green-600">52%</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="p-4 bg-yellow-50 rounded-lg">
                          <h4 className="font-semibold mb-2 text-yellow-800">Considerações Importantes - Bubble.io</h4>
                          <ul className="text-sm space-y-1 text-yellow-700">
                            <li>• <strong>Limitações Técnicas:</strong> Algumas funcionalidades complexas podem ser limitadas</li>
                            <li>• <strong>Vendor Lock-in:</strong> Dependência da plataforma Bubble.io</li>
                            <li>• <strong>Customização:</strong> Menos flexibilidade para customizações específicas</li>
                            <li>• <strong>Performance:</strong> Pode ser inferior a soluções customizadas</li>
                            <li>• <strong>Escalabilidade:</strong> Limitações conforme crescimento do usuário</li>
                            <li>• <strong>Integrações:</strong> Algumas APIs podem ter limitações de integração</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Resumo Geral */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <DollarSign className="h-5 w-5 mr-2 text-green-600" />
                        Resumo Geral de Custos
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="grid md:grid-cols-3 gap-4">
                          <div className="text-center p-4 border rounded-lg">
                            <h4 className="font-semibold text-blue-600">Cenário Conservador</h4>
                            <p className="text-2xl font-bold text-blue-800">R$ 27.245/mês</p>
                            <p className="text-sm text-gray-600">1.000 usuários ativos</p>
                            <p className="text-xs text-green-600 mt-1">Bubble.io: R$ 13.945/mês</p>
                          </div>
                          <div className="text-center p-4 border rounded-lg">
                            <h4 className="font-semibold text-orange-600">Cenário Moderado</h4>
                            <p className="text-2xl font-bold text-orange-800">R$ 37.090/mês</p>
                            <p className="text-sm text-gray-600">5.000 usuários ativos</p>
                            <p className="text-xs text-green-600 mt-1">Bubble.io: R$ 23.790/mês</p>
                          </div>
                          <div className="text-center p-4 border rounded-lg">
                            <h4 className="font-semibold text-red-600">Cenário Otimista</h4>
                            <p className="text-2xl font-bold text-red-800">R$ 75.090/mês</p>
                            <p className="text-sm text-gray-600">10.000 usuários ativos</p>
                            <p className="text-xs text-green-600 mt-1">Bubble.io: R$ 61.790/mês</p>
                          </div>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <h4 className="font-semibold mb-2">Observações Importantes:</h4>
                          <ul className="text-sm space-y-1 text-gray-600">
                            <li>• Custos baseados em preços atuais das APIs e serviços</li>
                            <li>• Estimativas podem variar conforme volume de uso</li>
                            <li>• Descontos por volume podem reduzir custos em 10-20%</li>
                            <li>• Custos de desenvolvimento são para fase inicial</li>
                            <li>• Manutenção contínua pode reduzir para R$ 15.000/mês após MVP</li>
                            <li>• <strong>Bubble.io oferece economia de 52% em custos de desenvolvimento</strong></li>
                            <li>• <strong>Considerar limitações técnicas do Bubble.io vs desenvolvimento customizado</strong></li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        );

      case 'schema':
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Database className="h-5 w-5 mr-2" />
                  Esquema Prisma
                </CardTitle>
                <CardDescription>
                  Estrutura do banco de dados para o aplicativo de capelania
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 p-4 rounded-lg overflow-x-auto">
                  <pre className="text-sm">
{`generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

enum UserRole {
  MEMBER
  CHAPLAIN
  ADMIN
}

model User {
  id            String    @id @default(uuid())
  fullName      String
  email         String    @unique
  phoneNumber   String?
  country       String?
  language      String?
  referralCode  String?
  role          UserRole  @default(MEMBER)
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt

  memberProfile   MemberProfile?
  chaplainProfile ChaplainProfile?
  messagesSent    Message[] @relation("SenderMessages")
  messagesReceived Message[] @relation("ReceiverMessages")
  supportRequests SupportRequest[] @relation("RequesterSupportRequests")
  acceptedSupportRequests SupportRequest[] @relation("AcceptorSupportRequests")
}

model ChaplainProfile {
  id            String    @id @default(uuid())
  userId        String    @unique
  user          User      @relation(fields: [userId], references: [id])
  specializations String[]
  areaOfExpertise String?
  experience      String?
  certificates    String[]
  isApproved      Boolean   @default(false)
  isAvailable     Boolean   @default(true)
  rating          Float?    @default(0.0)
  totalRatings    Int       @default(0)
}

model SupportRequest {
  id            String    @id @default(uuid())
  requesterId   String
  acceptorId    String?
  title         String
  description   String
  category      SupportRequestCategory
  status        String
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt

  requester     User      @relation("RequesterSupportRequests", fields: [requesterId], references: [id])
  acceptor      User?     @relation("AcceptorSupportRequests", fields: [acceptorId], references: [id])
  messages      Message[]
}`}
                  </pre>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Principais Entidades</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li><strong>User:</strong> Usuários do sistema (membros e capelães)</li>
                    <li><strong>ChaplainProfile:</strong> Perfil específico dos capelães</li>
                    <li><strong>SupportRequest:</strong> Solicitações de apoio</li>
                    <li><strong>Message:</strong> Mensagens entre usuários</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Relacionamentos</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Usuário pode ter perfil de capelão (1:1)</li>
                    <li>Usuário pode criar múltiplas solicitações (1:N)</li>
                    <li>Capelão pode aceitar múltiplas solicitações (1:N)</li>
                    <li>Solicitação pode ter múltiplas mensagens (1:N)</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="flex justify-center">
              <Button asChild>
                <a href="/src/assets/schema.prisma" download>
                  <Download className="h-4 w-4 mr-2" />
                  Baixar Esquema Prisma
                </a>
              </Button>
            </div>
          </div>
        );

      case 'flowchart':
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <GitBranch className="h-5 w-5 mr-2" />
                  Fluxograma Mermaid
                </CardTitle>
                <CardDescription>
                  Fluxo de interação entre membros e capelães
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <img 
                    src={flowchartImage} 
                    alt="Fluxograma do aplicativo de capelania" 
                    className="mx-auto max-w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Fluxo do Membro</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal list-inside space-y-2 text-sm">
                    <li>Membro faz Login/Cadastro</li>
                    <li>Acessa seção "Solicitar Apoio"</li>
                    <li>Preenche formulário de necessidade</li>
                    <li>Solicitação enviada ao sistema</li>
                    <li>Sistema notifica capelães disponíveis</li>
                    <li>Capelão aceita solicitação</li>
                    <li>Sala de chat é aberta</li>
                    <li>Comunicação estabelecida</li>
                  </ol>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Fluxo do Capelão</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal list-inside space-y-2 text-sm">
                    <li>Capelão recebe notificação</li>
                    <li>Visualiza detalhes da solicitação</li>
                    <li>Aceita ou recusa solicitação</li>
                    <li>Se aceita, inicia conversa</li>
                    <li>Oferece apoio via texto/áudio</li>
                    <li>Se recusa, volta para fila</li>
                  </ol>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      case 'viability':
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2" />
                  Estudo de Viabilidade
                </CardTitle>
                <CardDescription>
                  Análise de mercado e viabilidade do projeto
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-green-600">Pontos Fortes do Mercado</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li><strong>Grande Demanda:</strong> Milhões de pessoas buscam apoio espiritual digitalizado</li>
                      <li><strong>Diversidade de Nichos:</strong> Mercado permite exploração de nichos específicos</li>
                      <li><strong>Tecnologia Acessível:</strong> Desenvolvimento de apps mais acessível com React Native</li>
                      <li><strong>Engajamento da Comunidade:</strong> Comunidades cristãs são engajadas e dispostas a adotar ferramentas</li>
                    </ul>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-blue-600">Oportunidades</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li><strong>Nicho Específico:</strong> Poucos apps focam na conexão direta entre capelães e pessoas</li>
                      <li><strong>Tradução Automática:</strong> Diferencial significativo para audiência global</li>
                      <li><strong>Personalização:</strong> Matching por especialização é um forte atrativo</li>
                      <li><strong>Modelo Gratuito:</strong> MVP gratuito atrai usuários iniciais</li>
                    </ul>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-orange-600">Desafios</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li><strong>Concorrência:</strong> Mercado com muitos aplicativos cristãos existentes</li>
                      <li><strong>Qualidade e Confiança:</strong> Necessário processo rigoroso de validação</li>
                      <li><strong>Monetização:</strong> Transição cuidadosa para modelos pagos</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-green-50 border-green-200">
              <CardHeader>
                <CardTitle className="text-green-800">Conclusão de Viabilidade</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-700">
                  O projeto é <strong>altamente viável</strong> devido à clara necessidade de apoio espiritual e à lacuna no mercado para uma plataforma que conecte capelães voluntários e indivíduos de forma direta, gratuita e com suporte a múltiplos idiomas.
                </p>
              </CardContent>
            </Card>
          </div>
        );

      case 'names':
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Lightbulb className="h-5 w-5 mr-2" />
                  Sugestões de Nomes Internacionais
                </CardTitle>
                <CardDescription>
                  10 nomes impactantes e memoráveis para o aplicativo de capelania cristã
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {appNames.map((app, index) => (
                    <Card key={index} className={`hover:shadow-md transition-shadow ${index < 3 ? 'border-2 border-blue-200 bg-blue-50' : ''}`}>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg flex items-center">
                          <Badge variant={index < 3 ? "default" : "outline"} className="mr-2">
                            {index < 3 ? "⭐" : index + 1}
                          </Badge>
                          {app.name}
                          {index < 3 && (
                            <Badge variant="secondary" className="ml-2 text-xs">
                              TOP 3
                            </Badge>
                          )}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600 mb-2">{app.description}</p>
                        <div className="flex flex-wrap gap-1">
                          <Badge variant="outline" className="text-xs">Internacional</Badge>
                          <Badge variant="outline" className="text-xs">Memorável</Badge>
                          <Badge variant="outline" className="text-xs">SEO Friendly</Badge>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-800 flex items-center">
                  <Target className="h-5 w-5 mr-2" />
                  Top 3 Recomendações
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <span className="text-blue-600 font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-800">DivineBridge</h4>
                      <p className="text-blue-700 text-sm">Nome mais universal, fácil de pronunciar em qualquer idioma e transmite exatamente a proposta de valor.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-green-100 p-2 rounded-full">
                      <span className="text-green-600 font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-800">SoulConnect</h4>
                      <p className="text-green-700 text-sm">Conexão emocional forte, nome moderno e fácil de lembrar para o público internacional.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-purple-100 p-2 rounded-full">
                      <span className="text-purple-600 font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-800">GraceLink</h4>
                      <p className="text-purple-700 text-sm">Combina espiritualidade com tecnologia, nome elegante e profissional.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-yellow-50 border-yellow-200">
              <CardHeader>
                <CardTitle className="text-yellow-800">Critérios de Seleção</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Internacionalização</h4>
                    <ul className="list-disc list-inside text-sm text-yellow-700">
                      <li>Fácil pronúncia em múltiplos idiomas</li>
                      <li>Sem conotações negativas em outras culturas</li>
                      <li>Memorável e único</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Disponibilidade</h4>
                    <ul className="list-disc list-inside text-sm text-yellow-700">
                      <li>Domínio .com disponível</li>
                      <li>Redes sociais livres</li>
                      <li>App stores sem conflitos</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'wireframes':
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Smartphone className="h-5 w-5 mr-2" />
                  Wireframes do Projeto
                </CardTitle>
                <CardDescription>
                  Protótipos das principais telas do aplicativo
                </CardDescription>
              </CardHeader>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Tela de Login/Cadastro</CardTitle>
                </CardHeader>
                <CardContent>
                  <img 
                    src={wireframeLogin} 
                    alt="Wireframe da tela de login" 
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                  <p className="text-sm text-gray-600 mt-2">
                    Interface limpa com campos para email e senha, botões para diferentes tipos de usuário.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Dashboard do Membro</CardTitle>
                </CardHeader>
                <CardContent>
                  <img 
                    src={wireframeDashboard} 
                    alt="Wireframe do dashboard do membro" 
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                  <p className="text-sm text-gray-600 mt-2">
                    Layout focado na funcionalidade "Solicitar Apoio" com acesso às conversas.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Tela de Chat</CardTitle>
                </CardHeader>
                <CardContent>
                  <img 
                    src={wireframeChat} 
                    alt="Wireframe da tela de chat" 
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                  <p className="text-sm text-gray-600 mt-2">
                    Interface similar ao WhatsApp com suporte a texto, áudio e tradução.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Diretrizes de Design</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">Estilo Visual</h4>
                    <ul className="list-disc list-inside text-sm text-gray-600">
                      <li>Minimalista, acolhedor e inspirador</li>
                      <li>Transmite paz e confiança</li>
                      <li>Elementos cristãos sutis</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Paleta de Cores</h4>
                    <ul className="list-disc list-inside text-sm text-gray-600">
                      <li>Tons de azul claro e branco</li>
                      <li>Detalhes em dourado ou verde água</li>
                      <li>Cores suaves e harmoniosas</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'panels':
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Settings className="h-5 w-5 mr-2" />
                  Painéis do Sistema
                </CardTitle>
                <CardDescription>
                  Requisitos detalhados dos painéis do capelão e administrador
                </CardDescription>
              </CardHeader>
            </Card>

            <Tabs value={panelsTab} onValueChange={setPanelsTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="chaplain">Painel do Capelão</TabsTrigger>
                <TabsTrigger value="admin">Painel do Administrador</TabsTrigger>
                <TabsTrigger value="user">Painel do Usuário</TabsTrigger>
              </TabsList>

              <TabsContent value="chaplain" className="space-y-6">
                <div className="grid gap-6">
                  {/* Dashboard Principal */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <UserCheck className="h-5 w-5 mr-2 text-blue-600" />
                        Dashboard Principal do Capelão
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Visão Geral</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>Resumo de solicitações pendentes e ativas</li>
                            <li>Estatísticas de atendimentos realizados</li>
                            <li>Status de disponibilidade atual</li>
                            <li>Notificações de novas solicitações</li>
                            <li>Avaliações recebidas recentemente</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Métricas Principais</h4>
                          <div className="grid md:grid-cols-3 gap-4">
                            <div className="p-3 bg-blue-50 rounded-lg">
                              <p className="text-sm text-blue-600">Solicitações Pendentes</p>
                              <p className="text-2xl font-bold text-blue-800">12</p>
                            </div>
                            <div className="p-3 bg-green-50 rounded-lg">
                              <p className="text-sm text-green-600">Atendimentos Hoje</p>
                              <p className="text-2xl font-bold text-green-800">8</p>
                            </div>
                            <div className="p-3 bg-yellow-50 rounded-lg">
                              <p className="text-sm text-yellow-600">Avaliação Média</p>
                              <p className="text-2xl font-bold text-yellow-800">4.8</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Gestão de Solicitações */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <MessageCircle className="h-5 w-5 mr-2 text-green-600" />
                        Gestão de Solicitações de Apoio
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Funcionalidades</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>Visualizar lista de solicitações pendentes</li>
                            <li>Filtrar por categoria (Oração, Aconselhamento, Desabafo)</li>
                            <li>Ordenar por urgência ou data de criação</li>
                            <li>Aceitar ou recusar solicitações</li>
                            <li>Ver histórico de solicitações atendidas</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Detalhes da Solicitação</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>Título e descrição da necessidade</li>
                            <li>Informações básicas do solicitante</li>
                            <li>Idioma preferencial</li>
                            <li>Data e hora da solicitação</li>
                            <li>Status atual (Pendente, Em Andamento, Finalizada)</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Conversas Ativas */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <MessageCircle className="h-5 w-5 mr-2 text-purple-600" />
                        Conversas Ativas
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Lista de Conversas</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>Visualizar todas as conversas em andamento</li>
                            <li>Indicador de novas mensagens não lidas</li>
                            <li>Filtrar por status (Ativa, Pausada, Finalizada)</li>
                            <li>Buscar conversas por nome do membro</li>
                            <li>Ordenar por última atividade</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Funcionalidades do Chat</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>Envio de mensagens de texto e áudio</li>
                            <li>Tradução automática de mensagens</li>
                            <li>Histórico completo da conversa</li>
                            <li>Marcar conversa como finalizada</li>
                            <li>Transferir conversa para outro capelão</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Perfil e Configurações */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <UserCheck className="h-5 w-5 mr-2 text-orange-600" />
                        Perfil e Configurações
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Gestão de Perfil</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>Editar informações pessoais e de contato</li>
                            <li>Gerenciar especialidades e áreas de atuação</li>
                            <li>Upload e atualização de certificados</li>
                            <li>Definir horários de disponibilidade</li>
                            <li>Configurar idiomas de trabalho</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Status de Disponibilidade</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>Alternar entre Online/Offline/Ocupado/Disponível</li>
                            <li>Definir mensagem de status personalizada</li>
                            <li>Configurar notificações de disponibilidade</li>
                            <li>Agendar períodos de indisponibilidade</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Preferências de Notificação</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>Configurar notificações push</li>
                            <li>Definir horários de silêncio</li>
                            <li>Escolher tipos de notificação desejados</li>
                            <li>Configurar notificações por email</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Relatórios e Estatísticas */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <TrendingUp className="h-5 w-5 mr-2 text-green-600" />
                        Relatórios e Estatísticas
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Métricas de Desempenho</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>Número de atendimentos por período</li>
                            <li>Tempo médio de resposta</li>
                            <li>Avaliações recebidas e média</li>
                            <li>Taxa de satisfação dos membros</li>
                            <li>Distribuição por categoria de solicitação</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Relatórios Disponíveis</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>Relatório mensal de atividades</li>
                            <li>Análise de feedback e avaliações</li>
                            <li>Estatísticas de conversas</li>
                            <li>Métricas de disponibilidade</li>
                            <li>Exportação de dados em PDF/Excel</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="admin" className="space-y-6">
                <div className="grid gap-6">
                  {/* Dashboard Administrativo */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <Shield className="h-5 w-5 mr-2 text-red-600" />
                        Dashboard Administrativo
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Visão Geral do Sistema</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>Total de usuários registrados (membros e capelães)</li>
                            <li>Solicitações pendentes e em andamento</li>
                            <li>Capelães ativos e disponíveis</li>
                            <li>Métricas de uso da plataforma</li>
                            <li>Alertas e notificações do sistema</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Métricas Principais</h4>
                          <div className="grid md:grid-cols-4 gap-4">
                            <div className="p-3 bg-blue-50 rounded-lg">
                              <p className="text-sm text-blue-600">Total de Usuários</p>
                              <p className="text-2xl font-bold text-blue-800">2.847</p>
                            </div>
                            <div className="p-3 bg-green-50 rounded-lg">
                              <p className="text-sm text-green-600">Capelães Ativos</p>
                              <p className="text-2xl font-bold text-green-800">156</p>
                            </div>
                            <div className="p-3 bg-yellow-50 rounded-lg">
                              <p className="text-sm text-yellow-600">Solicitações Pendentes</p>
                              <p className="text-2xl font-bold text-yellow-800">23</p>
                            </div>
                            <div className="p-3 bg-purple-50 rounded-lg">
                              <p className="text-sm text-purple-600">Conversas Ativas</p>
                              <p className="text-2xl font-bold text-purple-800">89</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Gestão de Capelães */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <UserCheck className="h-5 w-5 mr-2 text-blue-600" />
                        Gestão de Capelães
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Aprovação de Capelães</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>Revisar solicitações de cadastro de capelães</li>
                            <li>Validar certificados e documentos</li>
                            <li>Aprovar ou rejeitar candidatos</li>
                            <li>Definir níveis de acesso e permissões</li>
                            <li>Enviar notificações de aprovação/rejeição</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Gestão de Perfis</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>Visualizar e editar perfis de capelães</li>
                            <li>Gerenciar especialidades e áreas de atuação</li>
                            <li>Monitorar status de disponibilidade</li>
                            <li>Ver histórico de atividades</li>
                            <li>Suspender ou reativar contas</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Avaliações e Feedback</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>Monitorar avaliações recebidas</li>
                            <li>Analisar feedback dos membros</li>
                            <li>Identificar capelães com baixo desempenho</li>
                            <li>Implementar ações corretivas</li>
                            <li>Reconhecer capelães com excelente desempenho</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Moderação e Segurança */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <Shield className="h-5 w-5 mr-2 text-red-600" />
                        Moderação e Segurança
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Sistema de Denúncias</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>Receber e analisar denúncias de usuários</li>
                            <li>Investigar casos de comportamento inadequado</li>
                            <li>Aplicar medidas disciplinares</li>
                            <li>Bloquear usuários temporária ou permanentemente</li>
                            <li>Manter histórico de ações de moderação</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Monitoramento de Conteúdo</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>Monitorar mensagens suspeitas</li>
                            <li>Detectar spam e conteúdo inadequado</li>
                            <li>Implementar filtros automáticos</li>
                            <li>Revisar conversas reportadas</li>
                            <li>Configurar alertas de segurança</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Políticas de Segurança</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>Definir diretrizes de uso da plataforma</li>
                            <li>Configurar regras de moderação</li>
                            <li>Gerenciar listas de palavras proibidas</li>
                            <li>Implementar verificações de identidade</li>
                            <li>Configurar backups de segurança</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Gestão de Solicitações */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <MessageCircle className="h-5 w-5 mr-2 text-green-600" />
                        Gestão de Solicitações
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Monitoramento Geral</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>Visualizar todas as solicitações do sistema</li>
                            <li>Monitorar tempo de resposta dos capelães</li>
                            <li>Identificar solicitações não atendidas</li>
                            <li>Analisar distribuição por categoria</li>
                            <li>Detectar padrões de uso</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Intervenção Administrativa</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>Reatribuir solicitações entre capelães</li>
                            <li>Priorizar solicitações urgentes</li>
                            <li>Intervir em conversas problemáticas</li>
                            <li>Finalizar solicitações abandonadas</li>
                            <li>Gerar relatórios de atendimento</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Relatórios e Analytics */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <TrendingUp className="h-5 w-5 mr-2 text-purple-600" />
                        Relatórios e Analytics
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Relatórios do Sistema</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>Relatório de crescimento de usuários</li>
                            <li>Análise de performance dos capelães</li>
                            <li>Métricas de satisfação geral</li>
                            <li>Estatísticas de uso por região/idioma</li>
                            <li>Análise de tendências e sazonalidade</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Dashboards Personalizados</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>Criar dashboards customizados</li>
                            <li>Configurar alertas e notificações</li>
                            <li>Exportar dados em múltiplos formatos</li>
                            <li>Agendar relatórios automáticos</li>
                            <li>Compartilhar insights com a equipe</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Métricas de Negócio</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>Taxa de retenção de usuários</li>
                            <li>Tempo médio de resolução</li>
                            <li>Distribuição geográfica de usuários</li>
                            <li>Análise de comportamento dos usuários</li>
                            <li>ROI de funcionalidades específicas</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Configurações do Sistema */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <Settings className="h-5 w-5 mr-2 text-gray-600" />
                        Configurações do Sistema
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Configurações Gerais</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>Gerenciar configurações da plataforma</li>
                            <li>Definir limites e políticas do sistema</li>
                            <li>Configurar integrações com APIs externas</li>
                            <li>Gerenciar templates de email</li>
                            <li>Configurar backup e recuperação</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Gestão de Usuários</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>Criar e gerenciar contas de administrador</li>
                            <li>Definir níveis de permissão</li>
                            <li>Configurar autenticação e segurança</li>
                            <li>Gerenciar sessões ativas</li>
                            <li>Implementar auditoria de ações</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Manutenção do Sistema</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>Agendar manutenções programadas</li>
                            <li>Monitorar performance do sistema</li>
                            <li>Gerenciar logs e erros</li>
                            <li>Configurar alertas de sistema</li>
                            <li>Implementar atualizações</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="user" className="space-y-6">
                <div className="grid gap-6">
                  {/* Dashboard Principal do Usuário */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <Heart className="h-5 w-5 mr-2 text-pink-600" />
                        Dashboard Principal do Usuário
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Visão Geral</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>Status das solicitações de apoio enviadas</li>
                            <li>Conversas ativas com capelães</li>
                            <li>Histórico de interações anteriores</li>
                            <li>Notificações de respostas e mensagens</li>
                            <li>Recursos de apoio espiritual disponíveis</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Métricas Pessoais</h4>
                          <div className="grid md:grid-cols-3 gap-4">
                            <div className="p-3 bg-pink-50 rounded-lg">
                              <p className="text-sm text-pink-600">Solicitações Ativas</p>
                              <p className="text-2xl font-bold text-pink-800">2</p>
                            </div>
                            <div className="p-3 bg-blue-50 rounded-lg">
                              <p className="text-sm text-blue-600">Conversas Ativas</p>
                              <p className="text-2xl font-bold text-blue-800">1</p>
                            </div>
                            <div className="p-3 bg-green-50 rounded-lg">
                              <p className="text-sm text-green-600">Apoios Recebidos</p>
                              <p className="text-2xl font-bold text-green-800">15</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Solicitar Apoio */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <MessageCircle className="h-5 w-5 mr-2 text-green-600" />
                        Solicitar Apoio Espiritual
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Formulário de Solicitação</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>Campo para título da solicitação (obrigatório)</li>
                            <li>Área de texto para descrição detalhada da necessidade</li>
                            <li>Seleção de categoria (Oração, Aconselhamento, Desabafo, Outro)</li>
                            <li>Indicador de urgência (Baixa, Média, Alta)</li>
                            <li>Preferência de idioma para o capelão</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Funcionalidades Avançadas</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>Salvar rascunho da solicitação</li>
                            <li>Visualizar preview antes do envio</li>
                            <li>Editar solicitação antes da aceitação</li>
                            <li>Cancelar solicitação pendente</li>
                            <li>Reenviar solicitação não atendida</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Processo de Envio</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>Validação automática dos campos obrigatórios</li>
                            <li>Confirmação antes do envio</li>
                            <li>Notificação de envio bem-sucedido</li>
                            <li>Estimativa de tempo de resposta</li>
                            <li>Status de entrega aos capelães</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Minhas Solicitações */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <FileText className="h-5 w-5 mr-2 text-blue-600" />
                        Minhas Solicitações
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Lista de Solicitações</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>Visualizar todas as solicitações enviadas</li>
                            <li>Filtrar por status (Pendente, Em Andamento, Finalizada, Cancelada)</li>
                            <li>Ordenar por data de criação ou urgência</li>
                            <li>Buscar solicitações por título ou categoria</li>
                            <li>Ver histórico completo de cada solicitação</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Detalhes da Solicitação</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>Informações completas da solicitação</li>
                            <li>Status atual e tempo de espera</li>
                            <li>Capelão responsável (quando aceita)</li>
                            <li>Data de criação e última atualização</li>
                            <li>Opções de ação (editar, cancelar, reenviar)</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Ações Disponíveis</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>Editar solicitação pendente</li>
                            <li>Cancelar solicitação não aceita</li>
                            <li>Reenviar solicitação expirada</li>
                            <li>Marcar como resolvida</li>
                            <li>Avaliar atendimento recebido</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Conversas e Chat */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <MessageCircle className="h-5 w-5 mr-2 text-purple-600" />
                        Conversas e Chat
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Lista de Conversas</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>Visualizar todas as conversas ativas e históricas</li>
                            <li>Indicador de novas mensagens não lidas</li>
                            <li>Filtrar por status (Ativa, Pausada, Finalizada)</li>
                            <li>Buscar conversas por nome do capelão</li>
                            <li>Ordenar por última atividade</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Interface do Chat</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>Envio de mensagens de texto e áudio</li>
                            <li>Tradução automática de mensagens</li>
                            <li>Histórico completo da conversa</li>
                            <li>Indicadores de status (enviada, entregue, lida)</li>
                            <li>Emojis e expressões para comunicação</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Funcionalidades do Chat</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>Gravação de áudio (máximo 5 minutos)</li>
                            <li>Reprodução de mensagens de voz</li>
                            <li>Tradução manual de mensagens específicas</li>
                            <li>Marcar conversa como finalizada</li>
                            <li>Solicitar novo capelão se necessário</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Configurações de Privacidade</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>Configurar notificações de mensagens</li>
                            <li>Definir horários de silêncio</li>
                            <li>Bloquear capelão específico</li>
                            <li>Excluir histórico de conversa</li>
                            <li>Configurar tradução automática</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Perfil e Configurações */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <UserCheck className="h-5 w-5 mr-2 text-orange-600" />
                        Perfil e Configurações
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Gestão de Perfil</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>Editar informações pessoais (nome, email, telefone)</li>
                            <li>Atualizar país/região de localização</li>
                            <li>Configurar idioma preferencial</li>
                            <li>Adicionar ou remover foto de perfil</li>
                            <li>Definir preferências de comunicação</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Preferências de Apoio</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>Definir categorias de interesse</li>
                            <li>Configurar nível de urgência padrão</li>
                            <li>Escolher tipo de capelão preferido</li>
                            <li>Definir horários de disponibilidade</li>
                            <li>Configurar notificações de disponibilidade</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Configurações de Notificação</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>Notificações push para novas mensagens</li>
                            <li>Alertas de capelão disponível</li>
                            <li>Notificações de status de solicitação</li>
                            <li>Configurar horários de silêncio</li>
                            <li>Notificações por email</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Privacidade e Segurança</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>Alterar senha da conta</li>
                            <li>Configurar autenticação de dois fatores</li>
                            <li>Gerenciar sessões ativas</li>
                            <li>Configurar visibilidade do perfil</li>
                            <li>Excluir conta permanentemente</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Histórico e Avaliações */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <TrendingUp className="h-5 w-5 mr-2 text-green-600" />
                        Histórico e Avaliações
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Histórico de Interações</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>Visualizar todas as solicitações anteriores</li>
                            <li>Histórico completo de conversas</li>
                            <li>Estatísticas de uso da plataforma</li>
                            <li>Capelães com quem já interagiu</li>
                            <li>Exportar histórico pessoal</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Sistema de Avaliação</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>Avaliar capelões após atendimento</li>
                            <li>Sistema de estrelas (1-5) ou like/dislike</li>
                            <li>Comentários opcionais sobre o atendimento</li>
                            <li>Histórico de avaliações realizadas</li>
                            <li>Editar avaliação anterior</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Feedback e Sugestões</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>Enviar feedback sobre a plataforma</li>
                            <li>Reportar problemas técnicos</li>
                            <li>Sugerir melhorias</li>
                            <li>Denunciar comportamento inadequado</li>
                            <li>Acompanhar status de denúncias</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Recursos e Ajuda */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <Heart className="h-5 w-5 mr-2 text-red-600" />
                        Recursos e Ajuda
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Centro de Ajuda</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>FAQ com perguntas frequentes</li>
                            <li>Tutoriais de uso da plataforma</li>
                            <li>Guia de boas práticas</li>
                            <li>Contato com suporte técnico</li>
                            <li>Base de conhecimento</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Recursos Espirituais</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>Biblioteca de orações e meditações</li>
                            <li>Artigos sobre bem-estar espiritual</li>
                            <li>Vídeos de orientação</li>
                            <li>Podcasts e conteúdo de áudio</li>
                            <li>Comunidade de apoio</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Informações de Segurança</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>Política de privacidade</li>
                            <li>Termos de uso da plataforma</li>
                            <li>Diretrizes de segurança</li>
                            <li>Informações sobre LGPD</li>
                            <li>Procedimentos de emergência</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        );

      case 'discovery':
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Search className="h-5 w-5 mr-2" />
                  Descoberta do Produto
                </CardTitle>
                <CardDescription>
                  Insights estratégicos, dores, ganhos, oportunidades e personas do sistema
                </CardDescription>
              </CardHeader>
            </Card>
            <Tabs value={discoveryTab} onValueChange={setDiscoveryTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-1">
                <TabsTrigger value="pains-gains" className="text-xs">Dores e Ganhos</TabsTrigger>
                <TabsTrigger value="priority-map" className="text-xs">Mapa de Prioridade</TabsTrigger>
                <TabsTrigger value="opportunities" className="text-xs">Oportunidades</TabsTrigger>
                <TabsTrigger value="success-criteria" className="text-xs">Critérios</TabsTrigger>
                <TabsTrigger value="personas-journey" className="text-xs">Jornada</TabsTrigger>
                <TabsTrigger value="questions-solutions" className="text-xs">Perguntas</TabsTrigger>
                <TabsTrigger value="personas" className="text-xs">Personas</TabsTrigger>
              </TabsList>
              <TabsContent value="pains-gains" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <AlertCircle className="h-5 w-5 mr-2 text-red-600" />
                        Dores dos Usuários
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Dificuldade em encontrar apoio espiritual confiável e imediato</li>
                        <li>Sentimento de isolamento em momentos de crise</li>
                        <li>Barreiras linguísticas para acessar ajuda</li>
                        <li>Preocupação com privacidade e confidencialidade</li>
                        <li>Falta de acompanhamento após o atendimento inicial</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <Smile className="h-5 w-5 mr-2 text-green-600" />
                        Ganhos dos Usuários
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Acesso rápido a capelães qualificados</li>
                        <li>Atendimento personalizado e empático</li>
                        <li>Plataforma segura e confidencial</li>
                        <li>Recursos de apoio disponíveis 24/7</li>
                        <li>Histórico de interações e acompanhamento contínuo</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <AlertCircle className="h-5 w-5 mr-2 text-yellow-600" />
                        Dores dos Capelães
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Dificuldade em alcançar pessoas que precisam de apoio</li>
                        <li>Gestão ineficiente de solicitações e atendimentos</li>
                        <li>Falta de feedback estruturado sobre o atendimento</li>
                        <li>Desafios com comunicação em diferentes idiomas</li>
                        <li>Excesso de demandas em horários críticos</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <Smile className="h-5 w-5 mr-2 text-blue-600" />
                        Ganhos dos Capelães
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Plataforma centralizada para gerenciar atendimentos</li>
                        <li>Facilidade para alcançar e apoiar mais pessoas</li>
                        <li>Ferramentas de tradução e comunicação integradas</li>
                        <li>Feedback e avaliações para aprimoramento contínuo</li>
                        <li>Flexibilidade para definir horários de atendimento</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <AlertCircle className="h-5 w-5 mr-2 text-purple-600" />
                        Dores dos Administradores
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Dificuldade em monitorar qualidade dos atendimentos</li>
                        <li>Gestão manual de capelães e solicitações</li>
                        <li>Falta de métricas e relatórios em tempo real</li>
                        <li>Desafios para garantir segurança e privacidade</li>
                        <li>Necessidade de intervenção em casos críticos</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <Smile className="h-5 w-5 mr-2 text-purple-600" />
                        Ganhos dos Administradores
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Visão centralizada de toda a operação</li>
                        <li>Automação de processos de gestão</li>
                        <li>Relatórios detalhados e métricas em tempo real</li>
                        <li>Ferramentas para moderação e segurança</li>
                        <li>Capacidade de escalar o serviço com eficiência</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="priority-map" className="space-y-6">
                <div className="grid gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <Target className="h-5 w-5 mr-2 text-red-600" />
                        Prioridade Alta (MVP)
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Funcionalidades Essenciais</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>Sistema de cadastro e autenticação de usuários e capelães</li>
                            <li>Formulário de solicitação de apoio espiritual</li>
                            <li>Chat básico com mensagens de texto</li>
                            <li>Sistema de matching entre solicitações e capelães</li>
                            <li>Perfis básicos de usuários e capelães</li>
                            <li>Notificações push para novas mensagens</li>
                            <li><strong>Módulo de Bíblia:</strong> Versículos, reflexões e conteúdo devocional</li>
                            <li><strong>Módulo Pílula:</strong> Gerador de pílulas de fé para capelães compartilharem</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Justificativa</h4>
                          <p className="text-gray-600">Essas funcionalidades são o mínimo viável para conectar pessoas que precisam de apoio com capelães disponíveis, garantindo a proposta de valor principal do produto.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <Target className="h-5 w-5 mr-2 text-yellow-600" />
                        Prioridade Média (V2)
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Melhorias e Expansões</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>Sistema de tradução automática (Google Translate)</li>
                            <li>Mensagens de áudio e gravação de voz</li>
                            <li>Sistema de avaliação e feedback</li>
                            <li>Dashboard administrativo básico</li>
                            <li>Histórico de conversas e solicitações</li>
                            <li>Sistema de moderação e denúncias</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Justificativa</h4>
                          <p className="text-gray-600">Essas funcionalidades melhoram significativamente a experiência do usuário e adicionam recursos importantes para a operação da plataforma.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <Target className="h-5 w-5 mr-2 text-green-600" />
                        Prioridade Baixa (V3+)
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Funcionalidades Avançadas</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>Inteligência artificial para matching inteligente</li>
                            <li>Videoconferência e chamadas de voz</li>
                            <li>Biblioteca de recursos espirituais</li>
                            <li>Sistema de gamificação e recompensas</li>
                            <li>Integração com redes sociais</li>
                            <li>Analytics avançados e machine learning</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Justificativa</h4>
                          <p className="text-gray-600">Essas funcionalidades são "nice-to-have" que podem ser implementadas após validação do produto e crescimento da base de usuários.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <Clock className="h-5 w-5 mr-2 text-blue-600" />
                        Cronograma de Implementação
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="grid md:grid-cols-3 gap-4">
                          <div className="p-3 bg-red-50 rounded-lg border-l-4 border-red-500">
                            <h4 className="font-semibold text-red-800">MVP (3-6 meses)</h4>
                            <p className="text-sm text-red-700">Funcionalidades essenciais para lançamento</p>
                          </div>
                          <div className="p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
                            <h4 className="font-semibold text-yellow-800">V2 (6-12 meses)</h4>
                            <p className="text-sm text-yellow-700">Melhorias e expansões baseadas em feedback</p>
                          </div>
                          <div className="p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                            <h4 className="font-semibold text-green-800">V3+ (12+ meses)</h4>
                            <p className="text-sm text-green-700">Funcionalidades avançadas e diferenciação</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="opportunities" className="space-y-6">
                <div className="grid gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <TrendingUp className="h-5 w-5 mr-2 text-green-600" />
                        Oportunidades de Mercado
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Crescimento do Mercado</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>Demanda crescente por apoio espiritual e emocional</li>
                            <li>Digitalização acelerada dos serviços religiosos</li>
                            <li>Globalização e necessidade de suporte multicultural</li>
                            <li>Isolamento social pós-pandemia</li>
                            <li>Busca por comunidades virtuais de fé</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Gaps no Mercado</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>Falta de plataformas especializadas em capelania</li>
                            <li>Ausência de soluções multilíngues para apoio espiritual</li>
                            <li>Carência de ferramentas para capelães voluntários</li>
                            <li>Necessidade de plataformas seguras e confiáveis</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <Users className="h-5 w-5 mr-2 text-blue-600" />
                        Oportunidades de Usuários
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Segmentos de Usuários</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>Pessoas em crise pessoal ou espiritual</li>
                            <li>Indivíduos isolados geograficamente</li>
                            <li>Comunidades religiosas dispersas</li>
                            <li>Pessoas com barreiras linguísticas</li>
                            <li>Indivíduos que preferem anonimato</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Comportamentos e Necessidades</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>Busca por apoio imediato e acessível</li>
                            <li>Preferência por comunicação digital</li>
                            <li>Necessidade de confidencialidade</li>
                            <li>Desejo de conexão com pessoas de fé</li>
                            <li>Busca por orientação espiritual personalizada</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <Heart className="h-5 w-5 mr-2 text-red-600" />
                        Oportunidades de Capelães
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Capelães Disponíveis</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>Capelães aposentados com disponibilidade</li>
                            <li>Líderes religiosos em áreas rurais</li>
                            <li>Capelães voluntários em organizações</li>
                            <li>Estudantes de teologia e seminário</li>
                            <li>Capelães com experiência multicultural</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Motivações e Desejos</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>Desejo de servir e ajudar pessoas</li>
                            <li>Busca por flexibilidade de horários</li>
                            <li>Interesse em alcançar mais pessoas</li>
                            <li>Necessidade de ferramentas modernas</li>
                            <li>Desejo de continuar ativo na missão</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <Zap className="h-5 w-5 mr-2 text-yellow-600" />
                        Oportunidades Tecnológicas
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Tecnologias Disponíveis</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>APIs de tradução automática avançadas</li>
                            <li>Plataformas de desenvolvimento no-code</li>
                            <li>Serviços de comunicação em tempo real</li>
                            <li>Ferramentas de IA para matching</li>
                            <li>Plataformas de pagamento seguras</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Tendências Tecnológicas</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>Crescimento de aplicativos de saúde mental</li>
                            <li>Adoção de plataformas de comunidade virtual</li>
                            <li>Demanda por soluções multilíngues</li>
                            <li>Preocupação com privacidade e segurança</li>
                            <li>Preferência por interfaces simples e intuitivas</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="success-criteria" className="space-y-6">
                <div className="grid gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <BarChart3 className="h-5 w-5 mr-2 text-green-600" />
                        Métricas de Engajamento
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Usuários Ativos</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>1.000 usuários ativos mensais no primeiro ano</li>
                            <li>5.000 usuários ativos mensais no segundo ano</li>
                            <li>Taxa de retenção de 60% após 30 dias</li>
                            <li>Taxa de retenção de 40% após 90 dias</li>
                            <li>Crescimento de 20% mês a mês</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Capelães Ativos</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>100 capelães ativos no primeiro ano</li>
                            <li>500 capelães ativos no segundo ano</li>
                            <li>Taxa de retenção de 80% após 30 dias</li>
                            <li>Média de 10 atendimentos por capelão/mês</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <MessageCircle className="h-5 w-5 mr-2 text-blue-600" />
                        Métricas de Interação
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Solicitações e Atendimentos</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>500 solicitações de apoio/mês no primeiro ano</li>
                            <li>2.500 solicitações de apoio/mês no segundo ano</li>
                            <li>Taxa de aceitação de solicitações: 90%</li>
                            <li>Tempo médio de resposta: &lt; 2 horas</li>
                            <li>Duração média de conversa: 30 minutos</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Qualidade do Atendimento</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>Avaliação média dos capelães: 4.5/5</li>
                            <li>Taxa de satisfação dos usuários: 85%</li>
                            <li>Taxa de resolução de solicitações: 95%</li>
                            <li>Taxa de reincidência de usuários: 70%</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <Globe className="h-5 w-5 mr-2 text-purple-600" />
                        Métricas de Crescimento
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Expansão Geográfica</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>Presença em 3 países no primeiro ano</li>
                            <li>Presença em 10 países no segundo ano</li>
                            <li>Suporte a 5 idiomas no primeiro ano</li>
                            <li>Suporte a 10 idiomas no segundo ano</li>
                            <li>Capelães de 20 nacionalidades diferentes</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Diversidade de Usuários</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>Usuários de 50 países diferentes</li>
                            <li>Representação de 15 denominações religiosas</li>
                            <li>Faixa etária: 18-75 anos</li>
                            <li>Distribuição equilibrada entre gêneros</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <Shield className="h-5 w-5 mr-2 text-orange-600" />
                        Métricas de Qualidade e Segurança
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Segurança e Privacidade</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>100% de conformidade com LGPD</li>
                            <li>Zero violações de segurança</li>
                            <li>Uptime da plataforma: 99.9%</li>
                            <li>Tempo de resposta da aplicação: &lt; 2s</li>
                            <li>Taxa de denúncias: &lt; 1%</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Qualidade do Serviço</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>Taxa de aprovação de capelães: 95%</li>
                            <li>Taxa de suspensão de usuários: &lt; 2%</li>
                            <li>Taxa de resolução de problemas: 98%</li>
                            <li>Tempo de resposta do suporte: &lt; 24h</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <DollarSign className="h-5 w-5 mr-2 text-green-600" />
                        Métricas Financeiras (Futuro)
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Receita e Sustentabilidade</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>Modelo de freemium com funcionalidades premium</li>
                            <li>Doações voluntárias para capelães</li>
                            <li>Parcerias com organizações religiosas</li>
                            <li>Receita de R$ 50.000/mês no segundo ano</li>
                            <li>Break-even no 18º mês de operação</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Custos Operacionais</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>Custo por usuário ativo: &lt; R$ 5/mês</li>
                            <li>Custo por capelão ativo: &lt; R$ 20/mês</li>
                            <li>Margem de contribuição: &gt; 60%</li>
                            <li>ROI de marketing: &gt; 300%</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="personas-journey" className="space-y-6">
                <div className="grid gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <User className="h-5 w-5 mr-2 text-blue-600" />
                        Jornada do Usuário (Membro)
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="grid md:grid-cols-5 gap-4">
                          <div className="text-center p-3 bg-blue-50 rounded-lg">
                            <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">1</div>
                            <h4 className="font-semibold text-sm">Descoberta</h4>
                            <p className="text-xs text-gray-600">Encontra a plataforma</p>
                          </div>
                          <div className="text-center p-3 bg-blue-50 rounded-lg">
                            <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">2</div>
                            <h4 className="font-semibold text-sm">Cadastro</h4>
                            <p className="text-xs text-gray-600">Cria conta</p>
                          </div>
                          <div className="text-center p-3 bg-blue-50 rounded-lg">
                            <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">3</div>
                            <h4 className="font-semibold text-sm">Solicitação</h4>
                            <p className="text-xs text-gray-600">Pedido de ajuda</p>
                          </div>
                          <div className="text-center p-3 bg-blue-50 rounded-lg">
                            <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">4</div>
                            <h4 className="font-semibold text-sm">Atendimento</h4>
                            <p className="text-xs text-gray-600">Conversa com capelão</p>
                          </div>
                          <div className="text-center p-3 bg-blue-50 rounded-lg">
                            <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">5</div>
                            <h4 className="font-semibold text-sm">Avaliação</h4>
                            <p className="text-xs text-gray-600">Feedback</p>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Detalhes da Jornada</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li><strong>Descoberta:</strong> Usuário encontra a plataforma através de busca, redes sociais ou indicação</li>
                            <li><strong>Cadastro:</strong> Cria conta, preenche perfil básico e define preferências</li>
                            <li><strong>Solicitação:</strong> Preenche formulário detalhando necessidade de apoio espiritual</li>
                            <li><strong>Atendimento:</strong> Conecta com capelão e mantém conversa via chat</li>
                            <li><strong>Avaliação:</strong> Avalia o atendimento e pode solicitar novo apoio</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <Heart className="h-5 w-5 mr-2 text-green-600" />
                        Jornada do Capelão
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="grid md:grid-cols-6 gap-4">
                          <div className="text-center p-3 bg-green-50 rounded-lg">
                            <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">1</div>
                            <h4 className="font-semibold text-sm">Cadastro</h4>
                            <p className="text-xs text-gray-600">Registro inicial</p>
                          </div>
                          <div className="text-center p-3 bg-green-50 rounded-lg">
                            <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">2</div>
                            <h4 className="font-semibold text-sm">Aprovação</h4>
                            <p className="text-xs text-gray-600">Validação admin</p>
                          </div>
                          <div className="text-center p-3 bg-green-50 rounded-lg">
                            <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">3</div>
                            <h4 className="font-semibold text-sm">Configuração</h4>
                            <p className="text-xs text-gray-600">Perfil completo</p>
                          </div>
                          <div className="text-center p-3 bg-green-50 rounded-lg">
                            <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">4</div>
                            <h4 className="font-semibold text-sm">Disponibilidade</h4>
                            <p className="text-xs text-gray-600">Online para atender</p>
                          </div>
                          <div className="text-center p-3 bg-green-50 rounded-lg">
                            <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">5</div>
                            <h4 className="font-semibold text-sm">Atendimento</h4>
                            <p className="text-xs text-gray-600">Conversa com usuário</p>
                          </div>
                          <div className="text-center p-3 bg-green-50 rounded-lg">
                            <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">6</div>
                            <h4 className="font-semibold text-sm">Feedback</h4>
                            <p className="text-xs text-gray-600">Recebe avaliação</p>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Detalhes da Jornada</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li><strong>Cadastro:</strong> Capelão se registra na plataforma com credenciais</li>
                            <li><strong>Aprovação:</strong> Administrador valida documentos e aprova cadastro</li>
                            <li><strong>Configuração:</strong> Completa perfil, especialidades e horários</li>
                            <li><strong>Disponibilidade:</strong> Define status online e recebe solicitações</li>
                            <li><strong>Atendimento:</strong> Aceita solicitação e inicia conversa</li>
                            <li><strong>Feedback:</strong> Recebe avaliação e pode continuar atendendo</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <Shield className="h-5 w-5 mr-2 text-purple-600" />
                        Jornada do Administrador
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="grid md:grid-cols-5 gap-4">
                          <div className="text-center p-3 bg-purple-50 rounded-lg">
                            <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">1</div>
                            <h4 className="font-semibold text-sm">Monitoramento</h4>
                            <p className="text-xs text-gray-600">Acompanha sistema</p>
                          </div>
                          <div className="text-center p-3 bg-purple-50 rounded-lg">
                            <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">2</div>
                            <h4 className="font-semibold text-sm">Aprovação</h4>
                            <p className="text-xs text-gray-600">Valida capelães</p>
                          </div>
                          <div className="text-center p-3 bg-purple-50 rounded-lg">
                            <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">3</div>
                            <h4 className="font-semibold text-sm">Moderação</h4>
                            <p className="text-xs text-gray-600">Gerencia conflitos</p>
                          </div>
                          <div className="text-center p-3 bg-purple-50 rounded-lg">
                            <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">4</div>
                            <h4 className="font-semibold text-sm">Análise</h4>
                            <p className="text-xs text-gray-600">Relatórios</p>
                          </div>
                          <div className="text-center p-3 bg-purple-50 rounded-lg">
                            <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">5</div>
                            <h4 className="font-semibold text-sm">Otimização</h4>
                            <p className="text-xs text-gray-600">Melhorias</p>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Detalhes da Jornada</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li><strong>Monitoramento:</strong> Acompanha métricas e status da plataforma</li>
                            <li><strong>Aprovação:</strong> Revisa e aprova cadastros de capelães</li>
                            <li><strong>Moderação:</strong> Gerencia denúncias e conflitos</li>
                            <li><strong>Análise:</strong> Gera relatórios e analisa performance</li>
                            <li><strong>Otimização:</strong> Implementa melhorias baseadas em dados</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <AlertCircle className="h-5 w-5 mr-2 text-orange-600" />
                        Pontos de Atenção na Jornada
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Momentos Críticos</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li><strong>Primeira solicitação:</strong> Experiência inicial deve ser positiva</li>
                            <li><strong>Tempo de resposta:</strong> Capelães devem responder rapidamente</li>
                            <li><strong>Qualidade do atendimento:</strong> Conversas devem ser empáticas e úteis</li>
                            <li><strong>Resolução de problemas:</strong> Suporte deve ser eficiente</li>
                            <li><strong>Retenção:</strong> Usuários devem retornar para novos apoios</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Oportunidades de Melhoria</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>Onboarding personalizado para novos usuários</li>
                            <li>Sistema de recomendações de capelães</li>
                            <li>Gamificação para engajamento</li>
                            <li>Comunidade de apoio entre usuários</li>
                            <li>Recursos educativos e de autoajuda</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="questions-solutions" className="space-y-6">
                <div className="grid gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <HelpCircle className="h-5 w-5 mr-2 text-blue-600" />
                        Perguntas Frequentes dos Usuários
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="border-l-4 border-blue-500 pl-4">
                          <h4 className="font-semibold text-blue-800">Como funciona o sistema de apoio espiritual?</h4>
                          <p className="text-gray-600 mt-1">O usuário cria uma solicitação detalhando sua necessidade, e a plataforma conecta com um capelão disponível para conversa via chat.</p>
                        </div>
                        <div className="border-l-4 border-blue-500 pl-4">
                          <h4 className="font-semibold text-blue-800">Os capelões são qualificados e verificados?</h4>
                          <p className="text-gray-600 mt-1">Sim, todos os capelães passam por processo de verificação de credenciais e aprovação administrativa antes de atender.</p>
                        </div>
                        <div className="border-l-4 border-blue-500 pl-4">
                          <h4 className="font-semibold text-blue-800">Minhas conversas são confidenciais?</h4>
                          <p className="text-gray-600 mt-1">Absolutamente. Todas as conversas são criptografadas e protegidas pela LGPD. Apenas você e o capelão têm acesso.</p>
                        </div>
                        <div className="border-l-4 border-blue-500 pl-4">
                          <h4 className="font-semibold text-blue-800">Posso escolher um capelão específico?</h4>
                          <p className="text-gray-600 mt-1">O sistema faz matching automático baseado na disponibilidade e especialidades, mas você pode solicitar um capelão específico se desejar.</p>
                        </div>
                        <div className="border-l-4 border-blue-500 pl-4">
                          <h4 className="font-semibold text-blue-800">O serviço é gratuito?</h4>
                          <p className="text-gray-600 mt-1">O serviço básico é gratuito. Funcionalidades premium podem ter custo adicional no futuro.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <Heart className="h-5 w-5 mr-2 text-green-600" />
                        Perguntas dos Capelães
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="border-l-4 border-green-500 pl-4">
                          <h4 className="font-semibold text-green-800">Como me cadastro como capelão?</h4>
                          <p className="text-gray-600 mt-1">Preencha o formulário de cadastro com suas credenciais e documentos. Após análise, você será aprovado para atender.</p>
                        </div>
                        <div className="border-l-4 border-green-500 pl-4">
                          <h4 className="font-semibold text-green-800">Posso definir meus horários de atendimento?</h4>
                          <p className="text-gray-600 mt-1">Sim, você pode definir quando está disponível para atender e receber solicitações apenas nesses horários.</p>
                        </div>
                        <div className="border-l-4 border-green-500 pl-4">
                          <h4 className="font-semibold text-green-800">Como funciona o sistema de avaliação?</h4>
                          <p className="text-gray-600 mt-1">Após cada atendimento, o usuário pode avaliar sua performance. Essas avaliações ajudam a melhorar o serviço.</p>
                        </div>
                        <div className="border-l-4 border-green-500 pl-4">
                          <h4 className="font-semibold text-green-800">Posso recusar uma solicitação?</h4>
                          <p className="text-gray-600 mt-1">Sim, você pode recusar solicitações que não se sinta confortável em atender. O sistema redistribuirá para outro capelão.</p>
                        </div>
                        <div className="border-l-4 border-green-500 pl-4">
                          <h4 className="font-semibold text-green-800">Há suporte para diferentes idiomas?</h4>
                          <p className="text-gray-600 mt-1">Sim, o sistema possui tradução automática para facilitar a comunicação entre idiomas diferentes.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <Shield className="h-5 w-5 mr-2 text-purple-600" />
                        Perguntas Técnicas
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="border-l-4 border-purple-500 pl-4">
                          <h4 className="font-semibold text-purple-800">A plataforma funciona em todos os dispositivos?</h4>
                          <p className="text-gray-600 mt-1">Sim, a plataforma é responsiva e funciona em smartphones, tablets e computadores através do navegador.</p>
                        </div>
                        <div className="border-l-4 border-purple-500 pl-4">
                          <h4 className="font-semibold text-purple-800">Como funciona a tradução automática?</h4>
                          <p className="text-gray-600 mt-1">Utilizamos a API do Google Translate para traduzir mensagens automaticamente entre português, inglês e espanhol.</p>
                        </div>
                        <div className="border-l-4 border-purple-500 pl-4">
                          <h4 className="font-semibold text-purple-800">Os dados são seguros?</h4>
                          <p className="text-gray-600 mt-1">Sim, utilizamos criptografia de ponta a ponta e seguimos todas as diretrizes da LGPD para proteger seus dados.</p>
                        </div>
                        <div className="border-l-4 border-purple-500 pl-4">
                          <h4 className="font-semibold text-purple-800">Como funciona o sistema de notificações?</h4>
                          <p className="text-gray-600 mt-1">Você recebe notificações push para novas mensagens e atualizações de status das suas solicitações.</p>
                        </div>
                        <div className="border-l-4 border-purple-500 pl-4">
                          <h4 className="font-semibold text-purple-800">Posso exportar minhas conversas?</h4>
                          <p className="text-gray-600 mt-1">Sim, você pode exportar o histórico de suas conversas em formato PDF para manter um registro pessoal.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <Zap className="h-5 w-5 mr-2 text-orange-600" />
                        Soluções para Problemas Comuns
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Problemas de Conexão</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li><strong>Solução:</strong> Verificar conexão com internet e recarregar a página</li>
                            <li><strong>Prevenção:</strong> Usar conexão estável e manter aplicativo atualizado</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Problemas de Tradução</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li><strong>Solução:</strong> Usar tradução manual para mensagens específicas</li>
                            <li><strong>Prevenção:</strong> Escrever mensagens claras e objetivas</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Problemas de Notificação</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li><strong>Solução:</strong> Verificar configurações de notificação do navegador</li>
                            <li><strong>Prevenção:</strong> Permitir notificações do site nas configurações</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Problemas de Áudio</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li><strong>Solução:</strong> Verificar permissões de microfone e alto-falantes</li>
                            <li><strong>Prevenção:</strong> Testar equipamentos antes de iniciar conversa</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="personas" className="space-y-6">
                <div className="grid gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <User className="h-5 w-5 mr-2 text-blue-600" />
                        Persona: Maria Silva - Usuária em Crise
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold mb-2">Perfil Demográfico</h4>
                            <ul className="list-disc list-inside space-y-1 text-gray-600">
                              <li>Idade: 35 anos</li>
                              <li>Localização: São Paulo, SP</li>
                              <li>Profissão: Enfermeira</li>
                              <li>Estado civil: Divorciada</li>
                              <li>Religião: Católica</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Comportamento</h4>
                            <ul className="list-disc list-inside space-y-1 text-gray-600">
                              <li>Usa smartphone para tudo</li>
                              <li>Prefere comunicação digital</li>
                              <li>Busca anonimato</li>
                              <li>Horários irregulares</li>
                              <li>Valoriza privacidade</li>
                            </ul>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Necessidades e Dores</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>Sentimento de solidão após divórcio</li>
                            <li>Estresse no trabalho como enfermeira</li>
                            <li>Busca por orientação espiritual</li>
                            <li>Precisa de apoio emocional</li>
                            <li>Horários limitados para buscar ajuda</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Objetivos</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>Encontrar paz espiritual</li>
                            <li>Superar a crise pessoal</li>
                            <li>Conectar com pessoas de fé</li>
                            <li>Receber orientação prática</li>
                            <li>Manter privacidade</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <User className="h-5 w-5 mr-2 text-green-600" />
                        Persona: João Santos - Capelão Aposentado
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold mb-2">Perfil Demográfico</h4>
                            <ul className="list-disc list-inside space-y-1 text-gray-600">
                              <li>Idade: 68 anos</li>
                              <li>Localização: Curitiba, PR</li>
                              <li>Profissão: Capelão aposentado</li>
                              <li>Estado civil: Casado</li>
                              <li>Religião: Protestante</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Comportamento</h4>
                            <ul className="list-disc list-inside space-y-1 text-gray-600">
                              <li>Usa computador e tablet</li>
                              <li>Prefere horários diurnos</li>
                              <li>Experiência em aconselhamento</li>
                              <li>Deseja continuar ativo</li>
                              <li>Valoriza flexibilidade</li>
                            </ul>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Motivações</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>Desejo de continuar servindo</li>
                            <li>Experiência de 30 anos como capelão</li>
                            <li>Flexibilidade de horários</li>
                            <li>Alcançar mais pessoas</li>
                            <li>Manter-se ativo na missão</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Especialidades</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>Aconselhamento familiar</li>
                            <li>Crises de vida</li>
                            <li>Luto e perdas</li>
                            <li>Oração e meditação</li>
                            <li>Orientação espiritual</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <User className="h-5 w-5 mr-2 text-purple-600" />
                        Persona: Ana Costa - Administradora do Sistema
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold mb-2">Perfil Demográfico</h4>
                            <ul className="list-disc list-inside space-y-1 text-gray-600">
                              <li>Idade: 42 anos</li>
                              <li>Localização: Rio de Janeiro, RJ</li>
                              <li>Profissão: Gerente de TI</li>
                              <li>Estado civil: Casada</li>
                              <li>Religião: Católica</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Comportamento</h4>
                            <ul className="list-disc list-inside space-y-1 text-gray-600">
                              <li>Usa múltiplos dispositivos</li>
                              <li>Horários de trabalho regulares</li>
                              <li>Foco em eficiência</li>
                              <li>Valoriza dados e métricas</li>
                              <li>Preocupação com segurança</li>
                            </ul>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Responsabilidades</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>Gestão de usuários e capelães</li>
                            <li>Monitoramento de qualidade</li>
                            <li>Resolução de problemas técnicos</li>
                            <li>Análise de métricas e relatórios</li>
                            <li>Implementação de melhorias</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Objetivos</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>Garantir qualidade do serviço</li>
                            <li>Manter segurança da plataforma</li>
                            <li>Otimizar processos operacionais</li>
                            <li>Escalar o sistema eficientemente</li>
                            <li>Melhorar experiência do usuário</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <Users className="h-5 w-5 mr-2 text-orange-600" />
                        Personas Secundárias
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-2">Carlos - Estudante de Teologia</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>Idade: 24 anos</li>
                            <li>Busca experiência prática</li>
                            <li>Disponível em horários noturnos</li>
                            <li>Interesse em diferentes denominações</li>
                            <li>Familiarizado com tecnologia</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Lucia - Idosa Isolada</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>Idade: 75 anos</li>
                            <li>Vive sozinha em área rural</li>
                            <li>Precisa de companhia espiritual</li>
                            <li>Usa smartphone básico</li>
                            <li>Valoriza conversas longas</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Pedro - Imigrante</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>Idade: 32 anos</li>
                            <li>Fala espanhol como língua nativa</li>
                            <li>Busca comunidade de fé</li>
                            <li>Precisa de apoio cultural</li>
                            <li>Usa aplicativos de tradução</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Fernanda - Mãe Solteira</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>Idade: 28 anos</li>
                            <li>Mãe de duas crianças</li>
                            <li>Busca orientação familiar</li>
                            <li>Horários limitados</li>
                            <li>Precisa de apoio emocional</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <Target className="h-5 w-5 mr-2 text-red-600" />
                        Insights das Personas
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Padrões Comuns</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>Busca por conexão espiritual autêntica</li>
                            <li>Preocupação com privacidade e segurança</li>
                            <li>Preferência por flexibilidade de horários</li>
                            <li>Necessidade de suporte multilíngue</li>
                            <li>Valorização da experiência personalizada</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Oportunidades de Design</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>Interface simples e intuitiva para idosos</li>
                            <li>Sistema de tradução automática</li>
                            <li>Configurações de privacidade granulares</li>
                            <li>Notificações personalizáveis</li>
                            <li>Histórico de conversas organizado</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        );

      case 'briefing':
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="h-5 w-5 mr-2" />
                  Briefing do Projeto - Aplicativo de Capelania Cristã
                </CardTitle>
                <CardDescription>
                  Documento estratégico com visão geral, objetivos e escopo do projeto
                </CardDescription>
              </CardHeader>
            </Card>

            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Target className="h-5 w-5 mr-2 text-blue-600" />
                    Visão Geral do Projeto
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Problema a Resolver</h4>
                      <p className="text-gray-600">
                        Milhões de pessoas globalmente necessitam de apoio espiritual e emocional, mas enfrentam barreiras como isolamento geográfico, limitações de horário, barreiras linguísticas e falta de acesso a capelães qualificados. Não existe uma plataforma digital centralizada que conecte eficientemente pessoas em necessidade com capelães voluntários.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Solução Proposta</h4>
                      <p className="text-gray-600">
                        Uma plataforma digital inovadora que conecta capelães cristãos voluntários com pessoas que necessitam de apoio espiritual, emocional e orientação. O aplicativo oferece comunicação em tempo real, tradução automática, sistema de matching inteligente e garantia de privacidade e segurança.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Diferencial Competitivo</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        <li>Foco específico em capelania e apoio espiritual</li>
                        <li>Modelo de voluntariado sustentável</li>
                        <li>Tradução automática multilíngue</li>
                        <li>Processo rigoroso de validação de capelães</li>
                        <li>Comunicação assíncrona e síncrona</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Users className="h-5 w-5 mr-2 text-green-600" />
                    Público-Alvo
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Usuários Principais (Membros)</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        <li>Pessoas em crise pessoal ou espiritual</li>
                        <li>Indivíduos isolados geograficamente</li>
                        <li>Comunidades religiosas dispersas</li>
                        <li>Pessoas com barreiras linguísticas</li>
                        <li>Indivíduos que preferem anonimato</li>
                        <li>Faixa etária: 18-75 anos</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Capelães Voluntários</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        <li>Capelães aposentados com disponibilidade</li>
                        <li>Líderes religiosos em áreas rurais</li>
                        <li>Capelães voluntários em organizações</li>
                        <li>Estudantes de teologia e seminário</li>
                        <li>Capelães com experiência multicultural</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Target className="h-5 w-5 mr-2 text-purple-600" />
                    Objetivos do Projeto
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Objetivos Primários</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        <li>Conectar pessoas em necessidade com capelães qualificados</li>
                        <li>Facilitar comunicação espiritual através de tecnologia</li>
                        <li>Superar barreiras geográficas e linguísticas</li>
                        <li>Garantir privacidade e confidencialidade</li>
                        <li>Criar uma comunidade global de apoio espiritual</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Objetivos Secundários</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        <li>Estabelecer parcerias com organizações religiosas</li>
                        <li>Gerar insights sobre necessidades espirituais</li>
                        <li>Desenvolver funcionalidades avançadas de IA</li>
                        <li>Expandir para múltiplos idiomas e culturas</li>
                        <li>Criar modelo de sustentabilidade financeira</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Calendar className="h-5 w-5 mr-2 text-orange-600" />
                    Cronograma e Fases
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <h4 className="font-semibold text-blue-800">Fase 1 - MVP (3-6 meses)</h4>
                        <p className="text-sm text-blue-700">Desenvolvimento das funcionalidades essenciais</p>
                      </div>
                      <div className="p-3 bg-green-50 rounded-lg">
                        <h4 className="font-semibold text-green-800">Fase 2 - V2 (6-12 meses)</h4>
                        <p className="text-sm text-green-700">Melhorias e expansões baseadas em feedback</p>
                      </div>
                      <div className="p-3 bg-purple-50 rounded-lg">
                        <h4 className="font-semibold text-purple-800">Fase 3 - V3+ (12+ meses)</h4>
                        <p className="text-sm text-purple-700">Funcionalidades avançadas e diferenciação</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <DollarSign className="h-5 w-5 mr-2 text-green-600" />
                    Modelo de Negócio
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Estratégia de Monetização</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        <li>Modelo freemium com funcionalidades premium</li>
                        <li>Doações voluntárias para capelães</li>
                        <li>Parcerias com organizações religiosas</li>
                        <li>Serviços de consultoria e treinamento</li>
                        <li>Licenciamento para organizações</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Projeções Financeiras</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        <li>Break-even no 18º mês de operação</li>
                        <li>Receita de R$ 50.000/mês no segundo ano</li>
                        <li>Crescimento de 20% mês a mês</li>
                        <li>Margem de contribuição superior a 60%</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      case 'competitive':
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2" />
                  Análise Competitiva e SWOT
                </CardTitle>
                <CardDescription>
                  Análise aprofundada do mercado e posicionamento estratégico
                </CardDescription>
              </CardHeader>
            </Card>

            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Users className="h-5 w-5 mr-2 text-blue-600" />
                    Principais Concorrentes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Aplicativo</th>
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Foco</th>
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Modelo</th>
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Pontos Fortes</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-medium">Glorify</td>
                          <td className="border border-gray-300 px-4 py-2">Bem-estar espiritual</td>
                          <td className="border border-gray-300 px-4 py-2">Freemium</td>
                          <td className="border border-gray-300 px-4 py-2">Design moderno, alta qualidade</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 px-4 py-2 font-medium">Abide</td>
                          <td className="border border-gray-300 px-4 py-2">Meditação cristã</td>
                          <td className="border border-gray-300 px-4 py-2">Freemium</td>
                          <td className="border border-gray-300 px-4 py-2">Foco em saúde mental</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-medium">YouVersion</td>
                          <td className="border border-gray-300 px-4 py-2">Estudo bíblico</td>
                          <td className="border border-gray-300 px-4 py-2">Gratuito</td>
                          <td className="border border-gray-300 px-4 py-2">Grande base de usuários</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 px-4 py-2 font-medium">Pray.com</td>
                          <td className="border border-gray-300 px-4 py-2">Oração e comunidade</td>
                          <td className="border border-gray-300 px-4 py-2">Freemium</td>
                          <td className="border border-gray-300 px-4 py-2">Comunidade ativa</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-medium">Our Daily Bread</td>
                          <td className="border border-gray-300 px-4 py-2">Devocional diário</td>
                          <td className="border border-gray-300 px-4 py-2">Gratuito</td>
                          <td className="border border-gray-300 px-4 py-2">Conteúdo tradicional</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg">
                      <TrendingUp className="h-5 w-5 mr-2 text-green-600" />
                      Forças (Strengths)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Nicho específico e inovador</li>
                      <li>Tecnologia de tradução integrada</li>
                      <li>Modelo de voluntariado sustentável</li>
                      <li>Processo de validação de capelães</li>
                      <li>Comunicação assíncrona otimizada</li>
                      <li>Foco em capelania profissional</li>
                      <li>Suporte multilíngue nativo</li>
                      <li>Interface intuitiva e acessível</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg">
                      <AlertCircle className="h-5 w-5 mr-2 text-red-600" />
                      Fraquezas (Weaknesses)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Dependência da base de voluntários</li>
                      <li>Desafios de monetização</li>
                      <li>Complexidade da moderação</li>
                      <li>Reconhecimento de marca inicial</li>
                      <li>Necessidade de validação contínua</li>
                      <li>Limitações de escala inicial</li>
                      <li>Dependência de tecnologia externa</li>
                      <li>Custos operacionais elevados</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg">
                      <Zap className="h-5 w-5 mr-2 text-blue-600" />
                      Oportunidades (Opportunities)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Crescente demanda por apoio digital</li>
                      <li>Parcerias estratégicas</li>
                      <li>Expansão de funcionalidades</li>
                      <li>Geração de insights de dados</li>
                      <li>Mercado global inexplorado</li>
                      <li>Tendência de saúde mental digital</li>
                      <li>Integração com IA e machine learning</li>
                      <li>Modelos de assinatura premium</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg">
                      <Shield className="h-5 w-5 mr-2 text-orange-600" />
                      Ameaças (Threats)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Concorrência indireta e direta</li>
                      <li>Regulamentação de dados</li>
                      <li>Crises de reputação</li>
                      <li>Saturação do mercado</li>
                      <li>Mudanças tecnológicas rápidas</li>
                      <li>Dependência de APIs externas</li>
                      <li>Questões de privacidade</li>
                      <li>Resistência à mudança</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Target className="h-5 w-5 mr-2 text-purple-600" />
                    Posicionamento Estratégico
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Diferenciação Competitiva</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        <li><strong>Foco Específico:</strong> Única plataforma dedicada exclusivamente à capelania</li>
                        <li><strong>Modelo Voluntário:</strong> Base sustentável de capelães qualificados</li>
                        <li><strong>Tradução Nativa:</strong> Suporte multilíngue integrado</li>
                        <li><strong>Validação Rigorosa:</strong> Processo de aprovação de capelães</li>
                        <li><strong>Comunicação Flexível:</strong> Texto e áudio com tradução automática</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Estratégia de Mercado</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        <li>Posicionamento como líder em capelania digital</li>
                        <li>Foco em qualidade e confiabilidade</li>
                        <li>Expansão gradual por regiões e idiomas</li>
                        <li>Parcerias com organizações religiosas</li>
                        <li>Desenvolvimento de comunidade ativa</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      case 'architecture':
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Layers className="h-5 w-5 mr-2" />
                  Arquitetura do Sistema
                </CardTitle>
                <CardDescription>
                  Visão técnica completa da arquitetura, tecnologias e infraestrutura
                </CardDescription>
              </CardHeader>
            </Card>

            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Layers className="h-5 w-5 mr-2 text-blue-600" />
                    Visão Geral da Arquitetura
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Padrão Arquitetural</h4>
                      <p className="text-gray-600">
                        Arquitetura em camadas (Layered Architecture) com separação clara de responsabilidades, 
                        seguindo princípios de microserviços para escalabilidade e manutenibilidade.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Princípios de Design</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        <li>Separação de responsabilidades (SoC)</li>
                        <li>Baixo acoplamento e alta coesão</li>
                        <li>Escalabilidade horizontal</li>
                        <li>Fault tolerance e resiliência</li>
                        <li>Segurança em camadas</li>
                        <li>Performance otimizada</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Smartphone className="h-5 w-5 mr-2 text-green-600" />
                    Frontend (Cliente)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2">Tecnologias</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                          <li><strong>Framework:</strong> React Native / Expo</li>
                          <li><strong>Estado:</strong> Redux Toolkit / Zustand</li>
                          <li><strong>UI:</strong> NativeBase / React Native Elements</li>
                          <li><strong>Navegação:</strong> React Navigation 6</li>
                          <li><strong>Formulários:</strong> React Hook Form</li>
                          <li><strong>Validação:</strong> Yup / Zod</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Funcionalidades</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                          <li>Interface responsiva e acessível</li>
                          <li>Modo offline com sincronização</li>
                          <li>Push notifications</li>
                          <li>Chat em tempo real</li>
                          <li>Tradução automática</li>
                          <li>Upload de mídia</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Server className="h-5 w-5 mr-2 text-purple-600" />
                    Backend (Servidor)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2">Tecnologias</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                          <li><strong>Runtime:</strong> Node.js</li>
                          <li><strong>Framework:</strong> Express.js / Fastify</li>
                          <li><strong>Banco:</strong> PostgreSQL + Redis</li>
                          <li><strong>ORM:</strong> Prisma</li>
                          <li><strong>Autenticação:</strong> JWT + OAuth2</li>
                          <li><strong>Validação:</strong> Joi / Zod</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Serviços</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                          <li>API RESTful + GraphQL</li>
                          <li>WebSocket para chat</li>
                          <li>Sistema de notificações</li>
                          <li>Processamento de mídia</li>
                          <li>Integração com IA</li>
                          <li>Logs e monitoramento</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Database className="h-5 w-5 mr-2 text-orange-600" />
                    Banco de Dados
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2">PostgreSQL (Principal)</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                          <li>Dados de usuários e perfis</li>
                          <li>Histórico de conversas</li>
                          <li>Configurações do sistema</li>
                          <li>Relatórios e analytics</li>
                          <li>Backup automático</li>
                          <li>Replicação para alta disponibilidade</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Redis (Cache/Sessões)</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                          <li>Sessões de usuário</li>
                          <li>Cache de consultas</li>
                          <li>Fila de mensagens</li>
                          <li>Rate limiting</li>
                          <li>Dados temporários</li>
                          <li>Pub/Sub para WebSocket</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Zap className="h-5 w-5 mr-2 text-yellow-600" />
                    Integrações e APIs
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2">APIs Externas</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                          <li><strong>Tradução:</strong> Google Translate API</li>
                          <li><strong>IA:</strong> OpenAI GPT / Claude</li>
                          <li><strong>Pagamentos:</strong> Stripe / PayPal</li>
                          <li><strong>Notificações:</strong> Firebase Cloud Messaging</li>
                          <li><strong>Storage:</strong> AWS S3 / Cloudinary</li>
                          <li><strong>Email:</strong> SendGrid / AWS SES</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Serviços Internos</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                          <li>Serviço de autenticação</li>
                          <li>Serviço de chat</li>
                          <li>Serviço de notificações</li>
                          <li>Serviço de tradução</li>
                          <li>Serviço de moderação</li>
                          <li>Serviço de analytics</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Shield className="h-5 w-5 mr-2 text-red-600" />
                    Segurança e Privacidade
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2">Medidas de Segurança</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                          <li>HTTPS/TLS em todas as comunicações</li>
                          <li>Autenticação JWT com refresh tokens</li>
                          <li>Criptografia de dados sensíveis</li>
                          <li>Rate limiting e DDoS protection</li>
                          <li>Validação rigorosa de inputs</li>
                          <li>Auditoria de logs de segurança</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Privacidade</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                          <li>Conformidade com LGPD/GDPR</li>
                          <li>Anonimização de dados</li>
                          <li>Controle de consentimento</li>
                          <li>Direito ao esquecimento</li>
                          <li>Portabilidade de dados</li>
                          <li>Política de privacidade transparente</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Cloud className="h-5 w-5 mr-2 text-blue-600" />
                    Infraestrutura e DevOps
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2">Cloud Infrastructure</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                          <li><strong>Provedor:</strong> AWS / Google Cloud</li>
                          <li><strong>Containerização:</strong> Docker + Kubernetes</li>
                          <li><strong>Load Balancer:</strong> ALB/NLB</li>
                          <li><strong>CDN:</strong> CloudFront</li>
                          <li><strong>Monitoring:</strong> CloudWatch</li>
                          <li><strong>Backup:</strong> S3 + Glacier</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">CI/CD Pipeline</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                          <li>GitHub Actions / GitLab CI</li>
                          <li>Testes automatizados</li>
                          <li>Code quality checks</li>
                          <li>Deploy automático</li>
                          <li>Rollback automático</li>
                          <li>Monitoramento de performance</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <BarChart3 className="h-5 w-5 mr-2 text-green-600" />
                    Monitoramento e Analytics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2">Monitoramento</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                          <li><strong>APM:</strong> New Relic / DataDog</li>
                          <li><strong>Logs:</strong> ELK Stack</li>
                          <li><strong>Métricas:</strong> Prometheus + Grafana</li>
                          <li><strong>Alertas:</strong> PagerDuty</li>
                          <li><strong>Uptime:</strong> Pingdom</li>
                          <li><strong>Performance:</strong> Lighthouse</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Analytics</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                          <li><strong>Web:</strong> Google Analytics 4</li>
                          <li><strong>Mobile:</strong> Firebase Analytics</li>
                          <li><strong>Business:</strong> Mixpanel</li>
                          <li><strong>Heatmaps:</strong> Hotjar</li>
                          <li><strong>A/B Testing:</strong> Optimizely</li>
                          <li><strong>Feedback:</strong> Intercom</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <GitBranch className="h-5 w-5 mr-2 text-purple-600" />
                    Diagrama de Arquitetura
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Arquitetura em Camadas</h4>
                      <div className="text-sm text-gray-600 space-y-2">
                        <div className="flex items-center">
                          <div className="w-4 h-4 bg-blue-500 rounded mr-2"></div>
                          <span><strong>Apresentação:</strong> React Native App + Web Dashboard</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-4 h-4 bg-green-500 rounded mr-2"></div>
                          <span><strong>Aplicação:</strong> API Gateway + Microserviços</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-4 h-4 bg-purple-500 rounded mr-2"></div>
                          <span><strong>Domínio:</strong> Lógica de Negócio + Regras</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-4 h-4 bg-orange-500 rounded mr-2"></div>
                          <span><strong>Infraestrutura:</strong> Banco de Dados + Serviços Externos</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Fluxo de Dados</h4>
                      <div className="text-sm text-gray-600">
                        <p>Cliente → API Gateway → Load Balancer → Microserviços → Banco de Dados</p>
                        <p>WebSocket → Redis Pub/Sub → Chat Service → PostgreSQL</p>
                        <p>Upload → S3 → CDN → Cliente</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const handleMenuClick = (menuId) => {
    setSelectedMenu(menuId);
    setMobileMenuOpen(false); // Fecha o menu mobile
    // Scroll para o topo da página
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Função para abrir o design do Figma em nova aba
  const handleFigmaClick = () => {
    window.open('https://www.figma.com/design/Q7qTXGYa7ESnBhnlXzoqdI/Aplicativo-The-Chaplain?node-id=0-1&t=QqazW93KOLC0Gdry-1', '_blank');
    toast.info("Abrindo design UX-UI Figma", {
      description: "O design foi aberto em uma nova aba",
      duration: 2000,
    });
  };

  // Função para fazer download do PRD refinado
  const handleDownloadPRD = () => {
    const prdContent = `# PRD - MVP Aplicativo de Capelania Cristã (Versão Refinada)

## 1. Visão Geral do Produto

### 1.1 Resumo Executivo
O aplicativo de capelania cristã é uma plataforma digital que conecta capelães cristãos voluntários com indivíduos que buscam apoio espiritual, emocional e orientação. O objetivo principal é estabelecer uma ponte acessível e gratuita entre aqueles que podem oferecer suporte e os que necessitam, facilitando a comunicação para orações, aconselhamento e suporte espiritual em escala global.

### 1.2 Problema a Resolver
- **Necessidade de Apoio Espiritual**: Milhões de pessoas globalmente necessitam de apoio espiritual, oração, aconselhamento ou simplesmente um ouvinte.
- **Disponibilidade de Capelães**: Existe um grande número de pastores, ministros e capelães qualificados com disponibilidade para oferecer apoio.
- **Lacuna de Conexão**: Ausência de uma plataforma centralizada e eficiente para conectar essas duas necessidades de forma direta e segura.
- **Barreiras de Comunicação**: Dificuldade em estabelecer comunicação espiritual global devido a barreiras geográficas e linguísticas.

### 1.3 Objetivos do MVP
- **Conexão Eficaz**: Conectar capelães cristãos qualificados com pessoas que precisam de apoio espiritual de forma rápida e intuitiva.
- **Comunicação Simplificada**: Facilitar a comunicação através de mensagens de texto e áudio, garantindo clareza e privacidade.
- **Gestão de Usuários**: Implementar um sistema robusto de cadastro e gerenciamento de perfis para membros e capelães.
- **Funcionalidades Essenciais**: Desenvolver as funcionalidades mínimas necessárias para permitir a interação e o suporte espiritual.
- **Base para Expansão**: Estabelecer uma arquitetura escalável que permita a adição de novas funcionalidades em futuras versões.

## 2. Escopo do MVP

### 2.1 Funcionalidades Incluídas no MVP

#### 2.1.1 Sistema de Autenticação e Cadastro
- **Cadastro de Membros (Usuários)**
  - Nome completo (obrigatório)
  - Email (obrigatório, para autenticação e comunicação)
  - Telefone (opcional, para contato direto se necessário)
  - País/Localização (detecção automática via IP ou GPS, com opção de ajuste manual)
  - Idioma Preferencial (seleção manual, com sugestão baseada na localização)
  - Sistema de Indicação (campo opcional para código de indicação)

- **Cadastro de Capelães**
  - Dados pessoais completos (Nome, Email, Telefone, País/Localização, Idioma Preferencial)
  - Formação/Especialização (lista pré-definida: Pastor, Psicólogo, Terapeuta, Líder de Casais, Conselheiro, etc., com opção de múltipla seleção)
  - Área de Atuação (descrição livre e/ou seleção de tópicos de interesse)
  - Experiência (campo de texto livre para descrição da experiência relevante)
  - Certificados/Validações (upload de documentos para verificação, pendente de aprovação administrativa)

#### 2.1.2 Sistema de Comunicação Básica
- **Chat de Texto**
  - Mensagens individuais e privadas entre membro e capelão.
  - Histórico de conversas persistente e acessível para ambos os lados.
  - Status de mensagem (enviada, entregue, lida) para acompanhamento.
  - Notificações em tempo real para novas mensagens.

- **Mensagens de Áudio**
  - Funcionalidade de gravação e envio de áudios (duração máxima de 5 minutos).
  - Reprodução de mensagens de voz com controles básicos (play/pause, barra de progresso).
  - Controle de qualidade de áudio (compressão para otimização de dados).

#### 2.1.3 Sistema de Solicitação de Apoio
- **Pedidos de Oração/Aconselhamento**
  - Formulário intuitivo para descrever a necessidade (título e descrição).
  - Categorização básica da solicitação (Oração, Aconselhamento, Desabafo, Outro).
  - Envio da solicitação para capelães disponíveis e compatíveis (baseado em especialização e disponibilidade).
  - Notificação aos capelães sobre novas solicitações.

#### 2.1.4 Perfis e Matching Básico
- **Perfil do Membro**
  - Visualização de informações básicas cadastradas.
  - Histórico de interações com capelães (lista de conversas).
  
- **Perfil do Capelão**
  - Exibição de especialidades e áreas de atuação.
  - Status de Disponibilidade (Online/Offline, Ocupado, Disponível).
  - Avaliações básicas (sistema de feedback simples: like/dislike ou estrelas de 1 a 5).

#### 2.1.5 Sistema de Tradução
- **Tradução Automática**
  - Integração com Google Translate API para tradução de mensagens de texto.
  - Detecção automática de idioma baseada na localização do usuário e no idioma da mensagem.
  - Suporte a múltiplos idiomas (inglês, espanhol, português, etc.).

#### 2.1.6 Módulo de Bíblia
- **Versículos Diários**
  - Versículos selecionados e categorizados por temas
  - Conteúdo devocional personalizado
  - Sugestões bíblicas contextualizadas por IA
  - Sistema de favoritos e histórico de leitura

#### 2.1.7 Módulo Pílula (Gerador de Pílulas de Fé)
- **Ferramenta Exclusiva para Capelães**
  - Gerador de imagens inspiracionais com templates profissionais
  - Sistema de compartilhamento automático para redes sociais
  - Texto de apoio pré-formatado para divulgação do app
  - Métricas de engajamento e alcance

### 2.2 Funcionalidades NÃO Incluídas no MVP (para futuras versões)
- Sistema de IA para análise de estado emocional.
- Matching automático avançado baseado em urgência ou complexidade da necessidade.
- Chamadas de vídeo ou áudio em tempo real.
- Sistema de comunidade/feed social.
- Templates para mensagens pré-definidas.
- Sistema de doações ou monetização.
- Palestras/lives para múltiplos usuários.
- Funcionalidades de Status/Stories.
- Recursos avançados de moderação e denúncia.

## 3. Personas e Casos de Uso

### 3.1 Personas Primárias

#### 3.1.1 Membro (Pessoa que busca apoio)
- **Características**: Indivíduo em busca de apoio espiritual, oração, aconselhamento ou um espaço seguro para desabafar.
- **Necessidades**: Encontrar suporte imediato, receber orientação baseada na fé, sentir-se compreendido e acolhido.
- **Comportamento**: Acessa o aplicativo em momentos de vulnerabilidade emocional ou espiritual, buscando uma conexão genuína.

#### 3.1.2 Capelão (Voluntário cristão)
- **Características**: Pastor, psicólogo, terapeuta, líder religioso ou conselheiro com formação e experiência em capelania cristã.
- **Necessidades**: Utilizar seus dons e conhecimentos para servir ao próximo, oferecer apoio espiritual e prático, expandir seu ministério.
- **Comportamento**: Dedica parte de seu tempo livre para atender solicitações, buscando fazer a diferença na vida das pessoas.

### 3.2 Casos de Uso Principais

#### 3.2.1 Membro solicita apoio
1. **Login/Cadastro**: Membro acessa o aplicativo e realiza login ou cadastro.
2. **Acessar Solicitação**: Navega até a seção "Solicitar Apoio" ou similar.
3. **Descrever Necessidade**: Preenche um formulário simples descrevendo sua necessidade (título e descrição).
4. **Envio da Solicitação**: A solicitação é enviada para o sistema.
5. **Notificação de Capelães**: O sistema notifica capelães disponíveis e compatíveis.
6. **Aceitação do Capelão**: Um capelão aceita a solicitação.
7. **Início da Comunicação**: Uma sala de chat é aberta e a comunicação é estabelecida entre o membro e o capelão.

#### 3.2.2 Capelão oferece apoio
1. **Notificação**: Capelão recebe uma notificação de nova solicitação de apoio.
2. **Visualização**: Visualiza os detalhes da solicitação (descrição, categoria).
3. **Aceite/Recusa**: Aceita a solicitação se estiver disponível e apto, ou a recusa se não puder atender.
4. **Início da Conversa**: Ao aceitar, uma conversa é iniciada com o membro.
5. **Suporte**: Oferece apoio através de mensagens de texto e/ou áudio, conforme a necessidade do membro.

## 4. Requisitos Técnicos

### 4.1 Arquitetura Proposta
- **Frontend**: React Native (para compatibilidade iOS e Android, permitindo uma experiência nativa).
- **Backend**: Node.js com framework Express (para uma API RESTful escalável e de alta performance).
- **Banco de Dados**: PostgreSQL (para armazenamento de dados relacionais, como usuários, capelães, conversas, etc.).
- **Autenticação**: JSON Web Tokens (JWT) para segurança e gerenciamento de sessões.
- **APIs Externas**: Google Translate API para funcionalidade de tradução.
- **Hospedagem**: AWS (Amazon Web Services) ou similar (para escalabilidade, segurança e disponibilidade).

### 4.2 Integrações Necessárias
- **Google Translate API**: Para tradução automática de mensagens de texto.
- **Serviço de Notificações Push**: Para alertar usuários sobre novas mensagens, solicitações e atualizações (ex: Firebase Cloud Messaging).
- **Sistema de Armazenamento de Arquivos**: Para armazenar mensagens de áudio e documentos de validação de capelães (ex: Amazon S3).
- **Serviço de Geolocalização**: Para detecção automática de país/idioma e matching básico (ex: Google Maps Geocoding API).

### 4.3 Requisitos de Performance e Segurança
- **Tempo de Resposta**: Tempo de resposta das APIs < 500ms para operações críticas (login, envio de mensagem).
- **Usuários Simultâneos**: Suporte a 5.000 usuários simultâneos inicialmente, com capacidade de escalabilidade.
- **Disponibilidade**: Uptime de 99.9% para garantir acesso contínuo à plataforma.
- **Backup de Dados**: Backup diário e recuperação de desastres para proteção de dados.
- **Segurança**: Implementação de criptografia de ponta a ponta para mensagens, proteção contra ataques XSS/CSRF, e conformidade com LGPD/GDPR.

## 5. Especificações de Interface (Wireframes e Design)

### 5.1 Telas Principais (Esboços Iniciais)

#### 5.1.1 Tela de Login/Cadastro
- Layout limpo e intuitivo.
- Opções claras: "Entrar" (para usuários existentes), "Cadastrar como Membro", "Cadastrar como Capelão".
- Campos de entrada para email/senha.
- Opção de "Esqueci minha senha".
- Integração com autenticação social (Google, Facebook) como opção (futuro).

#### 5.1.2 Dashboard do Membro
- Botão de destaque "Solicitar Apoio" ou "Falar com Capelão".
- Seção "Minhas Conversas" com lista de chats ativos e históricos.
- Acesso fácil ao "Meu Perfil" para edição de informações.
- Notificações visíveis para novas mensagens ou atualizações.

#### 5.1.3 Dashboard do Capelão
- Seção "Solicitações Pendentes" com lista de pedidos de apoio.
- "Minhas Conversas Ativas" com chats em andamento.
- "Meu Perfil" para gerenciar especialidades, disponibilidade e status de aprovação.
- Indicador de status online/offline.

#### 5.1.4 Tela de Chat
- Interface similar a aplicativos de mensagens populares (WhatsApp, Telegram).
- Campo de entrada de texto com botão de envio.
- Botão para gravação e envio de áudio.
- Exibição de balões de mensagem com nome do remetente e timestamp.
- Opção de tradução de mensagem (ícone de tradução ao lado da mensagem).
- Indicadores de status da mensagem (enviada, entregue, lida).

### 5.2 Design Guidelines
- **Estilo**: Minimalista, acolhedor e inspirador, transmitindo paz e confiança.
- **Cores**: Paleta de cores suaves e harmoniosas, com predominância de tons de azul claro, branco e detalhes em dourado ou verde água para acentuação.
- **Tipografia**: Fontes legíveis e amigáveis, como Lato ou Open Sans, para garantir clareza e conforto visual.
- **Imagens**: Uso de ilustrações e ícones que remetam à fé cristã de forma sutil e universal, evitando imagens clichês.
- **Acessibilidade**: Design responsivo para diferentes tamanhos de tela e considerações de acessibilidade (contraste, tamanho de fonte).

## 6. Modelo de Negócio (Futuras Versões)

### 6.1 Fontes de Receita Potenciais
- **Doações Voluntárias**: Opção para usuários fazerem doações para apoiar a plataforma.
- **Assinaturas Premium para Capelães**: Recursos adicionais para capelães (ex: mais visibilidade, relatórios de desempenho, ferramentas avançadas).
- **Parcerias Estratégicas**: Colaborações com instituições religiosas, seminários e organizações cristãs.

### 6.2 Custos Operacionais Estimados (MVP)
- **Hospedagem (AWS)**: R$ 800-1500/mês (servidores, banco de dados, armazenamento).
- **APIs Externas (Google Translate, Notificações, Geolocalização)**: R$ 300-700/mês (baseado no volume de uso).
- **Manutenção e Suporte**: R$ 1500-3000/mês (equipe de suporte, atualizações, monitoramento).
- **Marketing e Aquisição de Usuários**: R$ 500-1000/mês (inicialmente para divulgação em comunidades cristãs).

## 7. Cronograma de Desenvolvimento (Estimativa)

### 7.1 Fase 1 - Planejamento e Design (2-3 semanas)
- Refinamento final do PRD e especificações.
- Design detalhado das telas e protótipos de alta fidelidade.
- Definição da arquitetura técnica e tecnologias.
- Criação do esquema Prisma e fluxograma Mermaid.

### 7.2 Fase 2 - Desenvolvimento do MVP (10-14 semanas)
- **Semanas 1-3**: Configuração da infraestrutura, autenticação e gerenciamento de usuários.
- **Semanas 4-6**: Desenvolvimento do sistema de chat (texto e áudio).
- **Semanas 7-9**: Implementação do sistema de solicitação de apoio e matching básico.
- **Semanas 10-12**: Integração com APIs externas (tradução, notificações, geolocalização).
- **Semanas 13-14**: Testes de QA, correção de bugs e otimizações de performance.

### 7.3 Fase 3 - Lançamento e Monitoramento (1-2 semanas)
- Deploy do aplicativo nas lojas (App Store, Google Play).
- Monitoramento de performance e feedback inicial dos usuários.
- Ajustes e correções pós-lançamento.

## 8. Critérios de Sucesso

### 8.1 Métricas de Produto
- **Adoção**: 500+ usuários cadastrados e 100+ capelães ativos nos primeiros 3 meses.
- **Engajamento**: Taxa de resposta de capelães > 80% e tempo médio de resposta < 1 hora.
- **Satisfação**: Avaliação média do aplicativo > 4.5/5.0 nas lojas de aplicativos.
- **Retenção**: Taxa de retenção de usuários > 70% após o primeiro mês.

### 8.2 Métricas Técnicas
- **Performance**: Tempo de carregamento de tela < 2 segundos.
- **Estabilidade**: Uptime > 99.9% e zero falhas críticas de segurança.
- **Escalabilidade**: Capacidade de suportar crescimento de 20% ao mês sem degradação de performance.

## 9. Riscos e Mitigações

### 9.1 Riscos Técnicos
- **Escalabilidade**: Monitoramento contínuo da infraestrutura e planejamento de capacidade.
- **Segurança**: Auditorias de segurança regulares e implementação de melhores práticas de desenvolvimento seguro.
- **Dependência de APIs Externas**: Contratos de nível de serviço (SLAs) com provedores de API e planos de contingência para falhas.

### 9.2 Riscos de Produto
- **Baixa Adoção**: Estratégia de marketing focada em comunidades cristãs, parcerias com igrejas e influenciadores.
- **Qualidade dos Capelães**: Processo rigoroso de validação e verificação de credenciais, sistema de avaliação e feedback.
- **Uso Inadequado**: Diretrizes claras de uso, termos de serviço robustos e um sistema de denúncia e moderação eficiente.

## 10. Próximos Passos Pós-MVP

### 10.1 Versão 2.0 - Recursos Avançados
- Implementação de chamadas de vídeo e áudio em tempo real.
- Desenvolvimento de um sistema de IA para análise de estado emocional (com consentimento do usuário).
- Criação de um sistema de comunidade/feed social para interação entre membros e capelães.
- Adição de templates de mensagens e recursos de personalização.

### 10.2 Versão 3.0 - Expansão e Monetização
- Lançamento de um sistema de palestras/lives com capelães e convidados.
- Criação de um marketplace de recursos cristãos (livros, cursos, eventos).
- Integração com igrejas e organizações para ampliar o alcance.
- Desenvolvimento de analytics avançados para insights sobre o uso da plataforma.

---

**Documento criado em**: Junho 2025  
**Versão**: 1.1  
**Status**: Aprovado para desenvolvimento`;

    const element = document.createElement('a');
    const file = new Blob([prdContent], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'PRD_Aplicativo_Capelania_Crista.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);

    toast.success("PRD baixado com sucesso!", {
      description: "O arquivo foi salvo na pasta de Downloads",
      duration: 3000,
    });
  };

  // Função para fazer logout
  const handleLogout = () => {
    setIsAuthenticated(false);
    toast.success("Logout realizado com sucesso!", {
      description: "Você foi desconectado do sistema",
      duration: 3000,
    });
  };

  // Função para abrir popup de login
  const handleLoginClick = () => {
    setIsLoginOpen(true);
  };

  // Scroll automático para o topo quando o menu mudar
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedMenu]);

  // Se o usuário não está autenticado, renderiza apenas o popup de login
  if (!isAuthenticated) {
    return (
      <LoginPopup
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(true)} // mantém popup aberto até login
        onLoginSuccess={() => setIsAuthenticated(true)}
      />
    );
  }

  // Conteúdo principal da aplicação após autenticação
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Cross className="h-8 w-8 text-blue-600 mr-3" />
              <h1 className="text-xl font-bold text-gray-900">
                Planejamento - Aplicativo de Capelania Cristã
              </h1>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Desenvolver Agora Button with Animated Gradient Border */}
              <div className="relative hidden sm:block">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-900 via-green-500 to-blue-900 rounded-lg blur opacity-75 animate-gradient-border"></div>
                <Button
                  className="relative bg-white text-gray-900 hover:bg-gray-50 border-0 px-6 py-2 font-bold text-sm rounded-lg transition-all duration-300 hover:scale-105"
                  onClick={() => {
                    console.log('Botão clicado!');
                    setIsMVPSelectorOpen(true);
                  }}
                >
                  ⚡ DESENVOLVER AGORA
                </Button>
              </div>
              
              {/* Mobile version of Desenvolver Agora Button */}
              <div className="relative sm:hidden">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-900 via-green-500 to-blue-900 rounded-lg blur opacity-75 animate-gradient-border"></div>
                <Button
                  size="sm"
                  className="relative bg-white text-gray-900 hover:bg-gray-50 border-0 px-3 py-1 font-bold text-xs rounded-lg transition-all duration-300"
                  onClick={() => setIsMVPSelectorOpen(true)}
                >
                  ⚡ DESENVOLVER
                </Button>
              </div>
              
              {/* Design UX-UI Figma Button */}
              <Button
                variant="outline"
                size="sm"
                onClick={handleFigmaClick}
                className="flex items-center"
              >
                <Palette className="h-4 w-4 mr-2" />
                Design UX-UI Figma
              </Button>
              
              {/* Login/Logout Button */}
              <Button
                variant="outline"
                size="sm"
                onClick={isAuthenticated ? handleLogout : handleLoginClick}
                className="flex items-center"
              >
                {isAuthenticated ? (
                  <>
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </>
                ) : (
                  <>
                    <LogIn className="h-4 w-4 mr-2" />
                    Login
                  </>
                )}
              </Button>
              
              {/* Mobile menu button */}
              <div className="md:hidden">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <aside className={`md:w-64 ${mobileMenuOpen ? 'block' : 'hidden md:block'}`}>
            <nav className="space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Button
                    key={item.id}
                    variant={selectedMenu === item.id ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => handleMenuClick(item.id)}
                  >
                    <Icon className="h-4 w-4 mr-2" />
                    {item.label}
                  </Button>
                );
              })}
            </nav>
          </aside>

          {/* Main content */}
          <main className="flex-1">
            <ScrollArea className="h-[calc(100vh-8rem)]">
              {renderContent()}
            </ScrollArea>
          </main>
        </div>
      </div>
      
      {/* Toaster para notificações */}
      <Toaster />
      
      {/* Banner de conclusão do planejamento */}
      <CompletionBanner />
      
      {/* Modal de seleção de MVP */}
      <MVPSelector 
        isOpen={isMVPSelectorOpen} 
        onClose={() => setIsMVPSelectorOpen(false)} 
      />
    </div>
  );
}

export default App;
