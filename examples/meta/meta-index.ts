export const metaIndexHTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Meta Platforms (META) equity research portal — investment memo, interactive model, slide deck, and consensus analysis by Levin Capital Strategies">
<meta property="og:title" content="META — Meta Platforms, Inc. | Levin Capital Strategies">
<meta property="og:description" content="AI-first equity research: Family of Apps monetization, Reality Labs optionality, AI capex ROI, and consensus for META">
<meta property="og:type" content="website">
<meta property="og:image" content="https://images.unsplash.com/photo-1633675254053-d96c7668c3b8?w=1200&h=630&fit=crop">
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>📘</text></svg>">
<title>META — Meta Platforms, Inc. | Levin Capital Strategies</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --bg:#FFFFFF;--surface:#F8F9FB;--surface-2:#F1F3F6;
  --navy:#0F1729;--navy-soft:#1E3A5F;--border:#E2E5EB;--border-light:#ECEEF2;
  --gold:#B8973E;--gold-soft:rgba(184,151,62,0.08);--gold-hover:#9A7D2E;
  --steel:#2C5F7C;--green:#1A7A3A;--red:#C0392B;--forest:#1A5632;
  --text:#2D3748;--text-muted:#6B7280;--heading:#111827;
}
html{scroll-behavior:smooth}
body{font-family:'Inter',system-ui,sans-serif;background:var(--bg);color:var(--text);line-height:1.7;-webkit-font-smoothing:antialiased}
.skip-link{position:absolute;top:-100%;left:16px;background:var(--navy);color:#fff;padding:8px 16px;border-radius:0 0 6px 6px;font-size:13px;font-weight:600;z-index:9999;text-decoration:none;transition:top 0.2s}.skip-link:focus{top:0}
a{color:inherit;text-decoration:none}
.wrap{max-width:1080px;margin:0 auto;padding:0 32px}

nav{position:fixed;top:0;left:0;right:0;z-index:100;padding:14px 0;background:rgba(255,255,255,0.85);backdrop-filter:blur(16px);border-bottom:1px solid var(--border-light);transition:box-shadow 0.3s}
nav.scrolled{box-shadow:0 1px 12px rgba(0,0,0,0.06)}
nav .wrap{display:flex;justify-content:space-between;align-items:center}
.nav-brand{font-size:11px;letter-spacing:3px;color:var(--gold);text-transform:uppercase;font-weight:700}
.nav-links{display:flex;gap:16px}
.nav-links a{font-size:12px;color:var(--text-muted);font-weight:500;transition:color 0.2s}
.nav-links a:hover,.nav-links a.active{color:var(--heading)}
.nav-right{display:flex;align-items:center;gap:20px}
.nav-ticker{font-size:13px;color:var(--text-muted)}
.nav-ticker strong{color:var(--heading);font-weight:700}
.nav-cta{padding:7px 18px;border-radius:6px;font-size:12px;font-weight:600;background:var(--navy);color:#fff;letter-spacing:0.3px;transition:background 0.2s}
.nav-cta:hover{background:var(--navy-soft)}

.hero{position:relative;padding:120px 0 60px;overflow:hidden}
.hero-bg{position:absolute;inset:0;background:url('https://images.unsplash.com/photo-1633675254053-d96c7668c3b8?w=1600&q=80') center/cover;z-index:0}
.hero-bg::after{content:'';position:absolute;inset:0;background:linear-gradient(135deg,rgba(15,23,41,0.92) 0%,rgba(15,23,41,0.78) 50%,rgba(15,23,41,0.6) 100%)}
.hero .wrap{position:relative;z-index:1}
.hero-eyebrow{font-size:10px;letter-spacing:2.5px;color:var(--gold);text-transform:uppercase;font-weight:700;margin-bottom:12px}
.hero h1{font-size:clamp(24px,4vw,38px);font-weight:800;color:#fff;line-height:1.2;max-width:700px;margin-bottom:12px;letter-spacing:-0.02em}
.hero h1 span{color:var(--gold)}
.hero-sub{font-size:15px;color:rgba(255,255,255,0.65);max-width:600px;margin-bottom:24px;line-height:1.7}
.hero-badge{display:inline-flex;align-items:center;gap:8px;padding:8px 18px;border-radius:6px;background:rgba(184,151,62,0.15);border:1px solid rgba(184,151,62,0.3)}
.hero-badge-text{font-size:13px;font-weight:700;color:var(--gold);letter-spacing:0.5px}

.metrics-wrap{margin:-40px auto 48px;position:relative;z-index:2}
.metrics{display:grid;grid-template-columns:repeat(7,1fr);gap:1px;background:var(--border);border-radius:10px;overflow:hidden;box-shadow:0 1px 8px rgba(0,0,0,0.04)}
.metric{background:var(--bg);padding:18px 12px;text-align:center}
.metric-val{font-size:20px;font-weight:800;color:var(--heading);letter-spacing:-0.02em}
.metric-val.gold{color:var(--gold)}.metric-val.green{color:var(--green)}.metric-val.steel{color:var(--steel)}
.metric-val.forest{color:var(--forest)}.metric-val.neg{color:var(--red)}
.metric-lbl{font-size:8px;color:var(--text-muted);margin-top:3px;text-transform:uppercase;letter-spacing:1.2px;font-weight:600}

.bluf{background:var(--surface);padding:48px 0;border-top:1px solid var(--border-light);border-bottom:1px solid var(--border-light)}
.bluf p{font-size:15px;line-height:1.85;margin-bottom:16px;max-width:800px}
.bluf strong{color:var(--heading)}

.section{padding:48px 0}
.section-label{font-size:10px;letter-spacing:2.5px;color:var(--gold);text-transform:uppercase;font-weight:700;margin-bottom:8px}
.section h2{font-size:24px;font-weight:800;color:var(--heading);letter-spacing:-0.02em;margin-bottom:8px}
.section .lead{font-size:14px;color:var(--text-muted);max-width:640px;margin-bottom:32px}
.thesis-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
.thesis-card{background:var(--bg);border:1px solid var(--border);border-radius:12px;padding:28px;position:relative;overflow:hidden;transition:all 0.2s}
.thesis-card:hover{box-shadow:0 4px 20px rgba(0,0,0,0.06)}
.thesis-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px}
.thesis-card:nth-child(1)::before{background:var(--forest)}
.thesis-card:nth-child(2)::before{background:var(--steel)}
.thesis-card:nth-child(3)::before{background:var(--gold)}
.thesis-num{font-size:10px;font-weight:800;color:var(--gold);letter-spacing:1px;margin-bottom:8px}
.thesis-card h3{font-size:16px;font-weight:700;color:var(--heading);margin-bottom:8px}
.thesis-card p{font-size:13px;color:var(--text-muted);line-height:1.7}
.thesis-stat{display:inline-block;margin-top:12px;padding:4px 12px;border-radius:6px;font-size:12px;font-weight:700}
.thesis-stat.green{background:rgba(26,122,58,0.08);color:var(--green)}
.thesis-stat.steel{background:rgba(44,95,124,0.08);color:var(--steel)}
.thesis-stat.gold{background:var(--gold-soft);color:var(--gold)}

.module-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:32px}
.module-card{display:block;padding:24px;border:1px solid var(--border);border-radius:10px;transition:all 0.2s;text-decoration:none}
.module-card:hover{border-color:var(--gold);box-shadow:0 2px 12px rgba(0,0,0,0.04)}
.module-card h4{font-size:14px;font-weight:700;color:var(--heading);margin-bottom:4px}
.module-card p{font-size:12px;color:var(--text-muted)}

.quote-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
.quote-card{background:var(--surface);border-radius:10px;padding:24px;position:relative}
.quote-card::after{content:'"';position:absolute;right:16px;top:8px;font-size:40px;color:var(--border);font-family:serif}
.quote-firm{font-size:10px;font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px}
.quote-firm.a{color:var(--red)}.quote-firm.b{color:var(--steel)}.quote-firm.c{color:var(--forest)}
.quote-card em{font-size:13px;color:var(--heading);font-style:italic;line-height:1.6;display:block;margin-bottom:8px}
.quote-meta{font-size:11px;color:var(--text-muted)}

footer{padding:40px 0;text-align:center;border-top:1px solid var(--border-light)}
.footer-line{width:40px;height:2px;background:var(--gold);margin:0 auto 16px}
footer p{font-size:11px;color:var(--text-muted);line-height:1.8}

@media(max-width:900px){
  .metrics{grid-template-columns:repeat(4,1fr)}
  .thesis-grid,.quote-grid{grid-template-columns:1fr}
  .module-grid{grid-template-columns:1fr}
}
@media(max-width:600px){
  .metrics{grid-template-columns:repeat(2,1fr)}
  .nav-links,.nav-ticker{display:none}
}
.earnings-box{background:var(--navy);border-radius:12px;padding:32px;color:#fff;margin-bottom:48px}
.earnings-box-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:24px;flex-wrap:wrap;gap:12px}
.earnings-box-header h3{font-size:18px;font-weight:800;color:#fff;letter-spacing:-0.02em}
.earnings-badge{padding:6px 14px;border-radius:6px;font-size:11px;font-weight:700;letter-spacing:0.5px;text-transform:uppercase}
.earnings-badge.catalyst{background:rgba(184,151,62,0.2);color:var(--gold);border:1px solid rgba(184,151,62,0.3)}
.earnings-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-bottom:24px}
.earnings-stat{background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);border-radius:8px;padding:16px;text-align:center}
.earnings-stat .e-val{font-size:22px;font-weight:800;color:#fff;letter-spacing:-0.02em}
.earnings-stat .e-val.gold{color:var(--gold)}
.earnings-stat .e-lbl{font-size:9px;text-transform:uppercase;letter-spacing:1.2px;color:rgba(255,255,255,0.5);margin-top:4px;font-weight:600}
.earnings-stat .e-delta{font-size:11px;font-weight:600;margin-top:4px}
.earnings-stat .e-delta.up{color:#4ade80}
.earnings-stat .e-delta.down{color:#f87171}
.earnings-whisper{display:grid;grid-template-columns:1fr 1fr;gap:20px}
.whisper-card{background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:8px;padding:20px}
.whisper-card h4{font-size:12px;font-weight:700;color:var(--gold);text-transform:uppercase;letter-spacing:1px;margin-bottom:12px}
.whisper-card p{font-size:13px;color:rgba(255,255,255,0.7);line-height:1.7}
.whisper-card strong{color:#fff}
@media(max-width:900px){.earnings-grid{grid-template-columns:repeat(2,1fr)}.earnings-whisper{grid-template-columns:1fr}}
.dark-toggle{background:none;border:1px solid var(--border);border-radius:6px;padding:4px 8px;font-size:12px;cursor:pointer;color:var(--text-muted);font-family:Inter,sans-serif;transition:all 0.2s;line-height:1}
.dark-toggle:hover{border-color:var(--gold);color:var(--gold)}
html.dark{--bg:#0F1218;--surface:#1A1E27;--surface-2:#242830;--border:#2D3340;--border-light:#252A35;--text:#D1D5DB;--text-muted:#9CA3AF;--heading:#F3F4F6;--navy:#0A0E16;--navy-soft:#1A2440}
html.dark body{background:var(--bg)}
html.dark nav{background:rgba(15,18,24,0.9);border-bottom-color:var(--border)}
html.dark .metric{background:var(--bg)}
html.dark .metrics{background:var(--border)}
html.dark .thesis-card,html.dark .module-card,html.dark .quote-card{background:var(--surface);border-color:var(--border)}
html.dark .bluf{background:var(--surface);border-color:var(--border)}
html.dark footer{border-top-color:var(--border)}
@media print{
  nav,.dark-toggle{display:none!important}
  .wrap{max-width:100%;padding:0 20px}
  .hero{padding:40px 0 30px;print-color-adjust:exact;-webkit-print-color-adjust:exact}
  .hero-bg,.hero-bg::after{print-color-adjust:exact;-webkit-print-color-adjust:exact}
  .metrics-wrap{margin-top:0}
  .metrics{break-inside:avoid;grid-template-columns:repeat(4,1fr)}
  .section{padding:24px 0}
  body{font-size:11pt;line-height:1.6}
  .section h2{font-size:16pt;page-break-after:avoid}
  .thesis-card{break-inside:avoid;print-color-adjust:exact;-webkit-print-color-adjust:exact}
  footer{margin-top:24px}
}
</style>
</head>
<body>
<a href="#main-content" class="skip-link">Skip to main content</a>

<nav id="nav" aria-label="Main navigation">
<div class="wrap">
  <a href="/lcs/" class="nav-brand">Levin Capital Strategies</a>
  <div class="nav-links">
    <a href="/lcs/meta/" class="active">Overview</a>
    <a href="/lcs/meta/memo.html">Memo</a>
    <a href="/lcs/meta/presentation.html">Deck</a>
    <a href="/lcs/meta/model.html">Model</a>
    <a href="/lcs/meta/consensus.html">Consensus</a>
    <a href="/lcs/meta/questions.html">Questions</a>
  </div>
  <div class="nav-right">
    <button class="dark-toggle" onclick="toggleDark()" title="Toggle dark mode" aria-label="Toggle dark mode">&#9790;</button>
    <span class="nav-ticker">NASDAQ: <strong>META</strong> $674.20</span>
    <a href="/lcs/meta/memo.html" class="nav-cta">View Memo</a>
  </div>
</div>
</nav>

<main id="main-content">
<section class="hero">
  <div class="hero-bg"></div>
  <div class="wrap">
    <div class="hero-eyebrow">NASDAQ &bull; Mega-Cap Internet &amp; Advertising</div>
    <h1>Meta Platforms: The <span>AI-Monetization</span> Compounder</h1>
    <p class="hero-sub">A $135B capex year is being priced as a margin event. It&rsquo;s actually a demand signal. Advantage+ lift, ARPP inflection, and in-house silicon create a 3-year algorithmic revenue step-up the Street hasn&rsquo;t modeled.</p>
    <div style="display:flex;gap:12px;flex-wrap:wrap">
      <div class="hero-badge" title="Consensus mean 42-analyst price target per StockAnalysis (April 2026)">
        <span class="hero-badge-text">Street PT $840 (+25%)</span>
      </div>
      <div class="hero-badge" title="LCS DCF/Multiples blended model &mdash; see Interactive Model page" style="background:rgba(26,86,50,0.2);border-color:rgba(26,86,50,0.4)">
        <span class="hero-badge-text" style="color:var(--forest)">LCS Model $810 (+20%)</span>
      </div>
    </div>
  </div>
</section>

<div class="metrics-wrap wrap">
  <div class="metrics">
    <div class="metric"><div class="metric-val" title="NASDAQ closing price, April 16, 2026">$674.20</div><div class="metric-lbl">Price</div></div>
    <div class="metric"><div class="metric-val gold" title="Computed: price x 2.53B shares (per Q4 2025 10-K)">$1.70T</div><div class="metric-lbl">Market Cap</div></div>
    <div class="metric"><div class="metric-val steel" title="Meta Q4 2025 press release: FY25 revenue">$200.97B</div><div class="metric-lbl">FY25 Revenue</div></div>
    <div class="metric"><div class="metric-val" title="Meta Q4 2025 press release: FY25 diluted EPS">$23.49</div><div class="metric-lbl">FY25 EPS</div></div>
    <div class="metric"><div class="metric-val green" title="Meta Q4 2025 press release: DAP December 2025 average">3.58B</div><div class="metric-lbl">Daily Active People</div></div>
    <div class="metric"><div class="metric-val forest" title="FY2026 capex guidance midpoint ($115-135B)">$125B</div><div class="metric-lbl">FY26E Capex</div></div>
    <div class="metric"><div class="metric-val gold" title="Price $674 / FY26E Consensus EPS ~$30">22.5x</div><div class="metric-lbl">NTM P/E</div></div>
  </div>
  <p style="text-align:center;font-size:10px;color:var(--text-muted);margin-top:6px;margin-bottom:0;opacity:0.6">Hover any metric for data source</p>
</div>

<section class="bluf">
<div class="wrap">
  <p><strong>Meta trades at 22.5x NTM earnings with 20%+ organic revenue growth and 40%+ operating margins</strong> &mdash; GARP pricing for a business the market has labelled a capex story. The consensus case (BUY, mean PT $840) already incorporates the high-level bull points: ARPP acceleration, capex-as-moat, Reality Labs wind-down. Those aren&rsquo;t variant &mdash; they&rsquo;re agreed. The LCS edge lives one layer deeper, in three specific, testable, non-consensus claims.</p>
  <p><strong>First: MTIA silicon displaces Nvidia faster and harder than the Street models.</strong> Sell-side carries 5-15% MTIA mix by 2028. Our read of Meta&rsquo;s compute-mix disclosures and Llama 4 training stack says 35-40%, inference-front-loaded. At Nvidia&rsquo;s 70-80% gross margin, a 25-point swing captures <strong>$28-34B of annualized effective capex reduction by 2028</strong>, against Street $8-12B. That is $18-22B of incremental FCF and $6-8 of EPS the consensus hasn&rsquo;t modeled.</p>
  <p><strong>Second: Family of Apps operating margin expands, it doesn&rsquo;t compress.</strong> The Street models 300-500bps of FoA margin compression on capex depreciation. That analysis misses the $4-6B of AI-led opex displacement in ad ops, trust &amp; safety, and customer support. Margin holds at 55% rather than falling to 50%. <strong>Third: WhatsApp paid messaging reaches $8-10B by 2028</strong>, not the $2-3B most models carry, off a $3.2B-run-rate launch point [IR]. BUY, 12-month PT $810 (+20%).</p>
</div>
</section>

<section class="section">
<div class="wrap">
  <div class="section-label">Investment Thesis</div>
  <h2>Three Pillars of the META Opportunity</h2>
  <p class="lead">Monetization acceleration, infrastructure arbitrage, and the Reality Labs wind-down create an asymmetric setup the Street is mispricing.</p>

  <div class="thesis-grid">
    <div class="thesis-card">
      <div class="thesis-num">01</div>
      <h3>MTIA &rarr; Nvidia Displacement Is Faster</h3>
      <p>Street models 5-15% MTIA share by 2028. We think <strong>35-40%</strong> &mdash; front-loaded in inference &mdash; is the right read of Meta&rsquo;s compute-mix disclosures and Llama 4 training stack. $28-34B of annualized effective capex reduction by 2028, vs. Street&rsquo;s $8-12B. Testable at Q3&rsquo;26 earnings.</p>
      <span class="thesis-stat green">$18-22B FCF &Delta;</span>
    </div>
    <div class="thesis-card">
      <div class="thesis-num">02</div>
      <h3>FoA Margin Expands, Doesn&rsquo;t Compress</h3>
      <p>Street: FoA op margin compresses 300-500bps on capex depreciation. LCS: AI-led opex displacement in ad-ops, trust &amp; safety, and customer support offsets depreciation drag. $4-6B annual opex saved = 200-300bps. <strong>FoA margin holds at 55%</strong>, not falls to 50%. Testable: FY26 FoA margin prints &gt;55.5%.</p>
      <span class="thesis-stat steel">55% vs. 50% Street</span>
    </div>
    <div class="thesis-card">
      <div class="thesis-num">03</div>
      <h3>WhatsApp Paid Messaging: $8-10B by &rsquo;28</h3>
      <p>Q4&rsquo;25 Family-of-Apps Other Rev: <strong>$801M +54% YoY [IR]</strong> &mdash; $3.2B run-rate. Street models $2-3B by FY28 as subscription-like. Actual trajectory, even at half the current growth rate, exits &rsquo;28 at $10-12B. <strong>$45-55 per share of missed revenue value</strong> at 22x multiple.</p>
      <span class="thesis-stat gold">$3.2B &rarr; $10B Trajectory</span>
    </div>
  </div>
</div>
</section>

<section class="section" style="padding-top:0">
<div class="wrap">
  <div class="earnings-box">
    <div class="earnings-box-header">
      <h3>Q1 2026 Earnings Setup</h3>
      <span class="earnings-badge catalyst">Late April 2026 Catalyst</span>
    </div>
    <div class="earnings-grid">
      <div class="earnings-stat">
        <div class="e-val gold">$30.00</div>
        <div class="e-lbl">FY26E EPS (Cons.)</div>
        <div class="e-delta up">+28% YoY</div>
      </div>
      <div class="earnings-stat">
        <div class="e-val">$55.0B</div>
        <div class="e-lbl">Q1 Rev Guide Mid</div>
        <div class="e-delta up">+18% YoY</div>
      </div>
      <div class="earnings-stat">
        <div class="e-val gold">$125B</div>
        <div class="e-lbl">FY26E Capex Mid</div>
        <div class="e-delta up">+72% YoY</div>
      </div>
      <div class="earnings-stat">
        <div class="e-val">3.58B</div>
        <div class="e-lbl">DAP (Dec&rsquo;25)</div>
        <div class="e-delta up">+7% YoY</div>
      </div>
    </div>
    <div class="earnings-whisper">
      <div class="whisper-card">
        <h4>What to Watch</h4>
        <p><strong>ARPP trajectory</strong> is the most under-modeled variable. Q4&rsquo;25 ad impressions grew +15% with price +10% &mdash; a combination that shouldn&rsquo;t be durable at this DAP scale unless AI ranking is structurally lifting yield. A Q1 print of <strong>+13-15% ad pricing</strong> confirms the Advantage+ thesis. <strong>Reality Labs guidance</strong> language on &ldquo;peak losses in 2026&rdquo; is the second tell &mdash; any hard wind-down date is a multiple-expansion catalyst.</p>
      </div>
      <div class="whisper-card">
        <h4>Key Risks into Print</h4>
        <p><strong>2026 total expense guide above $135B</strong> is already partially priced, but anything pushing opex growth into the high-teens resets margin expectations lower. <strong>China advertiser exposure</strong> (Temu, Shein) remains ~10% of ad revenue &mdash; any political/tariff disruption flags here. Watch <strong>Ray-Ban / Orion unit economics</strong> commentary &mdash; if disclosed losses per device exceed $1K, the RL wind-down thesis slips a year.</p>
      </div>
    </div>
  </div>
</div>
</section>

<section class="section">
<div class="wrap">
  <div class="section-label" style="margin-top:48px">Research Portal</div>
  <h2>Complete Analysis</h2>
  <div class="module-grid">
    <a href="/lcs/meta/memo.html" class="module-card">
      <h4>Investment Memo &rarr;</h4>
      <p>SCQA-format deep dive: Family of Apps monetization, Reality Labs wind-down economics, AI capex ROI framework</p>
    </a>
    <a href="/lcs/meta/presentation.html" class="module-card">
      <h4>Slide Deck &rarr;</h4>
      <p>14-slide institutional presentation with segment analysis, valuation frameworks, and catalyst calendar</p>
    </a>
    <a href="/lcs/meta/model.html" class="module-card">
      <h4>Interactive Model &rarr;</h4>
      <p>12 sliders across ARPP, DAP, ad pricing, RL losses, capex, and buybacks. Bull / Base / Street / Bear presets.</p>
    </a>
    <a href="/lcs/meta/consensus.html" class="module-card">
      <h4>Consensus View &rarr;</h4>
      <p>61 Buy / 6 Hold / 0 Sell. Median PT $856. Where LCS variant perception diverges from the Street.</p>
    </a>
    <a href="/lcs/meta/questions.html" class="module-card">
      <h4>Management Questions &rarr;</h4>
      <p>20 hand-crafted probes organized by Strategy / Capital / Competitive / Risk / Variant Perception. Print-ready.</p>
    </a>
  </div>
</div>
</section>

<section class="section" style="background:var(--surface);border-top:1px solid var(--border-light);border-bottom:1px solid var(--border-light)">
<div class="wrap">
  <div class="section-label">Sell-Side Views</div>
  <h2>What the Street Is Saying</h2>
  <div class="quote-grid" style="margin-top:24px">
    <div class="quote-card">
      <div class="quote-firm a">Morgan Stanley &bull; Overweight &bull; PT $875</div>
      <em>&ldquo;Meta&rsquo;s AI-driven ad ranking improvements are translating into incremental advertiser ROI, and the ARPP trajectory looks increasingly structural rather than cyclical.&rdquo;</em>
      <div class="quote-meta">Brian Nowak &middot; Overweight &middot; PT $875 [Consensus]</div>
    </div>
    <div class="quote-card">
      <div class="quote-firm b">Jefferies &bull; Buy &bull; PT $925</div>
      <em>&ldquo;The market is pricing Meta&rsquo;s capex as a margin event. Backlog of AI compute demand &mdash; internal and external &mdash; supports the ramp. FCF troughs in &rsquo;26, not the business.&rdquo;</em>
      <div class="quote-meta">Brent Thill &middot; Buy &middot; PT $925 [Consensus]</div>
    </div>
    <div class="quote-card">
      <div class="quote-firm c">Wells Fargo &bull; Overweight &bull; PT $860</div>
      <em>&ldquo;Guiding Q1 revenue to $53.5-56.5B &mdash; the midpoint implies 32% growth [Q4 PR]. With DAP at 3.58B, the monetization runway to 2028 is the cleanest in mega-cap tech.&rdquo;</em>
      <div class="quote-meta">Ken Gawrelski &middot; Overweight &middot; PT $860 [Consensus]</div>
    </div>
  </div>
</div>
</section>
</main>

<footer>
  <div class="footer-line"></div>
  <p>Levin Capital Strategies &bull; Meta Platforms (META) Equity Research Portal</p>
  <p>Sources: Meta Q4 2025 Press Release [IR], Meta FY2025 10-K [SEC], StockAnalysis consensus [Market], MacroTrends, Q4 2025 earnings call transcript [Transcript]. For internal use only.</p>
  <p style="margin-top:8px;font-size:10px;color:var(--text-muted);opacity:0.5">Last updated: April 16, 2026</p>
</footer>

<script>
window.addEventListener('scroll',function(){document.getElementById('nav').classList.toggle('scrolled',window.scrollY>40)});
function toggleDark(){document.documentElement.classList.toggle('dark');var isDark=document.documentElement.classList.contains('dark');document.querySelector('.dark-toggle').innerHTML=isDark?'&#9788;':'&#9790;';try{localStorage.setItem('lcs-dark',isDark?'1':'0')}catch(e){}}
try{if(localStorage.getItem('lcs-dark')==='1'){document.documentElement.classList.add('dark');var b=document.querySelector('.dark-toggle');if(b)b.innerHTML='&#9788;'}}catch(e){}
<\/script>
</body>
</html>`;
