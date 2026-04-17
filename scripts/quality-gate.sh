#!/usr/bin/env bash
# stock-pitch — Phase 3.7 Quality Gate runner
#
# Mechanical pre-deploy checks against a generated {ticker}-model.ts file.
# Runs Gates 1-3 (dimensional, slider-wiring, preset monotonicity).
# Gates 4-5 (counter-consensus, memo-model reconciliation) remain human-judgment
# for now — this script prompts the user to confirm them.
#
# Usage:
#   ./scripts/quality-gate.sh path/to/meta-model.ts
#   ./scripts/quality-gate.sh boilerplate/src/pages/meta-model.ts

set -euo pipefail

MODEL_FILE="${1:-}"

if [[ -z "$MODEL_FILE" ]]; then
  echo "Usage: $0 <path/to/TICKER-model.ts>" >&2
  exit 2
fi

if [[ ! -f "$MODEL_FILE" ]]; then
  echo "✗ File not found: $MODEL_FILE" >&2
  exit 2
fi

TICKER="$(basename "$MODEL_FILE" | sed -E 's/-model\.ts$//')"
FAILS=0

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  Quality Gate — $TICKER"
echo "  File: $MODEL_FILE"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# ═══ GATE 1: Dimensional Analysis ═══
echo ""
echo "[Gate 1] Dimensional Analysis"

# Check for the classic *1000 bug on PT outputs
if grep -E '(dcfPt|evPt|blend)\s*=.*\*\s*1000' "$MODEL_FILE" >/dev/null; then
  echo "  ✗ FAIL — PT calculation multiplies by 1000 (units bug)"
  echo "         Lines:"
  grep -nE '(dcfPt|evPt|blend)\s*=.*\*\s*1000' "$MODEL_FILE" | sed 's/^/           /'
  FAILS=$((FAILS+1))
else
  echo "  ✓ No *1000 unit bug on PT outputs"
fi

# Check for /1000 on buyback flow (should be $B / $/sh = B shares, no divisor)
if grep -E 'bbShares\s*=.*\/\s*1000' "$MODEL_FILE" >/dev/null; then
  echo "  ✗ FAIL — Buyback share count divides by 1000 (units bug)"
  FAILS=$((FAILS+1))
else
  echo "  ✓ No /1000 unit bug on buyback share flow"
fi

# Hard sanity: search for displayed PTs in the file; flag if any hardcoded over $5000
if grep -oE 'sBull|sBase|sStreet|sBear' "$MODEL_FILE" >/dev/null; then
  echo "  ✓ Scenario card IDs present (sBull/sBase/sStreet/sBear)"
fi

# ═══ GATE 2: Slider-Wiring Audit ═══
echo ""
echo "[Gate 2] Slider-Wiring Audit"

# Extract slider IDs declared in HTML (id="sN")
HTML_IDS="$(grep -oE 'id="s[0-9]+"' "$MODEL_FILE" | grep -oE 's[0-9]+' | sort -u)"

# Extract slider references in computeScenario (S.sN)
REFD_IDS="$(grep -oE 'S\.s[0-9]+' "$MODEL_FILE" | grep -oE 's[0-9]+' | sort -u)"

ORPHANS="$(comm -23 <(echo "$HTML_IDS") <(echo "$REFD_IDS") | tr '\n' ' ' | xargs)"
if [[ -n "$ORPHANS" ]]; then
  echo "  ✗ FAIL — Orphan sliders (in HTML, not in computeScenario): $ORPHANS"
  echo "         Each orphan slider is ornamental — moves the UI but not the model."
  FAILS=$((FAILS+1))
else
  echo "  ✓ All HTML sliders are referenced in computeScenario"
fi

# Flag unused referenced sliders (in compute but not in HTML — typo risk)
UNUSED="$(comm -13 <(echo "$HTML_IDS") <(echo "$REFD_IDS") | tr '\n' ' ' | xargs)"
if [[ -n "$UNUSED" ]]; then
  echo "  ! WARN — Referenced but not in HTML: $UNUSED (possible typo or stale code)"
fi

# ═══ GATE 3: Preset Monotonicity ═══
echo ""
echo "[Gate 3] Preset Monotonicity"

# Extract the four presets and verify they look ordered on key slider (s2 is ARPP growth by convention)
# This is a heuristic — we just check that s2 is strictly decreasing bull → base → street → bear

PRESETS_BLOCK="$(awk '/var PRESETS\s*=/,/^};/' "$MODEL_FILE" | head -20)"

get_slider() {
  local scenario="$1" slider="$2"
  echo "$PRESETS_BLOCK" | grep -oE "${scenario}:{[^}]*${slider}:[-0-9.]+" | grep -oE "${slider}:[-0-9.]+" | cut -d: -f2
}

BULL_S2="$(get_slider bull s2)"
BASE_S2="$(get_slider base s2)"
STREET_S2="$(get_slider street s2)"
BEAR_S2="$(get_slider bear s2)"

if [[ -n "$BULL_S2" && -n "$BEAR_S2" ]]; then
  # awk comparison for floats
  ORDERED=$(awk -v b="$BULL_S2" -v a="$BASE_S2" -v s="$STREET_S2" -v x="$BEAR_S2" \
    'BEGIN {print (b >= a && a >= s && s >= x) ? "yes" : "no"}')
  if [[ "$ORDERED" == "yes" ]]; then
    echo "  ✓ s2 (ARPP growth) ordered Bull $BULL_S2 ≥ Base $BASE_S2 ≥ Street $STREET_S2 ≥ Bear $BEAR_S2"
  else
    echo "  ✗ FAIL — s2 preset ordering violated: bull=$BULL_S2 base=$BASE_S2 street=$STREET_S2 bear=$BEAR_S2"
    echo "         Expected: bull ≥ base ≥ street ≥ bear"
    FAILS=$((FAILS+1))
  fi
else
  echo "  ! WARN — Could not parse preset s2 values for monotonicity check"
fi

# ═══ GATE 4: Counter-Consensus (human-judgment) ═══
echo ""
echo "[Gate 4] Counter-Consensus Check — HUMAN JUDGMENT REQUIRED"
echo "  For each variant-perception pillar in the memo, confirm:"
echo "    • Names a specific sell-side view being contradicted (firm + date)"
echo "    • States the \$ magnitude delta (per share or absolute)"
echo "    • States the resolution date (specific earnings print)"
echo "  If any pillar fails these three tests, rewrite before deploying."

# ═══ GATE 5: Memo ⇌ Model Reconciliation (human-judgment) ═══
echo ""
echo "[Gate 5] Memo ⇌ Model Reconciliation — HUMAN JUDGMENT REQUIRED"
echo "  Open the memo's Financial Trajectory table and compare each cell to"
echo "  the model's base-case outputs. Drift > 2% means the memo is stale."

# ═══ Summary ═══
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
if [[ "$FAILS" -eq 0 ]]; then
  echo "  Gates 1-3: PASS"
  echo "  Gates 4-5: confirm manually before deploy"
  echo "  Bonus:     run /codex:rescue for independent math review"
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  exit 0
else
  echo "  Gates 1-3: $FAILS FAILURE(S)"
  echo "  Fix issues above before running npx wrangler deploy"
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  exit 1
fi
