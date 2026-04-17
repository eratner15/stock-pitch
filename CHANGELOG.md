# Changelog

All notable changes to the `stock-pitch` plugin will be documented in this file.

## [1.2.0] — 2026-04-17

### Added

- **Phase 3.7 Quality Gate** (`references/quality-gate.md`) — five mechanical
  pre-deploy checks that catch dimensional bugs, orphan sliders, preset
  ordering violations, soft-consensus pillars, and memo-model drift. All five
  gates under 10 minutes total. Bonus sixth gate delegates to `/codex:rescue`
  for independent math review.
- **Counter-consensus requirement** in Phase 2F — each variant-perception
  pillar must name the specific sell-side view contradicted, the $ magnitude
  delta, and the resolution date. Falsifiable-in-a-known-window test.
- **Anti-fabrication on analyst names** — individual analyst PTs must be
  WebSearch-verified within 90 days or marked `~approximate latest published`.
  Aggregates can be sourced from StockAnalysis/MarketBeat/Public.com.

### Retrospective — META v1.1 Build

Built Meta Platforms portal April 16, 2026. Shipped with three classes of
latent failure that drove the v1.2 gate additions:

- Dimensional bug (`PT * 1000`) produced six-figure PTs. Gate 1 now catches.
- Orphan slider (Reality Labs Op Loss wired in UI, not in `computeScenario`).
  Gate 2 now catches.
- Three "variant" pillars were paraphrases of published JPM/MS/Jefferies
  notes. Gate 4 now enforces counter-consensus.

All caught by `/codex:rescue` post-deploy (3-min review). Bonus gate makes
this a standard part of the workflow.

## [1.1.0] — 2026-04-14

### Added

- **Page 6: Questions for Management** — 20-question diligence toolkit with expand/collapse interaction, category-based organization, priority tagging (High / Medium / Standard), and rationale + red-flag-answer pairs for every question. Print-optimized CSS auto-expands all questions for physical meeting prep.
- **Probability-weighted expected value panel** — interactive model now includes 4 probability sliders (Bull / Base / Street / Bear) with a live-computed expected-value PT table. Helps triangulate between point-estimate scenarios.
- **URL-encoded scenario sharing** — "Share This Scenario" button on model pages encodes all slider state + probability weights to a base64 URL hash. Recipients open the model at the exact scenario.
- **PDF export buttons** — one-click `window.print()` triggers on memo, model, and questions pages. All three have optimized print CSS.
- Updated reference implementations (BX and KMB) with all v1.1 features
- Updated SKILL.md, page-structures.md, and model-templates.md with v1.1 documentation

## [1.0.0] — 2026-04-14

### Initial Release

- Core `stock-pitch` skill for Claude Code
- `/stock-pitch:stock-pitch` slash command
- Five-page portal architecture: index, memo, presentation, interactive model, consensus
- 13 sector patterns: M&A, alt asset manager, trucking, REIT, SaaS, financials, pharma, mega-cap tech, consumer, industrial, energy, music/media, default
- Anti-hallucination source attribution protocol (9 source tags)
- Interactive model with Bull/Base/Street/Bear presets, sensitivity heatmaps, keyboard shortcuts
- Full dark-mode support with localStorage persistence
- Accessibility: skip links, ARIA labels, semantic landmarks, keyboard nav
- Reference implementations: Blackstone (BX), Kimberly-Clark + Kenvue (KMB)
- Cloudflare Workers + Hono boilerplate scaffold
- Comprehensive references: design-system, page-structures, model-templates, sector-patterns, deployment
