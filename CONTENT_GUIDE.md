# Aivora Content Guide

This guide establishes editorial and technical standards for writing and updating knowledge in Aivora.

## Core Content Standards

### 1. The 12-Section Concept Contract
Every concept entry added to `src/data/concepts.ts` must implement:
1. `summary`: Precise, one-sentence first-principles definition.
2. `mentalModel`: Concrete real-world analogy demystifying the mechanism.
3. `whyItExists`: The computational, mathematical, or economic failure that prompted this technology.
4. `howItWorks`: Mathematical, algorithmic, and structural breakdown.
5. `architectureDetails`: Layer-by-layer technical transformation.
6. `codeOrFlowExample`: Pseudocode, ASCII flow, or real code snippet.
7. `applications`: 4+ specific production use cases.
8. `whenToUse`: 3+ conditions where this is the optimal choice.
9. `whenNotToUse`: 2+ conditions where simpler alternatives or other tools should be used.
10. `limitations`: 3+ quantitative or algorithmic trade-offs.
11. `commonMistakes`: 3+ implementation pitfalls seen in production.
12. `securityConsiderations`: Vulnerability vectors and mitigation advice.

### 2. Sourcing Requirements
- **Primary Papers**: Prefer original research papers (arXiv, NeurIPS, ICML, ICLR, CVPR).
- **Official Documentation**: Link directly to official documentation or model cards.
- **No Link Rot**: Verify all URLs are valid HTTPS links.
- **Never Fabricate**: If an architecture detail is closed or unreleased (e.g. GPT-4o parameter counts), mark explicitly as `"Not publicly specified"`.

### 3. Running Validation
Run the content validator before opening any pull request:
```bash
pnpm content:validate
```
