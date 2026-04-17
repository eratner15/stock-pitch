export const metaQuestionsHTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Meta Platforms (META) 20 diligence questions for buy-side management meetings, conference Q&A, and expert network calls.">
<meta property="og:title" content="META Questions | Levin Capital Strategies">
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>📘</text></svg>">
<title>META Diligence Questions &mdash; Levin Capital Strategies</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
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
body{font-family:'Inter',system-ui,sans-serif;background:var(--bg);color:var(--text);line-height:1.65;-webkit-font-smoothing:antialiased}
a{color:inherit;text-decoration:none}
.wrap{max-width:1080px;margin:0 auto;padding:0 32px}
nav{position:fixed;top:0;left:0;right:0;z-index:100;padding:14px 0;background:rgba(255,255,255,0.85);backdrop-filter:blur(16px);border-bottom:1px solid var(--border-light)}
nav .wrap{display:flex;justify-content:space-between;align-items:center}
.nav-brand{font-size:11px;letter-spacing:3px;color:var(--gold);text-transform:uppercase;font-weight:700}
.nav-links{display:flex;align-items:center;gap:18px}
.nav-links a{font-size:12px;font-weight:500;color:var(--text-muted);padding:4px 0;border-bottom:2px solid transparent}
.nav-links a.active{color:var(--heading);font-weight:700;border-bottom-color:var(--gold)}
.nav-right{display:flex;align-items:center;gap:20px}
.nav-ticker{font-size:13px;color:var(--text-muted)}
.nav-ticker strong{color:var(--heading);font-weight:700}

.header{padding:120px 0 40px;text-align:center;border-bottom:1px solid var(--border-light);margin-bottom:48px}
.eyebrow{font-size:10px;letter-spacing:3px;color:var(--gold);text-transform:uppercase;font-weight:700;margin-bottom:16px}
h1{font-size:clamp(26px,4vw,34px);font-weight:800;color:var(--heading);line-height:1.2;letter-spacing:-0.03em;margin-bottom:12px;max-width:640px;margin-left:auto;margin-right:auto}
.subtitle{font-size:14px;color:var(--text-muted)}

.actions{display:flex;gap:12px;justify-content:center;margin-top:24px;flex-wrap:wrap}
.action-btn{padding:8px 18px;border-radius:6px;border:1px solid var(--border);font-size:12px;font-weight:600;cursor:pointer;background:var(--bg);color:var(--text);font-family:Inter,sans-serif;transition:all 0.2s}
.action-btn:hover{border-color:var(--gold);color:var(--gold)}

.category{margin-bottom:48px}
.cat-header{display:flex;align-items:baseline;gap:16px;margin-bottom:20px;padding-bottom:8px;border-bottom:1px solid var(--border-light)}
.cat-num{font-size:11px;font-weight:700;color:var(--gold);letter-spacing:2px;text-transform:uppercase}
.cat-name{font-size:20px;font-weight:800;color:var(--heading);letter-spacing:-0.02em}

.q{background:var(--surface);border:1px solid var(--border-light);border-radius:10px;padding:20px 24px;margin-bottom:12px;cursor:pointer;transition:all 0.2s}
.q:hover{border-color:var(--gold)}
.q.open{background:var(--bg);box-shadow:0 2px 12px rgba(0,0,0,0.04)}
.q-head{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}
.q-title{font-size:15px;font-weight:600;color:var(--heading);line-height:1.5;flex:1}
.q-num{font-size:11px;color:var(--gold);font-weight:700;min-width:24px}
.q-tag{font-size:9px;padding:3px 8px;border-radius:4px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;flex-shrink:0}
.q-tag.high{background:rgba(184,151,62,0.15);color:var(--gold)}
.q-tag.med{background:rgba(44,95,124,0.12);color:var(--steel)}
.q-tag.std{background:rgba(107,114,128,0.1);color:var(--text-muted)}
.q-detail{display:none;margin-top:16px;padding-top:16px;border-top:1px solid var(--border-light)}
.q.open .q-detail{display:block}
.q-detail h4{font-size:10px;font-weight:700;color:var(--gold);text-transform:uppercase;letter-spacing:1px;margin-bottom:6px;margin-top:12px}
.q-detail p{font-size:13px;color:var(--text);line-height:1.65}
.q-detail .rf{background:rgba(192,57,43,0.06);border-left:3px solid var(--red);padding:10px 14px;border-radius:4px;font-size:12px;font-style:italic;color:var(--heading);margin-top:6px}

footer{padding:40px 0;text-align:center;border-top:1px solid var(--border-light);margin-top:40px}
.footer-line{width:40px;height:2px;background:var(--gold);margin:0 auto 16px}
footer p{font-size:11px;color:var(--text-muted);line-height:1.8}
.dark-toggle{background:none;border:1px solid var(--border);border-radius:6px;padding:4px 8px;font-size:12px;cursor:pointer;color:var(--text-muted);font-family:Inter,sans-serif}
html.dark{--bg:#0F1218;--surface:#1A1E27;--border:#2D3340;--border-light:#252A35;--text:#D1D5DB;--text-muted:#9CA3AF;--heading:#F3F4F6;--navy:#0A0E16}
html.dark body{background:var(--bg)}
html.dark nav{background:rgba(15,18,24,0.9);border-bottom-color:var(--border)}

@media print{
  nav,.actions,.dark-toggle{display:none!important}
  .q{break-inside:avoid;background:var(--bg);border:1px solid var(--border)}
  .q .q-detail{display:block!important;border-top:1px solid var(--border-light)}
  .header{padding-top:20px}
  body{font-size:10pt}
  .q-title{font-size:12pt}
  .category{break-inside:avoid}
}
@media(max-width:600px){.nav-ticker,.nav-links{display:none}}
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
        <a href="/lcs/meta/memo.html">Memo</a>
        <a href="/lcs/meta/presentation.html">Deck</a>
        <a href="/lcs/meta/model.html">Model</a>
        <a href="/lcs/meta/consensus.html">Consensus</a>
        <a href="/lcs/meta/questions.html" class="active">Questions</a>
      </div>
      <span class="nav-ticker">NASDAQ: <strong>META</strong> $674.20</span>
    </div>
  </div>
</nav>

<main>
<header class="header">
  <div class="eyebrow">Diligence Toolkit &bull; For Buy-Side Meetings</div>
  <h1>20 Questions for Meta Management</h1>
  <p class="subtitle">Organized by Strategy / Capital / Competitive / Risk / Variant Perception. Print-optimized.</p>
  <div class="actions">
    <button class="action-btn" onclick="expandAll()">&#9660; Expand All</button>
    <button class="action-btn" onclick="collapseAll()">&#9650; Collapse All</button>
    <button class="action-btn" onclick="window.print()">&#128424; Print Pack</button>
  </div>
</header>

<div class="wrap">

<!-- STRATEGY -->
<div class="category">
  <div class="cat-header"><div class="cat-num">Category I</div><div class="cat-name">Strategy &amp; Execution</div></div>

  <div class="q" onclick="toggleQ(this)"><div class="q-head"><div class="q-num">01</div><div class="q-title">At what year do you expect Reality Labs quarterly operating loss to be below $3 billion on a run-rate basis, and what specifically needs to happen to get there?</div><span class="q-tag high">High</span></div>
  <div class="q-detail"><h4>Why We&rsquo;re Asking</h4><p>Management has publicly said 2026 is the peak-loss year. A specific answer on when losses normalize below $3B/quarter ($12B annualized) anchors the wind-down thesis numerically.</p><h4>Red-Flag Answer</h4><div class="rf">&ldquo;It&rsquo;s hard to give a specific timeline; we&rsquo;re investing for the long term.&rdquo; &mdash; no commitment to a year means &ldquo;peak in 2026&rdquo; is soft and RL is not actually managed toward a P&amp;L target.</div></div></div>

  <div class="q" onclick="toggleQ(this)"><div class="q-head"><div class="q-num">02</div><div class="q-title">Of the $115-135B 2026 capex, what percentage is allocated to GPUs versus MTIA silicon versus physical datacenter infrastructure? How does that mix shift through 2027-28?</div><span class="q-tag high">High</span></div>
  <div class="q-detail"><h4>Why We&rsquo;re Asking</h4><p>Capex composition determines the margin trajectory. GPU-heavy mix compresses margin faster (shorter useful life + Nvidia price extraction). In-house MTIA extends useful life and captures Nvidia margin.</p><h4>Red-Flag Answer</h4><div class="rf">Management refuses to disclose internal mix or gives only directional language. Signals low conviction on MTIA ramp.</div></div></div>

  <div class="q" onclick="toggleQ(this)"><div class="q-head"><div class="q-num">03</div><div class="q-title">What percentage of Advantage+ shopping campaigns are now AI-optimized end-to-end, and what is the conversion lift versus manual campaign configuration?</div><span class="q-tag high">High</span></div>
  <div class="q-detail"><h4>Why We&rsquo;re Asking</h4><p>The ARPP acceleration thesis depends on Advantage+ penetration continuing to rise. If adoption has plateaued &gt;60%, future uplift is limited; if still &lt;40%, the compounder has years to run.</p><h4>Red-Flag Answer</h4><div class="rf">&ldquo;We don&rsquo;t disclose specific adoption metrics.&rdquo; &mdash; typical answer; non-answer. Watch for directional language.</div></div></div>

  <div class="q" onclick="toggleQ(this)"><div class="q-head"><div class="q-num">04</div><div class="q-title">Llama is now an open-weights model ecosystem. What is the monetization path &mdash; commercial licensing, ecosystem leverage, or purely defensive?</div><span class="q-tag std">Standard</span></div>
  <div class="q-detail"><h4>Why We&rsquo;re Asking</h4><p>Meta has spent ~$2-3B on Llama development cumulatively. If it&rsquo;s purely defensive (preventing Nvidia/Microsoft lock-in), that&rsquo;s a real moat. If there&rsquo;s a direct monetization path (think Hugging Face enterprise), it&rsquo;s incremental upside.</p><h4>Red-Flag Answer</h4><div class="rf">&ldquo;Open source is a strategic choice and we&rsquo;re not focused on direct monetization.&rdquo; &mdash; fine, but the R&amp;D spend should be treated as ad-platform capex, not a standalone business.</div></div></div>

</div>

<!-- CAPITAL -->
<div class="category">
  <div class="cat-header"><div class="cat-num">Category II</div><div class="cat-name">Capital Allocation</div></div>

  <div class="q" onclick="toggleQ(this)"><div class="q-head"><div class="q-num">05</div><div class="q-title">FCF in 2026 is guided to be materially lower due to capex. What&rsquo;s the buyback philosophy &mdash; do you pause, reduce, or maintain the current ~$30-40B annual pace through the capex peak?</div><span class="q-tag high">High</span></div>
  <div class="q-detail"><h4>Why We&rsquo;re Asking</h4><p>2025 buybacks were ~$32B. If 2026 FCF is $30B, maintaining buyback pace implies leverage. Reducing buybacks signals discipline but removes a near-term EPS support.</p><h4>Red-Flag Answer</h4><div class="rf">&ldquo;We&rsquo;ll be opportunistic.&rdquo; &mdash; vague. Investors want a framework, not just a philosophy.</div></div></div>

  <div class="q" onclick="toggleQ(this)"><div class="q-head"><div class="q-num">06</div><div class="q-title">At current $1.7T market cap, what hurdle rate does an acquisition need to clear? Is there any target category (AI chip designer, enterprise SaaS, content) you&rsquo;d actively consider at scale?</div><span class="q-tag med">Medium</span></div>
  <div class="q-detail"><h4>Why We&rsquo;re Asking</h4><p>Meta has &gt;$75B cash [10-K]. A $30-50B M&amp;A deal is plausible. Understanding whether management is disciplined on hurdle rates is a governance tell.</p><h4>Red-Flag Answer</h4><div class="rf">&ldquo;We evaluate opportunities as they arise.&rdquo; &mdash; translation: no framework. Watch for specific hurdle-rate references.</div></div></div>

  <div class="q" onclick="toggleQ(this)"><div class="q-head"><div class="q-num">07</div><div class="q-title">Capex intensity is rising from 35% of revenue in 2025 to ~52% in 2026. At what revenue or AI-ROI milestone would you consider stepping capex down?</div><span class="q-tag high">High</span></div>
  <div class="q-detail"><h4>Why We&rsquo;re Asking</h4><p>If answer is &ldquo;once we see ROI&rdquo; it&rsquo;s disciplined. If answer is &ldquo;we&rsquo;re a long-term builder&rdquo; it&rsquo;s an asset-heavy trap.</p><h4>Red-Flag Answer</h4><div class="rf">&ldquo;We&rsquo;ll spend what we need to spend.&rdquo; &mdash; classic Zuckerberg 2022 framing. The market punished that for two quarters before the 2023 cost reset.</div></div></div>

  <div class="q" onclick="toggleQ(this)"><div class="q-head"><div class="q-num">08</div><div class="q-title">Do you have a target for the MTIA silicon contribution &mdash; either as a % of inference workload or as a cost-savings run rate &mdash; by year-end 2027?</div><span class="q-tag med">Medium</span></div>
  <div class="q-detail"><h4>Why We&rsquo;re Asking</h4><p>MTIA displacing Nvidia is the single biggest cost-side lever in the model. A real quantitative commitment would validate the capex-is-moat thesis.</p><h4>Red-Flag Answer</h4><div class="rf">&ldquo;We&rsquo;re building multiple options; MTIA is one of them.&rdquo; &mdash; signals hedging. Real conviction looks like &ldquo;we target X% of training compute on MTIA by Y.&rdquo;</div></div></div>

</div>

<!-- COMPETITIVE -->
<div class="category">
  <div class="cat-header"><div class="cat-num">Category III</div><div class="cat-name">Competitive Position</div></div>

  <div class="q" onclick="toggleQ(this)"><div class="q-head"><div class="q-num">09</div><div class="q-title">TikTok&rsquo;s U.S. ownership transition is finalized. What is the observable impact on Reels share-of-time, and has the competitive gap materially changed in 2026 vs. 2025?</div><span class="q-tag high">High</span></div>
  <div class="q-detail"><h4>Why We&rsquo;re Asking</h4><p>The #1 bear-case operational risk is TikTok regaining share of time. Management&rsquo;s honest read matters.</p><h4>Red-Flag Answer</h4><div class="rf">&ldquo;Reels is the leading short-form video product globally.&rdquo; &mdash; aspirational claim; not a competitive read.</div></div></div>

  <div class="q" onclick="toggleQ(this)"><div class="q-head"><div class="q-num">10</div><div class="q-title">WhatsApp is reportedly the next major monetization surface. What is the 3-year revenue potential, and what specific business-messaging use cases are you prioritizing?</div><span class="q-tag med">Medium</span></div>
  <div class="q-detail"><h4>Why We&rsquo;re Asking</h4><p>WhatsApp revenue was disclosed at $801M in Q4 Other Revenue, +54% YoY [IR]. If paid messaging scales to $5-10B/yr, it&rsquo;s a $30-50B revenue line at maturity.</p><h4>Red-Flag Answer</h4><div class="rf">&ldquo;We&rsquo;re exploring multiple monetization approaches.&rdquo; &mdash; non-answer; no business messaging P&amp;L visibility.</div></div></div>

  <div class="q" onclick="toggleQ(this)"><div class="q-head"><div class="q-num">11</div><div class="q-title">How do you view OpenAI, Google Gemini, and Anthropic as a competitive threat in consumer AI? Is Meta AI a flanking position or a frontal engagement?</div><span class="q-tag med">Medium</span></div>
  <div class="q-detail"><h4>Why We&rsquo;re Asking</h4><p>Meta AI&rsquo;s usage is reportedly 1B+ MAU but monetization is unclear. If it&rsquo;s ad-surface augmentation, that&rsquo;s accretive. If it&rsquo;s a standalone LLM play, that&rsquo;s a capital hole.</p><h4>Red-Flag Answer</h4><div class="rf">&ldquo;We&rsquo;re building Personal Superintelligence; that&rsquo;s a different product vision.&rdquo; &mdash; aspirational; no commercial framework.</div></div></div>

  <div class="q" onclick="toggleQ(this)"><div class="q-head"><div class="q-num">12</div><div class="q-title">If Ray-Ban Meta scales to 10M+ units annually by 2027, what does that imply for Reality Labs revenue and loss trajectory?</div><span class="q-tag std">Standard</span></div>
  <div class="q-detail"><h4>Why We&rsquo;re Asking</h4><p>Ray-Ban is the only RL product showing meaningful unit traction. Understanding unit economics (ASP, gross margin, attach rate) frames the wind-down.</p><h4>Red-Flag Answer</h4><div class="rf">Management defers to segment-level reporting without product-level color.</div></div></div>

</div>

<!-- RISK -->
<div class="category">
  <div class="cat-header"><div class="cat-num">Category IV</div><div class="cat-name">Risk &amp; Regulatory</div></div>

  <div class="q" onclick="toggleQ(this)"><div class="q-head"><div class="q-num">13</div><div class="q-title">What percentage of 2025 advertising revenue came from Chinese-origin advertisers (Temu, Shein, etc.)? How are you hedging tariff/political risk in that channel?</div><span class="q-tag high">High</span></div>
  <div class="q-detail"><h4>Why We&rsquo;re Asking</h4><p>Estimates range 8-12% of ad revenue. A disruption could shave 150-250bps of growth. Hedging strategy (if any) matters.</p><h4>Red-Flag Answer</h4><div class="rf">&ldquo;We don&rsquo;t break out advertisers by country.&rdquo; &mdash; fair, but refusal to characterize the tail-risk exposure is concerning.</div></div></div>

  <div class="q" onclick="toggleQ(this)"><div class="q-head"><div class="q-num">14</div><div class="q-title">On the FTC antitrust case &mdash; what is your current legal team&rsquo;s view on remedy risk, particularly around Instagram or WhatsApp divestiture?</div><span class="q-tag high">High</span></div>
  <div class="q-detail"><h4>Why We&rsquo;re Asking</h4><p>Instagram alone is worth $500-700B at equivalent ad multiples. Divestiture risk is the single biggest structural threat.</p><h4>Red-Flag Answer</h4><div class="rf">&ldquo;We&rsquo;ll defend vigorously.&rdquo; &mdash; procedural, not substantive. Real honesty would be &ldquo;we see X% probability, and Y is the downside scenario.&rdquo;</div></div></div>

  <div class="q" onclick="toggleQ(this)"><div class="q-head"><div class="q-num">15</div><div class="q-title">The EU DMA and DSA are enforcement phases, not just compliance. If the Commission requires consent-only ad targeting in the EU, what is the estimated ARPP impact?</div><span class="q-tag med">Medium</span></div>
  <div class="q-detail"><h4>Why We&rsquo;re Asking</h4><p>Worst-case EU consent-only targeting could reduce EU ARPP by 15-20%. EU is ~20% of ad revenue. That&rsquo;s a 300-400bps revenue impact on Meta.</p><h4>Red-Flag Answer</h4><div class="rf">&ldquo;We&rsquo;re in ongoing dialogue with regulators.&rdquo; &mdash; no quantitative framework.</div></div></div>

  <div class="q" onclick="toggleQ(this)"><div class="q-head"><div class="q-num">16</div><div class="q-title">If the U.S. enters a recession in 2026, what is the expected variable-expense response? Are you willing to defer 2027 capex at the margin?</div><span class="q-tag med">Medium</span></div>
  <div class="q-detail"><h4>Why We&rsquo;re Asking</h4><p>Ads revenue is cyclically sensitive. Capex commitments once placed are hard to reverse. A real recession plus locked-in $135B capex is a margin hole.</p><h4>Red-Flag Answer</h4><div class="rf">&ldquo;We haven&rsquo;t modeled that scenario.&rdquo; &mdash; no downside planning.</div></div></div>

</div>

<!-- VARIANT PERCEPTION -->
<div class="category">
  <div class="cat-header"><div class="cat-num">Category V</div><div class="cat-name">Variant Perception Probes</div></div>

  <div class="q" onclick="toggleQ(this)"><div class="q-head"><div class="q-num">17</div><div class="q-title">Street consensus models FY27 operating margin at 34%. You&rsquo;ve said depreciation ramps materially. What is internal planning &mdash; 34% or higher?</div><span class="q-tag high">High</span></div>
  <div class="q-detail"><h4>Why We&rsquo;re Asking</h4><p>Direct question on the single biggest delta between LCS and Street. Their answer tells you whether management is internally aligned with the bear case or the bull case.</p><h4>Red-Flag Answer</h4><div class="rf">&ldquo;We don&rsquo;t guide to operating margin multiple years out.&rdquo; &mdash; fair dodge. Watch body language and follow-up.</div></div></div>

  <div class="q" onclick="toggleQ(this)"><div class="q-head"><div class="q-num">18</div><div class="q-title">MTIA-4 silicon: on the current roadmap, at what point do you expect internal training workloads to be majority-MTIA rather than Nvidia H-series?</div><span class="q-tag high">High</span></div>
  <div class="q-detail"><h4>Why We&rsquo;re Asking</h4><p>The &ldquo;MTIA captures Nvidia margin&rdquo; thesis depends on a clear timeline. Even directional answer (&ldquo;late 2028&rdquo;) is investible.</p><h4>Red-Flag Answer</h4><div class="rf">&ldquo;We&rsquo;ll optimize across silicon suppliers based on workload.&rdquo; &mdash; means MTIA ramp is uncertain.</div></div></div>

  <div class="q" onclick="toggleQ(this)"><div class="q-head"><div class="q-num">19</div><div class="q-title">ARPP grew 14.8% in 2025. What is internal expectation for 2026 &mdash; mid-teens sustained, deceleration to 10-12%, or continued acceleration?</div><span class="q-tag high">High</span></div>
  <div class="q-detail"><h4>Why We&rsquo;re Asking</h4><p>Second direct delta question. Street models deceleration; LCS models sustained mid-teens. Management view &mdash; even directional &mdash; is the tell.</p><h4>Red-Flag Answer</h4><div class="rf">&ldquo;ARPP reflects a number of factors and we&rsquo;re pleased with the trajectory.&rdquo; &mdash; classic non-answer.</div></div></div>

  <div class="q" onclick="toggleQ(this)"><div class="q-head"><div class="q-num">20</div><div class="q-title">If the stock trades to $1,000/share in 12 months, which thesis element will have been confirmed &mdash; ARPP acceleration, RL wind-down, MTIA ramp, or a multiple re-rating?</div><span class="q-tag std">Standard</span></div>
  <div class="q-detail"><h4>Why We&rsquo;re Asking</h4><p>Forces management to identify the single biggest value driver in their own view. Their answer reveals internal priority.</p><h4>Red-Flag Answer</h4><div class="rf">&ldquo;We don&rsquo;t target a share price; we focus on long-term value creation.&rdquo; &mdash; expected but reveals no internal view on what the market is most likely to reward.</div></div></div>

</div>

<!-- CLOSING -->
<div style="background:var(--surface);border-radius:10px;padding:24px 28px;margin-top:32px;font-size:12px;color:var(--text-muted);line-height:1.8">
  <div style="font-size:10px;text-transform:uppercase;letter-spacing:2px;color:var(--gold);font-weight:700;margin-bottom:8px">Usage</div>
  <p><strong>For in-person meetings:</strong> print the full set, rank by priority against the specific counterparty (CFO gets 5-8; CEO gets 1-4, 17-20; business messaging gets 10-12).</p>
  <p><strong>For conference Q&amp;A:</strong> lead with a variant-perception question (17-19) to differentiate from the queue.</p>
  <p><strong>For expert network calls:</strong> repurpose 2-4 (capex composition), 8 (MTIA), 12 (Ray-Ban) to former Meta infrastructure/hardware engineers.</p>
</div>

</div>
</main>

<footer>
  <div class="footer-line"></div>
  <p>Levin Capital Strategies &bull; Meta Platforms (META) Diligence Toolkit</p>
  <p style="margin-top:8px;font-size:10px;color:var(--text-muted);opacity:0.5">Last updated: April 16, 2026</p>
</footer>

<script>
function toggleQ(el){el.classList.toggle('open')}
function expandAll(){document.querySelectorAll('.q').forEach(function(q){q.classList.add('open')})}
function collapseAll(){document.querySelectorAll('.q').forEach(function(q){q.classList.remove('open')})}
function toggleDark(){document.documentElement.classList.toggle('dark');var isDark=document.documentElement.classList.contains('dark');document.querySelector('.dark-toggle').innerHTML=isDark?'&#9788;':'&#9790;';try{localStorage.setItem('lcs-dark',isDark?'1':'0')}catch(e){}}
try{if(localStorage.getItem('lcs-dark')==='1'){document.documentElement.classList.add('dark');var b=document.querySelector('.dark-toggle');if(b)b.innerHTML='&#9788;'}}catch(e){}
<\/script>
</body>
</html>`;
