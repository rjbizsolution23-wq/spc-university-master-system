#!/usr/bin/env bash
# ONE-STEP GPU HOOKUP — run this after you add credit to RunPod.
# Usage: ./connect_gpu.sh <RUNPOD_SERVERLESS_ENDPOINT_ID> <RUNPOD_API_KEY> [HF_MODEL]
# Prereq (RunPod console, ~2 min): Serverless > New Endpoint > "vLLM" template,
#   model = Qwen/Qwen3.8-27B-FP8 (Apache-2.0), GPU = 48GB (L40S/A6000), Min workers = 0 (scale to zero).
set -euo pipefail
EP="${1:?endpoint id}"; KEY="${2:?runpod api key}"; MODEL="${3:-Qwen/Qwen3.8-27B-FP8}"
cd "$(dirname "$0")/.."
export CLOUDFLARE_ACCOUNT_ID=3ccbc7fb8314ac7a4a8908079ed583ed
URL="https://api.runpod.ai/v2/${EP}/openai/v1"
echo "Testing endpoint..."
curl -fsS -m 120 "$URL/chat/completions" -H "Authorization: Bearer $KEY" -H 'content-type: application/json' \
  -d "{\"model\":\"$MODEL\",\"messages\":[{\"role\":\"user\",\"content\":\"Say OK\"}],\"max_tokens\":20}" >/dev/null && echo "GPU endpoint OK"
printf %s "$URL"   | wrangler secret put GPU_ENDPOINT_URL
printf %s "$KEY"   | wrangler secret put GPU_API_KEY
printf %s "$MODEL" | wrangler secret put GPU_MODEL
echo "Done. The 'Private GPU' tier now routes to your GPU. Check: curl https://trustgpt.hfrngmg.workers.dev/api/health"
# --- Optional VIDEO studio (Wan 2.2): create a SECOND RunPod serverless endpoint for your video worker, then:
#   printf %s "<VIDEO_ENDPOINT_ID>" | wrangler secret put VIDEO_ENDPOINT_ID
