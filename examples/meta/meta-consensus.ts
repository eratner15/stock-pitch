export const metaConsensusHTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Meta Platforms (META) sell-side consensus — analyst ratings, price targets, LCS variant perception, and peer valuation comparison.">
<meta property="og:title" content="META Consensus | Levin Capital Strategies">
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>📘</text></svg>">
<title>META Consensus &mdash; Levin Capital Strategies</title>
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
.wrap{max-width:1200px;margin:0 auto;padding:0 32px}
nav{position:fixed;top:0;left:0;right:0;z-index:100;padding:14px 0;background:rgba(255,255,255,0.85);backdrop-filter:blur(16px);border-bottom:1px solid var(--border-light)}
nav .wrap{display:flex;justify-content:space-between;align-items:center}
.nav-brand{font-size:11px;letter-spacing:3px;color:var(--gold);text-transform:uppercase;font-weight:700}
.nav-links{display:flex;align-items:center;gap:18px}
.nav-links a{font-size:12px;font-weight:500;color:var(--text-muted);padding:4px 0;border-bottom:2px solid transparent}
.nav-links a:hover{color:var(--heading)}
.nav-links a.active{color:var(--heading);font-weight:700;border-bottom-color:var(--gold)}
.nav-right{display:flex;align-items:center;gap:20px}
.nav-ticker{font-size:13px;color:var(--text-muted)}
.nav-ticker strong{color:var(--heading);font-weight:700}
.header{padding:120px 0 40px;text-align:center;border-bottom:1px solid var(--border-light);margin-bottom:48px}
.eyebrow{font-size:10px;letter-spacing:3px;color:var(--gold);text-transform:uppercase;font-weight:700;margin-bottom:16px}
h1{font-size:clamp(26px,4vw,36px);font-weight:800;color:var(--heading);line-height:1.2;letter-spacing:-0.03em;margin-bottom:12px}
.subtitle{font-size:14px;color:var(--text-muted)}

.strip{background:var(--surface);border-radius:12px;padding:28px;margin-bottom:48px;display:grid;grid-template-columns:repeat(5,1fr);gap:24px;border:1px solid var(--border-light)}
.strip-item{text-align:center}
.strip-v{font-size:28px;font-weight:800;color:var(--heading);letter-spacing:-0.02em}
.strip-v.gold{color:var(--gold)}.strip-v.green{color:var(--green)}.strip-v.red{color:var(--red)}
.strip-l{font-size:10px;color:var(--text-muted);margin-top:4px;letter-spacing:1px;text-transform:uppercase;font-weight:600}
.strip-sub{font-size:11px;color:var(--text-muted);margin-top:2px}

.section{padding:24px 0 48px}
.section-label{font-size:10px;letter-spacing:2.5px;color:var(--gold);text-transform:uppercase;font-weight:700;margin-bottom:8px}
.section h2{font-size:22px;font-weight:800;color:var(--heading);letter-spacing:-0.02em;margin-bottom:16px}

.rate-bar{display:flex;height:40px;border-radius:8px;overflow:hidden;margin-bottom:8px;border:1px solid var(--border-light)}
.rate-seg{display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:12px}
.rate-seg.buy{background:var(--forest)}
.rate-seg.hold{background:var(--steel)}
.rate-seg.sell{background:var(--red)}
.rate-legend{display:flex;gap:24px;justify-content:center;font-size:12px;color:var(--text-muted);margin-top:8px}

.analyst-table{width:100%;border-collapse:collapse;margin-top:16px;font-size:13px}
.analyst-table th{padding:12px;font-size:10px;text-transform:uppercase;letter-spacing:1px;color:var(--text-muted);font-weight:600;text-align:center;border-bottom:2px solid var(--heading);background:var(--surface)}
.analyst-table th:first-child{text-align:left}
.analyst-table td{padding:10px 12px;text-align:center;border-bottom:1px solid var(--border-light)}
.analyst-table td:first-child{text-align:left;color:var(--heading);font-weight:500}
.badge-buy{background:rgba(26,86,50,0.12);color:var(--forest);padding:3px 10px;border-radius:4px;font-size:11px;font-weight:700}
.badge-hold{background:rgba(44,95,124,0.12);color:var(--steel);padding:3px 10px;border-radius:4px;font-size:11px;font-weight:700}

.two-col-cards{display:grid;grid-template-columns:1fr 1fr;gap:20px}
.kt-card{background:var(--surface);border-radius:10px;padding:24px;border:1px solid var(--border-light)}
.kt-card h3{font-size:13px;font-weight:700;color:var(--heading);margin-bottom:12px}
.kt-card ul{list-style:none;padding:0}
.kt-card ul li{padding-left:18px;position:relative;margin-bottom:10px;font-size:13px;line-height:1.6}
.kt-card ul li::before{content:"&#9656;";position:absolute;left:0;color:var(--gold);font-size:11px;top:4px}
.kt-card.variant{border-left:3px solid var(--gold);background:var(--gold-soft)}

.navy-box{background:var(--navy);border-radius:12px;padding:36px;color:#fff;margin-bottom:32px}
.navy-box h3{font-size:18px;font-weight:800;margin-bottom:16px}
.navy-box p{font-size:14px;color:rgba(255,255,255,0.75);line-height:1.7;margin-bottom:16px}
.navy-box strong{color:#fff}
.navy-box .delta-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:16px}
.navy-box .delta-card{background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);border-radius:8px;padding:16px}
.navy-box .delta-card h4{font-size:11px;font-weight:700;color:var(--gold);text-transform:uppercase;letter-spacing:1px;margin-bottom:8px}
.navy-box .delta-card p{font-size:12px;color:rgba(255,255,255,0.8);margin:0;line-height:1.6}

.source-note{font-size:11px;color:var(--text-muted);font-style:italic;margin-top:8px}

footer{padding:40px 0;text-align:center;border-top:1px solid var(--border-light)}
.footer-line{width:40px;height:2px;background:var(--gold);margin:0 auto 16px}
footer p{font-size:11px;color:var(--text-muted);line-height:1.8}
.dark-toggle{background:none;border:1px solid var(--border);border-radius:6px;padding:4px 8px;font-size:12px;cursor:pointer;color:var(--text-muted);font-family:Inter,sans-serif}
html.dark{--bg:#0F1218;--surface:#1A1E27;--border:#2D3340;--border-light:#252A35;--text:#D1D5DB;--text-muted:#9CA3AF;--heading:#F3F4F6;--navy:#0A0E16}
html.dark body{background:var(--bg)}
html.dark nav{background:rgba(15,18,24,0.9);border-bottom-color:var(--border)}

@media(max-width:900px){.strip{grid-template-columns:repeat(2,1fr)}.two-col-cards{grid-template-columns:1fr}}
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
        <a href="/lcs/meta/consensus.html" class="active">Consensus</a>
        <a href="/lcs/meta/questions.html">Questions</a>
      </div>
      <span class="nav-ticker">NASDAQ: <strong>META</strong> $674.20</span>
    </div>
  </div>
</nav>

<main>
<header class="header">
  <div class="eyebrow">Consensus &amp; Variant Perception &bull; April 16, 2026</div>
  <h1>META &mdash; Where the Street Is Right, Where It&rsquo;s Wrong</h1>
  <p class="subtitle">42-78 analyst coverage &bull; Consensus Buy &bull; Median PT $856 &bull; LCS $810</p>
</header>

<div class="wrap">

<!-- CONSENSUS STRIP -->
<div class="strip">
  <div class="strip-item">
    <div class="strip-v forest" style="color:var(--forest)">BUY</div>
    <div class="strip-l">Consensus Rating</div>
    <div class="strip-sub" title="StockAnalysis.com 39-analyst aggregation [Consensus]">per 39 analysts</div>
  </div>
  <div class="strip-item">
    <div class="strip-v gold">$840</div>
    <div class="strip-l">Mean PT</div>
    <div class="strip-sub" title="42-analyst average per StockAnalysis.com [Consensus]">vs. $674 price</div>
  </div>
  <div class="strip-item">
    <div class="strip-v">$856</div>
    <div class="strip-l">Median PT</div>
    <div class="strip-sub" title="78-analyst universe median [Consensus]">+27% upside</div>
  </div>
  <div class="strip-item">
    <div class="strip-v">$700 &ndash; $1,117</div>
    <div class="strip-l">PT Range</div>
    <div class="strip-sub">Low / High</div>
  </div>
  <div class="strip-item">
    <div class="strip-v">78</div>
    <div class="strip-l">Analysts</div>
    <div class="strip-sub">Public coverage</div>
  </div>
</div>

<!-- RATING DISTRIBUTION -->
<div class="section">
  <div class="section-label">Rating Distribution</div>
  <h2>78 Analysts, 78% Buy-Rated</h2>
  <div class="rate-bar">
    <div class="rate-seg buy" style="width:78.2%">61 Buy (78%)</div>
    <div class="rate-seg hold" style="width:7.7%">6 Hold</div>
    <div class="rate-seg" style="width:14.1%;background:var(--text-muted)">11 N/A</div>
  </div>
  <div class="rate-legend">
    <span>Buy: 61 (78.2%)</span>
    <span>Hold: 6 (7.7%)</span>
    <span>Sell: 0 (0.0%)</span>
    <span style="color:var(--gold)">Sell-rate of 0% is unusual at $1.7T scale</span>
  </div>
  <p class="source-note">Source: Public.com aggregator pulled April 2026 [Consensus]. Zero Sell ratings in the full 78-analyst universe is a notable tell &mdash; the disagreement across the Street is about <em>magnitude of upside</em>, not direction.</p>
</div>

<!-- ANALYST TABLE -->
<div class="section">
  <div class="section-label">Analyst Ratings Detail</div>
  <h2>Top-Ten Coverage</h2>
  <table class="analyst-table">
    <thead>
      <tr><th>Analyst</th><th>Firm</th><th>Rating</th><th>PT (approx.)</th><th>Upside</th><th>Thesis direction</th></tr>
    </thead>
    <tbody>
      <tr><td>Doug Anmuth</td><td>JPMorgan</td><td><span class="badge-buy">Overweight</span></td><td>~$825</td><td class="pos">+22%</td><td>Advantage+ penetration and AI ranking durability</td></tr>
      <tr><td>Mark Mahaney</td><td>Evercore ISI</td><td><span class="badge-buy">Outperform</span></td><td>~$900</td><td class="pos">+33%</td><td>Capex-to-ROIC conversion; best-in-class scale</td></tr>
      <tr><td>Brent Thill</td><td>Jefferies</td><td><span class="badge-buy">Buy</span></td><td>~$910</td><td class="pos">+35%</td><td>AI compute backlog, internal + external, supports capex</td></tr>
      <tr><td>Brian Nowak</td><td>Morgan Stanley</td><td><span class="badge-buy">Overweight</span></td><td>~$825</td><td class="pos">+22%</td><td>ARPP sustainability; Llama ranking structural</td></tr>
      <tr><td>Ken Gawrelski</td><td>Wells Fargo</td><td><span class="badge-buy">Overweight</span></td><td>~$850</td><td class="pos">+26%</td><td>Q1 guide strength; monetization runway</td></tr>
      <tr><td>Justin Post</td><td>BofA</td><td><span class="badge-buy">Buy</span></td><td>~$885</td><td class="pos">+31%</td><td>Margin resilience; RL trajectory improving</td></tr>
      <tr><td>Eric Sheridan</td><td>Goldman Sachs</td><td><span class="badge-buy">Buy</span></td><td>~$835</td><td class="pos">+24%</td><td>Disciplined; flags RL and EU regulatory risks</td></tr>
      <tr><td>Ron Josey</td><td>Citi</td><td><span class="badge-buy">Buy</span></td><td>~$860</td><td class="pos">+28%</td><td>Ads growth plus business-messaging optionality</td></tr>
      <tr><td>Mark Shmulik</td><td>Bernstein</td><td><span class="badge-buy">Outperform</span></td><td>~$870</td><td class="pos">+29%</td><td>AI-led ad-format re-rating; DAP &rarr; commerce</td></tr>
      <tr><td>Ross Sandler</td><td>Barclays</td><td><span class="badge-buy">Overweight</span></td><td>~$790</td><td class="pos">+17%</td><td>Cautiously constructive; awaits capex-ROI visibility</td></tr>
    </tbody>
  </table>
  <p class="source-note">Sources: MarketBeat, StockAnalysis.com, Yahoo Finance analyst pages pulled April 2026 [Consensus]. PTs shown are <strong>approximate</strong> recent published targets (sell-side revises intra-quarter); ratings reflect most recent publicly observable stance. Theses are paraphrased directional summaries, not verbatim quotes.</p>
</div>

<!-- WHERE THE STREET IS WRONG -->
<div class="section">
  <div class="section-label">Variant Perception</div>
  <h2>Where Consensus Is Directionally Right, Magnitude Wrong</h2>
  <div class="navy-box">
    <p>78% of analysts rate META Buy with mean PT $840. Direction is agreed. The LCS edge is in magnitude &mdash; three specific, testable deltas where the Street&rsquo;s dollar estimates lag the underlying run-rate:</p>
    <div class="delta-grid">
      <div class="delta-card">
        <h4>MTIA &rarr; Nvidia Displacement (FY28)</h4>
        <p>Street: <strong>5-15% mix</strong>, $8-12B capex saved &bull; LCS: <strong>35-40% mix</strong>, $28-34B saved</p>
        <p style="margin-top:8px">Testable: Q3&rsquo;26 compute-mix disclosure. Implied value: <strong>$35-45/share</strong>.</p>
      </div>
      <div class="delta-card">
        <h4>FoA Op Margin (FY28)</h4>
        <p>Street: <strong>50-52%</strong> (compression) &bull; LCS: <strong>54-55%</strong> (AI-led opex displacement)</p>
        <p style="margin-top:8px">Testable: FY26 FoA margin prints &gt;55.5%. Implied value: <strong>$40-55/share</strong>.</p>
      </div>
      <div class="delta-card">
        <h4>WhatsApp Paid Messaging (FY28)</h4>
        <p>Street: <strong>$2-3B</strong> (subscription-like) &bull; LCS: <strong>$8-10B</strong> (run-rate off $3.2B launch)</p>
        <p style="margin-top:8px">Testable: FoA Other Rev exits &rsquo;26 &gt;$5B run-rate. Implied value: <strong>$45-55/share</strong>.</p>
      </div>
    </div>
  </div>
</div>

<!-- PEER COMP -->
<div class="section">
  <div class="section-label">Peer Valuation</div>
  <h2>Persistent Alphabet Discount</h2>
  <table class="analyst-table">
    <thead>
      <tr><th>Company</th><th>Mkt Cap</th><th>NTM Rev</th><th>NTM Gwth</th><th>Op Margin</th><th>NTM P/E</th><th>EV/EBITDA</th><th>vs. META</th></tr>
    </thead>
    <tbody>
      <tr style="background:var(--gold-soft)"><td><strong>META</strong></td><td>$1.70T</td><td>$238B</td><td class="pos">+18%</td><td>39%</td><td>22.5x</td><td>15.6x</td><td>&mdash;</td></tr>
      <tr><td>Alphabet (GOOGL)</td><td>$2.85T</td><td>$405B</td><td class="pos">+13%</td><td>32%</td><td>27.5x</td><td>25.3x</td><td class="pos">+22% premium</td></tr>
      <tr><td>Amazon (AMZN)</td><td>$2.51T</td><td>$740B</td><td class="pos">+14%</td><td>11%</td><td>30.1x</td><td>11.0x</td><td class="pos">+34% on P/E</td></tr>
      <tr><td>Reddit (RDDT)</td><td>$35B</td><td>$2.1B</td><td class="pos">+42%</td><td>18%</td><td>36.6x</td><td>28.0x</td><td class="pos">+63% premium</td></tr>
      <tr><td>Pinterest (PINS)</td><td>$22B</td><td>$4.2B</td><td class="pos">+13%</td><td>21%</td><td>17.5x</td><td>11.0x</td><td class="neg">-22% discount</td></tr>
      <tr><td>Snap (SNAP)</td><td>$17B</td><td>$6.5B</td><td class="pos">+12%</td><td class="neg">(5%)</td><td>N/M</td><td>7.5x</td><td class="neg">-52% discount</td></tr>
      <tr style="color:var(--text-muted);font-weight:700"><td>Peer Median (ex-META)</td><td>&mdash;</td><td>&mdash;</td><td>+13.5%</td><td>18%</td><td>27.5x</td><td>11.0x</td><td>&mdash;</td></tr>
    </tbody>
  </table>
  <p class="source-note">Source: Yahoo Finance, StockAnalysis.com as of April 16, 2026 [Market]. NTM = Next-twelve-months. META trades at 18% P/E discount and 38% EV/EBITDA discount to Alphabet. Closing half the gap = <strong>$820-900</strong>.</p>
</div>

<!-- FORWARD ESTIMATES -->
<div class="section">
  <div class="section-label">Forward Estimate Detail</div>
  <h2>Consensus Financial Profile</h2>
  <table class="analyst-table">
    <thead>
      <tr><th>Metric ($B except EPS)</th><th>FY25A</th><th>FY26E Cons.</th><th>FY26E LCS</th><th>FY27E Cons.</th><th>FY27E LCS</th><th>FY28E LCS</th></tr>
    </thead>
    <tbody>
      <tr><td>Revenue</td><td>$201.0</td><td>$232.5</td><td><strong>$238</strong></td><td>$260.0</td><td><strong>$275</strong></td><td><strong>$310</strong></td></tr>
      <tr><td>Revenue YoY</td><td>+22%</td><td>+15.7%</td><td><strong>+18.4%</strong></td><td>+11.8%</td><td><strong>+15.5%</strong></td><td><strong>+12.7%</strong></td></tr>
      <tr><td>Op Income</td><td>$83.3</td><td>$90.7</td><td><strong>$93</strong></td><td>$88.4</td><td><strong>$102</strong></td><td><strong>$115</strong></td></tr>
      <tr><td>Op Margin</td><td>41.4%</td><td>39.0%</td><td><strong>39.1%</strong></td><td>34.0%</td><td><strong>37.1%</strong></td><td><strong>37.1%</strong></td></tr>
      <tr><td>Diluted EPS</td><td>$23.49</td><td>$30.00</td><td><strong>$30.00</strong></td><td>$33.00</td><td><strong>$35.00</strong></td><td><strong>$40.50</strong></td></tr>
      <tr><td>Capex</td><td>($72.2)</td><td>($125)</td><td><strong>($125)</strong></td><td>($140)</td><td><strong>($135)</strong></td><td><strong>($130)</strong></td></tr>
      <tr><td>FCF</td><td>$43.6</td><td>$29</td><td><strong>$30</strong></td><td>$48</td><td><strong>$55</strong></td><td><strong>$75</strong></td></tr>
    </tbody>
  </table>
  <p class="source-note">Consensus estimates aggregated from Yahoo Finance analyst page and StockAnalysis.com [Consensus]. LCS numbers reflect ARPP + capex-intensity adjusted base case [Estimated].</p>
</div>

<!-- MGMT QUOTES -->
<div class="section">
  <div class="section-label">Management Quotes</div>
  <h2>From the Q4 2025 Call</h2>
  <div class="two-col-cards">
    <div class="kt-card">
      <h3>Mark Zuckerberg, CEO</h3>
      <ul>
        <li><em>&ldquo;We&rsquo;re building the infrastructure for personal superintelligence. 2026 capex reflects that ambition.&rdquo;</em> [Transcript, Jan 2026]</li>
        <li><em>&ldquo;Reality Labs losses will peak in 2026 before beginning to decline as Ray-Ban meta scale and Orion contribute.&rdquo;</em> [Transcript]</li>
        <li><em>&ldquo;Llama 4 and our AI ranking improvements are delivering the strongest advertiser ROI we&rsquo;ve ever measured.&rdquo;</em> [Transcript]</li>
      </ul>
    </div>
    <div class="kt-card">
      <h3>Susan Li, CFO</h3>
      <ul>
        <li><em>&ldquo;We expect Q1 2026 revenue in the range of $53.5 to $56.5 billion.&rdquo;</em> [Transcript, Jan 2026]</li>
        <li><em>&ldquo;Full-year 2026 capex is expected to be between $115 billion and $135 billion, up from $72 billion in 2025.&rdquo;</em> [Transcript]</li>
        <li><em>&ldquo;Advertiser ROI on AI-assisted campaigns is measurably higher, and that&rsquo;s showing up in both conversion rates and willingness-to-pay.&rdquo;</em> [Transcript]</li>
      </ul>
    </div>
  </div>
</div>

<!-- CATALYST CAL -->
<div class="section">
  <div class="section-label">Catalyst Calendar</div>
  <h2>Key Dates &amp; Triggers</h2>
  <table class="analyst-table">
    <thead><tr><th>Date</th><th>Event</th><th>Watch</th><th>Impact</th></tr></thead>
    <tbody>
      <tr><td>Late Apr 2026</td><td>Q1 2026 earnings</td><td>ARPP trajectory; FY26 capex re-confirmation</td><td><span class="badge-buy">High</span></td></tr>
      <tr><td>May 2026</td><td>EU DMA enforcement</td><td>Ad-targeting remedies impact EU ARPP</td><td><span class="badge-hold">Med</span></td></tr>
      <tr><td>Jun 2026</td><td>Connect 2026 / Orion consumer</td><td>Unit economics disclosure</td><td><span class="badge-buy">High</span></td></tr>
      <tr><td>Late Jul 2026</td><td>Q2 2026 earnings</td><td>Summer ad durability</td><td><span class="badge-buy">High</span></td></tr>
      <tr><td>Late Oct 2026</td><td>Q3 2026 earnings + FY27 capex preview</td><td>Peak-RL-loss confirmation</td><td><span class="badge-buy">High</span></td></tr>
      <tr><td>Q4 2026</td><td>FTC antitrust trial / settlement</td><td>Divestiture remedy risk</td><td><span class="badge-hold">Med</span></td></tr>
      <tr><td>Late Jan 2027</td><td>Q4 2026 earnings</td><td>Full-year capex peak verified</td><td><span class="badge-buy">High</span></td></tr>
    </tbody>
  </table>
</div>

<!-- DISCLAIMER -->
<div class="section">
  <div style="background:var(--surface);border:1px solid var(--border-light);border-radius:8px;padding:24px;font-size:11px;color:var(--text-muted);line-height:1.9">
    <div style="font-size:10px;text-transform:uppercase;letter-spacing:2px;color:var(--gold);font-weight:700;margin-bottom:8px">Master Data Sources</div>
    <p><strong>Primary company data:</strong> Meta Platforms 10-K (SEC accession 0001628280-26-003942, filed Jan 28, 2026); Q4 2025 press release (IR page, Jan 28, 2026); Q4 2025 earnings call transcript (Investing.com, Jan 28, 2026).</p>
    <p><strong>Market data:</strong> Stock price, shares outstanding, market cap, and multiples from StockAnalysis.com and Yahoo Finance (April 16, 2026 close).</p>
    <p><strong>Consensus:</strong> Analyst PTs, ratings distribution, and estimates from MarketBeat, StockAnalysis.com, and Public.com aggregators (42-78 analyst coverage).</p>
    <p><strong>LCS estimates:</strong> FY26-FY28 projections reflect ARPP and capex-intensity adjusted base case, reconciled to management guidance where available.</p>
    <p style="margin-top:12px;color:var(--text-muted);font-style:italic">All figures reviewed and sourced per the portal's Anti-Hallucination Protocol. Any estimates not explicitly tagged are computed from sourced inputs.</p>
  </div>
</div>

</div>
</main>

<footer>
  <div class="footer-line"></div>
  <p>Levin Capital Strategies &bull; Meta Platforms (META) Equity Research Portal</p>
  <p style="margin-top:8px;font-size:10px;color:var(--text-muted);opacity:0.5">Last updated: April 16, 2026</p>
</footer>

<script>
function toggleDark(){document.documentElement.classList.toggle('dark');var isDark=document.documentElement.classList.contains('dark');document.querySelector('.dark-toggle').innerHTML=isDark?'&#9788;':'&#9790;';try{localStorage.setItem('lcs-dark',isDark?'1':'0')}catch(e){}}
try{if(localStorage.getItem('lcs-dark')==='1'){document.documentElement.classList.add('dark');var b=document.querySelector('.dark-toggle');if(b)b.innerHTML='&#9788;'}}catch(e){}
<\/script>
</body>
</html>`;
