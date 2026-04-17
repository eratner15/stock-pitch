# Quality Gate — Phase 3.7 (Pre-Deploy)

**Insert between Phase 3 (Build Pages) and Phase 4 (Deploy) in `SKILL.md`.**

The skill is good at generating content. It is bad at catching its own errors. The v1.1 META build shipped with three classes of failure that only surfaced after an independent review:

1. **Dimensional bugs** — `PT * 1000` produced six-figure price targets. `/1000` on buyback flow undercounted share repurchases 1000x. Both compile and deploy; neither throws.
2. **Orphan sliders** — a Reality Labs Op Loss slider appeared in the UI, but the ID was never referenced in `computeScenario()`. The pillar was ornamental.
3. **Soft-consensus variant perception** — three "variant" pillars were paraphrases of published JPM / Morgan Stanley / Jefferies notes. Not variant; just consensus dressed up.

This document defines five pre-deploy gates that catch each class. Every gate is mechanical and takes under 2 minutes. Run all five before Phase 4.

---

## Gate 1 — Dimensional Analysis

**What it catches:** Unit-conversion bugs in the model JS (`*1000`, `/1000`, dollar-vs-thousand-dollar, billion-vs-million, percent-vs-decimal).

**Procedure:**

```
1. Read the `computeScenario()` return block.
2. For each field ending in `Pt` (price target): trace one preset through the full math.
   - Equity ($B) / Shares (B) = $ per share. No multiplier.
   - If the output before display is > $5,000 or < $50, there is almost certainly a unit bug.
3. For each share-count mutation: $ buyback / $ price = B shares. No /1000.
4. Spot-check the last actual fiscal year's computed outputs against reported actuals:
   - FY25 computed FCF within 5% of reported FCF (Meta: $43.6B)
   - FY25 computed EPS within 5% of reported EPS (Meta: $23.49)
   - FY25 computed op margin within 50bps of reported (Meta: 41.4%)
5. If any spot-check fails, the FCF formula or margin assumption is wrong. Do not proceed.
```

**Why it matters:** A DCF that displays $644,000 per share on a $674 stock is obviously wrong to a human. It was not obviously wrong to the compiler. The gate is a human-intelligible canary.

---

## Gate 2 — Slider-Wiring Audit

**What it catches:** Sliders that appear in the UI but are not wired to the compute function. Scenarios where changing a slider produces zero downstream change.

**Procedure:**

```
1. grep -oE 'id="s[0-9]+"' meta-model.ts → list of slider IDs in HTML
2. grep -oE 'S\.s[0-9]+' meta-model.ts → list of slider IDs referenced in compute
3. Symmetric difference = orphan sliders. Must be zero.
4. For each slider, change the value in a preset by ±20% and re-run update().
   - DCF PT, EV/EBITDA PT, or at least one bridge-table row MUST change.
   - If nothing changes, the slider is orphan even if referenced (e.g., passed through but multiplied by zero).
```

**Why it matters:** An orphan slider misleads both the analyst and the reader. It claims the thesis has a lever; it doesn't.

---

## Gate 3 — Preset Monotonicity

**What it catches:** Preset assumptions that don't produce the expected scenario ordering (Bull > Base > Street > Bear in upside).

**Procedure:**

```
1. Call computeScenario() four times, once per preset.
2. For each output field (dcfPt, evPt, blend, eps27, fcf28):
   - bull.out > base.out > street.out > bear.out
   - If any ordering is violated, the preset assumptions are internally inconsistent.
3. Bull blended PT should be within 1.6x of Bear (typical institutional range); if wider, one preset is extreme.
```

**Why it matters:** A model where the Bear preset produces a higher PT than the Base preset is broken in a way the UI doesn't surface. Readers trust the preset labels.

---

## Gate 4 — Counter-Consensus Requirement

**What it catches:** Variant-perception pillars that restate consensus with slightly different adjectives.

**Procedure — for each pillar in the memo:**

```
1. Name the specific sell-side view being contradicted.
   → "Morgan Stanley's Dec-2025 note models FoA op margin compressing 300bps by FY27"
   → Not: "the Street thinks AI capex is bad"

2. State the magnitude delta with a dollar figure.
   → "LCS models FoA margin +200bps by FY27, a 500bps delta worth $40-55/share"
   → Not: "we think the Street is too pessimistic"

3. State the resolution date — a specific earnings print or event window.
   → "Test: FY26 Q4 FoA margin prints >55.5% (late Jan 2027)"
   → Not: "this plays out over the next few years"

If any pillar can't satisfy all three, it is not variant. Rewrite or remove.
```

**Why it matters:** A variant perception that can't be falsified in a known window is not a thesis. It's a mood.

---

## Gate 5 — Memo ⇌ Model Reconciliation

**What it catches:** Financial trajectory tables in the memo that do not match the model's base-case outputs. This is the single most common "drift" failure across skill v1.x builds.

**Procedure:**

```
1. Run computeScenario(PRESETS.base) once; capture the FY26/27/28 trajectory.
2. Open the memo's "Financial Trajectory" table.
3. For each cell (revenue, op income, op margin, EPS, FCF, capex):
   - Memo value must be within 2% of the base-case computed value.
   - If further off, the memo was hand-typed against an earlier model version. Update.
4. Preferred: generate the memo table *from* the model at build time, not in parallel.
```

**Why it matters:** If the memo says FY28 EPS is $40 and the model computes $54, one of them is misleading the reader. The memo is almost always the stale one.

---

## Bonus Gate (optional, high-yield) — Second-Opinion Review

**What it catches:** Everything the first five gates don't.

**Procedure:**

```
1. Before Phase 4 deploy, run `/codex:rescue` against the model file with a short prompt:
   "Independent review: math bugs, orphan sliders, narrative-model drift, hallucinated analyst names.
    Report under 500 words, bulleted by category, no fixes applied."
2. Time budget: 3-5 minutes.
3. If any [CONFIRMED] finding in Codex's output is critical-severity, block the deploy.
```

**Why it matters:** On the META v1.1 build, the first five gates (had they existed) would have caught Gates 1-3 issues. The dimensional `*1000` bug was ultimately found by Codex running a first-principles trace. Running the second-opinion gate at roughly the cost of one chat exchange is the highest-yield addition in this document.

---

## Checklist (Copy into the Phase 3.7 Todo List)

- [ ] Gate 1: Dimensional analysis — DCF/EV PTs in $50-$5000 range, FY25 spot-checks within 5%
- [ ] Gate 2: Slider-wiring audit — HTML slider IDs ⊆ computeScenario references; ±20% preset perturbation produces downstream change
- [ ] Gate 3: Preset monotonicity — bull > base > street > bear on DCF/EV/EPS
- [ ] Gate 4: Counter-consensus requirement — each pillar names sell-side view, $ magnitude, resolution date
- [ ] Gate 5: Memo ⇌ model reconciliation — FY trajectory table cells within 2% of base-case outputs
- [ ] Bonus: `/codex:rescue` second-opinion review — under 500 words, block on critical findings

---

## Skill-Level Implementation Notes

These gates become first-class Phase 3.7 requirements in `SKILL.md`. They are **mechanical**, **testable**, and **under 10 minutes of total compute** when automated. Prefer automation over discipline: a reviewer who has to remember to check five things will forget at least two.

The skill should ship with a minimal `quality-gate.sh` or inline JS snippet that verifies Gates 1-3 by introspection of the generated file. Gates 4-5 remain human-judgment calls for now; Gate 6 delegates to Codex.
