# IfeBiz Online

A premium one-page marketing website for IfeBiz Online, helping businesses in Ile-Ife build professional online presences and convert visitors into WhatsApp enquiries.

## Run & Operate

- `pnpm install` — install workspace dependencies
- `pnpm --filter @workspace/ifebiz-online run dev` — run the frontend locally
- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/ifebiz-online` — React + Vite frontend
- `artifacts/api-server` — Express API
- `lib/db` — Drizzle database package
- `netlify.toml` — Netlify build settings and SPA fallback

## Architecture decisions

- The frontend is deployed as a static Vite build on Netlify.
- Netlify rewrites all routes to the React entry point so client-side routes do not return a 404.
- The API remains a separate service and is not bundled into the static frontend deployment.

## Product

IfeBiz Online presents website design and digital presence services for businesses in Ile-Ife, with clear service information and WhatsApp enquiry calls to action.

## User preferences

None recorded.

## Gotchas

- Netlify must use the repository root as the base directory so the workspace package paths resolve.
- Netlify must publish `artifacts/ifebiz-online/dist/public`, not the repository root or the frontend source directory.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
