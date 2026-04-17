# Claude Code Prompt — `stock-pitch` Iteration Loop: One Ticker at a Time

Paste everything below the divider into a fresh Claude Code session running from wherever you keep the `stock-pitch` plugin cloned. Suggested path:

```bash
cd ~/stock-pitch
# or wherever the plugin lives after: gh repo clone eratner15/stock-pitch
```

---

# Mission

Skip the rewrite. Skip the alpha engine. Skip the autoresearch harness. We're not ready for any of that.

Instead: pick **one ticker**, run the existing v1.1 skill on it, inspect the output against a short rubric, write down what we learned, and decide whether to fix the skill or run the next ticker. Do that 5 times. Then step back.

The goal of this first loop is not to ship product. It is to **learn what's actually broken** in the current skill by looking at real output on real tickers, not by pre-writing specs about what might be broken. After 5 tickers of honest inspection, we'll know — from evidence, not from planning — where to invest the next round of work.

# Why This Scope

A few things argue for starting small:

- The skill already works. BX and KMB prove it. We don't know yet whether it breaks in novel ways on a third, fourth, fifth ticker. If we rewrite first, we rewrite for imagined problems.
- Opus 4.7's best-use is generating the pitch itself, not rewriting the meta-skill. Let's put the model on the actual job first.
- Every ticker we ship becomes either a new worked example in `examples/` or a feedback record in `pitches/`. Both are fuel for the larger system later.
- Evan's time is the binding constraint. A 4-hour loop that produces one inspectable pitch and three concrete notes is worth more than a 40-hour rewrite producing a polished skill that hasn't been tested on anything new.

# The Loop — 5 Iterations

```
For ticker in [one at a time, Evan picks]:
  1. Pick the ticker. Write a one-paragraph prior (what you already believe).
  2. Run the skill. Produce the 6-page portal.
  3. Inspect against the rubric. Do not skim — sit with it for 30 minutes.
  4. Write feedback.md capturing: what worked, what broke, what surprised.
  5. Decide: ship as worked example, or add to gap list, or both.
  6. After ticker #5, step back and synthesize.
```

No tooling beyond a folder and a markdown file. The loop is the point.

# Phase 0 — Setup (10 minutes)

Create the tracking structure:

```bash
mkdir -p pitches
cat > pitches/README.md << 'EOF'
# Pitch Inspection Log

One folder per ticker. Each folder contains:
- `prior.md` — what I believed before running the skill
- `portal/` — the generated 6 pages (or a link to the deployed URL)
- `pitch-output.json` — optional, from v1.2 onward
- `feedback.md` — what worked, what broke, what surprised
- `decision.md` — ship as example? add to gap list? both?

After every 5 tickers, synthesize patterns in `pitches/SYNTHESIS-{date}.md`.
EOF

mkdir -p pitches/_gaps
touch pitches/_gaps/skill-issues.md
touch pitches/_gaps/recurring-failures.md
touch pitches/_gaps/sector-coverage.md

git add pitches/
git commit -m "Setup: pitch inspection log structure"
```

`_gaps/` is the aggregate signal. Every time a ticker inspection surfaces a problem, it goes in `_gaps/skill-issues.md` with a ticker reference. After 5 tickers, we read `_gaps/` and see which problems are one-offs vs. structural.

# Phase 1 — Pick Ticker #1

**Choose a ticker you have a strong prior on.** This is important. Inspection only works if you can feel divergence between the skill's output and what you already believe. If the ticker is a coin-flip in your head, you can't judge the pitch.

Good candidates for ticker #1 from Evan's coverage:
- **META** — big-cap tech, in active coverage, you have a clear view
- **RRX** — industrial conglomerate, SOTP story, covered deeply
- **UMG** — music/media, subscription model, covered
- **APO** — alt-mgr peer to BX (so the sector template already exists; tests reuse)
- **PGR** — insurance, *not* covered in any existing example; tests a cold-start sector

My recommendation: **APO** first. It exercises the alt-mgr template that BX validates, which de-risks the skill machinery. If APO comes out weak, it's a skill problem (not a sector-novelty problem) and we know the fix is local. If APO comes out strong, we've confirmed the template transfers and we can move to a harder ticker (PGR) for #2.

Write `pitches/APO/prior.md`:

```markdown
# APO — Prior (before running skill)

**Thesis I'd write from scratch (~200 words):**
[Your own take. What's the setup? Bull/base/bear PT? What do you think the market is missing?]

**Numbers I think I know:**
- Current price: $___
- Market cap: $___B
- FY25 DE per share: $___
- FY25 FRE per share: $___
- AUM: $___B
- My base-case PT 12mo: $___

**What I expect the skill to get right:**
- [e.g., FRE/DE algorithm — validated on BX]
- [e.g., perpetual-capital growth frame]

**What I expect the skill might get wrong:**
- [e.g., APO's rent-to-retirement (ATH) holdings — unique structure]
- [e.g., underweight on insurance liabilities complexity vs. BX]
- [e.g., peer comp might miss that APO trades as insurance company, not alt-mgr]

**What I'd consider "better than my prior":**
- [e.g., find a specific segment-level datapoint I missed]
- [e.g., reframe the Athene economics in a way I haven't thought about]
```

The `prior.md` is the baseline. Without it you'll anchor on the skill's output and convince yourself it's fine.

# Phase 2 — Run the Skill on Ticker #1

Execute the slash command:

```
/stock-pitch:stock-pitch APO
```

Let it run. Expect 5-10 minutes, tool calls to EDGAR, web search, and so on. When complete, you should have:
- 6 HTML pages at `/research/apo/*` (or wherever the boilerplate routes)
- Deployed or local-served so they're viewable in a browser

Copy the generated HTML into `pitches/APO/portal/`:

```bash
mkdir -p pitches/APO/portal
# If deployed:
for page in index memo presentation model consensus questions; do
  curl -s "https://cafecito-ai.com/lcs/apo/${page}.html" > "pitches/APO/portal/${page}.html"
done
# If local, just cp from wherever it was built.
```

Commit the raw output before you inspect. This creates the immutable before-state:

```bash
git add pitches/APO/
git commit -m "APO: raw skill output (ticker #1)"
```

# Phase 3 — Inspect Against the Rubric (30-60 minutes)

This is the part that actually matters. Open all 6 pages in a browser. Read them like you'd read sell-side research you were about to act on. Use this rubric, scoring each dimension 1-5:

## The Rubric

| Dimension | 1 — Broken | 3 — Acceptable | 5 — Better than my prior |
|---|---|---|---|
| **Thesis specificity** | Generic "quality compounder" prose | Specific but uncontroversial | Has a genuine variant perception, not just consensus dressed up |
| **Source discipline** | Numbers without tags, or tagged but wrong | Tagged, verifiable, no hallucinations | Plus: tags connect to specific 10-K line items I'd cite myself |
| **Sector fit** | Wrong model template applied | Right template, but generic | Template customized to this company's specific structure (e.g., APO's Athene unique from BX) |
| **Numbers vs. my mental model** | Contradicts what I know; or vague enough I can't tell | Matches; doesn't teach me anything | Finds a sourced datapoint that updates my prior |
| **Memo voice** | AI-slop giveaways, bland prose | Institutional register, reads smoothly | Matches or exceeds BX/KMB reference memos |
| **Model usefulness** | Sliders disconnected from real drivers; won't load | Functional; presets reasonable | I'd actually open this in a meeting to stress-test scenarios |
| **Diligence questions** | Generic / surface-level | Specific to the sector | Would sharpen a real management meeting |
| **What I'd cut** | >30% is filler | 10-20% filler | <10% filler; everything earns its line |

An honest inspection takes 30 minutes minimum. If you score everything 3 without thinking, the inspection didn't happen.

## Feedback Template

Write `pitches/APO/feedback.md`:

```markdown
# APO — Feedback (after inspection)

## Rubric Scores
| Dimension | Score | Note |
|---|---|---|
| Thesis specificity | 3 | [one sentence why] |
| Source discipline | 5 | [one sentence why] |
| Sector fit | 2 | [one sentence why] |
| Numbers vs. prior | 3 | [one sentence why] |
| Memo voice | 4 | [one sentence why] |
| Model usefulness | 4 | [one sentence why] |
| Diligence questions | 3 | [one sentence why] |
| Filler rate | 3 | [~20% filler, mostly in the consensus page] |

## What Worked
- [Concrete observation. Quote from the memo or a specific datapoint.]
- [Another.]
- [Another.]

## What Broke
- [Concrete failure. Quote or page reference. Why is this wrong.]
- [Another.]
- [Another.]

## What Surprised Me
- [Something the skill produced that you didn't expect — could be positive or negative.]

## Compared to My Prior
- The skill [agreed with / challenged / missed] my thesis that [X].
- The skill's PT of $Y vs. my prior PT of $Z. Delta driven by: [specific assumption difference].
- [Did the skill teach me something? If yes, what?]

## Decision
- [ ] Ship as worked example in `examples/apo/` — APO is clean enough to distribute.
- [ ] Add to gap list — [which specific issues go to which gap file].
- [ ] Regenerate with a targeted prompt fix first — [describe the fix].
```

After writing feedback, update the gap files:

```bash
# In _gaps/skill-issues.md, append a row:
# | Ticker | Issue | Severity | Proposed fix |
# | APO    | Sector template doesn't handle insurance float in alt-mgr context | M | Add insurance-adjusted FRE methodology to sector-patterns.md |

# In _gaps/sector-coverage.md:
# | Sector | Examples | Status |
# | alt_mgr | BX, APO (if shipped) | OK |
# | ... |
```

Commit:

```bash
git add pitches/APO/
git add pitches/_gaps/
git commit -m "APO: inspection complete. Score avg 3.4/5. 2 skill issues, 1 candidate for example."
```

# Phase 4 — Decision: Fix or Next Ticker

After ticker #1 is inspected, you have three paths:

1. **Ship + next.** APO scored 3.5+/5 across the board, no major breaks. Ship it as `examples/apo/` (v1.2-to-be), commit, move to ticker #2.
2. **Fix + rerun.** APO exposed a specific skill bug (e.g., Athene's insurance float misclassified). Fix the skill locally (patch a reference file or tighten an instruction), rerun APO, re-inspect. Cap this at **one** fix-and-rerun loop per ticker — if it's still broken after one fix, move on and add the issue to `_gaps/` for later.
3. **Skip + next.** APO is broken in a way that's not worth fixing right now (e.g., the entire alt-mgr template needs rework). Mark as "parked," add the issue to `_gaps/recurring-failures.md`, move to ticker #2.

The rule: **at most one fix-and-rerun per ticker.** If we start compounding fixes on one ticker we lose the breadth the loop is designed to give us.

# Phase 5 — Repeat for Tickers #2-5

Pick the next ticker based on what you learned from ticker #1. Suggested progression:

- **If #1 went well (APO shipped):** push to a new sector. Try **PGR** (insurance — no existing template) or **META** (big-cap tech, tests whether the skill handles multi-segment mega-caps).
- **If #1 had sector-specific issues:** try another alt-mgr (**OWL** or **APO** if #1 was a different one) to see if the issue is APO-specific or template-specific.
- **If #1 had voice/format issues:** try any ticker — those problems will repeat regardless of sector.

After each run, the same five steps: prior, run, portal, feedback, decision. Each loop takes ~2 hours including the skill runtime. Five tickers = ~10 hours of inspection work, not counting skill compute time.

Recommended ticker progression for the first 5, if no overriding preference emerges:

| # | Ticker | Sector | What it tests |
|---|---|---|---|
| 1 | APO | alt_mgr | Template transfers from BX to sibling |
| 2 | META | big_tech | Multi-segment mega-cap; first real stress test |
| 3 | PGR | insurance | Cold-start sector (no example yet) |
| 4 | RRX | industrial_conglom | SOTP with multiple segments; stress-tests SOTP logic |
| 5 | UMG | music_media | Subscription model; stress-tests non-US listing |

Feel free to swap any of these for something else on Evan's coverage list. The principle is: cover 3+ sectors, include at least one cold-start, include at least one high-confidence prior ticker.

# Phase 6 — Synthesis After Ticker #5

This is the payoff. After 5 inspections, write `pitches/SYNTHESIS-{YYYY-MM-DD}.md`:

```markdown
# Synthesis — After 5 Inspections

## Rubric Score Averages
| Dimension | APO | META | PGR | RRX | UMG | Avg | Trend |
|---|---|---|---|---|---|---|---|
| Thesis specificity | 3 | 4 | 2 | 3 | 3 | 3.0 | Flat |
| Source discipline | 5 | 5 | 4 | 5 | 4 | 4.6 | Strong |
| Sector fit | 2 | 4 | 1 | 3 | 2 | 2.4 | Weak — sector templates aren't covering enough |
| ...

## Recurring Issues (appear in 3+ tickers)
1. [Issue] — appeared in APO, PGR, UMG. Root cause: [X]. Fix: [Y].
2. [Issue] — appeared in all 5. Root cause: [X]. Fix: [Y].

## One-Off Issues (specific to one ticker)
- APO: [issue]
- PGR: [issue]
- RRX: [issue]

## Sector Coverage Report
- alt_mgr: BX + APO shipped → solid
- big_tech: META candidate → needs polish
- insurance: no template existed → cold-start failed, need to build sector-patterns.md insurance section
- ... (etc.)

## Decision for Next Phase
Based on 5 inspections, the highest-leverage next work is:
- [ ] Retune sector-patterns.md for the 3 sectors that scored <3
- [ ] Rewrite SKILL.md voice (if voice was recurring issue)
- [ ] Add pitch.json contract (if tracking/scoring is now the bottleneck)
- [ ] Build the Alpha Engine (if we now have 5+ high-quality pitches and need orchestration)
- [ ] Keep iterating ticker-by-ticker (if no structural pattern yet, more data needed)

The decision should be driven by the evidence in the rubric scores and the gap files, not by the pre-existing roadmap.
```

The synthesis is what tells us whether to do the v1.2 retune, or jump straight to the Alpha Engine, or just keep running tickers. Before the 5 inspections, we're guessing. After, we have data.

# Non-Negotiables

- **No parallel tickers.** One at a time. The learning compound only works if each ticker informs the next.
- **No rewriting the skill mid-loop.** At most one targeted patch per ticker if something's obviously broken. Real skill rework waits for synthesis.
- **No skipping the prior.md.** Without a pre-committed prior, inspection becomes confirmation bias.
- **No skimming inspections.** 30 minutes minimum per ticker. Set a timer.
- **Feedback before next ticker.** `feedback.md` committed before starting ticker N+1.
- **Honest scoring.** If the skill produces a 3/5, write 3. The whole point is to find weak spots. A uniformly-4 score sheet means the inspection failed, not that the skill is great.

# Budget

- Skill compute: ~$1.50 per ticker × 5 = $7.50
- (Plus one fix-and-rerun on maybe 2 tickers: another ~$3)
- Total: ~$10 of Opus 4.7 time
- Human time: ~10 hours spread across however many sittings you want

This is the single cheapest experiment we'll run in the whole alpha-engine build. If the inspections reveal that the skill needs major work before it's worth scaling, we save the $75+ we'd have spent on a premature 50-universe batch. If the inspections reveal the skill is already strong enough, we save the month we'd have spent on a retune that wasn't needed.

# What I'd Do If I Were You

1. Block 2 hours today for ticker #1 (APO). That includes the prior write-up, the skill run, and the full 30-min inspection.
2. Commit the feedback before the end of today. Don't let it sit un-reviewed overnight; you'll lose the signal.
3. Do the next four over the following 1-2 weeks, one per sitting. Don't batch them — the compounding comes from digesting each one before the next.
4. Force the synthesis on a calendar date — "Saturday afternoon after ticker #5."
5. Share the synthesis with me before choosing the next roadmap step. That's the point where "run more tickers" vs. "retune the skill" vs. "build the alpha engine" becomes an evidence-based call.

# How to Work With Me

This prompt is not a Claude Code build task in the way the previous ones were. It's a **human-in-the-loop research protocol**. Claude Code's role here is limited:

- Generate the portal (`/stock-pitch:stock-pitch APO`).
- Help capture the inspection output into the markdown files.
- Maintain the `_gaps/` aggregates.
- At ticker #5, help compile the synthesis from the feedback files.

The judgment work — scoring, prior-writing, decision-making on fix-vs-next — is Evan's. Claude doesn't score the pitch. That defeats the loop.

**Start with Phase 0 (setup). Then Phase 1 (write APO prior). Then run the skill.** That's it for day one.
