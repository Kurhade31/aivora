# Aivora

> **"Understand AI. Navigate the AI era. Build what's next."**

[![CI](https://github.com/adarsh/aivora/actions/workflows/ci.yml/badge.svg)](https://github.com/adarsh/aivora/actions/workflows/ci.yml)
[![Content Validation](https://github.com/adarsh/aivora/actions/workflows/content-validation.yml/badge.svg)](https://github.com/adarsh/aivora/actions/workflows/content-validation.yml)
[![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7+-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)

An open knowledge platform for understanding artificial intelligence from first principles, exploring the technologies behind it, and turning knowledge into verifiable real-world systems.

---

## What is Aivora?

Aivora is **NOT**:
- A ChatGPT clone or simple chatbot wrapper
- An affiliate link farm or commercial tool directory
- A marketing blog or rehashed documentation dump
- A commercial course paywall

Aivora is a **Knowledge Operating System for the AI Era**. It answers one fundamental question:

> *"How do I understand, learn, choose, and use AI intelligently?"*

It connects:
`AI Awareness` → `AI Education` → `AI Models` → `AI Tools` → `AI Frameworks` → `AI Engineering` → `AI Agents` → `AI Safety`

---

## Core Features

1. **Interactive AI Knowledge Map (`/map`)**
   - A visual, interactive Knowledge Orbit connecting foundational machine learning, deep learning, embeddings, foundation models, RAG, and autonomous agent state loops.
   - Pan, zoom, inspect node relationships, and trace knowledge pathways.

2. **6-Layer Knowledge Architecture (`/learn/concept/[slug]`)**
   Every concept is systematically deconstructed across 6 standardized layers:
   - **01 Foundation**: What is it? First principles & mental models.
   - **02 Mechanism**: How does it work? Mathematics, tensors, and execution flows.
   - **03 Ecosystem**: What models, tools, and runtimes surround it?
   - **04 Application**: What real software can you build? When to use vs not use.
   - **05 Trade-Offs**: Quantitative limitations and security vulnerabilities.
   - **06 Practice**: Common implementation mistakes and project links.

3. **Find Your AI Stack (`/stack`)**
   - An objective architectural decision engine.
   - Configure execution modes (Cloud API vs Air-Gapped Local), retrieval needs, agency, privacy tiers, and team background to receive a factual multi-layer system architecture with rationale and trade-offs.

4. **AI Ecosystem Explorers (`/ecosystem/*`)**
   - **Model Explorer (`/ecosystem/models`)**: Technical specifications, context windows, architectures, verified licenses, and limitations.
   - **Tool Explorer (`/ecosystem/tools`)**: Organized strictly by **Job-to-be-Done** (Think, Research, Write, Code, Design, Create, Analyze, Automate, Learn, Build).
   - **Framework Explorer (`/ecosystem/frameworks`)**: Deep learning, serving, RAG, and multi-agent frameworks.

5. **AI Project Lab (`/build`)**
   - Production blueprints with complete executable code, architecture flowcharts, common mistakes, and extension paths.
   - *Example Projects*: Zero-Cloud Local RAG CLI with Ollama, Autonomous Tool-Calling Research Agent, Automated LLM Guardrails Evaluator.

6. **AI Architecture Library (`/build/architectures`)**
   - System blueprints showing component layers, end-to-end data flows, execution actors, and security considerations.

7. **Prompt Engineering Lab (`/build/prompt-lab`)**
   - Interactive prompt composition studio teaching the 7 pillars: Task specification, Context grounding, Delimiter isolation, Constraints, Few-shot exemplars, Schema enforcement, and Evaluation.

8. **AI Safety Center (`/safety`)**
   - In-depth vulnerability mitigation guides covering prompt injection (direct & indirect), data leakage, hallucinations, excessive agency, and container sandboxing with side-by-side vulnerable vs hardened code.

9. **AI Technical Glossary (`/glossary`) & Timeline (`/timeline`)**
   - Rigorous mathematical and algorithmic definitions for 25+ terms.
   - Chronological history of milestones from the 1950 Turing Test through modern test-time reasoning models.

10. **AI Career Map (`/careers`)**
    - Objective breakdown of 9 distinct engineering roles, required skills, concepts to master, and portfolio projects without salary hype.

---

## Original Brand Identity & Assets

Aivora uses its own bespoke visual language centered on the **"AI Knowledge Orbit"**:
- `public/brand/aivora-mark.svg`: Original Knowledge Orbit symbol.
- `public/brand/aivora-wordmark.svg`: Geometric typography wordmark.
- `public/brand/aivora-lockup.svg`: Combined mark and wordmark lockup.
- `public/brand/favicon.svg` & `public/brand/app-icon.svg`: High-contrast favicons.
- `public/og/og-image.svg`: Open Graph social preview.
- `public/patterns/orbit-grid.svg`: Ambient grid background pattern.
- `public/illustrations/knowledge-layers.svg`: Six knowledge layers diagram.

---

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router, Server Components & Static Site Generation)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict Mode, 100% typed content schemas)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (Semantic design tokens with Light and Dark modes)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Testing**: [Vitest](https://vitest.dev/) (Unit tests for search, content integrity, stack builder, and progress)
- **Package Manager**: [pnpm](https://pnpm.io/)

---

## Getting Started

### Prerequisites
- Node.js 18.18+ or 20+ (Node v24 supported)
- pnpm (`npm install -g pnpm`)

### Installation & Local Development

```bash
# Clone the repository
git clone https://github.com/adarsh/aivora.git
cd aivora

# Install dependencies
pnpm install

# Run the development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Verification & Testing Scripts

Aivora enforces strict data integrity, relationship consistency, and type correctness:

```bash
# Run all unit tests
pnpm test

# Run content integrity & placeholder validation
pnpm content:validate

# Run TypeScript typecheck
pnpm typecheck

# Build for production
pnpm build
```

---

## Content System & Adding Knowledge

All knowledge in Aivora is strongly typed and stored in structured data modules under `src/data/`:
- `src/data/concepts.ts`: Core AI concepts with 12 mandatory sections.
- `src/data/models.ts`: Verified foundation models.
- `src/data/tools.ts`: AI tools organized by job.
- `src/data/frameworks.ts`: Open-source runtimes and frameworks.
- `src/data/architectures.ts`: Architecture blueprints with data flows.
- `src/data/projects.ts`: Hands-on project tutorials.
- `src/data/roadmaps.ts`: Learning tracks.
- `src/data/safety.ts`: AI safety threats and mitigations.
- `src/data/glossary.ts`: Technical glossary entries.
- `src/data/timeline.ts`: Historical AI milestones.
- `src/data/careers.ts`: Career roles and competencies.

See [`CONTENT_GUIDE.md`](./CONTENT_GUIDE.md) for contribution rules.

---

## Deployment

Aivora is optimized for zero-configuration deployment to Vercel, Netlify, Cloudflare Pages, or self-hosted Docker containers. See [`DEPLOYMENT.md`](./DEPLOYMENT.md) for full instructions.

---

## License

Aivora is open-source software licensed under the [Apache License 2.0](./LICENSE).
