# stock-pitch

> Claude Code plugin for building institutional-quality equity research portals.

Turn a ticker symbol into a 5-page investment research portal — landing page, SCQA memo, interactive financial model, presentation deck, and consensus view — deployed as a Cloudflare Worker. AI-first research from primary sources (SEC filings, IR materials, live market data). Every number tagged to a verifiable source.

Built by [Levin Capital Strategies](https://github.com/eratner15) for Claude Code.

---

## What You Get

Each portal contains six interconnected pages at `/{basepath}/{ticker}/`:

| Page | Purpose |
|------|---------|
| **Index** | Landing page — dual price targets, 7-metric bar, 3 thesis pillars, earnings setup |
| **Memo** | 3,000-word SCQA investment memo with 8+ sidenotes, full source attribution, and PDF export |
| **Deck** | 14-slide institutional presentation with keyboard navigation |
| **Model** | Interactive model with Bull/Base/Street/Bear presets, sensitivity tables, keyboard shortcuts, probability-weighted expected value, and URL-encoded scenario sharing |
| **Consensus** | Street ratings, peer comp, forward estimates, management quotes, LCS variant view |
| **Questions** | 20 hand-crafted diligence probes for management meetings — with rationale and red-flag-answer markers for each |

The plugin is **sector-aware** — it detects the business model and applies the right analytical framework:

- **M&A situations** → accretion/dilution model with synergy phasing
- **Alt asset managers** → FRE/DE/AUM algorithm
- **Trucking** → operating ratio model
- **REITs** → NAV / cap rate model
- **SaaS** → ARR / NDR with Rule of 40
- **Financials** → NIM / ROE with book value
- **Pharma** → probability-adjusted pipeline NPV
- **Mega-cap tech** → multi-segment with DCF + EV/EBITDA cross-check
- plus 4 more sectors

See [`skills/stock-pitch/references/sector-patterns.md`](skills/stock-pitch/references/sector-patterns.md) for detailed specifications.

---

## Installation

**For LCS colleagues running on their own compute**, the end-to-end guide lives in **[`docs/GETTING_STARTED.md`](docs/GETTING_STARTED.md)** — zero to first deployed portal in ~15 minutes.

TL;DR:

```bash
git clone git@github.com:eratner15/stock-pitch.git
cd stock-pitch
npm install --prefix boilerplate
./scripts/init.sh          # prompts for worker name, deploys stub
```

Then in a Claude Code session:

```
/plugin install /absolute/path/to/stock-pitch
/stock-pitch:stock-pitch META
```

The skill fetches data, builds 6 pages, runs the Phase 3.7 Quality Gate, and deploys — all autonomously. Cost: ~$1.50 of Opus compute per ticker.

See `examples/meta/` for a complete reference build that demonstrates every v1.2 feature.

---

## Quick Start

### Build your first portal

```
/stock-pitch:stock-pitch BX
```

Claude will:
1. Fetch Blackstone's latest 10-K from SEC EDGAR
2. Pull Q4 2025 earnings, IR materials, consensus estimates
3. Detect the alt asset manager pattern → use FRE/DE/AUM model
4. Build 5 interconnected HTML pages
5. Deploy to your Cloudflare Worker
6. Verify all 5 pages return 200

The full build takes 5-10 minutes depending on data-gathering depth.

### Build with enrichment

```
/stock-pitch:stock-pitch KMB /path/to/barclays-report.pdf
```

When you provide sell-side PDFs, Claude extracts analyst estimates and price targets to cross-check the AI-generated thesis.

### Build with specific focus

```
Build a stock-pitch for KMB emphasizing the KVUE merger synergies
```

Claude detects the M&A context and switches to the accretion/dilution pattern with synergy phasing, combined P&L, and leverage bridge.

---

## Prerequisites

- **Claude Code** with an Anthropic API key or Pro plan
- **Node.js 20+**
- **Cloudflare account** (free tier works)
- **Domain** (optional — you can deploy to a `workers.dev` subdomain)

One-time setup for Cloudflare Workers:

```bash
npx wrangler login
```

---

## Reference Examples

Two complete reference implementations live in `examples/`:

### `examples/bx/` — Blackstone (Alt Asset Manager)

Demonstrates the FRE/DE/AUM template:
- Four-segment AUM build (Real Estate, PE, Credit, Multi-Asset)
- Management fee × FRE margin → FRE
- Net realizations → distributable earnings
- Perpetual-capital flywheel thesis
- Peer comp vs APO/KKR/ARES/OWL/TPG

[Live demo at cafecito-ai.com/lcs/bx/](https://cafecito-ai.com/lcs/bx/)

### `examples/kmb/` — Kimberly-Clark + Kenvue ($48.7B merger)

Demonstrates the M&A / accretion-dilution template:
- $3.50 cash + 0.14625 KMB per KVUE share consideration
- $2.1B run-rate synergies with front-loaded phasing
- Combined P&L through FY2029
- Leverage bridge and deleveraging timeline
- Sensitivity: synergy capture × debt cost → FY27 EPS

[Live demo at cafecito-ai.com/lcs/kmb/](https://cafecito-ai.com/lcs/kmb/)

Study these patterns before building a new portal.

---

## Boilerplate

The `boilerplate/` directory contains a starter Hono + Cloudflare Workers scaffold. Copy it into a new working directory:

```bash
cp -r stock-pitch/boilerplate ~/my-research-portal
cd ~/my-research-portal
npm install
cp wrangler.toml.example wrangler.toml
# Edit wrangler.toml with your domain / zone config
npx wrangler deploy
```

Then point Claude at it:

```
Build stock-pitch for AMZN in ~/my-research-portal
```

---

## Anti-Hallucination Protocol

Every financial figure in a generated portal carries one of these source tags:

| Tag | Meaning |
|-----|---------|
| `[10-K]` | SEC annual filing |
| `[10-Q]` | SEC quarterly filing |
| `[Transcript]` | Earnings call transcript |
| `[IR]` | Investor relations page |
| `[Market]` | Live market data |
| `[Consensus]` | Aggregated analyst estimates |
| `[Sell-Side]` | Named analyst report |
| `[Computed]` | Derived from sourced inputs |
| `[Estimated]` | AI estimate with methodology |

Historical financials **must** come from `[10-K]` or `[10-Q]`. Quotes **must** have speaker attribution. Forward estimates are always labeled as estimate vs consensus.

This is the audit trail. If a number can't be tagged, it doesn't go in.

---

## Project Structure

```
stock-pitch/
├── .claude-plugin/
│   └── plugin.json                    # Plugin manifest
├── commands/
│   └── stock-pitch.md                 # Slash command registration
├── skills/
│   └── stock-pitch/
│       ├── SKILL.md                   # Main skill instructions
│       └── references/
│           ├── design-system.md       # Design tokens, components, a11y
│           ├── page-structures.md     # Page anatomy for all 5 pages
│           ├── model-templates.md     # Interactive model architecture
│           ├── sector-patterns.md     # 13 sector-specific patterns
│           └── deployment.md          # Cloudflare Worker setup
├── boilerplate/                       # Starter Hono + Wrangler scaffold
│   ├── package.json
│   ├── wrangler.toml.example
│   ├── tsconfig.json
│   └── src/
│       ├── index.ts
│       ├── types.ts
│       └── pages/
│           └── ticker-index.ts
├── examples/                          # Reference implementations
│   ├── bx/                            # Blackstone — alt asset mgr pattern
│   └── kmb/                           # KMB + KVUE — M&A pattern
├── README.md
├── LICENSE
└── CHANGELOG.md
```

---

## How the Skill Chains Other Skills

When available, `stock-pitch` chains other financial-analysis skills as analytical engines:

- `/3-statements` — builds the 3-statement model
- `/dcf` — runs the DCF valuation
- `/comps` — generates the peer comp table
- `/competitive-analysis` — produces competitive landscape
- `/investment-banking:merger-model` — handles M&A accretion/dilution

If those skills aren't installed, `stock-pitch` falls back to doing the same work directly via `WebFetch` and `WebSearch`.

---

## Configuration

No mandatory configuration. Sensible defaults throughout.

Optional: override the basepath (default `/lcs/`):

```md
# In your invocation:
Build stock-pitch for BX deployed at /research/ instead of /lcs/
```

Optional: override the brand name (default "Levin Capital Strategies"):

```md
Build stock-pitch for BX branded as "Acme Capital Research"
```

---

## Troubleshooting

See [`skills/stock-pitch/references/deployment.md`](skills/stock-pitch/references/deployment.md) for a full troubleshooting table.

Most common issues:

- **404 on all pages** — Route pattern mismatch. Verify `path === '/lcs/bx'` matches requested path.
- **500 on one page** — TypeScript compile error. Run `npx wrangler deploy` locally and read the error.
- **"Authentication error"** — Your API token is scoped wrong. Try `npx wrangler login` for OAuth.
- **WSL2 TLS errors** — Add `NODE_EXTRA_CA_CERTS=/etc/ssl/certs/ca-certificates.crt` before `npx wrangler deploy`.
- **Model page frozen** — Malformed template literal. Grep for unescaped `` ` `` or `${` inside the `<script>` block.

---

## Contributing

Contributions welcome. Areas where help is especially valuable:

- **New sector patterns** — extend `sector-patterns.md` with additional verticals (insurance carriers, telecom, oilfield services, semis)
- **New model templates** — share JS patterns for unusual business models
- **Reference implementations** — add anonymized versions of well-built portals as examples
- **Bug fixes** — if you hit an issue, file it and we'll chase it

Pull requests to `main`. Follow the existing tone of the reference files (dense but plainly written).

---

## License

MIT. See [LICENSE](LICENSE).

---

## Credits

Built by the research team at Levin Capital Strategies. Inspired by the work of bulge-bracket sell-side teams; grounded in Anthropic's Claude Code skill architecture.

The design language borrows from Edward Tufte (sidenotes, data density) and from modern financial publications (Bloomberg Terminal data tables, Financial Times editorial typography).

---

**Questions?** Open an issue on [github.com/eratner15/stock-pitch](https://github.com/eratner15/stock-pitch).
