# Arquitetura inicial — Beleza Digital v2

## 1. Escopo

A plataforma atende múltiplos negócios do mercado da beleza. Um usuário pode participar de uma ou mais organizações, conforme as regras de associação e autorização que forem implementadas. Cada organização pode ter um ou mais estabelecimentos, profissionais, serviços, clientes e agendas.

A modelagem exata deve ser validada antes de criar migrations. Não presuma que usuário, organização, estabelecimento e profissional são a mesma entidade.

## 2. Limites arquiteturais

### Front-end

React + TypeScript + Vite + Tailwind CSS são a base planejada para a interface. Componentes de interface não devem ser responsáveis por garantir autorização ou integridade de negócio.

### Dados e identidade

Supabase/PostgreSQL é a opção inicial para persistência e autenticação. O uso real deve incluir migrations versionadas, políticas RLS, tratamento de sessão e testes de autorização. Nenhuma chave privilegiada pode ser incluída no bundle do navegador.

### Lógica de negócio

Regras críticas — autorização, disponibilidade de agenda, transições de status e validação de operações — devem ser aplicadas em uma camada confiável do servidor ou no banco de dados, conforme a regra. Não duplicar regras de forma divergente entre componentes.

### Deploy e execução

A hospedagem e a eventual adoção de Cloudflare Workers/Pages Functions serão decididas depois de verificar requisitos, configuração existente e fluxo de deploy. Evite adicionar uma camada de backend separada sem uma necessidade concreta.

## 3. Domínios funcionais previstos

- Identidade, usuários e sessões.
- Organizações, estabelecimentos e membros.
- Profissionais, especialidades e horários de trabalho.
- Catálogo de serviços e duração.
- Clientes e histórico de atendimento.
- Agendamentos, disponibilidade, cancelamentos e remarcações.
- Site público e reserva online.
- Financeiro e relatórios.
- CRM e comunicações.
- Planos, cobrança e administração SaaS.

A lista é um mapa de produto, não uma declaração de funcionalidades implementadas.

## 4. Requisitos críticos de agendamento

- Guardar datas e horários com uma estratégia explícita de fuso horário por estabelecimento.
- Validar horário comercial, duração, intervalos e bloqueios.
- Evitar reservas conflitantes inclusive em requisições concorrentes; uma validação apenas no front-end é insuficiente.
- Definir política para cancelamento, remarcação, atraso e ausência.
- Tornar as transições de status explícitas e auditáveis.
- Cobrir os casos de conflito e concorrência com testes.

## 5. Segurança multi-tenant

- Definir a associação entre usuário e organização de maneira explícita.
- Aplicar autorização no servidor e RLS no banco quando suportado.
- Restringir todas as operações ao tenant autorizado.
- Testar tentativas de leitura e escrita entre tenants.
- Tratar dados públicos de agendamento separadamente dos dados administrativos.
- Manter segredos exclusivamente em ambientes confiáveis.

## 6. Qualidade e observabilidade

- TypeScript estrito onde viável.
- Testes unitários para regras de negócio.
- Testes de integração para banco, autorização e migrations.
- Playwright para fluxos essenciais de ponta a ponta.
- Logs úteis sem incluir segredos ou dados pessoais desnecessários.
- Estados de carregamento, vazio, erro e sucesso na interface.
- Documentar decisões arquiteturais relevantes e suas consequências.

## 7. Decisões ainda abertas

As decisões abaixo precisam ser confirmadas por inspeção do repositório e dos requisitos, não inventadas:

- estrutura e framework final do backend;
- estratégia de tenancy e associação de membros;
- provedor e política de cobrança;
- provedor de e-mail/WhatsApp/SMS;
- política de retenção e exportação de dados;
- estratégia de deploy, domínios e ambientes;
- integrações externas necessárias.

## 8. Primeiro marco de entrega

A fundação estará pronta quando o repositório tiver uma aplicação executável, scripts documentados, configuração de ambiente segura, validações de qualidade funcionando e caminho versionado para conectar o banco. Não considerar autenticação, RLS ou persistência prontos apenas por existirem variáveis de ambiente ou telas visuais.
