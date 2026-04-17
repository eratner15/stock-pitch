export const metaModelHTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Meta Platforms (META) interactive valuation model — 12 sliders, Bull/Base/Street/Bear presets, DCF + multiples blend, probability-weighted scenarios.">
<meta property="og:title" content="META Interactive Model | Levin Capital Strategies">
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>📘</text></svg>">
<title>META Interactive Model &mdash; Levin Capital Strategies</title>
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
html{scroll-behavior:smooth}
body{font-family:'Inter',system-ui,sans-serif;background:var(--bg);color:var(--text);line-height:1.5;-webkit-font-smoothing:antialiased}
a{color:inherit;text-decoration:none}
.wrap{max-width:1400px;margin:0 auto;padding:0 32px}
nav{position:fixed;top:0;left:0;right:0;z-index:100;padding:14px 0;background:rgba(255,255,255,0.92);backdrop-filter:blur(16px);border-bottom:1px solid var(--border-light)}
nav .wrap{display:flex;justify-content:space-between;align-items:center}
.nav-brand{font-size:11px;letter-spacing:3px;color:var(--gold);text-transform:uppercase;font-weight:700}
.nav-links{display:flex;align-items:center;gap:18px}
.nav-links a{font-size:12px;font-weight:500;color:var(--text-muted);padding:4px 0;border-bottom:2px solid transparent}
.nav-links a.active{color:var(--heading);font-weight:700;border-bottom-color:var(--gold)}
.nav-right{display:flex;align-items:center;gap:20px}
.nav-ticker{font-size:13px;color:var(--text-muted)}
.nav-ticker strong{color:var(--heading);font-weight:700}

.hero{padding:110px 0 30px;background:linear-gradient(135deg,#0F1729 0%,#1E3A5F 100%);color:#fff}
.hero h1{font-size:clamp(22px,3vw,30px);font-weight:800;letter-spacing:-0.02em;margin-bottom:8px}
.hero-sub{font-size:13px;color:rgba(255,255,255,0.6);margin-bottom:16px;max-width:700px}
.hero-actions{display:flex;gap:8px;flex-wrap:wrap}
.hero-btn{padding:7px 14px;border-radius:5px;font-size:11px;font-weight:600;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:#fff;cursor:pointer;font-family:Inter,sans-serif}
.hero-btn:hover{background:rgba(184,151,62,0.25);border-color:var(--gold)}
.hero-btn.share{background:var(--gold);border-color:var(--gold);color:#fff}

.layout{display:grid;grid-template-columns:340px 1fr;gap:28px;padding:24px 0 60px}

/* SIDEBAR */
.sidebar{position:sticky;top:80px;align-self:start;max-height:calc(100vh - 100px);overflow-y:auto;padding-right:8px}
.presets{display:grid;grid-template-columns:repeat(4,1fr);gap:6px;margin-bottom:18px}
.preset-btn{padding:10px 4px;border-radius:6px;font-size:10px;font-weight:700;background:var(--surface);border:1px solid var(--border);color:var(--text-muted);cursor:pointer;font-family:Inter,sans-serif;text-transform:uppercase;letter-spacing:0.8px;transition:all 0.15s}
.preset-btn:hover{border-color:var(--gold);color:var(--gold)}
.preset-btn.active{background:var(--navy);border-color:var(--navy);color:#fff}
.preset-btn.bull.active{background:var(--forest);border-color:var(--forest)}
.preset-btn.base.active{background:var(--gold);border-color:var(--gold)}
.preset-btn.street.active{background:var(--steel);border-color:var(--steel)}
.preset-btn.bear.active{background:var(--red);border-color:var(--red)}
.reset-btn{width:100%;padding:8px;border-radius:6px;font-size:11px;font-weight:600;background:var(--surface);border:1px solid var(--border);color:var(--text-muted);cursor:pointer;font-family:Inter,sans-serif;margin-bottom:18px}
.reset-btn:hover{border-color:var(--red);color:var(--red)}

.slider-group{margin-bottom:16px;background:var(--surface);border:1px solid var(--border-light);border-radius:8px;padding:14px 16px}
.slider-group h4{font-size:10px;text-transform:uppercase;letter-spacing:1.5px;color:var(--gold);font-weight:700;margin-bottom:10px}
.slider-item{margin-bottom:12px}
.slider-item:last-child{margin-bottom:0}
.slider-row{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:4px}
.slider-label{font-size:11px;color:var(--text);font-weight:500;cursor:help}
.slider-val{font-size:13px;font-weight:700;color:var(--heading);font-variant-numeric:tabular-nums}
input[type=range]{-webkit-appearance:none;width:100%;height:3px;background:var(--border);border-radius:2px;outline:none;cursor:pointer}
input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;width:14px;height:14px;background:var(--gold);border-radius:50%;cursor:pointer;border:2px solid #fff;box-shadow:0 1px 3px rgba(0,0,0,0.15)}
input[type=range]::-moz-range-thumb{width:14px;height:14px;background:var(--gold);border-radius:50%;cursor:pointer;border:2px solid #fff;box-shadow:0 1px 3px rgba(0,0,0,0.15)}

/* MAIN */
.main-content{min-width:0}
.val-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-bottom:24px}
.val-card{background:var(--bg);border:1px solid var(--border);border-radius:10px;padding:20px;position:relative;overflow:hidden}
.val-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px}
.val-card.dcf::before{background:var(--steel)}
.val-card.ev::before{background:var(--forest)}
.val-card.blend::before{background:var(--gold)}
.val-card h3{font-size:10px;text-transform:uppercase;letter-spacing:1.5px;color:var(--text-muted);font-weight:700;margin-bottom:8px}
.val-card .val-num{font-size:30px;font-weight:800;color:var(--heading);letter-spacing:-0.02em;font-variant-numeric:tabular-nums}
.val-card .val-num.blend{color:var(--gold)}
.val-card .val-sub{font-size:12px;font-weight:600;margin-top:4px}
.val-card .val-sub.pos{color:var(--forest)}
.val-card .val-sub.neg{color:var(--red)}
.val-card .val-detail{font-size:11px;color:var(--text-muted);margin-top:8px;line-height:1.5}

.panel{background:var(--bg);border:1px solid var(--border);border-radius:10px;padding:22px;margin-bottom:24px}
.panel h3{font-size:13px;font-weight:700;color:var(--heading);margin-bottom:14px;letter-spacing:-0.01em}
.panel h3 .panel-sub{font-size:11px;font-weight:500;color:var(--text-muted);margin-left:8px}

.bridge-table{width:100%;border-collapse:collapse;font-size:12px;font-variant-numeric:tabular-nums}
.bridge-table th{padding:8px 10px;font-size:9px;text-transform:uppercase;letter-spacing:1px;color:var(--text-muted);font-weight:600;text-align:right;border-bottom:2px solid var(--heading)}
.bridge-table th:first-child{text-align:left}
.bridge-table td{padding:8px 10px;text-align:right;border-bottom:1px solid var(--border-light)}
.bridge-table td:first-child{text-align:left;color:var(--heading);font-weight:500}
.bridge-table tr.total td{font-weight:700;background:var(--gold-soft);border-top:2px solid var(--gold)}

.sens{width:100%;border-collapse:collapse;font-size:11px;font-variant-numeric:tabular-nums}
.sens th,.sens td{padding:7px 10px;text-align:center;border:1px solid var(--border-light)}
.sens th{background:var(--surface);font-size:10px;font-weight:600;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.8px}
.sens td{color:var(--heading);font-weight:500}
.sens td.center-cell{background:var(--gold);color:#fff;font-weight:700}

.scenarios{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:18px}
.scn-card{padding:14px;border:1px solid var(--border);border-radius:8px;text-align:center;position:relative}
.scn-card.bull{border-top:3px solid var(--forest)}
.scn-card.base{border-top:3px solid var(--gold);background:var(--gold-soft)}
.scn-card.street{border-top:3px solid var(--steel)}
.scn-card.bear{border-top:3px solid var(--red)}
.scn-card .scn-label{font-size:10px;text-transform:uppercase;letter-spacing:1.2px;font-weight:700;margin-bottom:6px}
.scn-card .scn-label.bull{color:var(--forest)}.scn-card .scn-label.base{color:var(--gold)}.scn-card .scn-label.street{color:var(--steel)}.scn-card .scn-label.bear{color:var(--red)}
.scn-card .scn-pt{font-size:22px;font-weight:800;color:var(--heading);letter-spacing:-0.02em}
.scn-card .scn-ret{font-size:11px;font-weight:600;margin-top:2px}
.scn-card .scn-prob{margin-top:8px}
.scn-card .scn-prob input{width:100%}
.scn-card .scn-prob-val{font-size:11px;color:var(--text-muted);margin-top:2px}

.prob-total{padding:12px;border-radius:6px;text-align:center;margin-bottom:16px;font-weight:600;font-size:13px}
.prob-total.ok{background:rgba(26,122,58,0.08);color:var(--forest)}
.prob-total.err{background:rgba(192,57,43,0.08);color:var(--red)}

.ev-result{background:var(--navy);color:#fff;padding:20px;border-radius:10px;text-align:center}
.ev-result .ev-label{font-size:11px;text-transform:uppercase;letter-spacing:2px;color:var(--gold);font-weight:700;margin-bottom:6px}
.ev-result .ev-val{font-size:36px;font-weight:800;letter-spacing:-0.02em}
.ev-result .ev-sub{font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px}

footer{padding:40px 0;text-align:center;border-top:1px solid var(--border-light);margin-top:40px}
.footer-line{width:40px;height:2px;background:var(--gold);margin:0 auto 16px}
footer p{font-size:11px;color:var(--text-muted);line-height:1.8}

.dark-toggle{background:none;border:1px solid var(--border);border-radius:6px;padding:4px 8px;font-size:12px;cursor:pointer;color:var(--text-muted);font-family:Inter,sans-serif}
html.dark{--bg:#0F1218;--surface:#1A1E27;--border:#2D3340;--border-light:#252A35;--text:#D1D5DB;--text-muted:#9CA3AF;--heading:#F3F4F6;--navy:#0A0E16}
html.dark body{background:var(--bg)}
html.dark nav{background:rgba(15,18,24,0.92);border-bottom-color:var(--border)}

.toast{position:fixed;bottom:28px;left:50%;transform:translateX(-50%) translateY(120%);background:var(--navy);color:#fff;padding:12px 24px;border-radius:8px;font-size:13px;font-weight:600;box-shadow:0 4px 20px rgba(0,0,0,0.15);z-index:200;transition:transform 0.3s}
.toast.show{transform:translateX(-50%) translateY(0)}

@media print{nav,.sidebar,.hero-actions,.dark-toggle{display:none!important}.layout{grid-template-columns:1fr}.panel,.val-card{break-inside:avoid}}
@media(max-width:1100px){.layout{grid-template-columns:1fr}.sidebar{position:static;max-height:none}.scenarios{grid-template-columns:repeat(2,1fr)}}
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
        <a href="/lcs/meta/model.html" class="active">Model</a>
        <a href="/lcs/meta/consensus.html">Consensus</a>
        <a href="/lcs/meta/questions.html">Questions</a>
      </div>
      <span class="nav-ticker">NASDAQ: <strong>META</strong> $674.20</span>
    </div>
  </div>
</nav>

<section class="hero">
  <div class="wrap">
    <h1>META Interactive Model &mdash; DCF + Multiples Blend</h1>
    <p class="hero-sub">Twelve sliders across ARPP, margins, capex, and Reality Labs feed a DCF, an EV/EBITDA cross-check, and a probability-weighted scenario PT. Keyboard: 1/2/3/4 for presets, R to reset.</p>
    <div class="hero-actions">
      <button class="hero-btn share" onclick="shareScenario()">&#128279; Share This Scenario</button>
      <button class="hero-btn" onclick="window.print()">&#128424; Export PDF</button>
    </div>
  </div>
</section>

<div class="wrap layout">

<!-- SIDEBAR -->
<aside class="sidebar">
  <div class="presets">
    <button class="preset-btn bull" onclick="applyPreset('bull')" title="Bull: ARPP +15%, op margin 40%, MTIA scales fast, RL wind-down confirmed">Bull</button>
    <button class="preset-btn base active" onclick="applyPreset('base')" title="Base: LCS base case, ARPP +13%, op margin 37%, peak RL 2026">Base</button>
    <button class="preset-btn street" onclick="applyPreset('street')" title="Street consensus: ARPP +11% decelerating, op margin 34%, RL perpetual">Street</button>
    <button class="preset-btn bear" onclick="applyPreset('bear')" title="Bear: capex overruns, ARPP plateau, RL losses persist, regulatory overhang">Bear</button>
  </div>
  <button class="reset-btn" onclick="applyPreset('base')">&#8634; Reset to Base Case</button>

  <div class="slider-group">
    <h4>Revenue Drivers (FY26-28 avg)</h4>
    <div class="slider-item">
      <div class="slider-row"><label class="slider-label" for="s1" title="DAP growth driven by Reels/Threads engagement + emerging markets. Historical 7-8% YoY.">DAP Growth (%/yr)</label><span class="slider-val" id="v1">4.0%</span></div>
      <input type="range" id="s1" min="0" max="8" step="0.25" value="4.0" oninput="update()">
    </div>
    <div class="slider-item">
      <div class="slider-row"><label class="slider-label" for="s2" title="ARPP growth from AI-ranked placements, Advantage+, Reels monetization catching Feed, WhatsApp paid messaging">ARPP Growth (%/yr)</label><span class="slider-val" id="v2">12.5%</span></div>
      <input type="range" id="s2" min="4" max="18" step="0.25" value="12.5" oninput="update()">
    </div>
    <div class="slider-item">
      <div class="slider-row"><label class="slider-label" for="s3" title="Reality Labs revenue growth (Ray-Ban + Orion + Quest). Low base, but Ray-Ban scaling fast.">RL Rev Growth (%/yr)</label><span class="slider-val" id="v3">40%</span></div>
      <input type="range" id="s3" min="0" max="100" step="5" value="40" oninput="update()">
    </div>
  </div>

  <div class="slider-group">
    <h4>Margins &amp; Costs</h4>
    <div class="slider-item">
      <div class="slider-row"><label class="slider-label" for="s4" title="FY27E Family-of-Apps segment operating margin (excludes Reality Labs). FY25A was 50.8% (FoA op $101B / FoA rev $198.8B). LCS variant thesis: AI-led opex displacement expands to 54-55%. Street: compression to 48-50%.">FY27 FoA Op Margin (%)</label><span class="slider-val" id="v4">54.0%</span></div>
      <input type="range" id="s4" min="44" max="62" step="0.5" value="54.0" oninput="update()">
    </div>
    <div class="slider-item">
      <div class="slider-row"><label class="slider-label" for="s5" title="Effective tax rate. Meta guided 15-17%. Holds across scenarios.">Tax Rate (%)</label><span class="slider-val" id="v5">16.0%</span></div>
      <input type="range" id="s5" min="13" max="22" step="0.5" value="16.0" oninput="update()">
    </div>
    <div class="slider-item">
      <div class="slider-row"><label class="slider-label" for="s6" title="Reality Labs FY28 operating loss. Guide: peak in &rsquo;26. Base: $10B, Street: $16B flat.">FY28 RL Op Loss ($B)</label><span class="slider-val" id="v6">$10.0B</span></div>
      <input type="range" id="s6" min="4" max="22" step="0.5" value="10" oninput="update()">
    </div>
  </div>

  <div class="slider-group">
    <h4>Capex &amp; Capital Returns</h4>
    <div class="slider-item">
      <div class="slider-row"><label class="slider-label" for="s7" title="FY26 capex midpoint. Guide: $115-135B. Scenario range: $110-145B.">FY26 Capex ($B)</label><span class="slider-val" id="v7">$125B</span></div>
      <input type="range" id="s7" min="100" max="150" step="1" value="125" oninput="update()">
    </div>
    <div class="slider-item">
      <div class="slider-row"><label class="slider-label" for="s8" title="FY28 capex intensity (capex / revenue). FY25A was 36%. Normalizes ~40-42%.">FY28 Capex/Rev (%)</label><span class="slider-val" id="v8">42.0%</span></div>
      <input type="range" id="s8" min="30" max="55" step="0.5" value="42.0" oninput="update()">
    </div>
    <div class="slider-item">
      <div class="slider-row"><label class="slider-label" for="s9" title="Annual buybacks, which determine share count reduction and EPS accretion. $32B in 2025.">Buyback ($B/yr avg)</label><span class="slider-val" id="v9">$30B</span></div>
      <input type="range" id="s9" min="0" max="60" step="2" value="30" oninput="update()">
    </div>
  </div>

  <div class="slider-group">
    <h4>Valuation</h4>
    <div class="slider-item">
      <div class="slider-row"><label class="slider-label" for="s10" title="Weighted-average cost of capital. 4.3% rf + 1.05 beta x 5.5% ERP = 10.1% (unlevered). Adjust for risk.">WACC (%)</label><span class="slider-val" id="v10">11.5%</span></div>
      <input type="range" id="s10" min="8" max="16" step="0.25" value="11.5" oninput="update()">
    </div>
    <div class="slider-item">
      <div class="slider-row"><label class="slider-label" for="s11" title="DCF exit multiple applied to FY30E EBITDA for terminal value. Sell-side standard for tech (14-17x typical). Gordon Growth undershoots high-capex platforms.">DCF Exit EBITDA Mult</label><span class="slider-val" id="v11">14.0x</span></div>
      <input type="range" id="s11" min="8" max="22" step="0.5" value="14.0" oninput="update()">
    </div>
    <div class="slider-item">
      <div class="slider-row"><label class="slider-label" for="s12" title="EV/EBITDA multiple applied to FY27E EBITDA for cross-check. Peer median ~14x; Alphabet at 25x.">FY27E EV/EBITDA Mult</label><span class="slider-val" id="v12">18.0x</span></div>
      <input type="range" id="s12" min="12" max="26" step="0.5" value="18.0" oninput="update()">
    </div>
  </div>
</aside>

<!-- MAIN CONTENT -->
<div class="main-content">

  <!-- VALUATION CARDS -->
  <div class="val-grid">
    <div class="val-card dcf">
      <h3>DCF Valuation</h3>
      <div class="val-num" id="dcfPt">$830</div>
      <div class="val-sub pos" id="dcfUp">+23% vs $674</div>
      <div class="val-detail" id="dcfDetail">FY26-30 explicit FCF + Gordon terminal. WACC 11.5%, g 3.0%.</div>
    </div>
    <div class="val-card ev">
      <h3>EV / EBITDA Cross-Check</h3>
      <div class="val-num" id="evPt">$830</div>
      <div class="val-sub pos" id="evUp">+23% vs $674</div>
      <div class="val-detail" id="evDetail">18.0x FY27E EBITDA less net debt div by shares.</div>
    </div>
    <div class="val-card blend">
      <h3>Blended Fair Value</h3>
      <div class="val-num blend" id="blendPt">$830</div>
      <div class="val-sub pos" id="blendUp">+23% vs $674</div>
      <div class="val-detail">50/50 DCF + EV/EBITDA blend. LCS PT holds an execution-risk haircut vs. fair value.</div>
    </div>
  </div>

  <!-- FINANCIAL BRIDGE -->
  <div class="panel">
    <h3>Financial Bridge <span class="panel-sub">FY25A &rarr; FY28E driven by active slider values</span></h3>
    <table class="bridge-table">
      <thead><tr><th>Metric ($B unless EPS)</th><th>FY25A</th><th>FY26E</th><th>FY27E</th><th>FY28E</th></tr></thead>
      <tbody id="bridgeBody">
      </tbody>
    </table>
  </div>

  <!-- SCENARIO PROBABILITY-WEIGHTED -->
  <div class="panel">
    <h3>Probability-Weighted Scenarios <span class="panel-sub">Assign probabilities, see expected PT</span></h3>
    <div class="scenarios">
      <div class="scn-card bull">
        <div class="scn-label bull">Bull</div>
        <div class="scn-pt" id="sBull">&mdash;</div>
        <div class="scn-ret" id="sBullRet" style="color:var(--forest)">&mdash;</div>
        <div class="scn-prob">
          <input type="range" id="pBull" min="0" max="100" step="5" value="20" oninput="updateProbs()">
          <div class="scn-prob-val"><span id="pBullV">20</span>%</div>
        </div>
      </div>
      <div class="scn-card base">
        <div class="scn-label base">Base</div>
        <div class="scn-pt" id="sBase">&mdash;</div>
        <div class="scn-ret" id="sBaseRet" style="color:var(--forest)">&mdash;</div>
        <div class="scn-prob">
          <input type="range" id="pBase" min="0" max="100" step="5" value="45" oninput="updateProbs()">
          <div class="scn-prob-val"><span id="pBaseV">45</span>%</div>
        </div>
      </div>
      <div class="scn-card street">
        <div class="scn-label street">Street</div>
        <div class="scn-pt" id="sStreet">&mdash;</div>
        <div class="scn-ret" id="sStreetRet" style="color:var(--forest)">&mdash;</div>
        <div class="scn-prob">
          <input type="range" id="pStreet" min="0" max="100" step="5" value="20" oninput="updateProbs()">
          <div class="scn-prob-val"><span id="pStreetV">20</span>%</div>
        </div>
      </div>
      <div class="scn-card bear">
        <div class="scn-label bear">Bear</div>
        <div class="scn-pt" id="sBear">&mdash;</div>
        <div class="scn-ret" id="sBearRet" style="color:var(--red)">&mdash;</div>
        <div class="scn-prob">
          <input type="range" id="pBear" min="0" max="100" step="5" value="15" oninput="updateProbs()">
          <div class="scn-prob-val"><span id="pBearV">15</span>%</div>
        </div>
      </div>
    </div>
    <div class="prob-total" id="probTotal">Sum: 100% &#10003;</div>
    <div class="ev-result">
      <div class="ev-label">Probability-Weighted Expected PT</div>
      <div class="ev-val" id="evPT">$810</div>
      <div class="ev-sub" id="evPTRet">vs. $674 current &rarr; +20% expected return</div>
    </div>
  </div>

  <!-- SENSITIVITY: ARPP x MARGIN -->
  <div class="panel">
    <h3>Sensitivity: FY27 EPS &mdash; ARPP Growth vs. Operating Margin</h3>
    <table class="sens" id="sensTable1">
    </table>
    <p style="font-size:11px;color:var(--text-muted);margin-top:10px">Center cell highlights current slider values. Grid assumes FY26 revenue base of $238B, flat DAP growth at current slider.</p>
  </div>

  <!-- SENSITIVITY: WACC x TERMINAL -->
  <div class="panel">
    <h3>Sensitivity: DCF PT &mdash; WACC vs. Terminal Growth</h3>
    <table class="sens" id="sensTable2">
    </table>
    <p style="font-size:11px;color:var(--text-muted);margin-top:10px">DCF PT at different (WACC, g) combinations. Uses current slider values for FCF path.</p>
  </div>

  <!-- ASSUMPTIONS PANEL -->
  <div class="panel">
    <h3>Assumptions &amp; Sources</h3>
    <ul style="list-style:none;padding:0;font-size:12px;color:var(--text);line-height:1.8">
      <li><strong style="color:var(--heading)">Current price:</strong> $674.20 [Market, Apr 16 2026]</li>
      <li><strong style="color:var(--heading)">Shares outstanding:</strong> 2.53B [10-K]</li>
      <li><strong style="color:var(--heading)">Net cash position:</strong> ~$58B (cash $75B &minus; debt $17B) [10-K]</li>
      <li><strong style="color:var(--heading)">FY25A revenue:</strong> $200.97B (+22% YoY) [IR]</li>
      <li><strong style="color:var(--heading)">FY25A op income:</strong> $83.28B (41.4% margin) [IR]</li>
      <li><strong style="color:var(--heading)">FY25A capex:</strong> ~$72.2B [Computed: OCF $115.8B &minus; FCF $43.6B]</li>
      <li><strong style="color:var(--heading)">FY26E capex guide:</strong> $115-135B [IR]</li>
      <li><strong style="color:var(--heading)">FY26E EPS consensus:</strong> $30.00 [Consensus]</li>
      <li><strong style="color:var(--heading)">DAP Dec 2025:</strong> 3.58B (+7% YoY) [IR]</li>
      <li><strong style="color:var(--heading)">FY25 ARPP:</strong> $55.53 (+14.8% YoY) [Computed: FoA rev / avg DAP]</li>
    </ul>
  </div>

</div>
</div>

<footer>
  <div class="footer-line"></div>
  <p>Levin Capital Strategies &bull; META Interactive Model</p>
  <p style="margin-top:8px;font-size:10px;color:var(--text-muted);opacity:0.5">Last updated: April 16, 2026</p>
</footer>

<div class="toast" id="toast">Scenario URL copied to clipboard</div>

<script>
var PRESETS={
  // s4 = FY27E FOA op margin (%, segment-level); s6 = FY28E RL op loss ($B); s11 = DCF exit EBITDA multiple.
  // Bull: FoA margin expansion thesis + fast RL wind-down. Bear: margin compression + RL drag extends.
  bull:{s1:5.5,s2:15.0,s3:65,s4:58.0,s5:16,s6:6,s7:120,s8:38,s9:45,s10:10.5,s11:17.0,s12:22.0},
  base:{s1:4.0,s2:12.5,s3:40,s4:54.0,s5:16,s6:10,s7:125,s8:42,s9:30,s10:11.5,s11:14.0,s12:18.0},
  street:{s1:3.0,s2:10.0,s3:25,s4:50.0,s5:16.5,s6:14,s7:130,s8:45,s9:25,s10:12.25,s11:12.0,s12:16.5},
  bear:{s1:2.0,s2:7.0,s3:10,s4:46.0,s5:17,s6:20,s7:140,s8:50,s9:15,s10:13.5,s11:10.0,s12:14.0}
};

var BASE={
  rev25:201.0, op25:83.28, eps25:23.49, fcf25:43.59,
  dap25:3.58, arpp25:55.53, rlOp25:-17.7,
  shares:2.53, netCash:58, price:674.20,
  // FY25 observed: NI 60.5 + DA 17 + SBC 16 + WC benefit ~22 = OCF ~115 (matches reported 115.8)
  // SBC grows with AI-era headcount + equity refresh cycles.
  sbcSchedule:[18,20,22,24,26],     // SBC add-back $B/yr for 2026-2030
  wcSchedule:[20,18,15,12,10]       // Working-capital benefit $B/yr (sustained by deferred-revenue + accrual engine, decaying as growth moderates)
};

var currentPreset='base';

function val(id){return parseFloat(document.getElementById(id).value)}

/**
 * Core valuation engine. Takes a full slider dictionary and returns
 * the complete financial trajectory + DCF + EV/EBITDA + blended PT.
 * Pure function — no DOM reads. This lets us run it for each preset
 * without perturbing the UI sliders.
 *
 * s4 is FoA Op Margin (%, segment-level).
 * s6 is FY28E Reality Labs Op Loss ($B); interpolates 2026 (peak) → 2028 target.
 */
function computeScenario(S){
  var foa25=198.8, rl25=2.2;
  var foaOpMargin25=50.8; // FY25 FoA op margin implied: $101B FoA op / $198.8B FoA rev
  // Revenue
  var dap26=BASE.dap25*(1+S.s1/100), dap27=dap26*(1+S.s1/100), dap28=dap27*(1+S.s1/100);
  var arpp26=BASE.arpp25*(1+S.s2/100), arpp27=arpp26*(1+S.s2/100), arpp28=arpp27*(1+S.s2/100);
  var foa26=dap26*arpp26, foa27=dap27*arpp27, foa28=dap28*arpp28;
  var rl26=rl25*(1+S.s3/100), rl27=rl26*(1+S.s3/100), rl28=rl27*(1+S.s3/100);
  var rev26=foa26+rl26, rev27=foa27+rl27, rev28=foa28+rl28;
  // Segment-level operating income: s4 = FY27E FoA op margin (LCS variant: expansion thesis)
  var foaOm26=(foaOpMargin25+S.s4)/2, foaOm27=S.s4, foaOm28=S.s4+0.5;
  var foaOp26=foa26*foaOm26/100, foaOp27=foa27*foaOm27/100, foaOp28=foa28*foaOm28/100;
  // Reality Labs op loss schedule: management guide is "2026 peak", declining to s6 target by FY28
  var rlLoss25=17.7;
  var rlLoss26=rlLoss25+0.8;                  // 2026 peak per mgmt guide (~$18.5B)
  var rlLoss27=(rlLoss26+S.s6)/2+0.5;         // halfway down
  var rlLoss28=S.s6;                          // user-targeted FY28 loss
  // Consolidated operating income (FoA income minus RL loss absolute value)
  var op26=foaOp26-rlLoss26, op27=foaOp27-rlLoss27, op28=foaOp28-rlLoss28;
  var om26=op26/rev26*100, om27=op27/rev27*100, om28=op28/rev28*100;
  // Capex + D&A
  var cap26=S.s7, cap27=S.s7*1.08, cap28=rev28*S.s8/100;
  var da26=17+((cap26-72)/5), da27=da26+((cap27-cap26)/5), da28=da27+((cap28-cap27)/5);
  // Shares retired via buyback: $ spent / avg price = B shares/yr (dimensional: $B / ($/sh) = B shares)
  var bbShares=S.s9/BASE.price;
  var shares26=Math.max(2.35,BASE.shares-bbShares*0.5), shares27=Math.max(2.25,shares26-bbShares), shares28=Math.max(2.15,shares27-bbShares);
  // NI
  var ni26=op26*(1-S.s5/100), ni27=op27*(1-S.s5/100), ni28=op28*(1-S.s5/100);
  var eps26=ni26/shares26, eps27=ni27/shares27, eps28=ni28/shares28;
  // FCF — correct formula: NI + D&A + SBC + WC benefit − Capex
  // Matches Meta's observed FY25: NI 60.5 + DA 17 + SBC 16 + WC 22 = OCF ~116, FCF = 116 − 72 ≈ 44 (reported 43.6).
  var sbc=BASE.sbcSchedule, wc=BASE.wcSchedule;
  var ocf26=ni26+da26+sbc[0]+wc[0], ocf27=ni27+da27+sbc[1]+wc[1], ocf28=ni28+da28+sbc[2]+wc[2];
  var fcf26=ocf26-cap26, fcf27=ocf27-cap27, fcf28=ocf28-cap28;
  // Extend to FY30. Post-peak-capex normalization: capex intensity falls meaningfully
  // by 2029-30 as the AI-infra buildout amortizes and MTIA silicon displaces GPU spend.
  var rev29=rev28*(1+S.s1/100+S.s2/100*0.9)*0.97, rev30=rev29*(1+S.s1/100+S.s2/100*0.8)*0.96;
  var op29=rev29*(S.s4+0.5)/100, op30=rev30*(S.s4+1.0)/100;
  // Capex intensity declines meaningfully in FY29-30 (post-peak-buildout).
  var cap29=rev29*Math.max(28,(S.s8-8))/100, cap30=rev30*Math.max(25,(S.s8-12))/100;
  var da29=da28+((cap29-cap28)/5), da30=da29+((cap30-cap29)/5);
  var ni29=op29*(1-S.s5/100), ni30=op30*(1-S.s5/100);
  var fcf29=(ni29+da29+sbc[3]+wc[3])-cap29;
  var fcf30=(ni30+da30+sbc[4]+wc[4])-cap30;
  // DCF — Exit EBITDA Multiple terminal (sell-side standard for high-capex tech; Gordon
  // Growth structurally undershoots because it assumes perpetual low-single-digit FCF growth
  // off a capex-suppressed base). Exit multiple captures the post-buildout re-rating.
  var wacc=S.s10/100, exitMult=S.s11;
  var ebitda30=op30+da30;
  var tv=ebitda30*exitMult;
  var fcfs=[fcf26,fcf27,fcf28,fcf29,fcf30];
  var disc=fcfs.reduce(function(s,f,i){return s+f/Math.pow(1+wacc,i+1)},0);
  var dcfEV=disc+tv/Math.pow(1+wacc,5);
  var dcfEquity=dcfEV+BASE.netCash;
  // PT in $/sh: equity ($B) / shares (B) = $/sh directly. No unit multiplier.
  var dcfPt=dcfEquity/BASE.shares;
  // EV/EBITDA cross-check using FY27 EBITDA
  var ebitda27=op27+da27;
  var ev27=ebitda27*S.s12;
  var equity27=ev27+BASE.netCash;
  var evPt=equity27/shares27;
  // 50/50 blend
  var blend=(dcfPt+evPt)/2;
  return {
    rev26:rev26,rev27:rev27,rev28:rev28,
    foa26:foa26,foa27:foa27,foa28:foa28,
    rl26:rl26,rl27:rl27,rl28:rl28,
    foaOp26:foaOp26,foaOp27:foaOp27,foaOp28:foaOp28,
    foaOm26:foaOm26,foaOm27:foaOm27,foaOm28:foaOm28,
    rlLoss26:rlLoss26,rlLoss27:rlLoss27,rlLoss28:rlLoss28,
    op26:op26,op27:op27,op28:op28,
    om26:om26,om27:om27,om28:om28,
    da26:da26,da27:da27,da28:da28,
    cap26:cap26,cap27:cap27,cap28:cap28,
    ni26:ni26,ni27:ni27,ni28:ni28,
    eps26:eps26,eps27:eps27,eps28:eps28,
    fcf26:fcf26,fcf27:fcf27,fcf28:fcf28,fcf29:fcf29,fcf30:fcf30,
    ocf26:ocf26,ocf27:ocf27,ocf28:ocf28,
    ebitda27:ebitda27,
    shares27:shares27,
    dcfPt:dcfPt,evPt:evPt,blend:blend
  };
}

function update(){
  var S={};
  for(var i=1;i<=12;i++)S['s'+i]=val('s'+i);
  document.getElementById('v1').textContent=S.s1.toFixed(1)+'%';
  document.getElementById('v2').textContent=S.s2.toFixed(1)+'%';
  document.getElementById('v3').textContent=S.s3.toFixed(0)+'%';
  document.getElementById('v4').textContent=S.s4.toFixed(1)+'%';
  document.getElementById('v5').textContent=S.s5.toFixed(1)+'%';
  document.getElementById('v6').textContent='$'+S.s6.toFixed(1)+'B';
  document.getElementById('v7').textContent='$'+S.s7.toFixed(0)+'B';
  document.getElementById('v8').textContent=S.s8.toFixed(1)+'%';
  document.getElementById('v9').textContent='$'+S.s9.toFixed(0)+'B';
  document.getElementById('v10').textContent=S.s10.toFixed(2)+'%';
  document.getElementById('v11').textContent=S.s11.toFixed(1)+'x';
  document.getElementById('v12').textContent=S.s12.toFixed(1)+'x';

  var r=computeScenario(S);

  // Bridge table
  var tbody=document.getElementById('bridgeBody');
  tbody.innerHTML=''+
    row(['Revenue','$'+BASE.rev25.toFixed(1),'$'+r.rev26.toFixed(0),'$'+r.rev27.toFixed(0),'$'+r.rev28.toFixed(0)])+
    row(['&nbsp;&nbsp;Family of Apps','$198.8','$'+r.foa26.toFixed(0),'$'+r.foa27.toFixed(0),'$'+r.foa28.toFixed(0)])+
    row(['&nbsp;&nbsp;Reality Labs','$2.2','$'+r.rl26.toFixed(1),'$'+r.rl27.toFixed(1),'$'+r.rl28.toFixed(1)])+
    row(['FoA Op Income','$101.0','$'+r.foaOp26.toFixed(0),'$'+r.foaOp27.toFixed(0),'$'+r.foaOp28.toFixed(0)])+
    row(['FoA Op Margin','50.8%',r.foaOm26.toFixed(1)+'%',r.foaOm27.toFixed(1)+'%',r.foaOm28.toFixed(1)+'%'])+
    row(['RL Op Loss','($17.7)','($'+r.rlLoss26.toFixed(1)+')','($'+r.rlLoss27.toFixed(1)+')','($'+r.rlLoss28.toFixed(1)+')'])+
    row(['Consolidated Op Income','$'+BASE.op25.toFixed(1),'$'+r.op26.toFixed(0),'$'+r.op27.toFixed(0),'$'+r.op28.toFixed(0)])+
    row(['Consolidated Op Margin','41.4%',r.om26.toFixed(1)+'%',r.om27.toFixed(1)+'%',r.om28.toFixed(1)+'%'])+
    row(['D&amp;A','$17.0','$'+r.da26.toFixed(0),'$'+r.da27.toFixed(0),'$'+r.da28.toFixed(0)])+
    row(['SBC (add-back)','$16.0','$18.0','$20.0','$22.0'])+
    row(['Capex','($72.2)','($'+r.cap26.toFixed(0)+')','($'+r.cap27.toFixed(0)+')','($'+r.cap28.toFixed(0)+')'])+
    row(['Net Income','$60.5','$'+r.ni26.toFixed(0),'$'+r.ni27.toFixed(0),'$'+r.ni28.toFixed(0)])+
    row(['Diluted EPS','$'+BASE.eps25.toFixed(2),'$'+r.eps26.toFixed(2),'$'+r.eps27.toFixed(2),'$'+r.eps28.toFixed(2)],'total')+
    row(['OCF','$115.8','$'+r.ocf26.toFixed(0),'$'+r.ocf27.toFixed(0),'$'+r.ocf28.toFixed(0)])+
    row(['Free Cash Flow','$'+BASE.fcf25.toFixed(1),'$'+r.fcf26.toFixed(0),'$'+r.fcf27.toFixed(0),'$'+r.fcf28.toFixed(0)]);

  // DCF / EV / Blend
  document.getElementById('dcfPt').textContent='$'+Math.round(r.dcfPt);
  var dcfUp=((r.dcfPt-BASE.price)/BASE.price*100);
  document.getElementById('dcfUp').textContent=(dcfUp>=0?'+':'')+dcfUp.toFixed(0)+'% vs $674';
  document.getElementById('dcfUp').className='val-sub '+(dcfUp>=0?'pos':'neg');
  document.getElementById('dcfDetail').textContent='FY26-30 FCF + '+S.s11.toFixed(1)+'x FY30E EBITDA exit. WACC '+S.s10.toFixed(2)+'%. FCF 2026: $'+Math.round(r.fcf26)+'B \u2192 2030: $'+Math.round(r.fcf30)+'B.';

  document.getElementById('evPt').textContent='$'+Math.round(r.evPt);
  var evUp=((r.evPt-BASE.price)/BASE.price*100);
  document.getElementById('evUp').textContent=(evUp>=0?'+':'')+evUp.toFixed(0)+'% vs $674';
  document.getElementById('evUp').className='val-sub '+(evUp>=0?'pos':'neg');
  document.getElementById('evDetail').textContent=S.s12.toFixed(1)+'x FY27E EBITDA of $'+Math.round(r.ebitda27)+'B + net cash, /'+r.shares27.toFixed(2)+'B shares';

  document.getElementById('blendPt').textContent='$'+Math.round(r.blend);
  var blendUp=((r.blend-BASE.price)/BASE.price*100);
  document.getElementById('blendUp').textContent=(blendUp>=0?'+':'')+blendUp.toFixed(0)+'% vs $674';
  document.getElementById('blendUp').className='val-sub '+(blendUp>=0?'pos':'neg');

  // Drive scenario cards from presets (output, not inputs)
  refreshScenarioCards();

  buildSens1(S,r);
  buildSens2(S,r);
  updateProbs();
}

function refreshScenarioCards(){
  ['bull','base','street','bear'].forEach(function(name){
    var r=computeScenario(PRESETS[name]);
    var id=name.charAt(0).toUpperCase()+name.slice(1);
    var pt=Math.round(r.blend);
    document.getElementById('s'+id).textContent='$'+pt;
    var ret=((pt-BASE.price)/BASE.price*100);
    var el=document.getElementById('s'+id+'Ret');
    el.textContent=(ret>=0?'+':'')+ret.toFixed(0)+'%';
    el.style.color=ret>=0?'var(--forest)':'var(--red)';
  });
}

function getScenarioPTs(){
  var out={};
  ['bull','base','street','bear'].forEach(function(name){out[name]=computeScenario(PRESETS[name]).blend});
  return out;
}

function row(cells,cls){
  return '<tr'+(cls?' class="'+cls+'"':'')+'>'+cells.map(function(c){return '<td>'+c+'</td>'}).join('')+'</tr>';
}

function buildSens1(S,r){
  var arppCur=S.s2, omCur=S.s4;
  var arppVals=[arppCur-4,arppCur-2,arppCur,arppCur+2,arppCur+4];
  var omVals=[omCur-3,omCur-1.5,omCur,omCur+1.5,omCur+3];
  var t=document.getElementById('sensTable1');
  var html='<thead><tr><th>ARPP \\\\ OpM</th>';
  omVals.forEach(function(o){html+='<th>'+o.toFixed(1)+'%</th>'});
  html+='</tr></thead><tbody>';
  arppVals.forEach(function(a,ai){
    html+='<tr><th>'+a.toFixed(1)+'%</th>';
    omVals.forEach(function(o,oi){
      // Re-run scenario with this arpp/om cell
      var Scell=Object.assign({},S,{s2:a,s4:o});
      var rcell=computeScenario(Scell);
      var cls=(ai===2&&oi===2)?' class="center-cell"':'';
      html+='<td'+cls+'>$'+rcell.eps27.toFixed(2)+'</td>';
    });
    html+='</tr>';
  });
  html+='</tbody>';
  t.innerHTML=html;
}

function buildSens2(S,r){
  var waccCur=S.s10, mCur=S.s11;
  var wVals=[waccCur-1.5,waccCur-0.75,waccCur,waccCur+0.75,waccCur+1.5];
  var mVals=[mCur-3,mCur-1.5,mCur,mCur+1.5,mCur+3];
  var t=document.getElementById('sensTable2');
  var html='<thead><tr><th>WACC \\\\ Exit Mult</th>';
  mVals.forEach(function(mm){html+='<th>'+mm.toFixed(1)+'x</th>'});
  html+='</tr></thead><tbody>';
  wVals.forEach(function(w,wi){
    html+='<tr><th>'+w.toFixed(2)+'%</th>';
    mVals.forEach(function(mm,mi){
      var Scell=Object.assign({},S,{s10:w,s11:mm});
      var rcell=computeScenario(Scell);
      var cls=(wi===2&&mi===2)?' class="center-cell"':'';
      html+='<td'+cls+'>$'+Math.round(rcell.dcfPt)+'</td>';
    });
    html+='</tr>';
  });
  html+='</tbody>';
  t.innerHTML=html;
}

function updateProbs(){
  var pb=val('pBull'),pa=val('pBase'),ps=val('pStreet'),px=val('pBear');
  document.getElementById('pBullV').textContent=pb.toFixed(0);
  document.getElementById('pBaseV').textContent=pa.toFixed(0);
  document.getElementById('pStreetV').textContent=ps.toFixed(0);
  document.getElementById('pBearV').textContent=px.toFixed(0);
  var tot=pb+pa+ps+px;
  var pt=document.getElementById('probTotal');
  if(Math.abs(tot-100)<0.5){pt.className='prob-total ok';pt.innerHTML='Sum: '+tot.toFixed(0)+'% &#10003;'}
  else{pt.className='prob-total err';pt.innerHTML='Sum: '+tot.toFixed(0)+'% &mdash; adjust to 100%'}
  // Compute each scenario PT from preset values (pure output, no slider feedback)
  var scn=getScenarioPTs();
  var evPT=(pb*scn.bull+pa*scn.base+ps*scn.street+px*scn.bear)/Math.max(tot,1);
  document.getElementById('evPT').textContent='$'+Math.round(evPT);
  var ret=((evPT-BASE.price)/BASE.price*100);
  document.getElementById('evPTRet').textContent='vs. $674 current &rarr; '+(ret>=0?'+':'')+ret.toFixed(0)+'% expected return';
}

function applyPreset(name){
  var p=PRESETS[name];
  currentPreset=name;
  Object.keys(p).forEach(function(k){document.getElementById(k).value=p[k]});
  document.querySelectorAll('.preset-btn').forEach(function(b){b.classList.remove('active')});
  document.querySelector('.preset-btn.'+name).classList.add('active');
  update();
}

function shareScenario(){
  var state={};
  for(var i=1;i<=12;i++)state['s'+i]=val('s'+i);
  state.pBull=val('pBull');state.pBase=val('pBase');state.pStreet=val('pStreet');state.pBear=val('pBear');
  var hash='#'+btoa(JSON.stringify(state));
  var url=location.origin+location.pathname+hash;
  navigator.clipboard&&navigator.clipboard.writeText(url).then(function(){
    var t=document.getElementById('toast');t.classList.add('show');setTimeout(function(){t.classList.remove('show')},2000);
  });
  history.replaceState(null,'',hash);
}

function loadFromHash(){
  if(!location.hash)return;
  try{
    var state=JSON.parse(atob(location.hash.slice(1)));
    Object.keys(state).forEach(function(k){var el=document.getElementById(k);if(el)el.value=state[k]});
    document.querySelectorAll('.preset-btn').forEach(function(b){b.classList.remove('active')});
    update();
  }catch(e){}
}

document.addEventListener('keydown',function(e){
  if(e.target.tagName==='INPUT')return;
  if(e.key==='1')applyPreset('bull');
  if(e.key==='2')applyPreset('base');
  if(e.key==='3')applyPreset('street');
  if(e.key==='4')applyPreset('bear');
  if(e.key==='r'||e.key==='R')applyPreset('base');
});

function toggleDark(){document.documentElement.classList.toggle('dark');var isDark=document.documentElement.classList.contains('dark');document.querySelector('.dark-toggle').innerHTML=isDark?'&#9788;':'&#9790;';try{localStorage.setItem('lcs-dark',isDark?'1':'0')}catch(e){}}
try{if(localStorage.getItem('lcs-dark')==='1'){document.documentElement.classList.add('dark');var b=document.querySelector('.dark-toggle');if(b)b.innerHTML='&#9788;'}}catch(e){}

loadFromHash();
update();
<\/script>
</body>
</html>`;
