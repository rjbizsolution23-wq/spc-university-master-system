# TrustGPT (SPC University) — operations notes
Live: https://trustgpt.hfrngmg.workers.dev  | Cloudflare account 3ccbc7fb8314ac7a4a8908079ed583ed

## Stack
Worker (src/index.js) + D1 (users, credits, ledger, memories, jobs, api_keys) + KV (sessions, cache, rate limits)
+ R2 `trustgpt-media` (images/video) + Vectorize `trustgpt-kb` (bge-m3, 1024d) + Workers AI + NVIDIA NIM.

## Tiers (credits): fast 0, standard 0 (daily free limit), premium 1, frontier 3 (NIM Nemotron 550B),
council 4 (up to 6 models in parallel + chair synthesis; refunds to premium price if <2 experts answer),
gpu 1 (your RunPod vLLM; free fallback while offline), image 5, video 25 (needs VIDEO_ENDPOINT_ID).

## Secrets (wrangler secret put): ADMIN_TOKEN, NVIDIA_API_KEY [set]; GPU_ENDPOINT_URL, GPU_API_KEY, GPU_MODEL,
VIDEO_ENDPOINT_ID, STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET [not set]. Var CREDIT_PACKS e.g.
{"starter":{"price":"price_xxx","credits":100}}. Stripe webhook URL: /api/stripe/webhook (event checkout.session.completed).

## Admin: POST /api/admin/grant  Authorization: Bearer $ADMIN_TOKEN  {"email":"..","credits":50,"plan":"pro"}

## Scripts: scripts/connect_gpu.sh (GPU hookup), scripts/nas_model_vault.sh (run on NAS), schema*.sql (D1)
Reindex library: rebuild src/kb.json, embed with @cf/baai/bge-m3, `wrangler vectorize insert trustgpt-kb --file=vectors.ndjson`.
Live model check: probe every Cloudflare model before relying on it (catalog entries can be deprecated).
