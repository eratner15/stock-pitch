# Getting Started — stock-pitch

Zero to first deployed portal in about 15 minutes. No prior Cloudflare or Claude Code plugin experience required.

## Prerequisites

| Tool | Version | How to check |
|------|---------|--------------|
| Node.js | 20.x | `node -v` |
| npm | 10.x | `npm -v` |
| Claude Code | Latest | `claude --version` |
| Cloudflare account | Any tier | Free tier is fine |
| GitHub SSH or HTTPS access | — | to clone the repo |

If you don't have Node 20 and use `nvm`: `nvm install 20 && nvm use 20`.

---

## Step 1 — Clone the plugin (2 min)

```bash
# Pick any directory on your machine — this is your private workspace
cd ~
git clone git@github.com:eratner15/stock-pitch.git
cd stock-pitch
npm install --prefix boilerplate
```

The `--prefix boilerplate` installs the Cloudflare Worker dependencies (Hono, Wrangler, TypeScript). The plugin itself has no JS dependencies — it's all markdown skills.

---

## Step 2 — Install as a Claude Code plugin (1 min)

In a Claude Code session (any directory):

```
/plugin install /home/YOUR_USERNAME/stock-pitch
```

Replace the path with wherever you cloned it. Claude will register the `stock-pitch` skill and the `/stock-pitch:stock-pitch` slash command.

Verify installation:

```
/plugin list
```

You should see `stock-pitch` listed. If Claude Code doesn't recognize the `/plugin` commands, consult `claude --help` for the version-specific install command.

---

## Step 3 — Bootstrap your Cloudflare Worker (5 min)

```bash
cd boilerplate
../scripts/init.sh
```

The script will:

1. Check whether you're logged into Wrangler (`npx wrangler whoami`). If not, it opens a browser for OAuth login.
2. Prompt you for a worker name (default: `your-github-handle-research`).
3. Copy `wrangler.toml.example` to `wrangler.toml` and substitute your worker name.
4. Run a first deploy — you'll see a URL like `https://your-handle-research.your-subdomain.workers.dev`.
5. Print the URL and a "next steps" reminder.

Verify the deploy:

```bash
curl -s -o /dev/null -w "%{http_code}\n" https://YOUR_WORKER_URL/
# Expected: 200
```

The stub landing page says "Research Portal" and lists any tickers you've added. Empty on first deploy — that's expected.

---

## Step 4 — Generate your first portal (5-8 min)

In a Claude Code session inside the cloned repo:

```
/stock-pitch:stock-pitch META
```

Claude will:

1. Fetch SEC filings, earnings transcript, market data, consensus
2. Form a thesis with source-tagged numbers
3. Build 6 HTML pages (index, memo, deck, model, consensus, questions)
4. Run the Phase 3.7 Quality Gate against the generated model
5. Write the 6 TypeScript page files into `boilerplate/src/pages/meta-*.ts`
6. Wire routes in `boilerplate/src/index.ts`
7. Run `npx wrangler deploy` for you

When it finishes, the portal is live at:

```
https://YOUR_WORKER_URL/research/meta/
https://YOUR_WORKER_URL/research/meta/memo.html
https://YOUR_WORKER_URL/research/meta/presentation.html
https://YOUR_WORKER_URL/research/meta/model.html
https://YOUR_WORKER_URL/research/meta/consensus.html
https://YOUR_WORKER_URL/research/meta/questions.html
```

Total cost: about $1.50 of Claude Opus compute per ticker.

---

## Step 5 — Iterate

Once a portal is deployed, you can:

- **Re-run the skill on the same ticker** to get a fresh build (new market data, updated consensus).
- **Run on a different ticker**: `/stock-pitch:stock-pitch NVDA`.
- **Feed sell-side PDFs as context**: `/stock-pitch:stock-pitch NVDA /path/to/jpm-note.pdf`.
- **Hand-edit the generated TypeScript files** — they're yours. Tweak the thesis, swap charts, rewrite the memo. Re-deploy with `npx wrangler deploy`.

The quality gate runs before every deploy. If you hand-edit the model JS and break the `*1000` convention or add an orphan slider, the gate will flag it.

See `examples/meta/` for a complete reference build that demonstrates every feature — the testable variant-perception pillars, segment-level FoA/RL split, exit-multiple DCF, probability-weighted scenarios, and URL-encoded scenario sharing.

---

## Troubleshooting

### "Unable to authenticate" when running wrangler

```bash
unset CLOUDFLARE_API_TOKEN  # if a stale env var is set
npx wrangler login          # opens browser
```

### Node version mismatch

Cloudflare Workers deploy requires Node 20+ on the build machine. Check with `node -v`. Use `nvm use 20` if needed.

### The skill timed out during SEC fetches

SEC.gov occasionally rate-limits. Re-run the skill; it caches partial progress.

### Quality gate fails with "orphan slider s6"

The skill added a slider to the UI but didn't wire it to `computeScenario()`. Either wire it (see `references/model-templates.md`), or remove the slider. Do not deploy with failing gates.

### I want to use a custom domain, not workers.dev

Edit `wrangler.toml`, uncomment the `routes` section, point it at your zone. See `references/deployment.md` for zone-route setup details.

---

## What to read next

| Document | When to read |
|----------|--------------|
| `skills/stock-pitch/SKILL.md` | To understand the full workflow the skill runs |
| `skills/stock-pitch/references/quality-gate.md` | Before you ship anything |
| `skills/stock-pitch/references/sector-patterns.md` | When picking defaults for a non-obvious sector |
| `skills/stock-pitch/references/model-templates.md` | When the interactive model needs customization |
| `examples/meta/README.md` | When you want to see every feature used end-to-end |
| `CHANGELOG.md` | What changed between versions |

Questions? Ping Evan or file an issue against `eratner15/stock-pitch`.
