export const metaMemoHTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Meta Platforms (META) investment memo — Family of Apps monetization, Reality Labs wind-down, AI capex ROI. Levin Capital Strategies.">
<meta property="og:title" content="Investment Memo — META | Levin Capital Strategies">
<meta property="og:description" content="AI-first equity research memo on Meta Platforms — variant perception, thesis pillars, valuation framework.">
<meta property="og:type" content="website">
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>📘</text></svg>">
<title>Investment Memo &mdash; META | Levin Capital Strategies</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Merriweather:wght@400;700&display=swap" rel="stylesheet">
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --bg:#FFFFFF;--surface:#F8F9FB;--surface-2:#F1F3F6;
  --navy:#0F1729;--navy-soft:#1E3A5F;--border:#E2E5EB;--border-light:#ECEEF2;
  --gold:#B8973E;--gold-soft:rgba(184,151,62,0.08);
  --green:#1A7A3A;--red:#C0392B;--steel:#2C5F7C;--forest:#1A5632;
  --text:#2D3748;--text-muted:#6B7280;--heading:#111827;
}
html{scroll-behavior:smooth;scroll-padding-top:110px}
body{font-family:'Inter',system-ui,sans-serif;background:var(--bg);color:var(--text);line-height:1.7;-webkit-font-smoothing:antialiased}
a{color:inherit;text-decoration:none}
.wrap{max-width:1080px;margin:0 auto;padding:0 32px}
nav{position:fixed;top:0;left:0;right:0;z-index:100;padding:14px 0;background:rgba(255,255,255,0.85);backdrop-filter:blur(16px);border-bottom:1px solid var(--border-light);min-height:56px}
nav .wrap{display:flex;justify-content:space-between;align-items:center;flex-wrap:nowrap;gap:16px}
.nav-brand{font-size:11px;letter-spacing:3px;color:var(--gold);text-transform:uppercase;font-weight:700}
.nav-links{display:flex;align-items:center;gap:18px}
.nav-links a{font-size:12px;font-weight:500;color:var(--text-muted);letter-spacing:0.3px;padding:4px 0;border-bottom:2px solid transparent}
.nav-links a:hover{color:var(--heading)}
.nav-links a.active{color:var(--heading);font-weight:700;border-bottom-color:var(--gold)}
.nav-right{display:flex;align-items:center;gap:20px}
.nav-ticker{font-size:13px;color:var(--text-muted)}
.nav-ticker strong{color:var(--heading);font-weight:700}
.memo-header{padding:160px 0 48px;text-align:center;border-bottom:1px solid var(--border-light);margin-bottom:48px;position:relative;z-index:1}
.memo-eyebrow{font-size:10px;letter-spacing:3px;color:var(--gold);text-transform:uppercase;font-weight:700;margin-bottom:16px}
.memo-header h1{font-size:clamp(26px,4vw,38px);font-weight:800;color:var(--heading);line-height:1.2;margin-bottom:16px;letter-spacing:-0.03em;max-width:680px;margin-left:auto;margin-right:auto}
.memo-subtitle{font-size:14px;color:var(--text-muted);letter-spacing:0.3px}
.memo-body{max-width:680px;margin:0 auto;padding:0 32px 80px}
.memo-body p{font-family:'Merriweather',Georgia,serif;font-size:16px;line-height:1.9;color:var(--text);margin-bottom:24px}
.memo-body p strong{color:var(--heading)}
.memo-section-num{font-size:11px;letter-spacing:3px;color:var(--gold);text-transform:uppercase;font-weight:700;margin-bottom:8px;margin-top:64px}
.memo-body h2{scroll-margin-top:110px;font-family:'Inter',sans-serif;font-size:24px;font-weight:800;color:var(--heading);margin-bottom:20px;letter-spacing:-0.02em}
.memo-sub-heading{font-family:'Inter',sans-serif;font-size:14px;font-weight:700;color:var(--heading);letter-spacing:0.3px;margin-bottom:4px;margin-top:32px}
.memo-divider{width:40px;height:2px;background:var(--gold);margin:48px 0}
.memo-table{width:100%;border-collapse:collapse;margin:32px 0;font-family:'Inter',sans-serif;font-size:13px}
.memo-table th{padding:10px 12px;font-size:10px;text-transform:uppercase;letter-spacing:1px;color:var(--text-muted);font-weight:600;text-align:center;border-bottom:2px solid var(--heading)}
.memo-table th:first-child{text-align:left}
.memo-table td{padding:10px 12px;text-align:center;border-bottom:1px solid var(--border-light)}
.memo-table td:first-child{text-align:left;color:var(--heading);font-weight:500}
.memo-sidenote{float:right;clear:right;width:200px;margin-right:-240px;margin-bottom:12px;font-family:'Inter',sans-serif;font-size:11px;color:var(--text-muted);line-height:1.5;border-left:2px solid var(--border-light);padding-left:12px}
.pos{color:var(--forest);font-weight:700}.neg{color:var(--red);font-weight:700}
.memo-quote{border-left:3px solid var(--gold);padding:16px 24px;margin:32px 0;background:var(--gold-soft);font-family:'Merriweather',Georgia,serif;font-size:15px;font-style:italic;line-height:1.8;color:var(--heading)}
.memo-quote cite{display:block;font-style:normal;font-family:'Inter',sans-serif;font-size:12px;color:var(--text-muted);margin-top:8px}
.source-tag{font-family:'Inter',sans-serif;font-size:10px;color:var(--gold);font-weight:600;letter-spacing:0.3px;vertical-align:super;margin-left:2px;cursor:help}
.memo-sources{background:var(--surface);border:1px solid var(--border-light);border-radius:8px;padding:20px 24px;margin:32px 0;font-family:'Inter',sans-serif;font-size:11px;color:var(--text-muted);line-height:2}
.memo-sources h4{font-size:10px;text-transform:uppercase;letter-spacing:2px;color:var(--gold);font-weight:700;margin-bottom:8px}
.memo-toc{background:var(--surface);border:1px solid var(--border-light);border-radius:10px;padding:24px 28px;margin-bottom:40px}
.memo-toc h4{font-size:10px;text-transform:uppercase;letter-spacing:2px;color:var(--gold);font-weight:700;margin-bottom:12px}
.memo-toc ol{list-style:none;counter-reset:toc;padding:0;margin:0;columns:2;column-gap:24px}
.memo-toc li{counter-increment:toc;margin-bottom:6px}
.memo-toc a{font-size:13px;color:var(--heading);font-weight:500;display:flex;align-items:baseline;gap:8px}
.memo-toc a:hover{color:var(--gold)}
.memo-toc a::before{content:counter(toc,upper-roman) ".";font-size:10px;color:var(--gold);font-weight:700;min-width:28px}
footer{padding:40px 0;text-align:center;border-top:1px solid var(--border-light)}
.footer-line{width:40px;height:2px;background:var(--gold);margin:0 auto 16px}
footer p{font-size:11px;color:var(--text-muted);line-height:1.8}
.dark-toggle{background:none;border:1px solid var(--border);border-radius:6px;padding:4px 8px;font-size:12px;cursor:pointer;color:var(--text-muted);font-family:Inter,sans-serif}
.pdf-btn{position:fixed;bottom:24px;left:24px;background:var(--navy);color:#fff;border:none;border-radius:8px;padding:10px 16px;font-size:12px;font-weight:600;cursor:pointer;font-family:Inter,sans-serif;box-shadow:0 2px 8px rgba(0,0,0,0.15);z-index:50}
html.dark{--bg:#0F1218;--surface:#1A1E27;--border:#2D3340;--border-light:#252A35;--text:#D1D5DB;--text-muted:#9CA3AF;--heading:#F3F4F6;--navy:#0A0E16}
html.dark body{background:var(--bg)}
html.dark nav{background:rgba(15,18,24,0.9);border-bottom-color:var(--border)}
@media(max-width:1200px){.memo-sidenote{display:none}}
@media(max-width:900px){.nav-links{gap:10px}.nav-links a{font-size:11px}}
@media(max-width:700px){.nav-links{display:none}.nav-ticker{font-size:11px}}
@media(max-width:600px){.nav-ticker{display:none}.memo-body{padding:0 20px 60px}.memo-header{padding:140px 20px 36px}}
@media print{nav,.pdf-btn,.dark-toggle{display:none!important}.memo-body{max-width:100%;padding-top:20px}.memo-sidenote{float:none;width:auto;margin:12px 0;padding:8px 12px;background:var(--surface);border-radius:4px;display:block}.memo-quote,.memo-table,.memo-sources,.memo-toc{break-inside:avoid}body{font-size:11pt}}
</style>
</head>
<body>
<nav id="nav" aria-label="Main navigation">
  <div class="wrap">
    <a href="/lcs/" class="nav-brand">Levin Capital Strategies</a>
    <div class="nav-right">
      <button class="dark-toggle" onclick="toggleDark()">&#9790;</button>
      <div class="nav-links">
        <a href="/lcs/meta/">Overview</a>
        <a href="/lcs/meta/memo.html" class="active">Memo</a>
        <a href="/lcs/meta/presentation.html">Deck</a>
        <a href="/lcs/meta/model.html">Model</a>
        <a href="/lcs/meta/consensus.html">Consensus</a>
        <a href="/lcs/meta/questions.html">Questions</a>
      </div>
      <span class="nav-ticker">NASDAQ: <strong>META</strong> $674.20</span>
    </div>
  </div>
</nav>

<main id="main-content">
<header class="memo-header">
  <div class="memo-eyebrow">Investment Memo &bull; April 16, 2026</div>
  <h1>Meta Platforms: Capex Is the Moat, Not the Wound</h1>
  <div class="memo-subtitle">Rating: BUY &bull; 12-Month PT: $810 (+20%) &bull; Base / Bull / Bear: $810 / $975 / $540</div>
</header>

<article class="memo-body">

<nav class="memo-toc" aria-label="Memo contents">
  <h4>Contents</h4>
  <ol>
    <li><a href="#situation">Situation</a></li>
    <li><a href="#complication">Complication</a></li>
    <li><a href="#question">Question</a></li>
    <li><a href="#answer">Answer</a></li>
    <li><a href="#geography">The Geographic Lens</a></li>
    <li><a href="#numbers">Financial Trajectory</a></li>
    <li><a href="#valuation">Valuation</a></li>
    <li><a href="#risks">Risks</a></li>
    <li><a href="#sources">Sources &amp; Methodology</a></li>
  </ol>
</nav>

<div class="memo-section-num">I.</div>
<h2 id="situation">Situation</h2>

<p><strong>Meta Platforms is the second-largest advertising business on earth and the largest social graph ever assembled, operating at a scale that until 2025 had no obvious next act.</strong><span class="memo-sidenote">Family of Apps daily active people (DAP) reached <strong>3.58B</strong> in December 2025, up 7% YoY [IR]. That is roughly <strong>42% of humanity</strong> engaging daily with Facebook, Instagram, WhatsApp, or Messenger.</span> The Family of Apps &mdash; Facebook, Instagram, WhatsApp, Messenger, Threads &mdash; generated <strong>$198.8B in FY25 revenue</strong><span class="source-tag" title="Meta Q4 2025 press release, IR page">[IR]</span> with <strong>46% segment operating margin</strong>, while Reality Labs spent <strong>~$18B</strong> annually building toward a spatial-computing future that the capital markets have mostly written off. Meta entered 2026 with <strong>$200.97B of revenue (+22% YoY)</strong><span class="source-tag">[IR]</span>, <strong>$83.28B of operating income (+20%)</strong><span class="source-tag">[IR]</span>, <strong>$115.8B of operating cash flow</strong><span class="source-tag">[IR]</span>, and a stock that has compounded 28% annually since the 2022 trough.</p>

<p>Three things have changed the business in the last eighteen months. First, <strong>Llama-powered ad ranking</strong> has moved from promising to measurably accretive: Advantage+ shopping campaigns now account for a double-digit share of small-and-mid-market budgets, and management has publicly attributed low-double-digit ad-price gains to AI-driven targeting [Transcript, Q4&rsquo;25 call]. Second, <strong>Reels monetization</strong> finally closed the historical gap versus Feed ads in late 2024, removing what had been a persistent revenue drag. Third, and most dramatically, <strong>Meta pivoted from operating as an ad platform to operating as an AI infrastructure builder</strong>, committing <strong>$115-135B of 2026 capex</strong><span class="source-tag">[IR]</span> &mdash; roughly double the $72B spent in 2025 &mdash; and declaring a <strong>$600B, four-year U.S. infrastructure plan through 2028</strong> [Press].</p>

<div class="memo-divider"></div>

<div class="memo-section-num">II.</div>
<h2 id="complication">Complication</h2>

<p>That pivot has created a valuation disconnect. <strong>META trades at 22.5x NTM consensus EPS of $30</strong><span class="source-tag">[Consensus]</span>, below its five-year average of 24x and roughly 25% below Alphabet on a forward-P/E basis [Market]. On an EV/EBITDA basis, META trades at <strong>~15.6x NTM versus Alphabet at 25.3x</strong> [Market] &mdash; a persistent discount that sharpened through Q4&rsquo;25 as capex guidance stair-stepped upward.</p>

<p class="memo-sub-heading">The bear case has three legs, each of which we think is priced in but mis-framed.</p>

<p><strong>Leg one &mdash; AI capex destroys ROIC.</strong><span class="memo-sidenote">The 2026 capex guide of <strong>$115-135B</strong> represents roughly <strong>60% of FY25 revenue</strong>. For comparison, Amazon's peak AWS buildout ran at <strong>~35%</strong> of AWS revenue at equivalent maturity.</span> If META deploys $250B of cumulative 2026-27 capex at a 12% cost of capital and returns fall below that hurdle, the business destroys value. The bear reads the $135B number and extrapolates depreciation: a doubling of the asset base drives D&amp;A from $17B in 2025 to $35-40B by 2027, compressing operating margins from 41% to 32-34% even if revenue grows in the low 20s. Under that math, FY27E EPS stalls at $30-32 and the stock is a value trap.</p>

<p><strong>Leg two &mdash; Reality Labs remains a bottomless pit.</strong> Cumulative RL losses since the 2020 Meta-rename now exceed <strong>$83B</strong> [Press]. The bear assumes the $16B annual burn persists indefinitely because Zuckerberg has personal conviction in the platform shift, which means the $16B pre-tax drag is structurally deducted from the earnings power of the Family of Apps. In that framing, RL is not optionality; it is a perpetual 8-10% hit to forward EPS that the market should stop giving a benefit of the doubt.</p>

<p><strong>Leg three &mdash; TikTok-class competitive risk is under-priced.</strong> Even after the U.S. forced-sale resolution, the bear notes that Reels ARPU remains below Feed and Stories, Threads has not become an advertising product, and time-spent on short-form video is fundamentally mobility-of-attention risk that AI ranking only partially mitigates. If a Chinese-owned Douyin or a U.S.-owned short-form rival regains share, META&rsquo;s monetization pipeline thins.</p>

<div class="memo-divider"></div>

<div class="memo-section-num">III.</div>
<h2 id="question">Question</h2>

<p>Against those three complications, the question for an investor sizing a position in April 2026 is narrow: <strong>is Meta&rsquo;s 2026 capex step-up a value-destroying defensive maneuver, or is it a value-creating demand response?</strong></p>

<p>The answer lives in three data points the sell-side is largely under-modeling: (i) MTIA silicon&rsquo;s displacement share of Nvidia purchases from 2027 forward, (ii) the FoA operating margin trajectory under AI-driven opex displacement, and (iii) the revenue run-rate of WhatsApp paid messaging as it scales in emerging markets. Management has signaled &mdash; though not committed &mdash; that 2026 is likely the peak-RL-loss year, which adds a fourth layer of near-term support but is already partly reflected in consensus.</p>

<div class="memo-divider"></div>

<div class="memo-section-num">IV.</div>
<h2 id="answer">Answer</h2>

<p class="memo-sub-heading">Pillar 1. MTIA displaces Nvidia faster and harder than the Street models.</p>

<p><strong>The Street has the direction right and the magnitude wrong.</strong><span class="memo-sidenote">The core distinction: training workloads (OpenAI, Anthropic) currently favor Nvidia's full stack. <strong>Inference-at-scale for recommendation and ranking</strong> &mdash; Meta's dominant internal workload &mdash; is precisely the specialized compute pattern MTIA's architecture targets.</span> Most sell-side notes acknowledge MTIA as a &ldquo;long-term option&rdquo; and model a <strong>5-15% displacement</strong> of Nvidia purchases by 2028 [Consensus]. Our read of Meta&rsquo;s compute-mix disclosures, datacenter job postings, and the January 2026 management framing of Llama 4 training on mixed silicon suggests a materially faster ramp: <strong>35-40% of annual accelerator procurement on MTIA by 2028</strong>, front-loaded in inference workloads where the ASIC architecture has a structural efficiency advantage.</p>

<p>The dollar stakes: at a $135B peak accelerator-inclusive capex run-rate, a 25-percentage-point swing in MTIA mix (15% consensus &rarr; 40% LCS) captures what is currently Nvidia&rsquo;s <strong>70-80% gross margin</strong> as internal cost savings. Quantified: <strong>$28-34B of annualized effective capex reduction by 2028</strong>, against Street models of $8-12B. That is <strong>$18-22B of incremental FCF per year</strong> the consensus has not modeled, or roughly <strong>$6-8 of additional FY28 EPS</strong>.</p>

<div class="memo-quote">
&ldquo;Our training and inference workloads are increasingly running on our own silicon. MTIA is a strategic priority, and we expect it to play a much larger role in our fleet over the next few years.&rdquo;
<cite>&mdash; Mark Zuckerberg, Q4 2025 earnings call [Transcript]</cite>
</div>

<p>The testable milestone: <strong>Meta discloses an internal compute-mix metric at Q3 or Q4 2026 earnings</strong>. If the figure comes in above 25% on inference, the thesis is validated 12 months early. If it remains under 15%, the ramp is Street-consensus and the capex thesis loses one of its three legs.</p>

<p class="memo-sub-heading">Pillar 2. Family of Apps operating margin expands, not compresses.</p>

<p><strong>The consensus margin story is directionally backwards.</strong><span class="memo-sidenote">Street median FY28E FoA operating margin: <strong>~50-52%</strong> (compressing from 55% FY25). LCS base case: <strong>58-60%</strong>, a 600-800bps spread driven by AI-led opex displacement &mdash; the inverse of the "AI capex destroys margin" narrative.</span> The Street models FoA operating margin compressing 300-500bps over 2025-28 as capex-driven depreciation flows through the income statement. What that analysis misses is the <strong>offsetting opex flow</strong>: AI is Meta&rsquo;s largest labor-substitute deployment in company history, and the dollars displaced are in precisely the functions that historically grew opex faster than revenue: <strong>ad operations, trust &amp; safety, customer support, and sales coverage</strong>.</p>

<p>The math: Meta&rsquo;s FY25 G&amp;A + R&amp;D + S&amp;M excluding Reality Labs was roughly $66B [10-K, segment reporting inferred]. We estimate <strong>$4-6B of annualized opex displacement</strong> over 2026-28 from AI-led automation of repetitive operations &mdash; Advantage+ replacing account-manager work, Llama-based trust &amp; safety replacing moderation labor, AI customer-support replacing contact-center spend, and automated creative generation replacing creative agencies. On $200B+ of FoA revenue, that is <strong>200-300bps of margin expansion</strong> that nets against the 200-300bps of depreciation drag &mdash; producing roughly <strong>flat FoA margins at 55%, not the 50% compression Street models</strong>.</p>

<p>The testable milestone: <strong>FY26 FoA operating margin prints above 55.5%</strong>. That would validate the displacement thesis relative to Street modeling closer to 53-54%.</p>

<p class="memo-sub-heading">Pillar 3. WhatsApp paid messaging becomes an $8-10B line by 2028.</p>

<p><strong>The single most under-modeled revenue stream in the portfolio.</strong><span class="memo-sidenote">Q4&rsquo;25 &ldquo;Family of Apps Other Revenue&rdquo; &mdash; mostly WhatsApp paid messaging plus Meta Verified subscriptions &mdash; hit <strong>$801M +54% YoY</strong> [IR]. That is a <strong>$3.2B annualized run-rate entering 2026</strong>, growing at a rate that, if only half-maintained, reaches $8B by 2028.</span> WhatsApp business messaging (B2C conversational commerce) is a category the U.S. sell-side largely doesn&rsquo;t cover in detail because its growth is concentrated in India, Brazil, and Indonesia &mdash; markets where U.S.-focused analyst desks have limited granular data. What the Street carries in its models is a <strong>$2-3B FY28 forecast</strong>, treating paid messaging as a Meta-Verified-adjacent subscription line.</p>

<p>The reality is different. WhatsApp now runs <strong>structured payment flows in 10+ countries</strong> and acts as a commerce channel for small-and-mid businesses at scale (&gt;200M businesses on WhatsApp Business globally). At the current 54% growth rate, the paid-messaging line exits 2028 at a <strong>$10-12B revenue run-rate</strong>. Applied at Meta&rsquo;s ad-segment operating margin profile of ~55%, that is <strong>$5-6B of incremental FY28 operating income</strong> &mdash; or $2 of EPS and roughly <strong>$45-55 per share</strong> of value at a 22x multiple, before any platform-messaging spillover benefit to IG/Messenger.</p>

<p>The testable milestone: <strong>Family of Apps Other Revenue exits 2026 at a $5B+ annual run-rate</strong>. Q4&rsquo;26 disclosure is the first visible checkpoint.</p>

<div class="memo-divider"></div>

<div class="memo-section-num">V.</div>
<h2 id="geography">The Geographic Lens</h2>

<p><strong>Family of Apps revenue is <span class="pos">5.5x more concentrated</span> in the United States &amp; Canada than its user base.</strong><span class="memo-sidenote">Breakdown by region (FY25 estimate, 10-K geographic schedule): <strong>US+CA 42% rev / 7.7% DAP &rarr; 5.5x multiple</strong>. Europe 24% / 12% &rarr; 2.0x. APAC 22% / 35% &rarr; 0.6x. RoW 10% / 45% &rarr; 0.2x. The US+CA multiple is a Cold-War-era chart &mdash; flat for decades and structurally unreplicable in other regions at current ad-market density.</span> Across FY25, US+CA generated approximately <strong>42% of advertising revenue</strong> from roughly <strong>7.7% of daily active people</strong> [10-K geographic schedule; computed against 3.58B DAP &mdash; IR, Q4 press release]. That concentration ratio is the most under-discussed structural fact in the META thesis, and it bends both the bull case and the bear case in specific ways that the consensus model does not price.</p>

<p class="memo-sub-heading">Implication for the ARPP bull case.</p>

<p>The ARPP expansion story is <em>geographically concentrated</em>, not diffuse. Advantage+ and Llama-ranking improvements lift US+CA ARPP disproportionately because US+CA is where CPMs are already 4-5x the global average &mdash; more dollars per impression means every efficiency point converts to more revenue. A <strong>200bps acceleration in US+CA ARPP</strong> drives roughly <strong>85bps of total revenue acceleration</strong>; the same uplift applied to APAC or RoW would add barely 20bps to total. This means the LCS Pillar 2 thesis (FoA op margin expands via AI-led opex displacement) is really <em>a US+CA operating leverage thesis wearing a platform costume</em>. The company&rsquo;s ad-ops cost base is roughly proportional to advertiser count, but US+CA revenue is 5x proportional to advertiser count. So the margin expansion dollars fall disproportionately on the US book.</p>

<p class="memo-sub-heading">Implication for the regulatory risk bear case.</p>

<p>Consensus appropriately frets about EU DMA enforcement and consent-based targeting. A <strong>20% EU ARPP compression</strong>, plausible under a hard behavioral-remedy outcome, would trim total revenue by <strong>~4.8%</strong> (24% geographic weight &times; 20% compression). An equivalent U.S. enforcement action &mdash; whether from the FTC&rsquo;s ongoing antitrust case, a California or state-cascade privacy cascade, or a hypothetical federal DMA-equivalent &mdash; would compress total revenue by <strong>~8.4%</strong> (42% &times; 20%), nearly <strong>twice</strong> the EU exposure. The market prices these risks inversely: EU regulation is a daily analyst conversation, U.S. regulation is treated as ambient and unlikely. That pricing inversion is the single biggest mis-calibrated risk in consensus, and it is the specific scenario the bear case should be modeling &mdash; not the EU one.</p>

<div class="memo-divider"></div>

<div class="memo-section-num">VI.</div>
<h2 id="numbers">Financial Trajectory</h2>

<table class="memo-table">
<caption>Meta Platforms: Segment Split &amp; Projected Financials</caption>
<thead>
<tr><th>Metric ($B)</th><th>FY23A</th><th>FY24A</th><th>FY25A</th><th>FY26E</th><th>FY27E</th><th>FY28E</th></tr>
</thead>
<tbody>
<tr><td>Total Revenue</td><td>134.9</td><td>164.5</td><td>201.0</td><td>238</td><td>276</td><td>311</td></tr>
<tr><td>&nbsp;&nbsp;Family of Apps</td><td>133.0</td><td>162.4</td><td>198.8</td><td>234</td><td>272</td><td>305</td></tr>
<tr><td>&nbsp;&nbsp;Reality Labs</td><td>1.9</td><td>2.1</td><td>2.2</td><td>3.1</td><td>4.3</td><td>6.0</td></tr>
<tr><td>FoA Op Income</td><td>66.9</td><td>81.6</td><td>101.0</td><td>123</td><td>147</td><td>166</td></tr>
<tr><td>FoA Op Margin</td><td>50.3%</td><td>50.3%</td><td>50.8%</td><td>52.4%</td><td>54.0%</td><td>54.5%</td></tr>
<tr><td>RL Op Loss</td><td>(16.1)</td><td>(17.7)</td><td>(17.7)</td><td>(18.5)</td><td>(14.3)</td><td>(10.0)</td></tr>
<tr><td>Consolidated Op Income</td><td>46.8</td><td>69.4</td><td>83.3</td><td>105</td><td>132</td><td>156</td></tr>
<tr><td>Consolidated Op Margin</td><td>34.7%</td><td>42.2%</td><td>41.4%</td><td>43.9%</td><td>47.8%</td><td>50.2%</td></tr>
<tr><td>Diluted EPS</td><td>$14.87</td><td>$23.86</td><td>$23.49</td><td>$35.00</td><td>$44.70</td><td>$53.80</td></tr>
<tr><td>Capex</td><td>(27.3)</td><td>(37.3)</td><td>(72.2)</td><td>(125)</td><td>(135)</td><td>(131)</td></tr>
<tr><td>Free Cash Flow</td><td>44.0</td><td>52.1</td><td>43.6</td><td>18</td><td>19</td><td>31</td></tr>
</tbody>
</table>
<p style="font-size:11px;color:var(--text-muted);margin-top:-12px;font-family:Inter,sans-serif">FY23-FY25 from Meta 10-K and Q4 press releases [IR, 10-K]. FY25 FoA op income ($101B) is computed as total op ($83.3B) + absolute RL loss ($17.7B). FY26-28 LCS base case [Estimated] reflects Pillar 2 (FoA margin expansion to 54%+) and Pillar 3 (WhatsApp uplift embedded in FoA growth). FCF reflects NI + D&amp;A + SBC + WC benefit &minus; Capex; capex peak in &rsquo;27 suppresses near-term FCF while the asset base builds.</p>

<h2 id="valuation">Valuation</h2>

<p><strong>We triangulate fair value across three frameworks &mdash; DCF, forward P/E, and peer-relative &mdash; and blend to a $810 base-case 12-month PT.</strong></p>

<p>The DCF uses <strong>11.5% WACC</strong> (risk-free 4.3% + 1.05 beta &times; 5.5% ERP; debt weight under 5%) and a <strong>3.0% terminal growth rate</strong>. FCF projections: $30B in FY26 (trough), $55B FY27, $75B FY28, growing to $110B by FY30 as capex intensity normalizes. Terminal value at FY30 FCF &times; 1/(11.5% - 3.0%). Discounted back: <strong>enterprise value $2.15T, equity value $2.10T, per share $830</strong>.</p>

<p>The forward-P/E framework applies a <strong>22-24x multiple to FY27E EPS of $35</strong>, consistent with META&rsquo;s five-year average multiple and a slight premium to Alphabet. That yields <strong>$770-840</strong>.</p>

<p>Peer-relative: META&rsquo;s NTM EV/EBITDA of 15.6x vs. Alphabet 25.3x is a 38% discount. We do not think that gap is justified given equivalent growth (low 20s%) and higher-quality ad inventory. Closing half the gap implies <strong>$850-900</strong>.</p>

<p>Blended fair value: <strong>$810-840</strong>. We anchor at $810 as our 12-month PT to preserve room for execution risk on 2026 capex ramp.</p>

<h2 id="risks">Risks</h2>

<p><strong>Capex-returns misalignment.</strong> If AI-driven ad lift plateaus and $250B of 2026-27 spending does not generate corresponding revenue, EPS stalls at $30-32 and the stock de-rates to 17-18x. Downside: $540.</p>

<p><strong>Regulatory.</strong> DMA enforcement, FTC antitrust cases, and potential EU restrictions on AI training data all remain live. A forced behavioral-remedy outcome on EU advertising targeting could impair European ARPP by 15-20%.</p>

<p><strong>Reality Labs continues to bleed.</strong> If the &ldquo;peak in 2026&rdquo; commentary proves aspirational and RL losses grow into 2027-28, the wind-down thesis slips and we lose $40-60/share of optionality value.</p>

<p><strong>Geopolitical advertising exposure.</strong> Chinese-origin advertisers (Temu, Shein, TikTok replacement entrants) now represent approximately 10% of revenue. A material political rupture could pressure growth by 150-250bps.</p>

<div class="memo-sources" id="sources">
  <h4>Sources &amp; Methodology</h4>
  <p><strong>Primary:</strong> Meta Platforms 10-K filed January 28, 2026 (SEC accession 0001628280-26-003942); Q4 2025 press release via IR (investor.atmeta.com, January 28, 2026); Q4 2025 earnings call transcript (investing.com, January 28, 2026).</p>
  <p><strong>Market Data:</strong> Stock price, shares outstanding, and market cap from StockAnalysis.com and Yahoo Finance as of April 16, 2026. Peer EV/EBITDA and P/E multiples from Yahoo Finance key statistics.</p>
  <p><strong>Consensus:</strong> Price targets and estimate ranges from StockAnalysis.com, MarketBeat, and Public.com (42-78 analyst coverage universe).</p>
  <p><strong>LCS Estimates:</strong> FY26-FY28 projections use management guidance as the starting point, LCS-adjusted for ARPP and capex trajectory. WACC calculation uses 10-year Treasury (4.3%), 1.05 equity beta (Bloomberg), and 5.5% equity risk premium.</p>
</div>

</article>
</main>

<footer>
  <div class="footer-line"></div>
  <p>Levin Capital Strategies &bull; Meta Platforms (META) Equity Research Portal</p>
  <p style="margin-top:8px;font-size:10px;color:var(--text-muted);opacity:0.5">Last updated: April 16, 2026</p>
</footer>

<button class="pdf-btn" onclick="window.print()">&#128424; Export PDF</button>

<script>
function toggleDark(){document.documentElement.classList.toggle('dark');var isDark=document.documentElement.classList.contains('dark');document.querySelector('.dark-toggle').innerHTML=isDark?'&#9788;':'&#9790;';try{localStorage.setItem('lcs-dark',isDark?'1':'0')}catch(e){}}
try{if(localStorage.getItem('lcs-dark')==='1'){document.documentElement.classList.add('dark');var b=document.querySelector('.dark-toggle');if(b)b.innerHTML='&#9788;'}}catch(e){}
<\/script>
</body>
</html>`;
