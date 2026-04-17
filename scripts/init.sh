#!/usr/bin/env bash
# stock-pitch — one-command Cloudflare Worker bootstrap
#
# Run from the boilerplate/ directory. Sets up wrangler.toml from the template,
# verifies wrangler login, and runs the first deploy.

set -euo pipefail

# Locate paths relative to this script
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
REPO_ROOT="$( dirname "$SCRIPT_DIR" )"
BOILERPLATE_DIR="$REPO_ROOT/boilerplate"

# Run from boilerplate regardless of where the user invoked the script
if [[ "$(pwd)" != "$BOILERPLATE_DIR" ]]; then
  cd "$BOILERPLATE_DIR"
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  stock-pitch — Cloudflare Worker bootstrap"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# 1) Node version check
NODE_MAJOR="$(node -v 2>/dev/null | sed -E 's/^v([0-9]+).*/\1/' || echo 0)"
if [[ "$NODE_MAJOR" -lt 20 ]]; then
  echo "✗ Node 20+ required. Detected: $(node -v 2>/dev/null || echo 'not installed')"
  echo "  Fix: nvm install 20 && nvm use 20"
  exit 1
fi
echo "✓ Node $(node -v)"

# 2) npm install if node_modules missing
if [[ ! -d node_modules ]]; then
  echo ""
  echo "→ Installing dependencies (first run only, ~30s)..."
  npm install
fi

# 3) Wrangler login check
echo ""
echo "→ Checking Cloudflare authentication..."
if ! npx --yes wrangler whoami >/dev/null 2>&1; then
  echo "  Not logged in. Opening browser for OAuth..."
  echo "  (Press Ctrl+C to abort, then re-run this script after login.)"
  npx --yes wrangler login
fi

# Confirm whoami succeeded
WHOAMI_JSON="$(npx --yes wrangler whoami 2>&1 || true)"
ACCOUNT_LINE="$(echo "$WHOAMI_JSON" | grep -E "Account ID|logged in" | head -1 || echo '')"
echo "✓ Wrangler authenticated"
[[ -n "$ACCOUNT_LINE" ]] && echo "  $ACCOUNT_LINE"

# 4) Worker name prompt
DEFAULT_NAME="$(whoami)-research"
if [[ -f wrangler.toml ]]; then
  EXISTING_NAME="$(grep -E '^name = ' wrangler.toml | head -1 | sed -E 's/name = "(.+)"/\1/' || echo '')"
  if [[ -n "$EXISTING_NAME" ]]; then
    echo ""
    echo "✓ wrangler.toml already exists with worker name: $EXISTING_NAME"
    echo "  (Delete wrangler.toml and re-run to change it.)"
    WORKER_NAME="$EXISTING_NAME"
  fi
fi

if [[ -z "${WORKER_NAME:-}" ]]; then
  echo ""
  read -r -p "Worker name [$DEFAULT_NAME]: " WORKER_NAME
  WORKER_NAME="${WORKER_NAME:-$DEFAULT_NAME}"

  # Sanitize: lowercase, alphanumeric + hyphen, no trailing hyphen
  WORKER_NAME="$(echo "$WORKER_NAME" | tr '[:upper:]' '[:lower:]' | sed -E 's/[^a-z0-9-]/-/g; s/--+/-/g; s/^-+//; s/-+$//')"

  # 5) Create wrangler.toml from template
  if [[ ! -f wrangler.toml.example ]]; then
    echo "✗ boilerplate/wrangler.toml.example not found. Re-clone the repo."
    exit 1
  fi

  sed "s/^name = \"stock-research-portal\"/name = \"$WORKER_NAME\"/" \
    wrangler.toml.example > wrangler.toml
  echo ""
  echo "✓ Created wrangler.toml with name: $WORKER_NAME"
fi

# 6) First deploy
echo ""
echo "→ Deploying Worker (first run, ~30s)..."
echo ""
DEPLOY_OUTPUT="$(npx --yes wrangler deploy 2>&1)"
echo "$DEPLOY_OUTPUT"

# 7) Extract URL
WORKER_URL="$(echo "$DEPLOY_OUTPUT" | grep -oE 'https://[a-z0-9-]+\.[a-z0-9-]+\.workers\.dev' | head -1 || echo '')"

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  Bootstrap complete"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

if [[ -n "$WORKER_URL" ]]; then
  echo ""
  echo "  Worker URL:  $WORKER_URL"
  echo "  Verify:      curl -s -o /dev/null -w \"%{http_code}\\n\" $WORKER_URL"
fi

echo ""
echo "  Next steps:"
echo "    1. In a Claude Code session: /stock-pitch:stock-pitch TICKER"
echo "    2. The skill generates + deploys your portal automatically."
echo "    3. Live at ${WORKER_URL:-YOUR_URL}/research/ticker/"
echo ""
