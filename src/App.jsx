import React, { useState } from 'react';
import './App.css';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Button } from './components/ui/button';
import { Badge } from './components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { ScrollArea } from './components/ui/scroll-area';
import { Separator } from './components/ui/separator';
import { 
  FileText, 
  Database, 
  GitBranch, 
  TrendingUp, 
  Lightbulb, 
  Smartphone, 
  DollarSign,
  Download,
  Menu,
  X,
  Cross,
  Heart,
  Users,
  MessageCircle,
  Shield
} from 'lucide-react';

// Import wireframe images
import wireframeLogin from './assets/wireframe_login.png';
import wireframeDashboard from './assets/wireframe_dashboard_membro.png';
import wireframeChat from './assets/wireframe_chat.png';
import flowchartImage from './assets/flowchart.png';

function App() {
  const [activeSection, setActiveSection] = useState('overview');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: 'overview', label: 'Visão Geral', icon: FileText },
    { id: 'prd', label: 'PRD Refinado', icon: FileText },
    { id: 'schema', label: 'Esquema Prisma', icon: Database },
    { id: 'flowchart', label: 'Fluxograma', icon: GitBranch },
    { id: 'viability', label: 'Viabilidade', icon: TrendingUp },
    { id: 'names', label: 'Nomes Sugeridos', icon: Lightbulb },
    { id: 'wireframes', label: 'Wireframes', icon: Smartphone },
    { id: 'costs', label: 'Estimativas de Custos', icon: DollarSign },
  ];

  const appNames = [
    { name: 'Elo de Fé', description: 'Transmite a ideia de conexão e união através da fé.' },
    { name: 'Amparo Divino', description: 'Sugere apoio e conforto de uma fonte espiritual.' },
    { name: 'Voz da Esperança', description: 'Enfatiza a comunicação e a mensagem de otimismo.' },
    { name: 'Caminho da Graça', description: 'Remete à jornada espiritual e à ajuda divina.' },
    { name: 'Porto Seguro', description: 'Implica um lugar de refúgio e segurança para quem busca apoio.' },
    { name: 'Conecta Capelão', description: 'Direto e funcional, indicando a principal proposta de valor.' },
    { name: 'Luz no Caminho', description: 'Simboliza orientação e clareza em momentos difíceis.' },
    { name: 'Ouvido Amigo', description: 'Foca na escuta e no apoio empático.' },
    { name: 'Fé Conectada', description: 'Combina a fé com a ideia de tecnologia e acessibilidade.' },
    { name: 'Guia Espiritual', description: 'Sugere orientação e aconselhamento de um líder espiritual.' },
  ];

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
    switch (activeSection) {
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
                    <div className="grid md:grid-cols-2 gap-4">
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
              <Button asChild>
                <a href="/src/assets/prd_refinado.md" download>
                  <Download className="h-4 w-4 mr-2" />
                  Baixar PRD Completo
                </a>
              </Button>
            </div>
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
                  Sugestões de Nomes
                </CardTitle>
                <CardDescription>
                  10 opções de nomes para o aplicativo de capelania
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {appNames.map((app, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg flex items-center">
                          <Badge variant="outline" className="mr-2">
                            {index + 1}
                          </Badge>
                          {app.name}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600">{app.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-800">Recomendação</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-700">
                  Recomenda-se verificar a disponibilidade desses nomes como domínios, nomes de usuário em redes sociais e nas lojas de aplicativos (App Store e Google Play) antes da decisão final.
                </p>
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

      case 'costs':
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <DollarSign className="h-5 w-5 mr-2" />
                  Estimativas de Custos
                </CardTitle>
                <CardDescription>
                  Análise detalhada de custos para APIs e plataformas
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Google Translate API - Cenários de Uso</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {costEstimates.map((estimate, index) => (
                    <Card key={index} className="border-l-4 border-l-blue-500">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">{estimate.scenario}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-4 gap-2 text-sm">
                          <div>
                            <span className="font-medium">Usuários:</span>
                            <p className="text-gray-600">{estimate.users}</p>
                          </div>
                          <div>
                            <span className="font-medium">Mensagens:</span>
                            <p className="text-gray-600">{estimate.messages}</p>
                          </div>
                          <div>
                            <span className="font-medium">Caracteres:</span>
                            <p className="text-gray-600">{estimate.characters}</p>
                          </div>
                          <div>
                            <span className="font-medium">Custo:</span>
                            <p className="text-green-600 font-semibold">{estimate.cost}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Planos Bubble.io</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  {bubblePlans.map((plan, index) => (
                    <Card key={index} className="text-center">
                      <CardHeader>
                        <CardTitle className="text-lg">{plan.plan}</CardTitle>
                        <CardDescription className="text-2xl font-bold text-green-600">
                          {plan.price}
                        </CardDescription>
                        <p className="text-sm text-gray-600">{plan.users}</p>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm space-y-1">
                          {plan.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center">
                              <Shield className="h-3 w-3 text-green-500 mr-1" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-green-50 border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-800">Desenvolvimento com Bubble.io</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-green-700">
                    <p><strong>Investimento Inicial:</strong> R$ 15.000 - R$ 30.000</p>
                    <p><strong>Custos Mensais:</strong> R$ 714 - R$ 9.744</p>
                    <p><strong>Tempo:</strong> 1-2 meses</p>
                    <p><strong>Vantagem:</strong> Rápido time-to-market</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-blue-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-blue-800">Desenvolvimento Tradicional</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-blue-700">
                    <p><strong>Investimento Inicial:</strong> R$ 38.000 - R$ 75.000</p>
                    <p><strong>Custos Mensais:</strong> R$ 1.040 - R$ 10.440</p>
                    <p><strong>Tempo:</strong> 3-6 meses</p>
                    <p><strong>Vantagem:</strong> Maior controle técnico</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-yellow-50 border-yellow-200">
              <CardHeader>
                <CardTitle className="text-yellow-800">Recomendação Estratégica</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-yellow-700">
                  Para o MVP, recomenda-se <strong>iniciar com Bubble.io</strong> para validação rápida da proposta de valor com menor investimento. Após validação bem-sucedida, considerar migração para desenvolvimento tradicional.
                </p>
              </CardContent>
            </Card>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Cross className="h-8 w-8 text-blue-600 mr-3" />
              <h1 className="text-xl font-bold text-gray-900">
                PRD - Aplicativo de Capelania Cristã
              </h1>
            </div>
            
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
                    variant={activeSection === item.id ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => {
                      setActiveSection(item.id);
                      setMobileMenuOpen(false);
                    }}
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
    </div>
  );
}

export default App;

