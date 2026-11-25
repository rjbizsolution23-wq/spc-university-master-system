# 👑 SPC UNIVERSITY — PARTNER OPERATIONS, MONETIZATION & SYSTEM INTEGRATION MANUAL

**Prepared Exclusively For:** Mr. Yusef El (Mr. Bay) · Founder & Super Administrator, SPC University  
**System Architect:** Rick Jefferson · RJ Business Solutions  
**Live Interactive Audio Walkthroughs:**  
- **Founder / Admin Walkthrough (5 Recorded Audio Modules):** [https://spcuniversity.com/yusef](https://spcuniversity.com/yusef) · [https://spcuniversity.com/bay](https://spcuniversity.com/bay) · [https://spcuniversity.com/app?admin=yusef](https://spcuniversity.com/app?admin=yusef)  
- **Member Back-Office Walkthrough (4 Recorded Audio Lessons):** [https://member.spcuniversity.com/app?tab=tutorial](https://member.spcuniversity.com/app?tab=tutorial)

---

## 1. Master Passcodes & Admin / Member Login Reference

### A. Founder & Super Admin Passcodes (Mr. Yusef El / Mr. Bay)
Use any of these passcodes on `https://member.spcuniversity.com/app`, `https://spcuniversity.com/app`, or any locked book gate (`/book1`–`/book6`) to immediately unlock the **Sovereign Plan (`5,000 Credits`)**, all **6 Flagship Textbooks**, and the **👑 Mr. Yusef / Mr. Bay Admin Tour** tab:
- **`YUSEF-EL-ADMIN`**
- **`MR-BAY`**
- **`SPCU-FOUNDER-5000`**
- **Direct Admin URL Shortcut:** `https://spcuniversity.com/app?admin=yusef` or `https://spcuniversity.com/yusef`

### B. Built-In VIP Member & Voucher Codes
- **`SPCU-MEMBER`** — Unlocks the Member AI Suite + 6-Book Vault (`PRO Plan`, `250 Credits`)
- **`SPCU-VIP-100`** — Grants `+100 Credits` (`PRO Plan`)
- **`SPCU-PRO-350`** — Grants `+350 Credits` (`PRO Plan`)
- **`SPCU-VAULT-1000`** — Grants `+1,000 Credits` (`SOVEREIGN Plan` + All 6 Books)
- **`SPCU-OMNIBUS-2000`** — Grants `+2,000 Credits` (`SOVEREIGN Plan` + All 6 Books)

### C. Member Back-Office Single Sign-On (`member.spcuniversity.com`)
- Paying members log in at **`https://member.spcuniversity.com/login`** using their existing Member Back-Office Username/Email & Password (verified live against `https://admin.spcuniversity.com/node_api/auth/access` and `/node_api/user/login`).
- Once logged in on `member.spcuniversity.com/dashboard`, the Member Back Office **automatically authenticates** them into TrustGPT OS, the 167 AI Tutors, and the 6 Flagship Textbooks via `POST https://member.spcuniversity.com/api/member-sso` so they never have to log in twice.

---

## 2. How the Member Back-Office Integration Works (`member.spcuniversity.com`)

### Nothing in the Original Member Back Office Was Replaced
All original Member Back-Office pages on server `208.109.215.160` remain **100% intact**:
- **`https://member.spcuniversity.com/dashboard`** — E-Wallet, Commissions, Payout Overview, Matrix Boards, Welcome Letter & News Broadcasts.
- **`https://member.spcuniversity.com/networks`** — Matrix Board Views (`6,344+` Board 1 members).
- **`https://member.spcuniversity.com/repurchase`** — Upgraded Repurchase Store with all 5 High-Ticket Legal Packages (`$297` to `$1,997`).
- **`https://member.spcuniversity.com/my-materials`** — Unlocked Business Credit Academy (all 9 video lessons active) + Categories #23 & #24.
- **`https://member.spcuniversity.com/profile` & `/payout`** — Lowered `$100.00` minimum withdrawal floor and repaired PayPal payout routing.

### How the New AI Suite Is Added Inside `member.spcuniversity.com`
1. **Top Member AI Command Bar (`#spcu-member-ai-command-bar`)**:
   - Appears at the top of `member.spcuniversity.com` **only after a member is logged in** (hidden on `/login`).
   - Gives 1-click buttons for:
     - `🏛️ Member Dashboard & Boards` (`https://member.spcuniversity.com/dashboard`)
     - `🛒 Repurchase Store` (`https://member.spcuniversity.com/repurchase`)
     - `🧠 TrustGPT & 6-Model Council`
     - `🎓 167 AI Lesson Tutors`
     - `📄 17 Trust Drafters & OCR`
     - `📖 10K-50K Book Maker`
     - `📚 6 Flagship Textbooks`
     - `💳 Monthly Plan & Credits`
     - `🎙️ Member Tutorial` (with 1-click Recorded Audio Walkthrough Player)
2. **Left Sidebar `🔒 MEMBER AI & BOOK VAULT` Menu Group**:
   - Automatically injected into the Member Back-Office left sidebar menu so members can also launch any tool directly from their sidebar.
3. **Native Back-Office Route (`https://member.spcuniversity.com/app`)**:
   - TrustGPT OS is mounted natively at **`https://member.spcuniversity.com/app`**.
   - Any member link to `https://spcuniversity.com/app?tab=chat&member_token=...&member_email=...` automatically redirects (`HTTP 302`) to **`https://member.spcuniversity.com/app?tab=chat&member_token=...&member_email=...`**.

---

## 3. How to Operate & Monetize the Platform (5 Revenue Streams)

Open **`https://member.spcuniversity.com/app?admin=yusef`** and click **`💳 Plans, Credits & Store Checkout`** in the left sidebar:

### Stream 1: Recurring Monthly & Annual Memberships (High-Ticket Retention)
- **`$99.00 / month` — SPCU Pro Student Membership** (`plan-pro-monthly`): 250 daily free Standard/Fast runs + 150 monthly credits + all 167 AI Lesson Tutors.
- **`$297.00 / month` — SPCU Sovereign Counsel & Book Empire Plan** (`plan-faculty-monthly`): Unlimited Standard runs + 600 monthly credits for 6-Model Legal Council, 550B Frontier Counsel & 10K–50K Word Book Maker.
- **`$997.00 / year` — SPCU Annual All-Access Membership** (`plan-annual-vault`): 2,000 model credits + 25-Volume Corpus + 17 Trust Drafters.

### Stream 2: Pay-As-You-Go AI Model & Council Credit Top-Up Packs (100% Digital Margin)
- **`$29.00`** — `100 Credits` (`credits-100`)
- **`$79.00`** — `350 Credits` (`credits-350` — Most Popular)
- **`$197.00`** — `1,000 Credits + Developer API Access` (`credits-1000`)
- **`$497.00`** — `3,000 Family Office & Law Desk Credits` (`credits-3000`)
- *Credit Burn Rates:* Standard/Fast = `0 Cr` (up to daily limit) · Senior 120B Drafter = `1 Cr` · Supreme 550B Counsel = `3 Cr` · 👑 6-Model Legal Council = `4 Cr` · FLUX Cover Art = `5 Cr`.

### Stream 3: High-Ticket Flagship Textbooks & Strategy Packages (`$297` – `$1,997`)
- **Know Your Rights: What Works in Court** (`14,817 words`) — **`$297.00`** (+50 AI Credits)
- **The Bank Packet: Open Your Trust Account** (`14,292 words`) — **`$497.00`** (+100 AI Credits)
- **The SPCU Doctrine: Foundations Before Remedies** (`20,567 words`) — **`$497.00`** (+100 AI Credits)
- **Trust Architecture: 10 Layers of Asset Protection** (`18,681 words`) — **`$997.00`** (+250 AI Credits)
- **1-on-1 Private Trust Strategy Session + Client Dossier Playbook** (`18,021 words`) — **`$997.00`** (+250 AI Credits)
- **The Complete Estate Planning Vault — Omnibus Master Suite (All 6 Books · `104,519 words`)** — **`$1,997.00`** (+1,000 AI Credits + Sovereign Plan)

### Stream 4: Live Webinar Instant Prepaid Voucher Minting
- On the **`💳 Plans, Credits & Store Checkout`** tab, scroll to **Mint Instant Prepaid Credit Voucher Code**:
  1. Enter **Credits to Grant** (e.g., `500`), select **PRO** or **SOVEREIGN** plan, set **Max Redemptions** (e.g., `25`), and type a custom code (e.g., `SPCU-WEBINAR-500`).
  2. Click **`🎟️ Mint New Credit Voucher Code →`**.
  3. Sell or distribute that code live on your webinar; students paste it into the top **Redeem Voucher Code** box (or on the login gate) to activate their plan and credits immediately.

### Stream 5: Connect Your Live Stripe & PayPal Payout Accounts (No Code Required)
- On the **`💳 Plans, Credits & Store Checkout`** tab, scroll to **Owner Payment Gateway & Checkout Routing**:
  - Paste your **Stripe Secret Key (`sk_live_...`)**, **PayPal Business Email**, **PayPal.Me URL**, and **Member Repurchase Store URL**, then click **`💾 Save Payment Gateways to Cloudflare Edge →`**.

---

## 4. How to Integrate SPC University AI Into External Systems (APIs, CRMs & Webhooks)

### A. OpenAI-Compatible REST API (`/v1/chat/completions`)
You can connect GoHighLevel, Zapier, Make.com, n8n, custom mobile apps, or partner law portals directly to TrustGPT using metered `sk-spcu-*` API keys generated on the Billing tab:

```bash
curl -X POST https://member.spcuniversity.com/v1/chat/completions \
  -H "Authorization: Bearer sk-spcu-YOUR_GENERATED_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "trustgpt-council",
    "messages": [
      { "role": "user", "content": "Draft a UTC Section 1013 Certificate of Trust banking checklist." }
    ]
  }'
```
- **Available API Models**:
  - `trustgpt-fast` (Llama 3.3 70B Fast)
  - `trustgpt-standard` (DeepSeek V4.1 304B MoE)
  - `trustgpt-premium` (GPT-OSS-120B / GLM-5.3)
  - `trustgpt-frontier` (NVIDIA Nemotron-3 Ultra 550B)
  - `trustgpt-council` (👑 6-Model Legal Council parallel synthesis)

### B. Embedding the Member AI Suite Into Any Internal Portal or LMS Page
To embed any tab of TrustGPT OS (`chat`, `tutors`, `doclab`, `bookmaker`, `library`, `billing`, `tutorial`) inside an LMS lesson page on `lms.spcuniversity.com` or `member.spcuniversity.com`:

```html
<iframe
  src="https://member.spcuniversity.com/app?tab=tutors&member_token=SPCU-MEMBER&embed=1"
  style="width:100%;height:820px;border:2px solid #ffc107;border-radius:16px;background:#040d1a"
  allow="autoplay; microphone; clipboard-read; clipboard-write">
</iframe>
```

### C. Google Workspace Bridge (Google Docs & Gmail Automation)
Inside the **`⚖️ Execution, Notary, Bond & Google`** tab, paste any deployed Google Apps Script Web App URL (`https://script.google.com/macros/s/.../exec`) to push drafted trust indentures, certificates of trust, and execution packets directly to Google Docs and Gmail in 1 click.

### D. Real-Time Database & Credit Audit Tracking (Cloudflare D1, KV & Vectorize)
All user accounts, credit purchases, voucher redemptions, and model executions are tracked in real time on Cloudflare:
- **D1 Database (`trustgpt-db` · ID `f1c39c1f-a77a-4989-90ff-9da45a6cc90e`)**:
  - `users` (`id`, `email`, `pw_hash`, `salt`, `plan`, `credits`, `created_at`)
  - `ledger` (`id`, `user_id`, `delta`, `reason`, `created_at`) — immutable credit audit trail
  - `usage` (`user_id`, `day`, `count`) — daily free-tier meter
  - `messages` (`id`, `user_id`, `role`, `content`, `sources`, `created_at`)
  - `memories` (`id`, `user_id`, `fact`, `created_at`)
  - `api_keys` (`id`, `user_id`, `key_hash`, `prefix`, `revoked`, `created_at`)
- **KV Namespace (`d9f74d8d05fa406392f34ace46876a74`)**:
  - Shared between `trustgpt` and `spc-university-portal` for instant session verification (`s:*`), Member Book Vault tokens (`mbook:*`), minted webinar vouchers (`voucher:*`), payment gateway settings (`spcu:payment_gateways`), and cached Deepgram Aura-2 audio walkthrough MP3s (`tts:v3:*`).
- **Vectorize Index (`trustgpt-kb`)**:
  - Stores all 2,260 1024-dimensional BAAI BGE-M3 semantic embeddings across the 25 Worldwide Trust Omnibus Volumes, 10 Trust Skeletons, 6 Flagship Books, and 128 website articles.

---

## 5. Developer CLI & Deployment Instructions

### Prerequisites
- Node.js `v20+` and `npx wrangler`
- Authenticated Cloudflare account (`Account ID: 3ccbc7fb8314ac7a4a8908079ed583ed`, `Zone ID: 3dc512ef137d5fe0cbe6063223536984` for `spcuniversity.com`)

### 1-Click Deployment of Both Production Workers
```bash
export CLOUDFLARE_ACCOUNT_ID="3ccbc7fb8314ac7a4a8908079ed583ed"
export CLOUDFLARE_API_TOKEN="YOUR_CLOUDFLARE_API_TOKEN"

# Deploy Worker #1 (TrustGPT OS, 18 AI Models, 167 Tutors & APIs) and Worker #2 (Main Site SEO/Brand Kit, Member Back-Office Bar & 6-Book Vault)
bash deploy-all.sh
```

### Managing Secrets via Wrangler
```bash
cd trustgpt-saas
npx wrangler secret put NVIDIA_API_KEY
npx wrangler secret put STRIPE_SECRET_KEY
npx wrangler secret put STRIPE_WEBHOOK_SECRET
npx wrangler secret put ADMIN_TOKEN
```
