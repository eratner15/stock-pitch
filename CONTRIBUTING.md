# Contributing to stock-pitch

This skill is **AI-maintained with human supervision**. You submit improvements; the maintainer agent reviews and merges them. Evan (the human maintainer) only reviews escalations.

If you've never contributed to an open-source project before, this is the friendliest possible entry point — the `/stock-pitch:contribute` slash command does the git work for you.

---

## Who can contribute

Anyone on the LCS research team with a GitHub account. You'll need to be added as a collaborator to `github.com/eratner15/stock-pitch` — ask Evan once, then you're in for every future contribution.

You do **not** need:
- Deep git knowledge (the slash command handles branches and PRs for you)
- Cloudflare Worker access (contributions happen in your local clone)
- Claude Code to be configured in any special way beyond the plugin install

## What a contribution looks like

A contribution is **one focused improvement** to the skill itself, not a new portal. Examples of good contributions:

- A new sector pattern (e.g., "add REIT-specific cap-rate framework")
- A new reusable page section (e.g., "add earnings-reaction panel to model template")
- A sharpened memo structure for a specific situation (e.g., "merger-situation memo format")
- A quality-gate improvement (e.g., "add a gate that checks for orphan tooltips")
- An example portal update (bump data, fix a stale number)
- A reference doc clarification (e.g., update `sector-patterns.md` with a new nuance you discovered)

**Not** contributions:
- A new ticker portal you built for yourself (that's just a portal — use `/stock-pitch:submit` when we ship that)
- A hotfix to a broken example that only affects your local environment
- Personal preference changes that aren't about the skill's output quality

## The flow

### 1. Iterate locally

```bash
cd path/to/your/clone-of-stock-pitch
# Edit SKILL.md, references/, examples/, whatever makes sense for your improvement
```

Test it by running `/stock-pitch:stock-pitch TICKER` on a real ticker and eyeballing the output. If the output is the new behavior you wanted, you're ready to contribute.

### 2. Run the local quality gate (if you touched a model file)

```bash
./scripts/quality-gate.sh path/to/your-edited-model.ts
```

Gates 1-3 are mechanical — they check for unit bugs, orphan sliders, and preset monotonicity. They pass in seconds. If any fail, fix before contributing.

### 3. Submit via slash command

In a Claude Code session inside the plugin directory:

```
/stock-pitch:contribute
```

Optionally: `/stock-pitch:contribute "earnings reaction panel"` — a short title for your change.

Claude will:
1. Read your local diff
2. Draft a structured PR body (rationale, before/after, tested-against tickers, risk level)
3. Create a branch `contrib/your-handle/short-title`
4. Open the PR with the `auto-review` label

### 4. The maintainer agent takes over

Within 2-5 minutes, three CI checks run:

| Check | What it does | Failure means |
|-------|--------------|---------------|
| **Quality Gate** | Re-runs `scripts/quality-gate.sh` on any changed model files | Dimensional bug, orphan slider, or preset ordering violation |
| **Philosophy Check** | Claude API reviews the diff against skill principles | Change doesn't align with zero-hallucination / sector-aware / falsifiable-variant-perception norms |
| **Auto-Merge** | Squash-merges when both above are green | — |

If all checks pass → your PR **auto-merges**, version bumps, changelog updates, release tagged.

If any check fails → PR auto-labels `needs-review`, Evan gets notified, manual review kicks in. You'll see the philosophy check's memo as a comment on the PR — it explains what flagged.

### 5. Your change propagates

After the release is tagged, your teammates pick up the new version on their next `/plugin update` (Claude Code) or next skill invocation (claude.ai). No coordination required.

---

## Labels and escalation

| Label | Meaning | Who applies |
|-------|---------|-------------|
| `auto-review` | PR opted into auto-merge flow | Automatic (set by `/stock-pitch:contribute`) |
| `additive` | New feature, new pattern, new option — low risk | Automatic if the slash command infers additive |
| `behavior-change` | Modifies existing output for existing users | Automatic if the diff touches existing exports or API surfaces |
| `needs-review` | Force human review, block auto-merge | Humans (Evan, or the contributor if uncertain) |
| `breaking` | Major-version bump required | Humans |

### When to self-apply `needs-review`

- The change is large (>100 lines of diff)
- You're touching `SKILL.md` in a way that affects the whole workflow
- You're not sure if your change respects zero-hallucination / falsifiability / sector-fit
- It's your first contribution and you want Evan's eyes as a safety net (after 3-5 successful merges, you can stop doing this)

---

## The trust-by-default model

**We trust you by default.** If you followed the flow and the checks passed, your change ships. You don't need Evan's approval for additive improvements that pass the gates.

Three safety rails keep this honest:

1. **Rollback is one click.** If an auto-merged change breaks downstream portals, Evan reverts the merge commit in the GitHub UI and everyone's skill version drops back to the prior tag on next invocation.
2. **The philosophy check is opinionated.** It reads the skill's principles document and refuses to merge changes that read as inconsistent with them (e.g., introducing a feature that produces un-tagged numbers).
3. **The maintainer agent is conservative on behavior changes.** Additive changes auto-merge; modifying-existing-behavior changes auto-label `needs-review` and wait for Evan.

---

## Synthesis — when two people propose similar improvements

The maintainer agent checks for recent overlapping PRs during its review. If Mary submits "add earnings-reaction panel" on Tuesday and Joe submits "add earnings-reaction chart with hover" on Thursday, the agent notices the overlap. It merges the first one, then on the second PR comments:

> "This overlaps with #47 (merged Tuesday). Synthesis proposal: [combined approach]. Merging this PR as a refinement on top of #47 credits both contributors."

Both authors get credit in the changelog. No one gets blocked waiting for a conflict to resolve manually.

---

## What to do if the auto-merge goes wrong

If your change merges but causes problems (breaks a portal, produces hallucinations, fails a gate in retrospect):

1. Open an issue titled "Rollback #<PR number>: <brief reason>" and tag `@eratner15`
2. Evan reverts via the GitHub UI (one click on the merged PR → Revert button)
3. The release workflow bumps the version back down
4. All colleagues pick up the rollback on next skill invocation

No shame. Everyone breaks things occasionally; the system is designed for cheap recovery.

---

## Questions?

- Tag `@eratner15` in any issue
- Or ping in the firm's research Slack channel
- Or message Evan directly

The worst contribution is one you didn't submit because you weren't sure if it was "big enough." **Small contributions compound.** Submit.
