#!/usr/bin/env bash
# Run ON the UGREEN NAS (SSH) to build the Model Vault. Needs python3 + pip.
# Usage: HF_TOKEN=hf_xxx ./nas_model_vault.sh [/path/to/Model-Vault]
set -euo pipefail
V="${1:-/volume1/Model-Vault}"; mkdir -p "$V"; cd "$V"
python3 -m pip install -q -U "huggingface_hub[cli]"
dl(){ echo ">> $1"; huggingface-cli download "$1" --local-dir "$V/$(basename "$1")"; }
dl Qwen/Qwen3.8-27B-FP8                  # ~28 GB  main TrustGPT model (Apache-2.0)
dl MiniMaxAI/MiniMax-H3                  # ~33 GB  fast chat (custom license - review)
dl black-forest-labs/FLUX.2-klein-4B     # ~8 GB   images (Apache-2.0)
dl Wan-AI/Wan2.2-T2V-A14B-Diffusers      # ~60 GB  video (Apache-2.0)
dl Qwen/Qwen3-Embedding-0.6B             # small   embeddings
df -h "$V"
