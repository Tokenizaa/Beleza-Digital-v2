# Instruções para agentes de desenvolvimento

## Objetivo

Desenvolver o Beleza Digital v2 como um SaaS multi-tenant para negócios do mercado da beleza. O repositório `Tokenizaa/Beleza-Digital` é referência de produto, não uma autorização para copiar sua arquitetura ou assumir que todas as funcionalidades estão prontas.

## Antes de alterar código

1. Leia este arquivo e o `README.md`.
2. Leia a documentação relevante em `docs/`.
3. Inspecione a estrutura, dependências, scripts, migrations e testes existentes.
4. Identifique o estado real do projeto; não presuma que arquivos ou serviços existem.
5. Apresente um plano curto antes de mudanças estruturais relevantes.

## Regras de engenharia

- Faça alterações pequenas, coerentes e verificáveis.
- Preserve o trabalho existente; não apague nem substitua arquivos sem necessidade.
- Não introduza dependências sem justificar o benefício.
- Não faça uma reescrita ampla para resolver um problema localizado.
- Não implemente telas desconectadas do fluxo de dados real.
- Não use dados mockados como se fossem dados de produção.
- Não use `localStorage` como fonte oficial de dados operacionais.
- Valide entradas no servidor e trate erros explicitamente.
- Nunca exponha segredos, service-role keys ou credenciais privadas no navegador.
- Use migrations versionadas para mudanças no banco.
- Não enfraqueça RLS para fazer uma tela funcionar.
- Não confie em permissões, IDs de tenant, preços ou status enviados pelo cliente.
- Considere concorrência e idempotência em agendamentos, pagamentos e webhooks.
- Proteja dados pessoais e considere a LGPD.

## Multi-tenancy e autorização

Toda consulta ou mutação de dados de negócio deve ser limitada ao contexto autorizado de organização/estabelecimento. A proteção precisa existir no servidor e, quando aplicável, nas políticas RLS do PostgreSQL.

Crie testes negativos que tentem acessar dados de outra organização. Não considere o isolamento validado apenas porque o filtro da interface funciona.

## Processo de trabalho

1. Defina o resultado esperado e critérios de aceitação.
2. Inspecione os arquivos e dependências relacionados.
3. Implemente a menor mudança que resolva a etapa.
4. Execute lint, typecheck, testes e build disponíveis.
5. Corrija falhas introduzidas pela mudança.
6. Atualize documentação e migrations, se necessário.
7. Informe arquivos alterados, comandos executados, resultados e pendências.

Nunca declare testes como aprovados se não foram executados. Diferencie claramente implementado, testado e ainda pendente.

## Ordem recomendada

1. Fundação executável e convenções.
2. Configuração segura do Supabase e migrations.
3. Autenticação, organizações, estabelecimentos e autorização.
4. Profissionais, serviços, clientes e agenda.
5. Site público e agendamento online.
6. Financeiro, CRM, automações e assinaturas.

Não avance para módulos dependentes enquanto a fundação de segurança e persistência estiver inconsistente.
