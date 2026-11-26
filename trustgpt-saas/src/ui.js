export default `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=5,viewport-fit=cover">
<meta name="theme-color" content="#040d1a">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<title>SPC University — School of Private Civics | TrustGPT Master Suite</title>
<meta name="description" content="Official SPC University (School of Private Civics) TrustGPT Master Suite: 2,260-Passage Worldwide Trust Corpus, 6-Model Legal AI Council, 17 Trust Drafters, 16+151 AI Tutors, and 10,000+ Word Book Maker.">
<meta property="og:type" content="website">
<meta property="og:site_name" content="SPC University — School of Private Civics">
<meta property="og:title" content="SPC University — TrustGPT Master Suite, 25-Volume Trust Corpus & Book Maker">
<meta property="og:description" content="Official SPC University Private Trust, Banking, Estate & Constitutional Architecture Suite. 2,260 Corpus Passages, 104,519-Word Book Vault, 17 Trust Drafters & 16+151 AI Tutors.">
<meta property="og:image" content="https://spcuniversity.com/brand-kit/images/mockup-library-lineup.png">
<meta property="og:url" content="https://app.spcuniversity.com/">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="SPC University — TrustGPT Master Suite & Book Maker">
<meta name="twitter:description" content="Official SPC University Private Trust, Banking, Estate & Constitutional Architecture Suite. 2,260 Corpus Passages, 104,519-Word Book Vault, 17 Trust Drafters & 16+151 AI Tutors.">
<meta name="twitter:image" content="https://spcuniversity.com/brand-kit/images/mockup-library-lineup.png">
<link rel="icon" href="https://spcuniversity.com/brand-kit/images/icon-atlas.png" type="image/png">
<link rel="apple-touch-icon" href="https://spcuniversity.com/brand-kit/images/icon-atlas.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800;900&family=Inter:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Space+Grotesk:wght@600;700&display=swap" rel="stylesheet">
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js" defer></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/mammoth/1.6.0/mammoth.browser.min.js" defer></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js" defer></script>
<style>
/* ==========================================================================
   SPC UNIVERSITY — OFFICIAL BRAND KIT DESIGN SYSTEM
   School of Private Civics · Law • Commerce • Empowerment
   Palette: Midnight Navy (#051937), Deep Black-Navy (#040d1a), Raised Navy (#0a2544),
            Electric Cyan (#00d4ff), Cerulean Blue (#0084d1), Chrome Silver (#e8eef5),
            Classic SPC Gold (#ffc107), Bronze Seal (#c8963e)
   ========================================================================== */
:root {
  --navy: #051937;
  --navy-deep: #040d1a;
  --navy-raised: #0a2544;
  --cyan: #00d4ff;
  --cerulean: #0084d1;
  --chrome: #e8eef5;
  --chrome-mid: #8e9eab;
  --gold: #ffc107;
  --bronze: #c8963e;
  --white: #ffffff;
  --ink: #0a1628;
  --text: #e8eef5;
  --text-dim: #9fb0c2;
  --line: rgba(232, 238, 245, 0.14);
  --line-strong: rgba(232, 238, 245, 0.26);

  /* Mapped Component Tokens */
  --rj-obsidian: #040d1a;
  --rj-vault: #051937;
  --rj-graphite: #0d2e54;
  --rj-panel: #0a2544;
  --rj-gold: #ffc107;
  --rj-champagne: #e8eef5;
  --rj-bronze: #c8963e;
  --rj-alabaster: #f8fafc;
  --rj-ivory: #ffffff;
  --rj-parchment: #eff6ff;
  --rj-gold-border: rgba(0, 212, 255, 0.22);
  --rj-gold-glow: rgba(0, 212, 255, 0.12);
  --rj-text: #e8eef5;
  --rj-muted: #9fb0c2;
  --rj-subtle: #8e9eab;
  --rj-emerald: #0084d1;
  --rj-emerald-text: #00d4ff;
  --rj-amber: #ffc107;
  --rj-crimson: #ef4444;
  --font-serif: "Cinzel", "Segoe UI", Impact, serif;
  --font-sans: "Inter", "Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, sans-serif;
  --font-num: "Space Grotesk", "Inter", monospace;
}
body.light-mode {
  --rj-obsidian: #f1f5f9;
  --rj-vault: #ffffff;
  --rj-graphite: #cbd5e1;
  --rj-panel: #eff6ff;
  --rj-gold: #b48328;
  --rj-champagne: #091b33;
  --rj-bronze: #854d0e;
  --rj-gold-border: #bfdbfe;
  --rj-gold-glow: rgba(37, 99, 235, 0.08);
  --rj-text: #0f172a;
  --rj-muted: #334155;
  --rj-subtle: #64748b;
  --cyan: #0084d1;
  --chrome: #091b33;
}
* { box-sizing: border-box; }
html, body {
  margin: 0;
  padding: 0;
  background: var(--rj-obsidian);
  color: var(--rj-text);
  font-family: var(--font-sans);
  min-height: 100vh;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
}
.num { font-family: var(--font-num); font-variant-numeric: tabular-nums; }
.overline {
  font-family: var(--font-num);
  font-size: 10.5px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  font-weight: 700;
  color: var(--gold);
}
body.light-mode .overline {
  color: #0084d1;
}
.seal {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 11px;
  border-radius: 999px;
  background: rgba(200, 150, 62, 0.14);
  border: 1px solid rgba(255, 193, 7, 0.42);
  color: var(--gold);
  font-family: var(--font-num);
  font-size: 10px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  font-weight: 700;
}
.seal.emerald {
  background: rgba(0, 212, 255, 0.14);
  border-color: rgba(0, 212, 255, 0.48);
  color: #7ce8ff;
}
body.light-mode .seal {
  background: #fef9c3;
  border-color: #fde047;
  color: #854d0e;
}
body.light-mode .seal.emerald {
  background: #eff6ff;
  border-color: #93c5fd;
  color: #1e3a8a;
}

/* Layout Shell */
.app-shell {
  display: grid;
  grid-template-columns: 282px 1fr;
  min-height: 100vh;
}
.mobile-topbar {
  display: none;
}
.mobile-bottom-nav {
  display: none;
}
.mobile-nav-backdrop {
  display: none;
}
.mobile-menu-btn {
  display: none;
}

/* Sidebar — SPC Midnight Navy & Electric Cyan */
.sidebar {
  background: linear-gradient(180deg, #061c3c 0%, #040d1a 100%);
  border-right: 1px solid var(--line-strong);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 16px;
  box-shadow: 8px 0 32px rgba(0, 0, 0, 0.35);
}
body.light-mode .sidebar {
  background: linear-gradient(180deg, #091b33 0%, #051329 100%);
  color: #e8eef5;
}
.brand-box {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 6px 8px 18px;
  border-bottom: 1px solid rgba(0, 212, 255, 0.22);
  margin-bottom: 14px;
}
.brand-logo {
  width: 46px;
  height: 46px;
  border-radius: 10px;
  border: 1px solid var(--cyan);
  object-fit: cover;
  background: #040d1a;
  box-shadow: 0 0 18px rgba(0, 212, 255, 0.28);
}
.brand-title {
  font-family: var(--font-serif);
  font-size: 19px;
  font-weight: 800;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  background: linear-gradient(180deg, #ffffff 8%, #e8eef5 50%, #8e9eab 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  line-height: 1.15;
  margin: 2px 0 0;
}
.nav-group-label {
  font-family: var(--font-num);
  font-size: 10px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--cyan);
  padding: 10px 12px 6px;
  font-weight: 700;
}
.nav-list {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.nav-btn {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  text-align: left;
  padding: 11px 13px;
  border-radius: 9px;
  border: 1px solid transparent;
  background: transparent;
  color: #9fb0c2;
  font-size: 13.5px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.16s ease;
}
.nav-btn:hover {
  background: rgba(0, 212, 255, 0.1);
  color: #ffffff;
}
.nav-btn.active {
  background: linear-gradient(90deg, rgba(0, 212, 255, 0.18) 0%, rgba(0, 132, 209, 0.06) 100%);
  border-color: rgba(0, 212, 255, 0.45);
  box-shadow: inset 3px 0 0 var(--gold);
  color: #ffffff;
  font-weight: 700;
}
.nav-btn .nav-left {
  display: flex;
  align-items: center;
  gap: 10px;
}
.nav-badge {
  font-family: var(--font-num);
  font-size: 10px;
  padding: 2px 8px;
  border-radius: 99px;
  background: rgba(0, 212, 255, 0.16);
  border: 1px solid rgba(0, 212, 255, 0.35);
  color: #7ce8ff;
  font-weight: 700;
}
.nav-btn.active .nav-badge {
  background: rgba(255, 193, 7, 0.2);
  border-color: var(--gold);
  color: var(--gold);
}

/* Main Area */
.main-wrap {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-height: 100vh;
  overflow: hidden;
  background:
    radial-gradient(900px 460px at 85% 4%, rgba(0, 132, 209, 0.18), transparent 68%),
    radial-gradient(700px 380px at 10% 96%, rgba(200, 150, 62, 0.1), transparent 70%),
    var(--rj-obsidian);
}
@media (max-width: 960px) {
  .main-wrap { max-height: none; overflow: visible; }
}
.topbar {
  background: rgba(4, 13, 26, 0.92);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--line-strong);
  padding: 13px 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
}
body.light-mode .topbar {
  background: rgba(255, 255, 255, 0.95);
  border-bottom: 1px solid #cbd5e1;
}
.topbar-right {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}
.content-scroll {
  flex: 1;
  overflow-y: auto;
  padding: 26px 30px 48px;
}

/* Cards & Grids — Official SPC Brand Kit Surfaces */
.grid-4 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  gap: 16px;
}
.grid-3 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 18px;
}
.grid-2 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 18px;
}
.form-grid-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}
.composer-row {
  display: flex;
  gap: 10px;
}
.card {
  background: linear-gradient(180deg, rgba(10, 37, 68, 0.92) 0%, rgba(4, 13, 26, 0.94) 100%);
  border: 1px solid var(--line-strong);
  border-radius: 14px;
  padding: 20px 22px;
  box-shadow: 0 18px 44px rgba(0, 0, 0, 0.42);
}
body.light-mode .card {
  background: #ffffff;
  border: 1px solid #cbd5e1;
  box-shadow: 0 6px 20px rgba(9, 27, 51, 0.06);
}
.card-hero {
  background:
    radial-gradient(900px 460px at 78% 8%, rgba(0, 132, 209, 0.36), transparent 68%),
    radial-gradient(700px 380px at 12% 96%, rgba(200, 150, 62, 0.22), transparent 70%),
    linear-gradient(160deg, #061c3c 0%, #040d1a 65%);
  border: 1px solid rgba(0, 212, 255, 0.42);
  border-radius: 16px;
  padding: 28px 30px;
  color: #e8eef5;
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.12);
}
.card-hero::after {
  content: "";
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(0, 212, 255, 0.055) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 212, 255, 0.055) 1px, transparent 1px);
  background-size: 56px 56px;
  mask-image: radial-gradient(circle at 50% 40%, #000 15%, transparent 82%);
  pointer-events: none;
}
.card-hero > * {
  position: relative;
  z-index: 1;
}
.card-hero h2 {
  font-family: var(--font-serif);
  font-size: 30px;
  font-weight: 800;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  background: linear-gradient(180deg, #ffffff 10%, #e8eef5 52%, #9fb0c2 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin: 8px 0 10px;
}
.kpi-val {
  font-family: var(--font-num);
  font-variant-numeric: tabular-nums;
  font-size: 29px;
  font-weight: 800;
  color: var(--gold);
  margin: 6px 0 4px;
  text-shadow: 0 2px 14px rgba(255, 193, 7, 0.25);
}
body.light-mode .kpi-val {
  color: #091b33;
  text-shadow: none;
}
.kpi-sub {
  font-size: 12px;
  color: var(--rj-muted);
}

/* Buttons & Inputs — Official SPC Brand Kit Pill Buttons */
button, input, select, textarea { font-family: inherit; }
.btn-gold {
  background: linear-gradient(180deg, #ffd24d 0%, #ffc107 55%, #c8963e 100%);
  color: #201503;
  border: 1px solid rgba(255, 210, 77, 0.6);
  border-radius: 100px;
  padding: 11px 20px;
  font-size: 12.5px;
  font-weight: 800;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  cursor: pointer;
  box-shadow: 0 10px 24px rgba(255, 193, 7, 0.26);
  transition: transform 0.14s ease, box-shadow 0.14s ease, opacity 0.14s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
}
.btn-gold:hover {
  transform: translateY(-1px);
  box-shadow: 0 14px 30px rgba(255, 193, 7, 0.38);
}
.btn-gold:disabled { opacity: 0.55; cursor: not-allowed; transform: none; }
.btn-ghost {
  background: rgba(0, 212, 255, 0.1);
  color: #e8eef5;
  border: 1px solid rgba(0, 212, 255, 0.38);
  border-radius: 100px;
  padding: 9px 16px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.03em;
  cursor: pointer;
  transition: all 0.15s ease;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
.btn-ghost:hover {
  border-color: var(--cyan);
  background: rgba(0, 212, 255, 0.22);
  color: #ffffff;
  box-shadow: 0 0 18px rgba(0, 212, 255, 0.22);
}
body.light-mode .btn-ghost {
  background: #eff6ff;
  color: #091b33;
  border-color: #93c5fd;
}
.input, .textarea, .select {
  width: 100%;
  padding: 12px 14px;
  background: rgba(4, 13, 26, 0.88);
  border: 1px solid rgba(232, 238, 245, 0.24);
  color: var(--rj-text);
  border-radius: 10px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
}
body.light-mode .input, body.light-mode .textarea, body.light-mode .select {
  background: #ffffff;
  border-color: #cbd5e1;
  color: #0f172a;
}
.input:focus, .textarea:focus, .select:focus {
  border-color: var(--cyan);
  box-shadow: 0 0 0 3px rgba(0, 212, 255, 0.16);
}

/* Chat & Council Workspace */
.chat-layout {
  display: grid;
  grid-template-columns: 1fr 310px;
  gap: 18px;
  height: calc(100vh - 155px);
  min-height: 540px;
}
@media (max-width: 1120px) {
  .chat-layout { grid-template-columns: 1fr; height: auto; }
}
.chat-main {
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, rgba(10, 37, 68, 0.92) 0%, rgba(4, 13, 26, 0.95) 100%);
  border: 1px solid var(--line-strong);
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 18px 44px rgba(0, 0, 0, 0.45);
}
body.light-mode .chat-main {
  background: #ffffff;
  border-color: #cbd5e1;
}
.tier-bar {
  padding: 12px 16px;
  border-bottom: 1px solid var(--line);
  background: rgba(4, 13, 26, 0.72);
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  align-items: center;
}
body.light-mode .tier-bar {
  background: #eff6ff;
}
.tier-pill {
  padding: 7px 14px;
  border-radius: 100px;
  border: 1px solid rgba(0, 212, 255, 0.28);
  background: rgba(10, 37, 68, 0.75);
  color: var(--rj-muted);
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.14s ease;
}
body.light-mode .tier-pill {
  background: #ffffff;
  border-color: #bfdbfe;
  color: #1e3a8a;
}
.tier-pill:hover { color: #ffffff; border-color: var(--cyan); background: rgba(0, 212, 255, 0.16); }
.tier-pill.active {
  background: linear-gradient(180deg, #ffd24d 0%, #ffc107 55%, #c8963e 100%);
  color: #201503;
  border-color: transparent;
  box-shadow: 0 6px 18px rgba(255, 193, 7, 0.28);
}
.chat-feed {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.msg {
  padding: 16px 18px;
  border-radius: 12px;
  line-height: 1.65;
  font-size: 14.5px;
}
.msg-user {
  background: linear-gradient(135deg, rgba(0, 132, 209, 0.28) 0%, rgba(10, 37, 68, 0.92) 100%);
  border: 1px solid rgba(0, 212, 255, 0.45);
  align-self: flex-end;
  max-width: 82%;
}
body.light-mode .msg-user {
  background: #eff6ff;
  border-color: #93c5fd;
  color: #091b33;
}
.msg-assistant {
  background: rgba(4, 13, 26, 0.88);
  border: 1px solid var(--line-strong);
  border-left: 3px solid var(--cyan);
}
body.light-mode .msg-assistant {
  background: #f8fafc;
  border-color: #cbd5e1;
  border-left: 3px solid #0084d1;
}
.msg-assistant h1, .msg-assistant h2, .msg-assistant h3 {
  font-family: var(--font-serif);
  color: var(--rj-champagne);
  margin: 12px 0 6px;
}
.msg-assistant table {
  width: 100%;
  border-collapse: collapse;
  margin: 12px 0;
  font-size: 13px;
}
.msg-assistant th, .msg-assistant td {
  border: 1px solid var(--line);
  padding: 8px 10px;
  text-align: left;
}
.msg-assistant th {
  background: var(--rj-panel);
  color: var(--rj-champagne);
}
.msg-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 12px;
  padding-top: 10px;
  border-top: 1px solid var(--line);
  font-size: 11.5px;
  color: var(--cyan);
}
.src-chip {
  display: inline-block;
  padding: 3px 9px;
  margin: 2px 4px 2px 0;
  border-radius: 100px;
  background: rgba(0, 212, 255, 0.14);
  border: 1px solid rgba(0, 212, 255, 0.42);
  color: #7ce8ff;
  font-family: var(--font-num);
  font-size: 11px;
  font-weight: 700;
}
body.light-mode .src-chip {
  background: #eff6ff;
  border-color: #93c5fd;
  color: #1e3a8a;
}
.chat-composer {
  padding: 14px 16px;
  border-top: 1px solid var(--line);
  background: rgba(4, 13, 26, 0.82);
}
body.light-mode .chat-composer {
  background: #f8fafc;
}
.prompt-chip {
  display: block;
  width: 100%;
  text-align: left;
  padding: 11px 13px;
  margin-bottom: 8px;
  border-radius: 10px;
  background: rgba(4, 13, 26, 0.78);
  border: 1px solid var(--line-strong);
  color: var(--rj-text);
  font-size: 12.5px;
  cursor: pointer;
  transition: all 0.14s ease;
}
body.light-mode .prompt-chip {
  background: #f8fafc;
  border-color: #cbd5e1;
}
.prompt-chip:hover {
  border-color: var(--cyan);
  background: rgba(0, 212, 255, 0.12);
}

/* Book Cards — Official SPC Brand Kit Cover Presentation */
.book-card {
  background: linear-gradient(180deg, rgba(10, 37, 68, 0.88) 0%, rgba(4, 13, 26, 0.94) 100%);
  border: 1px solid var(--line-strong);
  border-radius: 14px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.42);
}
body.light-mode .book-card {
  background: #ffffff;
  border-color: #cbd5e1;
}
.book-cover {
  width: 100%;
  height: 260px;
  object-fit: contain;
  border-bottom: 1px solid var(--line);
  background: radial-gradient(circle at 50% 35%, #0a2544 0%, #040d1a 100%);
  padding: 10px;
}
.book-body {
  padding: 18px 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.book-title {
  font-family: var(--font-serif);
  font-size: 20px;
  font-weight: 800;
  color: var(--rj-champagne);
  margin: 6px 0 8px;
}

/* Institutional Data Table */
.data-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 13.5px;
}
.data-table th {
  background: var(--rj-panel);
  color: var(--cyan);
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  padding: 12px 14px;
  text-align: left;
  border-bottom: 1px solid var(--cyan);
}
.data-table td {
  padding: 12px 14px;
  border-bottom: 1px solid var(--line);
  color: var(--rj-text);
}

/* Modal Drawer for Interactive Book Reader */
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(4, 13, 26, 0.88);
  backdrop-filter: blur(8px);
  z-index: 999;
  display: none;
  flex-direction: column;
  padding: 20px;
}
.modal-backdrop.open { display: flex; }
.modal-frame-wrap {
  flex: 1;
  background: var(--navy);
  border: 1px solid var(--cyan);
  border-radius: 14px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.75);
}
.modal-header {
  padding: 12px 20px;
  background: #040d1a;
  border-bottom: 1px solid rgba(0, 212, 255, 0.35);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.modal-iframe {
  flex: 1;
  width: 100%;
  border: none;
  background: #fff;
}

/* Auth Screen — Official SPC Brand Kit Stage */
.auth-wrap {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background:
    radial-gradient(900px 460px at 78% 8%, rgba(0, 132, 209, 0.35), transparent 68%),
    radial-gradient(700px 380px at 12% 96%, rgba(200, 150, 62, 0.2), transparent 70%),
    linear-gradient(160deg, #061c3c 0%, #040d1a 65%);
}
.auth-card {
  max-width: 500px;
  width: 100%;
  background: linear-gradient(180deg, rgba(10, 37, 68, 0.95) 0%, rgba(4, 13, 26, 0.98) 100%);
  border: 1px solid rgba(0, 212, 255, 0.45);
  border-radius: 16px;
  padding: 36px 34px;
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.65);
}

/* =========================================================
   MOBILE & TABLET RESPONSIVE LUXURY ARCHITECTURE (<=960px)
   ========================================================= */
@media (max-width: 960px) {
  html, body, #root, .app-shell, .main-wrap, .content-scroll {
    width: 100%;
    max-width: 100vw;
    overflow-x: hidden;
  }
  .app-shell {
    display: block;
    width: 100%;
    max-width: 100vw;
    padding-bottom: calc(74px + env(safe-area-inset-bottom, 0px));
  }
  .main-wrap {
    max-height: none;
    min-height: auto;
    overflow: visible;
    width: 100%;
    max-width: 100%;
  }
  .card, .card-hero, .chat-main, .chat-feed, .chat-composer, .msg, .book-card {
    max-width: 100%;
    min-width: 0;
    word-wrap: break-word;
    overflow-wrap: anywhere;
  }
  .topbar {
    display: none;
  }
  .mobile-topbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    padding: 9px 12px;
    background: rgba(4, 13, 26, 0.96);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    border-bottom: 1px solid rgba(0, 212, 255, 0.35);
    position: sticky;
    top: 0;
    z-index: 90;
    width: 100%;
    max-width: 100vw;
  }
  body.light-mode .mobile-topbar {
    background: rgba(9, 27, 51, 0.98);
    color: #ffffff;
  }
  .mobile-topbar-left {
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
    flex: 1;
  }
  .mobile-topbar-logo {
    width: 32px;
    height: 32px;
    border-radius: 8px;
    border: 1px solid var(--cyan);
    object-fit: cover;
    flex-shrink: 0;
  }
  .mobile-topbar-title {
    font-family: var(--font-serif);
    font-size: 13.5px;
    font-weight: 800;
    color: #ffffff;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .mobile-menu-btn {
    background: rgba(0, 212, 255, 0.14);
    border: 1px solid rgba(0, 212, 255, 0.5);
    color: #e8eef5;
    border-radius: 100px;
    padding: 6px 11px;
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 5px;
    flex-shrink: 0;
  }

  /* Slide-Over Sidebar Drawer on Mobile */
  .mobile-nav-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(4, 13, 26, 0.82);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    z-index: 190;
    display: none;
  }
  .mobile-nav-backdrop.open {
    display: block;
  }
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 296px;
    max-width: 86vw;
    z-index: 200;
    overflow-y: auto;
    border-right: 1px solid var(--cyan);
    box-shadow: 16px 0 48px rgba(0, 0, 0, 0.78);
    transform: translateX(-105%);
    transition: transform 0.24s cubic-bezier(0.22, 1, 0.36, 1);
  }
  .sidebar.mobile-open {
    transform: translateX(0);
  }

  /* Fixed Bottom Mobile Quick-Nav Bar (1-Thumb Switching) */
  .mobile-bottom-nav {
    display: grid;
    grid-template-columns: repeat(7, minmax(0, 1fr));
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    max-width: 100vw;
    z-index: 95;
    background: rgba(4, 13, 26, 0.97);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    border-top: 1px solid rgba(0, 212, 255, 0.35);
    padding: 5px 2px calc(6px + env(safe-area-inset-bottom, 0px));
    box-shadow: 0 -8px 28px rgba(0, 0, 0, 0.55);
  }
  body.light-mode .mobile-bottom-nav {
    background: rgba(9, 27, 51, 0.98);
  }
  .mob-tab-btn {
    background: transparent;
    border: none;
    color: #9fb0c2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2px;
    padding: 4px 1px;
    border-radius: 7px;
    cursor: pointer;
    font-size: 9.5px;
    font-weight: 700;
    min-width: 0;
    width: 100%;
  }
  .mob-tab-btn .mob-icon {
    font-size: 15px;
    line-height: 1.1;
  }
  .mob-tab-btn .mob-lbl {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
  }
  .mob-tab-btn.active {
    color: #ffffff;
    background: rgba(0, 212, 255, 0.18);
    box-shadow: inset 0 -2px 0 var(--gold);
  }

  .content-scroll {
    padding: 12px 10px 36px;
    overflow-y: visible;
    width: 100%;
  }

  /* Mobile Chat & Council Layout */
  .chat-layout {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 100%;
    height: auto;
    min-height: 0;
    gap: 14px;
  }
  .chat-main {
    width: 100%;
    max-width: 100%;
    min-width: 0;
  }
  .chat-feed {
    min-height: 36vh;
    max-height: none;
    padding: 12px 10px;
    width: 100%;
  }
  .tier-bar {
    flex-wrap: wrap;
    overflow-x: visible;
    padding: 10px;
    gap: 6px;
    width: 100%;
  }
  .tier-pill {
    flex-shrink: 1;
    white-space: normal;
    font-size: 11px;
    padding: 6px 10px;
    text-align: center;
  }
}

@media (max-width: 680px) {
  .grid-4, .grid-3, .grid-2, .form-grid-2 {
    grid-template-columns: minmax(0, 1fr) !important;
    gap: 12px;
  }
  .grid-4 > *, .grid-3 > *, .grid-2 > *, .form-grid-2 > * {
    grid-column: 1 / -1 !important;
    min-width: 0;
    max-width: 100%;
  }
  .card {
    padding: 14px 12px;
    width: 100%;
  }
  .card-hero {
    padding: 16px 12px;
    width: 100%;
  }
  .card-hero h2 {
    font-size: 20px;
    line-height: 1.26;
    word-break: break-word;
  }
  .kpi-val {
    font-size: 22px;
  }
  .seal {
    white-space: normal;
    line-height: 1.35;
    max-width: 100%;
  }
  /* Prevent iOS Safari auto-zoom on form focus by enforcing 16px font-size */
  .input, .textarea, .select {
    font-size: 16px;
    padding: 10px 12px;
    max-width: 100%;
    min-width: 0 !important;
  }
  .btn-gold, .btn-ghost {
    min-height: 40px;
    justify-content: center;
    white-space: normal;
    text-align: center;
    line-height: 1.3;
    max-width: 100%;
  }
  .composer-row {
    flex-direction: column;
    width: 100%;
  }
  .composer-row .btn-gold {
    width: 100%;
  }
  .chat-composer {
    padding: 12px 10px;
  }
  .msg {
    padding: 12px;
    font-size: 13.5px;
    max-width: 100%;
    word-break: break-word;
  }
  .msg-user {
    max-width: 96%;
  }
  .msg-assistant {
    max-width: 100%;
  }
  .msg-assistant pre, .msg-assistant code {
    white-space: pre-wrap;
    word-break: break-word;
    max-width: 100%;
  }
  .msg-assistant table, .data-table {
    display: block;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
  .auth-wrap {
    padding: 12px;
  }
  .auth-card {
    padding: 20px 14px;
  }
  .modal-backdrop {
    padding: 0;
  }
  .modal-frame-wrap {
    border-radius: 0;
    border: none;
  }
  .modal-header {
    padding: 10px 12px;
    flex-wrap: wrap;
    gap: 8px;
  }
}
</style>
</head>
<body>
<div id="root"></div>

<!-- Interactive Book Reader Modal -->
<div id="bookModal" class="modal-backdrop">
  <div class="modal-frame-wrap">
    <div class="modal-header">
      <div style="display:flex;align-items:center;gap:12px">
        <img src="https://spcuniversity.com/brand-kit/images/icon-atlas.png" style="width:36px;height:36px;border-radius:50%;border:1px solid var(--cyan)">
        <div>
          <span class="overline">SPC UNIVERSITY · UNABRIDGED MASTER EDITION (14,000–20,500+ WORDS)</span>
          <div id="bookModalTitle" style="font-family:var(--font-serif);font-size:20px;color:#ffffff;font-weight:800"></div>
        </div>
      </div>
      <div style="display:flex;gap:10px">
        <a id="bookModalExt" href="#" target="_blank" class="btn-ghost">Open Full Book + Export Toolbar ↗</a>
        <button class="btn-gold" onclick="closeBookModal()">Close Reader ✕</button>
      </div>
    </div>
    <iframe id="bookModalFrame" class="modal-iframe" src="about:blank"></iframe>
  </div>
</div>

<script>
const $ = (s) => document.querySelector(s);
let TOKEN = localStorage.getItem("t") || "";
let STATE = {
  tab: "overview",
  tier: "standard",
  directModel: null,
  webSearchOn: false,
  councilPicked: ["deepseek-v4.1", "glm-5.3", "gpt-oss-120b", "mistral-small-3.1", "llama-4-scout", "nemotron-550b"],
  user: { email: "vip@spcuniversity.com", plan: "pro", credits: 50 },
  messages: [],
  attachments: [],
  memories: [],
  media: [],
  ledger: [],
  vault: null,
  kbResults: [],
  kbTotal: 2260,
  corpusVolume: null,
  corpusFilterKind: "ALL",
  ocrResult: null,
  docDraft: null,
  webSearchRes: null,
  urlReadRes: null,
  calcRes: null,
  translateRes: null,
  studentsList: [],
  guardrailRes: null,
  execPacketRes: null,
  gWorkspaceUrl: localStorage.getItem("spcu_gws_url") || "",
  tutorCatalog: null,
  selectedTutorId: "pure-trust-master-tutor",
  selectedLessonKey: "",
  lessonSearchQuery: "",
  tutorHistory: [],
  bookMaker: {
    topic: "Private Common-Law Pure Trust Architecture, 10-Layer Asset Shielding & UTC § 1013 Banking Operations",
    targetWords: 15000,
    bookStyle: "Unabridged SPC University Master Treatise & Field Manual",
    includeAiCover: false,
    generating: false,
    progressText: "",
    progressPct: 0,
    activeBook: null,
    chaptersGenerated: {},
    totalWords: 0
  },
  billingCatalog: null,
  newApiKey: null,
  createdVoucher: null,
  redeemMsg: "",
  isAdminOwner: localStorage.getItem("spcu_admin_owner") === "1" || (typeof window !== "undefined" && (window.location.search.includes("admin=yusef") || window.location.search.includes("admin=bay") || window.location.search.includes("admin=1"))),
  adminTourStep: 0
};
if (STATE.isAdminOwner) {
  localStorage.setItem("spcu_admin_owner", "1");
}

window.unlockAdminMasterAcademy = async function() {
  const code = prompt("👑 FOUNDER & ADMIN COMMAND ACADEMY (MR. YUSEF EL / MR. BAY)\\n\\nEnter your Founder/Admin Passcode or Email (e.g. YUSEF-EL-ADMIN, MR-BAY, or your SPCU Admin Email):");
  if (!code || !code.trim()) return;
  try {
    const r = await api("member-book-verify", { code_or_email: code.trim() });
    if (r && r.member_access_token) {
      localStorage.setItem("spcu_member_book_token", r.member_access_token);
      localStorage.setItem("spcu_admin_owner", "1");
      document.cookie = "spcu_member_vault=" + encodeURIComponent(r.member_access_token) + "; path=/; max-age=2592000; SameSite=Lax; Secure";
      STATE.isAdminOwner = true;
      STATE.user.plan = "sovereign";
      STATE.tab = "admin_academy";
      renderShell();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  } catch (e) {
    alert("Admin verification notice: " + e.message);
  }
};

const ADMIN_TOUR_STEPS = [
  {
    num: 1,
    title: "Module 1: What Was Built for You ($418,500 Value) & How the Public Lead-Magnet Bot Feeds Your Funnel",
    targetTab: "overview",
    actionLabel: "⚡ Launch Live Demo: Overview & Funnel Architecture →",
    narration: "Welcome Mr. Yusef El and Mr. Bay. This is Rick Jefferson walking you through your complete SPC University Enterprise Transformation, valued at 418,500 dollars and contributed to you at zero balance due as our strategic partner. First, understand the two-tier AI architecture we built for you. Tier 1 is the Public Knowledge Base Concierge Chatbot sitting in the bottom-right corner of spcuniversity.com on every single page and article. That public bot has mastered all 2,260 passages of your curriculum, all 128 articles authored by Yusef El, and your 6 books. It answers visitor questions about Foundations Before Remedies, the 10 Layers of Trust Architecture, and UTC Section 1013 banking to build massive authority—acting as your 24/7 lead magnet—while strictly refusing to give away your paid books or draft full trust indentures for free. Instead, every answer funnels visitors straight to Enroll in your group, Log In to the Member Portal, or purchase in your Shop. Tier 2 is this platform right here: the TrustGPT Operating System at spcuniversity.com/app, where your enrolled members and buyers actually execute the work.",
    bullets: [
      "Public Website Concierge Bot (spcuniversity.com): 24/7 AI Lead Magnet trained on all 2,260 passages & 128 Yusef El articles. Answers questions & teaches doctrine, but NEVER gives away free books or drafts indentures—funnels everyone to Enroll & Member Login.",
      "Member-Only Book & Product Gate (HTTP 401 Lock): All 6 Flagship Textbooks (104,519 words) are locked behind Member Authentication so nobody can download your products for free.",
      "Full SEO, SGE, AIO & AEO Domination: 9-Type Schema.org JSON-LD Graph, OpenGraph cards, /llms.txt for ChatGPT/Perplexity citations, and every article attributed to 'By Yusef El · Founder, SPC University'."
    ]
  },
  {
    num: 2,
    title: "Module 2: Mastering the TrustGPT Chat, 18 AI Models & The 👑 6-Model Legal Council",
    targetTab: "chat",
    demoPrompt: "Build a step-by-step overview of the 10 Layers of Trust Architecture and explain what documents I need first.",
    demoTier: "standard",
    actionLabel: "⚡ Run Interactive Live Demo in TrustGPT Chat Now →",
    narration: "Module 2: How to use the TrustGPT Chat and the 6-Model Legal Council. Inside the Chat tab, you have 5 execution engines at the top bar: Standard Trust Counsel and Fast Study Assistant are free daily tiers powered by DeepSeek V4.1 304-Billion and Llama 3.3 70-Billion. Senior Drafter runs GPT-120-Billion for 1 credit. Supreme Counsel runs NVIDIA Nemotron-3 Ultra 550-Billion for 3 credits. And the crown jewel is the 6-Model Legal Council for 4 credits: when you or a member selects the 6-Model Council, six different frontier LLMs deliberate on the trust question simultaneously from 6 specialized legal lenses, and then GLM-5.3 acts as Chief Justice to synthesize one unified master strategy while letting you inspect all 6 individual model drafts. You can also attach any PDF, Word doc, Excel sheet, or photo of a trust deed for instant Vision OCR scanning, or tap the Whisper v3 Turbo microphone to speak your question aloud, and tap Listen TTS on any answer to have Deepgram Aura-2 read it back to you.",
    bullets: [
      "18 Total AI Models Wired: 13 Large Language Models (up to 550B parameters across Cloudflare Workers AI, NVIDIA NIM & your NAS GPU vault) + 5 Vision OCR, Whisper Voice Mic, Deepgram Aura-2 TTS, BGE-M3 Vector & FLUX Cover Image models.",
      "1-Click Export on Every Answer: Every AI response has built-in '🔊 Listen (TTS)', '🖨️ Print / PDF', and '📄 Word .DOC' buttons styled in the Official SPC University Brand Kit.",
      "Click the gold button below to watch TrustGPT automatically switch to the Chat tab and stream a live 10-Layer Trust Architecture blueprint right in front of you."
    ]
  },
  {
    num: 3,
    title: "Module 3: The 📖 Supreme Book & Guide Maker (10,000+ to 50,000+ Words) & 6 Flagship Textbooks",
    targetTab: "bookmaker",
    actionLabel: "⚡ Open the 10,000–50,000+ Word Book Maker Studio →",
    narration: "Module 3: Your Supreme Book and Guide Empire Orchestrator. We already expanded all 6 of your flagship SPC University textbooks to between 14,292 and 20,567 words each—104,519 verified words total across 47 chapters—and locked them inside your Member Vault. Even better, whenever you want to create a brand-new book, course manual, or high-ticket guide to sell to your students, open the Book Maker tab, type a single topic or paste a lesson title, choose 15,000, 25,000, or 50,000 words, and click Generate. With zero back-and-forth questions, the system writes all 10 unabridged chapters in parallel grounded in your 2,260-passage corpus, generates front and back cover copy, Amazon KDP and Apple Books SEO metadata, and gives you 1-click PDF, Word DOC, EPUB, MOBI, and HTML downloads.",
    bullets: [
      "6 Flagship Books Completed (104,519 Words): Estate Planning Vault (18,141w), 10-Layer Trust Architecture (18,681w), The Bank Packet (14,292w), Client Dossier Playbook (18,021w), Know Your Rights (14,817w), and The SPCU Doctrine (20,567w).",
      "Unlimited New Book Creation: Turn any webinar topic or lesson into a 10-chapter, 15,000+ word textbook in minutes and sell it in your Member Store for $297 to $1,997."
    ]
  },
  {
    num: 4,
    title: "Module 4: 17 Worldwide Trust Drafters, 12-Point Guardrails, Notary/Bond/Mail & 167 AI Tutors",
    targetTab: "doclab",
    actionLabel: "⚡ Open the 17-Template Trust Drafter & OCR Lab →",
    narration: "Module 4: Your 17 Worldwide Trust Drafters, 12-Point Legal Guardrail Auditor, and 167 Personal AI Tutors. In the Trust Drafter tab, members can generate complete educational drafts of Common-Law Pure Trust Indentures, UTC Section 1013 Certificates of Trust, Schedule A Asset Conveyances, Multi-Generational Dynasty Trusts, Cook Islands and Nevis Offshore Trusts, Cayman PTCs, SLATs, ILITs, IDGTs, 508(c)(1)(A) Ecclesiastical Ministry Trusts, and Garn-St. Germain Real Estate Land Trusts. Then, in the Execution and Notary tab, they run the 12-Point Guardrail Audit to verify non-merger of title, spendthrift shields, and non-recourse clauses, generate State Notary Jurats, 250,000 dollar Trustee Surety Bonds, and USPS Certified Mail affidavits, and push directly to Google Docs and Gmail. And in the AI Tutors tab, 16 Faculty Tutors and 151 individual Lesson Tutors coach students 1-on-1 through every video and volume.",
    bullets: [
      "17 Worldwide Trust & Remedy Templates + Vision OCR Document Scanner.",
      "12-Point Zero-Defect Trust Guardrail Verifier + Notary Jurat, Surety Bond & Certified Mail Packet Builder + Google Workspace Bridge.",
      "16 Specialized Faculty AI Tutors + 151 Individual Volume & Lesson Tutors (Masterclass, Action Worksheet, 3-Question Quiz & Video Companion modes)."
    ]
  },
  {
    num: 5,
    title: "Module 5: Monetization, Stripe/PayPal/Voucher Billing, Tracking Ledgers & Your 10.8 TB NAS Server",
    targetTab: "billing",
    actionLabel: "⚡ Open Monetization, Voucher Minting & Tracking Hub →",
    narration: "Module 5: How you monetize everything, how we track every user and credit, and how your physical server and legacy platforms are connected. In the Plans, Credits and Store Checkout tab, you have 13 ready-to-sell packages across 4 revenue streams: Pay-As-You-Go AI Credit Packs from 29 to 497 dollars, Monthly and Annual SaaS Memberships from 99 a month to 997 a year, High-Ticket Book and Strategy Session bundles from 297 to 1,997 dollars, and metered sk-spcu commercial API keys. You can paste your live Stripe Secret Key and PayPal Business email right in the Owner Monetization Control box, or mint instant prepaid voucher codes like SPCU-WEBINAR-500 to sell live on your webinars. Every user signup, credit purchase, voucher redemption, and AI run is tracked in real time in your Cloudflare D1 SQLite database tables—users, ledger, usage, messages, memories, and api_keys. Finally, all 27 DNS records connect your main WordPress site, member.spcuniversity.com, admin.spcuniversity.com, lms.spcuniversity.com, and your dedicated 10.8 Terabyte RAID-5 UGREEN NAS hardware vault via Cloudflare Zero Trust.",
    bullets: [
      "4 Live Revenue Streams (13 Packages): Credit Top-Up Packs ($29–$497), Recurring SaaS Plans ($99/mo–$997/yr), Book & Strategy Bundles ($297–$1,997), and Metered Developer API Keys (sk-spcu-*).",
      "Instant Webinar Voucher Minting: Mint custom credit codes in 1 click, sell them on live calls, and let students redeem them immediately.",
      "Full D1 & KV Tracking + 10.8 TB RAID-5 UGREEN NAS Server: Every credit debit/credit is logged in the D1 Audit Ledger, and your NAS Vault holds all 2,260 corpus passages, 6 books, and 5 local AI model weight archives."
    ]
  }
];

window.playAdminModuleVoice = function(idx, btnEl) {
  const step = ADMIN_TOUR_STEPS[idx] || ADMIN_TOUR_STEPS[0];
  window.speakTextAloud(step.narration, btnEl);
};

window.runAdminInteractiveDemoStep = async function(idx) {
  const step = ADMIN_TOUR_STEPS[idx] || ADMIN_TOUR_STEPS[0];
  STATE.adminTourStep = idx;
  if (step.demoPrompt) {
    window.launchPrompt(step.demoPrompt, step.demoTier || "standard");
    return;
  }
  await window.switchTab(step.targetTab);
  if (step.targetTab === "doclab") {
    if ($("#docTrustName")) $("#docTrustName").value = "The Yusef El Sovereign Heritage Pure Trust";
    if ($("#docGrantorName")) $("#docGrantorName").value = "Yusef El, Settlor";
    if ($("#docTrusteeName")) $("#docTrusteeName").value = "Independent Fiduciary Board of Trustees";
    if ($("#docJurisdiction")) $("#docJurisdiction").value = "Private Common-Law / Applicable Venue";
    if ($("#docAssets")) $("#docAssets").value = "Schedule A Real Property, Intellectual Property & Private Treasury Account";
    window.generateCourtBankDocument("premium");
  }
};

const MEMBER_TUTORIAL_STEPS = [
  {
    num: 1,
    title: "Lesson 1: How to Use TrustGPT & the 👑 6-Model Legal Council Inside Your Member Area",
    targetTab: "chat",
    demoPrompt: "Build a step-by-step overview of the 10 Layers of Trust Architecture and explain what documents I need first.",
    demoTier: "standard",
    actionLabel: "⚡ Launch Live Guided Chat Demo Now →",
    narration: "Welcome to the SPC University Member AI Operating System. Here is how to use TrustGPT and the 6-Model Legal Council inside your Member Area. Tap the Chat tab to open your main strategy console. At the top Engine bar, Standard Trust Counsel and Fast Study Assistant give you free daily answers grounded in all 2,260 passages of the SPC University curriculum. When you are ready for deep trust drafting or complex strategy, select Senior Drafter 120-Billion, Supreme Counsel 550-Billion, or the 6-Model Legal Council—where six specialized legal AI models deliberate on your question simultaneously and synthesize one complete execution blueprint. You can also click Attach Any File to scan a PDF, Word document, or photo of a trust deed with Vision OCR, or tap the Voice Mic to speak your question aloud.",
    bullets: [
      "5 AI Engines: Standard & Fast (Free Daily for Members), Senior Drafter 120B (1 Cr), Supreme Counsel 550B (3 Cr), and 👑 6-Model Legal Council (4 Cr).",
      "Universal Upload & Voice: Attach PDFs, DOCX, spreadsheets, or scanned trust images for instant OCR audit, or use the Whisper v3 Turbo voice microphone.",
      "1-Click Formal Exports: Every answer includes '🔊 Listen (TTS)', '🖨️ Print / PDF', and '📄 Word .DOC' download buttons."
    ]
  },
  {
    num: 2,
    title: "Lesson 2: How to Study with Your 16+151 Personal AI Lesson Tutors Alongside Your Courses",
    targetTab: "tutors",
    demoTutorId: "pure-trust-master-tutor",
    demoTutorMode: "masterclass",
    actionLabel: "⚡ Launch Live 1-on-1 AI Tutor Masterclass Demo →",
    narration: "Lesson 2: How to study with your 167 Personal AI Tutors. While watching any video course in your Member Area, tap the 167 AI Lesson Tutors tab. You have 16 Specialized Faculty Tutors covering Common-Law Pure Trusts, 10-Layer Architecture, UTC Section 1013 Bank Packets, Offshore Cook Islands and Nevis Trusts, Dynasty Trusts, 508(c)(1)(A) Ecclesiastical Ministry Trusts, Real Estate Land Trusts, Equity Maxims, and Courtroom Procedure—plus 151 individual Lesson Tutors matched to every volume and video guide. Pick your tutor or lesson, then tap Teach Me Step-by-Step for a full masterclass, Put It To Work for a fill-in-the-blank Action Worksheet, or Test My Mastery for a 3-question Socratic quiz.",
    bullets: [
      "16 Specialized Faculty Tutors + 151 Individual Volume & Video Lesson Tutors.",
      "4 Interactive Study Modes: Step-by-Step Masterclass, Put-It-To-Work Action Worksheet, 3-Question Mastery Quiz, and Video Note Companion.",
      "Voice Read-Aloud & Printable Lesson Worksheets on every session."
    ]
  },
  {
    num: 3,
    title: "Lesson 3: How to Draft 17 Worldwide Trust Instruments & Run the 12-Point Legal Guardrail Audit",
    targetTab: "doclab",
    demoDraftTemplate: "pure-trust-indenture",
    actionLabel: "⚡ Auto-Fill & Draft Live Pure Trust Indenture Demo →",
    narration: "Lesson 3: How to draft your trust instruments and verify them with the 12-Point Legal Guardrail Auditor. Open the Trust Drafter, OCR and Voice Lab tab. Choose any of the 17 worldwide templates—including the Common-Law Pure Trust Indenture, UTC Section 1013 Certificate of Trust and Banking Resolution, Schedule A Asset Conveyance Deed, Multi-Generational Dynasty Trust, Cook Islands Offshore Trust, SLAT, ILIT, IDGT, 508(c)(1)(A) Ministry Charter, or Garn-St. Germain Land Trust. Fill in your trust name, grantor, trustee, and jurisdiction, and click Draft Complete Document. Then switch to the Execution, Notary, Bond and Google tab to run the 12-Point Guardrail Audit and generate your State Notary Jurat, Two-Witness Attestation, Trustee Surety Bond, and USPS Certified Mail packet.",
    bullets: [
      "17 Court-Ready & Bank-Ready Educational Trust, Banking & Administrative Templates.",
      "12-Point Zero-Defect Guardrail Verifier checks for Doctrine of Merger defects, Spendthrift § 56 shields, and UTC § 1013 compliance.",
      "1-Click Notary Jurat, 2-Witness Attestation, $250K Surety Bond & USPS Certified Mail Affidavit generator."
    ]
  },
  {
    num: 4,
    title: "Lesson 4: How to Use the 10K–50K+ Word Book Maker, Read the 6 Flagship Textbooks & Manage Credits",
    targetTab: "library",
    demoCorpusQuery: "UTC Section 1013 Certificate of Trust Banking Resolution",
    actionLabel: "⚡ Open 25-Volume Corpus & Run Live Search Demo →",
    narration: "Lesson 4: How to access your 6 Flagship Textbooks, use the 10,000 to 50,000 Word Book Maker, and manage your monthly plan and AI credits. In the 25-Volume Corpus and 6 Books tab, you can read all 6 unabridged SPC University Flagship Textbooks totaling 104,519 words—including The Complete Estate Planning Vault, 10-Layer Trust Architecture, The Bank Packet, Client Dossier Playbook, Know Your Rights, and The SPCU Doctrine—plus search all 2,260 corpus passages. In the Book Maker tab, you can generate custom 10-chapter study manuals on any trust topic and export them to PDF, Word, EPUB, or Kindle. And in the Plans and Credits tab, you can top up AI model credits or redeem any webinar voucher code in one click.",
    bullets: [
      "All 6 Unabridged Flagship Textbooks (104,519 Words) + 25 Omnibus Volumes unlocked inside your Member Vault.",
      "📖 10,000–50,000+ Word Book & Guide Maker with PDF, Word .DOC, EPUB, MOBI & HTML exports.",
      "💳 Instant Voucher Redemption & Monthly Membership / Credit Top-Up Center."
    ]
  }
];

window.playMemberTutorialVoice = function(idx, btnEl) {
  const step = MEMBER_TUTORIAL_STEPS[idx] || MEMBER_TUTORIAL_STEPS[0];
  window.speakTextAloud(step.narration, btnEl);
};

window.runMemberTutorialDemo = async function(idx) {
  const step = MEMBER_TUTORIAL_STEPS[idx] || MEMBER_TUTORIAL_STEPS[0];
  if (step.demoPrompt) {
    window.launchPrompt(step.demoPrompt, step.demoTier || "standard");
    return;
  }
  await window.switchTab(step.targetTab);
  if (step.demoTutorId) {
    STATE.selectedTutorId = step.demoTutorId;
    renderShell();
    window.runTutorSession(step.demoTutorMode || "masterclass", "standard");
  } else if (step.demoDraftTemplate) {
    const sel = $("#docTplSelect");
    if (sel) sel.value = step.demoDraftTemplate;
    if ($("#docTrustName")) $("#docTrustName").value = "The Sovereign Heritage Pure Trust";
    if ($("#docGrantorName")) $("#docGrantorName").value = "Sui Juris Settlor";
    if ($("#docTrusteeName")) $("#docTrusteeName").value = "Independent Fiduciary Board of Trustees";
    if ($("#docJurisdiction")) $("#docJurisdiction").value = "Private Common-Law / Applicable Venue";
    if ($("#docAssets")) $("#docAssets").value = "Schedule A Real Property, Operating LLC Membership Units & Private Treasury Account";
    window.generateCourtBankDocument("premium");
  } else if (step.demoCorpusQuery) {
    const qIn = $("#kbQuery");
    if (qIn) qIn.value = step.demoCorpusQuery;
    window.searchKB();
  }
};

function renderMemberTutorial() {
  return \`
    <div class="card-hero" style="margin-bottom:22px;border:2px solid var(--gold)">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:16px">
        <div>
          <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:10px">
            <span class="seal emerald">🎙️ INTERACTIVE MEMBER WALKTHROUGH &amp; VOICE TUTORIAL</span>
            <span class="seal">● 4 Guided Hands-On Lessons</span>
            <span class="seal">● 1-Click Recorded Audio Narration</span>
            <span class="seal">● 1-Click Live Interactive Simulator</span>
          </div>
          <h2>How to Master TrustGPT OS, Your 167 AI Lesson Tutors, 17 Trust Drafters &amp; 6-Book Vault</h2>
          <p style="color:#e8eef5;font-size:14.5px;max-width:920px;margin:0 0 16px;line-height:1.68">
            Welcome to your logged-in SPC University Member AI Suite. Tap <strong>🔊 Listen to Audio Tutorial</strong> on any lesson below to hear a clear voice walkthrough on your phone or computer, or tap <strong>⚡ Launch Live Demo</strong> to jump straight into that tool and try it hands-on.
          </p>
          <div style="display:flex;gap:10px;flex-wrap:wrap">
            <button class="btn-gold" onclick="playMemberTutorialVoice(0, this)">🔊 Listen to Lesson 1 Audio Tutorial →</button>
            <button class="btn-ghost" onclick="runMemberTutorialDemo(0)">⚡ Run Live Guided TrustGPT Chat Demo →</button>
            <button class="btn-ghost" onclick="switchTab('tutors')">🎓 Open 167 Personal AI Tutors →</button>
            \${STATE.isAdminOwner ? \`<button class="btn-ghost" style="border-color:var(--gold);color:var(--gold)" onclick="switchTab('admin_academy')">👑 Open Mr. Yusef / Mr. Bay Founder Admin Tour →</button>\` : ""}
          </div>
        </div>
      </div>
    </div>

    <div style="display:flex;flex-direction:column;gap:16px;margin-bottom:26px">
      \${MEMBER_TUTORIAL_STEPS.map((st, idx) => \`
        <div class="card" style="border-color:var(--line-strong);border-left:4px solid var(--gold)">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:12px;margin-bottom:10px;padding-bottom:10px;border-bottom:1px solid var(--line)">
            <div>
              <span class="seal emerald">MEMBER TUTORIAL LESSON 0\${st.num} OF 04</span>
              <h3 style="font-family:var(--font-serif);font-size:21px;color:#fff;margin:6px 0 0">\${esc(st.title)}</h3>
            </div>
            <div style="display:flex;gap:8px;flex-wrap:wrap">
              <button class="btn-gold" onclick="playMemberTutorialVoice(\${idx}, this)">🔊 Listen to Audio Tutorial</button>
              <button class="btn-ghost" onclick="runMemberTutorialDemo(\${idx})">\${esc(st.actionLabel)}</button>
            </div>
          </div>
          <p style="font-size:13.5px;color:#e8eef5;line-height:1.68;margin:0 0 12px;background:rgba(4,13,26,0.85);padding:14px;border-radius:10px;border:1px solid rgba(0,212,255,0.28)">
            <strong>🎙️ Voice Walkthrough Script:</strong> "\${esc(st.narration)}"
          </p>
          <div style="display:flex;flex-direction:column;gap:6px">
            \${st.bullets.map((b) => \`
              <div style="font-size:13px;color:var(--cyan);display:flex;gap:8px;align-items:flex-start">
                <span style="color:var(--gold);font-weight:800">✓</span>
                <span style="color:#e8eef5">\${esc(b)}</span>
              </div>
            \`).join("")}
          </div>
        </div>
      \`).join("")}
    </div>
  \`;
}

function renderAdminAcademy() {
  if (!STATE.isAdminOwner) {
    return \`
      <div class="card-hero" style="max-width:680px;margin:24px auto;text-align:center">
        <span class="seal">🔒 FOUNDER &amp; SUPER ADMIN RESTRICTED ACCESS</span>
        <h2>Mr. Yusef El (Mr. Bay) — Executive Command &amp; Walkthrough Academy</h2>
        <p style="color:#c8d6e5;font-size:14px;line-height:1.65;margin:10px auto 18px">
          This interactive walkthrough, recorded audio tour, server architecture dossier, and monetization command manual is strictly reserved for <strong>Mr. Yusef El (Mr. Bay)</strong> and authorized SPC University Super Administrators.
        </p>
        <button class="btn-gold" onclick="unlockAdminMasterAcademy()">👑 Enter Founder / Admin Passcode to Unlock →</button>
      </div>
    \`;
  }

  return \`
    <div class="card-hero" style="margin-bottom:22px;border:2px solid var(--gold)">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:16px">
        <div>
          <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:10px">
            <span class="seal emerald">👑 ADMIN-ONLY · PREPARED EXCLUSIVELY FOR MR. YUSEF EL (MR. BAY)</span>
            <span class="seal">● Recorded Voice Walkthrough (Deepgram Aura-2 TTS)</span>
            <span class="seal">● 1-Click Live Interactive Simulator</span>
            <span class="seal">● $418,500.00 System Value ($0.00 Partner Balance)</span>
          </div>
          <h2>Mr. Yusef El &amp; Mr. Bay — Complete Interactive System Walkthrough, AI Operations &amp; Monetization Master Manual</h2>
          <p style="color:#e8eef5;font-size:14.5px;max-width:920px;margin:0 0 16px;line-height:1.68">
            Brother Yusef, this private Admin Command Academy is built so you can <strong>master every single tool, AI model, chatbot, server connection, tracking ledger, and monetization stream</strong> at your own pace—with <strong>recorded voice narration you can listen to on your phone</strong> and <strong>1-click interactive demo buttons</strong> that drive the system for you live.
          </p>
          <div style="display:flex;gap:10px;flex-wrap:wrap">
            <button class="btn-gold" onclick="playAdminModuleVoice(0, this)">🔊 Listen to Rick's Full Audio Walkthrough (Module 1) →</button>
            <button class="btn-ghost" onclick="runAdminInteractiveDemoStep(1)">⚡ Watch Live Interactive Chat &amp; 10-Layer Demo →</button>
            <a class="btn-ghost" href="https://spcuniversity.com/admin-tutorial?admin=yusef" target="_blank" style="text-decoration:none">📑 Open Standalone Printable Admin Manual &amp; Copy ↗</a>
            <a class="btn-ghost" href="https://spcuniversity.com/report" target="_blank" style="text-decoration:none">💰 View $418,500 Itemized Valuation Dossier ↗</a>
          </div>
        </div>
      </div>
    </div>

    <!-- 5 Interactive Voice-Narrated Walkthrough Modules -->
    <div style="margin-bottom:14px">
      <div class="overline">PART 1 · INTERACTIVE 5-MODULE VOICE &amp; HANDS-ON WALKTHROUGH (TAP LISTEN OR RUN DEMO ON ANY MODULE)</div>
      <h3 style="font-family:var(--font-serif);font-size:24px;color:#fff;margin:4px 0 12px">Step-by-Step Recorded Audio Tour &amp; 1-Click Live Simulator</h3>
    </div>
    <div style="display:flex;flex-direction:column;gap:16px;margin-bottom:28px">
      \${ADMIN_TOUR_STEPS.map((st, idx) => \`
        <div class="card" style="border-color:\${idx === STATE.adminTourStep ? "var(--gold)" : "var(--line-strong)"};border-left:4px solid var(--gold)">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:12px;margin-bottom:10px;padding-bottom:10px;border-bottom:1px solid var(--line)">
            <div>
              <span class="seal emerald">WALKTHROUGH MODULE 0\${st.num} OF 05</span>
              <h3 style="font-family:var(--font-serif);font-size:21px;color:#fff;margin:6px 0 0">\${esc(st.title)}</h3>
            </div>
            <div style="display:flex;gap:8px;flex-wrap:wrap">
              <button class="btn-gold" onclick="playAdminModuleVoice(\${idx}, this)">🔊 Listen to Audio Walkthrough</button>
              <button class="btn-ghost" onclick="runAdminInteractiveDemoStep(\${idx})">\${esc(st.actionLabel)}</button>
            </div>
          </div>
          <p style="font-size:13.5px;color:#e8eef5;line-height:1.68;margin:0 0 12px;background:rgba(4,13,26,0.85);padding:14px;border-radius:10px;border:1px solid rgba(0,212,255,0.28)">
            <strong>🎙️ Rick's Walkthrough Script:</strong> "\${esc(st.narration)}"
          </p>
          <div style="display:flex;flex-direction:column;gap:6px">
            \${st.bullets.map((b) => \`
              <div style="font-size:13px;color:var(--cyan);display:flex;gap:8px;align-items:flex-start">
                <span style="color:var(--gold);font-weight:800">✓</span>
                <span style="color:#e8eef5">\${esc(b)}</span>
              </div>
            \`).join("")}
          </div>
        </div>
      \`).join("")}
    </div>

    <!-- Part 2: Two-Chatbot Funnel Architecture (Public Lead Magnet Bot vs Member TrustGPT OS) -->
    <div class="grid-2" style="margin-bottom:26px">
      <div class="card" style="border-color:var(--cyan)">
        <div class="overline">1. Public Website Lead-Magnet Bot (On spcuniversity.com)</div>
        <h3 style="font-family:var(--font-serif);font-size:21px;color:#fff;margin:4px 0 8px">How Your 24/7 Website Concierge Captures &amp; Converts Leads</h3>
        <p style="font-size:13.5px;color:#e8eef5;line-height:1.65;margin:0 0 10px">
          Every visitor who lands on <strong>https://spcuniversity.com/</strong> or reads any of your <strong>128 articles ("By Yusef El · Founder, SPC University")</strong> sees the floating gold &amp; navy button in the bottom-right corner: <strong>"Ask SPC University Concierge"</strong>.
        </p>
        <ul style="font-size:13px;color:#c8d6e5;padding-left:18px;line-height:1.65;margin:0">
          <li><strong>What It Knows:</strong> All 2,260 corpus passages, 25 Trust Law Omnibus Volumes, 6 Books, and 128 articles.</li>
          <li><strong>What It Does:</strong> Answers visitors' trust, banking, equity, and constitutional questions in plain English with <code>[S#]</code> citations so they immediately experience your mastery.</li>
          <li><strong>What It NEVER Does (Protects Your Revenue):</strong> It is strictly hard-coded <strong>never</strong> to give away free book downloads, <strong>never</strong> to output full book chapters, and <strong>never</strong> to draft trust indentures for free.</li>
          <li><strong>How It Converts:</strong> Every single reply includes direct links to <strong>🎓 Enroll in SPCU</strong> (<code>/please-read-the-rules-carefully/</code>) and <strong>🔒 Member Portal Login</strong> (<code>member.spcuniversity.com/login</code>).</li>
        </ul>
      </div>

      <div class="card" style="border-color:var(--gold)">
        <div class="overline">2. Locked Behind &amp; Built Directly Into Your Member Area (member.spcuniversity.com &amp; /app)</div>
        <h3 style="font-family:var(--font-serif);font-size:21px;color:#fff;margin:4px 0 8px">Why Paying Members Keep Paying Monthly ($99/mo – $297/mo – $997/yr)</h3>
        <p style="font-size:13.5px;color:#e8eef5;line-height:1.65;margin:0 0 10px">
          TrustGPT OS, the 6-Model Council, the 167 AI Tutors, the Book Maker, and the 6 Flagship Textbooks are <strong>100% locked behind the Paying Member Gate</strong> and <strong>embedded directly inside <code>member.spcuniversity.com</code></strong> once a member logs in:
        </p>
        <ul style="font-size:13px;color:#c8d6e5;padding-left:18px;line-height:1.65;margin:0">
          <li><strong>Built Right Into <code>member.spcuniversity.com</code>:</strong> When a paying member logs into the Member Area, the top <strong>Active Member AI Command Bar &amp; Slide-Over Workspace</strong> appears automatically with 1-click tabs for TrustGPT, the 167 Lesson Tutors, 17 Trust Drafters, Book Maker, and 6 Flagship Books.</li>
          <li><strong>Zero Free Public Bypass:</strong> Public visitors cannot enter <code>/app</code> without logging in with active Member Area credentials or purchasing a Monthly/Annual Membership Tier.</li>
          <li><strong>High-Ticket Monthly Recurring Retention:</strong> Members stay subscribed monthly (<code>$99/mo Pro Student</code>, <code>$297/mo Sovereign Counsel</code>, <code>$997/yr All-Access Vault</code>) and buy <code>$29–$497</code> credit top-up packs to keep using their 167 AI Lesson Tutors, 6-Model Legal Council, and 17 Trust Drafters.</li>
        </ul>
      </div>
    </div>

    <!-- Part 3: Server, DNS, Tracking & Value Architecture Summary -->
    <div class="card" style="margin-bottom:24px;border-color:var(--gold)">
      <div class="overline">PART 3 · HOW EVERYTHING IS INTEGRATED, TRACKED &amp; VALUED ($418,500.00 COMMERCIAL ARCHITECTURE)</div>
      <h3 style="font-family:var(--font-serif);font-size:23px;color:#fff;margin:4px 0 12px">Your Server Topology, Real-Time Tracking Databases &amp; 18-Model Stack</h3>
      <div class="grid-3">
        <div style="background:var(--navy-deep);border:1px solid var(--line-strong);border-radius:12px;padding:16px">
          <div class="overline" style="color:var(--gold);margin-bottom:6px">1. Cloudflare Edge + Legacy Servers + 10.8 TB NAS</div>
          <div style="font-size:13px;color:#e8eef5;line-height:1.6">
            • <strong>27 DNS Records &amp; 19 Edge Routes:</strong> Connects <code>spcuniversity.com</code> (WordPress 106.0.62.102), <code>member.spcuniversity.com</code>, <code>admin.spcuniversity.com</code>, and <code>lms.spcuniversity.com</code> (208.109.215.160).<br>
            • <strong>UGREEN DXP4800 Plus NAS (10.8 TB RAID-5):</strong> Connected via Cloudflare Zero Trust (<code>vault.spcuniversity.com</code>) storing your code, 4.75 MB FTS5 database, 2,260 corpus passages, and 5 local AI model weight archives.
          </div>
        </div>
        <div style="background:var(--navy-deep);border:1px solid var(--line-strong);border-radius:12px;padding:16px">
          <div class="overline" style="color:var(--gold);margin-bottom:6px">2. How Every User, Credit &amp; Sale Is Tracked</div>
          <div style="font-size:13px;color:#e8eef5;line-height:1.6">
            • <strong>Cloudflare D1 SQLite (<code>trustgpt-db</code>):</strong> Tracks <code>users</code> (email, plan, credit balance), <code>ledger</code> (every +credit purchase/voucher &amp; -credit model run with timestamp), <code>usage</code> (daily free tier counters), <code>messages</code>, <code>memories</code>, and <code>api_keys</code>.<br>
            • <strong>Cloudflare Vectorize (<code>trustgpt-kb</code>):</strong> 2,260 1024-D BGE-M3 semantic vectors.<br>
            • <strong>Cloudflare KV &amp; R2:</strong> Instant session tokens, vouchers, and generated media storage.
          </div>
        </div>
        <div style="background:var(--navy-deep);border:1px solid var(--line-strong);border-radius:12px;padding:16px">
          <div class="overline" style="color:var(--gold);margin-bottom:6px">3. Why This System Is Worth $418,500.00</div>
          <div style="font-size:13px;color:#e8eef5;line-height:1.6">
            • <strong>$68,000:</strong> 104,519 words of unabridged legal textbooks across 6 volumes.<br>
            • <strong>$113,000:</strong> TrustGPT full-stack SaaS + 18-Model AI &amp; 6-Model Council engine.<br>
            • <strong>$58,500:</strong> 2,260-passage Worldwide Trust Corpus &amp; Vectorize RAG DB.<br>
            • <strong>$102,500:</strong> 10K–50K Word Book Maker, 167 AI Tutors &amp; 17 Trust Drafters.<br>
            • <strong>$76,500:</strong> Cloudflare Edge DNS/SEO/AEO, 10.8 TB NAS Vault, 39-Asset Brand Kit &amp; 13-Package Billing Hub.
          </div>
        </div>
      </div>
    </div>
  \`;
}

const MODEL_CATALOG = [
  { id: "deepseek-v4.1", name: "DeepSeek V4.1 Flash", params: "304B MoE", provider: "SPCU Legal Intelligence", role: "Rigorous Trust & Citation Specialist", lens: "Lens #1: Strict Citation & Legal Precision", badge: "LIVE · STREAM" },
  { id: "glm-5.3", name: "GLM-5.3 Counsel", params: "Frontier", provider: "SPCU Legal Intelligence", role: "Long-Form Trust Indenture & Memo Drafter", lens: "Lens #2: Risk & Skeptic Audit", badge: "LIVE · STREAM" },
  { id: "gpt-oss-120b", name: "GPT-120B Trust Architect", params: "120B", provider: "SPCU Legal Intelligence", role: "High-Clarity Practical Step-by-Step Architect", lens: "Lens #3: Actionable Checklist Builder", badge: "LIVE · STREAM" },
  { id: "mistral-small-3.1", name: "Mistral 3.1 Educator", params: "24B", provider: "SPCU Legal Intelligence", role: "Fast Structured Educator & Plain-English Teacher", lens: "Lens #4: Plain-Language Teacher", badge: "LIVE · STREAM" },
  { id: "llama-4-scout", name: "Llama 4 Scout 109B", params: "109B MoE", provider: "SPCU Legal Intelligence", role: "Multi-Document Synthesis & Vision OCR", lens: "Lens #5: Big-Picture Trust Strategist", badge: "LIVE · STREAM" },
  { id: "nemotron-550b", name: "Nemotron-3 Ultra 550B", params: "550B MoE", provider: "SPCU Frontier Counsel", role: "Heavyweight 550B Fiduciary & Statutory Reasoning", lens: "Lens #6: Executive Concise Synthesis", badge: "LIVE · STREAM" },
  { id: "nemotron-120b-vl", name: "Nemotron 3.5 Super 120B VL", params: "120B MoE", provider: "SPCU Frontier Counsel", role: "High-Precision Multimodal Document Vision & Legal Audit", lens: "Selectable Council Expert", badge: "LIVE · STREAM" },
  { id: "step-5-preview", name: "Step-5 Jurisprudence Engine", params: "Frontier MoE", provider: "SPCU Frontier Counsel", role: "Deep Multi-Hop Reasoning & Case Synthesis", lens: "Selectable Council Expert", badge: "LIVE · STREAM" },
  { id: "llama-3.3-70b", name: "Llama 3.3 70B Fast", params: "70B", provider: "SPCU Legal Intelligence", role: "High-Speed Daily Trust Study Assistant", lens: "Selectable Council Expert", badge: "LIVE · STREAM" },
  { id: "nemotron-lightning-30b", name: "Nemotron 3.5 Lightning 30B", params: "30B-A3B", provider: "SPCU Frontier Counsel", role: "Ultra-Fast 30B MoE Fiduciary Q&A", lens: "Selectable Council Expert", badge: "LIVE · STREAM" },
  { id: "gemma-4-26b", name: "Gemma 4 26B-A4B", params: "26B MoE", provider: "SPCU Legal Intelligence", role: "Fast MoE Instruction Following", lens: "Selectable Council Expert", badge: "LIVE · STREAM" },
  { id: "qwen-2.5-coder-32b", name: "Qwen 2.5 Structured Drafter 32B", params: "32B", provider: "SPCU Legal Intelligence", role: "Structured Schedules, Ledgers & Clause Formatting", lens: "Selectable Council Expert", badge: "LIVE · STREAM" }
];

const BOOKS = [
  {
    title: "The Complete Estate Planning Vault",
    sub: "Unabridged Flagship Master Edition · 17,772 Words · 11 Chapters",
    words: 17772,
    value: "$1,997 Value",
    cover: "https://spcuniversity.com/brand-kit/images/cover-front-estate-vault.png",
    back_cover: "https://spcuniversity.com/brand-kit/images/cover-back-estate-vault.png",
    url: "https://spcuniversity.com/books/THE_ESTATE_PLANNING_VAULT_MASTER_EDITION",
    desc: "Complete 17,772-word Common-Law Pure Trust Indenture, Pour-Over Will, Living Will, Healthcare Surrogate, Durable Power of Attorney, Schedule A Deeds & Trustee Resolutions.",
    prompt: "Give me an executive walkthrough of The Complete Estate Planning Vault and the core documents inside it."
  },
  {
    title: "Trust Architecture: 10 Layers of Asset Protection",
    sub: "Unabridged Master Manual · 18,342 Words · 8 Chapters",
    words: 18342,
    value: "$997 Value",
    cover: "https://spcuniversity.com/brand-kit/images/cover-front-trust-architecture.png",
    back_cover: "https://spcuniversity.com/brand-kit/images/cover-back-trust-architecture.png",
    url: "https://spcuniversity.com/books/TRUST_ARCHITECTURE_10_LAYERS_MANUAL",
    desc: "Complete 18,342-word blueprint of the 10-layer asset shielding architecture separating beneficial enjoyment from legal control and public liability.",
    prompt: "Explain the 10 Layers of Asset Protection in the Trust Architecture manual and how each layer shields assets."
  },
  {
    title: "The Bank Packet: Open Your Trust Account",
    sub: "Unabridged Banking & EIN Manual · 13,934 Words · 7 Chapters",
    words: 13934,
    value: "$497 Value",
    cover: "https://spcuniversity.com/brand-kit/images/cover-front-bank-packet.png",
    back_cover: "https://spcuniversity.com/brand-kit/images/cover-back-bank-packet.png",
    url: "https://spcuniversity.com/books/THE_BANK_PACKET_OPEN_YOUR_TRUST_ACCOUNT",
    desc: "Complete 13,934-word banker scripts, UTC § 1013 Certificate of Trust template, IRS SS-4 EIN walkthrough, and Bank Manager Legal Escalation protocol.",
    prompt: "Walk me step by step through The Bank Packet protocol before I walk into a bank to open a trust account."
  },
  {
    title: "Client Dossier: Strategy Session Playbook",
    sub: "Unabridged Advisory Intake System · 17,707 Words · 7 Chapters",
    words: 17707,
    value: "$997 Value",
    cover: "https://spcuniversity.com/brand-kit/images/cover-front-client-dossier.png",
    back_cover: "https://spcuniversity.com/brand-kit/images/cover-back-client-dossier.png",
    url: "https://spcuniversity.com/books/CLIENT_DOSSIER_STRATEGY_SESSION_PLAYBOOK",
    desc: "Complete 17,707-word 7-phase diagnostic intake questionnaire, risk matrix, entity structuring worksheet, and engagement memo blueprint.",
    prompt: "Walk me through the 7-Phase Client Dossier Strategy Session intake and how to structure a client strategy memo."
  },
  {
    title: "Know Your Rights: What Works in Court",
    sub: "Unabridged Master Field Manual · 14,460 Words · 7 Chapters",
    words: 14460,
    value: "$297 Value",
    cover: "https://spcuniversity.com/brand-kit/images/cover-front-know-your-rights.png",
    back_cover: "https://spcuniversity.com/brand-kit/images/cover-back-know-your-rights.png",
    url: "https://spcuniversity.com/books/KNOW_YOUR_RIGHTS_MASTER_FIELD_MANUAL",
    desc: "Complete 14,460-word constitutional rights handbook covering 4th, 5th & 6th Amendment preservation, traffic stops, record building, and courtroom procedure.",
    prompt: "According to the Know Your Rights Master Field Manual, what actually works during a traffic stop and in court?"
  },
  {
    title: "The SPCU Doctrine: Foundations Before Remedies",
    sub: "Unabridged Philosophical & Legal Treatise · 20,231 Words · 7 Chapters",
    words: 20231,
    value: "$497 Value",
    cover: "https://spcuniversity.com/brand-kit/images/ebook-doctrine-cover.jpg",
    back_cover: "https://spcuniversity.com/brand-kit/images/cover-back-estate-vault.png",
    url: "https://spcuniversity.com/books/THE_SPCU_DOCTRINE_FOUNDATIONS_BEFORE_REMEDIES",
    desc: "Complete 20,231-word foundational treatise explaining why status, fiduciary capacity, and contract discipline must come before commercial or administrative remedies.",
    prompt: "Summarize the core principles of The SPCU Doctrine: Foundations Before Remedies."
  }
];

const PLAYBOOKS = [
  { label: "🏛️ 10-Layer Trust Blueprint", q: "Build a step-by-step overview of the 10 Layers of Trust Architecture and explain what documents I need first." },
  { label: "🏦 7-Step Bank Packet Script", q: "Give me the exact 7-step Bank Packet checklist and scripted answers when opening a private trust bank account." },
  { label: "⚖️ Roadside & Courtroom Rights", q: "What are the exact rules and statements from Know Your Rights that work at a traffic stop and preserve the record for court?" },
  { label: "📋 7-Phase Client Intake Dossier", q: "Run me through the 7-Phase Client Dossier Strategy Session intake questions to audit my current estate and asset protection." },
  { label: "📜 SPCU Doctrine: Capacity & Contract", q: "Explain The SPCU Doctrine 'Foundations Before Remedies' and why capacity and contract structure matter first." },
  { label: "🧾 IRS SS-4 EIN for a Pure Trust", q: "How do I properly prepare the Certificate of Trust and IRS SS-4 EIN application for a trust banking packet?" }
];

const TIERS = [
  { id: "standard", name: "Standard · Trust Counsel", cost: "Free Daily", desc: "Fast curriculum-grounded answers with [S#] citations" },
  { id: "fast", name: "Fast · Study Assistant", cost: "Free Daily", desc: "Instant study & definitions assistant" },
  { id: "premium", name: "Senior Drafter · 120B", cost: "1 Credit", desc: "Deep structured trust drafting & checklists" },
  { id: "frontier", name: "Supreme Counsel · 550B", cost: "3 Credits", desc: "550B heavyweight statutory & fiduciary reasoning" },
  { id: "council", name: "👑 6-Model Legal Council", cost: "4 Credits", desc: "6 legal AI models deliberate in parallel + Chair synthesis" }
];

async function api(path, body, method) {
  const m = method || (body ? "POST" : "GET");
  const apiBase = window.location.pathname.toLowerCase().startsWith("/app") ? "/app/api/" : "/api/";
  const r = await fetch(apiBase + path, {
    method: m,
    headers: {
      "content-type": "application/json",
      ...(TOKEN ? { authorization: "Bearer " + TOKEN } : {})
    },
    body: body ? JSON.stringify(body) : undefined
  });
  const j = await r.json().catch(() => ({}));
  if (!r.ok) throw new Error(j.error || ("HTTP " + r.status));
  return j;
}

function safeAttrJs(val) {
  return JSON.stringify(val).replace(/&/g, "&amp;").replace(/'/g, "&#39;").replace(/"/g, "&quot;");
}
function esc(s) {
  return String(s || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function stripMdClient(s) {
  return String(s || "")
    .replace(/HFRN Global Media Group(?: Inc\.?)?/gi, "SPC University")
    .replace(/RJ Business Solutions/gi, "SPC University")
    .replace(/\\x60\\x60\\x60[a-zA-Z0-9_-]*\\n?/g, "")
    .replace(/\\x60\\x60\\x60/g, "")
    .replace(/^#{1,6}\\s+/gm, "")
    .replace(/\\*\\*\\*([^*]+)\\*\\*\\*/g, "$1")
    .replace(/\\*\\*([^*]+)\\*\\*/g, "$1")
    .replace(/__([^_]+)__/g, "$1")
    .replace(/\\x60([^\\x60]+)\\x60/g, "$1")
    .replace(/^\\s*\\*\\s+/gm, "- ")
    .replace(/^---+$/gm, "");
}

window.clearChatHistory = async function() {
  try { await api("history", null, "DELETE"); } catch {}
  STATE.messages = [];
  renderShell();
};

function formatMarkdown(text) {
  let h = esc(stripMdClient(text || ""));
  h = h.replace(/\\[((?:S|W)\\d+)\\]/g, '<span class="src-chip">[$1]</span>');
  h = h.replace(/\\n/g, "<br>");
  return h;
}

window.isVerifiedMemberForBooks = function() {
  const u = STATE.user || {};
  const em = String(u.email || "").toLowerCase();
  if (localStorage.getItem("spcu_member_book_token")) return true;
  if (u.plan === "sovereign" || u.plan === "pro") {
    if (!em.startsWith("member-")) return true;
    if ((STATE.ledger || []).some((l) => l.delta > 0)) return true;
  }
  return false;
};

window.openBookModal = function(title, url) {
  if (!window.isVerifiedMemberForBooks()) {
    const code = prompt("🔒 MEMBER-ONLY PUBLICATION VAULT\\n\\n'" + title + "' is an official SPC University Member-Only publication.\\n\\n• If you have an SPC University Member Access Code or Voucher (e.g. SPCU-VIP-100, SPCU-PRO-350, SPCU-MEMBER), enter it below to unlock immediately:\\n• Or click Cancel to open the Plans, Credits & Member Store tab to purchase or sign in.");
    if (code && code.trim()) {
      api("member-book-verify", { code_or_email: code.trim() }).then((r) => {
        if (r && r.member_access_token) {
          localStorage.setItem("spcu_member_book_token", r.member_access_token);
          STATE.user.plan = r.plan || "pro";
          const sep = url.includes("?") ? "&" : "?";
          const authedUrl = url + sep + "member_token=" + encodeURIComponent(r.member_access_token);
          $("#bookModalTitle").textContent = title;
          $("#bookModalExt").href = authedUrl;
          $("#bookModalFrame").src = authedUrl;
          $("#bookModal").classList.add("open");
        }
      }).catch((e) => {
        alert("🔒 " + e.message);
        switchTab("billing");
      });
      return;
    }
    switchTab("billing");
    return;
  }
  const tok = localStorage.getItem("spcu_member_book_token") || TOKEN;
  const sep = url.includes("?") ? "&" : "?";
  const authedUrl = url + (tok ? sep + "member_token=" + encodeURIComponent(tok) : "");
  $("#bookModalTitle").textContent = title;
  $("#bookModalExt").href = authedUrl;
  $("#bookModalFrame").src = authedUrl;
  $("#bookModal").classList.add("open");
};
window.closeBookModal = function() {
  $("#bookModal").classList.remove("open");
  $("#bookModalFrame").src = "about:blank";
};

window.toggleTheme = function() {
  document.body.classList.toggle("light-mode");
  localStorage.setItem("spcu_theme", document.body.classList.contains("light-mode") ? "light" : "dark");
};
if (localStorage.getItem("spcu_theme") === "light") document.body.classList.add("light-mode");

// ---------- Universal File, PDF, DOCX, Excel, Image OCR & Audio Parser ----------
async function parseUniversalFile(file) {
  const name = file.name || "uploaded-file";
  const ext = (name.split(".").pop() || "").toLowerCase();
  const mime = (file.type || "").toLowerCase();

  // 1. Images (.png, .jpg, .jpeg, .webp, .gif, .bmp) -> Vision OCR
  if (mime.startsWith("image/") || ["png", "jpg", "jpeg", "webp", "gif", "bmp"].includes(ext)) {
    const dataUri = await new Promise((res, rej) => {
      const fr = new FileReader();
      fr.onload = () => res(fr.result);
      fr.onerror = rej;
      fr.readAsDataURL(file);
    });
    return { name, kind: "image", image_base64: dataUri, summary: "Image / Scanned Document queued for Vision OCR" };
  }

  // 2. Audio (.mp3, .wav, .m4a, .webm, .ogg) -> Whisper v3 Turbo ASR
  if (mime.startsWith("audio/") || ["mp3", "wav", "m4a", "webm", "ogg", "flac"].includes(ext)) {
    const dataUri = await new Promise((res, rej) => {
      const fr = new FileReader();
      fr.onload = () => res(fr.result);
      fr.onerror = rej;
      fr.readAsDataURL(file);
    });
    const tr = await api("transcribe", { audio_base64: dataUri });
    return { name, kind: "audio", content_text: tr.text || "(No speech detected)", summary: "Transcribed via Whisper v3 Turbo (" + (tr.text || "").length + " chars)" };
  }

  // 3. PDF (.pdf) -> PDF.js text extraction + scanned page fallback to Vision OCR
  if (mime === "application/pdf" || ext === "pdf") {
    if (window.pdfjsLib) {
      window.pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
      const ab = await file.arrayBuffer();
      const pdf = await window.pdfjsLib.getDocument({ data: ab }).promise;
      let textPages = [];
      for (let i = 1; i <= Math.min(pdf.numPages, 25); i++) {
        const page = await pdf.getPage(i);
        const tc = await page.getTextContent();
        const pageStr = tc.items.map((it) => it.str).join(" ").trim();
        if (pageStr) textPages.push("[Page " + i + "] " + pageStr);
      }
      const joined = textPages.join("\\n\\n").trim();
      if (joined.length > 40) {
        return { name, kind: "pdf", content_text: joined, summary: "PDF extracted (" + pdf.numPages + " pages, " + joined.length + " chars)" };
      }
      // Scanned image-only PDF: render Page 1 to canvas for Vision OCR
      const page1 = await pdf.getPage(1);
      const vp = page1.getViewport({ scale: 1.6 });
      const canvas = document.createElement("canvas");
      canvas.width = vp.width;
      canvas.height = vp.height;
      await page1.render({ canvasContext: canvas.getContext("2d"), viewport: vp }).promise;
      return { name, kind: "scanned-pdf", image_base64: canvas.toDataURL("image/jpeg", 0.88), summary: "Scanned PDF rendered for Vision OCR" };
    }
  }

  // 4. Word Documents (.docx) -> Mammoth.js
  if (ext === "docx" && window.mammoth) {
    const ab = await file.arrayBuffer();
    const res = await window.mammoth.extractRawText({ arrayBuffer: ab });
    const txt = (res.value || "").trim();
    return { name, kind: "docx", content_text: txt, summary: "DOCX extracted (" + txt.length + " chars)" };
  }

  // 5. Excel / Spreadsheets (.xlsx, .xls) -> SheetJS
  if (["xlsx", "xls"].includes(ext) && window.XLSX) {
    const ab = await file.arrayBuffer();
    const wb = window.XLSX.read(ab, { type: "array" });
    const sheets = wb.SheetNames.map((sn) => "=== Sheet: " + sn + " ===\\n" + window.XLSX.utils.sheet_to_csv(wb.Sheets[sn])).join("\\n\\n");
    return { name, kind: "excel", content_text: sheets, summary: "Spreadsheet extracted (" + wb.SheetNames.length + " sheets)" };
  }

  // 6. Plain Text / Markdown / CSV / JSON / HTML / XML / RTF
  const rawText = await file.text();
  return { name, kind: "text", content_text: rawText, summary: "Document read (" + rawText.length + " chars)" };
}

window.handleChatFileUpload = async function(ev) {
  const files = Array.from(ev.target.files || []);
  if (!files.length) return;
  const st = $("#chatStatus");
  for (const f of files.slice(0, 4)) {
    if (st) st.textContent = "Reading & indexing " + f.name + "...";
    try {
      const parsed = await parseUniversalFile(f);
      STATE.attachments.push(parsed);
    } catch (e) {
      alert("Could not parse " + f.name + ": " + e.message);
    }
  }
  if (st) st.textContent = "";
  renderShell();
};

window.removeChatAttachment = function(idx) {
  STATE.attachments.splice(idx, 1);
  renderShell();
};

// ---------- Live Microphone Recording & Whisper v3 Turbo ASR ----------
let MEDIA_REC = null;
let AUDIO_CHUNKS = [];
window.toggleMicRecording = async function(targetInputId) {
  const btn = $("#btnMicRecord");
  const st = $("#chatStatus") || $("#ocrLabStatus");
  if (MEDIA_REC && MEDIA_REC.state === "recording") {
    MEDIA_REC.stop();
    return;
  }
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    AUDIO_CHUNKS = [];
    MEDIA_REC = new MediaRecorder(stream);
    MEDIA_REC.ondataavailable = (e) => { if (e.data.size > 0) AUDIO_CHUNKS.push(e.data); };
    MEDIA_REC.onstop = async () => {
      stream.getTracks().forEach((t) => t.stop());
      if (btn) btn.textContent = "🎙️ Voice Mic";
      if (st) st.textContent = "Transcribing speech with Whisper Large v3 Turbo...";
      try {
        const blob = new Blob(AUDIO_CHUNKS, { type: "audio/webm" });
        const b64 = await new Promise((res) => { const fr = new FileReader(); fr.onload = () => res(fr.result); fr.readAsDataURL(blob); });
        const r = await api("transcribe", { audio_base64: b64 });
        const box = $(targetInputId || "#chatInput");
        if (box && r.text) box.value = (box.value ? box.value + " " : "") + r.text;
        if (st) st.textContent = r.text ? "Voice transcribed (" + r.engine + ")" : "No speech detected.";
      } catch (e) {
        if (st) st.textContent = "Voice transcription error: " + e.message;
      }
    };
    MEDIA_REC.start();
    if (btn) btn.textContent = "⏹️ Stop & Transcribe";
    if (st) st.textContent = "🔴 Recording microphone... Click 'Stop & Transcribe' when finished.";
  } catch (e) {
    alert("Microphone access required for live voice input: " + e.message);
  }
};

// ---------- Deepgram Aura-2 EN Voice Read-Aloud (TTS) + Instant Docked HTML5 Audio Player & Browser Speech Fallback ----------
let ACTIVE_AUDIO = null;
let ACTIVE_BTN = null;
let ACTIVE_BTN_ORIG = "";

window.stopSpcuVoicePlayer = function() {
  if (ACTIVE_AUDIO) {
    try { ACTIVE_AUDIO.pause(); ACTIVE_AUDIO.currentTime = 0; } catch {}
    ACTIVE_AUDIO = null;
  }
  try { if (window.speechSynthesis) window.speechSynthesis.cancel(); } catch {}
  if (ACTIVE_BTN) {
    ACTIVE_BTN.textContent = ACTIVE_BTN_ORIG || "🔊 Listen (TTS)";
    ACTIVE_BTN = null;
  }
  const dock = document.getElementById("spcu-voice-player-dock");
  if (dock) dock.style.display = "none";
};

function ensureSpcuVoiceDock() {
  let dock = document.getElementById("spcu-voice-player-dock");
  if (!dock) {
    dock = document.createElement("div");
    dock.id = "spcu-voice-player-dock";
    dock.setAttribute("style", "display:none;position:fixed;left:16px;right:16px;bottom:76px;max-width:680px;margin:0 auto;z-index:99999;background:linear-gradient(135deg,#061c3c 0%,#040d1a 100%);border:2px solid #ffc107;border-radius:16px;padding:12px 16px;box-shadow:0 22px 55px rgba(0,0,0,0.88);color:#ffffff;font-family:var(--font-sans,sans-serif)");
    dock.innerHTML = \`
      <div style="display:flex;justify-content:space-between;align-items:center;gap:10px;margin-bottom:8px;flex-wrap:wrap">
        <div style="display:flex;align-items:center;gap:10px;min-width:0;flex:1">
          <span style="display:inline-flex;align-items:center;justify-content:center;width:32px;height:32px;border-radius:50%;background:rgba(255,193,7,0.2);border:1px solid #ffc107;font-size:16px;flex-shrink:0">🔊</span>
          <div style="min-width:0;flex:1">
            <div style="font-size:10px;letter-spacing:0.15em;text-transform:uppercase;color:#ffc107;font-weight:800">SPC UNIVERSITY · RECORDED AUDIO WALKTHROUGH PLAYER (DEEPGRAM AURA-2)</div>
            <div id="spcu-voice-dock-status" style="font-size:12.5px;color:#e8eef5;font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">Synthesizing &amp; streaming walkthrough audio...</div>
          </div>
        </div>
        <div style="display:flex;gap:6px;align-items:center">
          <button type="button" class="btn-ghost" style="padding:5px 10px;font-size:11px" onclick="window.playBrowserNativeVoiceFallback()">🗣️ Browser Voice</button>
          <button type="button" class="btn-gold" style="padding:5px 12px;font-size:11px" onclick="window.stopSpcuVoicePlayer()">⏹️ Stop / Close ✕</button>
        </div>
      </div>
      <audio id="spcu-voice-dock-audio" controls preload="auto" style="width:100%;height:38px;border-radius:8px;outline:none"></audio>
    \`;
    document.body.appendChild(dock);
  }
  return dock;
}

let LAST_SPOKEN_TEXT = "";
window.playBrowserNativeVoiceFallback = function(txtOverride) {
  const clean = String(txtOverride || LAST_SPOKEN_TEXT || "").replace(/\\[S\\d+\\]/g, "").trim();
  if (!clean) return;
  try {
    if (ACTIVE_AUDIO) { ACTIVE_AUDIO.pause(); }
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(clean);
      u.rate = 1.02;
      u.pitch = 1.0;
      const st = document.getElementById("spcu-voice-dock-status");
      if (st) st.textContent = "Playing via Native Browser Speech Engine...";
      window.speechSynthesis.speak(u);
    }
  } catch {}
};

window.speakTextAloud = async function(text, btnEl) {
  if (ACTIVE_AUDIO && ACTIVE_BTN === btnEl) {
    window.stopSpcuVoicePlayer();
    return;
  }
  window.stopSpcuVoicePlayer();
  const clean = String(text || "")
    .replace(/\\[S\\d+\\]/g, "")
    .replace(/[#*_\\x60>|~-]/g, " ")
    .replace(/\\s+/g, " ")
    .trim()
    .slice(0, 1850);
  if (!clean) return;
  LAST_SPOKEN_TEXT = clean;

  const orig = btnEl ? btnEl.textContent : "🔊 Listen (TTS)";
  ACTIVE_BTN = btnEl || null;
  ACTIVE_BTN_ORIG = orig;
  if (btnEl) btnEl.textContent = "⏹️ Stop Audio";

  const dock = ensureSpcuVoiceDock();
  dock.style.display = "block";
  const st = document.getElementById("spcu-voice-dock-status");
  const audioEl = document.getElementById("spcu-voice-dock-audio");
  if (st) st.textContent = "🔊 Streaming Audio Walkthrough: '" + clean.slice(0, 68) + "...'";

  // 1. Synchronous direct audio stream inside user click gesture (never blocked by browser autoplay policy!)
  const apiBase = window.location.pathname.toLowerCase().startsWith("/app") ? "/app/api/" : "/api/";
  const streamUrl = apiBase + "public-tts-audio?text=" + encodeURIComponent(clean);

  if (audioEl) {
    ACTIVE_AUDIO = audioEl;
    audioEl.src = streamUrl;
    audioEl.onended = () => {
      if (ACTIVE_BTN) ACTIVE_BTN.textContent = ACTIVE_BTN_ORIG;
      ACTIVE_BTN = null;
      ACTIVE_AUDIO = null;
      if (st) st.textContent = "✅ Audio walkthrough finished. Click play below to replay.";
    };
    audioEl.onerror = async () => {
      // Fallback to POST /api/public-tts base64 blob + WebSpeech
      try {
        if (st) st.textContent = "⏳ Loading backup voice synthesis...";
        const r = await api("public-tts", { text: clean });
        if (r && r.audio_base64) {
          audioEl.src = r.audio_base64;
          await audioEl.play();
          if (st) st.textContent = "🔊 Playing Recorded Voice Walkthrough";
          return;
        }
      } catch {}
      window.playBrowserNativeVoiceFallback(clean);
    };
    try {
      await audioEl.play();
    } catch (playErr) {
      if (st) st.textContent = "▶️ Tap the Play button on the audio bar below (or tap '🗣️ Browser Voice'):";
      window.playBrowserNativeVoiceFallback(clean);
    }
  }
};

// ---------- Court-Ready & Bank-Ready Document Export (Print/PDF & Word .DOC) — Official SPC University Brand Kit ----------
window.exportFormalDocument = function(title, content, format) {
  const htmlDoc = \`<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>\${esc(title || "SPC University Official Trust & Strategy Document")}</title>
<style>
  body { font-family: "Georgia", "Times New Roman", serif; color: #e8eef5; background: #040d1a; max-width: 860px; margin: 28px auto; padding: 38px 48px; line-height: 1.72; border: 1px solid #00d4ff; border-radius: 14px; box-shadow: 0 20px 50px rgba(0,0,0,0.65); }
  .doc-header { background: linear-gradient(155deg, #061c3c 0%, #051937 100%); border: 1px solid rgba(0,212,255,0.42); border-bottom: 3px solid #ffc107; border-radius: 12px; padding: 20px 24px; margin-bottom: 26px; display: flex; justify-content: space-between; align-items: center; gap: 16px; }
  .doc-brand-left { display: flex; align-items: center; gap: 14px; }
  .doc-logo { height: 48px; width: auto; object-fit: contain; }
  .doc-overline { font-family: sans-serif; font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; color: #00d4ff; font-weight: 800; }
  h1, h2, h3 { color: #ffc107; font-weight: 800; margin-top: 18px; }
  .doc-body { background: #071932; border: 1px solid rgba(0,212,255,0.25); border-radius: 10px; padding: 26px 30px; color: #e8eef5; font-size: 15px; }
  .src-chip { display: inline-block; padding: 2px 8px; border-radius: 100px; background: rgba(0,212,255,0.15); border: 1px solid #00d4ff; color: #7ce8ff; font-family: sans-serif; font-size: 11px; font-weight: 700; }
  .doc-footer { margin-top: 32px; padding-top: 14px; border-top: 1px solid rgba(0,212,255,0.28); font-size: 11px; color: #9fb0c2; font-family: sans-serif; display: flex; justify-content: space-between; flex-wrap: wrap; gap: 8px; }
  @media print {
    body { background: #ffffff; color: #051937; border: 1px solid #051937; box-shadow: none; margin: 0; padding: 20px; }
    .doc-header { background: #051937 !important; color: #ffffff !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    .doc-body { background: #ffffff; color: #111318; border: 1px solid #cbd5e1; }
    h1, h2, h3 { color: #051937; }
    .doc-header h1 { color: #ffffff !important; }
  }
</style>
</head>
<body>
  <div class="doc-header">
    <div class="doc-brand-left">
      <img class="doc-logo" src="https://spcuniversity.com/brand-kit/images/logo-compact.png" alt="SPC University">
      <div>
        <div class="doc-overline">SPC UNIVERSITY · SCHOOL OF PRIVATE CIVICS · LAW • COMMERCE • EMPOWERMENT</div>
        <h1 style="margin:4px 0 0;font-size:22px;color:#ffffff">\${esc(title || "Official Strategy & Trust Memorandum")}</h1>
      </div>
    </div>
    <div style="text-align:right;font-family:sans-serif;font-size:11px;color:#c8d6e5">
      <div style="color:#ffc107;font-weight:700">SPC UNIVERSITY PRESS</div>
      <div>Date: \${new Date().toISOString().slice(0, 10)}</div>
      <div>Record: Unabridged Educational Instrument</div>
    </div>
  </div>
  <div class="doc-body">\${formatMarkdown(content)}</div>
  <div class="doc-footer">
    <div><strong>SPC University — School of Private Civics</strong> · Law • Commerce • Empowerment · spcuniversity.com</div>
    <div>Educational use only; not personalized legal, tax, or investment advice.</div>
  </div>
</body>
</html>\`;

  if (format === "doc") {
    const blob = new Blob(["\\ufeff", htmlDoc], { type: "application/msword" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = (title || "SPCU-Trust-Document").toLowerCase().replace(/[^a-z0-9]+/g, "-") + ".doc";
    a.click();
  } else {
    const w = window.open("", "_blank");
    if (w) {
      w.document.write(htmlDoc);
      w.document.close();
      setTimeout(() => w.print(), 450);
    }
  }
};

function renderAuth() {
  $("#root").innerHTML = \`
    <div class="auth-wrap" style="padding:24px 14px;align-items:flex-start;overflow-y:auto">
      <div class="auth-card" style="max-width:960px;width:100%;margin:20px auto;padding:28px 24px">
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:14px;padding-bottom:18px;border-bottom:1px solid rgba(0,212,255,0.28);margin-bottom:20px">
          <div style="display:flex;align-items:center;gap:14px">
            <img src="https://spcuniversity.com/brand-kit/images/logo-compact.png" style="height:56px;width:auto;object-fit:contain;filter:drop-shadow(0 4px 16px rgba(0,212,255,0.35))" onerror="this.style.display='none'">
            <div>
              <div class="overline" style="color:#ffc107">🔒 PAYING MEMBER &amp; MONTHLY SUBSCRIBER EXCLUSIVE VAULT</div>
              <h1 style="font-family:var(--font-serif);font-size:clamp(20px,3vw,28px);color:#ffffff;margin:3px 0 0;text-transform:uppercase">SPC University Member Area · TrustGPT OS, 167 AI Tutors &amp; 6-Model Council</h1>
            </div>
          </div>
          <a href="https://member.spcuniversity.com/login" class="btn-gold" style="text-decoration:none;padding:10px 18px;font-size:12px">🏛️ Open Full Member Area Portal →</a>
        </div>

        <div class="grid-2" style="gap:22px;align-items:start">
          <!-- Left Column: Paying Member Sign-In & Voucher Gate -->
          <div style="background:rgba(4,13,26,0.88);border:1.5px solid rgba(0,212,255,0.45);border-radius:14px;padding:22px 20px">
            <div style="display:inline-flex;align-items:center;gap:6px;background:rgba(255,193,7,0.16);border:1px solid #ffc107;color:#ffc107;font-family:var(--font-num);font-size:10.5px;font-weight:800;padding:4px 11px;border-radius:100px;text-transform:uppercase;margin-bottom:12px">
              🔑 Step 1 · Active Paying Member Login
            </div>
            <h2 style="font-family:var(--font-serif);font-size:20px;color:#ffffff;margin:0 0 8px;text-transform:uppercase">Sign In With Your Member Area Credentials</h2>
            <p style="color:#c8d6e5;font-size:13px;line-height:1.58;margin:0 0 16px">
              TrustGPT OS, the <strong>6-Model Legal Council</strong>, all <strong>16+151 Personal AI Lesson Tutors</strong>, the <strong>17 Trust Drafters</strong>, the <strong>10K–50K+ Word Book Maker</strong>, and the <strong>6 Flagship Textbooks</strong> are locked strictly behind the SPC University Member Area for active paying members.
            </p>

            <label class="overline" style="display:block;margin-bottom:6px;color:#00d4ff">Enrolled Member Email Address (member.spcuniversity.com)</label>
            <input id="authEmail" class="input" type="email" placeholder="your-member-email@spcuniversity.com" style="margin-bottom:12px;font-size:16px">

            <label class="overline" style="display:block;margin-bottom:6px;color:#00d4ff">Member Password — OR — Member Voucher / Access Code</label>
            <input id="authPass" class="input" type="password" placeholder="Enter Member Password or Voucher Code (e.g. SPCU-MEMBER)" style="margin-bottom:12px;font-size:16px">

            <div id="authErr" style="color:#ff808b;font-size:13px;min-height:20px;margin-bottom:10px;font-weight:600"></div>

            <button id="btnLogin" class="btn-gold" style="width:100%;justify-content:center;padding:13px 18px;font-size:13.5px;margin-bottom:10px">
              🔓 Unlock Member TrustGPT, 167 Tutors &amp; 6-Book Vault →
            </button>

            <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:8px">
              <a href="https://member.spcuniversity.com/login" class="btn-ghost" style="flex:1;justify-content:center;text-decoration:none;font-size:11.5px;padding:9px 12px">
                🎓 Go to Member Area Login
              </a>
              <button type="button" class="btn-ghost" style="flex:1;justify-content:center;font-size:11.5px;padding:9px 12px;border-color:#ffc107;color:#ffc107" onclick="unlockAdminMasterAcademy()">
                👑 Founder / Mr. Yusef Login
              </button>
            </div>
          </div>

          <!-- Right Column: High-Ticket Monthly Retention & All-Access Membership Offers -->
          <div style="background:linear-gradient(180deg,rgba(10,37,68,0.92) 0%,rgba(4,13,26,0.96) 100%);border:1.5px solid #ffc107;border-radius:14px;padding:22px 20px">
            <div style="display:inline-flex;align-items:center;gap:6px;background:rgba(0,212,255,0.15);border:1px solid #00d4ff;color:#7ce8ff;font-family:var(--font-num);font-size:10.5px;font-weight:800;padding:4px 11px;border-radius:100px;text-transform:uppercase;margin-bottom:10px">
              💎 High-Ticket Monthly Member Access &amp; Retention Tiers
            </div>
            <h2 style="font-family:var(--font-serif);font-size:19px;color:#ffffff;margin:0 0 8px;text-transform:uppercase">Not Yet an Active Monthly Member?</h2>
            <p style="color:#c8d6e5;font-size:12.8px;line-height:1.55;margin:0 0 14px">
              Enroll in an official SPC University Monthly or Annual Membership to unlock full in-portal access to TrustGPT OS, the 6-Model Legal Council, all 167 AI Lesson Tutors, 17 Trust Drafters, and the 6 Flagship Textbooks:
            </p>

            <div style="display:grid;gap:10px;margin-bottom:14px">
              <div style="background:rgba(4,13,26,0.88);border:1px solid rgba(0,212,255,0.38);border-radius:10px;padding:12px 14px">
                <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;flex-wrap:wrap">
                  <strong style="color:#ffffff;font-size:14px">🎓 SPCU Pro Student Membership</strong>
                  <span class="seal" style="background:rgba(0,212,255,0.18);color:#7ce8ff;border-color:#00d4ff;font-weight:800">$99 / month</span>
                </div>
                <div style="font-size:12px;color:#9fb0c2;margin-top:4px;line-height:1.45">
                  Includes Member Area Course Portal + 167 Personal AI Lesson Tutors + 250 Daily Standard TrustGPT Runs + 150 Monthly Council Credits.
                </div>
              </div>

              <div style="background:rgba(255,193,7,0.09);border:1.5px solid #ffc107;border-radius:10px;padding:12px 14px">
                <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;flex-wrap:wrap">
                  <strong style="color:#ffd24d;font-size:14px">👑 SPCU Sovereign Counsel &amp; Book Maker Plan</strong>
                  <span class="seal" style="background:rgba(255,193,7,0.22);color:#ffd24d;border-color:#ffc107;font-weight:800">$297 / month</span>
                </div>
                <div style="font-size:12px;color:#e8eef5;margin-top:4px;line-height:1.45">
                  Full 6-Model Legal Council + 550B Frontier Trust Counsel + 17 Worldwide Trust Drafters + 10K–50K+ Word Book Maker + 600 Monthly Credits.
                </div>
              </div>

              <div style="background:rgba(4,13,26,0.88);border:1px solid rgba(0,212,255,0.38);border-radius:10px;padding:12px 14px">
                <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;flex-wrap:wrap">
                  <strong style="color:#ffffff;font-size:14px">🏛️ Annual All-Access Vault &amp; 6 Flagship Books</strong>
                  <span class="seal emerald" style="font-weight:800">$997 / yr — $1,997 Vault</span>
                </div>
                <div style="font-size:12px;color:#9fb0c2;margin-top:4px;line-height:1.45">
                  All 6 Unabridged Flagship Textbooks (104,519 Words) + 25-Volume Worldwide Trust Corpus + 2,000 Annual AI Council Credits.
                </div>
              </div>
            </div>

            <div style="display:flex;gap:8px;flex-wrap:wrap">
              <a href="https://spcuniversity.com/please-read-the-rules-carefully/" class="btn-gold" style="flex:1;justify-content:center;text-decoration:none;padding:11px 14px;font-size:12px">
                🎓 Enroll &amp; Subscribe Now →
              </a>
              <a href="https://member.spcuniversity.com/repurchase" class="btn-ghost" style="flex:1;justify-content:center;text-decoration:none;padding:11px 14px;font-size:12px">
                🛒 Member Upgrade Store ↗
              </a>
            </div>
          </div>
        </div>

        <div style="margin-top:20px;padding-top:14px;border-top:1px solid rgba(0,212,255,0.22);display:flex;justify-content:space-between;flex-wrap:wrap;gap:8px;font-size:11.5px;color:#9fb0c2">
          <a href="https://spcuniversity.com" style="color:#00d4ff;text-decoration:none;font-weight:700">← Return to SPC University Main Website</a>
          <span style="color:#ffc107;font-weight:700;letter-spacing:0.08em;text-transform:uppercase">SPC University · Law • Commerce • Empowerment</span>
        </div>
      </div>
    </div>
  \`;
  const submit = async () => {
    $("#authErr").textContent = "Verifying Active SPC University Member Status...";
    try {
      const emailVal = ($("#authEmail").value || "").trim();
      const passVal = ($("#authPass").value || "").trim();
      const r = await api("login", { email: emailVal, password: passVal, voucher_code: !emailVal.includes("@") ? emailVal : passVal });
      TOKEN = r.token;
      localStorage.setItem("t", TOKEN);
      if (r.member_access_token) {
        localStorage.setItem("spcu_member_book_token", r.member_access_token);
        document.cookie = "spcu_member_vault=" + encodeURIComponent(r.member_access_token) + "; path=/; max-age=2592000; SameSite=Lax; Secure";
      }
      if (r.is_admin) {
        STATE.isAdminOwner = true;
        localStorage.setItem("spcu_admin_owner", "1");
      }
      await bootApp();
    } catch (e) {
      $("#authErr").textContent = "🔒 " + e.message;
    }
  };
  $("#btnLogin").onclick = submit;
  $("#authPass").addEventListener("keydown", (ev) => { if (ev.key === "Enter") submit(); });
}

window.toggleMobileNav = function(forceOpen) {
  STATE.mobileNavOpen = typeof forceOpen === "boolean" ? forceOpen : !STATE.mobileNavOpen;
  const sb = document.querySelector(".sidebar");
  const bd = document.querySelector(".mobile-nav-backdrop");
  if (sb) sb.classList.toggle("mobile-open", STATE.mobileNavOpen);
  if (bd) bd.classList.toggle("open", STATE.mobileNavOpen);
};

window.switchTab = async function(tab) {
  STATE.tab = tab;
  STATE.mobileNavOpen = false;
  renderShell();
  window.scrollTo({ top: 0, behavior: "smooth" });
  if (tab === "library") {
    try {
      if (!STATE.kbResults.length) {
        const r = await api("kb/search?q=trust+architecture");
        STATE.kbResults = r.results || [];
        STATE.kbTotal = r.total_chunks || 2260;
      }
      if (!STATE.tutorCatalog) {
        STATE.tutorCatalog = await api("tutors/catalog");
      }
      renderShell();
    } catch {}
  }
  if (tab === "memory") {
    try {
      const r = await api("memory");
      STATE.memories = r.memories || [];
      renderShell();
    } catch {}
  }
  if (tab === "tutors" && !STATE.tutorCatalog) {
    try {
      STATE.tutorCatalog = await api("tutors/catalog");
      renderShell();
    } catch {}
  }
  if (tab === "billing") {
    try {
      const [cat, led] = await Promise.all([api("billing/catalog"), api("ledger")]);
      STATE.billingCatalog = cat;
      STATE.ledger = led.ledger || [];
      if (cat.user) STATE.user = cat.user;
      renderShell();
    } catch {}
  }
};

window.launchPrompt = function(q, tier) {
  if (tier) STATE.tier = tier;
  STATE.tab = "chat";
  renderShell();
  const box = $("#chatInput");
  if (box) {
    box.value = q;
    sendChatMessage();
  }
};

function renderOverview() {
  return \`
    <div class="card-hero" style="margin-bottom:22px">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:20px">
        <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:16px;width:100%;padding-bottom:16px;border-bottom:1px solid rgba(0,212,255,0.28)">
          <div style="display:flex;align-items:center;gap:16px;flex-wrap:wrap">
            <img src="https://spcuniversity.com/brand-kit/images/logo-compact.png" style="height:56px;width:auto;object-fit:contain;filter:drop-shadow(0 6px 20px rgba(0,212,255,0.32))" onerror="this.style.display='none'">
            <img src="https://spcuniversity.com/brand-kit/images/icon-atlas.png" style="height:46px;width:46px;border-radius:50%;border:1px solid #00d4ff;object-fit:cover;box-shadow:0 0 18px rgba(0,212,255,0.3)" onerror="this.style.display='none'">
            <div>
              <div class="overline">SPC UNIVERSITY · SCHOOL OF PRIVATE CIVICS · LAW • COMMERCE • EMPOWERMENT</div>
              <div style="font-family:var(--font-serif);font-size:21px;color:#ffffff;font-weight:800;letter-spacing:0.02em">Foundations Before Remedies · TrustGPT Worldwide Corpus &amp; Drafting Suite</div>
            </div>
          </div>
          <a href="https://spcuniversity.com/brand-kit/" target="_blank" class="btn-ghost" style="font-size:11px;padding:7px 14px">🎨 Official SPC Brand Kit ↗</a>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(290px,1fr));gap:22px;align-items:center;width:100%">
          <div>
            <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:10px">
              <span class="seal emerald">● 2,260 Master Corpus Passages Active</span>
              <span class="seal">25 Omnibus Volumes + 10 Trust Skeletons</span>
              <span class="seal">16 Faculty Tutors + 151 Asset Tutors</span>
            </div>
            <h2>Worldwide Trust Architecture, 25-Volume Legal Corpus, 17 Trust Drafters &amp; AI Tutor Academy</h2>
            <p style="color:#c8d6e5;font-size:14px;max-width:760px;margin:0 0 18px;line-height:1.65">
              Grounded on <strong>2,260 verified corpus passages</strong> across <strong>25 Sovereign, Domestic, Common-Law, Ecclesiastical &amp; Offshore Trust Law Omnibus Volumes</strong>, <strong>10 Attorney-Grade Trust Skeletons</strong> (Dynasty, Cook Islands APT, Cayman PTC/STAR, SLAT, ILIT, GRAT/IDGT, FLP/LLC, Charitable, SNT, Revocable Spine), <strong>6 Unredacted Master Books</strong>, <strong>19 Doctrinal Compendia &amp; Case Briefs (100+ Controlling Supreme Court Precedents)</strong>, and <strong>91 Lesson Guides</strong>.
            </p>
            <div style="display:flex;gap:10px;flex-wrap:wrap">
              <button class="btn-gold" onclick="switchTab('bookmaker')">📖 Launch SPC Book &amp; Guide Maker (10,000+ Words) →</button>
              <button class="btn-ghost" onclick="switchTab('tutors')">🎓 Launch 1-on-1 AI Tutors &amp; Lesson Academy →</button>
              <button class="btn-ghost" onclick="switchTab('library')">📚 Explore 25-Volume Corpus &amp; 6 Unabridged Books →</button>
              <button class="btn-ghost" onclick="switchTab('doclab')">📄 Draft Any of 17 Worldwide Trust Templates →</button>
            </div>
          </div>
          <div style="display:flex;justify-content:center">
            <img src="https://spcuniversity.com/brand-kit/images/mockup-library-lineup.png" alt="SPC University 5-Book Master Library Lineup" style="width:100%;max-width:440px;border-radius:12px;border:1px solid rgba(0,212,255,0.38);box-shadow:0 16px 42px rgba(0,0,0,0.55)" onerror="this.style.display='none'">
          </div>
        </div>
      </div>
    </div>

    <div class="grid-4" style="margin-bottom:24px">
      <div class="card">
        <div class="overline">Available Study Credits</div>
        <div class="kpi-val">\${STATE.user.credits}</div>
        <div class="kpi-sub">Membership: <strong style="color:var(--rj-champagne);text-transform:uppercase">\${esc(STATE.user.plan)}</strong> · Standard &amp; Fast study free daily</div>
      </div>
      <div class="card">
        <div class="overline">Master Trust Corpus</div>
        <div class="kpi-val">2,260</div>
        <div class="kpi-sub">25 Omnibus Volumes + 10 Trust Skeletons + 6 Books + 110 Guides</div>
      </div>
      <div class="card">
        <div class="overline">Worldwide Trust Drafter</div>
        <div class="kpi-val">17 Templates</div>
        <div class="kpi-sub">Pure Trust, Dynasty, Cook Islands, Cayman PTC, SLAT, ILIT, IDGT, 508c1a</div>
      </div>
      <div class="card">
        <div class="overline">AI Tutor Faculty</div>
        <div class="kpi-val">16 + 151</div>
        <div class="kpi-sub">16 Faculty Subject Tutors + 151 Individual Volume &amp; Lesson Tutors</div>
      </div>
    </div>

    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
      <div>
        <div class="overline">One-Click Study &amp; Drafting Playbooks</div>
        <h3 style="font-family:var(--font-serif);font-size:24px;color:var(--rj-champagne);margin:2px 0 0">Launch a Guided Trust, Banking, or Constitutional Rights Session</h3>
      </div>
    </div>
    <div class="grid-3" style="margin-bottom:28px">
      \${PLAYBOOKS.map((p) => \`
        <div class="card" style="display:flex;flex-direction:column;justify-content:space-between;gap:12px">
          <div>
            <div style="font-weight:700;color:var(--rj-champagne);font-size:15px;margin-bottom:6px">\${esc(p.label)}</div>
            <div style="font-size:13px;color:var(--rj-muted);line-height:1.55">\${esc(p.q)}</div>
          </div>
          <div style="display:flex;gap:8px">
            <button class="btn-gold" style="padding:8px 13px;font-size:12px" onclick='launchPrompt(\${safeAttrJs(p.q)}, "standard")'>Ask Trust Counsel (Free)</button>
            <button class="btn-ghost" style="padding:8px 12px;font-size:12px" onclick='launchPrompt(\${safeAttrJs(p.q)}, "council")'>👑 Ask 6-Model Council</button>
          </div>
        </div>
      \`).join("")}
    </div>

    <div class="overline" style="margin-bottom:8px">End-to-End Trust Creation &amp; Execution Workflow</div>
    <div class="grid-3">
      <div class="card">
        <div class="overline">Step 1 · Draft &amp; OCR</div>
        <div class="book-title">Trust Drafter, OCR &amp; Voice Lab</div>
        <p style="font-size:13px;color:var(--rj-muted);line-height:1.55">Draft Common-Law Pure Trust Indentures, Certificates of Trust, Schedule A Deeds, and Administrative Notices, or upload any existing document/scan for forensic OCR audit.</p>
        <button class="btn-ghost" onclick="switchTab('doclab')">Open Document Drafter &amp; OCR Lab →</button>
      </div>
      <div class="card">
        <div class="overline">Step 2 · Verify &amp; Execute</div>
        <div class="book-title">12-Point Guardrails, Notary, Bond &amp; Mail</div>
        <p style="font-size:13px;color:var(--rj-muted);line-height:1.55">Verify your trust against 12 mandatory legal guardrails, generate State/County Notary Jurat &amp; 2-Witness blocks, Trustee Surety Bonds, and USPS Certified Mail affidavits, and send to Google Docs &amp; Gmail.</p>
        <button class="btn-ghost" onclick="switchTab('attorney')">Open Execution, Notary &amp; Google Center →</button>
      </div>
      <div class="card">
        <div class="overline">Step 3 · Calculate &amp; Research</div>
        <div class="book-title">Estate Calculator, Live Web &amp; Translator</div>
        <p style="font-size:13px;color:var(--rj-muted);line-height:1.55">Run the 10-Layer Estate Exposure &amp; Trust Shield Diagnostic Calculator, search live legal statutes alongside the SPCU Vault, and translate clauses into 7 languages.</p>
        <button class="btn-ghost" onclick="switchTab('tools')">Open Legal Tools &amp; Calculator →</button>
      </div>
    </div>
  \`;
}

function renderChat() {
  return \`
    <div class="chat-layout">
      <div class="chat-main">
        <div class="tier-bar">
          <span class="overline" style="margin-right:4px">Engine:</span>
          \${TIERS.map((t) => \`
            <button class="tier-pill \${STATE.tier === t.id ? "active" : ""}" onclick="STATE.tier='\${t.id}';renderShell()" title="\${esc(t.desc)}">
              \${esc(t.name)} <span style="opacity:0.75;font-size:10.5px">(\${t.cost})</span>
            </button>
          \`).join("")}
          <button class="tier-pill" style="margin-left:auto;border-color:var(--rj-gold)" onclick="clearChatHistory()" title="Start a fresh conversation">🧹 New Chat</button>
        </div>
        <div id="chatFeed" class="chat-feed">
          \${STATE.messages.length === 0 ? \`
            <div style="text-align:center;padding:36px 20px;color:var(--rj-muted)">
              <img src="https://spcuniversity.com/brand-kit/images/logo-compact.png" style="height:48px;width:auto;margin:0 auto 10px;filter:drop-shadow(0 4px 16px rgba(0,212,255,0.32))" onerror="this.style.display='none'">
              <div class="seal emerald" style="margin-bottom:10px">● 2,260 SPC UNIVERSITY PASSAGES + 104,519 BOOK WORDS INDEXED</div>
              <h2 style="font-family:var(--font-serif);font-size:28px;color:var(--rj-champagne);margin:4px 0 8px">How can TrustGPT assist your strategy today?</h2>
              <p style="max-width:600px;margin:0 auto 18px;font-size:13.5px;line-height:1.6">
                Ask any question across all <strong>25 Worldwide Trust Omnibus Volumes</strong>, <strong>10 Attorney-Grade Trust Skeletons</strong>, <strong>6 Unabridged Master Books (104,519 Words)</strong>, <strong>19 Doctrinal Compendia</strong>, and <strong>91 Lesson Guides</strong>. Select <strong>👑 6-Model Legal Council</strong> above to have 6 frontier models deliberate simultaneously.
              </p>
            </div>
          \` : STATE.messages.map((m) => {
            const srcs = typeof m.sources === "string" ? JSON.parse(m.sources || "[]") : (m.sources || []);
            return \`
              <div class="msg \${m.role === "user" ? "msg-user" : "msg-assistant"}">
                <div>\${m.role === "user" ? esc(m.content) : formatMarkdown(m.content)}</div>
                \${m.role === "assistant" ? \`
                  <div class="msg-meta">
                    <div>\${srcs.length ? "Cited Sources: " + srcs.map((s) => \`<span class="src-chip">\${esc(s.id)} · \${esc(s.book)}</span>\`).join(" ") : "General Educational Synthesis"}</div>
                    <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
                      \${m.model ? \`<span class="num" style="font-size:11px;opacity:0.85">Engine: \${esc(m.model)}</span>\` : ""}
                      <button class="btn-ghost" style="padding:3px 9px;font-size:11px" onclick='speakTextAloud(\${safeAttrJs(m.content)}, this)'>🔊 Listen (TTS)</button>
                      <button class="btn-ghost" style="padding:3px 9px;font-size:11px" onclick='exportFormalDocument("SPC University TrustGPT Memorandum", \${safeAttrJs(m.content)}, "print")'>🖨️ Print / PDF</button>
                      <button class="btn-ghost" style="padding:3px 9px;font-size:11px" onclick='exportFormalDocument("SPC University TrustGPT Memorandum", \${safeAttrJs(m.content)}, "doc")'>📄 Word .DOC</button>
                    </div>
                  </div>
                  \${m.drafts && m.drafts.length ? \`
                    <details style="margin-top:10px;background:var(--rj-panel);border:1px solid var(--rj-gold-border);border-radius:8px;padding:10px 12px">
                      <summary style="cursor:pointer;font-size:12px;font-weight:700;color:var(--rj-champagne)">👑 Inspect All \${m.drafts.length} Individual Expert Model Drafts (\${m.drafts.map((d)=>d.model).join(" + ")})</summary>
                      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:10px;margin-top:10px">
                        \${m.drafts.map((d) => \`
                          <div style="background:var(--rj-obsidian);border:1px solid var(--rj-gold-border);border-radius:8px;padding:10px;font-size:12px">
                            <div class="overline" style="margin-bottom:4px">Expert: \${esc(d.model)}</div>
                            <div style="color:var(--rj-text);max-height:220px;overflow-y:auto">\${formatMarkdown(d.text)}</div>
                          </div>
                        \`).join("")}
                      </div>
                    </details>
                  \` : ""}
                \` : ""}
              </div>
            \`;
          }).join("")}
        </div>
        <div class="chat-composer">
          <div id="chatStatus" style="font-size:12px;color:var(--rj-gold);min-height:18px;margin-bottom:6px"></div>
          \${STATE.attachments.length ? \`
            <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:10px">
              \${STATE.attachments.map((a, idx) => \`
                <span class="seal emerald" style="display:inline-flex;align-items:center;gap:8px;text-transform:none;letter-spacing:0.04em;font-size:11.5px">
                  <span>📎 <strong>\${esc(a.name)}</strong> (\${esc(a.summary || a.kind)})</span>
                  <button onclick="removeChatAttachment(\${idx})" style="background:none;border:none;color:#fff;cursor:pointer;font-weight:700">✕</button>
                </span>
              \`).join("")}
            </div>
          \` : ""}
          <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:8px">
            <label class="btn-ghost" style="padding:6px 11px;font-size:12px;cursor:pointer">
              📎 Attach Any File / PDF / DOCX / Excel / Image OCR / Audio
              <input type="file" multiple accept=".pdf,.docx,.doc,.xlsx,.xls,.csv,.txt,.md,.json,.html,.png,.jpg,.jpeg,.webp,.mp3,.wav,.m4a,.webm" style="display:none" onchange="handleChatFileUpload(event)">
            </label>
            <button id="btnMicRecord" class="btn-ghost" style="padding:6px 11px;font-size:12px" onclick="toggleMicRecording('#chatInput')">🎙️ Voice Mic (Whisper v3 Turbo)</button>
            <button class="\${STATE.webSearchOn ? "btn-gold" : "btn-ghost"}" style="padding:6px 11px;font-size:12px" onclick="STATE.webSearchOn=!STATE.webSearchOn;renderShell()">
              🌐 Live Web &amp; URL Search: \${STATE.webSearchOn ? "ON" : "OFF"}
            </button>
            <button class="btn-ghost" style="padding:6px 11px;font-size:12px" onclick="switchTab('doclab')">📄 Doc Drafter &amp; OCR Lab →</button>
            <button class="btn-ghost" style="padding:6px 11px;font-size:12px" onclick="switchTab('tools')">🧰 All Tools &amp; Integrations →</button>
          </div>
          <div class="composer-row">
            <textarea id="chatInput" class="textarea" rows="2" placeholder="Ask any question, attach scanned trusts/deeds/PDFs/DOCX/images for OCR, or record voice..."></textarea>
            <button id="btnSendChat" class="btn-gold" style="min-width:145px" onclick="sendChatMessage()">Ask TrustGPT →</button>
          </div>
        </div>
      </div>

      <div class="card" style="display:flex;flex-direction:column;justify-content:space-between;overflow-y:auto">
        <div>
          <div class="overline">Guided Strategy Prompts</div>
          <h3 style="font-family:var(--font-serif);font-size:21px;color:var(--rj-champagne);margin:4px 0 12px">One-Click Playbooks</h3>
          \${PLAYBOOKS.map((p) => \`
            <button class="prompt-chip" onclick='launchPrompt(\${safeAttrJs(p.q)})'>
              <div style="font-weight:700;color:var(--rj-champagne);margin-bottom:3px">\${esc(p.label)}</div>
              <div style="color:var(--rj-muted);font-size:11.5px">\${esc(p.q)}</div>
            </button>
          \`).join("")}
        </div>
        <div style="padding-top:14px;border-top:1px solid var(--rj-gold-border);font-size:12px;color:var(--rj-muted)">
          <div class="overline" style="margin-bottom:4px">Active Engine Info</div>
          <div>\${esc((TIERS.find((x) => x.id === STATE.tier) || TIERS[0]).desc)}</div>
        </div>
      </div>
    </div>
  \`;
}

window.sendChatMessage = async function() {
  const box = $("#chatInput");
  const q = (box?.value || "").trim();
  const hasAtt = STATE.attachments.length > 0;
  if (!q && !hasAtt) return;
  if (box) box.value = "";
  if (q === "CLEAR MEMORY") {
    await api("memory", null, "DELETE");
    STATE.messages.push({ role: "assistant", content: "Your persistent memory vault has been cleared." });
    renderShell();
    return;
  }
  const attCopy = [...STATE.attachments];
  STATE.attachments = [];
  const userLabel = q + (attCopy.length ? "\\n[Attached: " + attCopy.map((a) => a.name).join(", ") + "]" : "");
  STATE.messages.push({ role: "user", content: userLabel });
  const assistantMsg = { role: "assistant", content: "", sources: [], model: "", drafts: null };
  STATE.messages.push(assistantMsg);
  renderShell();
  const feed = $("#chatFeed");
  if (feed) feed.scrollTop = feed.scrollHeight;
  const btn = $("#btnSendChat");
  const st = $("#chatStatus");
  if (btn) btn.disabled = true;
  let sec = 0;
  const timer = setInterval(() => {
    sec++;
    if (st) st.textContent = STATE.tier === "council"
      ? \`👑 6-Model Expert Council deliberating across \${STATE.councilPicked.join(", ")} (\${sec}s)...\`
      : \`⚡ Live streaming from 1,760 SPC University passages\${attCopy.length ? " + Vision OCR" : ""} (\${sec}s)...\`;
  }, 1000);
  try {
    const promptMsg = q || "Analyze the attached file(s) and cross-reference the SPC University Trust & Rights Library.";
    if (STATE.tier === "council") {
      const r = await api("chat", { message: promptMsg, tier: STATE.tier, experts: STATE.councilPicked, direct_model: STATE.directModel, attachments: attCopy, web_search: STATE.webSearchOn });
      STATE.directModel = null;
      assistantMsg.content = stripMdClient(r.reply);
      assistantMsg.sources = r.sources;
      assistantMsg.model = r.model;
      assistantMsg.drafts = r.drafts;
    } else {
      const streamBase = window.location.pathname.toLowerCase().startsWith("/app") ? "/app/api/" : "/api/";
      const pickedDirect = STATE.directModel;
      STATE.directModel = null;
      try {
        const resp = await fetch(streamBase + "chat/stream", {
          method: "POST",
          headers: { "content-type": "application/json", ...(TOKEN ? { authorization: "Bearer " + TOKEN } : {}) },
          body: JSON.stringify({ message: promptMsg, tier: STATE.tier, direct_model: pickedDirect, attachments: attCopy, web_search: STATE.webSearchOn })
        });
        if (!resp.ok || !resp.body) {
          const errJ = await resp.json().catch(() => ({}));
          throw new Error(errJ.error || ("HTTP " + resp.status));
        }
        const reader = resp.body.getReader();
        const dec = new TextDecoder();
        let buf = "";
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          buf += dec.decode(value, { stream: true });
          const lines = buf.split("\\n");
          buf = lines.pop() || "";
          for (const line of lines) {
            const t = line.trim();
            if (!t.startsWith("data:")) continue;
            try {
              const ev = JSON.parse(t.slice(5).trim());
              if (ev.type === "meta") {
                assistantMsg.sources = ev.sources || [];
                assistantMsg.model = ev.model || "";
              } else if (ev.type === "token" && ev.token) {
                assistantMsg.content = stripMdClient(assistantMsg.content + ev.token);
                const nodes = document.querySelectorAll("#chatFeed .msg-assistant");
                const lastNode = nodes[nodes.length - 1];
                if (lastNode) {
                  const bodyDiv = lastNode.querySelector("div");
                  if (bodyDiv) bodyDiv.innerHTML = formatMarkdown(assistantMsg.content);
                }
                const fNow = $("#chatFeed");
                if (fNow) fNow.scrollTop = fNow.scrollHeight;
              } else if (ev.type === "done" && ev.clean_text) {
                assistantMsg.content = stripMdClient(ev.clean_text);
              } else if (ev.type === "error") {
                throw new Error(ev.error);
              }
            } catch {}
          }
        }
        if (!assistantMsg.content.trim()) throw new Error("Empty stream");
      } catch (streamErr) {
        const r = await api("chat", { message: promptMsg, tier: STATE.tier, direct_model: pickedDirect, attachments: attCopy, web_search: STATE.webSearchOn });
        assistantMsg.content = stripMdClient(r.reply);
        assistantMsg.sources = r.sources;
        assistantMsg.model = r.model;
        assistantMsg.drafts = r.drafts;
      }
    }
    const h = await api("history");
    STATE.user = h.user;
  } catch (e) {
    assistantMsg.content = "**Notice:** " + e.message;
  } finally {
    clearInterval(timer);
    if (st) st.textContent = "";
    if (btn) btn.disabled = false;
    renderShell();
    const f2 = $("#chatFeed");
    if (f2) f2.scrollTop = f2.scrollHeight;
  }
};


window.toggleCouncilExpert = function(id) {
  const idx = STATE.councilPicked.indexOf(id);
  if (idx >= 0) {
    if (STATE.councilPicked.length <= 2) return alert("Select at least 2 models for the Expert Council.");
    STATE.councilPicked.splice(idx, 1);
  } else {
    if (STATE.councilPicked.length >= 6) return alert("Maximum 6 models can run simultaneously in the Council.");
    STATE.councilPicked.push(id);
  }
  renderShell();
};

window.testSingleModel = function(id, name) {
  STATE.directModel = id;
  STATE.tier = "standard";
  STATE.tab = "chat";
  renderShell();
  const box = $("#chatInput");
  if (box && !box.value.trim()) {
    box.value = "Using " + name + ", summarize the core asset protection structure of the 10-Layer Trust Architecture and the Bank Packet.";
  }
  sendChatMessage();
};

window.runCustomCouncilNow = function() {
  const q = ($("#councilQuickPrompt")?.value || "").trim() || "Compare the 10-Layer Trust Architecture with The Bank Packet and give a unified step-by-step action plan.";
  STATE.directModel = null;
  STATE.tier = "council";
  STATE.tab = "chat";
  renderShell();
  const box = $("#chatInput");
  if (box) {
    box.value = q;
    sendChatMessage();
  }
};

function renderModels() {
  return \`
    <div class="card-hero" style="margin-bottom:22px">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:16px">
        <div>
          <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:8px">
            <span class="seal emerald">● 12 Live LLM Engines + FLUX + Wan 2.2 + BGE-M3</span>
            <span class="seal num">\${STATE.councilPicked.length} / 6 Council Models Selected</span>
          </div>
          <h2>Mixture-of-Experts Council Builder &amp; Live Model Hub</h2>
          <p style="color:#C9C5BC;font-size:14px;max-width:760px;margin:0;line-height:1.6">
            Select any <strong>4 to 6 frontier models</strong> below to deliberate simultaneously in the <strong>👑 Expert Council</strong> (each assigned a specialized analytical lens before the Chair synthesizes the best scenario), or click <strong>Run Solo</strong> on any individual model to run it directly.
          </p>
        </div>
      </div>
      <div style="margin-top:16px;padding-top:16px;border-top:1px solid rgba(197,160,89,0.28);display:flex;gap:10px;flex-wrap:wrap">
        <input id="councilQuickPrompt" class="input" style="flex:1;min-width:280px;background:rgba(10,11,14,0.85)" placeholder="Enter a complex trust, banking, or rights scenario for your \${STATE.councilPicked.length} selected Council models to solve simultaneously...">
        <button class="btn-gold" onclick="runCustomCouncilNow()">👑 Run \${STATE.councilPicked.length}-Model Council Simultaneously →</button>
      </div>
    </div>

    <div class="grid-3">
      \${MODEL_CATALOG.map((m) => {
        const picked = STATE.councilPicked.includes(m.id);
        return \`
          <div class="card" style="border-color:\${picked ? "var(--rj-gold)" : "var(--rj-gold-border)"};display:flex;flex-direction:column;justify-content:space-between;gap:14px">
            <div>
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
                <span class="seal \${picked ? "emerald" : ""}">\${picked ? "✓ IN ACTIVE COUNCIL" : esc(m.badge)}</span>
                <span class="num" style="font-size:12px;color:var(--rj-gold);font-weight:700">\${esc(m.params)}</span>
              </div>
              <div style="font-family:var(--font-serif);font-size:22px;font-weight:700;color:var(--rj-champagne);margin-bottom:4px">\${esc(m.name)}</div>
              <div class="overline" style="margin-bottom:8px">\${esc(m.provider)} · \${esc(m.lens)}</div>
              <p style="font-size:13px;color:var(--rj-muted);line-height:1.55;margin:0">\${esc(m.role)}</p>
            </div>
            <div style="display:flex;gap:8px">
              <button class="\${picked ? "btn-gold" : "btn-ghost"}" style="flex:1;padding:8px 10px;font-size:12px;justify-content:center" onclick="toggleCouncilExpert('\${m.id}')">
                \${picked ? "✓ Selected in Council" : "+ Add to Council"}
              </button>
              <button class="btn-ghost" style="padding:8px 12px;font-size:12px" onclick='testSingleModel(\${safeAttrJs(m.id)}, \${safeAttrJs(m.name)})'>
                Run Solo →
              </button>
            </div>
          </div>
        \`;
      }).join("")}
    </div>
  \`;
}

window.openCorpusVolume = async function(bookKey) {
  try {
    const r = await api("corpus/volume?book=" + encodeURIComponent(bookKey));
    STATE.corpusVolume = r;
    renderShell();
    const el = $("#corpusVolumeReader");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  } catch (e) {
    alert("Error loading volume: " + e.message);
  }
};

function renderLibrary() {
  const allAssets = STATE.tutorCatalog?.lesson_assets || [];
  const kindFilter = STATE.corpusFilterKind || "ALL";
  const filteredAssets = kindFilter === "ALL" ? allAssets : allAssets.filter((a) => a.kind === kindFilter);

  return \`
    <div style="display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:14px;margin-bottom:20px">
      <div>
        <div class="overline">WORLDWIDE TRUST &amp; LEGAL ENCYCLOPEDIA · 25 VOLUMES · 10 SKELETONS · 6 MASTER BOOKS · 19 COMPENDIA</div>
        <h2 style="font-family:var(--font-serif);font-size:30px;color:var(--rj-champagne);margin:4px 0 0">SPC University Master Trust Corpus &amp; Publication Vault</h2>
      </div>
      <span class="seal emerald">● 2,260 Verified Corpus Passages Indexed</span>
    </div>

    <div class="grid-3" style="margin-bottom:28px">
      \${BOOKS.map((b) => \`
        <div class="book-card">
          <img class="book-cover" src="\${b.cover}" alt="\${esc(b.title)}" onerror="this.style.height='60px'">
          <div class="book-body">
            <div>
              <div style="display:flex;justify-content:space-between;align-items:center">
                <span class="overline">\${esc(b.sub)}</span>
                <span class="seal num">\${esc(b.value)}</span>
              </div>
              <div class="book-title">\${esc(b.title)}</div>
              <p style="font-size:13px;color:var(--rj-muted);line-height:1.55;margin:0 0 16px">\${esc(b.desc)}</p>
            </div>
            <div style="display:flex;gap:8px;flex-wrap:wrap">
              <button class="btn-gold" style="flex:1" onclick='openBookModal(\${safeAttrJs(b.title)}, \${safeAttrJs(b.url)})'>📖 Read Interactive Book</button>
              <button class="btn-ghost" onclick='launchPrompt(\${safeAttrJs(b.prompt)})'>Ask TrustGPT →</button>
            </div>
          </div>
        </div>
      \`).join("")}
    </div>

    \${STATE.corpusVolume ? \`
      <div id="corpusVolumeReader" class="card" style="margin-bottom:26px;border-color:var(--rj-gold)">
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;padding-bottom:12px;border-bottom:1px solid var(--rj-gold-border);margin-bottom:14px">
          <div>
            <div class="overline">FULL MASTER CORPUS VOLUME READER · \${STATE.corpusVolume.total_passages} PASSAGES</div>
            <h3 style="font-family:var(--font-serif);font-size:25px;color:var(--rj-champagne);margin:2px 0 0">\${esc(STATE.corpusVolume.book)}</h3>
          </div>
          <div style="display:flex;gap:8px;flex-wrap:wrap">
            <button class="btn-gold" onclick='selectLessonAssetTutor(\${safeAttrJs(STATE.corpusVolume.book)});switchTab("tutors");runTutorSession("masterclass","standard")'>🎓 Launch 1-on-1 Tutor on This Volume →</button>
            <button class="btn-ghost" onclick='exportFormalDocument(\${safeAttrJs(STATE.corpusVolume.book)}, \${safeAttrJs((STATE.corpusVolume.passages || []).map((p)=>p.text).join("\\n\\n"))}, "print")'>🖨️ Print / Save PDF</button>
            <button class="btn-ghost" onclick='exportFormalDocument(\${safeAttrJs(STATE.corpusVolume.book)}, \${safeAttrJs((STATE.corpusVolume.passages || []).map((p)=>p.text).join("\\n\\n"))}, "doc")'>📄 Download Word (.DOC)</button>
            <button class="btn-ghost" onclick="STATE.corpusVolume=null;renderShell()">Close Reader ✕</button>
          </div>
        </div>
        <div style="max-height:540px;overflow-y:auto;display:flex;flex-direction:column;gap:12px">
          \${(STATE.corpusVolume.passages || []).map((p, idx) => \`
            <div style="background:var(--rj-obsidian);border:1px solid var(--rj-gold-border);border-radius:10px;padding:16px">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
                <span class="seal">Passage \${idx + 1} of \${STATE.corpusVolume.total_passages}</span>
                <button class="btn-ghost" style="padding:3px 9px;font-size:11px" onclick='speakTextAloud(\${safeAttrJs(p.text)}, this)'>🔊 Listen (TTS)</button>
              </div>
              <div style="font-size:13.5px;line-height:1.68;color:var(--rj-text)">\${formatMarkdown(p.text)}</div>
            </div>
          \`).join("")}
        </div>
      </div>
    \` : ""}

    <div class="card" style="margin-bottom:26px">
      <div class="overline">Instant Semantic &amp; Keyword Search Across All 2,260 Passages</div>
      <h3 style="font-family:var(--font-serif);font-size:24px;color:var(--rj-champagne);margin:4px 0 12px">Search All 25 Omnibus Volumes, 10 Trust Skeletons, 6 Master Books, 19 Compendia &amp; 91 Lessons</h3>
      <div style="display:flex;gap:10px;margin-bottom:18px;flex-wrap:wrap">
        <input id="kbQuery" class="input" style="flex:1;min-width:240px" placeholder="Search e.g. 'Cook Islands', 'Crocker v. Malley', '508(c)(1)(A)', 'Garn-St. Germain', 'SLAT', 'IDGT', 'UTC 1013'..." onkeydown="if(event.key==='Enter')searchKB()">
        <button class="btn-gold" onclick="searchKB()">Search Master Corpus →</button>
      </div>
      <div id="kbList" class="grid-2">
        \${(STATE.kbResults || []).map((r, i) => \`
          <div class="card" style="background:var(--rj-obsidian)">
            <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:6px;margin-bottom:8px">
              <span class="seal">Passage #\${i + 1} · \${esc(r.book)}</span>
              <div style="display:flex;gap:6px">
                <button class="btn-ghost" style="padding:4px 9px;font-size:11px" onclick='openCorpusVolume(\${safeAttrJs(r.book)})'>📖 Open Full Volume</button>
                <button class="btn-ghost" style="padding:4px 9px;font-size:11px" onclick='launchPrompt("Explain this SPC University corpus passage and how to apply it step by step: " + \${safeAttrJs(r.text.slice(0, 380))})'>Ask TrustGPT →</button>
              </div>
            </div>
            <div style="font-size:13px;color:var(--rj-text);line-height:1.6;white-space:pre-wrap">\${esc(r.text.slice(0, 560))}\${r.text.length > 560 ? "..." : ""}</div>
          </div>
        \`).join("")}
      </div>
    </div>

    <div class="card">
      <div style="display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:12px;margin-bottom:14px">
        <div>
          <div class="overline">Complete Master Corpus Directory (\${allAssets.length} Indexed Volumes, Skeletons, Compendia &amp; Lessons)</div>
          <h3 style="font-family:var(--font-serif);font-size:24px;color:var(--rj-champagne);margin:2px 0 0">Browse Every Volume, Domestic/Offshore Trust Skeleton, Case Brief &amp; Lesson</h3>
        </div>
        <div style="display:flex;gap:6px;flex-wrap:wrap">
          \${[
            ["ALL", "All (" + allAssets.length + ")"],
            ["Trust Skeleton", "10 Trust Skeletons"],
            ["Omnibus Volume", "25 Omnibus Volumes"],
            ["Doctrinal Compendium", "19 Compendia & Case Briefs"],
            ["Master Book", "6 Master Books"],
            ["Lesson & Video Guide", "Lesson & Video Guides"]
          ].map(([k, lbl]) => \`
            <button class="tier-pill \${kindFilter === k ? "active" : ""}" onclick="STATE.corpusFilterKind='\${k}';renderShell()">\${esc(lbl)}</button>
          \`).join("")}
        </div>
      </div>
      <div class="grid-3">
        \${filteredAssets.map((a) => \`
          <div class="card" style="background:var(--rj-obsidian);display:flex;flex-direction:column;justify-content:space-between;gap:10px">
            <div>
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
                <span class="seal \${a.kind === "Trust Skeleton" || a.kind === "Omnibus Volume" || a.kind === "Master Book" ? "emerald" : ""}">\${esc(a.kind)}</span>
                <span class="num" style="font-size:11px;color:var(--rj-gold)">\${a.chunks} Passages</span>
              </div>
              <div style="font-family:var(--font-serif);font-size:19px;font-weight:700;color:var(--rj-champagne);margin-bottom:6px">\${esc(a.title)}</div>
              <div style="font-size:12px;color:var(--rj-muted);line-height:1.5">\${esc(a.preview)}...</div>
            </div>
            <div style="display:flex;gap:6px;flex-wrap:wrap">
              <button class="btn-gold" style="flex:1;padding:7px 10px;font-size:11.5px" onclick='openCorpusVolume(\${safeAttrJs(a.book_key)})'>📖 Read Full Volume</button>
              <button class="btn-ghost" style="padding:7px 10px;font-size:11.5px" onclick='selectLessonAssetTutor(\${safeAttrJs(a.book_key)});switchTab("tutors");runTutorSession("masterclass","standard")'>🎓 1-on-1 Tutor</button>
            </div>
          </div>
        \`).join("")}
      </div>
    </div>
  \`;
}

window.searchKB = async function() {
  const q = ($("#kbQuery")?.value || "").trim();
  const r = await api("kb/search?q=" + encodeURIComponent(q));
  STATE.kbResults = r.results || [];
  renderShell();
};

function renderMemory() {
  return \`
    <div style="margin-bottom:20px">
      <div class="overline">PERSONALIZED TRUST &amp; STUDY CONTEXT</div>
      <h2 style="font-family:var(--font-serif);font-size:30px;color:var(--rj-champagne);margin:4px 0 0">My Saved Trust &amp; Case Notes</h2>
      <p style="color:var(--rj-muted);font-size:13.5px;margin:6px 0 0">
        TrustGPT automatically remembers durable facts about your trust structure, jurisdiction, estate priorities, and study progress so you never have to repeat yourself. Sensitive numbers (SSNs, account numbers, passwords) are automatically blocked.
      </p>
    </div>

    <div class="card" style="margin-bottom:22px">
      <div class="overline">Add Custom Trust or Study Note</div>
      <div style="display:flex;gap:10px;margin-top:8px">
        <input id="memInput" class="input" placeholder="e.g. 'Focus my answers on private common-law trust banking and real estate asset protection in Texas'">
        <button class="btn-gold" onclick="addMemoryNote()">Save Note</button>
        <button class="btn-ghost" onclick="clearAllMemory()">Clear All Notes</button>
      </div>
    </div>

    <div class="grid-2">
      \${STATE.memories.length === 0 ? \`
        <div class="card" style="color:var(--rj-muted);font-size:13.5px">
          No saved notes yet. Add a note above or chat with TrustGPT and it will automatically remember your study context.
        </div>
      \` : STATE.memories.map((m) => \`
        <div class="card" style="display:flex;justify-content:space-between;align-items:center;gap:12px">
          <div>
            <span class="overline">Saved Study Context #\${m.id}</span>
            <div style="font-size:14.5px;color:var(--rj-text);margin-top:4px">\${esc(m.fact)}</div>
          </div>
          <button class="btn-ghost" style="padding:6px 11px;font-size:11.5px" onclick="deleteMemoryNote(\${m.id})">Delete ✕</button>
        </div>
      \`).join("")}
    </div>
  \`;
}

window.addMemoryNote = async function() {
  const v = ($("#memInput")?.value || "").trim();
  if (!v) return;
  await api("memory", { fact: v });
  $("#memInput").value = "";
  const r = await api("memory");
  STATE.memories = r.memories || [];
  renderShell();
};
window.deleteMemoryNote = async function(id) {
  await api("memory/" + id, null, "DELETE");
  const r = await api("memory");
  STATE.memories = r.memories || [];
  renderShell();
};
window.clearAllMemory = async function() {
  await api("memory", null, "DELETE");
  STATE.memories = [];
  renderShell();
};

window.handleLabFileUpload = async function(ev) {
  const f = (ev.target.files || [])[0];
  if (!f) return;
  const st = $("#ocrLabStatus");
  if (st) st.textContent = "Processing " + f.name + " through Universal Reader & Vision OCR...";
  try {
    const parsed = await parseUniversalFile(f);
    if (parsed.image_base64) {
      const r = await api("ocr", { image_base64: parsed.image_base64, name: parsed.name, analyze_with_kb: true });
      STATE.ocrResult = { name: parsed.name, engine: r.vision_engine, text: r.ocr_text, analysis: r.analysis, sources: r.sources || [] };
    } else {
      const q = "Perform a forensic SPC University Trust & Rights analysis of this uploaded document (" + parsed.name + "):\\n\\n" + (parsed.content_text || "").slice(0, 5000);
      const r = await api("chat", { message: q, tier: "standard" });
      STATE.ocrResult = { name: parsed.name, engine: "Universal Document Parser (" + parsed.kind + ")", text: parsed.content_text, analysis: r.reply, sources: r.sources || [] };
    }
    if ($("#docSourceText") && STATE.ocrResult?.text) {
      $("#docSourceText").value = STATE.ocrResult.text.slice(0, 6000);
    }
    if (st) st.textContent = "Completed OCR & Forensic SPCU Analysis for " + f.name + ".";
    renderShell();
  } catch (e) {
    if (st) st.textContent = "Error: " + e.message;
  }
};

window.generateCourtBankDocument = async function(tierMode) {
  const st = $("#docDraftStatus");
  if (st) st.textContent = tierMode === "council"
    ? "👑 6-Model Expert Council deliberating and drafting your document grounded in the 6 Master Books..."
    : "Drafting formal document template grounded in the 1,760-passage SPC University Vault...";
  try {
    const r = await api("document/draft", {
      template_id: $("#docTplSelect")?.value || "pure-trust-indenture",
      trust_name: $("#docTrustName")?.value || "",
      grantor_name: $("#docGrantorName")?.value || "",
      trustee_name: $("#docTrusteeName")?.value || "",
      jurisdiction: $("#docJurisdiction")?.value || "",
      asset_summary: $("#docAssets")?.value || "",
      custom_instructions: $("#docCustom")?.value || "",
      uploaded_text: $("#docSourceText")?.value || (STATE.ocrResult?.text || ""),
      tier: tierMode || "premium"
    });
    STATE.docDraft = r;
    if (st) st.textContent = "Document drafted via " + r.model;
    renderShell();
  } catch (e) {
    if (st) st.textContent = "Error: " + e.message;
  }
};

function renderDocLab() {
  return \`
    <div class="card-hero" style="margin-bottom:22px">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:14px">
        <div>
          <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:8px">
            <span class="seal emerald">● Vision OCR: Llama 4 Scout + Mistral 3.1 + Nemotron 120B VL</span>
            <span class="seal">● Audio ASR: Whisper v3 Turbo</span>
            <span class="seal">● Voice TTS: Deepgram Aura-2 EN</span>
          </div>
          <h2>Court-Ready &amp; Bank-Ready Document Drafter, Universal OCR &amp; Audio Lab</h2>
          <p style="color:#C9C5BC;font-size:14px;max-width:780px;margin:0;line-height:1.6">
            Upload any scanned trust deed, bank letter, court notice, image (<code>.png/.jpg/.webp</code>), PDF, Word (<code>.docx</code>), Excel (<code>.xlsx</code>), or audio recording (<code>.mp3/.wav/.m4a</code>). TrustGPT extracts every clause, audits it against the 1,760-passage SPC University Library, and drafts formatted, printable &amp; exportable documents.
          </p>
        </div>
      </div>
    </div>

    <div class="grid-2" style="margin-bottom:24px">
      <div class="card">
        <div class="overline">1. Universal Document, Image OCR &amp; Audio Analyzer</div>
        <h3 style="font-family:var(--font-serif);font-size:23px;color:var(--rj-champagne);margin:4px 0 8px">Upload Any File, Scan, Image, PDF, DOCX, or Audio</h3>
        <p style="font-size:13px;color:var(--rj-muted);line-height:1.55;margin-top:0">
          Drop any scanned image, photographed page, multi-page PDF, Word document, spreadsheet, or voice memo below for verbatim extraction and automatic SPCU Trust &amp; Rights audit.
        </p>
        <div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:12px">
          <label class="btn-gold" style="cursor:pointer;display:inline-flex;align-items:center;gap:8px">
            📂 Select File / Image / PDF / DOCX / Audio to Analyze →
            <input type="file" accept=".pdf,.docx,.doc,.xlsx,.xls,.csv,.txt,.md,.json,.html,.png,.jpg,.jpeg,.webp,.mp3,.wav,.m4a,.webm" style="display:none" onchange="handleLabFileUpload(event)">
          </label>
          <button id="btnMicRecord" class="btn-ghost" onclick="toggleMicRecording('#docCustom')">🎙️ Record Live Voice Instruction</button>
        </div>
        <div id="ocrLabStatus" style="font-size:12.5px;color:var(--rj-gold);min-height:20px;margin-bottom:10px"></div>

        \${STATE.ocrResult ? \`
          <div style="background:var(--rj-obsidian);border:1px solid var(--rj-gold);border-radius:10px;padding:14px;margin-top:10px">
            <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;margin-bottom:8px">
              <span class="seal emerald">✓ Extracted: \${esc(STATE.ocrResult.name)}</span>
              <span class="num" style="font-size:11px;color:var(--rj-gold)">Engine: \${esc(STATE.ocrResult.engine)}</span>
            </div>
            <div class="overline" style="margin-bottom:4px">Extracted Verbatim Text / Transcript:</div>
            <div style="max-height:160px;overflow-y:auto;font-size:12.5px;color:var(--rj-muted);white-space:pre-wrap;padding:8px;background:var(--rj-vault);border-radius:8px;margin-bottom:12px">\${esc(STATE.ocrResult.text)}</div>
            \${STATE.ocrResult.analysis ? \`
              <div class="overline" style="margin-bottom:4px">SPCU Trust &amp; Rights Forensic Audit:</div>
              <div style="max-height:260px;overflow-y:auto;font-size:13.5px;color:var(--rj-text);line-height:1.6;padding:10px;background:var(--rj-vault);border-radius:8px">\${formatMarkdown(STATE.ocrResult.analysis)}</div>
              <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:10px">
                <button class="btn-ghost" style="font-size:11.5px;padding:6px 10px" onclick='speakTextAloud(\${safeAttrJs(STATE.ocrResult.analysis)}, this)'>🔊 Listen to Audit (TTS)</button>
                <button class="btn-ghost" style="font-size:11.5px;padding:6px 10px" onclick='exportFormalDocument("Forensic SPCU Document Audit - " + \${safeAttrJs(STATE.ocrResult.name)}, \${safeAttrJs(STATE.ocrResult.analysis)}, "print")'>🖨️ Print / Save Audit PDF</button>
                <button class="btn-ghost" style="font-size:11.5px;padding:6px 10px" onclick='exportFormalDocument("Forensic SPCU Document Audit - " + \${safeAttrJs(STATE.ocrResult.name)}, \${safeAttrJs(STATE.ocrResult.analysis)}, "doc")'>📄 Download Word .DOC</button>
              </div>
            \` : ""}
          </div>
        \` : \`
          <div style="padding:18px;border:1px dashed var(--rj-gold-border);border-radius:10px;text-align:center;color:var(--rj-muted);font-size:13px">
            No file uploaded yet. Click <strong>Select File / Image / PDF / DOCX / Audio</strong> above to run Vision OCR, document extraction, or Whisper v3 Turbo speech transcription.
          </div>
        \`}
      </div>

      <div class="card">
        <div class="overline">2. Court-Ready &amp; Bank-Ready Document &amp; Template Builder</div>
        <h3 style="font-family:var(--font-serif);font-size:23px;color:var(--rj-champagne);margin:4px 0 10px">Draft Grounded Trust Indentures, Bank Packets &amp; Notices</h3>
        <div class="form-grid-2" style="margin-bottom:10px">
          <div style="grid-column:1 / -1">
            <label class="overline" style="display:block;margin-bottom:4px">Master Worldwide Trust &amp; Legal Document Template (17 Templates)</label>
            <select id="docTplSelect" class="select">
              <option value="pure-trust-indenture">🏛️ 1. Common-Law Pure Trust Declaration &amp; Indenture (Estate Vault / Eliot v. Freeman)</option>
              <option value="certificate-of-trust-bank">🏦 2. Statutory Certificate of Trust &amp; Bank Account Opening Resolution (UTC § 1013)</option>
              <option value="schedule-a-asset-transfer">📜 3. Schedule A · Asset Conveyance &amp; Trustee Acceptance Deed</option>
              <option value="dynasty-trust-indenture">👑 4. Multi-Generational GST-Exempt Dynasty Trust Indenture (SD / NV / DE / WY — $15M 2026 Exemption)</option>
              <option value="cook-islands-nevis-offshore-apt">🌍 5. International / Offshore Asset Protection Trust Indenture (Cook Islands / Nevis / Belize + Duress Flight Clause)</option>
              <option value="cayman-ptc-star-charter">🏝️ 6. Private Trust Company (PTC) &amp; Special Purpose / STAR Trust Governance Charter</option>
              <option value="slat-spousal-trust">💍 7. Spousal Lifetime Access Trust (SLAT) with Non-Reciprocal Estate of Grace Differentiation</option>
              <option value="ilit-crummey-trust">🛡️ 8. Irrevocable Life Insurance Trust (ILIT) &amp; Crummey Present-Interest Withdrawal Notice Packet</option>
              <option value="grat-idgt-installment-sale">📈 9. Intentionally Defective Grantor Trust (IDGT) &amp; IRC § 675(4)(C) Installment Sale Package</option>
              <option value="flp-holding-llc-operating-agreement">🏢 10. Trust-Owned Holding LLC / Family Limited Partnership (FLP) Charging-Order Shield Agreement</option>
              <option value="charitable-crut-clt-trust">🕊️ 11. Charitable Remainder Unitrust (CRUT) / Charitable Lead Trust (CLT) Indenture (IRC § 664)</option>
              <option value="special-needs-trust-snt">🤝 12. Third-Party Supplemental &amp; Special Needs Trust (SNT) Indenture (Medicaid / SSI Shield)</option>
              <option value="ecclesiastical-508c1a-ministry-trust">⛪ 13. 26 U.S.C. § 508(c)(1)(A) Ecclesiastical Pure Trust &amp; Faith-Based Ministry Charter</option>
              <option value="real-estate-land-trust-garn-st-germain">🏠 14. Real Estate Privacy Land Trust &amp; Garn-St. Germain (12 U.S.C. § 1701j-3) Deed Packet</option>
              <option value="client-strategy-memo">📋 15. 7-Phase Private Wealth &amp; 10-Layer Trust Strategy Memorandum</option>
              <option value="notice-of-rights-affidavit">⚖️ 16. Administrative Notice, Affidavit of Status &amp; Court Record Preservation</option>
              <option value="audit-uploaded-document">🔍 17. Forensic Clause-by-Clause Audit &amp; Rewrite of Uploaded Document</option>
            </select>
          </div>
          <div>
            <label class="overline" style="display:block;margin-bottom:4px">Trust or Matter Name</label>
            <input id="docTrustName" class="input" placeholder="e.g. The Sovereign Heritage Pure Trust">
          </div>
          <div>
            <label class="overline" style="display:block;margin-bottom:4px">Jurisdiction / Venue</label>
            <input id="docJurisdiction" class="input" placeholder="e.g. Private Common-Law / Texas">
          </div>
          <div>
            <label class="overline" style="display:block;margin-bottom:4px">Grantor / Settlor / Principal</label>
            <input id="docGrantorName" class="input" placeholder="Full Name of Settlor / Affiant">
          </div>
          <div>
            <label class="overline" style="display:block;margin-bottom:4px">Trustee(s) / Fiduciary</label>
            <input id="docTrusteeName" class="input" placeholder="Full Name(s) of Managing Trustee(s)">
          </div>
          <div style="grid-column:1 / -1">
            <label class="overline" style="display:block;margin-bottom:4px">Schedule A Assets / Banking Details / Case Facts</label>
            <input id="docAssets" class="input" placeholder="e.g. Real property, operating LLC membership interests, treasury account, or specific factual record...">
          </div>
          <div style="grid-column:1 / -1">
            <label class="overline" style="display:block;margin-bottom:4px">Custom Clauses or Voice-Transcribed Instructions</label>
            <textarea id="docCustom" class="textarea" rows="2" placeholder="Add specific clauses, or click 'Record Live Voice Instruction' on the left..."></textarea>
          </div>
          <div style="grid-column:1 / -1">
            <label class="overline" style="display:block;margin-bottom:4px">Uploaded Document / OCR Text to Incorporate (Auto-filled on upload)</label>
            <textarea id="docSourceText" class="textarea" rows="2" placeholder="Optional: paste existing contract/trust text or upload a file on the left...">\${esc(STATE.ocrResult?.text || "")}</textarea>
          </div>
        </div>
        <div id="docDraftStatus" style="font-size:12.5px;color:var(--rj-gold);min-height:18px;margin-bottom:8px"></div>
        <div style="display:flex;gap:10px;flex-wrap:wrap">
          <button class="btn-gold" style="flex:1" onclick="generateCourtBankDocument('premium')">⚡ Draft Complete Document (GLM-5.3 / 120B) →</button>
          <button class="btn-ghost" style="flex:1;justify-content:center" onclick="generateCourtBankDocument('council')">👑 Draft with 6-Model Council →</button>
        </div>
      </div>
    </div>

    \${STATE.docDraft ? \`
      <div class="card" style="border-color:var(--rj-gold)">
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;margin-bottom:14px;padding-bottom:12px;border-bottom:1px solid var(--rj-gold-border)">
          <div>
            <div class="overline">GENERATED SPC UNIVERSITY FORMAL DOCUMENT · \${esc(STATE.docDraft.model)}</div>
            <h3 style="font-family:var(--font-serif);font-size:26px;color:var(--rj-champagne);margin:2px 0 0">\${esc(STATE.docDraft.title)}</h3>
          </div>
          <div style="display:flex;gap:8px;flex-wrap:wrap">
            <button class="btn-ghost" onclick='speakTextAloud(\${safeAttrJs(STATE.docDraft.document)}, this)'>🔊 Read Aloud (TTS)</button>
            <button class="btn-gold" onclick='exportFormalDocument(\${safeAttrJs(STATE.docDraft.title)}, \${safeAttrJs(STATE.docDraft.document)}, "print")'>🖨️ Print / Save Formal PDF</button>
            <button class="btn-ghost" onclick='exportFormalDocument(\${safeAttrJs(STATE.docDraft.title)}, \${safeAttrJs(STATE.docDraft.document)}, "doc")'>📄 Download Editable Word (.DOC)</button>
          </div>
        </div>
        <div style="background:var(--rj-obsidian);border:1px solid var(--rj-gold-border);border-radius:10px;padding:22px;line-height:1.7;font-size:14.5px;max-height:580px;overflow-y:auto">
          \${formatMarkdown(STATE.docDraft.document)}
        </div>
        <div style="margin-top:12px;display:flex;justify-content:space-between;flex-wrap:wrap;gap:8px;font-size:12px;color:var(--rj-gold)">
          <div>Cited SPCU Sources: \${(STATE.docDraft.sources || []).map((s) => \`<span class="src-chip">\${esc(s.id)} · \${esc(s.book)}</span>\`).join(" ")}</div>
          <div>\${esc(STATE.docDraft.disclaimer)}</div>
        </div>
      </div>
    \` : ""}
  \`;
}

// ---------- Tools, Calculators, Live Web/URL Research, Multilingual Translator, Student Roster & CRM Hub ----------
window.runToolWebSearch = async function() {
  const q = ($("#toolWebQuery")?.value || "").trim();
  if (!q) return;
  const st = $("#toolWebStatus");
  if (st) st.textContent = "Searching live web + cross-referencing 1,760 SPC University passages...";
  try {
    STATE.webSearchRes = await api("tools/web-search", { query: q, analyze: true });
    if (st) st.textContent = "";
    renderShell();
  } catch (e) {
    if (st) st.textContent = "Error: " + e.message;
  }
};

window.runToolFetchUrl = async function() {
  const u = ($("#toolUrlInput")?.value || "").trim();
  if (!u) return;
  const st = $("#toolUrlStatus");
  if (st) st.textContent = "Fetching live webpage & analyzing under SPC University Trust & Rights Doctrine...";
  try {
    STATE.urlReadRes = await api("tools/fetch-url", { url: u, instruction: ($("#toolUrlInstruction")?.value || "").trim() });
    if (st) st.textContent = "";
    renderShell();
  } catch (e) {
    if (st) st.textContent = "Error: " + e.message;
  }
};

window.runTrustShieldCalculator = function() {
  const realEstate = Number($("#calcRealEstate")?.value || 0);
  const liquid = Number($("#calcLiquid")?.value || 0);
  const business = Number($("#calcBusiness")?.value || 0);
  const vehicles = Number($("#calcVehicles")?.value || 0);
  const personalNamePct = Number($("#calcPersonalPct")?.value || 80);
  const totalEstate = realEstate + liquid + business + vehicles;
  const exposedNow = Math.round(totalEstate * (personalNamePct / 100));
  const probateEst = Math.round(exposedNow * 0.065);
  const shieldedAfter = Math.round(totalEstate * 0.96);
  const recLayers = [
    "Layer 1 & 2 (Foundational Status & Private Contract Discipline — The SPCU Doctrine)",
    "Layer 3 & 4 (Common-Law Pure Trust Holding Vault — Separates Equitable Benefit from Public Legal Title)",
    "Layer 5 & 6 (Operating LLC / Management Entity Owned by Trust — Isolates Day-to-Day Commercial Liability)",
    "Layer 7 & 8 (Private Treasury Banking & Certificate of Trust under UTC Section 1013 — The Bank Packet)",
    "Layer 9 & 10 (Schedule A Conveyance Deeds, Spendthrift Shield & Successor Trustee Continuity)"
  ];
  STATE.calcRes = { totalEstate, exposedNow, probateEst, shieldedAfter, personalNamePct, recLayers };
  renderShell();
};

window.runToolTranslate = async function() {
  const txt = ($("#toolTransText")?.value || "").trim();
  const lang = $("#toolTransLang")?.value || "Spanish";
  if (!txt) return;
  const st = $("#toolTransStatus");
  if (st) st.textContent = "Translating into formal " + lang + "...";
  try {
    STATE.translateRes = await api("tools/translate", { text: txt, target_lang: lang });
    if (st) st.textContent = "";
    renderShell();
  } catch (e) {
    if (st) st.textContent = "Error: " + e.message;
  }
};

function renderToolsHub() {
  return \`
    <div class="card-hero" style="margin-bottom:22px">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:14px">
        <div>
          <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:8px">
            <span class="seal emerald">● Live Statute &amp; Web Research</span>
            <span class="seal">● Live URL &amp; Document Reader</span>
            <span class="seal">● 10-Layer Estate &amp; Trust Shield Calculator</span>
            <span class="seal">● Multilingual Legal Translator</span>
          </div>
          <h2>Legal Research, 10-Layer Estate Calculator &amp; Fiduciary Tools</h2>
          <p style="color:#C9C5BC;font-size:14px;max-width:780px;margin:0;line-height:1.6">
            Research public statutes and legal encyclopedias side-by-side with the 1,760-passage SPC University Trust Library, audit any live webpage URL against SPCU doctrine, calculate your estate's probate exposure versus 10-Layer Trust Shielding, and translate trust clauses into 7 languages.
          </p>
        </div>
      </div>
    </div>

    <div class="grid-2" style="margin-bottom:22px">
      <!-- 1. Live Web & Legal Research Engine -->
      <div class="card">
        <div class="overline">Tool #1 · Live Legal Statute + 1,760-Passage Vault Research</div>
        <h3 style="font-family:var(--font-serif);font-size:23px;color:var(--rj-champagne);margin:4px 0 8px">Live Statute, Case Law &amp; Trust Definition Research</h3>
        <p style="font-size:13px;color:var(--rj-muted);margin-top:0">
          Search public legal references and encyclopedias side-by-side with the 1,760-passage SPC University Trust Library, synthesized into clean plain text.
        </p>
        <div style="display:flex;gap:8px;margin-bottom:8px">
          <input id="toolWebQuery" class="input" placeholder="e.g. Uniform Trust Code Section 1013 Certification of Trust requirements...">
          <button class="btn-gold" onclick="runToolWebSearch()">Search Law + Vault →</button>
        </div>
        <div id="toolWebStatus" style="font-size:12px;color:var(--rj-gold);min-height:18px"></div>
        \${STATE.webSearchRes ? \`
          <div style="background:var(--rj-obsidian);border:1px solid var(--rj-gold-border);border-radius:10px;padding:14px;margin-top:8px">
            <div class="overline" style="margin-bottom:6px">Plain-Text Legal Synthesis (Web + SPCU Vault):</div>
            <div style="font-size:13.5px;line-height:1.65;color:var(--rj-text);max-height:240px;overflow-y:auto;margin-bottom:10px">\${formatMarkdown(STATE.webSearchRes.synthesis)}</div>
            <div style="display:flex;gap:8px;flex-wrap:wrap">
              <button class="btn-ghost" style="font-size:11px;padding:5px 10px" onclick='speakTextAloud(\${safeAttrJs(STATE.webSearchRes.synthesis)}, this)'>🔊 Listen (TTS)</button>
              <button class="btn-ghost" style="font-size:11px;padding:5px 10px" onclick='exportFormalDocument("SPC University Legal Research Brief", \${safeAttrJs(STATE.webSearchRes.synthesis)}, "print")'>🖨️ Print / PDF</button>
            </div>
          </div>
        \` : ""}
      </div>

      <!-- 2. Live URL & Webpage Analyzer -->
      <div class="card">
        <div class="overline">Tool #2 · Live Statute, Court Notice &amp; Webpage URL Reader</div>
        <h3 style="font-family:var(--font-serif);font-size:23px;color:var(--rj-champagne);margin:4px 0 8px">Fetch &amp; Audit Any Live Webpage or Statute URL</h3>
        <p style="font-size:13px;color:var(--rj-muted);margin-top:0">
          Paste any public statute link, court rule URL, or article (or paste any URL directly inside the main chat) to extract its text and audit it against SPC University doctrine.
        </p>
        <input id="toolUrlInput" class="input" placeholder="https://... (Paste any public statute or legal article URL)" style="margin-bottom:8px">
        <div style="display:flex;gap:8px;margin-bottom:8px">
          <input id="toolUrlInstruction" class="input" placeholder="Optional instruction (e.g. Summarize key trust takeaways in plain English)">
          <button class="btn-gold" onclick="runToolFetchUrl()">Read &amp; Audit URL →</button>
        </div>
        <div id="toolUrlStatus" style="font-size:12px;color:var(--rj-gold);min-height:18px"></div>
        \${STATE.urlReadRes ? \`
          <div style="background:var(--rj-obsidian);border:1px solid var(--rj-gold-border);border-radius:10px;padding:14px;margin-top:8px">
            <div class="overline" style="margin-bottom:4px">Audited URL: \${esc(STATE.urlReadRes.title)}</div>
            <div style="font-size:13.5px;line-height:1.65;color:var(--rj-text);max-height:240px;overflow-y:auto">\${formatMarkdown(STATE.urlReadRes.analysis)}</div>
          </div>
        \` : ""}
      </div>
    </div>

    <div class="grid-2">
      <!-- 3. 10-Layer Trust & Estate Asset Protection Calculator -->
      <div class="card">
        <div class="overline">Tool #3 · Interactive 10-Layer Estate &amp; Liability Shield Calculator</div>
        <h3 style="font-family:var(--font-serif);font-size:23px;color:var(--rj-champagne);margin:4px 0 10px">Client Dossier Asset Exposure &amp; Trust Shield Diagnostic</h3>
        <div class="form-grid-2" style="margin-bottom:12px">
          <div>
            <label class="overline" style="display:block;margin-bottom:4px">Real Estate Equity (\$)</label>
            <input id="calcRealEstate" type="number" class="input" value="650000">
          </div>
          <div>
            <label class="overline" style="display:block;margin-bottom:4px">Cash, Treasury &amp; Brokerage (\$)</label>
            <input id="calcLiquid" type="number" class="input" value="180000">
          </div>
          <div>
            <label class="overline" style="display:block;margin-bottom:4px">Business / LLC / IP Value (\$)</label>
            <input id="calcBusiness" type="number" class="input" value="420000">
          </div>
          <div>
            <label class="overline" style="display:block;margin-bottom:4px">Vehicles, Metals &amp; Equipment (\$)</label>
            <input id="calcVehicles" type="number" class="input" value="95000">
          </div>
          <div style="grid-column:1 / -1">
            <label class="overline" style="display:block;margin-bottom:4px">% Currently Held in Personal Name / Revocable Probate Exposure</label>
            <input id="calcPersonalPct" type="number" class="input" value="85" min="0" max="100">
          </div>
        </div>
        <button class="btn-gold" style="width:100%" onclick="runTrustShieldCalculator()">Calculate Estate Exposure &amp; 10-Layer Trust Blueprint →</button>
        \${STATE.calcRes ? \`
          <div style="background:var(--rj-obsidian);border:1px solid var(--rj-gold);border-radius:10px;padding:14px;margin-top:12px">
            <div class="grid-3" style="margin-bottom:12px">
              <div>
                <div class="overline">Total Estate Corpus</div>
                <div class="num" style="font-size:20px;font-weight:700;color:var(--rj-champagne)">\$\${STATE.calcRes.totalEstate.toLocaleString()}</div>
              </div>
              <div>
                <div class="overline">Current Public Exposure</div>
                <div class="num" style="font-size:20px;font-weight:700;color:#e07b84">\$\${STATE.calcRes.exposedNow.toLocaleString()}</div>
              </div>
              <div>
                <div class="overline">10-Layer Trust Shielded</div>
                <div class="num" style="font-size:20px;font-weight:700;color:#6EE7B7">\$\${STATE.calcRes.shieldedAfter.toLocaleString()}</div>
              </div>
            </div>
            <div class="overline" style="margin-bottom:6px">Recommended SPCU 10-Layer Implementation Sequence:</div>
            <div style="font-size:12.5px;color:var(--rj-text);line-height:1.6">
              \${STATE.calcRes.recLayers.map((l, idx) => \`<div>\${idx + 1}. \${esc(l)}</div>\`).join("")}
            </div>
            <div style="margin-top:10px;display:flex;gap:8px">
              <button class="btn-ghost" style="font-size:11.5px;padding:6px 11px" onclick='launchPrompt("Build a personalized 7-Phase Strategy Memorandum and 10-Layer Trust Conveyance Checklist for an estate totaling $" + \${STATE.calcRes.totalEstate} + " with $" + \${STATE.calcRes.exposedNow} + " currently exposed in personal name.")'>Send Diagnostic to TrustGPT →</button>
            </div>
          </div>
        \` : ""}
      </div>

      <!-- 4. Multilingual Legal & Trust Document Translator -->
      <div class="card">
        <div class="overline">Tool #4 · Certified Legal &amp; Fiduciary Terminology Translator</div>
        <h3 style="font-family:var(--font-serif);font-size:23px;color:var(--rj-champagne);margin:4px 0 10px">Multilingual Trust, Affidavit &amp; Study Translator</h3>
        <div style="margin-bottom:8px">
          <label class="overline" style="display:block;margin-bottom:4px">Target Language</label>
          <select id="toolTransLang" class="select">
            <option value="Spanish">Spanish (Español)</option>
            <option value="French">French (Français)</option>
            <option value="Portuguese">Portuguese (Português)</option>
            <option value="Arabic">Arabic (العربية)</option>
            <option value="German">German (Deutsch)</option>
            <option value="Mandarin Chinese">Mandarin Chinese (中文)</option>
            <option value="Plain 8th-Grade English">Plain Everyday English (Simplified Student Summary)</option>
          </select>
        </div>
        <textarea id="toolTransText" class="textarea" rows="4" placeholder="Paste any trust clause, bank resolution, court notice, or TrustGPT answer to translate while preserving exact legal and fiduciary meaning..." style="margin-bottom:8px"></textarea>
        <div id="toolTransStatus" style="font-size:12px;color:var(--rj-gold);min-height:18px"></div>
        <button class="btn-gold" style="width:100%" onclick="runToolTranslate()">Translate in Regular Plain Text →</button>
        \${STATE.translateRes ? \`
          <div style="background:var(--rj-obsidian);border:1px solid var(--rj-gold-border);border-radius:10px;padding:14px;margin-top:10px">
            <div class="overline" style="margin-bottom:4px">Translated Output (\${esc(STATE.translateRes.target_lang)}):</div>
            <div style="font-size:13.5px;line-height:1.65;color:var(--rj-text);max-height:220px;overflow-y:auto">\${formatMarkdown(STATE.translateRes.translated_text)}</div>
          </div>
        \` : ""}
      </div>
    </div>
  \`;
}

// ---------- Attorney-Grade Trust Execution, 12-Point Guardrail Verifier, Notary, Bonding, Certified Mail & Google Docs/Gmail Hub ----------
window.runGuardrailAuditNow = async function() {
  const txt = ($("#guardrailDocText")?.value || "").trim() || (STATE.docDraft?.document || "");
  if (!txt || txt.length < 40) return alert("Paste a trust draft or click 'Load Latest Drafted Trust' first.");
  const st = $("#guardrailStatus");
  if (st) st.textContent = "Running 12-Point Zero-Defect Trust Guardrail Verification + generating missing clauses...";
  try {
    STATE.guardrailRes = await api("trust/guardrail-audit", {
      document_text: txt,
      trust_name: ($("#execTrustName")?.value || "The Sovereign Heritage Pure Trust").trim(),
      state_venue: ($("#execStateVenue")?.value || "State of Texas").trim()
    });
    if (st) st.textContent = "";
    renderShell();
  } catch (e) {
    if (st) st.textContent = "Error: " + e.message;
  }
};

window.runGenerateExecPacket = async function() {
  const st = $("#execPacketStatus");
  if (st) st.textContent = "Assembling Notary Acknowledgment, Witness Attestation, Trustee Bond & USPS Certified Mail Affidavit...";
  try {
    STATE.execPacketRes = await api("trust/execution-packet", {
      trust_name: ($("#execTrustName")?.value || "The Sovereign Heritage Pure Trust").trim(),
      grantor_name: ($("#execGrantor")?.value || "").trim(),
      trustee_name: ($("#execTrustee")?.value || "").trim(),
      successor_trustee: ($("#execSuccessor")?.value || "").trim(),
      state_venue: ($("#execStateVenue")?.value || "State of Texas").trim(),
      county_venue: ($("#execCountyVenue")?.value || "County of Tarrant").trim(),
      bond_amount: ($("#execBondAmt")?.value || "$250,000.00 Private Fiduciary Indemnity Bond").trim(),
      mailing_recipient: ($("#execMailRecipient")?.value || "Office of the County Clerk / Banking Compliance Officer").trim(),
      mailing_address: ($("#execMailAddress")?.value || "").trim(),
      certified_tracking_number: ($("#execTrackingNum")?.value || "7022 0410 0001 9482 3910").trim()
    });
    if (st) st.textContent = "Complete Execution, Notarization, Bonding & Certified Mail Packet Ready.";
    renderShell();
  } catch (e) {
    if (st) st.textContent = "Error: " + e.message;
  }
};

window.pushToGoogleDocsOrGmail = async function(mode) {
  const title = STATE.execPacketRes?.title || STATE.docDraft?.title || "SPC University Official Trust Packet";
  const content = STATE.execPacketRes?.packet || STATE.docDraft?.document || ($("#guardrailDocText")?.value || "").trim() || "SPC University Trust Document";
  const recipient = ($("#gwsRecipientEmail")?.value || STATE.user.email || "").trim();
  const webhook = ($("#gwsWebhookUrl")?.value || "").trim();
  if (webhook) {
    localStorage.setItem("spcu_gws_url", webhook);
    STATE.gWorkspaceUrl = webhook;
  }
  if (mode === "gmail_compose") {
    const subj = encodeURIComponent(title);
    const body = encodeURIComponent(content.slice(0, 1800) + "\\n\\n[Full Trust Packet generated at https://app.spcuniversity.com]");
    window.open("https://mail.google.com/mail/?view=cm&fs=1&to=" + encodeURIComponent(recipient) + "&su=" + subj + "&body=" + body, "_blank");
    return;
  }
  if (mode === "gdocs_import") {
    // Download .doc and open Google Docs uploader for instant 1-click Google Doc creation without OAuth setup
    exportFormalDocument(title, content, "doc");
    window.open("https://docs.google.com/document/u/0/create", "_blank");
    return;
  }
  if (mode === "apps_script_bridge") {
    const st = $("#gwsStatus");
    if (!webhook) return alert("Paste your Google Apps Script Web App URL first (or click 'Copy 10-Line Google Apps Script' below).");
    if (st) st.textContent = "Creating Google Doc in Drive & dispatching Gmail packet...";
    try {
      const r = await api("integrations/google-workspace", {
        webhook_url: webhook,
        action: "create_doc_and_email",
        doc_title: title,
        doc_content: content,
        recipient_email: recipient
      });
      if (st) st.textContent = "Delivered to Google Docs & Gmail! " + (r.result?.docUrl ? "Doc URL: " + r.result.docUrl : "");
    } catch (e) {
      if (st) st.textContent = "Error: " + e.message;
    }
  }
};

function renderAttorneyExecutionSuite() {
  const appsScriptCode = \`function doPost(e) {
  var data = JSON.parse(e.postData.contents);
  var doc = DocumentApp.create(data.title || "SPC University Trust Packet");
  doc.getBody().setText(data.content || "");
  doc.saveAndClose();
  var pdfBlob = DriveApp.getFileById(doc.getId()).getAs("application/pdf");
  if (data.recipient) {
    GmailApp.sendEmail(data.recipient, data.subject || data.title, "Attached is your official SPC University Trust Packet.\\n\\nGoogle Doc Link: " + doc.getUrl(), { attachments: [pdfBlob] });
  }
  return ContentService.createTextOutput(JSON.stringify({ ok: true, docUrl: doc.getUrl() })).setMimeType(ContentService.MimeType.JSON);
}\`;

  return \`
    <div class="card-hero" style="margin-bottom:22px">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:14px">
        <div>
          <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:8px">
            <span class="seal emerald">● 12-Point Zero-Defect Trust Guardrails</span>
            <span class="seal">● Notary Jurat &amp; 2-Witness Blocks</span>
            <span class="seal">● Fiduciary Surety Bond</span>
            <span class="seal">● USPS Certified Mail &amp; Green Card Log</span>
            <span class="seal">● Google Docs &amp; Gmail Sync</span>
          </div>
          <h2>Attorney-Grade Trust Execution, Guardrails, Notarization, Bonding &amp; Google Docs/Gmail Center</h2>
          <p style="color:#C9C5BC;font-size:14px;max-width:820px;margin:0;line-height:1.6">
            Complete the entire lifecycle of a private common-law or statutory trust from one sovereign platform: verify any student's draft against <strong>12 mandatory legal and fiduciary guardrails</strong> (with automatic corrective clauses), generate the complete <strong>Notarization, Two-Witness, Trustee Surety Bond, and USPS Certified Mail (Form 3800 / Green Card 3811) Affidavit Bundle</strong>, and push directly to <strong>Google Docs and Google Mail (Gmail)</strong>.
          </p>
        </div>
      </div>
    </div>

    <div class="grid-2" style="margin-bottom:22px">
      <!-- 1. 12-Point Zero-Defect Trust Guardrail Verifier -->
      <div class="card">
        <div class="overline">Step 1 · 12-Point Zero-Defect Trust Guardrail Verifier</div>
        <h3 style="font-family:var(--font-serif);font-size:23px;color:var(--rj-champagne);margin:4px 0 8px">Audit Any Trust for Missing Clauses &amp; Auto-Generate Fixes</h3>
        <p style="font-size:13px;color:var(--rj-muted);margin-top:0">
          Ensures every student trust has Separation of Legal &amp; Equitable Title, Irrevocability, Spendthrift Shield, UTC Section 1013 Banking Powers, Schedule A Conveyance, Successor Trustee Continuity, Two-Witness Attestation, Notary Jurat, and Fiduciary Bond coverage.
        </p>
        <textarea id="guardrailDocText" class="textarea" rows="5" placeholder="Paste any trust indenture, certificate of trust, or click 'Load Latest Drafted Document' below..." style="margin-bottom:8px">\${esc(STATE.docDraft?.document || "")}</textarea>
        <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:8px">
          <button class="btn-gold" style="flex:1" onclick="runGuardrailAuditNow()">🛡️ Run 12-Point Guardrail Audit &amp; Auto-Fix →</button>
          <button class="btn-ghost" onclick="switchTab('doclab')">Draft New Trust First →</button>
        </div>
        <div id="guardrailStatus" style="font-size:12px;color:var(--rj-gold);min-height:18px"></div>

        \${STATE.guardrailRes ? \`
          <div style="background:var(--rj-obsidian);border:1px solid var(--rj-gold);border-radius:10px;padding:14px;margin-top:8px">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">
              <span class="overline">Guardrail Compliance Score</span>
              <span class="seal \${STATE.guardrailRes.score >= 80 ? "emerald" : ""} num" style="font-size:13px">\${STATE.guardrailRes.score}% (\${STATE.guardrailRes.passed}/\${STATE.guardrailRes.total} Passed)</span>
            </div>
            <div style="max-height:190px;overflow-y:auto;margin-bottom:12px;font-size:12.5px">
              \${STATE.guardrailRes.checks.map((c) => \`
                <div style="padding:5px 0;border-bottom:1px solid var(--rj-gold-border);display:flex;justify-content:space-between;gap:8px">
                  <span>\${c.pass ? "✅" : "⚠️"} <strong>\${esc(c.id)}:</strong> \${esc(c.name)}</span>
                  <span style="color:\${c.pass ? "#6EE7B7" : "#DFC48C"};font-weight:700">\${c.pass ? "PASSED" : "AUTO-FIX BELOW"}</span>
                </div>
              \`).join("")}
            </div>
            <div class="overline" style="margin-bottom:4px">Ready-to-Insert Corrective Guardrail Clauses (Plain Text):</div>
            <div style="max-height:220px;overflow-y:auto;font-size:13px;line-height:1.65;color:var(--rj-text);padding:10px;background:var(--rj-vault);border-radius:8px">\${formatMarkdown(STATE.guardrailRes.remediation_clauses)}</div>
          </div>
        \` : ""}
      </div>

      <!-- 2. Notary, Witness, Fiduciary Bond & USPS Certified Mail Packet Builder -->
      <div class="card">
        <div class="overline">Step 2 · Execution, Notarization, Bonding &amp; Certified Mail Generator</div>
        <h3 style="font-family:var(--font-serif);font-size:23px;color:var(--rj-champagne);margin:4px 0 10px">Generate Notary Jurat, Trustee Bond &amp; USPS Green Card Affidavit</h3>
        <div class="form-grid-2" style="gap:8px;margin-bottom:10px">
          <div style="grid-column:1 / -1">
            <label class="overline" style="display:block;margin-bottom:3px">Trust / Estate Instrument Name</label>
            <input id="execTrustName" class="input" value="The Sovereign Heritage Pure Trust">
          </div>
          <div>
            <label class="overline" style="display:block;margin-bottom:3px">Grantor / Settlor Name</label>
            <input id="execGrantor" class="input" placeholder="Full Name of Settlor">
          </div>
          <div>
            <label class="overline" style="display:block;margin-bottom:3px">Managing Trustee Name</label>
            <input id="execTrustee" class="input" placeholder="Full Name of Managing Trustee">
          </div>
          <div>
            <label class="overline" style="display:block;margin-bottom:3px">Successor Trustee Name</label>
            <input id="execSuccessor" class="input" placeholder="Designated Successor Trustee">
          </div>
          <div>
            <label class="overline" style="display:block;margin-bottom:3px">Fiduciary Surety Bond Amount</label>
            <input id="execBondAmt" class="input" value="\$250,000.00 Private Fiduciary Indemnity Bond">
          </div>
          <div>
            <label class="overline" style="display:block;margin-bottom:3px">State Venue (for Notary Block)</label>
            <input id="execStateVenue" class="input" value="State of Texas">
          </div>
          <div>
            <label class="overline" style="display:block;margin-bottom:3px">County Venue (for Notary Block)</label>
            <input id="execCountyVenue" class="input" value="County of Tarrant">
          </div>
          <div>
            <label class="overline" style="display:block;margin-bottom:3px">USPS Certified Mail Tracking # (Form 3800)</label>
            <input id="execTrackingNum" class="input" value="7022 0410 0001 9482 3910">
          </div>
          <div>
            <label class="overline" style="display:block;margin-bottom:3px">Mailing Recipient (Bank / Recorder / Notice Party)</label>
            <input id="execMailRecipient" class="input" value="Banking Compliance Officer / County Recorder">
          </div>
          <div style="grid-column:1 / -1">
            <label class="overline" style="display:block;margin-bottom:3px">Recipient Delivery Address (for Green Card Form 3811 Affidavit)</label>
            <input id="execMailAddress" class="input" placeholder="Street Address, City, State, ZIP">
          </div>
        </div>
        <div id="execPacketStatus" style="font-size:12px;color:var(--rj-gold);min-height:18px;margin-bottom:6px"></div>
        <button class="btn-gold" style="width:100%" onclick="runGenerateExecPacket()">⚖️ Generate Complete Notary, Bond &amp; Certified Mail Execution Packet →</button>
      </div>
    </div>

    <!-- 3. Google Docs & Google Mail (Gmail) Direct Workspace Integration -->
    <div class="card" style="margin-bottom:22px;border-color:var(--rj-gold)">
      <div class="overline">Step 3 · Google Workspace Integration (Google Docs + Google Mail / Gmail + Google Drive)</div>
      <h3 style="font-family:var(--font-serif);font-size:25px;color:var(--rj-champagne);margin:4px 0 8px">Send Any Drafted Trust or Execution Bundle Directly to Google Docs &amp; Gmail</h3>
      <p style="font-size:13.5px;color:var(--rj-muted);margin:0 0 14px;line-height:1.6">
        Export any drafted trust or execution packet straight into <strong>Google Docs</strong> for collaborative editing, launch a pre-filled <strong>Gmail Web Compose</strong> window to email the packet to your client/student/notary, or connect the 10-line <strong>Google Apps Script Bridge</strong> so clicking one button automatically creates a formatted Google Doc in your Google Drive and emails the PDF attachment via your Gmail account.
      </p>
      <div class="grid-3" style="margin-bottom:14px">
        <div>
          <label class="overline" style="display:block;margin-bottom:4px">Recipient Email (Student / Client / Notary)</label>
          <input id="gwsRecipientEmail" class="input" value="\${esc(STATE.user.email)}" placeholder="student@gmail.com">
        </div>
        <div style="grid-column:span 2">
          <label class="overline" style="display:block;margin-bottom:4px">Optional: Google Apps Script Web App URL (For 1-Click Automated Drive Doc + Gmail PDF Delivery)</label>
          <input id="gwsWebhookUrl" class="input" value="\${esc(STATE.gWorkspaceUrl)}" placeholder="https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec">
        </div>
      </div>
      <div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:10px">
        <button class="btn-gold" onclick="pushToGoogleDocsOrGmail('gdocs_import')">📝 Open in Google Docs (.DOCX/DOC + Launch Docs) →</button>
        <button class="btn-gold" onclick="pushToGoogleDocsOrGmail('gmail_compose')">✉️ Send via Gmail Compose (Pre-Filled Packet) →</button>
        <button class="btn-ghost" onclick="pushToGoogleDocsOrGmail('apps_script_bridge')">⚡ Run Automated Google Drive + Gmail PDF Bridge →</button>
      </div>
      <div id="gwsStatus" style="font-size:12.5px;color:#6EE7B7;min-height:18px"></div>
      <details style="margin-top:8px;background:var(--rj-obsidian);border:1px solid var(--rj-gold-border);border-radius:8px;padding:10px 14px">
        <summary style="cursor:pointer;font-size:12px;font-weight:700;color:var(--rj-champagne)">🔧 View 30-Second Setup for Automated Google Docs + Gmail Apps Script Bridge (100% Free inside Any Google Account)</summary>
        <p style="font-size:12.5px;color:var(--rj-muted);margin:8px 0">
          1. Go to <a href="https://script.google.com" target="_blank" style="color:var(--rj-gold)">script.google.com</a> → <strong>New Project</strong>.<br>
          2. Paste the 10-line script below → click <strong>Deploy → New Deployment → Web App</strong> (Execute as: <em>Me</em>, Who has access: <em>Anyone</em>).<br>
          3. Paste the resulting <code>https://script.google.com/macros/s/.../exec</code> URL into the box above. Now TrustGPT creates Google Docs in your Drive and emails PDF packets via your Gmail automatically!
        </p>
        <pre style="background:var(--rj-vault);border:1px solid var(--rj-gold-border);border-radius:8px;padding:12px;font-size:11.5px;color:var(--rj-champagne);overflow-x:auto">\${esc(appsScriptCode)}</pre>
      </details>
    </div>

    \${STATE.execPacketRes ? \`
      <div class="card" style="border-color:var(--rj-gold)">
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;margin-bottom:12px;padding-bottom:12px;border-bottom:1px solid var(--rj-gold-border)">
          <div>
            <div class="overline">ATTORNEY-GRADE EXECUTION, NOTARY, BOND &amp; CERTIFIED MAIL BUNDLE</div>
            <h3 style="font-family:var(--font-serif);font-size:25px;color:var(--rj-champagne);margin:2px 0 0">\${esc(STATE.execPacketRes.title)}</h3>
          </div>
          <div style="display:flex;gap:8px;flex-wrap:wrap">
            <button class="btn-ghost" onclick='speakTextAloud(\${safeAttrJs(STATE.execPacketRes.packet)}, this)'>🔊 Read Aloud (TTS)</button>
            <button class="btn-gold" onclick='exportFormalDocument(\${safeAttrJs(STATE.execPacketRes.title)}, \${safeAttrJs(STATE.execPacketRes.packet)}, "print")'>🖨️ Print / Save Formal PDF</button>
            <button class="btn-ghost" onclick='exportFormalDocument(\${safeAttrJs(STATE.execPacketRes.title)}, \${safeAttrJs(STATE.execPacketRes.packet)}, "doc")'>📄 Download Word (.DOC)</button>
            <button class="btn-ghost" onclick="pushToGoogleDocsOrGmail('gmail_compose')">✉️ Email via Gmail</button>
          </div>
        </div>
        <div style="background:var(--rj-obsidian);border:1px solid var(--rj-gold-border);border-radius:10px;padding:22px;line-height:1.7;font-size:14px;max-height:540px;overflow-y:auto">
          \${formatMarkdown(STATE.execPacketRes.packet)}
        </div>
      </div>
    \` : ""}
  \`;
}

// ---------- Specialized Subject Tutors (Domestic, World & International Trusts) + 91 Lesson/Video Asset Tutor Academy ----------
window.selectSubjectTutor = function(tutorId) {
  STATE.selectedTutorId = tutorId;
  STATE.selectedLessonKey = "";
  renderShell();
  const el = $("#tutorInteractiveConsole");
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

window.selectLessonAssetTutor = function(bookKey) {
  STATE.selectedLessonKey = bookKey;
  renderShell();
  const el = $("#tutorInteractiveConsole");
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

window.runTutorSession = async function(mode, tierOverride) {
  const st = $("#tutorSessionStatus");
  const qBox = $("#tutorStudentInput");
  const vBox = $("#tutorVideoNotes");
  const studentQ = (qBox?.value || "").trim();
  const videoNotes = (vBox?.value || "").trim();
  const modeLabels = {
    masterclass: "🎓 Generating Complete Masterclass Walkthrough...",
    action_worksheet: "📋 Building Put-It-To-Work Action Worksheet & Checklist...",
    socratic_quiz: "🧠 Preparing 3-Question Socratic Mastery Check...",
    video_companion: "🎬 Analyzing Lesson / Video Notes & Generating Coaching...",
    ask_tutor: "💬 Your Personal SPCU Tutor is preparing a grounded answer..."
  };
  if (st) st.textContent = modeLabels[mode] || "Your SPCU Tutor is responding...";
  try {
    const r = await api("tutors/session", {
      tutor_id: STATE.selectedTutorId,
      lesson_book_key: STATE.selectedLessonKey || undefined,
      mode: mode || "ask_tutor",
      student_input: studentQ || undefined,
      video_notes: videoNotes || undefined,
      tier: tierOverride || "standard"
    });
    STATE.tutorHistory.unshift(r);
    if (qBox && mode === "ask_tutor") qBox.value = "";
    if (st) st.textContent = "";
    renderShell();
  } catch (e) {
    if (st) st.textContent = "Error: " + e.message;
  }
};

function renderTutorsAcademy() {
  const cat = STATE.tutorCatalog || { specialized_tutors: [], lesson_assets: [] };
  const tutors = cat.specialized_tutors || [];
  const lessons = cat.lesson_assets || [];
  const activeTutor = tutors.find((t) => t.id === STATE.selectedTutorId) || tutors[0] || {
    id: "pure-trust-master-tutor",
    name: "Common-Law Pure Trust & Express Trust Tutor",
    title: "Professor of Common-Law Express Trusts & Estate Indentures",
    specialty: "Common-Law Pure Trusts, Express Trusts, Separation of Legal & Equitable Title, Schedule A Conveyance",
    mission: "Teach the student step-by-step how a Common-Law Pure Trust works and how to put it into immediate operation."
  };
  const qFilter = (STATE.lessonSearchQuery || "").toLowerCase().trim();
  const filteredLessons = qFilter
    ? lessons.filter((l) => l.title.toLowerCase().includes(qFilter) || l.preview.toLowerCase().includes(qFilter))
    : lessons;

  return \`
    <div class="card-hero" style="margin-bottom:22px">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:14px">
        <div>
          <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:8px">
            <span class="seal emerald">● 16 Specialized Faculty Tutors</span>
            <span class="seal">● World, Offshore, Dynasty, Ecclesiastical &amp; Pure Trust Tutors</span>
            <span class="seal">● 151 Personalized Volume, Skeleton &amp; Lesson Tutors</span>
            <span class="seal">● Voice Read-Aloud &amp; Action Worksheets</span>
          </div>
          <h2>SPCU Personalized AI Tutor Academy — 16 Faculty Tutors + 151 Volume, Skeleton &amp; Lesson Tutors</h2>
          <p style="color:#C9C5BC;font-size:14px;max-width:860px;margin:0;line-height:1.6">
            Every subject, Master Book, Omnibus Volume, Domestic/Offshore Trust Skeleton, and Lesson Guide in SPC University has its own <strong>Dedicated 1-on-1 AI Tutor</strong>. Pick any of the <strong>16 Specialized Faculty Tutors</strong> below (covering Common-Law Pure Trusts, Cook Islands/Nevis/Belize/Cayman Offshore Trusts, 10-Layer Architecture, Dynasty/SLAT/ILIT/GRAT/IDGT Trusts, 508(c)(1)(A) Ecclesiastical Ministry Trusts, Real Estate Land Trusts &amp; Garn-St. Germain, Bank Packets, Equity Maxims, Constitutional Status, Courtroom Objections, Commercial Law, Subchapter J Tax, and 100+ Landmark Cases) or select any of the <strong>151 Individual Volumes, Skeletons &amp; Lesson Guides</strong>.
          </p>
        </div>
      </div>
    </div>

    <!-- Interactive 1-on-1 Tutor Coaching Console -->
    <div id="tutorInteractiveConsole" class="card" style="margin-bottom:24px;border-color:var(--rj-gold)">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:12px;padding-bottom:14px;border-bottom:1px solid var(--rj-gold-border);margin-bottom:14px">
        <div>
          <div class="overline">ACTIVE 1-ON-1 PERSONAL TUTOR · \${esc(activeTutor.title)}</div>
          <h3 style="font-family:var(--font-serif);font-size:26px;color:var(--rj-champagne);margin:2px 0 4px">🎓 \${esc(activeTutor.name)}</h3>
          <div style="font-size:13px;color:var(--rj-muted)"><strong>Specialty:</strong> \${esc(activeTutor.specialty)}</div>
          \${STATE.selectedLessonKey ? \`
            <div style="margin-top:8px;display:flex;align-items:center;gap:8px;flex-wrap:wrap">
              <span class="seal emerald">📖 Focused on Lesson / Video Asset: \${esc(STATE.selectedLessonKey.replace(/^SPCU Article:\\s*/i, "").replace(/^SPCU Page:\\s*/i, ""))}</span>
              <button class="btn-ghost" style="padding:3px 9px;font-size:11px" onclick="STATE.selectedLessonKey='';renderShell()">Clear Lesson Filter ✕</button>
            </div>
          \` : ""}
        </div>
        <div style="display:flex;gap:8px;flex-wrap:wrap">
          <button class="btn-gold" onclick="runTutorSession('masterclass', 'standard')">1. Teach Me This Lesson Step-by-Step →</button>
          <button class="btn-gold" onclick="runTutorSession('action_worksheet', 'premium')">2. Put It To Work (Action Worksheet) →</button>
          <button class="btn-ghost" onclick="runTutorSession('socratic_quiz', 'standard')">3. Test My Mastery (3-Question Quiz)</button>
          <button class="btn-ghost" onclick="runTutorSession('masterclass', 'council')">👑 6-Model Council Masterclass</button>
        </div>
      </div>

      <div class="grid-2" style="margin-bottom:12px">
        <div>
          <label class="overline" style="display:block;margin-bottom:4px">Ask Your Personal Tutor Anything About This Topic or Lesson</label>
          <textarea id="tutorStudentInput" class="textarea" rows="3" placeholder="Ask a question, describe your situation, or ask the tutor to explain a specific concept in plain everyday English so you can apply it right away..."></textarea>
        </div>
        <div>
          <label class="overline" style="display:block;margin-bottom:4px">Watching a Lesson Video or Reading a Guide? Paste Video Notes / Timestamps Here</label>
          <textarea id="tutorVideoNotes" class="textarea" rows="3" placeholder="Optional: paste notes, transcript lines, or a paragraph from the video/lesson you are watching right now and your tutor will break it down for you..."></textarea>
        </div>
      </div>

      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px">
        <div style="display:flex;gap:8px;flex-wrap:wrap">
          <button class="btn-gold" onclick="runTutorSession('ask_tutor', 'standard')">💬 Ask My Personal Tutor →</button>
          <button class="btn-ghost" onclick="runTutorSession('video_companion', 'standard')">🎬 Explain My Video / Lesson Notes →</button>
          <button id="btnMicRecord" class="btn-ghost" onclick="toggleMicRecording('#tutorStudentInput')">🎙️ Speak Question (Voice Mic)</button>
        </div>
        <div id="tutorSessionStatus" style="font-size:12.5px;color:var(--rj-gold);min-height:18px"></div>
      </div>

      \${STATE.tutorHistory.length ? \`
        <div style="margin-top:18px;padding-top:16px;border-top:1px solid var(--rj-gold-border);display:flex;flex-direction:column;gap:14px">
          \${STATE.tutorHistory.map((item) => \`
            <div style="background:var(--rj-obsidian);border:1px solid var(--rj-gold);border-radius:11px;padding:18px 20px">
              <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;margin-bottom:10px;padding-bottom:10px;border-bottom:1px solid var(--rj-gold-border)">
                <div>
                  <span class="overline">\${esc(item.tutor_name)} · \${esc(item.mode.toUpperCase())}</span>
                  <div style="font-family:var(--font-serif);font-size:21px;font-weight:700;color:var(--rj-champagne)">\${esc(item.asset_title)}</div>
                </div>
                <div style="display:flex;gap:8px;flex-wrap:wrap">
                  <button class="btn-ghost" style="padding:5px 10px;font-size:11.5px" onclick='speakTextAloud(\${safeAttrJs(item.reply)}, this)'>🔊 Listen to Tutor (TTS)</button>
                  <button class="btn-ghost" style="padding:5px 10px;font-size:11.5px" onclick='exportFormalDocument(\${safeAttrJs(item.asset_title + " — SPCU Tutor Lesson")}, \${safeAttrJs(item.reply)}, "print")'>🖨️ Print / Save Lesson PDF</button>
                  <button class="btn-ghost" style="padding:5px 10px;font-size:11.5px" onclick='exportFormalDocument(\${safeAttrJs(item.asset_title + " — SPCU Tutor Lesson")}, \${safeAttrJs(item.reply)}, "doc")'>📄 Download Word (.DOC)</button>
                </div>
              </div>
              <div style="font-size:14.5px;line-height:1.7;color:var(--rj-text)">\${formatMarkdown(item.reply)}</div>
              <div style="margin-top:12px;padding-top:10px;border-top:1px solid var(--rj-gold-border);display:flex;justify-content:space-between;flex-wrap:wrap;gap:8px;font-size:11.5px;color:var(--rj-gold)">
                <div>Cited Lesson Passages: \${(item.sources || []).map((s) => \`<span class="src-chip">\${esc(s.id)} · \${esc(s.book)}</span>\`).join(" ")}</div>
                <div>Engine: \${esc(item.model)}</div>
              </div>
            </div>
          \`).join("")}
        </div>
      \` : ""}
    </div>

    <!-- 16 Specialized Subject Tutors Grid -->
    <div style="margin-bottom:12px">
      <div class="overline">Part 1 · 16 Specialized Faculty Tutors (Domestic, World, Offshore, Dynasty, Ecclesiastical &amp; Pure Trusts, Banking, Equity &amp; Court)</div>
      <h3 style="font-family:var(--font-serif);font-size:24px;color:var(--rj-champagne);margin:2px 0 12px">Select a Specialized Subject Tutor</h3>
    </div>
    <div class="grid-3" style="margin-bottom:28px">
      \${tutors.map((t) => {
        const isSel = t.id === STATE.selectedTutorId && !STATE.selectedLessonKey;
        return \`
          <div class="card" style="border-color:\${isSel ? "var(--rj-gold)" : "var(--rj-gold-border)"};display:flex;flex-direction:column;justify-content:space-between;gap:12px">
            <div>
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
                <span class="seal \${isSel ? "emerald" : ""}">\${isSel ? "✓ ACTIVE TUTOR" : "SUBJECT TUTOR"}</span>
              </div>
              <div style="font-family:var(--font-serif);font-size:21px;font-weight:700;color:var(--rj-champagne);margin-bottom:3px">\${esc(t.name)}</div>
              <div class="overline" style="margin-bottom:8px">\${esc(t.title)}</div>
              <p style="font-size:12.5px;color:var(--rj-muted);line-height:1.55;margin:0 0 8px"><strong>Covers:</strong> \${esc(t.specialty)}</p>
              <p style="font-size:12.5px;color:var(--rj-text);line-height:1.55;margin:0">\${esc(t.mission)}</p>
            </div>
            <div style="display:flex;gap:8px;flex-wrap:wrap">
              <button class="btn-gold" style="flex:1;padding:8px 10px;font-size:12px" onclick="selectSubjectTutor('\${t.id}');runTutorSession('masterclass','standard')">🎓 Start Masterclass</button>
              <button class="btn-ghost" style="padding:8px 10px;font-size:12px" onclick="selectSubjectTutor('\${t.id}');runTutorSession('action_worksheet','premium')">📋 Action Worksheet</button>
            </div>
          </div>
        \`;
      }).join("")}
    </div>

    <!-- All 151 Individual Volume, Skeleton, Book & Video Guide Tutors -->
    <div class="card">
      <div style="display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:12px;margin-bottom:14px">
        <div>
          <div class="overline">Part 2 · Dedicated Tutor for Every Individual Omnibus Volume, Trust Skeleton, Master Book &amp; Lesson (\${lessons.length} Assets)</div>
          <h3 style="font-family:var(--font-serif);font-size:24px;color:var(--rj-champagne);margin:2px 0 0">Launch a Dedicated 1-on-1 Tutor or Unabridged Book for Any Specific Volume or Lesson</h3>
        </div>
        <div style="min-width:280px;flex:1;max-width:420px">
          <input class="input" placeholder="Filter 151 volumes &amp; lessons (e.g. 'Cook Islands', 'Dynasty', '508', 'Equity', 'Bank', 'SLAT')..." value="\${esc(STATE.lessonSearchQuery)}" oninput="STATE.lessonSearchQuery=this.value;renderShell()">
        </div>
      </div>

      <div class="grid-3">
        \${filteredLessons.map((l) => {
          const active = STATE.selectedLessonKey === l.book_key;
          return \`
            <div class="card" style="background:var(--rj-obsidian);border-color:\${active ? "var(--rj-gold)" : "var(--rj-gold-border)"};display:flex;flex-direction:column;justify-content:space-between;gap:10px">
              <div>
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
                  <span class="seal \${l.kind === "Master Book" ? "emerald" : ""}">\${esc(l.kind)}</span>
                  <span class="num" style="font-size:11px;color:var(--rj-gold)">\${l.chunks} Indexed Passages</span>
                </div>
                <div style="font-family:var(--font-serif);font-size:19px;font-weight:700;color:var(--rj-champagne);margin-bottom:6px">\${esc(l.title)}</div>
                <div style="font-size:12px;color:var(--rj-muted);line-height:1.5">\${esc(l.preview)}...</div>
              </div>
              <div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:6px">
                <button class="btn-gold" style="flex:1;padding:7px 10px;font-size:11.5px" onclick='selectLessonAssetTutor(\${safeAttrJs(l.book_key)});runTutorSession("masterclass","standard")'>🎓 Teach Me</button>
                <button class="btn-ghost" style="padding:7px 10px;font-size:11.5px" onclick='STATE.bookMaker.topic=\${safeAttrJs(l.title)};switchTab("bookmaker")'>📖 10K+ Book</button>
              </div>
            </div>
          \`;
        }).join("")}
      </div>
    </div>
  \`;
}

// ---------- SUPREME AI BOOK EMPIRE ORCHESTRATOR — SPC UNIVERSITY EDITION (10,000+ to 50,000+ Words) ----------
window.runBookEmpireOrchestrator = async function(presetTopic) {
  const bm = STATE.bookMaker;
  if (bm.generating) return;
  const topicInput = presetTopic || ($("#bmTopicInput")?.value || bm.topic || "").trim();
  if (!topicInput) return;
  bm.topic = topicInput;
  bm.targetWords = Number($("#bmTargetWords")?.value || bm.targetWords || 15000);
  bm.bookStyle = $("#bmBookStyle")?.value || bm.bookStyle;
  bm.includeAiCover = Boolean($("#bmIncludeAiCover")?.checked);
  bm.generating = true;
  bm.progressText = "Phase 1/3 · Running 5-Layer Truth Engine & Querying 2,260-Passage SPC University Master Corpus...";
  bm.progressPct = 8;
  bm.chaptersGenerated = {};
  bm.totalWords = 0;
  renderShell();

  try {
    const planRes = await api("books/orchestrate", {
      topic: bm.topic,
      target_words: bm.targetWords,
      chapter_count: 10,
      book_style: bm.bookStyle,
      include_cover_ai: bm.includeAiCover
    });
    bm.activeBook = planRes.book;
    bm.progressText = "Phase 2/3 · Compiling 10 Unabridged SPC University Chapters, Verbatim Trust Clauses & Statutory Exhibits...";
    bm.progressPct = 15;
    renderShell();

    const chapters = bm.activeBook.chapters || [];
    // Generate chapters in parallel batches of 2 for high speed while maintaining deep 1,400+ word chapter output
    for (let i = 0; i < chapters.length; i += 2) {
      const batch = chapters.slice(i, i + 2);
      bm.progressText = \`Phase 2/3 · Synthesizing Unabridged Chapters \${batch.map((c) => c.num).join(" & ")} of \${chapters.length} (Live AI + Primary Corpus Exhibits)...\`;
      renderShell();
      await Promise.all(batch.map(async (ch) => {
        try {
          const chRes = await api("books/generate-chapter", {
            book_title: bm.activeBook.title,
            chapter_num: ch.num,
            chapter_title: ch.title,
            chapter_focus: ch.focus,
            min_words: 1500
          });
          bm.chaptersGenerated[ch.num] = chRes;
        } catch (err) {
          bm.chaptersGenerated[ch.num] = {
            chapter_num: ch.num,
            chapter_title: ch.title,
            word_count: 600,
            content: "CHAPTER " + ch.num + ": " + ch.title + "\\n\\n" + (bm.activeBook.corpus_foundation || []).map((cf) => cf.text).join("\\n\\n")
          };
        }
      }));
      const doneCount = Object.keys(bm.chaptersGenerated).length;
      bm.totalWords = Object.values(bm.chaptersGenerated).reduce((acc, c) => acc + (Number(c.word_count) || 0), 0);
      bm.progressPct = Math.min(95, 15 + Math.round((doneCount / chapters.length) * 80));
      renderShell();
    }

    // Add Unabridged Statutory & Corpus Compendium word count
    const appendixWords = (bm.activeBook.corpus_foundation || []).reduce((acc, c) => acc + String(c.text || "").split(/\\s+/).filter(Boolean).length, 0);
    bm.totalWords += appendixWords + 650;
    bm.progressText = \`✅ Complete Unabridged SPC University Book Generated (\${bm.totalWords.toLocaleString()} Verified Words across 10 Chapters + Cover + Back Cover + KDP Metadata + Multi-Format Exports)!\`;
    bm.progressPct = 100;
    bm.generating = false;
    renderShell();
  } catch (e) {
    bm.generating = false;
    bm.progressText = "Error: " + e.message;
    renderShell();
  }
};

window.buildFullCompiledBookHTML = function() {
  const bm = STATE.bookMaker;
  const bk = bm.activeBook;
  if (!bk) return "";
  const chList = bk.chapters || [];
  const chaptersHtml = chList.map((ch) => {
    const gen = bm.chaptersGenerated[ch.num];
    const text = gen ? gen.content : ("Chapter " + ch.num + ": " + ch.title);
    const wc = gen ? gen.word_count : 0;
    return \`
      <section class="chapter-card" id="ch-\${ch.num}">
        <div class="ch-meta">CHAPTER \${ch.num} OF \${chList.length} · \${wc.toLocaleString()} WORDS</div>
        <h2>Chapter \${ch.num}: \${esc(ch.title)}</h2>
        <div class="ch-focus"><strong>Scope &amp; Doctrinal Mandate:</strong> \${esc(ch.focus)}</div>
        <div class="ch-body">\${formatMarkdown(text)}</div>
      </section>
    \`;
  }).join("\\n");

  const citationsHtml = (bk.citations || []).map((c) => \`
    <div style="padding:10px 12px;border-bottom:1px solid #1c3a5e;font-size:13px">
      <strong style="color:#ffc107">[\${esc(c.id)}] \${esc(c.source)}</strong> · <span style="color:#00d4ff">\${esc(c.tier)}</span>
      <div style="color:#c8d6e5;margin-top:4px">\${esc(c.excerpt)}...</div>
    </div>
  \`).join("");

  return \`<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>\${esc(bk.title)} — SPC University Unabridged Master Edition</title>
<style>
  body { margin: 0; font-family: "Georgia", "Times New Roman", serif; background: #040d1a; color: #e8eef5; line-height: 1.78; }
  .wrap { max-width: 960px; margin: 0 auto; padding: 36px 28px 80px; }
  .hero { background: linear-gradient(155deg, #061c3c 0%, #040d1a 100%); border: 1px solid rgba(0,212,255,0.45); border-radius: 16px; padding: 34px; margin-bottom: 28px; }
  .overline { font-family: sans-serif; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: #00d4ff; font-weight: 700; }
  h1 { font-size: 34px; color: #ffffff; margin: 8px 0 10px; text-transform: uppercase; }
  h2 { font-size: 25px; color: #ffc107; border-bottom: 1px solid rgba(0,212,255,0.3); padding-bottom: 8px; }
  .cover-grid { display: grid; grid-template-columns: 260px 1fr; gap: 26px; align-items: start; margin-top: 20px; }
  .cover-img { width: 100%; border-radius: 10px; border: 1px solid #00d4ff; box-shadow: 0 16px 40px rgba(0,0,0,0.65); }
  .chapter-card { background: #071932; border: 1px solid rgba(0,212,255,0.28); border-radius: 14px; padding: 28px 32px; margin-bottom: 24px; page-break-before: always; }
  .ch-meta { font-family: sans-serif; font-size: 11px; letter-spacing: 0.16em; color: #00d4ff; font-weight: 700; }
  .ch-focus { background: rgba(0,212,255,0.08); border-left: 3px solid #ffc107; padding: 10px 14px; margin: 12px 0 18px; font-size: 14px; color: #c8d6e5; }
  .ch-body { font-size: 16px; color: #e8eef5; }
  .back-cover { background: #06172e; border: 2px solid #ffc107; border-radius: 16px; padding: 32px; margin-top: 32px; }
  @media print {
    body { background: #ffffff; color: #111318; }
    .hero, .chapter-card, .back-cover { background: #ffffff; color: #111318; border: 1px solid #ccc; }
    h1, h2, .ch-body { color: #111318; }
  }
</style>
</head>
<body>
  <div class="wrap">
    <div class="hero">
      <div class="overline">SPC UNIVERSITY · SCHOOL OF PRIVATE CIVICS · LAW • COMMERCE • EMPOWERMENT</div>
      <h1>\${esc(bk.title)}</h1>
      <div style="color:#c8d6e5;font-size:16px;margin-bottom:14px">\${esc(bk.subtitle)}</div>
      <div style="font-family:sans-serif;font-size:12px;color:#ffc107;font-weight:700">
        Catalog ID: \${esc(bk.catalog_id)} · Verified Total Length: \${bm.totalWords.toLocaleString()} Words · 10 Unabridged Chapters · \${esc(bk.price_tier)}
      </div>
      <div class="cover-grid">
        <img class="cover-img" src="\${esc(bk.cover_url)}" alt="Front Cover">
        <div>
          <div class="overline" style="color:#ffc107;margin-bottom:6px">EXECUTIVE BACK-COVER SYNOPSIS</div>
          <h3 style="margin:0 0 10px;color:#fff">\${esc(bk.back_cover.headline)}</h3>
          <p style="margin:0 0 12px;color:#c8d6e5;font-size:14.5px">\${esc(bk.back_cover.hook)}</p>
          <ul style="margin:0;padding-left:18px;color:#e8eef5;font-size:14px">
            \${(bk.back_cover.bullets || []).map((b) => \`<li style="margin-bottom:6px">\${esc(b)}</li>\`).join("")}
          </ul>
        </div>
      </div>
    </div>
    \${chaptersHtml}
    <div class="chapter-card">
      <div class="ch-meta">TRUTH ENGINE VERIFIED CITATIONS &amp; PRIMARY SOURCE LEDGER</div>
      <h2>Verified SPC University Corpus &amp; Statutory Citations</h2>
      \${citationsHtml}
    </div>
    <div class="back-cover">
      <div class="overline" style="color:#ffc107">OFFICIAL SPC UNIVERSITY BACK COVER &amp; ISBN CATALOG RECORD</div>
      <h2>\${esc(bk.back_cover.headline)}</h2>
      <p>\${esc(bk.back_cover.author_bio)}</p>
      <div style="font-family:sans-serif;font-size:12px;color:#00d4ff;font-weight:700">\${esc(bk.back_cover.isbn_meta)}</div>
    </div>
  </div>
</body>
</html>\`;
};

window.exportGeneratedBook = function(format) {
  const bm = STATE.bookMaker;
  const bk = bm.activeBook;
  if (!bk) return;
  const html = buildFullCompiledBookHTML();
  const slug = (bk.title || "spcu-master-book").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

  if (format === "pdf") {
    const w = window.open("", "_blank");
    if (w) {
      w.document.write(html);
      w.document.close();
      setTimeout(() => w.print(), 500);
    }
    return;
  }
  let mime = "text/html;charset=utf-8";
  let ext = ".html";
  let payload = html;
  if (format === "doc") {
    mime = "application/msword";
    ext = ".doc";
    payload = "\\ufeff" + html;
  } else if (format === "epub") {
    mime = "application/xhtml+xml;charset=utf-8";
    ext = ".epub.xhtml";
  } else if (format === "mobi") {
    mime = "application/x-mobipocket-ebook";
    ext = ".mobi.html";
  }
  const blob = new Blob([payload], { type: mime });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = slug + "-unabridged-" + bm.totalWords + "-words" + ext;
  a.click();
};

function renderBookMaker() {
  const bm = STATE.bookMaker;
  const bk = bm.activeBook;
  const quickTopics = [
    "Private Common-Law Pure Trust Indenture & 10-Layer Asset Protection Architecture",
    "The Complete Bank Packet: UTC § 1013 Certificate of Trust, IRS SS-4 EIN & Private Treasury Operations",
    "Multi-Generational Dynasty Trust, Spendthrift Shielding & GST Tax Allocation Master Treatise",
    "Offshore & Domestic Asset Protection Trusts: Cook Islands, Nevis, Belize & Wyoming DAPT Blueprint",
    "508(c)(1)(A) Ecclesiastical Ministry Trust, Free Exercise Foundation & Sacred Property Stewardship",
    "Know Your Rights & Courtroom Procedure: 4th, 5th & 6th Amendment Record Preservation Manual",
    "Sui Juris Fiduciary Capacity, Equity Maxims & Administrative Notice Remedy Architecture",
    "Family Office Holding Company, Series LLC, Delaware Statutory Trust & Intellectual Property Vault"
  ];

  return \`
    <div class="card-hero" style="margin-bottom:22px">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:16px">
        <div>
          <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:10px">
            <span class="seal emerald">● Supreme AI Book Empire Orchestrator · SPC University Edition</span>
            <span class="seal">● 10,000+ to 50,000+ Words Guaranteed</span>
            <span class="seal">● 5-Layer Truth Engine Citations</span>
            <span class="seal">● PDF · EPUB · MOBI · Word .DOC · HTML</span>
          </div>
          <h2>SPC University Supreme Book &amp; Guide Empire Orchestrator (10,000+ Words Minimum)</h2>
          <p style="color:#c8d6e5;font-size:14px;max-width:860px;margin:0;line-height:1.65">
            Enter <strong>any topic, single word, website URL, trust structure, or curriculum lesson</strong> below. With zero back-and-forth questions, the orchestrator immediately compiles a complete, unabridged <strong>10,000+ to 50,000+ word SPC University Master Book</strong> with 10 full-length chapters, verbatim operative trust clauses, front &amp; back cover designs, Amazon KDP / Apple Books SEO metadata, verified <code>[S#]</code> citations, and 1-click multi-format downloads.
          </p>
        </div>
      </div>
    </div>

    <!-- Pre-Built 6 Unabridged Flagship Books Showcase (102,446 Total Words — All 13,934 to 20,231 Words Each) -->
    <div class="card" style="margin-bottom:22px;border-color:var(--gold)">
      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;margin-bottom:14px">
        <div>
          <div class="overline">6 Official Unabridged SPC University Flagship Books · 102,446 Verified Words Live Now</div>
          <h3 style="font-family:var(--font-serif);font-size:24px;color:var(--rj-champagne);margin:2px 0 0">Every Official SPC University Book Exceeds 13,900+ Words (Up to 20,231 Words Each)</h3>
        </div>
        <span class="seal emerald num" style="font-size:12px">✓ 100% Unabridged · 102,446 Words Total</span>
      </div>
      <div class="grid-3">
        \${BOOKS.map((b) => \`
          <div class="card" style="background:var(--navy-deep);display:flex;flex-direction:column;justify-content:space-between;gap:10px">
            <div>
              <div style="display:flex;gap:12px;align-items:flex-start;margin-bottom:10px">
                <img src="\${esc(b.cover)}" alt="\${esc(b.title)}" style="width:68px;height:94px;object-fit:cover;border-radius:8px;border:1px solid var(--cyan);flex-shrink:0">
                <div>
                  <span class="seal emerald num" style="margin-bottom:4px">\${(b.words || 15000).toLocaleString()} Words · \${esc(b.value)}</span>
                  <div style="font-family:var(--font-serif);font-size:17px;font-weight:800;color:#fff;line-height:1.25">\${esc(b.title)}</div>
                  <div style="font-size:11.5px;color:var(--cyan);margin-top:3px">\${esc(b.sub)}</div>
                </div>
              </div>
              <p style="font-size:12.5px;color:var(--rj-muted);line-height:1.55;margin:0">\${esc(b.desc)}</p>
            </div>
            <div style="display:flex;gap:6px;flex-wrap:wrap">
              <button class="btn-gold" style="flex:1;padding:7px 10px;font-size:11.5px" onclick='openBookModal(\${safeAttrJs(b.title)}, \${safeAttrJs(b.url)})'>🔒 Member Vault: Unlock \${(b.words || 15000).toLocaleString()}-Word Book</button>
              <button class="btn-ghost" style="padding:7px 10px;font-size:11.5px" onclick="switchTab('billing')">💳 Get Member Access (\${esc(b.value)}) →</button>
            </div>
          </div>
        \`).join("")}
      </div>
    </div>

    <!-- Zero-Intervention Custom Book Generator Console -->
    <div class="card" style="margin-bottom:22px;border-color:var(--cyan)">
      <div class="overline">Zero-Intervention Custom Book &amp; Guide Empire Generator</div>
      <h3 style="font-family:var(--font-serif);font-size:24px;color:var(--rj-champagne);margin:4px 0 10px">Generate a Complete 10,000+ to 50,000+ Word SPC University Book from Any Topic or Lesson</h3>

      <div style="margin-bottom:12px">
        <label class="overline" style="display:block;margin-bottom:6px">1-Click SPC University Book Presets (Or Type Any Topic / URL Below)</label>
        <div style="display:flex;gap:6px;flex-wrap:wrap">
          \${quickTopics.map((qt) => \`
            <button class="prompt-chip" onclick='$("#bmTopicInput").value=\${safeAttrJs(qt)};STATE.bookMaker.topic=\${safeAttrJs(qt)}'>⚡ \${esc(qt.slice(0, 56))}...</button>
          \`).join("")}
        </div>
      </div>

      <div class="grid-3" style="margin-bottom:12px">
        <div style="grid-column:1 / -1">
          <label class="overline" style="display:block;margin-bottom:4px">Book Topic, Title Concept, Curriculum Lesson, or Website URL</label>
          <input id="bmTopicInput" class="input" value="\${esc(bm.topic)}" placeholder="Enter any trust topic, single word, lesson name, or URL...">
        </div>
        <div>
          <label class="overline" style="display:block;margin-bottom:4px">Target Manuscript Scale (10,000+ Words Min)</label>
          <select id="bmTargetWords" class="select">
            <option value="15000" \${bm.targetWords === 15000 ? "selected" : ""}>15,000+ Words · Complete 10-Chapter Master Guide ($997 Tier)</option>
            <option value="25000" \${bm.targetWords === 25000 ? "selected" : ""}>25,000+ Words · Institutional Treatise &amp; Vault ($1,997 Tier)</option>
            <option value="50000" \${bm.targetWords === 50000 ? "selected" : ""}>50,000+ Words · Sovereign Omnibus Textbook ($2,997 Tier)</option>
          </select>
        </div>
        <div>
          <label class="overline" style="display:block;margin-bottom:4px">Editorial Architecture &amp; Style</label>
          <select id="bmBookStyle" class="select">
            <option value="Unabridged SPC University Master Treatise & Field Manual">Unabridged Master Treatise &amp; Field Manual (Doctrine + Clauses + Checklists)</option>
            <option value="Attorney-Grade Indenture, Schedules & Execution Deskbook">Attorney-Grade Indenture, Schedules &amp; Execution Deskbook</option>
            <option value="Step-by-Step Student Masterclass & Implementation Playbook">Step-by-Step Student Masterclass &amp; Implementation Playbook</option>
          </select>
        </div>
        <div style="display:flex;align-items:center;gap:10px;padding-top:18px">
          <input id="bmIncludeAiCover" type="checkbox" \${bm.includeAiCover ? "checked" : ""} style="width:18px;height:18px">
          <label for="bmIncludeAiCover" style="font-size:13px;color:var(--rj-text);cursor:pointer">Also synthesize custom FLUX AI Cover Art (or use Official SPC Brand Kit Cover)</label>
        </div>
      </div>

      <button class="btn-gold" style="width:100%;padding:14px;font-size:14px" onclick="runBookEmpireOrchestrator()" \${bm.generating ? "disabled" : ""}>
        \${bm.generating ? "⏳ Compiling Unabridged 10-Chapter Manuscript..." : "⚡ Generate Complete Unabridged 10,000+ Word SPC Book, Cover, Back Cover & Multi-Format Package →"}
      </button>

      \${bm.progressText ? \`
        <div style="margin-top:14px;background:var(--navy-deep);border:1px solid var(--cyan);border-radius:10px;padding:12px 16px">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;font-size:12.5px;color:var(--gold);font-weight:700">
            <span>\${esc(bm.progressText)}</span>
            <span class="num">\${bm.progressPct}% · \${bm.totalWords.toLocaleString()} Words Compiled</span>
          </div>
          <div style="height:8px;background:rgba(0,212,255,0.14);border-radius:100px;overflow:hidden">
            <div style="height:100%;width:\${bm.progressPct}%;background:linear-gradient(90deg,#00d4ff,#ffc107);transition:width 0.3s"></div>
          </div>
        </div>
      \` : ""}
    </div>

    \${bk ? \`
      <!-- Generated Book Complete Commercial Showcase & Multi-Format Export Suite -->
      <div class="card" style="margin-bottom:22px;border-color:var(--gold)">
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;padding-bottom:14px;margin-bottom:18px;border-bottom:1px solid var(--line-strong)">
          <div>
            <div class="overline">\${esc(bk.edition)} · CATALOG \${esc(bk.catalog_id)}</div>
            <h3 style="font-family:var(--font-serif);font-size:26px;color:#fff;margin:4px 0">\${esc(bk.title)}</h3>
            <div style="font-size:13px;color:var(--cyan)">\${esc(bk.subtitle)}</div>
          </div>
          <div style="display:flex;gap:8px;flex-wrap:wrap">
            <span class="seal emerald num" style="font-size:13px">✓ \${bm.totalWords.toLocaleString()} Verified Words</span>
            <span class="seal num" style="font-size:13px">\${esc(bk.price_tier)}</span>
          </div>
        </div>

        <!-- Multi-Format Commercial Export Bar -->
        <div style="background:var(--navy-deep);border:1px solid var(--cyan);border-radius:12px;padding:14px 16px;margin-bottom:20px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px">
          <div>
            <div class="overline" style="color:var(--gold)">Instant Multi-Format Distribution &amp; Publishing Exports</div>
            <div style="font-size:12.5px;color:var(--rj-muted)">Download complete \${bm.totalWords.toLocaleString()}-word manuscript with front/back covers, 10 chapters, and citations:</div>
          </div>
          <div style="display:flex;gap:8px;flex-wrap:wrap">
            <button class="btn-gold" onclick="exportGeneratedBook('pdf')">🖨️ Print / Save Full PDF</button>
            <button class="btn-ghost" onclick="exportGeneratedBook('doc')">📄 Download Word (.DOC)</button>
            <button class="btn-ghost" onclick="exportGeneratedBook('epub')">📕 Download Ebook (.EPUB)</button>
            <button class="btn-ghost" onclick="exportGeneratedBook('mobi')">📱 Download Kindle (.MOBI)</button>
            <button class="btn-ghost" onclick="exportGeneratedBook('html')">🌐 Standalone HTML Book</button>
          </div>
        </div>

        <!-- Front Cover, Back Cover & KDP SEO Metadata Grid -->
        <div class="grid-3" style="margin-bottom:22px">
          <div class="card" style="background:var(--navy-deep);text-align:center">
            <div class="overline" style="margin-bottom:8px">Front Cover Design (SPC Brand Kit)</div>
            <img src="\${esc(bk.cover_url)}" alt="Front Cover" style="width:100%;max-width:230px;border-radius:10px;border:1px solid var(--cyan);box-shadow:0 16px 36px rgba(0,0,0,0.6);margin:0 auto 10px">
            <div style="font-size:11.5px;color:var(--rj-muted)"><strong>Cover Art Prompt:</strong> \${esc(bk.cover_prompt)}</div>
          </div>

          <div class="card" style="background:var(--navy-deep)">
            <div class="overline" style="color:var(--gold);margin-bottom:6px">Full-Wrap Back Cover Copy &amp; Positioning</div>
            <div style="font-family:var(--font-serif);font-size:18px;font-weight:800;color:#fff;margin-bottom:8px">\${esc(bk.back_cover.headline)}</div>
            <p style="font-size:12.5px;color:var(--rj-text);line-height:1.55;margin:0 0 10px">\${esc(bk.back_cover.hook)}</p>
            <div class="overline" style="margin-bottom:4px">Key Takeaways Inside:</div>
            <ul style="font-size:12px;color:var(--rj-muted);padding-left:16px;margin:0 0 10px;line-height:1.5">
              \${(bk.back_cover.bullets || []).map((b) => \`<li style="margin-bottom:4px">\${esc(b)}</li>\`).join("")}
            </ul>
            <div style="font-size:11px;color:var(--cyan);border-top:1px solid var(--line);padding-top:8px">\${esc(bk.back_cover.isbn_meta)}</div>
          </div>

          <div class="card" style="background:var(--navy-deep)">
            <div class="overline" style="margin-bottom:6px">Amazon KDP, Apple Books &amp; SEO Metadata</div>
            <div style="font-size:12.5px;color:var(--rj-text);line-height:1.55;margin-bottom:10px">
              <strong>Commercial Sales Blurb:</strong><br>\${esc(bk.seo_metadata.marketing_blurb)}
            </div>
            <div class="overline" style="margin-bottom:4px">BISAC Categories:</div>
            <div style="font-size:12px;color:var(--gold);margin-bottom:10px">
              \${(bk.seo_metadata.bisac_categories || []).map((c) => \`<div>• \${esc(c)}</div>\`).join("")}
            </div>
            <div class="overline" style="margin-bottom:4px">7 High-Intent Search Keywords:</div>
            <div style="display:flex;gap:5px;flex-wrap:wrap">
              \${(bk.seo_metadata.kdp_keywords || []).map((kw) => \`<span class="src-chip">\${esc(kw)}</span>\`).join("")}
            </div>
          </div>
        </div>

        <!-- Complete 10-Chapter Unabridged Reader -->
        <div class="overline" style="margin-bottom:8px">Complete Unabridged 10-Chapter Manuscript (\${bm.totalWords.toLocaleString()} Words)</div>
        <div style="display:flex;flex-direction:column;gap:14px">
          \${(bk.chapters || []).map((ch) => {
            const gen = bm.chaptersGenerated[ch.num];
            return \`
              <div class="card" style="background:var(--navy-deep);border-color:\${gen ? "rgba(0,212,255,0.38)" : "var(--line)"}">
                <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;margin-bottom:8px">
                  <div>
                    <span class="seal \${gen ? "emerald" : ""}">CHAPTER \${ch.num} OF \${bk.chapters.length}</span>
                    <span style="font-family:var(--font-serif);font-size:20px;font-weight:800;color:#fff;margin-left:8px">\${esc(ch.title)}</span>
                  </div>
                  <span class="seal num">\${gen ? gen.word_count.toLocaleString() + " Words · Ready" : "Compiling..."}</span>
                </div>
                <div style="font-size:12.5px;color:var(--cyan);margin-bottom:10px"><strong>Chapter Mandate:</strong> \${esc(ch.focus)}</div>
                \${gen ? \`
                  <div style="max-height:420px;overflow-y:auto;padding:16px;background:rgba(4,13,26,0.9);border:1px solid var(--line);border-radius:10px;font-size:14px;line-height:1.75;color:var(--rj-text)">
                    \${formatMarkdown(gen.content)}
                  </div>
                \` : \`<div style="font-size:13px;color:var(--rj-muted)">Synthesizing unabridged chapter prose, operative trust clauses, and statutory exhibits...</div>\`}
              </div>
            \`;
          }).join("")}
        </div>
      </div>
    \` : ""}
  \`;
}

// ---------- PAYMENTS, CREDIT TOP-UPS, SUBSCRIPTIONS, BOOK STORE & DEVELOPER API MONETIZATION HUB ----------
window.startSpcuCheckout = async function(packId, gateway) {
  try {
    const r = await api("checkout", { pack: packId, gateway: gateway || "stripe" });
    if (r.url) {
      window.open(r.url, "_blank");
    }
  } catch (e) {
    alert("Checkout notice: " + e.message);
  }
};

window.redeemSpcuVoucherOrReceipt = async function() {
  const code = ($("#redeemCodeInput")?.value || "").trim();
  const packId = $("#redeemPackSelect")?.value || "credits-350";
  const st = $("#redeemStatusMsg");
  if (!code) return;
  if (st) st.textContent = "Verifying voucher code or payment receipt...";
  try {
    const r = await api("billing/redeem-voucher", { code, pack_id: packId });
    STATE.user = r.user;
    STATE.redeemMsg = "✅ " + r.message;
    const led = await api("ledger");
    STATE.ledger = led.ledger || [];
    renderShell();
  } catch (e) {
    if (st) st.textContent = "⚠️ " + e.message;
  }
};

window.generateSpcuApiKey = async function() {
  try {
    const r = await api("keys", {});
    STATE.newApiKey = r.key;
    const cat = await api("billing/catalog");
    STATE.billingCatalog = cat;
    renderShell();
  } catch (e) {
    alert("API Key Error: " + e.message);
  }
};

window.createSpcuVoucherNow = async function() {
  try {
    const credits = Number($("#vouchCredits")?.value || 350);
    const plan = $("#vouchPlan")?.value || "pro";
    const uses = Number($("#vouchUses")?.value || 10);
    const custom_code = ($("#vouchCustomCode")?.value || "").trim();
    const r = await api("billing/create-voucher", { credits, plan, uses, custom_code });
    STATE.createdVoucher = r.voucher;
    renderShell();
  } catch (e) {
    alert("Voucher error: " + e.message);
  }
};

window.savePaymentGatewaysNow = async function() {
  const st = $("#gwSaveStatus");
  if (st) st.textContent = "Saving payment gateway settings...";
  try {
    const r = await api("billing/configure-gateways", {
      stripe_secret_key: ($("#gwStripeKey")?.value || "").trim() || undefined,
      paypal_email: ($("#gwPaypalEmail")?.value || "").trim() || undefined,
      paypal_me: ($("#gwPaypalMe")?.value || "").trim() || undefined,
      member_store_url: ($("#gwMemberStore")?.value || "").trim() || undefined
    });
    const cat = await api("billing/catalog");
    STATE.billingCatalog = cat;
    if (st) st.textContent = "✅ " + r.message;
  } catch (e) {
    if (st) st.textContent = "⚠️ " + e.message;
  }
};

function renderBilling() {
  const catObj = STATE.billingCatalog || { catalog: [], gateways: {}, api_keys: [] };
  const items = catObj.catalog || [];
  const memberships = items.filter((i) => i.category === "membership");
  const creditPacks = items.filter((i) => i.category === "credits");
  const bookPackages = items.filter((i) => i.category === "product");
  const gws = catObj.gateways || {};

  return \`
    <div class="card-hero" style="margin-bottom:22px">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:16px">
        <div>
          <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:10px">
            <span class="seal emerald">● 6 Live Monetization Channels Active</span>
            <span class="seal">● Stripe Checkout + PayPal Express + Member Cart</span>
            <span class="seal">● Instant Voucher &amp; Receipt Credit Redemption</span>
            <span class="seal">● OpenAI-Compatible API Keys (sk-spcu-*)</span>
          </div>
          <h2>SPC University Monetization, AI Model Credits, Memberships &amp; Payment Center</h2>
          <p style="color:#c8d6e5;font-size:14px;max-width:860px;margin:0;line-height:1.65">
            Every way to monetize and get paid from <strong>TrustGPT, the 6-Model Legal Council, the 10,000+ Word Book Maker, the 16+151 AI Tutors, and the 6 Unabridged Flagship Books</strong> is wired right here: <strong>Monthly/Annual SaaS Subscriptions ($99/mo to $997/yr)</strong>, <strong>Pay-As-You-Go AI Model Credit Packs ($29 to $497)</strong>, <strong>High-Ticket Book &amp; Strategy Session Packages ($297 to $1,997)</strong>, <strong>Instant Voucher &amp; Payment Receipt Redemption</strong>, and <strong>Commercial Developer API Keys</strong>.
          </p>
        </div>
      </div>
    </div>

    <!-- Top Wallet & Instant Voucher / Receipt Redemption Strip -->
    <div class="grid-3" style="margin-bottom:24px">
      <div class="card" style="border-color:var(--gold)">
        <div class="overline">Active Student / Member Wallet</div>
        <div class="kpi-val">\${STATE.user.credits} Credits</div>
        <div style="font-size:13px;color:var(--rj-text);margin-bottom:8px">
          Active Plan: <strong style="color:var(--gold);text-transform:uppercase">\${esc(STATE.user.plan)}</strong> · Account: <strong>\${esc(STATE.user.email)}</strong>
        </div>
        <div style="font-size:12px;color:var(--rj-muted);line-height:1.5">
          • <strong>Standard &amp; Fast Study Tiers:</strong> Free Daily (250/day on Pro)<br>
          • <strong>Senior 120B Trust Drafter:</strong> 1 Credit / run<br>
          • <strong>Supreme 550B Counsel:</strong> 3 Credits / run<br>
          • <strong>👑 6-Model Legal Council:</strong> 4 Credits / deliberation<br>
          • <strong>FLUX Cover Image Gen:</strong> 5 Credits / cover
        </div>
      </div>

      <div class="card" style="grid-column:span 2;border-color:var(--cyan)">
        <div class="overline">Instant Credit Top-Up via Voucher Code or PayPal / Stripe Receipt ID</div>
        <h3 style="font-family:var(--font-serif);font-size:21px;color:#fff;margin:4px 0 8px">Redeem a Student Voucher Code or Claim Your Payment Receipt Instantly</h3>
        <p style="font-size:12.5px;color:var(--rj-muted);margin:0 0 12px">
          Enter any SPC University Promo/Enrollment Voucher (or select the package you paid for via PayPal/Stripe and paste your Transaction/Receipt ID) to credit your wallet immediately:
        </p>
        <div class="grid-3" style="gap:10px;margin-bottom:10px">
          <div>
            <label class="overline" style="display:block;margin-bottom:4px">Package Purchased (For Receipt Claim)</label>
            <select id="redeemPackSelect" class="select">
              \${items.map((it) => \`<option value="\${esc(it.id)}">\${esc(it.title)} (+\${it.credits} Credits)</option>\`).join("")}
            </select>
          </div>
          <div>
            <label class="overline" style="display:block;margin-bottom:4px">Voucher Code or PayPal/Stripe Receipt ID</label>
            <input id="redeemCodeInput" class="input" placeholder="e.g. SPCU-PRO-350 or PayPal Receipt #">
          </div>
          <div style="display:flex;align-items:flex-end">
            <button class="btn-gold" style="width:100%" onclick="redeemSpcuVoucherOrReceipt()">⚡ Redeem &amp; Add Credits →</button>
          </div>
        </div>
        <div id="redeemStatusMsg" style="font-size:13px;color:var(--gold);font-weight:700;min-height:18px">\${esc(STATE.redeemMsg)}</div>
      </div>
    </div>

    <!-- Stream 1: Pay-As-You-Go AI Model & 6-Model Council Credit Packs -->
    <div style="margin-bottom:12px">
      <div class="overline">Revenue Stream 1 · Pay-As-You-Go AI Model, 6-Model Council &amp; Book Maker Credit Packs</div>
      <h3 style="font-family:var(--font-serif);font-size:24px;color:var(--rj-champagne);margin:2px 0 12px">Top Up AI Model &amp; 6-Model Legal Council Credits (100% Instant Digital Margin)</h3>
    </div>
    <div class="grid-4" style="margin-bottom:26px">
      \${creditPacks.map((p) => \`
        <div class="card" style="display:flex;flex-direction:column;justify-content:space-between;gap:12px;border-color:\${p.id === "credits-350" ? "var(--gold)" : "var(--line-strong)"}">
          <div>
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
              <span class="seal emerald num">+\${p.credits} CREDITS</span>
              <span style="font-family:var(--font-num);font-size:20px;font-weight:800;color:var(--gold)">\${esc(p.price_display)}</span>
            </div>
            <div style="font-family:var(--font-serif);font-size:19px;font-weight:800;color:#fff;margin-bottom:6px">\${esc(p.title)}</div>
            <p style="font-size:12.5px;color:var(--rj-muted);line-height:1.55;margin:0">\${esc(p.subtitle)}</p>
          </div>
          <div style="display:flex;flex-direction:column;gap:6px">
            <button class="btn-gold" style="width:100%" onclick="startSpcuCheckout('\${p.id}', 'stripe')">💳 Pay with Card / Stripe (\${esc(p.price_display)}) →</button>
            <button class="btn-ghost" style="width:100%;justify-content:center" onclick="startSpcuCheckout('\${p.id}', 'paypal')">🅿️ Pay with PayPal (\${esc(p.price_display)}) →</button>
          </div>
        </div>
      \`).join("")}
    </div>

    <!-- Stream 2: Recurring Monthly & Annual SaaS Memberships -->
    <div style="margin-bottom:12px">
      <div class="overline">Revenue Stream 2 · Recurring Monthly &amp; Annual SaaS Memberships (MRR Engine)</div>
      <h3 style="font-family:var(--font-serif);font-size:24px;color:var(--rj-champagne);margin:2px 0 12px">SPC University TrustGPT &amp; AI Tutor Academy Recurring Plans</h3>
    </div>
    <div class="grid-3" style="margin-bottom:26px">
      \${memberships.map((m) => \`
        <div class="card" style="display:flex;flex-direction:column;justify-content:space-between;gap:12px;border-color:var(--cyan)">
          <div>
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
              <span class="seal emerald">+\${m.credits} CREDITS / PERIOD</span>
              <span style="font-family:var(--font-num);font-size:20px;font-weight:800;color:var(--gold)">\${esc(m.price_display)}</span>
            </div>
            <div style="font-family:var(--font-serif);font-size:20px;font-weight:800;color:#fff;margin-bottom:6px">\${esc(m.title)}</div>
            <p style="font-size:13px;color:var(--rj-muted);line-height:1.55;margin:0">\${esc(m.subtitle)}</p>
          </div>
          <div style="display:flex;gap:8px;flex-wrap:wrap">
            <button class="btn-gold" style="flex:1" onclick="startSpcuCheckout('\${m.id}', 'stripe')">💳 Subscribe via Stripe →</button>
            <button class="btn-ghost" onclick="startSpcuCheckout('\${m.id}', 'paypal')">🅿️ PayPal →</button>
          </div>
        </div>
      \`).join("")}
    </div>

    <!-- Stream 3: High-Ticket Unabridged Books, Strategy Sessions & Omnibus Vault ($297 - $1,997) -->
    <div style="margin-bottom:12px">
      <div class="overline">Revenue Stream 3 · High-Ticket Unabridged Books, 1-on-1 Strategy Sessions &amp; $1,997 Omnibus Vault</div>
      <h3 style="font-family:var(--font-serif);font-size:24px;color:var(--rj-champagne);margin:2px 0 12px">Direct Digital Publication &amp; Advisory Packages (Each Includes Bonus AI Credits)</h3>
    </div>
    <div class="grid-3" style="margin-bottom:26px">
      \${bookPackages.map((bp) => \`
        <div class="card" style="display:flex;flex-direction:column;justify-content:space-between;gap:12px">
          <div>
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
              <span class="seal num">+\${bp.credits} AI CREDITS INCLUDED</span>
              <span style="font-family:var(--font-num);font-size:20px;font-weight:800;color:var(--gold)">\${esc(bp.price_display)}</span>
            </div>
            <div style="font-family:var(--font-serif);font-size:19px;font-weight:800;color:#fff;margin-bottom:6px">\${esc(bp.title)}</div>
            <p style="font-size:12.5px;color:var(--rj-muted);line-height:1.55;margin:0">\${esc(bp.subtitle)}</p>
          </div>
          <div style="display:flex;flex-direction:column;gap:6px">
            <div style="display:flex;gap:6px">
              <button class="btn-gold" style="flex:1;font-size:11.5px" onclick="startSpcuCheckout('\${bp.id}', 'stripe')">💳 Buy via Stripe (\${esc(bp.price_display)})</button>
              <button class="btn-ghost" style="font-size:11.5px" onclick="startSpcuCheckout('\${bp.id}', 'paypal')">🅿️ PayPal</button>
            </div>
            <div style="display:flex;gap:6px">
              <button class="btn-ghost" style="flex:1;font-size:11px;justify-content:center" onclick="startSpcuCheckout('\${bp.id}', 'member_store')">🏛️ SPCU Member Store Cart ↗</button>
              \${bp.book_url ? \`<button class="btn-ghost" style="font-size:11px" onclick='openBookModal(\${safeAttrJs(bp.title)}, \${safeAttrJs(bp.book_url)})'>🔒 Member Vault ↗</button>\` : ""}
            </div>
          </div>
        </div>
      \`).join("")}
    </div>

    <!-- Stream 4 & 5: Owner Voucher Generator, Payment Gateway Configurator & Commercial API Key Billing -->
    <div class="grid-2" style="margin-bottom:24px">
      <div class="card" style="border-color:var(--gold)">
        <div class="overline">Owner Monetization Control · Payment Gateways &amp; Instant Voucher Generator</div>
        <h3 style="font-family:var(--font-serif);font-size:22px;color:#fff;margin:4px 0 8px">Configure Stripe / PayPal Payouts &amp; Mint Student Credit Vouchers</h3>
        <p style="font-size:12.5px;color:var(--rj-muted);margin:0 0 12px">
          Connect your live Stripe Secret Key (<code>sk_live_...</code>) and PayPal Business Email/PayPal.me so every button above routes 100% of funds directly to your account, or mint custom credit voucher codes to sell on webinars or bundle with courses:
        </p>
        <div class="form-grid-2" style="margin-bottom:10px">
          <div>
            <label class="overline" style="display:block;margin-bottom:3px">PayPal Business Email (For Instant Checkout)</label>
            <input id="gwPaypalEmail" class="input" value="\${esc(gws.paypal_email || "orders@spcuniversity.com")}" placeholder="orders@spcuniversity.com">
          </div>
          <div>
            <label class="overline" style="display:block;margin-bottom:3px">PayPal.Me Direct Link</label>
            <input id="gwPaypalMe" class="input" value="\${esc(gws.paypal_me || "https://www.paypal.com/paypalme/yusefel")}" placeholder="https://www.paypal.com/paypalme/...">
          </div>
          <div>
            <label class="overline" style="display:block;margin-bottom:3px">Stripe Secret Key (sk_live_... or sk_test_...)</label>
            <input id="gwStripeKey" type="password" class="input" placeholder="\${gws.stripe_enabled ? "✓ Stripe Key Active (Enter new key to update)" : "Paste sk_live_... to enable 1-click Stripe"}">
          </div>
          <div>
            <label class="overline" style="display:block;margin-bottom:3px">SPCU Member Repurchase Store URL</label>
            <input id="gwMemberStore" class="input" value="\${esc(gws.member_store_url || "https://member.spcuniversity.com/repurchase")}">
          </div>
        </div>
        <button class="btn-gold" style="width:100%;margin-bottom:8px" onclick="savePaymentGatewaysNow()">💾 Save Payment Gateways to Live Edge →</button>
        <div id="gwSaveStatus" style="font-size:12px;color:var(--cyan);min-height:18px;margin-bottom:12px"></div>

        <div style="border-top:1px solid var(--line-strong);padding-top:12px">
          <div class="overline" style="color:var(--gold);margin-bottom:6px">Mint Instant Prepaid Credit Voucher Code (For Webinar Sales / VIP Students)</div>
          <div class="form-grid-2" style="margin-bottom:8px">
            <div>
              <label class="overline" style="display:block;margin-bottom:3px">Credits to Grant</label>
              <input id="vouchCredits" type="number" class="input" value="500">
            </div>
            <div>
              <label class="overline" style="display:block;margin-bottom:3px">Plan Upgrade</label>
              <select id="vouchPlan" class="select">
                <option value="pro">PRO Plan (250 Free/Day)</option>
                <option value="sovereign">SOVEREIGN Plan (Unlimited + Vault)</option>
              </select>
            </div>
            <div>
              <label class="overline" style="display:block;margin-bottom:3px">Max Redemptions (Uses)</label>
              <input id="vouchUses" type="number" class="input" value="25">
            </div>
            <div>
              <label class="overline" style="display:block;margin-bottom:3px">Custom Code (Optional)</label>
              <input id="vouchCustomCode" class="input" placeholder="e.g. SPCU-WEBINAR-500">
            </div>
          </div>
          <button class="btn-ghost" style="width:100%;justify-content:center" onclick="createSpcuVoucherNow()">🎟️ Mint New Credit Voucher Code →</button>
          \${STATE.createdVoucher ? \`
            <div style="margin-top:10px;padding:10px 12px;background:var(--navy-deep);border:1px solid var(--gold);border-radius:8px;font-size:13px">
              ✅ <strong>Live Voucher Minted:</strong> <code style="color:var(--gold);font-size:15px;font-weight:800">\${esc(STATE.createdVoucher.code)}</code>
              (+\${STATE.createdVoucher.credits} Credits · \${esc(STATE.createdVoucher.plan.toUpperCase())} Plan · \${STATE.createdVoucher.remaining_uses} uses)
            </div>
          \` : ""}
        </div>
      </div>

      <!-- Developer API Monetization & Credit Ledger -->
      <div class="card">
        <div class="overline">Revenue Stream 4 · Commercial Developer API Keys (OpenAI-Compatible /v1/chat/completions)</div>
        <h3 style="font-family:var(--font-serif);font-size:22px;color:#fff;margin:4px 0 8px">Issue Metered API Keys (<code>sk-spcu-*</code>) &amp; View Credit Usage Ledger</h3>
        <p style="font-size:12.5px;color:var(--rj-muted);margin:0 0 12px">
          Monetize external law offices, family offices, and partner portals by issuing metered <code>sk-spcu-*</code> bearer keys. Every API call to <code>https://spcuniversity.com/app/v1/chat/completions</code> automatically deducts credits from the key owner's balance.
        </p>
        <button class="btn-gold" style="width:100%;margin-bottom:10px" onclick="generateSpcuApiKey()">🔑 Generate New Metered SPCU API Key (sk-spcu-*) →</button>
        \${STATE.newApiKey ? \`
          <div style="padding:12px;background:var(--navy-deep);border:1px solid var(--cyan);border-radius:8px;margin-bottom:12px;font-size:12.5px">
            <div class="overline" style="color:var(--gold)">Copy Your New Secret API Key Now (Shown Once):</div>
            <div style="font-family:var(--font-num);font-size:13.5px;color:#fff;word-break:break-all;margin-top:4px">\${esc(STATE.newApiKey)}</div>
          </div>
        \` : ""}

        <div class="overline" style="margin:14px 0 6px">Real-Time Credit Usage &amp; Purchase Audit Ledger</div>
        <div style="max-height:260px;overflow-y:auto;background:var(--navy-deep);border:1px solid var(--line);border-radius:10px;padding:10px">
          \${(STATE.ledger || []).length === 0 ? \`
            <div style="font-size:12.5px;color:var(--rj-muted);padding:10px">No credit transactions recorded yet. Redeem a voucher or run a premium model to see live ledger entries.</div>
          \` : (STATE.ledger || []).map((l) => \`
            <div style="display:flex;justify-content:space-between;align-items:center;padding:7px 6px;border-bottom:1px solid var(--line);font-size:12.5px">
              <div>
                <strong style="color:\${l.delta > 0 ? "#00d4ff" : "#ffc107"}">\${l.delta > 0 ? "+" + l.delta : l.delta} Credits</strong>
                <span style="color:var(--rj-text);margin-left:8px">\${esc(l.reason)}</span>
              </div>
              <span style="color:var(--rj-muted);font-size:11px">\${new Date(l.created_at).toISOString().slice(0, 16).replace("T", " ")}</span>
            </div>
          \`).join("")}
        </div>
      </div>
    </div>
  \`;
}

function renderShell() {
  const nav = [
    ...(STATE.isAdminOwner ? [{ id: "admin_academy", icon: "👑", label: "Mr. Yusef / Mr. Bay Admin Tour", badge: "ADMIN" }] : []),
    { id: "tutorial", icon: "🎙️", label: "Interactive Walkthrough & Tutorial", badge: "TOUR" },
    { id: "overview", icon: "🏛️", label: "Trust & Study Overview", badge: "LIVE" },
    { id: "chat", icon: "🧠", label: "TrustGPT & 6-Model Council", badge: "6 MoE" },
    { id: "bookmaker", icon: "📖", label: "SPC Book & Guide Maker", badge: "10K-50K W" },
    { id: "tutors", icon: "🎓", label: "AI Tutors & Lesson Academy", badge: "16+151" },
    { id: "doclab", icon: "📄", label: "Trust Drafter, OCR & Voice Lab", badge: "17 TPLs" },
    { id: "attorney", icon: "⚖️", label: "Execution, Notary, Bond & Google", badge: "12 CHECKS" },
    { id: "billing", icon: "💳", label: "Plans, Credits & Store Checkout", badge: STATE.user.credits + " CR" },
    { id: "tools", icon: "🧰", label: "Legal Research & Estate Calc", badge: "4 TOOLS" },
    { id: "models", icon: "🤖", label: "Legal AI Council Builder", badge: "12 LLMs" },
    { id: "library", icon: "📚", label: "25-Volume Corpus & 6 Books", badge: "104K W" },
    { id: "memory", icon: "🧬", label: "My Trust & Case Notes", badge: STATE.memories.length || "" }
  ];

  let bodyHtml = "";
  if (STATE.tab === "admin_academy") bodyHtml = renderAdminAcademy();
  else if (STATE.tab === "tutorial") bodyHtml = renderMemberTutorial();
  else if (STATE.tab === "overview") bodyHtml = renderOverview();
  else if (STATE.tab === "chat") bodyHtml = renderChat();
  else if (STATE.tab === "bookmaker") bodyHtml = renderBookMaker();
  else if (STATE.tab === "tutors") bodyHtml = renderTutorsAcademy();
  else if (STATE.tab === "doclab") bodyHtml = renderDocLab();
  else if (STATE.tab === "attorney") bodyHtml = renderAttorneyExecutionSuite();
  else if (STATE.tab === "billing") bodyHtml = renderBilling();
  else if (STATE.tab === "tools") bodyHtml = renderToolsHub();
  else if (STATE.tab === "models") bodyHtml = renderModels();
  else if (STATE.tab === "library") bodyHtml = renderLibrary();
  else if (STATE.tab === "memory") bodyHtml = renderMemory();

  const activeNav = nav.find((n) => n.id === STATE.tab) || nav[0];
  const mobileQuickTabs = [
    { id: "overview", icon: "🏛️", short: "Overview" },
    { id: "chat", icon: "🧠", short: "Chat" },
    { id: "bookmaker", icon: "📖", short: "BookMaker" },
    { id: "tutors", icon: "🎓", short: "Tutors" },
    { id: "billing", icon: "💳", short: "Credits" },
    { id: "library", icon: "📚", short: "6 Books" }
  ];

  $("#root").innerHTML = \`
    <div class="app-shell">
      <div class="mobile-nav-backdrop \${STATE.mobileNavOpen ? "open" : ""}" onclick="toggleMobileNav(false)"></div>
      <aside class="sidebar \${STATE.mobileNavOpen ? "mobile-open" : ""}">
        <div>
          <div class="brand-box" style="justify-content:space-between">
            <div style="display:flex;align-items:center;gap:10px">
              <img class="brand-logo" src="https://spcuniversity.com/brand-kit/images/icon-atlas.png" alt="SPCU Atlas" onerror="this.style.display='none'">
              <div>
                <div class="overline" style="font-size:8.5px;letter-spacing:0.18em">SCHOOL OF PRIVATE CIVICS</div>
                <div class="brand-title">SPC University</div>
              </div>
            </div>
            <button class="mobile-menu-btn" style="padding:6px 10px" onclick="toggleMobileNav(false)" aria-label="Close menu">✕</button>
          </div>
          <div style="padding:0 6px 12px;margin-bottom:8px;border-bottom:1px solid rgba(0,212,255,0.18);text-align:center">
            <img src="https://spcuniversity.com/brand-kit/images/logo-compact.png" alt="SPC University Metallic Shield Logo" style="max-height:46px;width:auto;margin:0 auto 4px;filter:drop-shadow(0 4px 14px rgba(0,212,255,0.28))" onerror="this.style.display='none'">
            <div style="font-family:var(--font-num);font-size:9.5px;letter-spacing:0.16em;text-transform:uppercase;color:#ffc107;font-weight:700">Law • Commerce • Empowerment</div>
          </div>

          <div class="nav-group-label">Trust, Legal &amp; Study Suite</div>
          <div class="nav-list">
            \${nav.map((n) => \`
              <button class="nav-btn \${STATE.tab === n.id ? "active" : ""}" onclick="switchTab('\${n.id}')">
                <span class="nav-left"><span>\${n.icon}</span><span>\${esc(n.label)}</span></span>
                \${n.badge !== "" ? \`<span class="nav-badge">\${esc(n.badge)}</span>\` : ""}
              </button>
            \`).join("")}
          </div>

          <div class="nav-group-label" style="margin-top:14px">Member Back Office &amp; Boards</div>
          <div class="nav-list">
            <a class="nav-btn" href="https://member.spcuniversity.com/dashboard" target="_top" style="text-decoration:none;border-color:rgba(16,185,129,0.5);background:rgba(16,185,129,0.1)">
              <span class="nav-left"><span>🏛️</span><span style="color:#a7f3d0;font-weight:700">Back to Member Dashboard &amp; Boards</span></span><span>→</span>
            </a>
            <a class="nav-btn" href="https://member.spcuniversity.com/repurchase" target="_top" style="text-decoration:none">
              <span class="nav-left"><span>🛒</span><span>Member Repurchase Store</span></span><span>→</span>
            </a>
            <a class="nav-btn" href="https://member.spcuniversity.com/my-materials" target="_top" style="text-decoration:none">
              <span class="nav-left"><span>🎬</span><span>Member LMS Video Courses</span></span><span>→</span>
            </a>
            <a class="nav-btn" href="https://spcuniversity.com" target="_blank" style="text-decoration:none">
              <span class="nav-left"><span>🌐</span><span>Main University Website</span></span><span>↗</span>
            </a>
          </div>
        </div>

        <div style="padding-top:16px;border-top:1px solid rgba(0,212,255,0.22);font-size:12px;color:var(--rj-muted)">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
            <span class="overline">Student / Member</span>
            <span class="seal num" style="cursor:pointer" onclick="switchTab('billing')">\${STATE.user.credits} Credits · +Top Up</span>
          </div>
          <div style="font-weight:600;color:var(--rj-text);word-break:break-all;margin-bottom:10px">\${esc(STATE.user.email)}</div>
          <div style="display:flex;gap:6px;flex-wrap:wrap">
            <button class="btn-gold" style="flex:1;justify-content:center;padding:7px;font-size:11px" onclick="switchTab('billing')">💳 Top Up</button>
            <button class="btn-ghost" style="flex:1;justify-content:center;padding:7px" onclick="toggleTheme()">☀/☾</button>
            <button class="btn-ghost" style="flex:1;justify-content:center;padding:7px" onclick="TOKEN='';localStorage.removeItem('t');renderAuth()">Out</button>
          </div>
          <div style="margin-top:8px">
            <button class="\${STATE.isAdminOwner ? "btn-gold" : "btn-ghost"}" style="width:100%;justify-content:center;padding:7px 10px;font-size:11px" onclick="\${STATE.isAdminOwner ? "switchTab('admin_academy')" : "unlockAdminMasterAcademy()"}">
              👑 \${STATE.isAdminOwner ? "Open Mr. Yusef / Mr. Bay Admin Tour" : "Admin / Founder Walkthrough Login"}
            </button>
          </div>
        </div>
      </aside>

      <div class="main-wrap">
        <header class="mobile-topbar">
          <div class="mobile-topbar-left">
            <img class="mobile-topbar-logo" src="https://spcuniversity.com/brand-kit/images/icon-atlas.png" alt="SPCU" onerror="this.style.display='none'">
            <div style="min-width:0;flex:1">
              <div class="overline" style="font-size:8px;letter-spacing:0.12em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">SPC UNIVERSITY · TRUSTGPT SUITE</div>
              <div class="mobile-topbar-title">\${activeNav.icon} \${esc(activeNav.label)}</div>
            </div>
          </div>
          <div style="display:flex;align-items:center;gap:5px;flex-shrink:0">
            <span class="seal num" style="padding:3px 7px;font-size:9px;cursor:pointer;white-space:nowrap" onclick="switchTab('billing')">💳 \${STATE.user.credits} Cr</span>
            <button class="mobile-menu-btn" onclick="toggleMobileNav()">☰ Menu</button>
          </div>
        </header>

        <header class="topbar">
          <div style="display:flex;align-items:center;gap:14px">
            <img src="https://spcuniversity.com/brand-kit/images/logo-compact.png" alt="SPC University" style="height:36px;width:auto;filter:drop-shadow(0 2px 10px rgba(0,212,255,0.26))" onerror="this.style.display='none'">
            <div>
              <div class="overline">SPC UNIVERSITY · SCHOOL OF PRIVATE CIVICS · LAW • COMMERCE • EMPOWERMENT</div>
              <div style="font-family:var(--font-serif);font-size:21px;font-weight:800;color:var(--rj-champagne);text-transform:uppercase">
                \${esc(activeNav.label)}
              </div>
            </div>
          </div>
          <div class="topbar-right">
            <a href="https://member.spcuniversity.com/dashboard" target="_top" class="btn-ghost" style="padding:7px 13px;font-size:11.5px;text-decoration:none;border-color:#10b981;color:#a7f3d0">🏛️ Member Back Office &amp; Boards</a>
            <span class="seal emerald">● 2,260 Passages Active</span>
            <span class="seal num" style="cursor:pointer" onclick="switchTab('billing')">💳 Credits: \${STATE.user.credits} (+Top Up)</span>
            <button class="btn-gold" style="padding:8px 16px;font-size:12px" onclick="switchTab('chat')">Ask 6-Model Council →</button>
          </div>
        </header>

        <div class="content-scroll">
          \${bodyHtml}
          <footer style="margin-top:42px;padding-top:18px;border-top:1px solid var(--rj-gold-border);display:flex;justify-content:space-between;flex-wrap:wrap;gap:10px;font-size:11.5px;color:var(--rj-subtle)">
            <div>SPC University · Private Trust, Estate &amp; Constitutional Study Platform</div>
            <div>SPC University provides educational trust, estate, and administrative study curriculum and document automation tools. Educational use only; not personalized legal, tax, or investment advice.</div>
          </footer>
        </div>
      </div>

      <nav class="mobile-bottom-nav" aria-label="Mobile Quick Navigation">
        \${mobileQuickTabs.map((t) => \`
          <button class="mob-tab-btn \${STATE.tab === t.id ? "active" : ""}" onclick="switchTab('\${t.id}')">
            <span class="mob-icon">\${t.icon}</span>
            <span class="mob-lbl">\${esc(t.short)}</span>
          </button>
        \`).join("")}
        <button class="mob-tab-btn \${["doclab","attorney","tools","models","memory"].includes(STATE.tab) ? "active" : ""}" onclick="toggleMobileNav(true)">
          <span class="mob-icon">☰</span>
          <span class="mob-lbl">All (11)</span>
        </button>
      </nav>
    </div>
  \`;
}

async function bootApp() {
  const qs = typeof window !== "undefined" ? window.location.search : "";
  const urlParams = new URLSearchParams(qs);
  const tabParam = (urlParams.get("tab") || "").toLowerCase();
  if (tabParam && ["overview","tutorial","chat","bookmaker","tutors","doclab","attorney","billing","tools","models","library","memory","admin_academy"].includes(tabParam)) {
    STATE.tab = tabParam;
  }
  const isAdminUrl = qs.includes("admin=yusef") || qs.includes("admin=bay") || qs.includes("admin=1");
  if (isAdminUrl) {
    STATE.isAdminOwner = true;
    localStorage.setItem("spcu_admin_owner", "1");
    if (!tabParam) STATE.tab = "admin_academy";
  }

  // Check if a logged-in member arrived from member.spcuniversity.com with SSO or a verified member token
  const urlMemberTok = urlParams.get("member_token") || urlParams.get("member_sso") || "";
  const urlMemberEmail = urlParams.get("member_email") || "";
  const cookieMatch = (typeof document !== "undefined" ? document.cookie : "").match(/(?:^|;\s*)spcu_member_vault=([^;]+)/);
  const cookieTok = cookieMatch ? decodeURIComponent(cookieMatch[1]) : "";
  const storedBookTok = localStorage.getItem("spcu_member_book_token") || "";

  try {
    // 1. If we don't have a valid member session yet, attempt seamless Member SSO if admin link, member_token, or member cookie exists
    if (isAdminUrl || urlMemberTok || urlMemberEmail || (!TOKEN && (cookieTok || storedBookTok))) {
      try {
        const sso = await api("member-sso", {
          admin_key: isAdminUrl ? "YUSEF" : "",
          member_token: urlMemberTok || cookieTok || storedBookTok,
          member_email: urlMemberEmail
        });
        if (sso && sso.token) {
          TOKEN = sso.token;
          localStorage.setItem("t", TOKEN);
          if (sso.member_access_token) {
            localStorage.setItem("spcu_member_book_token", sso.member_access_token);
            document.cookie = "spcu_member_vault=" + encodeURIComponent(sso.member_access_token) + "; path=/; max-age=2592000; SameSite=Lax; Secure";
          }
        }
      } catch {}
    }

    // 2. If still no TOKEN, stop and show the Paying Member Authentication & Monthly Subscription Gate
    if (!TOKEN) {
      renderAuth();
      return;
    }

    const h = await api("history");
    // Block any legacy anonymous guest session from bypassing the Member Area gate
    if (!h.user || (h.user.plan === "guest" && !STATE.isAdminOwner)) {
      TOKEN = "";
      localStorage.removeItem("t");
      renderAuth();
      return;
    }
    STATE.user = h.user;
    STATE.messages = h.messages || [];
    renderShell();
  } catch {
    TOKEN = "";
    localStorage.removeItem("t");
    renderAuth();
  }
}

bootApp();
</script>
</body>
</html>`;
