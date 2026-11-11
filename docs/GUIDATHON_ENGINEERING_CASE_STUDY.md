# GUIDATHON 2.0 — Engineering Case Study

> An AI-assisted hackathon workspace that turns a challenge brief into an evidence-backed product direction, a technical plan, and a submission path.

## Portfolio summary

GUIDATHON is a multi-agent AI application built around five bounded specialist roles: Hermes (knowledge and evidence), Zeus (coordination), Athena (product strategy), Hephaestus (engineering), and Chronos (execution planning). The interface combines a 3D constellation-style agent navigator, role-specific chat rooms, a source ledger, idea analysis, technical planning, task tracking, and submission-readiness workflows.

## Architecture

```text
React + TypeScript + Vite
        |
        | tRPC procedures
        v
Express / Node.js API
        |
        +--> Role-specific agent prompts and routing
        +--> Provider adapter (configured providers only)
        +--> Hermes evidence context and citation extraction
        +--> Authenticated workspace procedures
        |
        +--> Drizzle ORM --> MySQL
        |
        +--> Retrieval: embeddings + cosine similarity
             with lexical fallback when vectors are unavailable
```

### Main engineering decisions

- **Bounded specialist roles:** Each agent has a defined responsibility and role-specific prompt contract rather than presenting five identical chatbots.
- **Server-side model calls:** Provider credentials remain on the server. The provider adapter can route to configured Gemini, Groq, Vercel AI Gateway, OpenRouter, or managed-model endpoints; actual availability depends on deployment secrets.
- **Evidence-aware RAG:** Hermes retrieves relevant processed workspace chunks, supplies them as context, and returns chunk references when available. The retrieval path supports vector similarity and lexical fallback.
- **Trust boundaries:** New source chunks begin unverified. Retrieval is scoped to processed chunks belonging to the authenticated workspace. “Processed” means intake completed; it does not mean the source's claims were independently fact-checked.
- **Durable workspace state:** Authenticated workspaces can persist a versioned project snapshot, per-agent conversation histories, Judge Arena history, and Chronos tasks through MySQL.
- **Typed API boundaries:** tRPC and Zod schemas define procedure inputs and validate data at the server boundary.
- **Release checks:** TypeScript checking, Vitest tests, and a production build are configured in GitHub Actions.

## Current technical stack

| Layer | Technologies |
|---|---|
| UI | React 19, TypeScript, Vite, Tailwind CSS, Three.js, GSAP |
| API | Node.js, Express, tRPC, Zod |
| Persistence | MySQL, Drizzle ORM |
| AI | Hosted LLM provider adapter; Gemini embeddings when configured |
| Retrieval | Application-managed vector similarity and lexical fallback |
| Identity | Manus OAuth/session integration (requires deployment configuration) |
| Delivery | Vercel static frontend configuration; server runtime required for live model/API routes |
| Quality | TypeScript, Vitest, GitHub Actions |

## What is implemented vs. what still needs production proof

### Implemented in the repository

- Five specialist agent roles and role-specific chat experiences.
- Hermes source intake, chunking, evidence display, and retrieval flow for supported text inputs.
- Embedding-based retrieval with lexical fallback.
- Owner-scoped workspace persistence and isolated specialist transcripts when the database/auth configuration is active.
- Judge Arena rubric and saved evaluation history when authenticated persistence is configured.
- Editable Chronos milestones and readiness signals.
- Automated tests for routing, retrieval mechanics, evaluation scoring, and selected trust boundaries.
- CI workflow for type-checking, tests, and build.

### Known gaps — do not present these as completed

- Database-backed integration tests for workspace round-trips, transcript isolation, and Judge Arena history.
- Provider timeouts, retry/backoff, structured-output validation, and model-call rate limits.
- Full MCP transport compatibility, tool-schema validation, permission policy, and audit logging. The MCP integration is currently an optional adapter boundary, not proof of a production-connected tool ecosystem.
- PDF parsing and broader binary-document ingestion.
- Named multi-project workspaces.
- Full keyboard, screen-reader, mobile, and reduced-motion QA.
- A verified production deployment with real credentials, health checks, and live end-to-end smoke tests.
- A reproducible live-model evaluation set. Existing unit tests validate deterministic contracts, not factual quality of every generated answer.

## How to run locally

```bash
pnpm install
pnpm dev
```

Quality gates:

```bash
pnpm check
pnpm test
pnpm build
```

Use a local environment file based on `.env.example`. Never commit real API keys, database credentials, OAuth secrets, or tokens. Configure deployment secrets in the hosting provider.

## Resume bullet (edit to match your actual contribution)

**Built GUIDATHON 2.0**, a multi-agent AI hackathon workspace using React, TypeScript, Node.js, tRPC, and MySQL; implemented role-bounded agent workflows, evidence-grounded RAG with embedding/lexical retrieval, authenticated workspace persistence, and CI checks with Vitest and GitHub Actions.

Only retain technologies and implementation claims you can personally explain and demonstrate. If you did not implement a component yourself, describe your role accurately (for example, “contributed to” or “integrated”).

## Interview explanation

**Why five agents?** The roles separate different reasoning jobs—evidence, coordination, product strategy, engineering, and execution planning—so each can have a narrower prompt, context, and expected output.

**Why RAG?** Project-specific evidence changes by challenge. Retrieval gives Hermes relevant supplied sources at answer time instead of expecting the model's training data to contain the team's private brief.

**Why vector plus lexical retrieval?** Semantic embeddings can match related concepts, while lexical fallback keeps retrieval usable when embeddings are unavailable. Both approaches need evaluation against representative queries.

**Why server-side model calls?** Provider secrets must not be exposed in browser code. A server adapter also centralizes provider selection, failure handling, and usage controls.

**What would you improve next?** Add a measured agent evaluation set, integration tests against disposable MySQL, bounded retries/timeouts and rate limits, and a real MCP tool with least-privilege permissions, confirmation for side effects, and audit logs.
