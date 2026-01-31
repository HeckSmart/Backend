# Backend API (Hexagonal Architecture)

Scalable API backend using **hexagonal architecture** (ports and adapters). Dependencies point inward: domain has no dependencies; application depends only on domain; infrastructure implements ports and drives the app.

## Structure

```
src/
├── domain/                 # Core business rules (no external deps)
│   ├── entities/           # BaseEntity, domain entities
│   ├── value-objects/      # Value objects
│   └── errors/             # DomainError and domain exceptions
│
├── application/            # Use cases & ports
│   ├── ports/              # Outbound interfaces (IClock, IRepo, etc.)
│   └── use-cases/          # Application services (orchestrate domain)
│
├── config/                 # Environment-based config (DB, etc.)
├── infrastructure/         # Adapters (implement ports)
│   ├── adapters/           # ClockAdapter, etc.
│   ├── database/           # Sequelize + MariaDB, models
│   └── http/               # Express app, routes, middlewares
│
├── composition-root.ts     # Wires adapters + use cases (only place that knows concretes)
└── index.ts                # Bootstrap: start server
```

## Commands

- `npm run dev` — run with hot reload (tsx watch)
- `npm run build` — compile TypeScript to `dist/`
- `npm start` — run compiled app

## Adding a new feature

1. **Domain**: Add entities/value objects/errors in `domain/`.
2. **Ports**: Define outbound interfaces in `application/ports/` (e.g. `IUserRepository`).
3. **Use case**: Add a use case in `application/use-cases/` that uses ports and domain.
4. **Adapters**: Implement ports in `infrastructure/adapters/` (e.g. `UserRepository`).
5. **HTTP**: Add routes in `infrastructure/http/routes/`, inject use case.
6. **Composition root**: Instantiate adapter and use case, pass to `createApp` / routes.

## Database (MariaDB + Sequelize)

- **Config**: Set `DB_HOST`, `DB_PORT`, `DB_USER`, `DB_PASSWORD`, `DB_NAME` in `.env` (see `.env.example`).
- **Port**: `IDatabase` in `application/ports/` (ping, close). Implemented by `SequelizeDatabaseAdapter`.
- **Models**: Add Sequelize models in `infrastructure/database/models/` and register them in `registerModels(sequelize)`.
- **Health**: `GET /api/health` includes `database: "connected" | "disconnected"` when DB is configured.

## API

- `GET /api/health` — Health check (status, timestamp, uptime, database).
