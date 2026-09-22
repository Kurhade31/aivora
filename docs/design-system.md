# Aivora Design System Specification

## Brand Motif: The AI Knowledge Orbit
Aivora's visual identity centers around **Knowledge, Connection, and Action**. Rather than generic neural networks or purple gradients, Aivora uses an orbital topology:
- **Core Knowledge Nucleus**: Central hexagonal synthesis state.
- **Orbital Pathways**: Concentric and intersecting ellipses signifying data flow and dependencies.
- **Satellite Telemetry Nodes**: Specialized entities (models, tools, frameworks) operating in defined orbits.

---

## 1. Color Palette & Semantic Tokens

Aivora implements an intentionally designed dual-theme architecture. The themes are not mere inversions; they represent distinct spatial lighting contexts.

### Dark Theme ("Deep Space Obsidian & Telemetry")
- `--background`: `#080c14` (Deep space slate-black)
- `--surface`: `#0f172a` (Elevated slate panel)
- `--surface-elevated`: `#1e293b` (Card highlight container)
- `--foreground`: `#f8fafc` (High-contrast neutral white)
- `--muted`: `#94a3b8` (Telemetry annotation text)
- `--primary`: `#06b6d4` (Orbital Cyan)
- `--secondary`: `#3b82f6` (Signal Cobalt Blue)
- `--accent`: `#10b981` (Verified Telemetry Emerald)
- `--warning`: `#f59e0b` (Alert Amber)
- `--danger`: `#f43f5e` (Threat Rose)
- `--border`: `#1e293b` (Structural partition lines)

### Light Theme ("Crisp Technical Paper & Blueprint")
- `--background`: `#f8fafc` (Crisp technical slate)
- `--surface`: `#ffffff` (Clean white panel)
- `--surface-elevated`: `#f1f5f9` (Subtle elevated tray)
- `--foreground`: `#090d16` (High-density ink black)
- `--muted`: `#64748b` (Secondary annotations)
- `--primary`: `#0891b2` (Deep Orbital Cyan)
- `--secondary`: `#2563eb` (Signal Cobalt Blue)
- `--accent`: `#059669` (Deep Emerald)
- `--warning`: `#d97706` (Technical Amber)
- `--danger`: `#e11d48` (Vulnerability Crimson)
- `--border`: `#e2e8f0` (Crisp delimiter lines)

---

## 2. Typography Hierarchy

- **Display & Headings**: Geometric sans-serif system stack (`-apple-system`, `BlinkMacSystemFont`, `Segoe UI`, `Roboto`) optimized for legibility and structural hierarchy.
- **Code & Numerals**: Monospace font stack (`ui-monospace`, `SFMono-Regular`, `Menlo`, `Monaco`, `Consolas`, `monospace`). Monospace is used extensively for metadata tags, difficulty levels, metrics, and timestamps to reinforce engineering precision.

---

## 3. Component Primitives

- `AivoraBadge`: Monospaced, uppercase pill badges with pulsing telemetry dot indicators.
- `KnowledgeNode`: Card displaying category glow, link count, and difficulty pill.
- `ProgressRing`: SVG-based radial gauge illustrating curriculum percentage completion.
- `ConceptDepth`: 6-tabbed knowledge inspector (Foundation, Mechanism, Ecosystem, Application, Trade-Offs, Practice).
- `SourceTrace`: Audit component displaying primary paper and documentation provenance.
- `SearchModal`: Accessible dialog triggered via global `⌘K` / `Ctrl+K`.

---

## 4. Motion & Accessibility

- **Prefers-Reduced-Motion**: All CSS animations (`orbit-spin`, `fade-in`) respect `prefers-reduced-motion: reduce` by setting animation durations to 0ms.
- **Accessible Color Contrast**: All text pairings meet WCAG AA standards (contrast ratio >= 4.5:1).
- **Keyboard Navigation**: Focus indicators (`focus-visible`) styled with `--primary` 2px outline and 2px offset. Skip-to-content links provided at page root.
