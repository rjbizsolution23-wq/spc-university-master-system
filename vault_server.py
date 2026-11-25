#!/usr/bin/env python3
"""
SPC UNIVERSITY — SOVEREIGN LUXURY NAS MODEL VAULT & LIVE CODE EDITOR SERVER
Runs on port 8080 inside `spcu-model-vault` on UGREEN DXP4800 Plus (`ucag-billions`),
powering https://vault.spcuniversity.com with:
  1. Sovereign Obsidian & Burnished Champagne Gold Dashboard for every folder
  2. Live RAID-5 disk telemetry (df -h /vault) & Model Vault status cards
  3. Built-in In-Browser Code Viewer & Live Editor (Save directly to NAS disk)
"""
import html
import http.server
import json
import os
import shutil
import socketserver
import urllib.parse
from datetime import datetime

VAULT_ROOT = "/vault"
PORT = 8080
TEXT_EXTS = {
    ".js", ".ts", ".py", ".sh", ".sql", ".toml", ".json", ".md",
    ".html", ".css", ".txt", ".yaml", ".yml", ".jinja", ".gitignore"
}


def fmt_size(num: float) -> str:
    for unit in ["B", "KB", "MB", "GB", "TB"]:
        if abs(num) < 1024.0:
            return f"{num:3.1f} {unit}" if unit != "B" else f"{int(num)} B"
        num /= 1024.0
    return f"{num:.1f} PB"


def dir_size(path: str) -> int:
    total = 0
    try:
        for entry in os.scandir(path):
            if entry.is_file(follow_symlinks=False):
                total += entry.stat(follow_symlinks=False).st_size
            elif entry.is_dir(follow_symlinks=False) and not entry.name.startswith("."):
                total += dir_size(entry.path)
    except Exception:
        pass
    return total


class SovereignVaultHandler(http.server.SimpleHTTPRequestHandler):
    def translate_path(self, path: str) -> str:
        path = path.split("?", 1)[0].split("#", 1)[0]
        rel = urllib.parse.unquote(path).lstrip("/")
        full = os.path.realpath(os.path.join(VAULT_ROOT, rel))
        if not full.startswith(os.path.realpath(VAULT_ROOT)):
            return os.path.realpath(VAULT_ROOT)
        return full

    def do_POST(self):
        parsed = urllib.parse.urlparse(self.path)
        if parsed.path == "/__api__/save":
            length = int(self.headers.get("Content-Length", "0"))
            raw = self.rfile.read(length).decode("utf-8", errors="replace")
            payload = json.loads(raw)
            rel_path = payload.get("path", "").lstrip("/")
            content = payload.get("content", "")
            full = os.path.realpath(os.path.join(VAULT_ROOT, rel_path))
            if not full.startswith(os.path.realpath(VAULT_ROOT)) or os.path.isdir(full):
                self.send_json({"ok": False, "error": "Invalid file path"}, 400)
                return
            with open(full, "w", encoding="utf-8") as f:
                f.write(content)
            self.send_json({"ok": True, "saved_bytes": len(content.encode("utf-8")), "path": "/" + rel_path})
            return
        self.send_json({"ok": False, "error": "Unknown endpoint"}, 404)

    def send_json(self, obj, status=200):
        data = json.dumps(obj).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(data)))
        self.end_headers()
        self.wfile.write(data)

    def send_html(self, html_str: str, status=200):
        data = html_str.encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "text/html; charset=utf-8")
        self.send_header("Content-Length", str(len(data)))
        self.end_headers()
        self.wfile.write(data)

    def do_GET(self):
        parsed = urllib.parse.urlparse(self.path)
        qs = urllib.parse.parse_qs(parsed.query)
        full = self.translate_path(parsed.path)

        if os.path.isdir(full):
            self.render_directory_dashboard(parsed.path, full)
            return

        if os.path.isfile(full):
            ext = os.path.splitext(full)[1].lower()
            if qs.get("raw", ["0"])[0] == "1" or (ext not in TEXT_EXTS and qs.get("edit", ["0"])[0] != "1"):
                return super().do_GET()
            if os.path.getsize(full) <= 2 * 1024 * 1024:
                self.render_code_editor(parsed.path, full)
                return

        return super().do_GET()

    def render_directory_dashboard(self, url_path: str, full_path: str):
        if not url_path.endswith("/"):
            url_path += "/"
        rel_clean = urllib.parse.unquote(url_path).strip("/")
        parts = [p for p in rel_clean.split("/") if p]

        crumbs = ['<a href="/">/volume1/Model-Vault</a>']
        acc = ""
        for p in parts:
            acc += "/" + urllib.parse.quote(p)
            crumbs.append(f'<a href="{acc}/">{html.escape(p)}</a>')
        breadcrumb_html = ' <span style="color:#6E6C66">/</span> '.join(crumbs)

        total, used, free = shutil.disk_usage(VAULT_ROOT)
        entries = []
        try:
            for e in sorted(os.scandir(full_path), key=lambda x: (not x.is_dir(), x.name.lower())):
                if e.name in ("#recycle", "vault_server.py") or e.name.startswith(".cache"):
                    continue
                is_dir = e.is_dir(follow_symlinks=False)
                st = e.stat(follow_symlinks=False)
                sz = dir_size(e.path) if is_dir and not rel_clean else st.st_size
                mtime = datetime.fromtimestamp(st.st_mtime).strftime("%Y-%m-%d %H:%M")
                href = urllib.parse.quote(e.name) + ("/" if is_dir else "")
                ext = os.path.splitext(e.name)[1].lower()
                is_editable = (not is_dir) and (ext in TEXT_EXTS)
                entries.append((e.name, is_dir, sz, mtime, href, is_editable))
        except Exception:
            pass

        rows_html = ""
        if parts:
            parent_href = "../"
            rows_html += f"""
            <tr>
              <td colspan="5"><a href="{parent_href}" class="file-link">↩ .. (Parent Directory)</a></td>
            </tr>"""

        for name, is_dir, sz, mtime, href, is_editable in entries:
            icon = "📁" if is_dir else ("📝" if is_editable else "📦")
            badge = "DIRECTORY" if is_dir else ("EDITABLE CODE" if is_editable else "WEIGHTS / ASSET")
            badge_cls = "seal" if is_dir else ("seal emerald" if is_editable else "seal")
            action_btn = (
                f'<a href="{href}" class="btn-gold-sm">Open Folder →</a>'
                if is_dir
                else (
                    f'<a href="{href}" class="btn-gold-sm">View &amp; Edit Code ✎</a> <a href="{href}?raw=1" class="btn-ghost-sm">Raw ↓</a>'
                    if is_editable
                    else f'<a href="{href}?raw=1" class="btn-ghost-sm">Download File ↓</a>'
                )
            )
            rows_html += f"""
            <tr>
              <td><a href="{href}" class="file-link"><span style="font-size:16px">{icon}</span> <strong>{html.escape(name)}</strong></a></td>
              <td><span class="{badge_cls}">{badge}</span></td>
              <td class="num">{fmt_size(sz)}</td>
              <td class="num" style="color:#9E9C95">{mtime}</td>
              <td style="text-align:right">{action_btn}</td>
            </tr>"""

        page = f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>SPC University | Sovereign UGREEN NAS Vault &amp; Code Explorer</title>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Manrope:wght@500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
:root {{
  --ob: #0A0B0E; --vault: #12141A; --panel: #161922; --gold: #C5A059;
  --champagne: #DFC48C; --border: rgba(197,160,89,0.24); --text: #F5F2EB; --muted: #9E9C95;
}}
* {{ box-sizing: border-box; }}
body {{
  margin: 0; background: var(--ob); color: var(--text);
  font-family: "Plus Jakarta Sans", system-ui, sans-serif; min-height: 100vh;
}}
.num {{ font-family: "Manrope", sans-serif; font-variant-numeric: tabular-nums; }}
.overline {{ font-size: 10px; letter-spacing: 0.22em; text-transform: uppercase; color: var(--gold); font-weight: 600; }}
.seal {{
  display: inline-flex; align-items: center; gap: 5px; padding: 3px 9px; border-radius: 99px;
  background: rgba(197,160,89,0.12); border: 1px solid var(--border); color: var(--champagne);
  font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase; font-weight: 600;
}}
.seal.emerald {{ background: rgba(27,94,75,0.24); border-color: rgba(110,231,183,0.35); color: #6EE7B7; }}
header {{
  background: linear-gradient(135deg, #0A0B0E 0%, #141720 55%, #1D212E 100%);
  border-bottom: 1px solid var(--gold); padding: 18px 34px;
  display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px;
}}
.wrap {{ max-width: 1280px; margin: 0 auto; padding: 28px 32px 60px; }}
.grid-4 {{ display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: 16px; margin-bottom: 24px; }}
.card {{ background: var(--vault); border: 1px solid var(--border); border-radius: 12px; padding: 18px 20px; }}
.kpi {{ font-family: "Manrope", sans-serif; font-size: 24px; font-weight: 700; color: var(--champagne); margin: 5px 0 3px; }}
.crumbs {{
  background: var(--panel); border: 1px solid var(--border); border-radius: 10px;
  padding: 12px 16px; margin-bottom: 18px; font-size: 13.5px;
}}
.crumbs a {{ color: var(--champagne); text-decoration: none; font-weight: 600; }}
.crumbs a:hover {{ text-decoration: underline; }}
table {{ width: 100%; border-collapse: collapse; font-size: 13.5px; }}
th {{
  background: var(--panel); color: var(--gold); font-size: 10.5px; letter-spacing: 0.16em;
  text-transform: uppercase; padding: 12px 16px; text-align: left; border-bottom: 1px solid var(--gold);
}}
td {{ padding: 13px 16px; border-bottom: 1px solid var(--border); }}
tr:hover td {{ background: rgba(197,160,89,0.05); }}
.file-link {{ color: var(--text); text-decoration: none; display: inline-flex; align-items: center; gap: 10px; }}
.file-link:hover {{ color: var(--champagne); }}
.btn-gold-sm {{
  background: linear-gradient(135deg, #B48E43 0%, #DFC48C 50%, #C5A059 100%);
  color: #0A0B0E; padding: 6px 12px; border-radius: 7px; font-size: 12px; font-weight: 700;
  text-decoration: none; display: inline-block;
}}
.btn-ghost-sm {{
  border: 1px solid var(--border); color: var(--champagne); padding: 6px 11px;
  border-radius: 7px; font-size: 12px; font-weight: 600; text-decoration: none; display: inline-block;
}}
.btn-ghost-sm:hover {{ border-color: var(--gold); background: rgba(197,160,89,0.1); }}
</style>
</head>
<body>
<header>
  <div style="display:flex;align-items:center;gap:14px">
    <img src="https://brand.spcuniversity.com/brand_assets/spcu_atlas_emblem.png" style="width:46px;height:46px;border-radius:10px;border:1px solid #C5A059;object-fit:cover" onerror="this.style.display='none'">
    <div>
      <div class="overline">UGREEN DXP4800 PLUS (ucag-billions) · ZERO-TRUST CLOUDFLARE TUNNEL</div>
      <div style="font-family:'Cormorant Garamond',serif;font-size:26px;font-weight:700;color:#DFC48C">SPC University Sovereign Model Vault &amp; Code Studio</div>
    </div>
  </div>
  <div style="display:flex;gap:10px;flex-wrap:wrap">
    <a href="https://app.spcuniversity.com" class="btn-gold-sm" style="padding:9px 15px">🧠 Open TrustGPT Command Suite →</a>
    <a href="/SPC-UNIVERSITY-SOURCE-CODE/" class="btn-ghost-sm" style="padding:9px 14px">📝 Source Code Root</a>
    <a href="https://portal.spcuniversity.com" class="btn-ghost-sm" style="padding:9px 14px">🌐 Showcase Portal</a>
  </div>
</header>

<div class="wrap">
  <div class="grid-4">
    <div class="card">
      <div class="overline">Physical Server</div>
      <div class="kpi">ucag-billions</div>
      <div style="font-size:12px;color:var(--muted)">UGREEN DXP4800 Plus · LAN 192.168.1.17:22</div>
    </div>
    <div class="card">
      <div class="overline">RAID-5 Capacity Free</div>
      <div class="kpi num">{fmt_size(free)} Free</div>
      <div style="font-size:12px;color:var(--muted)">{fmt_size(used)} used of {fmt_size(total)} (/volume1)</div>
    </div>
    <div class="card">
      <div class="overline">AI Model Vault</div>
      <div class="kpi">5 Frontier Models</div>
      <div style="font-size:12px;color:var(--muted)">Qwen 3.8 27B · FLUX.2 · MiniMax-H3 · Wan 2.2 · Qwen3-Embed</div>
    </div>
    <div class="card">
      <div class="overline">Source Code &amp; Web Files</div>
      <div class="kpi">100% Editable</div>
      <div style="font-size:12px;color:var(--muted)">Click any code file below to view &amp; save live on NAS</div>
    </div>
  </div>

  <div class="crumbs">
    <span class="overline" style="margin-right:10px">NAS Path:</span> {breadcrumb_html}
  </div>

  <div class="card" style="padding:0;overflow:hidden">
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Classification</th>
          <th>Size</th>
          <th>Last Modified</th>
          <th style="text-align:right">Action</th>
        </tr>
      </thead>
      <tbody>
        {rows_html}
      </tbody>
    </table>
  </div>
</div>
</body>
</html>"""
        self.send_html(page)

    def render_code_editor(self, url_path: str, full_path: str):
        rel = urllib.parse.unquote(url_path).lstrip("/")
        parent = "/" + os.path.dirname(rel)
        if not parent.endswith("/"):
            parent += "/"
        try:
            with open(full_path, "r", encoding="utf-8", errors="replace") as f:
                code = f.read()
        except Exception as e:
            code = f"Error reading file: {e}"

        page = f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Edit {html.escape(os.path.basename(rel))} | SPC University NAS Code Studio</title>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
:root {{
  --ob: #0A0B0E; --vault: #12141A; --panel: #161922; --gold: #C5A059;
  --champagne: #DFC48C; --border: rgba(197,160,89,0.26); --text: #F5F2EB;
}}
* {{ box-sizing: border-box; }}
body {{
  margin: 0; background: var(--ob); color: var(--text);
  font-family: "Plus Jakarta Sans", system-ui, sans-serif;
  display: flex; flex-direction: column; height: 100vh;
}}
header {{
  background: var(--vault); border-bottom: 1px solid var(--gold);
  padding: 14px 26px; display: flex; justify-content: space-between; align-items: center; gap: 12px;
}}
.overline {{ font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--gold); font-weight: 600; }}
.btn-gold {{
  background: linear-gradient(135deg, #B48E43 0%, #DFC48C 50%, #C5A059 100%);
  color: #0A0B0E; border: none; border-radius: 8px; padding: 9px 16px;
  font-weight: 700; font-size: 13px; cursor: pointer;
}}
.btn-ghost {{
  border: 1px solid var(--border); color: var(--champagne); background: transparent;
  border-radius: 8px; padding: 8px 14px; font-weight: 600; font-size: 12.5px; text-decoration: none;
}}
#editor {{
  flex: 1; width: 100%; background: #0D0F14; color: #F3EFE6;
  border: none; padding: 20px 26px; font-family: "SFMono-Regular", Consolas, Menlo, monospace;
  font-size: 13.5px; line-height: 1.6; outline: none; resize: none;
}}
</style>
</head>
<body>
<header>
  <div>
    <div class="overline">LIVE UGREEN NAS CODE STUDIO · /volume1/Model-Vault/{html.escape(rel)}</div>
    <div style="font-family:'Cormorant Garamond',serif;font-size:22px;color:#DFC48C;font-weight:700">{html.escape(os.path.basename(rel))}</div>
  </div>
  <div style="display:flex;align-items:center;gap:10px">
    <span id="status" style="font-size:12.5px;color:#6EE7B7"></span>
    <a href="{parent}" class="btn-ghost">← Back to Folder</a>
    <a href="?raw=1" class="btn-ghost">Download Raw ↓</a>
    <button class="btn-gold" onclick="saveFile()">💾 Save Changes to NAS Disk</button>
  </div>
</header>
<textarea id="editor" spellcheck="false">{html.escape(code)}</textarea>
<script>
async function saveFile() {{
  const st = document.getElementById("status");
  st.textContent = "Saving to UGREEN NAS...";
  const r = await fetch("/__api__/save", {{
    method: "POST",
    headers: {{"Content-Type": "application/json"}},
    body: JSON.stringify({{ path: {json.dumps(rel)}, content: document.getElementById("editor").value }})
  }});
  const j = await r.json();
  st.textContent = j.ok ? ("✓ Saved " + j.saved_bytes + " bytes to NAS (" + new Date().toLocaleTimeString() + ")") : ("Error: " + j.error);
}}
document.addEventListener("keydown", (e) => {{
  if ((e.metaKey || e.ctrlKey) && e.key === "s") {{ e.preventDefault(); saveFile(); }}
}});
</script>
</body>
</html>"""
        self.send_html(page)


if __name__ == "__main__":
    os.chdir(VAULT_ROOT)
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("0.0.0.0", PORT), SovereignVaultHandler) as httpd:
        print(f"Sovereign Vault Server listening on 0.0.0.0:{PORT}")
        httpd.serve_forever()
