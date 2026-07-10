# OVGS — Gestão de Ordens de Venda

![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=flat&logo=nestjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=flat&logo=prisma&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat&logo=postgresql&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-C21325?style=flat&logo=jest&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=flat&logo=jsonwebtokens&logoColor=white)

---

A vaga é para **Frontend Sênior**. O desafio técnico, para esse perfil, permitia o uso de APIs mockadas — mesmo assim, optei por implementar o backend completo. Quis aproveitar o exercício para entregar uma solução real de ponta a ponta, cobrir os requisitos do perfil Full Stack e mostrar como penso além da camada de UI.

O sistema gerencia Ordens de Venda do início ao fim: criação, avanço de status com regras de transição, agendamento de entrega, histórico de auditoria e autenticação por JWT.

---

## Sumário

- [Rodando o projeto](#rodando-o-projeto)
- [Variáveis de ambiente](#variáveis-de-ambiente)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Tecnologias](#tecnologias)
- [Arquitetura e decisões técnicas](#arquitetura-e-decisões-técnicas)
- [Modelagem do domínio](#modelagem-do-domínio)
- [Estratégia de persistência](#estratégia-de-persistência)
- [Escalabilidade e performance](#escalabilidade-e-performance)
- [Trade-offs](#trade-offs)
- [Testes](#testes)
- [Diferenciais implementados](#diferenciais-implementados)
- [Sobre IA](#sobre-ia)

---

## Rodando o projeto

### Com Docker (recomendado)

```bash
docker compose up --build
```

O backend aplica as migrations automaticamente ao iniciar. Quando tudo estiver de pé:

| Serviço  | URL                            |
|----------|--------------------------------|
| Frontend | http://localhost:5173          |
| API      | http://localhost:3000/api      |
| Swagger  | http://localhost:3000/api/docs |

**Login:** `admin@ovgs.com` / `admin123`

### Sem Docker

Você precisa de um Postgres rodando localmente. Com o banco no ar:

```bash
# em terminais separados
cd backend && npm install && npm run start:dev
cd frontend && npm install && npm run dev
```

Para popular com dados iniciais:

```bash
cd backend && npm run seed
```

### Testes

```bash
cd backend

npm test                  # unitários, sem banco
npm run test:integration  # integração, requer banco
```

---

## Variáveis de ambiente

`backend/.env`:

```env
DATABASE_URL="postgresql://ovgs:ovgs@localhost:5432/ovgs"
NODE_ENV=development
PORT=3000
JWT_SECRET=ovgs-super-secret-key-2026
JWT_EXPIRES_IN=8h
```

---

## Estrutura do projeto

```
backend/
  prisma/
    schema.prisma      — modelos, enums, relações
    seed.ts            — dados iniciais
  src/
    modules/
      sales-orders/    — núcleo do domínio
        state-machine/ — regras de transição de status
        dto/
      customers/
      items/
      transport-types/
      scheduling/
      audit/
      auth/
    prisma/            — PrismaService compartilhado

frontend/
  src/
    api/               — todas as chamadas HTTP centralizadas
    pages/             — uma por rota
    components/
    contexts/          — AuthContext (JWT + usuário)
    lib/               — axios, queryClient, utils
    types/
```

---

## Tecnologias

**Backend:** NestJS, TypeScript, Prisma 7, PostgreSQL, Passport JWT, nestjs-pino, Swagger  
**Frontend:** React 19, Vite, TypeScript, Tailwind CSS v4, TanStack Query, React Hook Form, Zod, Axios  
**Infra:** Docker Compose, PostgreSQL 16

---

## Arquitetura e decisões técnicas

**Controller → Service → Repository** — os services não fazem queries diretamente. A separação existe por uma razão prática: permite testar as regras de negócio sem subir banco, mockando apenas os repositories no `Test.createTestingModule`. Em projetos menores isso seria overhead, aqui compensou.

**State machine como mapa imutável** — as transições válidas vivem em `order-state-machine.ts` como um `Record<OrderStatus, OrderStatus | null>`. O fluxo é linear sem bifurcações, então uma função pura de 20 linhas resolve sem dependência de lib externa. Adicionar um novo status é uma linha no mapa, sem tocar em nenhuma outra lógica.

**Auditoria por eventos** — os services emitem eventos via `EventEmitter2` e o `AuditListener` persiste os registros. Nenhum service referencia a tabela de auditoria diretamente. Isso mantém os services focados nas regras de negócio e abre espaço para novos consumidores de eventos (notificações, webhooks) sem alterar o código existente.

**Guard JWT global com `@Public()`** — em vez de decorar cada endpoint protegido individualmente, o `JwtAuthGuard` é registrado globalmente via `APP_GUARD`. Endpoints que não precisam de autenticação (apenas `/auth/login`) recebem `@Public()`. Endpoints novos já nascem protegidos por padrão.

**TanStack Query no frontend, sem store global** — o TanStack Query gerencia cache, loading e invalidação de dados do servidor. O único estado global é o `AuthContext` com token e dados do usuário. Para o escopo da aplicação, isso foi suficiente — não havia necessidade de Redux ou Zustand.

---

## Modelagem do domínio

```
Customer ─── CustomerTransportType ─── TransportType
    │                                        │
    └──── SalesOrder ───────────────────────┘
              │
              ├── SalesOrderItem ─── Item
              ├── Schedule
              └── AuditLog
```

A relação `CustomerTransportType` é o ponto central do modelo: define quais tipos de transporte cada cliente pode utilizar. É uma tabela pivot com chave composta `(customerId, transportTypeId)`, o que impede duplicatas por constraint de banco. A regra de que uma OV só pode ser criada com transporte autorizado para o cliente é verificada no service, antes de qualquer persistência.

`Schedule` tem `salesOrderId` como `@unique`, garantindo que uma OV possua no máximo um agendamento ativo. Ao reagendar, o registro é atualizado e `confirmed` é resetado para `false`, forçando uma nova confirmação explícita.

`SalesOrderItem` usa chave composta `(salesOrderId, itemId)`, impedindo que o mesmo item apareça duplicado em uma OV tanto no banco quanto na camada de aplicação.

Preços são armazenados como `Decimal(10,2)` no Postgres. Usar `float` em coluna de valor monetário introduz erros de arredondamento que preferi evitar desde o schema.

---

## Estratégia de persistência

Banco de dados: **PostgreSQL 16** com **Prisma 7** e `@prisma/adapter-pg` para connection pooling nativo.

Migrations são versionadas em `prisma/migrations/` e aplicadas com `prisma migrate deploy` no startup de produção. Em desenvolvimento, `prisma migrate dev` cria e aplica novas migrations incrementalmente.

A criação de uma OV envolve inserir a ordem e seus itens dentro de uma `prisma.$transaction`. Se qualquer inserção de item falhar, a OV não é persistida.

As queries que buscam OVs com relacionamentos reutilizam um objeto `ORDER_INCLUDE` definido no topo do repository. Isso garante que todos os endpoints retornem os dados no mesmo shape, sem risco de inconsistência entre rotas.

---

## Escalabilidade e performance

O sistema foi construído para o escopo do desafio, mas algumas limitações são claras para uso em produção:

**Paginação** é a ausência mais impactante. Os endpoints de listagem retornam arrays completos. A prioridade em uma evolução seria cursor-based pagination nas rotas de OVs e clientes.

**Aggregations no banco** — as contagens de OVs por status são calculadas no cliente filtrando o array retornado. Um endpoint `/sales-orders/stats` com `groupBy` eliminaria tráfego desnecessário conforme o volume crescesse.

**Índices explícitos** — o schema depende dos índices gerados automaticamente pelo Prisma nas foreign keys. Em carga real, os filtros por `status` e `customerId` se beneficiariam de índices compostos explícitos nesses campos.

**Connection pooling** está endereçado com `@prisma/adapter-pg`. Em produção com múltiplas instâncias, o passo seguinte seria PgBouncer externo ou o pooling gerenciado do Neon/Supabase.

**Logs estruturados** com `nestjs-pino` já estão em produção, gerando JSON. A integração com uma plataforma de observabilidade (Datadog, Grafana Loki) seria direta a partir disso.

---

## Trade-offs

**ESM no backend** — a combinação NestJS + Prisma 7 + `"type": "module"` + ts-jest não tem documentação consolidada. Foi necessário um resolver customizado para o Jest funcionar. Mantive ESM para alinhar com o ecossistema moderno do Node.js, mas foi o ponto que mais consumiu tempo de configuração.

**Tipos duplicados no frontend** — as interfaces em `src/types/index.ts` são cópia manual das do backend. O Swagger está configurado e permitiria geração automática via `openapi-typescript`, mas optei por não adicionar esse tooling para manter o setup simples.

**Sem refresh token** — o JWT tem expiração fixa de 8h. Para um sistema interno com poucos usuários fixos, isso é suficiente. Com uma base maior, adicionaria rotação de refresh tokens.

**Sem soft delete** — registros excluídos somem do banco. Para auditoria completa, clientes e itens deveriam ter `deletedAt`. Não implementei para não contaminar todas as queries com `where: { deletedAt: null }`.

**Filtro de data nas OVs** filtra por `createdAt`, não pela data de entrega do agendamento. Em contexto operacional real a data relevante provavelmente seria a de entrega.

---

## Testes

**Unitários** (`npm test`) — cobrem as regras de negócio sem banco de dados:
- `SalesOrdersService`: transporte não autorizado, item inexistente, criação válida com emissão de evento
- `OrderStateMachine`: todas as transições válidas (4) e inválidas (pulos, regressões, status final)

**Integração** (`npm run test:integration`) — sobe o `AppModule` completo com `supertest` contra banco real. Cobre criação de OV, rejeição de transporte não autorizado e avanço de status via HTTP.

Os dois tipos têm configurações Jest separadas para evitar que os testes de integração rodem sem banco disponível.

---

## Diferenciais implementados

Do que o documento lista como diferenciais, foram implementados:

- **OpenAPI / Swagger** — disponível em `/api/docs`
- **Event-Driven Architecture** — auditoria desacoplada via `EventEmitter2`
- **Logs estruturados** — `nestjs-pino` com saída JSON em produção
- **Estratégias de segurança e autorização** — JWT com guard global, bcrypt para senhas

---

## Sobre IA

Usei o Cursor com Claude em três momentos: destravando a configuração do Jest com ESM (a documentação está espalhada e o resolver customizado foi descoberto iterativamente), gerando o boilerplate inicial dos módulos NestJS, e convertendo as cores da marca para o formato que o Tailwind v4 espera.

Modelagem, regras de negócio, arquitetura e boa parte do código foram escritos diretamente. O que o assistente gerou foi revisado e em vários trechos reescrito.
