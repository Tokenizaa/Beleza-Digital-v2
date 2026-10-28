# Beleza Digital v2

SaaS multi-tenant de gestão para negócios do mercado da beleza: salões, barbearias, esmalterias, clínicas de estética e profissionais independentes.

## Objetivo

Construir uma plataforma confiável para gestão de estabelecimentos, profissionais, serviços, clientes e agendamentos, evoluindo depois para presença digital, financeiro, CRM e assinaturas.

## Repositório de referência

- Projeto de referência funcional: https://github.com/Tokenizaa/Beleza-Digital
- Novo produto: https://github.com/Tokenizaa/Beleza-Digital-v2

O projeto original serve como referência de produto. Este repositório é independente: não copiar funcionalidades sem verificar implementação, segurança, persistência e adequação arquitetural.

## Arquitetura inicial

- Front-end: React, TypeScript, Vite e Tailwind CSS.
- Dados e autenticação: Supabase (PostgreSQL, Auth, RLS e migrations).
- Backend: APIs server-side/Cloudflare Workers quando necessário e após validação da arquitetura.
- Testes: Vitest para testes unitários e Playwright para fluxos ponta a ponta.

A stack definitiva deve ser confirmada durante a fundação; não adicionar dependências sem necessidade demonstrável.

## Prioridades

1. Fundação executável, configuração e documentação.
2. Autenticação, organizações, estabelecimentos e isolamento multi-tenant.
3. Núcleo operacional: profissionais, serviços, clientes e agendamentos.
4. Site público e agendamento online.
5. Financeiro, CRM, notificações e assinaturas.

## Princípios não negociáveis

- Nenhuma persistência operacional exclusivamente em `localStorage`.
- Autorização no servidor e políticas RLS; ocultar elementos na interface não é segurança.
- Não confiar em IDs de organização, permissões, preços ou status de pagamento enviados pelo navegador sem validação.
- Não permitir conflitos de agendamento sob solicitações concorrentes.
- Não expor chaves privilegiadas ou segredos no front-end.
- Não declarar uma funcionalidade pronta sem testes e evidência de funcionamento.
- Respeitar a LGPD e minimizar o acesso a dados pessoais.

## Desenvolvimento

Consulte `AGENTS.md` antes de modificar o projeto e `docs/ARCHITECTURE.md` para as decisões arquiteturais iniciais.

Cada etapa deve terminar com resumo dos arquivos alterados, testes executados, resultados e pendências reais.
