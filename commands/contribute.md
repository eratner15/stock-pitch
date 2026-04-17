---
description: Submit a local skill improvement as a GitHub PR — auto-reviewed, auto-merged when checks pass
argument-hint: [optional: short title of the change, e.g. "earnings reaction panel"]
---

# /stock-pitch:contribute — submit a skill improvement

You are helping the user submit a local skill improvement to the canonical `stock-pitch` repo for auto-review and auto-merge.

The user has the plugin cloned at a local path. They have made edits to one or more of:
- `skills/stock-pitch/SKILL.md`
- `skills/stock-pitch/references/*.md`
- `skills/stock-pitch/references/templates/**`
- `examples/**` (new reference portal or pattern)
- `scripts/**`
- `boilerplate/**`

They want those edits to flow upstream so the whole team benefits.

## What you do

### 1. Verify setup

```bash
cd $PLUGIN_DIR  # wherever the plugin is cloned
git status --short
gh auth status
```

- If the working tree is clean, tell the user there's nothing to contribute and stop.
- If `gh` is not authenticated, instruct the user to run `gh auth login` and retry.

### 2. Draft the contribution

Read the diff: `git diff --stat && git diff`.

Based on the diff, draft:

- **Title** — one-line imperative ("Add earnings-reaction panel to model page"). Use the argument if the user provided one, otherwise infer from the diff.
- **Rationale** — 2-3 sentences explaining the motivation. What problem does this improvement solve? What portal limitation surfaced this need? What colleagues benefit?
- **Before/After** — if the change affects visible output (page structure, memo content, model UI), describe what changes in user-facing terms. If it's a reference doc or script, describe the workflow impact.
- **Tested against** — which ticker(s) did the user run this on locally? Capture names.
- **Risk / scope** — is this additive (new feature, new pattern) or modifying (changes existing behavior)? If modifying, flag it — the auto-merge path is restricted for behavior-changes.

### 3. Run the quality gate locally first

If the diff touches any `*-model.ts`:

```bash
for f in $(git diff --name-only origin/main...HEAD | grep -E '\-model\.ts$'); do
  ./scripts/quality-gate.sh "$f"
done
```

Do not submit if Gates 1-3 fail. Walk the user through the failure and help fix before submission.

### 4. Create the branch + PR

```bash
BRANCH="contrib/$(whoami)/$(echo 'TITLE_SLUG' | tr '[:upper:] ' '[:lower:]-' | tr -cd 'a-z0-9-')"
git checkout -b "$BRANCH"
git add -A
git commit -m "contrib: <title>"
git push -u origin "$BRANCH"

gh pr create \
  --title "<title>" \
  --body "<structured body>" \
  --label auto-review \
  --label additive  # or 'behavior-change' if modifying
```

Structured PR body template:

```markdown
## Summary
<one-paragraph rationale>

## Before / After
<user-facing impact description>

## Tested against
- <ticker 1>
- <ticker 2>

## Quality gate
- [x] Gates 1-3 passed locally (scripts/quality-gate.sh)
- [ ] Test-build on META/BX/KMB (will run in CI)
- [ ] Philosophy check (will run in CI)

## Scope
- [x] Additive (new pattern, new section, new option)
- [ ] Behavior change (modifies existing output for existing users)

## Contributor
@<github handle>

---
*Submitted via `/stock-pitch:contribute` on <date>. Auto-review enabled — will merge when all checks pass. Label with `needs-review` to escalate.*
```

### 5. Report back

Give the user:
- PR URL
- Expected timeline: "Auto-merge runs when all 3 checks pass (quality-gate, philosophy-check, test-build). Typical turnaround: 2-5 minutes. You'll see the merged commit and the new skill version on the repo when done."
- Escalation path: "If a check fails, the PR is auto-labeled `needs-review` and Evan gets pinged. You can also manually label `needs-review` to force human review."

## Edge cases

### User has partial work in progress

If the working tree has a mix of intentional changes and accidental edits (stray debug prints, temporary comments), help the user separate — `git add -p` to stage only what they want submitted.

### User wants to submit multiple distinct improvements

One PR per improvement. Ask the user to commit and push the first, then stash/separate the second and repeat. Mixing unrelated changes in one PR defeats the auto-merge model (partial failures leave you stuck).

### User edits hit `SKILL.md` significantly

Flag it. Large SKILL.md edits affect every future invocation of the skill across the team. Recommend `needs-review` label for human eyes on these.

### User doesn't have write access to the repo

They'll need to fork first and submit from the fork. Check `gh repo view --json viewerPermission`. If they're not a collaborator, guide them to `gh repo fork eratner15/stock-pitch --clone=false`, then `git remote set-url origin <their-fork>` and retry.

## Non-goals

Do not:
- Force-push or rewrite history on their local branch
- Open PRs without first running the local quality gate (it's a waste of CI minutes if gates fail)
- Merge the PR yourself — that's the auto-merge workflow's job
- Commit secrets (.env files, API keys) — check the diff and warn if anything sensitive leaks

## Arguments

User provided: **$ARGUMENTS**
