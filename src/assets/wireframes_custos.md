## 4. Wireframes e Estimativas de Custos

### 4.1 Wireframes do Projeto

Os wireframes foram criados para as principais telas do aplicativo, seguindo os princípios de design minimalista e acolhedor estabelecidos no PRD refinado. As telas incluem:

1. **Tela de Login/Cadastro**: Interface limpa com campos para email e senha, botões claros para diferentes tipos de usuário (Membro e Capelão), e elementos visuais cristãos sutis.

2. **Dashboard do Membro**: Layout focado na funcionalidade principal "Solicitar Apoio", com acesso fácil às conversas ativas e perfil pessoal.

3. **Tela de Chat**: Interface similar a aplicativos populares de mensagem, com suporte a texto e áudio, opções de tradução e indicadores de status.

### 4.2 Estimativas de Custos com APIs

#### 4.2.1 Google Translate API
**Preços (2025):**
- Primeiros 500.000 caracteres por mês: **Gratuitos**
- Após 500.000 caracteres: **$20 USD por milhão de caracteres**

**Estimativas para o MVP:**
- **Cenário Conservador** (1.000 usuários ativos, 50 mensagens/usuário/mês, 100 caracteres/mensagem):
  - Total: 5 milhões de caracteres/mês
  - Custo: $90 USD/mês (~R$ 540/mês)

- **Cenário Moderado** (5.000 usuários ativos, 100 mensagens/usuário/mês, 150 caracteres/mensagem):
  - Total: 75 milhões de caracteres/mês
  - Custo: $1.490 USD/mês (~R$ 8.940/mês)

- **Cenário Otimista** (10.000 usuários ativos, 200 mensagens/usuário/mês, 200 caracteres/mensagem):
  - Total: 400 milhões de caracteres/mês
  - Custo: $7.990 USD/mês (~R$ 47.940/mês)

#### 4.2.2 Outras APIs Necessárias
- **Firebase Cloud Messaging (Notificações Push)**: Gratuito até 1 milhão de mensagens/mês
- **Google Maps Geocoding API**: $5 USD por 1.000 solicitações (para geolocalização)
- **AWS S3 (Armazenamento de Áudio)**: ~$23 USD por TB/mês

### 4.3 Estimativas de Custos com Bubble.io

#### 4.3.1 Planos Disponíveis (2025)
1. **Plano Gratuito**: $0/mês
   - Limitações: Marca Bubble, sem domínio personalizado, capacidade limitada

2. **Plano Starter**: $29 USD/mês (~R$ 174/mês)
   - Aplicativo ao vivo
   - Domínio personalizado
   - Fluxos de trabalho básicos
   - Adequado para MVP inicial

3. **Plano Growth**: $134 USD/mês (~R$ 804/mês)
   - Maior capacidade de usuários
   - Recursos avançados de workflow
   - Backup automático
   - Adequado para crescimento

4. **Plano Team**: $399 USD/mês (~R$ 2.394/mês)
   - Colaboração em equipe
   - Recursos empresariais
   - Suporte prioritário

#### 4.3.2 Recomendação para o Projeto
Para o MVP do aplicativo de capelania, recomenda-se:

**Fase Inicial (0-500 usuários)**: Plano Starter ($29/mês)
**Fase de Crescimento (500-5.000 usuários)**: Plano Growth ($134/mês)
**Fase de Expansão (5.000+ usuários)**: Plano Team ou Enterprise

### 4.4 Comparação: Desenvolvimento Tradicional vs Bubble.io

#### 4.4.1 Desenvolvimento Tradicional (React Native + Node.js)
**Custos Iniciais:**
- Desenvolvedor Full-Stack (3-6 meses): R$ 30.000 - R$ 60.000
- Designer UX/UI: R$ 8.000 - R$ 15.000
- Infraestrutura AWS: R$ 500 - R$ 1.500/mês
- APIs: R$ 540 - R$ 8.940/mês (conforme uso)

**Total Inicial**: R$ 38.000 - R$ 75.000 + custos mensais

#### 4.4.2 Desenvolvimento com Bubble.io
**Custos Iniciais:**
- Desenvolvimento no-code (1-2 meses): R$ 10.000 - R$ 20.000
- Designer UX/UI: R$ 5.000 - R$ 10.000
- Plano Bubble: R$ 174 - R$ 804/mês
- APIs: R$ 540 - R$ 8.940/mês (conforme uso)

**Total Inicial**: R$ 15.000 - R$ 30.000 + custos mensais

### 4.5 Tabela de Preços para UX/UI Design

| Tipo de Tela | Freelancer (R$) | Agência (R$) |
|---------------|-----------------|--------------|
| **Tela de Login/Cadastro** | 800 - 1.500 | 1.500 - 3.000 |
| **Dashboard Principal** | 1.200 - 2.000 | 2.000 - 4.000 |
| **Tela de Chat** | 1.500 - 2.500 | 2.500 - 5.000 |
| **Perfil de Usuário** | 800 - 1.200 | 1.200 - 2.500 |
| **Formulário de Solicitação** | 600 - 1.000 | 1.000 - 2.000 |
| **Sistema de Design Completo** | 3.000 - 5.000 | 5.000 - 10.000 |

**Valores incluem:**
- Wireframes de baixa e alta fidelidade
- Protótipos interativos
- Guia de estilo e componentes
- Adaptação para mobile e desktop

### 4.6 Resumo de Investimento Recomendado

#### 4.6.1 Opção Bubble.io (Recomendada para MVP)
**Investimento Inicial**: R$ 15.000 - R$ 30.000
**Custos Mensais**: R$ 714 - R$ 9.744 (dependendo do crescimento)
**Tempo de Desenvolvimento**: 1-2 meses
**Vantagens**: Rápido time-to-market, menor investimento inicial, facilidade de iteração

#### 4.6.2 Opção Desenvolvimento Tradicional
**Investimento Inicial**: R$ 38.000 - R$ 75.000
**Custos Mensais**: R$ 1.040 - R$ 10.440
**Tempo de Desenvolvimento**: 3-6 meses
**Vantagens**: Maior controle técnico, escalabilidade superior, personalização completa

### 4.7 Recomendação Estratégica

Para o MVP do aplicativo de capelania cristã, recomenda-se **iniciar com Bubble.io** pelas seguintes razões:

1. **Validação Rápida**: Permite testar a proposta de valor com menor investimento
2. **Time-to-Market**: Lançamento em 1-2 meses vs 3-6 meses
3. **Flexibilidade**: Facilidade para iterar baseado no feedback dos usuários
4. **Migração Futura**: Possibilidade de migrar para desenvolvimento tradicional após validação

O investimento inicial de R$ 15.000 - R$ 30.000 permite validar o conceito e, caso bem-sucedido, justificar o investimento maior em desenvolvimento tradicional para as versões futuras.

