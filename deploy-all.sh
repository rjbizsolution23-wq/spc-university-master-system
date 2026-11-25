#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo "=================================================================="
echo "🏛️ SPC UNIVERSITY — PRODUCTION CLOUDFLARE EDGE DEPLOYMENT SUITE"
echo "=================================================================="

echo "1/3 · Validating JavaScript syntax across TrustGPT OS & Portal Worker..."
node --check "$ROOT_DIR/trustgpt-saas/src/index.js"
node --check "$ROOT_DIR/trustgpt-saas/src/ui.js"
node --check "$ROOT_DIR/portal-books-brandkit-worker/src/index.js"
echo "✅ Syntax checks passed."

echo "2/3 · Deploying Worker #1: trustgpt (TrustGPT OS, 18 AI Models, 167 Tutors, Book Maker & APIs)..."
(cd "$ROOT_DIR/trustgpt-saas" && npx wrangler deploy)

echo "3/3 · Deploying Worker #2: spc-university-portal (Website Brand/SEO Engine, Member Back-Office Bar & 6-Book Vault)..."
(cd "$ROOT_DIR/portal-books-brandkit-worker" && npx wrangler deploy)

echo "=================================================================="
echo "✅ ALL SPC UNIVERSITY WORKERS DEPLOYED LIVE TO PRODUCTION"
echo "   • Main Website & Lead-Magnet Bot: https://spcuniversity.com/"
echo "   • Member Back Office & AI Suite:  https://member.spcuniversity.com/dashboard"
echo "   • Native Back-Office TrustGPT OS: https://member.spcuniversity.com/app"
echo "   • Mr. Yusef Admin Walkthrough:    https://spcuniversity.com/yusef"
echo "=================================================================="
