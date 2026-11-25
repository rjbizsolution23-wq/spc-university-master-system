#!/usr/bin/env python3
"""
SPC UNIVERSITY — AUTOMATED CLOUDFLARE PRO + ZERO TRUST NAS TUNNEL + DNS PROVISIONER
Account ID: 3ccbc7fb8314ac7a4a8908079ed583ed (Hfrngmg@gmail.com's Account)
Zone ID:    3dc512ef137d5fe0cbe6063223536984 (spcuniversity.com — Pro Website Plan)
Assigned Cloudflare Nameservers:
  - ivan.ns.cloudflare.com
  - sky.ns.cloudflare.com
"""
import json
import os
import secrets
import sys
import base64
import urllib.request
import urllib.error

ACCOUNT_ID = "3ccbc7fb8314ac7a4a8908079ed583ed"
ZONE_ID = "3dc512ef137d5fe0cbe6063223536984"
DOMAIN = "spcuniversity.com"
A2_SERVER_IP = "106.0.62.102"
SHOWCASE_WORKER_HOST = "spc-university-showcase.rickjefferson.workers.dev"


def build_headers(auth_token: str, auth_email: str = "hfrngmg@gmail.com"):
    # Supports both Bearer API Token (cfut_... / 40-char token) and Global API Key (37-char hex)
    if len(auth_token) == 37 and all(c in "0123456789abcdefABCDEF" for c in auth_token):
        return {
            "X-Auth-Email": auth_email,
            "X-Auth-Key": auth_token,
            "Content-Type": "application/json",
        }
    return {
        "Authorization": f"Bearer {auth_token}",
        "Content-Type": "application/json",
    }


def cf_request(method: str, endpoint: str, headers: dict, payload=None):
    url = f"https://api.cloudflare.com/client/v4/{endpoint}"
    data = json.dumps(payload).encode("utf-8") if payload is not None else None
    req = urllib.request.Request(url, data=data, headers=headers, method=method)
    try:
        with urllib.request.urlopen(req) as resp:
            return json.loads(resp.read().decode("utf-8"))
    except urllib.error.HTTPError as e:
        body = e.read().decode("utf-8")
        try:
            return json.loads(body)
        except Exception:
            return {"success": False, "error": e.code, "body": body}


def provision_all(auth_token: str):
    headers = build_headers(auth_token)
    print("=================================================================")
    print("🏛️  SPC UNIVERSITY — CLOUDFLARE PRO & NAS TUNNEL PROVISIONING")
    print("=================================================================")

    # 1. Fetch existing DNS records
    existing_resp = cf_request("GET", f"zones/{ZONE_ID}/dns_records?per_page=100", headers)
    if not existing_resp.get("success"):
        print("❌ Failed to read DNS records:", json.dumps(existing_resp, indent=2))
        sys.exit(1)

    existing = {(r["type"], r["name"]): r for r in existing_resp.get("result", [])}
    print(f"✓ Found {len(existing)} existing DNS record(s) in {DOMAIN}")

    # 2. Target DNS Architecture
    # - Root (@) & www proxied through Cloudflare Edge
    # - mail, webmail, cpanel unproxied (DNS-only) to 106.0.62.102 so existing email works seamlessly
    # - portal, books, brand routed directly to the Master Showcase Worker
    target_records = [
        {"type": "A", "name": "spcuniversity.com", "content": A2_SERVER_IP, "ttl": 1, "proxied": True},
        {"type": "CNAME", "name": "www.spcuniversity.com", "content": "spcuniversity.com", "ttl": 1, "proxied": True},
        {"type": "A", "name": "mail.spcuniversity.com", "content": A2_SERVER_IP, "ttl": 1, "proxied": False},
        {"type": "A", "name": "webmail.spcuniversity.com", "content": A2_SERVER_IP, "ttl": 1, "proxied": False},
        {"type": "A", "name": "cpanel.spcuniversity.com", "content": A2_SERVER_IP, "ttl": 1, "proxied": False},
        {"type": "CNAME", "name": "portal.spcuniversity.com", "content": SHOWCASE_WORKER_HOST, "ttl": 1, "proxied": True},
        {"type": "CNAME", "name": "books.spcuniversity.com", "content": SHOWCASE_WORKER_HOST, "ttl": 1, "proxied": True},
        {"type": "CNAME", "name": "brand.spcuniversity.com", "content": SHOWCASE_WORKER_HOST, "ttl": 1, "proxied": True},
    ]

    print("\n--- Step 1: Provisioning DNS Records ---")
    for rec in target_records:
        key = (rec["type"], rec["name"])
        if key in existing:
            rec_id = existing[key]["id"]
            res = cf_request("PUT", f"zones/{ZONE_ID}/dns_records/{rec_id}", headers, rec)
            action = "UPDATED"
        else:
            res = cf_request("POST", f"zones/{ZONE_ID}/dns_records", headers, rec)
            action = "CREATED"
        status = "✅" if res.get("success") else "❌"
        print(f"{status} [{action}] {rec['type']:<6} {rec['name']:<28} -> {rec['content']} (proxied={rec['proxied']})")
        if not res.get("success"):
            print("   Error:", res.get("errors"))

    # 3. Configure SSL/TLS & HTTPS Settings
    print("\n--- Step 2: Hardening SSL/TLS & Edge Security Settings ---")
    settings = [
        ("ssl", "full"),
        ("always_use_https", "on"),
        ("min_tls_version", "1.2"),
        ("automatic_https_rewrites", "on"),
        ("brotli", "on"),
        ("http3", "on"),
    ]
    for setting_id, val in settings:
        res = cf_request("PATCH", f"zones/{ZONE_ID}/settings/{setting_id}", headers, {"value": val})
        status = "✅" if res.get("success") else "⚠️"
        print(f"{status} Zone Setting '{setting_id}' -> {val}")

    # 4. Create Cloudflare Zero Trust Tunnel for UGREEN NAS (ucag-billions)
    print("\n--- Step 3: Provisioning Cloudflare Zero Trust Tunnel for UGREEN NAS ---")
    tunnels_resp = cf_request("GET", f"accounts/{ACCOUNT_ID}/cfd_tunnel?is_deleted=false", headers)
    if tunnels_resp.get("success"):
        existing_tunnels = tunnels_resp.get("result", [])
        nas_tunnel = next((t for t in existing_tunnels if t["name"] == "ugreen-nas-ucag-billions"), None)
        if not nas_tunnel:
            secret_bytes = base64.b64encode(secrets.token_bytes(32)).decode("utf-8")
            create_tun = cf_request(
                "POST",
                f"accounts/{ACCOUNT_ID}/cfd_tunnel",
                headers,
                {"name": "ugreen-nas-ucag-billions", "tunnel_secret": secret_bytes, "config_src": "cloudflare"},
            )
            if create_tun.get("success"):
                nas_tunnel = create_tun["result"]
                print(f"✅ Created Cloudflare Tunnel: {nas_tunnel['name']} (ID: {nas_tunnel['id']})")
            else:
                print("⚠️ Could not create Cloudflare Tunnel (check Cloudflare Tunnel:Edit permission):", create_tun.get("errors"))
        else:
            print(f"✅ Found existing Cloudflare Tunnel: {nas_tunnel['name']} (ID: {nas_tunnel['id']})")

        if nas_tunnel:
            tun_id = nas_tunnel["id"]
            # Route vault.spcuniversity.com -> UGREEN NAS Tunnel
            tun_cname = {
                "type": "CNAME",
                "name": "vault.spcuniversity.com",
                "content": f"{tun_id}.cfargotunnel.com",
                "ttl": 1,
                "proxied": True,
            }
            cf_request("POST", f"zones/{ZONE_ID}/dns_records", headers, tun_cname)
            print(f"✅ Routed vault.spcuniversity.com -> {tun_id}.cfargotunnel.com")

            # Fetch tunnel token for Docker on UGREEN NAS
            tok_resp = cf_request("GET", f"accounts/{ACCOUNT_ID}/cfd_tunnel/{tun_id}/token", headers)
            if tok_resp.get("success"):
                tun_token = tok_resp["result"]
                print(f"\n🔑 UGREEN NAS DOCKER TUNNEL COMMAND (Run on UGREEN NAS Docker):")
                print(f"docker run -d --name cloudflared-spcu --restart unless-stopped cloudflare/cloudflared:latest tunnel --no-autoupdate run --token {tun_token}")

    # 5. Trigger Nameserver Activation Check
    print("\n--- Step 4: Triggering Cloudflare Activation Check ---")
    act_res = cf_request("PUT", f"zones/{ZONE_ID}/activation_check", headers)
    if act_res.get("success"):
        print("✅ Triggered Cloudflare Nameserver Activation Check!")
    else:
        print("ℹ️ Activation check response:", act_res.get("errors") or act_res.get("messages"))


if __name__ == "__main__":
    token = sys.argv[1] if len(sys.argv) > 1 else os.environ.get("CF_EDIT_TOKEN", "")
    if not token:
        print("Usage: python3 scripts/connect_spcu_cloudflare_stack.py <CLOUDFLARE_EDIT_TOKEN_OR_GLOBAL_KEY>")
        sys.exit(1)
    provision_all(token.strip())
