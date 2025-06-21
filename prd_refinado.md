# PRD - MVP Aplicativo de Capelania Cristã (Versão Refinada)

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

## 4.4 Requisitos Funcionais e Não Funcionais

### 4.4.1 Requisitos Funcionais (RF)

#### RF001 - Sistema de Autenticação e Cadastro
- **RF001.1**: O sistema deve permitir cadastro de membros com nome completo, email, telefone (opcional), país/localização, idioma preferencial e código de indicação (opcional).
- **RF001.2**: O sistema deve permitir cadastro de capelães com dados pessoais completos, formação/especialização, área de atuação, experiência e upload de certificados.
- **RF001.3**: O sistema deve validar emails únicos e formatos válidos durante o cadastro.
- **RF001.4**: O sistema deve detectar automaticamente país e idioma baseado na localização do usuário.
- **RF001.5**: O sistema deve permitir login com email e senha.
- **RF001.6**: O sistema deve permitir recuperação de senha via email.

#### RF002 - Gestão de Perfis
- **RF002.1**: O sistema deve permitir que membros visualizem e editem suas informações básicas.
- **RF002.2**: O sistema deve permitir que capelães gerenciem suas especialidades, áreas de atuação e status de disponibilidade.
- **RF002.3**: O sistema deve exibir perfis de capelães com especialidades, experiência e avaliações.
- **RF002.4**: O sistema deve permitir que capelães alterem seu status (Online/Offline/Ocupado/Disponível).

#### RF003 - Sistema de Solicitação de Apoio
- **RF003.1**: O sistema deve permitir que membros criem solicitações de apoio com título, descrição e categoria.
- **RF003.2**: O sistema deve categorizar solicitações como: Oração, Aconselhamento, Desabafo ou Outro.
- **RF003.3**: O sistema deve notificar capelães disponíveis sobre novas solicitações.
- **RF003.4**: O sistema deve permitir que capelães aceitem ou recusem solicitações.
- **RF003.5**: O sistema deve criar automaticamente uma sala de chat quando uma solicitação for aceita.

#### RF004 - Sistema de Comunicação
- **RF004.1**: O sistema deve permitir envio de mensagens de texto entre membros e capelões.
- **RF004.2**: O sistema deve permitir gravação e envio de mensagens de áudio (máximo 5 minutos).
- **RF004.3**: O sistema deve exibir status das mensagens (enviada, entregue, lida).
- **RF004.4**: O sistema deve manter histórico completo de conversas.
- **RF004.5**: O sistema deve enviar notificações push para novas mensagens.
- **RF004.6**: O sistema deve permitir reprodução de áudios com controles básicos (play/pause, barra de progresso).

#### RF005 - Sistema de Tradução
- **RF005.1**: O sistema deve traduzir automaticamente mensagens de texto usando Google Translate API.
- **RF005.2**: O sistema deve detectar automaticamente o idioma das mensagens.
- **RF005.3**: O sistema deve permitir tradução manual de mensagens específicas.
- **RF005.4**: O sistema deve suportar tradução entre português, inglês e espanhol.

#### RF006 - Sistema de Avaliação
- **RF006.1**: O sistema deve permitir que membros avaliem capelões após interações.
- **RF006.2**: O sistema deve calcular e exibir avaliação média dos capelões.
- **RF006.3**: O sistema deve permitir feedback simples (like/dislike) ou avaliação por estrelas (1-5).

#### RF007 - Sistema de Notificações
- **RF007.1**: O sistema deve enviar notificações push para novas solicitações de apoio.
- **RF007.2**: O sistema deve enviar notificações para novas mensagens recebidas.
- **RF007.3**: O sistema deve enviar notificações sobre status de aprovação de capelães.
- **RF007.4**: O sistema deve permitir configuração de preferências de notificação.

#### RF008 - Sistema de Moderação
- **RF008.1**: O sistema deve permitir denúncia de usuários ou mensagens inadequadas.
- **RF008.2**: O sistema deve permitir bloqueio de usuários.
- **RF008.3**: O sistema deve suspender temporariamente usuários que violem as diretrizes.
- **RF008.4**: O sistema deve permitir que administradores revisem e aprovem capelões.

### 4.4.2 Requisitos Não Funcionais (RNF)

#### RNF001 - Performance
- **RNF001.1**: O sistema deve responder a requisições de login em menos de 2 segundos.
- **RNF001.2**: O sistema deve enviar mensagens de texto em menos de 1 segundo.
- **RNF001.3**: O sistema deve carregar listas de conversas em menos de 3 segundos.
- **RNF001.4**: O sistema deve suportar 5.000 usuários simultâneos sem degradação de performance.
- **RNF001.5**: O sistema deve processar traduções de mensagens em menos de 3 segundos.

#### RNF002 - Disponibilidade
- **RNF002.1**: O sistema deve ter uptime de 99.9% (máximo 8.76 horas de downtime por ano).
- **RNF002.2**: O sistema deve implementar recuperação automática de falhas em menos de 5 minutos.
- **RNF002.3**: O sistema deve manter backup automático dos dados a cada 24 horas.
- **RNF002.4**: O sistema deve implementar redundância de servidores para alta disponibilidade.

#### RNF003 - Segurança
- **RNF003.1**: O sistema deve criptografar todas as mensagens em trânsito (TLS 1.3).
- **RNF003.2**: O sistema deve armazenar senhas usando hash bcrypt com salt.
- **RNF003.3**: O sistema deve implementar autenticação JWT com expiração de 24 horas.
- **RNF003.4**: O sistema deve validar e sanitizar todas as entradas de usuário.
- **RNF003.5**: O sistema deve implementar rate limiting para prevenir ataques de força bruta.
- **RNF003.6**: O sistema deve ser compatível com LGPD e GDPR.

#### RNF004 - Escalabilidade
- **RNF004.1**: O sistema deve suportar crescimento de 20% ao mês sem degradação.
- **RNF004.2**: O sistema deve implementar cache distribuído para melhorar performance.
- **RNF004.3**: O sistema deve usar balanceamento de carga para distribuir tráfego.
- **RNF004.4**: O sistema deve implementar arquitetura de microserviços para facilitar escalabilidade.

#### RNF005 - Usabilidade
- **RNF005.1**: O sistema deve ser intuitivo para usuários com diferentes níveis de conhecimento tecnológico.
- **RNF005.2**: O sistema deve funcionar em dispositivos móveis (iOS 12+ e Android 8+).
- **RNF005.3**: O sistema deve ser responsivo e adaptável a diferentes tamanhos de tela.
- **RNF005.4**: O sistema deve implementar design acessível (contraste adequado, tamanho de fonte ajustável).
- **RNF005.5**: O sistema deve carregar em menos de 3 segundos em conexões 3G.

#### RNF006 - Confiabilidade
- **RNF006.1**: O sistema deve garantir que mensagens não sejam perdidas durante transmissão.
- **RNF006.2**: O sistema deve implementar retry automático para falhas temporárias de rede.
- **RNF006.3**: O sistema deve validar integridade de dados antes de salvar no banco.
- **RNF006.4**: O sistema deve implementar logs detalhados para auditoria e debugging.

#### RNF007 - Compatibilidade
- **RNF007.1**: O sistema deve funcionar em iOS 12+ e Android 8+.
- **RNF007.2**: O sistema deve ser compatível com diferentes navegadores web (Chrome, Safari, Firefox).
- **RNF007.3**: O sistema deve funcionar em conexões de internet lentas (mínimo 1Mbps).
- **RNF007.4**: O sistema deve ser compatível com diferentes resoluções de tela.

#### RNF008 - Manutenibilidade
- **RNF008.1**: O código deve seguir padrões de desenvolvimento e documentação claros.
- **RNF008.2**: O sistema deve implementar monitoramento e alertas automáticos.
- **RNF008.3**: O sistema deve permitir deploy contínuo sem downtime.
- **RNF008.4**: O sistema deve ter documentação técnica completa e atualizada.

#### RNF009 - Privacidade
- **RNF009.1**: O sistema deve implementar criptografia de ponta a ponta para mensagens.
- **RNF009.2**: O sistema deve permitir exclusão completa de dados do usuário.
- **RNF009.3**: O sistema deve implementar controle granular de permissões de dados.
- **RNF009.4**: O sistema deve registrar e auditar todos os acessos a dados pessoais.

#### RNF010 - Internacionalização
- **RNF010.1**: O sistema deve suportar múltiplos idiomas (português, inglês, espanhol).
- **RNF010.2**: O sistema deve adaptar formato de data e hora conforme localização.
- **RNF010.3**: O sistema deve suportar diferentes fusos horários.
- **RNF010.4**: O sistema deve implementar tradução automática de interface.

## 5. Especificações de Interface (Wireframes e Design) 