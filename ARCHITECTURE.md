# Aivora System Architecture

This document describes the software architecture, design principles, data flow, and directory structure of the Aivora platform.

## Architectural Principles

1. **Static-First & Zero Runtime Fluff**: Pre-render everything that can be statically known at build time. Minimizes client-side JavaScript bundle sizes and maximizes CDN caching.
2. **Zero External API Dependency**: The core product operates 100% autonomously with zero required cloud API keys or SaaS dependencies.
3. **Strict Data Schemas**: All knowledge entities (concepts, models, tools, frameworks, architectures, projects) are defined as strict TypeScript interfaces under `src/types/`.
4. **Relational Knowledge Graph**: Entities cross-reference one another via immutable slugs, enabling multi-hop exploration across concepts, models, tools, and architectures.
5. **Separation of Presentation and Knowledge Data**: Educational content is never hardcoded inside presentation JSX components; it resides in pure, inspectable data modules under `src/data/`.

---

## High-Level System Architecture

```
User Browser (Desktop / Mobile / Tablet)
               │
               ▼
   Next.js 15 App Router (Edge & Static Pages)
   ├── Client Shell: Navigation, ThemeToggle, SearchModal, Canvas Map
   └── Static Pages: Concepts, Models, Tools, Projects, Safety, Glossary
               │
               ▼
       Knowledge Graph Layer (`src/lib/data.ts`)
       ├── Search Indexing: Fuzzy multi-entity matching
       ├── Stack Recommendation Engine: Rule-based architectural mapping
       └── Static Entity Stores (`src/data/*.ts`)
               ├── Concepts (12-section standardized schema)
               ├── Models, Tools, Frameworks
               └── Architectures, Projects, Safety, Timeline, Careers
```

---

## Directory Organization

```
aivora/
├── .github/
│   ├── workflows/           # CI, deploy, and content-validation workflows
│   └── ISSUE_TEMPLATE/      # Structured issue forms
├── docs/                    # Design system and product documentation
├── public/
│   ├── brand/               # Bespoke SVG marks, wordmarks, and lockups
│   ├── illustrations/       # Vector diagrams and schemas
│   ├── patterns/            # Orbital grid and mesh SVG patterns
│   └── og/                  # Open Graph social preview cards
├── src/
│   ├── app/                 # Next.js 15 App Router pages & route handlers
│   ├── components/          # Reusable UI & knowledge components
│   ├── data/                # Strongly typed knowledge entity repositories
│   ├── lib/                 # Data accessors, search graph, and progress manager
│   ├── styles/              # Global CSS & Tailwind definitions
│   └── types/               # TypeScript domain interfaces
├── tests/                   # Vitest unit test suites
└── scripts/                 # Content validation runner
```
