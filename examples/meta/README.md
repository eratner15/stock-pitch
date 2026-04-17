# META — Meta Platforms, Inc.

Reference implementation of a **mega-cap tech / multi-segment** portal built with the `stock-pitch` skill v1.2. Use this as the canonical pattern when running on GOOGL, AMZN, MSFT, NVDA, or any other multi-segment mega-cap.

Live: [research.levincap.com/meta](https://research.levincap.com/meta)

## What This Example Demonstrates

### Narrative rigor

- **Three falsifiable variant-perception pillars** — each names a specific sell-side view contradicted, a $ per share delta, and a resolution date.
  - Pillar 1: MTIA → Nvidia displacement 35-40% by FY28 vs. Street 5-15% → $35-45/share, resolves Q3'26 earnings
  - Pillar 2: FoA op margin expands to 54-55% by FY28 vs. Street 50-52% compression → $40-55/share, resolves Q4'26 earnings
  - Pillar 3: WhatsApp paid messaging $8-10B by FY28 vs. Street $2-3B → $45-55/share, resolves Q4'26 FoA Other Rev run-rate
- **Geographic Lens** sidebar — non-obvious datapoint: US+CA generates 42% of FY25 revenue from 7.7% of DAP (5.5x concentration). Inverts the conventional US-vs-EU regulatory risk asymmetry.
- **Hedged management framing** — "management has guided similar FY25/FY26 losses and likely a peak" rather than stating "peak in 2026" as fact.

### Model rigor

- **Segment-level FoA / RL split** — s4 slider is FoA-only operating margin; s6 slider is FY28 Reality Labs operating loss. Both are wired into `computeScenario()`.
- **Correct FCF formula** — NI + D&A + SBC + WC − Capex. Matches Meta's observed FY25 conversion ($60.5B + $17B + $16B + $22B − $72B ≈ $43.6B actual).
- **Exit-multiple DCF terminal** — `FY30 EBITDA × exit multiple`, not Gordon Growth. Standard sell-side practice for high-capex tech where Gordon Growth structurally undershoots.
- **Probability-weighted scenarios as pure output** — each preset runs through `computeScenario()` to produce its PT; the user-assigned probabilities just weight the four computed PTs. No hardcoded scenario numbers.
- **Share count with correct buyback dimensional analysis** — `bbShares = S.s9 / BASE.price` ($B / $/sh = B shares), no stray `/1000`.

### Page craft

- **Memo SCQA with section-level Roman numerals** (I-VI), sidenotes, Merriweather serif body, CFO quote pull-out, and print-optimized CSS.
- **14-slide deck** with falsifiability table on the variant-perception slide (slide 4).
- **Consensus page** with softened "~approximate latest published" PT language — no hallucinated exact analyst numbers.
- **Model page** with keyboard shortcuts (1/2/3/4/R), URL-encoded scenario sharing, sensitivity heatmaps (ARPP × op margin, WACC × exit multiple), and probability-weighted expected PT row.
- **20 diligence questions** organized by Strategy / Capital Allocation / Competitive / Risk / Variant Perception, each with rationale and red-flag-answer.

## Using This Example

### To reference the pattern in a new build

If you're running the skill on a multi-segment mega-cap (GOOGL, AMZN, MSFT, NVDA, TSLA), point Claude at this example in your invocation:

```
/stock-pitch:stock-pitch GOOGL
# Claude will auto-detect the sector and apply the mega-cap-tech template.
# If the output diverges from this META pattern, request a retune:
# "Use examples/meta/ as the reference pattern for segment split and variant perception structure."
```

### To hand-lift the pattern

All six files are self-contained TypeScript modules that export an HTML template string. Copy any of them into your own `boilerplate/src/pages/`, rename the exports (`metaIndexHTML` → `yourtickerIndexHTML`), and wire routes in `boilerplate/src/index.ts`.

## Quality Gate Status

All five pre-deploy gates pass against `meta-model.ts` as of April 17, 2026:

| Gate | Status |
|------|--------|
| 1 — Dimensional analysis | ✓ PASS (PTs in $50-$5000 range, FY25 spot-checks within 5%) |
| 2 — Slider-wiring audit | ✓ PASS (all 12 HTML slider IDs referenced in `computeScenario`) |
| 3 — Preset monotonicity | ✓ PASS (bull > base > street > bear on all outputs) |
| 4 — Counter-consensus | ✓ PASS (all 3 pillars name sell-side view + $ magnitude + resolution date) |
| 5 — Memo ⇌ model reconciliation | ✓ PASS (FY23-28 table matches `computeScenario(PRESETS.base)`) |
| Bonus — Codex independent review | ✓ PASS (all critical-severity findings from the first pass have been fixed) |

## What To Watch If You Fork This

The META build taught three skill-level lessons that are now encoded in `skills/stock-pitch/references/quality-gate.md`:

1. **Units bugs compile silently.** The first META build had `PT = equity/shares * 1000`, which produced six-figure PTs on screen. The compiler didn't flag it; Codex did.
2. **Orphan sliders ship.** The initial model had a Reality Labs Op Loss slider in the UI that was never referenced in `computeScenario()`. The pillar was ornamental. The slider-wiring audit (Gate 2) catches this in grep.
3. **Soft-consensus pillars look like variant perception.** The first three pillars (ARPP accelerating / capex is moat / RL wind-down) were paraphrases of JPM, Morgan Stanley, and Jefferies notes under active coverage. Running Gate 4 mechanically — each pillar must name the specific Street view contradicted + $ stake + resolution date — forces honest variant perception.

All three classes were caught by `/codex:rescue` post-ship in ~3 minutes of compute. Running it before deploy is now documented as the Bonus Gate.
