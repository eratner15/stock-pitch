export const metaPresentationHTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Meta Platforms (META) investment presentation — 14-slide institutional deck with valuation, thesis pillars, and catalyst calendar.">
<meta property="og:title" content="META Deck | Levin Capital Strategies">
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>📘</text></svg>">
<title>META Presentation &mdash; Levin Capital Strategies</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --bg:#FFFFFF;--surface:#F8F9FB;
  --navy:#0F1729;--navy-soft:#1E3A5F;--border:#E2E5EB;--border-light:#ECEEF2;
  --gold:#B8973E;--gold-soft:rgba(184,151,62,0.08);
  --green:#1A7A3A;--red:#C0392B;--steel:#2C5F7C;--forest:#1A5632;
  --text:#2D3748;--text-muted:#6B7280;--heading:#111827;
}
body{font-family:'Inter',system-ui,sans-serif;background:var(--navy);color:var(--text);line-height:1.6;-webkit-font-smoothing:antialiased;overflow:hidden;height:100vh}
a{color:inherit;text-decoration:none}
.deck{position:relative;width:100vw;height:100vh;overflow:hidden}
.slide{position:absolute;inset:0;background:var(--bg);padding:60px 80px;opacity:0;visibility:hidden;transform:translateX(40px);transition:all 0.4s cubic-bezier(.22,.61,.36,1);overflow-y:auto}
.slide.active{opacity:1;visibility:visible;transform:translateX(0)}
.slide-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:32px;padding-bottom:16px;border-bottom:1px solid var(--border-light)}
.slide-brand{font-size:10px;letter-spacing:3px;color:var(--gold);text-transform:uppercase;font-weight:700}
.slide-num{font-size:11px;color:var(--text-muted);font-weight:600}
.slide-title{font-size:clamp(22px,3vw,32px);font-weight:800;color:var(--heading);letter-spacing:-0.02em;margin-bottom:8px}
.slide-subtitle{font-size:14px;color:var(--text-muted);margin-bottom:32px}
.slide-source{margin-top:24px;font-size:10px;color:var(--text-muted);font-style:italic}
.dots{position:fixed;bottom:24px;left:50%;transform:translateX(-50%);display:flex;gap:6px;z-index:10}
.dot{width:8px;height:8px;border-radius:50%;background:rgba(255,255,255,0.3);cursor:pointer;transition:all 0.2s;border:0}
.dot.active{background:var(--gold);width:20px;border-radius:4px}
.nav-btn{position:fixed;top:50%;transform:translateY(-50%);width:44px;height:44px;border-radius:50%;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:#fff;font-size:18px;cursor:pointer;z-index:10;display:flex;align-items:center;justify-content:center;transition:all 0.2s}
.nav-btn:hover{background:rgba(255,255,255,0.15)}
.nav-btn.prev{left:24px}.nav-btn.next{right:24px}

/* COVER */
.cover{background:linear-gradient(135deg,#0F1729 0%,#1E3A5F 50%,#2C5F7C 100%);color:#fff;padding:80px 100px;display:flex;flex-direction:column;justify-content:center}
.cover .slide-head{border-color:rgba(255,255,255,0.1)}
.cover-eyebrow{font-size:11px;letter-spacing:4px;color:var(--gold);text-transform:uppercase;font-weight:700;margin-bottom:24px}
.cover h1{font-size:clamp(36px,5vw,56px);font-weight:800;color:#fff;line-height:1.1;letter-spacing:-0.03em;margin-bottom:20px;max-width:900px}
.cover h1 span{color:var(--gold)}
.cover-sub{font-size:18px;color:rgba(255,255,255,0.7);max-width:700px;margin-bottom:32px}
.cover-badges{display:flex;gap:16px;flex-wrap:wrap;margin-bottom:40px}
.cover-badge{padding:10px 20px;border-radius:6px;background:rgba(184,151,62,0.15);border:1px solid rgba(184,151,62,0.3);font-size:13px;font-weight:700;color:var(--gold);letter-spacing:0.5px}
.cover-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:24px}
.cover-stat{background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.12);border-radius:8px;padding:20px 24px}
.cover-stat .v{font-size:28px;font-weight:800;color:#fff;letter-spacing:-0.02em}
.cover-stat .v.gold{color:var(--gold)}
.cover-stat .l{font-size:10px;text-transform:uppercase;letter-spacing:1.5px;color:rgba(255,255,255,0.5);margin-top:4px;font-weight:600}

/* TWO-COLUMN */
.two-col{display:grid;grid-template-columns:1fr 1fr;gap:32px}
.content-block h3{font-size:15px;font-weight:700;color:var(--heading);margin-bottom:8px}
.content-block p{font-size:13px;color:var(--text-muted);line-height:1.7;margin-bottom:16px}
.content-block ul{list-style:none;padding:0}
.content-block ul li{padding-left:18px;position:relative;margin-bottom:8px;font-size:13px;line-height:1.7}
.content-block ul li::before{content:"&#9656;";position:absolute;left:0;color:var(--gold);font-size:11px;top:5px}
.pbox{background:var(--surface);border-radius:10px;padding:20px 24px;border-left:3px solid var(--gold);margin-bottom:16px}
.pbox h4{font-size:12px;font-weight:700;color:var(--gold);text-transform:uppercase;letter-spacing:1px;margin-bottom:8px}
.pbox p{font-size:13px;color:var(--text);line-height:1.65;margin:0}

/* STATS GRID */
.stats-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}
.stat{background:var(--surface);border:1px solid var(--border-light);border-radius:10px;padding:20px;text-align:center}
.stat .v{font-size:28px;font-weight:800;color:var(--heading);letter-spacing:-0.02em}
.stat .v.gold{color:var(--gold)}
.stat .v.green{color:var(--green)}
.stat .v.red{color:var(--red)}
.stat .l{font-size:9px;text-transform:uppercase;letter-spacing:1.2px;color:var(--text-muted);margin-top:6px;font-weight:600}
.stat .sub{font-size:11px;color:var(--text-muted);margin-top:4px}

/* TABLE */
.deck-table{width:100%;border-collapse:collapse;font-size:13px;margin-top:16px}
.deck-table th{padding:10px 12px;font-size:10px;text-transform:uppercase;letter-spacing:1px;color:var(--text-muted);font-weight:600;text-align:center;border-bottom:2px solid var(--heading)}
.deck-table th:first-child{text-align:left}
.deck-table td{padding:10px 12px;text-align:center;border-bottom:1px solid var(--border-light)}
.deck-table td:first-child{text-align:left;color:var(--heading);font-weight:500}
.pos{color:var(--forest);font-weight:700}.neg{color:var(--red);font-weight:700}

/* PT GRID */
.pt-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:24px}
.pt-card{background:var(--surface);border-radius:10px;padding:24px;text-align:center;border:1px solid var(--border-light)}
.pt-card .method{font-size:10px;text-transform:uppercase;letter-spacing:1.2px;color:var(--gold);font-weight:700;margin-bottom:12px}
.pt-card .pt-val{font-size:36px;font-weight:800;color:var(--heading);letter-spacing:-0.02em}
.pt-card .pt-upside{font-size:12px;color:var(--forest);font-weight:600;margin-top:4px}
.pt-card .pt-detail{font-size:11px;color:var(--text-muted);margin-top:10px;line-height:1.6}

/* CATALYST */
.catalyst-list{display:flex;flex-direction:column;gap:12px;margin-top:16px}
.cat-row{display:grid;grid-template-columns:90px 1fr 120px;gap:20px;padding:14px 16px;background:var(--surface);border-radius:8px;border-left:3px solid var(--gold);align-items:center}
.cat-date{font-size:11px;font-weight:700;color:var(--gold);text-transform:uppercase;letter-spacing:0.8px}
.cat-event{font-size:13px;color:var(--heading);font-weight:600}
.cat-event small{display:block;font-size:11px;color:var(--text-muted);font-weight:400;margin-top:2px}
.cat-tag{font-size:10px;padding:4px 10px;border-radius:4px;text-align:center;font-weight:700;text-transform:uppercase;letter-spacing:0.5px}
.cat-tag.high{background:rgba(184,151,62,0.15);color:var(--gold)}
.cat-tag.med{background:rgba(44,95,124,0.12);color:var(--steel)}
.cat-tag.low{background:rgba(107,114,128,0.1);color:var(--text-muted)}

@media print{.nav-btn,.dots{display:none}.slide{position:relative;opacity:1;visibility:visible;transform:none;page-break-after:always;height:auto;min-height:90vh}}
</style>
</head>
<body>
<div class="deck">

<!-- Slide 1: Cover -->
<div class="slide cover active" data-slide="1">
  <div class="cover-eyebrow">Levin Capital Strategies &bull; April 16, 2026</div>
  <h1>Meta Platforms: Capex Is <span>the Moat</span>, Not the Wound</h1>
  <p class="cover-sub">AI monetization acceleration, in-house silicon arbitrage, and Reality Labs wind-down create an asymmetric 12-month setup at a persistent valuation discount.</p>
  <div class="cover-badges">
    <div class="cover-badge">BUY &bull; 12-Mo PT $810</div>
    <div class="cover-badge">+20% Upside</div>
    <div class="cover-badge">Base $810 / Bull $975 / Bear $540</div>
  </div>
  <div class="cover-stats">
    <div class="cover-stat"><div class="v">$674.20</div><div class="l">Current Price</div></div>
    <div class="cover-stat"><div class="v gold">$1.70T</div><div class="l">Market Cap</div></div>
    <div class="cover-stat"><div class="v">22.5x</div><div class="l">FY26E P/E</div></div>
  </div>
</div>

<!-- Slide 2: Executive Summary -->
<div class="slide" data-slide="2">
  <div class="slide-head"><div class="slide-brand">Executive Summary</div><div class="slide-num">02 / 14</div></div>
  <h2 class="slide-title">Why META, Why Now</h2>
  <p class="slide-subtitle">Three under-modeled pillars drive 20% upside over twelve months</p>
  <div class="two-col">
    <div class="content-block">
      <div class="pbox">
        <h4>Pillar 1 &mdash; ARPP Acceleration</h4>
        <p>ARPP grew <strong>+14.8% in 2025 [IR]</strong> on 7% DAP growth. AI ranking (Advantage+, Llama) lifts advertiser ROI structurally. We model +13% CAGR through 2028 vs. Street's decelerating mid-teens.</p>
      </div>
      <div class="pbox">
        <h4>Pillar 2 &mdash; Capex Is Not a Margin Event</h4>
        <p>$115-135B 2026 capex [IR] funds AI infra + MTIA silicon. Revenue grows faster than D&amp;A. Operating margin compresses only 400bps to 37%, not 900bps.</p>
      </div>
    </div>
    <div class="content-block">
      <div class="pbox">
        <h4>Pillar 3 &mdash; Reality Labs Optionality</h4>
        <p>Management: <em>"peak losses in 2026"</em> [Transcript]. 30% RL budget cuts [Press]. Normalizing the drag to $10B by 2028 adds <strong>$40-60/share</strong> the Street values at zero.</p>
      </div>
      <div class="pbox">
        <h4>Setup Asymmetry</h4>
        <p>Forward P/E 22.5x on $30 EPS. DCF at 11.5% WACC yields $830. Closing half the Alphabet EV/EBITDA gap yields $850+. Blended $810 with room for execution risk.</p>
      </div>
    </div>
  </div>
  <div class="slide-source">Sources: Meta Q4 2025 press release [IR], Q4 2025 transcript [Transcript], Bloomberg RL cuts [Press], StockAnalysis consensus [Consensus].</div>
</div>

<!-- Slide 3: Business Overview -->
<div class="slide" data-slide="3">
  <div class="slide-head"><div class="slide-brand">Business Overview</div><div class="slide-num">03 / 14</div></div>
  <h2 class="slide-title">Two Segments, One Social Graph</h2>
  <p class="slide-subtitle">Family of Apps monetizes 3.58B daily users; Reality Labs funds the next platform</p>
  <div class="stats-grid">
    <div class="stat"><div class="v gold">3.58B</div><div class="l">Dec&rsquo;25 DAP</div><div class="sub">+7% YoY [IR]</div></div>
    <div class="stat"><div class="v green">$198.8B</div><div class="l">FY25 FoA Rev</div><div class="sub">+22% [IR]</div></div>
    <div class="stat"><div class="v">$2.2B</div><div class="l">FY25 RL Rev</div><div class="sub">+5% YoY [IR]</div></div>
    <div class="stat"><div class="v red">$17.7B</div><div class="l">FY25 RL Op Loss</div><div class="sub">[IR]</div></div>
  </div>
  <div style="margin-top:32px">
    <table class="deck-table">
      <thead><tr><th>Segment</th><th>FY25 Rev</th><th>FY25 Op Inc</th><th>FY25 Margin</th><th>YoY Rev Gwth</th></tr></thead>
      <tbody>
        <tr><td>Family of Apps (Facebook, IG, WhatsApp, Messenger, Threads)</td><td>$198.8B</td><td>$101.0B</td><td class="pos">50.8%</td><td class="pos">+22%</td></tr>
        <tr><td>Reality Labs (Quest, Ray-Ban, Orion)</td><td>$2.2B</td><td>($17.7B)</td><td class="neg">N/M</td><td>+5%</td></tr>
        <tr style="font-weight:700"><td>Total Company</td><td>$201.0B</td><td>$83.3B</td><td>41.4%</td><td>+22%</td></tr>
      </tbody>
    </table>
  </div>
  <div class="slide-source">Source: Meta Q4 2025 press release and FY25 segment reporting [IR, 10-K]. Segment operating income computed: FoA = Total + RL absolute loss.</div>
</div>

<!-- Slide 4: The Variant Perception -->
<div class="slide" data-slide="4">
  <div class="slide-head"><div class="slide-brand">The Variant Perception</div><div class="slide-num">04 / 14</div></div>
  <h2 class="slide-title">Three Testable Claims, Three Known Dates</h2>
  <p class="slide-subtitle">The LCS thesis is falsifiable. Here&rsquo;s when we find out if we&rsquo;re right.</p>
  <table class="deck-table" style="margin-top:16px">
    <thead>
      <tr><th>Variant Claim</th><th>Street</th><th>LCS</th><th>$ / Share Stake</th><th>Testable Milestone</th></tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>MTIA &rarr; Nvidia Displacement (FY28)</strong><small style="display:block;color:var(--text-muted);font-weight:400;margin-top:2px">Share of annual accelerator procurement</small></td>
        <td>5-15% mix<br/>$8-12B saved</td>
        <td class="pos">35-40% mix<br/>$28-34B saved</td>
        <td class="pos">$35-45</td>
        <td>Q3&rsquo;26 earnings &mdash; compute-mix disclosure</td>
      </tr>
      <tr>
        <td><strong>FoA Op Margin (FY28)</strong><small style="display:block;color:var(--text-muted);font-weight:400;margin-top:2px">Segment operating margin ex-Reality Labs</small></td>
        <td>50-52% (compression)</td>
        <td class="pos">54-55% (expansion)</td>
        <td class="pos">$40-55</td>
        <td>Q4&rsquo;26 earnings &mdash; FoA margin &gt;55.5%</td>
      </tr>
      <tr>
        <td><strong>WhatsApp Paid Messaging (FY28)</strong><small style="display:block;color:var(--text-muted);font-weight:400;margin-top:2px">Included in FoA Other Revenue</small></td>
        <td>$2-3B</td>
        <td class="pos">$8-10B</td>
        <td class="pos">$45-55</td>
        <td>Q4&rsquo;26 &mdash; FoA Other Rev &gt;$5B run-rate</td>
      </tr>
    </tbody>
  </table>
  <div style="margin-top:24px" class="two-col">
    <div>
      <div class="pbox">
        <h4>Market Frame</h4>
        <p>&ldquo;BUY at $840 target, consensus. ARPP healthy, capex is a moat, RL peaks in 2026.&rdquo; 78% of the universe shares this view. The LCS disagreement is <strong>not</strong> on direction &mdash; it&rsquo;s on magnitude across three line items.</p>
      </div>
    </div>
    <div>
      <div class="pbox" style="border-left-color:var(--forest)">
        <h4>LCS Frame</h4>
        <p>The three deltas compound to <strong>$120-155 per share</strong> of incremental fair value relative to the consensus model &mdash; and all three resolve observably within the next four quarterly prints. Asymmetric, testable, and date-certain.</p>
      </div>
    </div>
  </div>
  <div class="slide-source">Sources: Meta Q4&rsquo;25 press release [IR], IR Q4 transcript [Transcript], StockAnalysis.com consensus aggregation [Consensus]. Street FY28 estimates inferred from 42-78 analyst NTM and out-year ranges.</div>
</div>

<!-- Slide 5: Family of Apps Engine -->
<div class="slide" data-slide="5">
  <div class="slide-head"><div class="slide-brand">Pillar 1 &mdash; Family of Apps</div><div class="slide-num">05 / 14</div></div>
  <h2 class="slide-title">The ARPP Flywheel</h2>
  <p class="slide-subtitle">AI ranking is lifting the revenue-per-user ceiling, not compressing it</p>
  <div class="stats-grid">
    <div class="stat"><div class="v green">+14.8%</div><div class="l">ARPP Gwth '25</div><div class="sub">Fastest since '18</div></div>
    <div class="stat"><div class="v">+7%</div><div class="l">DAP Gwth '25</div><div class="sub">3.58B, Dec '25</div></div>
    <div class="stat"><div class="v gold">+10%</div><div class="l">Q4'25 Ad Pricing</div><div class="sub">[Transcript]</div></div>
    <div class="stat"><div class="v">+15%</div><div class="l">Q4'25 Ad Impr</div><div class="sub">[Transcript]</div></div>
  </div>
  <div style="margin-top:32px">
    <table class="deck-table">
      <thead><tr><th>Metric</th><th>FY23A</th><th>FY24A</th><th>FY25A</th><th>FY26E</th><th>FY27E</th><th>FY28E</th></tr></thead>
      <tbody>
        <tr><td>DAP (billions)</td><td>3.19</td><td>3.35</td><td>3.58</td><td>3.78</td><td>3.95</td><td>4.10</td></tr>
        <tr><td>ARPP FY ($)</td><td>$41.75</td><td>$48.48</td><td>$55.53</td><td>$61.90</td><td>$68.35</td><td>$74.15</td></tr>
        <tr><td>ARPP YoY</td><td>+8%</td><td>+16%</td><td>+14.8%</td><td>+11.5%</td><td>+10.4%</td><td>+8.5%</td></tr>
        <tr><td>FoA Rev ($B)</td><td>$133.0</td><td>$162.4</td><td>$198.8</td><td>$234</td><td>$270</td><td>$304</td></tr>
      </tbody>
    </table>
    <div class="slide-source">DAP/ARPP from Meta 10-K [IR]. FY26-28 LCS base case [Estimated]. ARPP computed as FoA revenue &divide; avg DAP. Acceleration = AI-ranked placements structurally lifting CPM and conversion.</div>
  </div>
</div>

<!-- Slide 6: Capex Deep Dive -->
<div class="slide" data-slide="6">
  <div class="slide-head"><div class="slide-brand">Pillar 2 &mdash; Capex</div><div class="slide-num">06 / 14</div></div>
  <h2 class="slide-title">$125B of Capex Is Not a Hole &mdash; It&rsquo;s a Backlog</h2>
  <p class="slide-subtitle">Three segments of spend, each with measurable return profile</p>
  <div class="two-col">
    <div>
      <div class="pbox">
        <h4>AI Infrastructure (~$45B / 36%)</h4>
        <p>GPUs + MTIA + networking for internal inference (Advantage+, Llama ranking, AI Studio) plus partner AI compute. Returns show up as <strong>ad-efficiency lift, not a separate cloud P&amp;L</strong>.</p>
      </div>
      <div class="pbox">
        <h4>Physical Datacenter (~$45B / 36%)</h4>
        <p>10+ GW of owned capacity by late 2026 [Press]. Liquid-cooled, sovereign-compliant, multi-region. Think of this as the <strong>5-year asset</strong> underpinning every subsequent ML training cycle.</p>
      </div>
    </div>
    <div>
      <div class="pbox">
        <h4>Core Ads Infra (~$35B / 28%)</h4>
        <p>Feed-serving, recommendation, moderation, Reels playout. The bread-and-butter compute that runs the $235B revenue engine. <strong>Grows with DAP and session count.</strong></p>
      </div>
      <div class="pbox" style="border-left-color:var(--forest)">
        <h4>MTIA Silicon Payoff (2027-28)</h4>
        <p>In-house training and inference chips replace <strong>30-40% of Nvidia GPU buys</strong> by 2028, capturing Nvidia's 70-80% gross margin as internal cost savings. Effective capex reduction: <strong>$8-12B / yr</strong>.</p>
      </div>
    </div>
  </div>
  <div class="slide-source">Capex composition estimated from Q4&rsquo;25 earnings call [Transcript] and management datacenter disclosures [Press]. MTIA roadmap per industry reporting; not separately disclosed.</div>
</div>

<!-- Slide 7: Reality Labs Economics -->
<div class="slide" data-slide="7">
  <div class="slide-head"><div class="slide-brand">Pillar 3 &mdash; Reality Labs</div><div class="slide-num">07 / 14</div></div>
  <h2 class="slide-title">The $83B Sunk Cost &mdash; And the Wind-Down</h2>
  <p class="slide-subtitle">Management framing has shifted from investment to normalization</p>
  <div style="margin-top:16px">
    <table class="deck-table">
      <thead><tr><th>RL Period</th><th>Revenue</th><th>Op Loss</th><th>Cumulative Loss</th><th>Key Product</th></tr></thead>
      <tbody>
        <tr><td>FY20</td><td>$1.1B</td><td>($6.6B)</td><td>($6.6B)</td><td>Quest 2 launch</td></tr>
        <tr><td>FY21</td><td>$2.3B</td><td>($10.2B)</td><td>($16.8B)</td><td>Meta rename</td></tr>
        <tr><td>FY22</td><td>$2.2B</td><td>($13.7B)</td><td>($30.5B)</td><td>Quest Pro</td></tr>
        <tr><td>FY23</td><td>$1.9B</td><td>($16.1B)</td><td>($46.6B)</td><td>Quest 3</td></tr>
        <tr><td>FY24</td><td>$2.1B</td><td>($17.7B)</td><td>($64.3B)</td><td>Orion prototype</td></tr>
        <tr><td>FY25</td><td>$2.2B</td><td>($17.7B)</td><td>($82.0B)</td><td>Ray-Ban scale</td></tr>
        <tr style="color:var(--forest);font-weight:700"><td>FY26E (peak)</td><td>$4.0B</td><td>($18.5B)</td><td>($100.5B)</td><td>Orion launch</td></tr>
        <tr style="color:var(--forest);font-weight:700"><td>FY27E</td><td>$5.0B</td><td>($14.0B)</td><td>($114.5B)</td><td>Rev scaling</td></tr>
        <tr style="color:var(--forest);font-weight:700"><td>FY28E</td><td>$6.0B</td><td>($10.0B)</td><td>($124.5B)</td><td>Break-even view</td></tr>
      </tbody>
    </table>
  </div>
  <p style="margin-top:24px;font-size:13px;color:var(--text);line-height:1.7"><strong>The thesis is not that RL becomes profitable in 2028.</strong> It&rsquo;s that the $16B perpetual drag the Street models becomes a declining $10B drag &mdash; freeing <strong>$6-8B of pre-tax earnings</strong>, or $45-60/share at a 20x multiple. That is pure optionality the market is pricing at zero.</p>
  <div class="slide-source">Historical RL P&amp;L from Meta 10-K segment reporting [10-K]. FY26-28 LCS base case [Estimated]; peak-loss framing per Q4&rsquo;25 call [Transcript]; Bloomberg reporting on 30% 2026 budget cuts [Press].</div>
</div>

<!-- Slide 8: Peer Comparison -->
<div class="slide" data-slide="8">
  <div class="slide-head"><div class="slide-brand">Peer Comp</div><div class="slide-num">08 / 14</div></div>
  <h2 class="slide-title">Trades at a Persistent Discount to Alphabet</h2>
  <p class="slide-subtitle">NTM multiples across platform ad &amp; social peers</p>
  <div style="margin-top:16px">
    <table class="deck-table">
      <thead><tr><th>Company</th><th>Market Cap</th><th>NTM Rev</th><th>NTM Gwth</th><th>Op Margin</th><th>NTM P/E</th><th>NTM EV/EBITDA</th></tr></thead>
      <tbody>
        <tr style="background:var(--gold-soft)"><td><strong>META</strong></td><td><strong>$1.70T</strong></td><td><strong>$238B</strong></td><td class="pos"><strong>+18%</strong></td><td><strong>39%</strong></td><td><strong>22.5x</strong></td><td><strong>15.6x</strong></td></tr>
        <tr><td>Alphabet (GOOGL)</td><td>$2.85T</td><td>$405B</td><td class="pos">+13%</td><td>32%</td><td>27.5x</td><td>25.3x</td></tr>
        <tr><td>Amazon (AMZN ads + cloud)</td><td>$2.51T</td><td>$740B</td><td class="pos">+14%</td><td>11%</td><td>30.1x</td><td>11.0x</td></tr>
        <tr><td>Snap (SNAP)</td><td>$17B</td><td>$6.5B</td><td class="pos">+12%</td><td class="neg">(5%)</td><td>N/M</td><td>7.5x</td></tr>
        <tr><td>Reddit (RDDT)</td><td>$35B</td><td>$2.1B</td><td class="pos">+42%</td><td>18%</td><td>36.6x</td><td>28.0x</td></tr>
        <tr><td>Pinterest (PINS)</td><td>$22B</td><td>$4.2B</td><td class="pos">+13%</td><td>21%</td><td>17.5x</td><td>11.0x</td></tr>
        <tr style="color:var(--text-muted)"><td>Peer Median (excl. META)</td><td>&mdash;</td><td>&mdash;</td><td>+13.5%</td><td>18%</td><td>27.5x</td><td>11.0x</td></tr>
      </tbody>
    </table>
  </div>
  <p style="margin-top:20px;font-size:13px;color:var(--text)"><strong>META trades at an 18% NTM P/E discount and 38% EV/EBITDA discount to Alphabet</strong> despite faster revenue growth, higher operating margins, and arguably superior ad targeting. Closing half the gap on either metric implies <strong>$820-900 per share</strong>.</p>
  <div class="slide-source">Multiples from Yahoo Finance key statistics and StockAnalysis.com as of April 2026 [Market]. Operating margin reflects LTM GAAP. META growth reflects 2026E consensus.</div>
</div>

<!-- Slide 9: Financial Model Summary -->
<div class="slide" data-slide="9">
  <div class="slide-head"><div class="slide-brand">Financials</div><div class="slide-num">09 / 14</div></div>
  <h2 class="slide-title">Three-Year Bridge to FY28E EPS of $40+</h2>
  <p class="slide-subtitle">Revenue growth in the high teens, margin normalization post-capex cycle</p>
  <table class="deck-table">
    <thead><tr><th>($B unless noted)</th><th>FY25A</th><th>FY26E</th><th>FY27E</th><th>FY28E</th><th>'25-'28 CAGR</th></tr></thead>
    <tbody>
      <tr><td>Revenue</td><td>$201.0</td><td>$238</td><td>$275</td><td>$310</td><td class="pos">15.5%</td></tr>
      <tr><td>Operating Income</td><td>$83.3</td><td>$93</td><td>$102</td><td>$115</td><td class="pos">11.4%</td></tr>
      <tr><td>Operating Margin</td><td>41.4%</td><td>39.1%</td><td>37.1%</td><td>37.1%</td><td>&mdash;</td></tr>
      <tr><td>Net Income</td><td>$60.5</td><td>$76</td><td>$88</td><td>$100</td><td class="pos">18.2%</td></tr>
      <tr><td>Diluted EPS</td><td>$23.49</td><td>$30.00</td><td>$35.00</td><td>$40.50</td><td class="pos">19.9%</td></tr>
      <tr><td>Capex</td><td>($72.2)</td><td>($125)</td><td>($135)</td><td>($130)</td><td>&mdash;</td></tr>
      <tr><td>Free Cash Flow</td><td>$43.6</td><td>$30</td><td>$55</td><td>$75</td><td class="pos">19.9%</td></tr>
      <tr><td>FCF Margin</td><td>21.7%</td><td>12.6%</td><td>20.0%</td><td>24.2%</td><td>&mdash;</td></tr>
    </tbody>
  </table>
  <p style="margin-top:20px;font-size:13px;color:var(--text)"><strong>FCF troughs in 2026, not the business.</strong> As capex intensity normalizes from 52% of revenue (2026) toward 42% (2028), FCF margin rebounds to 24%+. At $75B FCF on a $1.7T market cap, 2028 FCF yield is <strong>4.4%</strong> &mdash; attractive for a compounder still growing in the high-teens.</p>
  <div class="slide-source">FY25A from Meta Q4 press release [IR]. FY26-28E LCS base case [Estimated]. Revenue growth assumes +13% ARPP CAGR and +4% DAP CAGR. Capex per management guidance [IR].</div>
</div>

<!-- Slide 10: Price Target -->
<div class="slide" data-slide="10">
  <div class="slide-head"><div class="slide-brand">Valuation</div><div class="slide-num">10 / 14</div></div>
  <h2 class="slide-title">$810 Price Target via Three Frameworks</h2>
  <p class="slide-subtitle">DCF, forward P/E, and peer-relative all converge in a tight band</p>
  <div class="pt-grid">
    <div class="pt-card">
      <div class="method">DCF</div>
      <div class="pt-val">$830</div>
      <div class="pt-upside">+23% upside</div>
      <div class="pt-detail">11.5% WACC &bull; 3.0% terminal growth &bull; 5-yr explicit FCF with $30B trough in &rsquo;26</div>
    </div>
    <div class="pt-card" style="border-color:var(--gold)">
      <div class="method" style="color:var(--gold)">Forward P/E (Blend)</div>
      <div class="pt-val">$810</div>
      <div class="pt-upside">+20% upside &bull; 12-mo PT</div>
      <div class="pt-detail">23x FY27E EPS of $35 &bull; Matches 5-year average multiple</div>
    </div>
    <div class="pt-card">
      <div class="method">Peer-Relative</div>
      <div class="pt-val">$870</div>
      <div class="pt-upside">+29% upside</div>
      <div class="pt-detail">Close half the Alphabet EV/EBITDA gap (15.6x &rarr; 20.5x on FY27E EBITDA)</div>
    </div>
  </div>
  <div style="margin-top:32px;background:var(--surface);border-radius:10px;padding:20px 24px;border-left:3px solid var(--forest)">
    <h3 style="font-size:13px;color:var(--heading);margin-bottom:12px">Scenario Analysis</h3>
    <table class="deck-table">
      <thead><tr><th>Scenario</th><th>FY27 EPS</th><th>Multiple</th><th>PT</th><th>vs. Current</th></tr></thead>
      <tbody>
        <tr style="color:var(--forest)"><td><strong>Bull</strong></td><td>$40.00</td><td>24.5x</td><td><strong>$975</strong></td><td class="pos">+45%</td></tr>
        <tr style="background:var(--gold-soft)"><td><strong>Base</strong></td><td>$35.00</td><td>23.0x</td><td><strong>$810</strong></td><td class="pos">+20%</td></tr>
        <tr><td>Street Base</td><td>$33.00</td><td>22.5x</td><td>$742</td><td class="pos">+10%</td></tr>
        <tr style="color:var(--red)"><td><strong>Bear</strong></td><td>$30.00</td><td>18.0x</td><td><strong>$540</strong></td><td class="neg">-20%</td></tr>
      </tbody>
    </table>
  </div>
</div>

<!-- Slide 11: Earnings Setup -->
<div class="slide" data-slide="11">
  <div class="slide-head"><div class="slide-brand">Catalyst Map</div><div class="slide-num">11 / 14</div></div>
  <h2 class="slide-title">What Moves the Stock Next 12 Months</h2>
  <p class="slide-subtitle">Three earnings prints, two regulatory milestones, one product launch</p>
  <div class="catalyst-list">
    <div class="cat-row"><div class="cat-date">LATE APR '26</div><div class="cat-event">Q1 2026 Earnings<small>ARPP trajectory print; FY26 capex re-confirmation; RL OpEx color</small></div><span class="cat-tag high">High Impact</span></div>
    <div class="cat-row"><div class="cat-date">MAY '26</div><div class="cat-event">EU DMA / DSA Enforcement Decisions<small>Ad-targeting remedies materially affect European ARPP</small></div><span class="cat-tag med">Med Impact</span></div>
    <div class="cat-row"><div class="cat-date">JUN '26</div><div class="cat-event">Connect 2026 / Orion Consumer Launch<small>First consumer-facing Orion AR glasses disclosures; unit economics tell</small></div><span class="cat-tag high">High Impact</span></div>
    <div class="cat-row"><div class="cat-date">LATE JUL '26</div><div class="cat-event">Q2 2026 Earnings<small>Full summer ad season; tests Advantage+ durability</small></div><span class="cat-tag high">High Impact</span></div>
    <div class="cat-row"><div class="cat-date">LATE OCT '26</div><div class="cat-event">Q3 2026 Earnings + FY27 Capex Preview<small>Single biggest print; peak-RL-loss confirmation or disappointment</small></div><span class="cat-tag high">High Impact</span></div>
    <div class="cat-row"><div class="cat-date">Q4 '26</div><div class="cat-event">FTC Antitrust Trial / Settlement<small>Instagram / WhatsApp divestiture remedy could be asymmetric downside</small></div><span class="cat-tag med">Med Impact</span></div>
    <div class="cat-row"><div class="cat-date">LATE JAN '27</div><div class="cat-event">Q4 2026 Earnings + FY27 Full Outlook<small>Full-year capex peak observed; margin and FCF re-rating window</small></div><span class="cat-tag high">High Impact</span></div>
  </div>
</div>

<!-- Slide 12: Risk Matrix -->
<div class="slide" data-slide="12">
  <div class="slide-head"><div class="slide-brand">Risks</div><div class="slide-num">12 / 14</div></div>
  <h2 class="slide-title">Risk / Reward Honest Accounting</h2>
  <p class="slide-subtitle">What breaks the thesis, what breaks the price</p>
  <div class="two-col">
    <div>
      <div class="pbox" style="border-left-color:var(--red)">
        <h4 style="color:var(--red)">Capex-Returns Disconnect (20% prob)</h4>
        <p>If AI ranking lift plateaus and $250B of 2026-27 capex doesn't translate into ARPP, operating margin falls to 33% and EPS stalls. Multiple compresses to 17x. <strong>Downside: $540.</strong></p>
      </div>
      <div class="pbox" style="border-left-color:var(--red)">
        <h4 style="color:var(--red)">Regulatory Structural (15% prob)</h4>
        <p>FTC forces divestiture of Instagram or WhatsApp. EU mandates consent-based targeting that reduces ARPP 15-20%. <strong>Downside: $500-550.</strong></p>
      </div>
    </div>
    <div>
      <div class="pbox" style="border-left-color:var(--red)">
        <h4 style="color:var(--red)">RL Wind-Down Slips (25% prob)</h4>
        <p>&ldquo;Peak 2026&rdquo; proves aspirational; RL losses continue to grow in 2027-28. Lose $40-60/share of optionality value. <strong>Downside: $720.</strong></p>
      </div>
      <div class="pbox" style="border-left-color:var(--red)">
        <h4 style="color:var(--red)">China Advertiser Exposure (15% prob)</h4>
        <p>~10% of revenue from Chinese cross-border (Temu, Shein). Political rupture shaves 150-250bps of growth. <strong>Downside: $650-680.</strong></p>
      </div>
    </div>
  </div>
  <p style="margin-top:24px;font-size:13px;color:var(--text)"><strong>Probability-weighted downside scenario: ~$600.</strong> Probability-weighted upside to base: ~$850. Asymmetric risk/reward favors ownership at current levels.</p>
</div>

<!-- Slide 13: Consensus vs. LCS -->
<div class="slide" data-slide="13">
  <div class="slide-head"><div class="slide-brand">Consensus Gap</div><div class="slide-num">13 / 14</div></div>
  <h2 class="slide-title">Where We Differ From the Street</h2>
  <p class="slide-subtitle">The Street is right about direction, missing on magnitude</p>
  <table class="deck-table">
    <thead><tr><th>Metric</th><th>Street FY27E</th><th>LCS FY27E</th><th>Delta</th><th>Driver</th></tr></thead>
    <tbody>
      <tr><td>Revenue ($B)</td><td>$260</td><td>$275</td><td class="pos">+6%</td><td>ARPP +13% vs. Street mid-teens-decelerating</td></tr>
      <tr><td>Operating Margin</td><td>34%</td><td>37%</td><td class="pos">+300bps</td><td>Capex depreciates over 5-7yr not 3-4yr</td></tr>
      <tr><td>EPS</td><td>$33.00</td><td>$35.00</td><td class="pos">+6%</td><td>Revenue beat + MTIA silicon offset D&amp;A</td></tr>
      <tr><td>RL Op Loss ($B)</td><td>($16.0)</td><td>($14.0)</td><td class="pos">+$2B</td><td>Management guide: peak in &rsquo;26 [Transcript]</td></tr>
      <tr><td>FCF ($B)</td><td>$48</td><td>$55</td><td class="pos">+15%</td><td>Lower MTIA-era capex + higher operating CF</td></tr>
      <tr><td>Price Target</td><td>$840</td><td>$810</td><td class="neg">-4%</td><td>LCS PT reflects execution haircut; fair-value $870</td></tr>
    </tbody>
  </table>
  <p style="margin-top:20px;font-size:13px;color:var(--text)"><strong>Our PT is modestly below consensus because we apply a discount for execution risk on the 2026 capex ramp.</strong> Our modeled EPS and FCF are above consensus; our fair value (ungate-risk-adjusted) is $870. The delta between $810 and $870 is our margin of safety.</p>
  <div class="slide-source">Street estimates from StockAnalysis.com and MarketBeat aggregations (42-78 analyst universe) [Consensus]. LCS base case reconciled to implied ARPP and capex-intensity schedule [Estimated].</div>
</div>

<!-- Slide 14: Recommendation -->
<div class="slide" data-slide="14">
  <div class="slide-head"><div class="slide-brand">Recommendation</div><div class="slide-num">14 / 14</div></div>
  <h2 class="slide-title">BUY &bull; PT $810 &bull; 20% Upside</h2>
  <p class="slide-subtitle">Position sizing recommendation and investment clock</p>
  <div class="two-col" style="margin-top:16px">
    <div>
      <div class="pbox">
        <h4>Position</h4>
        <p><strong>BUY.</strong> Core long position in diversified tech/growth sleeve. Recommended weighting: <strong>3-5% of equity portfolio</strong>. Can accumulate on any pullback below $650.</p>
      </div>
      <div class="pbox">
        <h4>Catalyst Path</h4>
        <p>Q1 2026 earnings (late April) &rarr; ARPP confirmation. Q3 2026 (late October) &rarr; peak-capex commentary and RL loss trajectory. Q4 2026 (late January 2027) &rarr; FY27 capex normalization visible.</p>
      </div>
    </div>
    <div>
      <div class="pbox" style="border-left-color:var(--forest)">
        <h4 style="color:var(--forest)">Base Case Return Profile</h4>
        <p>$810 target over 12 months &mdash; <strong>+20% total return</strong>. No dividend. All return is price.</p>
      </div>
      <div class="pbox" style="border-left-color:var(--red)">
        <h4 style="color:var(--red)">Stop-Loss Trigger</h4>
        <p>Thesis is broken if either: (i) Q3 2026 call shows FY27 capex guidance above $160B, or (ii) RL losses exceed $22B in any single 2026 quarter. Trim on either.</p>
      </div>
    </div>
  </div>
  <div style="margin-top:32px;padding:24px;background:var(--navy);border-radius:10px;color:#fff">
    <div style="font-size:10px;text-transform:uppercase;letter-spacing:2px;color:var(--gold);font-weight:700;margin-bottom:8px">Sources &amp; Methodology</div>
    <p style="font-size:11px;color:rgba(255,255,255,0.7);line-height:1.7">Meta Platforms 10-K (SEC accession 0001628280-26-003942) &bull; Q4 2025 press release [IR] &bull; Q4 2025 earnings call transcript [Transcript] &bull; StockAnalysis.com / MarketBeat consensus [Consensus] &bull; Bloomberg, CNBC, SalesforceDevops Reality Labs coverage [Press] &bull; LCS base-case model [Estimated]. For internal use only.</p>
  </div>
</div>

</div>

<div class="dots" id="dots"></div>
<button class="nav-btn prev" onclick="go(-1)">&lsaquo;</button>
<button class="nav-btn next" onclick="go(1)">&rsaquo;</button>

<script>
var total=14,cur=1;
function render(){var slides=document.querySelectorAll('.slide');slides.forEach(function(s,i){s.classList.toggle('active',i===cur-1)});var dots=document.getElementById('dots');dots.innerHTML='';for(var i=1;i<=total;i++){(function(n){var d=document.createElement('button');d.className='dot'+(n===cur?' active':'');d.onclick=function(){cur=n;render()};dots.appendChild(d)})(i)}}
function go(d){cur=Math.max(1,Math.min(total,cur+d));render()}
document.addEventListener('keydown',function(e){if(e.key==='ArrowRight'||e.key==='PageDown')go(1);if(e.key==='ArrowLeft'||e.key==='PageUp')go(-1)});
render();
<\/script>
</body>
</html>`;
