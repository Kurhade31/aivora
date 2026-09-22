# Contributing to Aivora

Thank you for your interest in contributing to Aivora! We welcome contributions to the knowledge graph, code implementation, UI/UX design, and documentation.

## Guiding Principles for Content

1. **Source-First Integrity**: Every factual claim about a model, framework, benchmark, or architecture must cite an official source (research paper, vendor docs, or open-source repository).
2. **First-Principles Explanations**: Do not copy-paste marketing hype, generic buzzwords, or ungrounded claims. Explain *how* and *why* things work.
3. **No Plagiarism**: All textual explanations must be written in original language.
4. **Factual Trade-Offs**: Always include limitations, when *not* to use a technology, and common implementation pitfalls.

## Development Workflow

1. Fork the repository and create a feature branch:
   ```bash
   git checkout -b feature/new-concept-dpo
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Run verification before committing:
   ```bash
   pnpm typecheck
   pnpm test
   pnpm content:validate
   ```

4. Format and commit with conventional commit messages (`feat:`, `fix:`, `content:`, `docs:`).

## Adding a New Concept

Add your entry to `src/data/concepts.ts` ensuring all 12 required sections are populated:
- `id`, `title`, `slug`, `category`, `difficulty`
- `summary`, `mentalModel`, `whyItExists`, `howItWorks`
- `architectureDetails`, `codeOrFlowExample`
- `applications`, `whenToUse`, `whenNotToUse`
- `limitations`, `commonMistakes`, `securityConsiderations`
- `related` (cross-references to valid slugs)
- `sources` (URLs must be valid HTTPS links)
- `lastVerified` (YYYY-MM-DD format)

Run `pnpm test` and `pnpm content:validate` to ensure all relationships are valid.
