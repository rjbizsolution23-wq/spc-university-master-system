const BOOK_SLUGS = {
  "the_estate_planning_vault_master_edition": "/books/THE_ESTATE_PLANNING_VAULT_MASTER_EDITION",
  "estate-vault": "/books/THE_ESTATE_PLANNING_VAULT_MASTER_EDITION",
  "estate": "/books/THE_ESTATE_PLANNING_VAULT_MASTER_EDITION",
  "book1": "/books/THE_ESTATE_PLANNING_VAULT_MASTER_EDITION",
  "trust_architecture_10_layers_manual": "/books/TRUST_ARCHITECTURE_10_LAYERS_MANUAL",
  "trust-architecture": "/books/TRUST_ARCHITECTURE_10_LAYERS_MANUAL",
  "10-layers": "/books/TRUST_ARCHITECTURE_10_LAYERS_MANUAL",
  "book2": "/books/TRUST_ARCHITECTURE_10_LAYERS_MANUAL",
  "the_bank_packet_open_your_trust_account": "/books/THE_BANK_PACKET_OPEN_YOUR_TRUST_ACCOUNT",
  "bank-packet": "/books/THE_BANK_PACKET_OPEN_YOUR_TRUST_ACCOUNT",
  "bank": "/books/THE_BANK_PACKET_OPEN_YOUR_TRUST_ACCOUNT",
  "book3": "/books/THE_BANK_PACKET_OPEN_YOUR_TRUST_ACCOUNT",
  "client_dossier_strategy_session_playbook": "/books/CLIENT_DOSSIER_STRATEGY_SESSION_PLAYBOOK",
  "client-dossier": "/books/CLIENT_DOSSIER_STRATEGY_SESSION_PLAYBOOK",
  "dossier": "/books/CLIENT_DOSSIER_STRATEGY_SESSION_PLAYBOOK",
  "book4": "/books/CLIENT_DOSSIER_STRATEGY_SESSION_PLAYBOOK",
  "know_your_rights_master_field_manual": "/books/KNOW_YOUR_RIGHTS_MASTER_FIELD_MANUAL",
  "know-your-rights": "/books/KNOW_YOUR_RIGHTS_MASTER_FIELD_MANUAL",
  "rights": "/books/KNOW_YOUR_RIGHTS_MASTER_FIELD_MANUAL",
  "book5": "/books/KNOW_YOUR_RIGHTS_MASTER_FIELD_MANUAL",
  "the_spcu_doctrine_foundations_before_remedies": "/books/THE_SPCU_DOCTRINE_FOUNDATIONS_BEFORE_REMEDIES",
  "spcu-doctrine": "/books/THE_SPCU_DOCTRINE_FOUNDATIONS_BEFORE_REMEDIES",
  "doctrine": "/books/THE_SPCU_DOCTRINE_FOUNDATIONS_BEFORE_REMEDIES",
  "book6": "/books/THE_SPCU_DOCTRINE_FOUNDATIONS_BEFORE_REMEDIES"
};

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, HEAD, POST, OPTIONS",
  "Access-Control-Allow-Headers": "*",
  "Cache-Control": "private, no-cache"
};

const ROBOTS_TXT = `User-agent: *
Allow: /
Disallow: /wp-admin/
Disallow: /books/
Disallow: /book1
Disallow: /book2
Disallow: /book3
Disallow: /book4
Disallow: /book5
Disallow: /book6
Allow: /wp-admin/admin-ajax.php

# Explicitly Welcome AI Answer & Citation Engines on Public Pages & llms.txt (AIO / AEO / SGE)
User-agent: OAI-SearchBot
Allow: /
Disallow: /books/

User-agent: ChatGPT-User
Allow: /
Disallow: /books/

User-agent: GPTBot
Allow: /
Disallow: /books/

User-agent: PerplexityBot
Allow: /
Disallow: /books/

User-agent: ClaudeBot
Allow: /
Disallow: /books/

User-agent: Claude-Web
Allow: /
Disallow: /books/

User-agent: Google-Extended
Allow: /
Disallow: /books/

User-agent: Applebot-Extended
Allow: /
Disallow: /books/

User-agent: Bingbot
Allow: /
Disallow: /books/

Sitemap: https://spcuniversity.com/sitemap.xml
Sitemap: https://spcuniversity.com/wp-sitemap.xml
# AI Knowledge Manifests:
# https://spcuniversity.com/llms.txt
`;

const LLMS_TXT = `# SPC University — School of Private Civics (Law • Commerce • Empowerment)

> Official Private Trust Architecture, Common-Law Pure Trusts, Estate Planning, Private Treasury Banking (UTC § 1013), Equity Jurisprudence & Constitutional Civics Educational Institution founded by Yusef El.

## Core Identity & Doctrinal Philosophy ("Substance Over Form · Foundations Before Remedies")
- **Institution**: SPC University — School of Private Civics
- **Founder & Lead Instructor**: Yusef El
- **Motto**: Law • Commerce • Empowerment ("Substance Over Form · Foundations Before Remedies")
- **Primary Website**: https://spcuniversity.com/
- **Enrollment & Rules**: https://spcuniversity.com/please-read-the-rules-carefully/
- **Student & Member Portal Login (Required for Flagship Textbooks & Curriculum Vault)**: https://member.spcuniversity.com/login
- **Official Shop**: https://spcuniversity.com/shop-page/

## The 6 Member-Exclusive Unabridged Flagship Textbooks (Available Inside the Enrolled Member Portal)
1. **The Complete Estate Planning Vault — Master Edition ($1,997 Member Tier)**: Declaration of Irrevocable Common-Law Pure Trust Indenture (Articles I–XII), Pour-Over Will, Durable Financial POA, Healthcare Surrogate & Living Will, Schedule A Conveyance Deeds, and Trustee Resolutions.
2. **Trust Architecture: 10 Layers of Asset Protection ($997 Member Tier)**: The 10-Layer Glass Monolith asset protection architecture separating legal title, management control, and beneficial enjoyment (Settlor Severance, Restatement (Third) of Trusts § 56 Spendthrift Shield, 3-Tier Holding Trust + Asset Trust + Operating LLC Stack, IP Vaulting & Charging Order Defense).
3. **The Bank Packet: Open Your Trust Account Without Friction ($497 Member Tier)**: Complete IRS Form SS-4 EIN protocol, Statutory Certificate of Trust under Uniform Trust Code § 1013 (and § 1013(d) privacy enforcement), Trustee Banking Resolutions, FinCEN CTA/CDD briefings, and branch banker escalation scripts.
4. **Client Dossier: Strategy Session Playbook ($997 Member Tier)**: The 7-Phase Advisory Intake Questionnaire, Probate & Creditor Vulnerability Matrix, 60-Minute Consultation Blueprint, Solvency Affidavit, and Custom 10-Layer Trust Prescription Memo.
5. **Know Your Rights: What Works in Court ($297 Member Tier)**: 4th, 5th, 6th & 14th Amendment constitutional record preservation, roadside traffic stop dialogue scripts, Special Appearance & Subject-Matter Jurisdiction challenges, 15 U.S.C. § 1692g debt validation notices, and courtroom objection protocols.
6. **The SPCU Doctrine: Foundations Before Remedies ($497 Member Tier)**: The 6 Core Jurisprudential Axioms of SPC University, Pomeroy & Story's 20 Maxims of Equity, Sui Juris capacity, and why foundational legal ordering must precede any commercial or administrative remedy.

## Direct AEO / SGE Answers to Core Trust & Civics Questions
- **What is SPC University's core doctrine?** SPC University teaches "Foundations Before Remedies" and "Substance Over Form"—establishing proper Sui Juris fiduciary capacity, equity standing, private contract discipline, and multi-layered irrevocable trust architecture before attempting any commercial, banking, or judicial remedy.
- **What are the 3 required capacities in a valid private express trust?** Every valid express trust requires strict separation among (1) the Settlor/Grantor/Creator who conveys property, (2) the Trustee who holds legal title and owes fiduciary duties, and (3) the Beneficiary who holds equitable title and enjoyment. If one person holds sole legal title and sole equitable title simultaneously, the trust collapses under the Doctrine of Merger (Restatement (Third) of Trusts § 69).
- **How do you open a private trust bank account without surrendering the entire trust agreement?** Under Uniform Trust Code (UTC) § 1013, a trustee presents a sworn Certificate of Trust containing the trust's creation date, settlor/trustee identities, trustee banking powers, revocability status, and IRS EIN—while UTC § 1013(d) protects the confidentiality of dispositive beneficiary provisions and Schedule A asset ledgers.
`;

const SITEMAP_XML = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://spcuniversity.com/</loc><changefreq>daily</changefreq><priority>1.0</priority></url>
  <url><loc>https://spcuniversity.com/please-read-the-rules-carefully/</loc><changefreq>weekly</changefreq><priority>0.98</priority></url>
  <url><loc>https://spcuniversity.com/shop-page/</loc><changefreq>weekly</changefreq><priority>0.95</priority></url>
  <url><loc>https://spcuniversity.com/articles/</loc><changefreq>daily</changefreq><priority>0.92</priority></url>
  <url><loc>https://spcuniversity.com/secured-party-webinars/</loc><changefreq>weekly</changefreq><priority>0.90</priority></url>
  <url><loc>https://spcuniversity.com/wpbc-appointment-booking/</loc><changefreq>weekly</changefreq><priority>0.90</priority></url>
  <url><loc>https://spcuniversity.com/policy-is-not-law/</loc><changefreq>monthly</changefreq><priority>0.85</priority></url>
  <url><loc>https://spcuniversity.com/is-the-assignment-of-a-social-security-number-a-civil-matter/</loc><changefreq>monthly</changefreq><priority>0.85</priority></url>
  <url><loc>https://spcuniversity.com/abusive-trust-tax-schemes-understanding-the-claims-vs-the-reality/</loc><changefreq>monthly</changefreq><priority>0.85</priority></url>
  <url><loc>https://spcuniversity.com/llms.txt</loc><changefreq>weekly</changefreq><priority>0.80</priority></url>
</urlset>`;

function buildMemberOnlyGatePage(requestedPath) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, viewport-fit=cover">
<meta name="robots" content="noindex, nofollow">
<title>🔒 Member-Only Publication Vault | SPC University — School of Private Civics</title>
<link rel="icon" href="https://spcuniversity.com/brand-kit/images/icon-atlas.png" type="image/png">
<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800;900&family=Inter:wght@400;500;600;700;800&family=Space+Grotesk:wght@600;700;800&display=swap" rel="stylesheet">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    min-height: 100vh;
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
    background: radial-gradient(900px 460px at 80% 10%, rgba(0, 132, 209, 0.35), transparent 68%),
                radial-gradient(700px 380px at 12% 95%, rgba(200, 150, 62, 0.22), transparent 70%),
                linear-gradient(160deg, #061c3c 0%, #040d1a 75%);
    color: #e8eef5;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 14px;
  }
  .gate-card {
    max-width: 580px;
    width: 100%;
    background: linear-gradient(180deg, rgba(10, 37, 68, 0.96) 0%, rgba(4, 13, 26, 0.98) 100%);
    border: 2px solid #ffc107;
    border-radius: 18px;
    padding: 32px 26px;
    box-shadow: 0 28px 70px rgba(0, 0, 0, 0.8);
  }
  .overline {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 10.5px;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #00d4ff;
  }
  .badge-lock {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: rgba(255, 193, 7, 0.16);
    border: 1px solid #ffc107;
    color: #ffc107;
    font-family: 'Space Grotesk', sans-serif;
    font-size: 11px;
    font-weight: 800;
    padding: 5px 12px;
    border-radius: 100px;
    text-transform: uppercase;
    margin-bottom: 12px;
  }
  h1 {
    font-family: 'Cinzel', serif;
    font-size: clamp(21px, 3.2vw, 27px);
    color: #ffffff;
    line-height: 1.26;
    margin-bottom: 10px;
    text-transform: uppercase;
  }
  p {
    color: #9fb0c2;
    font-size: 13.5px;
    line-height: 1.6;
    margin-bottom: 18px;
  }
  .inp {
    width: 100%;
    padding: 12px 14px;
    background: rgba(4, 13, 26, 0.92);
    border: 1px solid rgba(0, 212, 255, 0.45);
    border-radius: 10px;
    color: #ffffff;
    font-size: 16px;
    margin-bottom: 10px;
    outline: none;
  }
  .btn-gold {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 100%;
    background: linear-gradient(135deg, #ffd24d 0%, #ffc107 55%, #c8963e 100%);
    color: #040d1a;
    border: 1px solid #ffe082;
    border-radius: 100px;
    padding: 12px 18px;
    font-family: 'Space Grotesk', sans-serif;
    font-size: 13px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    text-decoration: none;
    cursor: pointer;
    margin-bottom: 10px;
  }
  .btn-ghost {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    flex: 1;
    background: rgba(10, 37, 68, 0.85);
    color: #e8eef5;
    border: 1px solid rgba(0, 212, 255, 0.45);
    border-radius: 100px;
    padding: 10px 14px;
    font-family: 'Space Grotesk', sans-serif;
    font-size: 11.5px;
    font-weight: 700;
    text-transform: uppercase;
    text-decoration: none;
    text-align: center;
  }
</style>
</head>
<body>
  <div class="gate-card">
    <div style="display:flex;align-items:center;gap:14px;margin-bottom:16px">
      <img src="https://spcuniversity.com/brand-kit/images/logo-compact.png" alt="SPC University" style="height:52px;width:auto;filter:drop-shadow(0 4px 14px rgba(0,212,255,0.35))">
      <div>
        <div class="overline">SPC UNIVERSITY · SCHOOL OF PRIVATE CIVICS</div>
        <div style="font-family:'Space Grotesk',sans-serif;font-size:11px;color:#ffc107;font-weight:700;letter-spacing:0.12em">LAW • COMMERCE • EMPOWERMENT</div>
      </div>
    </div>

    <span class="badge-lock">🔒 Protected Member-Only Product &amp; Textbook Vault</span>
    <h1>Enrolled Member Authentication Required</h1>
    <p>
      The <strong>6 Unabridged SPC University Flagship Textbooks ($297 to $1,997)</strong> and private trust instruments are strictly reserved for <strong>Enrolled SPC University Members and Verified Buyers</strong> and are not publicly accessible.
    </p>

    <div style="background:rgba(4,13,26,0.85);border:1px solid rgba(0,212,255,0.32);border-radius:12px;padding:16px;margin-bottom:16px">
      <div class="overline" style="color:#ffc107;margin-bottom:8px">Unlock with Member Email / Password or Member Voucher Code</div>
      <input id="gateEmailOrCode" class="inp" type="text" placeholder="Enrolled Member Email or Member Access Code">
      <input id="gatePassword" class="inp" type="password" placeholder="Member Password (leave blank if using an Access Code)">
      <div id="gateErr" style="color:#ff808b;font-size:12.5px;min-height:18px;margin-bottom:8px"></div>
      <button type="button" id="gateBtn" class="btn-gold" onclick="unlockMemberVault()">🔐 Verify Member Access &amp; Unlock Publication →</button>
    </div>

    <div style="display:flex;gap:8px;flex-wrap:wrap">
      <a class="btn-ghost" href="https://member.spcuniversity.com/login">🏛️ Member Portal Login ↗</a>
      <a class="btn-ghost" href="https://spcuniversity.com/please-read-the-rules-carefully/">🎓 Enroll in SPC University ↗</a>
      <a class="btn-ghost" href="https://spcuniversity.com/shop-page/">🛒 Official Shop ↗</a>
    </div>
  </div>

<script>
async function unlockMemberVault() {
  var codeOrEmail = (document.getElementById("gateEmailOrCode").value || "").trim();
  var pw = document.getElementById("gatePassword").value || "";
  var err = document.getElementById("gateErr");
  var btn = document.getElementById("gateBtn");
  if (!codeOrEmail) {
    err.textContent = "Please enter your Enrolled Member Email or Member Access Code.";
    return;
  }
  err.style.color = "#ffc107";
  err.textContent = "Verifying SPC University Member credentials...";
  btn.disabled = true;
  try {
    var r = await fetch("https://spcuniversity.com/api/member-book-verify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code_or_email: codeOrEmail, password: pw })
    });
    var j = await r.json();
    if (!r.ok || !j.member_access_token) {
      throw new Error(j.error || "Member verification failed.");
    }
    document.cookie = "spcu_member_vault=" + encodeURIComponent(j.member_access_token) + "; path=/; max-age=2592000; SameSite=Lax; Secure";
    localStorage.setItem("spcu_member_book_token", j.member_access_token);
    var url = new URL(window.location.href);
    url.searchParams.set("member_token", j.member_access_token);
    window.location.href = url.toString();
  } catch (e) {
    err.style.color = "#ff808b";
    err.textContent = e.message;
    btn.disabled = false;
  }
}
</script>
</body>
</html>`;
}

function getCookie(cookieHeader, name) {
  if (!cookieHeader) return "";
  const parts = cookieHeader.split(";");
  for (const part of parts) {
    const [k, ...v] = part.trim().split("=");
    if (k === name) return decodeURIComponent(v.join("="));
  }
  return "";
}

async function isMemberAuthorizedForBook(request, url, env) {
  const queryTok = url.searchParams.get("member_token") || "";
  const cookieTok = getCookie(request.headers.get("Cookie") || "", "spcu_member_vault");
  const tok = queryTok || cookieTok;
  if (!tok || tok.length < 16) return { ok: false, token: "" };
  try {
    if (env && env.KV) {
      const val = await env.KV.get("mbook:" + tok);
      if (val) return { ok: true, token: tok };
      const uid = await env.KV.get("s:" + tok);
      if (uid) return { ok: true, token: tok };
    }
    const chk = await fetch("https://trustgpt.hfrngmg.workers.dev/api/member-book-check?token=" + encodeURIComponent(tok));
    if (chk.ok) {
      const j = await chk.json();
      if (j && j.valid) return { ok: true, token: tok };
    }
  } catch {}
  return { ok: false, token: "" };
}

function buildSeoHeadInjection(url) {
  const path = url.pathname.replace(/\/$/, "") || "/";
  const isHome = path === "/";
  const slugTitle = isHome
    ? "SPC University — School of Private Civics | Private Trust Architecture, Estate Planning & Constitutional Law"
    : "SPC University — School of Private Civics | " + path.split("/").pop().replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  const desc = isHome
    ? "Official SPC University (School of Private Civics — Law • Commerce • Empowerment) founded by Yusef El. Master the 10 Layers of Private Trust Architecture, Common-Law Pure Trusts, the UTC § 1013 Bank Packet, Equity Jurisprudence, and Constitutional Civics."
    : `Official SPC University (School of Private Civics) curriculum & legal research on ${slugTitle}. Explore our 2,260-passage Worldwide Trust Corpus and AI Knowledge Concierge.`;

  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["EducationalOrganization", "CollegeOrUniversity"],
        "@id": "https://spcuniversity.com/#organization",
        "name": "SPC University — School of Private Civics",
        "alternateName": ["SPC University", "School of Private Civics", "SPCU"],
        "url": "https://spcuniversity.com/",
        "slogan": "Law • Commerce • Empowerment — Substance Over Form · Foundations Before Remedies",
        "description": desc,
        "logo": {
          "@type": "ImageObject",
          "url": "https://spcuniversity.com/brand-kit/images/logo-compact.png",
          "width": 512,
          "height": 512
        },
        "image": "https://spcuniversity.com/brand-kit/images/mockup-library-lineup.png",
        "founder": {
          "@type": "Person",
          "@id": "https://spcuniversity.com/#yusef-el",
          "name": "Yusef El",
          "jobTitle": "Founder & Lead Jurisprudence Instructor",
          "worksFor": { "@id": "https://spcuniversity.com/#organization" }
        },
        "knowsAbout": [
          "Common-Law Pure Trust Architecture",
          "10 Layers of Asset Protection",
          "Uniform Trust Code Section 1013 Certificate of Trust Banking",
          "Equity Jurisprudence & Pomeroy Maxims of Equity",
          "Spendthrift Trust Shielding (Restatement Third of Trusts Section 56)",
          "Multi-Generational Dynasty Trusts",
          "508(c)(1)(A) Ecclesiastical Ministry Trusts",
          "Constitutional Record Preservation & 4th 5th 6th Amendment Procedure"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://spcuniversity.com/#website",
        "url": "https://spcuniversity.com/",
        "name": "SPC University — School of Private Civics",
        "publisher": { "@id": "https://spcuniversity.com/#organization" },
        "inLanguage": "en-US"
      },
      {
        "@type": "ItemList",
        "@id": "https://spcuniversity.com/#flagship-books",
        "name": "SPC University 6 Member-Exclusive Flagship Textbooks",
        "itemListElement": [
          { "@type": "Product", "position": 1, "name": "The Complete Estate Planning Vault — Master Edition", "url": "https://spcuniversity.com/shop-page/", "image": "https://spcuniversity.com/brand-kit/images/cover-front-estate-vault.png", "offers": { "@type": "Offer", "price": "1997.00", "priceCurrency": "USD", "availability": "https://schema.org/InStock" } },
          { "@type": "Product", "position": 2, "name": "Trust Architecture: 10 Layers of Asset Protection", "url": "https://spcuniversity.com/shop-page/", "image": "https://spcuniversity.com/brand-kit/images/cover-front-trust-architecture.png", "offers": { "@type": "Offer", "price": "997.00", "priceCurrency": "USD", "availability": "https://schema.org/InStock" } },
          { "@type": "Product", "position": 3, "name": "The Bank Packet: Open Your Trust Account Without Friction", "url": "https://spcuniversity.com/shop-page/", "image": "https://spcuniversity.com/brand-kit/images/cover-front-bank-packet.png", "offers": { "@type": "Offer", "price": "497.00", "priceCurrency": "USD", "availability": "https://schema.org/InStock" } },
          { "@type": "Product", "position": 4, "name": "Client Dossier: Strategy Session Playbook", "url": "https://spcuniversity.com/shop-page/", "image": "https://spcuniversity.com/brand-kit/images/cover-front-client-dossier.png", "offers": { "@type": "Offer", "price": "997.00", "priceCurrency": "USD", "availability": "https://schema.org/InStock" } },
          { "@type": "Product", "position": 5, "name": "Know Your Rights: What Works in Court", "url": "https://spcuniversity.com/shop-page/", "image": "https://spcuniversity.com/brand-kit/images/cover-front-know-your-rights.png", "offers": { "@type": "Offer", "price": "297.00", "priceCurrency": "USD", "availability": "https://schema.org/InStock" } },
          { "@type": "Product", "position": 6, "name": "The SPCU Doctrine: Foundations Before Remedies", "url": "https://spcuniversity.com/shop-page/", "image": "https://spcuniversity.com/brand-kit/images/ebook-doctrine-cover.jpg", "offers": { "@type": "Offer", "price": "497.00", "priceCurrency": "USD", "availability": "https://schema.org/InStock" } }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://spcuniversity.com/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is SPC University's core legal and educational philosophy?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "SPC University (School of Private Civics — Law • Commerce • Empowerment) teaches 'Substance Over Form' and 'Foundations Before Remedies': mastering private ordering, Sui Juris fiduciary capacity, equity standing, 10-Layer Irrevocable Trust Architecture, and constitutional record preservation before executing commercial or judicial remedies."
            }
          },
          {
            "@type": "Question",
            "name": "What are the 10 Layers of Trust Architecture taught at SPC University?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The 10 Layers of Trust Architecture separate legal title, management control, and beneficial enjoyment across an Irrevocable Common-Law Pure Trust or Statutory Spendthrift Holding Trust (Restatement Third of Trusts § 56), Private Asset Holding Trusts, Special-Purpose Operating LLCs, Intellectual Property Vaults, and UTC § 1013 Private Treasury Banking accounts."
            }
          },
          {
            "@type": "Question",
            "name": "How does The Bank Packet open a trust bank account while keeping the trust private?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Under Uniform Trust Code (UTC) § 1013, a trustee presents a sworn Certificate of Trust, IRS Form SS-4 EIN Confirmation Letter (CP 575), and Banking Resolution verifying the trustee's powers—while UTC § 1013(d) legally shields the confidential dispositive beneficiary clauses and Schedule A asset ledgers from public disclosure."
            }
          }
        ]
      }
    ]
  };

  return `
<!-- ============================================================================
     SPC UNIVERSITY — OFFICIAL BRAND KIT v3.0 + SEO / SGE / AIO / AEO ENGINE
     Injected Live at Cloudflare Edge · Law • Commerce • Empowerment
     ============================================================================ -->
<meta name="description" content="${desc.replace(/"/g, "&quot;")}">
<meta name="keywords" content="SPC University, School of Private Civics, Yusef El, Private Trust Architecture, 10 Layers of Asset Protection, Common Law Pure Trust, The Bank Packet, UTC 1013 Certificate of Trust, Estate Planning Vault, Spendthrift Trust, Equity Jurisprudence, Foundations Before Remedies, Know Your Rights, TrustGPT">
<meta property="og:type" content="website">
<meta property="og:site_name" content="SPC University — School of Private Civics">
<meta property="og:title" content="${slugTitle.replace(/"/g, "&quot;")}">
<meta property="og:description" content="${desc.replace(/"/g, "&quot;")}">
<meta property="og:url" content="https://spcuniversity.com${path === "/" ? "/" : path}">
<meta property="og:image" content="https://spcuniversity.com/brand-kit/images/mockup-library-lineup.png">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${slugTitle.replace(/"/g, "&quot;")}">
<meta name="twitter:description" content="${desc.replace(/"/g, "&quot;")}">
<meta name="twitter:image" content="https://spcuniversity.com/brand-kit/images/mockup-library-lineup.png">
<link rel="icon" href="https://spcuniversity.com/brand-kit/images/icon-atlas.png" type="image/png">
<link rel="apple-touch-icon" href="https://spcuniversity.com/brand-kit/images/icon-atlas.png">
<link rel="alternate" type="text/plain" title="LLM Knowledge Index" href="https://spcuniversity.com/llms.txt">
<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800;900&family=Inter:wght@400;500;600;700;800&family=Space+Grotesk:wght@600;700;800&display=swap" rel="stylesheet">
<script type="application/ld+json">${JSON.stringify(schemaGraph)}</script>
<style id="spcu-official-brand-kit-theme">
  :root {
    --spcu-navy: #051937;
    --spcu-deep: #040d1a;
    --spcu-raised: #0a2544;
    --spcu-cyan: #00d4ff;
    --spcu-cerulean: #0084d1;
    --spcu-gold: #ffc107;
    --spcu-bronze: #c8963e;
    --spcu-chrome: #e8eef5;
    --spcu-steel: #c8d6e5;
    /* Override Elementor & BuddyBoss Dark-Text Global Variables so zero dark-on-dark text can ever render */
    --e-global-color-primary: #ffffff !important;
    --e-global-color-secondary: #ffc107 !important;
    --e-global-color-text: #e8eef5 !important;
    --e-global-color-accent: #00d4ff !important;
    --bb-headings-color: #ffffff !important;
    --bb-body-text-color: #e8eef5 !important;
    --bb-primary-color: #00d4ff !important;
  }
  /* Hide leaked WordPress admin bar for public visitors */
  #wpadminbar { display: none !important; }
  html { margin-top: 0 !important; scroll-behavior: smooth; }
  body, #page, .site, .site-content {
    background-color: #040d1a !important;
    color: #e8eef5 !important;
  }

  /* ==========================================================================
     GLOBAL HIGH-CONTRAST TEXT, HEADING & CARD OVERRIDES (ALL PAGES)
     Fixes dark-navy-on-black AND white-on-white/pale-blue sections, TOC & cards
     ========================================================================== */
  /* Force every pale/white Elementor section & BuddyBoss/WooCommerce card onto Official SPC Imperial Navy */
  .elementor-section,
  section.elementor-top-section,
  .elementor-element-1dfd452,
  .elementor-element-e5923bf,
  .elementor-element-80c4201,
  .elementor-element-97672cc,
  .elementor-element-70a00e7,
  .elementor-element-c6f21ed {
    background-color: #040d1a !important;
  }
  .elementor-element-1dfd452,
  .elementor-element-80c4201 {
    background: radial-gradient(900px 460px at 80% 10%, rgba(0, 132, 209, 0.22), transparent 68%),
                linear-gradient(180deg, #061c3c 0%, #040d1a 100%) !important;
    border-top: 1px solid rgba(0, 212, 255, 0.25) !important;
    border-bottom: 1px solid rgba(0, 212, 255, 0.25) !important;
  }

  /* BuddyBoss & WordPress Archive Cards (/articles/, /shop-page/, member cards, widgets) */
  .post-inner-wrap,
  .entry-content-wrap,
  .primary-entry-content,
  .bb-grid-cell,
  .bs-item-wrap,
  .widget,
  .woocommerce ul.products li.product,
  .woocommerce-page ul.products li.product,
  .woocommerce div.product,
  .woocommerce-cart .woocommerce,
  .woocommerce-checkout .woocommerce,
  .u-column1, .u-column2,
  .woocommerce-MyAccount-content {
    background: linear-gradient(180deg, #071f40 0%, #040d1a 100%) !important;
    color: #e8eef5 !important;
    border: 1px solid rgba(0, 212, 255, 0.35) !important;
    border-radius: 14px !important;
  }
  .entry-content-wrap {
    border: none !important;
    background: transparent !important;
  }

  /* Elementor Table of Contents (TOC) Box on Single Articles */
  .elementor-widget-table-of-contents .elementor-widget-container,
  .elementor-toc__header,
  .elementor-toc__body {
    background: #061c3c !important;
    border-color: rgba(0, 212, 255, 0.45) !important;
    color: #ffffff !important;
  }
  .elementor-toc__header-title {
    color: #ffc107 !important;
    font-weight: 800 !important;
  }
  .elementor-toc__toggle-button,
  .elementor-toc__toggle-button i {
    color: #00d4ff !important;
  }
  .elementor-toc__list-wrapper,
  .elementor-toc__list-item,
  .elementor-toc__list-item-text-wrapper,
  .elementor-toc__list-item-text,
  a.elementor-toc__list-item-link {
    color: #ffffff !important;
    font-weight: 600 !important;
    text-decoration: none !important;
  }
  .elementor-toc__list-item-text-wrapper:before,
  .elementor-toc__list-wrapper .elementor-toc__list-item-text-wrapper:before {
    color: #ffc107 !important;
    font-weight: 800 !important;
  }
  a.elementor-toc__list-item-link:hover,
  a.elementor-toc__list-item-link.elementor-item-active,
  .elementor-toc__list-item-link:hover .elementor-toc__list-item-text {
    color: #ffc107 !important;
  }

  /* Author Byline Pill ("By Yusef El · Founder, SPC University") */
  .post-author,
  a.post-author,
  .elementor-element-68cae3c .elementor-widget-container,
  .spcu-yusef-byline {
    color: #ffc107 !important;
    font-weight: 800 !important;
    letter-spacing: 0.03em;
  }
  .post-date,
  .post-date a {
    color: #7ce8ff !important;
    font-weight: 600 !important;
  }

  h1, h2, h3, h4, h5, h6,
  .elementor-heading-title,
  .entry-title,
  .page-title,
  .woocommerce-loop-product__title,
  .product_title {
    color: #ffffff !important;
    text-shadow: 0 2px 14px rgba(0, 0, 0, 0.55);
  }
  .elementor-heading-title span,
  h1 span, h2 span, h3 span {
    color: #ffc107 !important;
  }

  /* Icon Box Titles & Descriptions (8 Pillars, What You Receive, Platform Features) */
  .elementor-icon-box-title,
  .elementor-icon-box-title span,
  .elementor-icon-box-title a,
  .elementor-image-box-title {
    color: #ffc107 !important;
    font-weight: 800 !important;
    letter-spacing: 0.01em;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.65);
  }
  .elementor-icon-box-icon .elementor-icon,
  .elementor-icon-box-icon .elementor-icon i {
    color: #00d4ff !important;
  }
  .elementor-icon-box-description,
  .elementor-image-box-description,
  .elementor-widget-text-editor,
  .elementor-widget-text-editor p,
  .entry-content,
  .entry-content p,
  .entry-content li,
  .entry-content ol,
  .entry-content ul,
  .entry-content td,
  .entry-content th,
  .wp-block-paragraph,
  .wp-block-list,
  .wp-block-list li {
    color: #e8eef5 !important;
  }
  .entry-content strong,
  .wp-block-paragraph strong,
  .wp-block-list li strong {
    color: #ffffff !important;
    font-weight: 800 !important;
  }

  /* Article Grid Cards ("Some of our articles" & /articles/ archive) */
  .elementor-post,
  .elementor-grid-item,
  article.post {
    background: linear-gradient(180deg, rgba(10, 37, 68, 0.92) 0%, rgba(4, 13, 26, 0.96) 100%) !important;
    border: 1px solid rgba(0, 212, 255, 0.38) !important;
    border-radius: 14px !important;
    overflow: hidden;
    box-shadow: 0 14px 36px rgba(0, 0, 0, 0.55) !important;
  }
  .elementor-post__title,
  .elementor-post__title a,
  .entry-title a,
  article.post h2 a,
  article.post h3 a {
    color: #ffffff !important;
    font-weight: 800 !important;
    text-decoration: none !important;
    line-height: 1.35 !important;
  }
  .elementor-post__title a:hover,
  .entry-title a:hover {
    color: #ffc107 !important;
  }
  .elementor-post__excerpt,
  .elementor-post__excerpt p,
  .entry-summary,
  .entry-summary p {
    color: #d6e2f0 !important;
    font-size: 13.5px !important;
    line-height: 1.6 !important;
  }
  .elementor-post__read-more,
  a.more-link {
    color: #ffc107 !important;
    font-weight: 800 !important;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    font-size: 12px !important;
  }
  .elementor-post__meta-data,
  .elementor-post__meta-data span {
    color: #7ce8ff !important;
  }

  /* Navigation Menu Links, Dropdowns, Buttons & WooCommerce Shop / Enroll Cards */
  .elementor-nav-menu a,
  .elementor-item {
    color: #ffffff !important;
    font-weight: 600 !important;
  }
  .elementor-nav-menu a:hover,
  .elementor-item.elementor-item-active {
    color: #ffc107 !important;
  }
  .elementor-nav-menu--dropdown {
    background-color: #061c3c !important;
    border: 1px solid rgba(0, 212, 255, 0.42) !important;
  }
  .elementor-nav-menu--dropdown a {
    color: #e8eef5 !important;
  }
  .elementor-nav-menu--dropdown a:hover {
    background-color: rgba(0, 212, 255, 0.18) !important;
    color: #ffc107 !important;
  }
  .elementor-button,
  .woocommerce a.button,
  .woocommerce button.button,
  button[type="submit"],
  input[type="submit"] {
    background: linear-gradient(135deg, #ffd24d 0%, #ffc107 55%, #c8963e 100%) !important;
    color: #040d1a !important;
    font-weight: 800 !important;
    border: 1px solid #ffe082 !important;
    border-radius: 100px !important;
    box-shadow: 0 8px 24px rgba(255, 193, 7, 0.28) !important;
  }
  .elementor-button span,
  .elementor-button i,
  .elementor-button .elementor-button-text {
    color: #040d1a !important;
    font-weight: 800 !important;
  }

  /* Counters, Pricing Tables, Shop Prices & Form Inputs */
  .elementor-counter-number-wrapper,
  .elementor-counter-number,
  .price,
  .woocommerce-Price-amount,
  .amount {
    color: #ffc107 !important;
    font-weight: 800 !important;
  }
  .elementor-counter-title {
    color: #e8eef5 !important;
  }
  input.elementor-field,
  textarea.elementor-field,
  select.elementor-field,
  .woocommerce input.input-text,
  .woocommerce textarea {
    background: rgba(6, 28, 60, 0.92) !important;
    border: 1px solid rgba(0, 212, 255, 0.45) !important;
    color: #ffffff !important;
    border-radius: 10px !important;
  }
  input.elementor-field::placeholder,
  textarea.elementor-field::placeholder {
    color: #9fb0c2 !important;
  }
  label, .elementor-field-label {
    color: #ffffff !important;
    font-weight: 600 !important;
  }
  /* Fix any light-background cards (e.g., booking widgets or white boxes) so text inside light boxes stays readable */
  .wpbc_booking_form_structure,
  .wpbc_wizard_step,
  .wpbc_booking_appointment,
  .wpbc_booking_appointment__stage,
  .wpbc_booking_ui_theme_scope,
  .wpbc_container,
  .wpbc_structure_form {
    background: linear-gradient(180deg, #061c3c 0%, #040d1a 100%) !important;
    border: 1.5px solid rgba(0, 212, 255, 0.45) !important;
    border-radius: 16px !important;
    color: #e8eef5 !important;
    box-shadow: 0 22px 55px rgba(0, 0, 0, 0.7) !important;
    padding: 24px !important;
  }
  .wpbc_booking_appointment__heading h3,
  .wpbc_booking_appointment__heading h2,
  .wpbc_booking_appointment__heading h4 {
    color: #ffffff !important;
    font-family: 'Cinzel', serif !important;
    font-weight: 800 !important;
    text-shadow: none !important;
  }
  .wpbc_booking_appointment__heading p {
    color: #c8d6e5 !important;
    font-size: 14px !important;
  }
  .wpbc_booking_appointment__progress_label {
    color: #e8eef5 !important;
    font-weight: 700 !important;
  }
  .wpbc_booking_appointment__progress_step.is-active .wpbc_booking_appointment__progress_label {
    color: #ffc107 !important;
  }
  .wpbc_booking_appointment__progress_number {
    background: #0a2544 !important;
    border: 1.5px solid #00d4ff !important;
    color: #ffffff !important;
    font-weight: 800 !important;
  }
  .wpbc_booking_appointment__progress_step.is-active .wpbc_booking_appointment__progress_number {
    background: linear-gradient(135deg, #ffd24d 0%, #ffc107 55%, #c8963e 100%) !important;
    border-color: #ffe082 !important;
    color: #040d1a !important;
  }
  .wpbc_booking_appointment__choice,
  .wpbc_booking_appointment__catalog_card,
  .wpbc_booking_appointment__provider_card {
    background: rgba(10, 37, 68, 0.92) !important;
    border: 1.5px solid rgba(0, 212, 255, 0.45) !important;
    border-radius: 14px !important;
    padding: 18px !important;
    color: #ffffff !important;
    transition: all 0.16s ease !important;
  }
  .wpbc_booking_appointment__choice:hover,
  .wpbc_booking_appointment__catalog_card:hover {
    border-color: #ffc107 !important;
    box-shadow: 0 10px 28px rgba(255, 193, 7, 0.22) !important;
  }
  .wpbc_booking_appointment__choice_body strong,
  .wpbc_booking_appointment__choice_title {
    color: #ffc107 !important;
    font-size: 17px !important;
    font-weight: 800 !important;
    display: block !important;
    margin-bottom: 4px !important;
  }
  .wpbc_booking_appointment__choice_meta {
    color: #00d4ff !important;
    font-weight: 700 !important;
    font-size: 13px !important;
    display: block !important;
    margin-bottom: 4px !important;
  }
  .wpbc_booking_appointment__choice_description {
    color: #e8eef5 !important;
    font-size: 13.5px !important;
  }
  /* Calendar & Time Slot Cells inside WPBC Step 3 */
  .datepick-inline,
  .wpbc_calendar_wraper,
  .datepick-header,
  .datepick {
    background: #061c3c !important;
    color: #ffffff !important;
    border-color: rgba(0, 212, 255, 0.4) !important;
  }
  .datepick-days-cell a,
  .wpbc_time_selector_item {
    background: #0a2544 !important;
    color: #ffffff !important;
    border: 1px solid rgba(0, 212, 255, 0.35) !important;
  }

  /* Elementor Pricing Tables (/please-read-the-rules-carefully/) & WooCommerce Loop Cards (/shop-page/, /my-account-page/) */
  .elementor-price-table,
  .e-loop-item,
  .woocommerce-form-login,
  .woocommerce-form-register,
  .woocommerce-info,
  .woocommerce-message {
    background: linear-gradient(180deg, #071f40 0%, #040d1a 100%) !important;
    border: 1px solid rgba(0, 212, 255, 0.42) !important;
    border-radius: 16px !important;
    color: #e8eef5 !important;
  }
  .elementor-price-table__header {
    background: linear-gradient(135deg, #0a2544 0%, #061c3c 100%) !important;
    border-bottom: 1px solid rgba(255, 193, 7, 0.4) !important;
  }
  .elementor-price-table__heading {
    color: #ffc107 !important;
    font-family: 'Cinzel', serif !important;
    font-weight: 800 !important;
  }
  .elementor-price-table__subheading,
  .elementor-price-table__period,
  .elementor-price-table__feature-inner,
  .elementor-price-table__additional_info {
    color: #e8eef5 !important;
  }
  .elementor-price-table__price,
  .elementor-price-table__currency,
  .elementor-price-table__integer-part {
    color: #ffffff !important;
    font-weight: 800 !important;
  }

  /* Upgrade Elementor Header to Official SPC Brand Kit Imperial Navy + Cyan/Gold Glass */
  header.elementor-location-header > section.elementor-section {
    background: linear-gradient(180deg, rgba(6, 28, 60, 0.97) 0%, rgba(4, 13, 26, 0.97) 100%) !important;
    border-bottom: 1px solid rgba(0, 212, 255, 0.42) !important;
    box-shadow: 0 12px 36px rgba(0, 0, 0, 0.65) !important;
    backdrop-filter: blur(14px) !important;
  }
  /* Official SPC Brand Kit Top Ribbon */
  #spcu-brand-top-ribbon {
    background: linear-gradient(90deg, #040d1a 0%, #072247 50%, #040d1a 100%);
    border-bottom: 1px solid rgba(255, 193, 7, 0.45);
    padding: 8px 16px;
    font-family: 'Space Grotesk', sans-serif;
    font-size: 11.5px;
    color: #ffffff !important;
    position: relative;
    z-index: 9998;
  }
  #spcu-brand-top-ribbon .spcu-rib-inner {
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;
  }
  #spcu-brand-top-ribbon .spcu-rib-left {
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 0;
  }
  #spcu-brand-top-ribbon .spcu-rib-links {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
  }
  .spcu-pill-link {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 5px 12px;
    border-radius: 100px;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    text-decoration: none !important;
    border: 1px solid rgba(0, 212, 255, 0.55);
    background: rgba(10, 37, 68, 0.92);
    color: #ffffff !important;
    transition: all 0.16s ease;
  }
  .spcu-pill-link:hover {
    border-color: #00d4ff;
    background: rgba(0, 212, 255, 0.25);
    color: #ffffff !important;
  }
  .spcu-pill-link.gold {
    background: linear-gradient(135deg, #ffd24d 0%, #ffc107 55%, #c8963e 100%) !important;
    color: #040d1a !important;
    border-color: #ffe082 !important;
    font-weight: 800 !important;
  }

  /* Showcase Strip: 6 Member-Exclusive Textbooks & Curriculum Preview */
  #spcu-brand-showcase-section {
    max-width: 1260px;
    margin: 34px auto 42px;
    padding: 0 18px;
    font-family: 'Inter', sans-serif;
  }
  .spcu-show-card {
    background: radial-gradient(900px 460px at 82% 8%, rgba(0, 132, 209, 0.32), transparent 68%),
                radial-gradient(700px 380px at 12% 96%, rgba(200, 150, 62, 0.2), transparent 70%),
                linear-gradient(160deg, #061c3c 0%, #040d1a 75%);
    border: 1px solid rgba(0, 212, 255, 0.45);
    border-radius: 18px;
    padding: 32px 28px;
    box-shadow: 0 24px 60px rgba(0, 0, 0, 0.65);
  }
  .spcu-show-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 16px;
    margin-top: 22px;
  }
  .spcu-bk-tile {
    background: rgba(4, 13, 26, 0.94);
    border: 1px solid rgba(0, 212, 255, 0.42);
    border-radius: 14px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 12px;
    transition: transform 0.16s ease, border-color 0.16s ease;
  }
  .spcu-bk-tile:hover {
    transform: translateY(-2px);
    border-color: #ffc107;
  }
  .spcu-bk-top {
    display: flex;
    gap: 14px;
    align-items: flex-start;
  }
  .spcu-bk-top img {
    width: 72px;
    height: 100px;
    object-fit: cover;
    border-radius: 8px;
    border: 1px solid #00d4ff;
    flex-shrink: 0;
  }

  /* ==========================================================================
     FLOATING SPC UNIVERSITY KNOWLEDGE BASE CONCIERGE CHATBOT (ULTRA-HIGH CONTRAST)
     ========================================================================== */
  #spcu-concierge-launcher {
    position: fixed;
    right: 18px;
    bottom: 18px;
    z-index: 99999;
    display: flex;
    align-items: center;
    gap: 10px;
    background: linear-gradient(135deg, #072247 0%, #040d1a 100%) !important;
    border: 2px solid #ffc107 !important;
    color: #ffffff !important;
    padding: 10px 18px 10px 12px;
    border-radius: 100px;
    box-shadow: 0 14px 38px rgba(0, 0, 0, 0.85), 0 0 24px rgba(0, 212, 255, 0.42);
    cursor: pointer;
    font-family: 'Space Grotesk', sans-serif;
    transition: transform 0.16s ease;
  }
  #spcu-concierge-launcher * {
    color: #ffffff !important;
  }
  #spcu-concierge-launcher .spcu-launch-kicker {
    color: #ffc107 !important;
  }
  #spcu-concierge-launcher:hover {
    transform: translateY(-2px);
  }
  #spcu-concierge-launcher img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1.5px solid #00d4ff;
    object-fit: cover;
  }
  #spcu-concierge-panel {
    position: fixed;
    right: 18px;
    bottom: 86px;
    width: 420px;
    max-width: calc(100vw - 24px);
    height: 600px;
    max-height: calc(100vh - 110px);
    background: linear-gradient(180deg, #072042 0%, #040d1a 100%) !important;
    border: 2px solid #00d4ff !important;
    border-radius: 18px;
    box-shadow: 0 28px 75px rgba(0, 0, 0, 0.92);
    z-index: 99999;
    display: none;
    flex-direction: column;
    overflow: hidden;
    font-family: 'Inter', sans-serif;
    color: #ffffff !important;
  }
  #spcu-concierge-panel.open {
    display: flex;
  }
  .spcu-cb-head {
    background: linear-gradient(135deg, #040d1a 0%, #0c2d57 100%) !important;
    border-bottom: 1.5px solid #ffc107 !important;
    padding: 13px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
  }
  .spcu-cb-feed {
    flex: 1;
    overflow-y: auto;
    padding: 14px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    background: #040d1a !important;
  }
  .spcu-cb-msg {
    padding: 13px 15px;
    border-radius: 12px;
    font-size: 14px !important;
    line-height: 1.62 !important;
    word-break: break-word;
  }
  .spcu-cb-msg.bot,
  .spcu-cb-msg.bot div,
  .spcu-cb-msg.bot p,
  .spcu-cb-msg.bot span {
    background: #081e3d !important;
    color: #ffffff !important;
  }
  .spcu-cb-msg.bot {
    border: 1px solid rgba(0, 212, 255, 0.5) !important;
    border-left: 4px solid #ffc107 !important;
  }
  .spcu-cb-msg.bot strong {
    color: #ffd24d !important;
    font-weight: 800 !important;
  }
  .spcu-cb-msg.usr,
  .spcu-cb-msg.usr * {
    background: linear-gradient(135deg, #0084d1 0%, #062b5b 100%) !important;
    border: 1px solid #00d4ff !important;
    color: #ffffff !important;
    font-weight: 600 !important;
    align-self: flex-end;
    max-width: 88%;
  }
  .spcu-cb-chips {
    display: flex;
    gap: 6px;
    overflow-x: auto;
    padding: 9px 12px;
    background: #061831 !important;
    border-top: 1px solid rgba(0, 212, 255, 0.35);
    scrollbar-width: none;
  }
  .spcu-cb-chips::-webkit-scrollbar { display: none; }
  button.spcu-cb-chip {
    flex-shrink: 0;
    background: #0b2b53 !important;
    border: 1px solid #00d4ff !important;
    color: #ffffff !important;
    border-radius: 100px !important;
    padding: 6px 12px !important;
    font-size: 11.5px !important;
    font-weight: 700 !important;
    cursor: pointer;
    white-space: nowrap;
    box-shadow: none !important;
  }
  button.spcu-cb-chip:hover {
    background: #0084d1 !important;
    border-color: #ffc107 !important;
    color: #ffffff !important;
  }
  .spcu-cb-foot {
    padding: 10px 12px;
    background: #040d1a !important;
    border-top: 1px solid rgba(0, 212, 255, 0.4);
    display: flex;
    gap: 8px;
  }
  input.spcu-cb-input {
    flex: 1;
    background: #0a2544 !important;
    border: 1.5px solid #00d4ff !important;
    color: #ffffff !important;
    -webkit-text-fill-color: #ffffff !important;
    border-radius: 10px !important;
    padding: 10px 12px !important;
    font-size: 16px !important;
    outline: none;
  }
  input.spcu-cb-input::placeholder {
    color: #b8cae0 !important;
    -webkit-text-fill-color: #b8cae0 !important;
    opacity: 1 !important;
  }
  button.spcu-cb-send {
    background: linear-gradient(135deg, #ffd24d 0%, #ffc107 55%, #c8963e 100%) !important;
    color: #040d1a !important;
    -webkit-text-fill-color: #040d1a !important;
    border: 1px solid #ffe082 !important;
    border-radius: 10px !important;
    padding: 0 16px !important;
    font-family: 'Space Grotesk', sans-serif !important;
    font-size: 12.5px !important;
    font-weight: 800 !important;
    text-transform: uppercase;
    cursor: pointer;
  }

  @media (max-width: 900px) {
    html, body, #page, .site, .site-content {
      width: 100% !important;
      max-width: 100vw !important;
      overflow-x: hidden !important;
    }
    #spcu-brand-top-ribbon {
      padding: 8px 10px !important;
    }
    #spcu-brand-top-ribbon .spcu-rib-inner {
      flex-direction: column !important;
      align-items: flex-start !important;
      gap: 6px !important;
    }
    #spcu-brand-top-ribbon .spcu-rib-links {
      width: 100% !important;
      overflow-x: auto !important;
      flex-wrap: nowrap !important;
      -webkit-overflow-scrolling: touch;
      scrollbar-width: none;
      padding-bottom: 2px;
    }
    #spcu-brand-top-ribbon .spcu-rib-links::-webkit-scrollbar {
      display: none;
    }
    .spcu-pill-link {
      flex-shrink: 0;
      white-space: nowrap;
      font-size: 10.5px !important;
      padding: 5px 10px !important;
    }
    .spcu-show-grid { grid-template-columns: 1fr; }
    .spcu-show-card { padding: 18px 12px; }
    .spcu-bk-tile { padding: 14px 12px; }
    .spcu-bk-tile .spcu-pill-link {
      white-space: normal !important;
      text-align: center;
      width: 100%;
    }
    .wpbc_booking_form_structure,
    .wpbc_wizard_step,
    .wpbc_booking_appointment,
    .wpbc_booking_appointment__stage,
    .wpbc_booking_ui_theme_scope {
      padding: 14px 12px !important;
      max-width: 100% !important;
    }
    #spcu-concierge-panel {
      right: 8px;
      left: 8px;
      bottom: 72px;
      width: auto;
      max-width: none;
      height: 74vh;
    }
    #spcu-concierge-launcher {
      right: 10px;
      bottom: 10px;
      padding: 7px 12px 7px 9px;
      max-width: calc(100vw - 20px);
    }
    #spcu-concierge-launcher img {
      width: 34px;
      height: 34px;
    }
  }
</style>
`;
}

const BRAND_TOP_RIBBON_HTML = `
<div id="spcu-brand-top-ribbon" role="region" aria-label="SPC University Official Brand & Knowledge Suite">
  <div class="spcu-rib-inner">
    <div class="spcu-rib-left">
      <img src="https://spcuniversity.com/brand-kit/images/icon-atlas.png" alt="SPC University Atlas Seal" style="width:28px;height:28px;border-radius:50%;border:1px solid #00d4ff;flex-shrink:0">
      <span style="letter-spacing:0.12em;text-transform:uppercase;font-weight:700;color:#ffc107">SPC UNIVERSITY · SCHOOL OF PRIVATE CIVICS</span>
    </div>
    <div class="spcu-rib-links">
      <h1 style="position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0">SPC University — School of Private Civics: Private Trust Architecture, Common-Law Pure Trusts, Estate Planning &amp; Constitutional Civics Education</h1>
      <button type="button" class="spcu-pill-link gold" onclick="window.toggleSpcuConcierge && window.toggleSpcuConcierge(true)" style="cursor:pointer">💬 Ask SPCU Knowledge AI</button>
      <a class="spcu-pill-link" href="https://spcuniversity.com/please-read-the-rules-carefully/">🎓 Enroll Now</a>
      <a class="spcu-pill-link" href="https://spcuniversity.com/shop-page/">🛒 Curriculum Shop</a>
      <a class="spcu-pill-link" href="https://member.spcuniversity.com/login">🔒 Member Portal Login</a>
    </div>
  </div>
</div>
`;

const BRAND_FOOTER_SHOWCASE_AND_CHATBOT_HTML = `
<section id="spcu-brand-showcase-section" aria-label="SPC University Official Member-Only Textbook Curriculum">
  <div class="spcu-show-card">
    <div style="display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:14px;border-bottom:1px solid rgba(0,212,255,0.3);padding-bottom:16px">
      <div style="display:flex;align-items:center;gap:14px;flex-wrap:wrap">
        <img src="https://spcuniversity.com/brand-kit/images/logo-compact.png" alt="SPC University Shield" style="height:52px;width:auto;filter:drop-shadow(0 4px 14px rgba(0,212,255,0.35))">
        <div>
          <div style="font-family:'Space Grotesk',sans-serif;font-size:11px;font-weight:700;letter-spacing:0.18em;color:#ffc107;text-transform:uppercase">🔒 ENROLLED MEMBER-EXCLUSIVE CURRICULUM · 6 FLAGSHIP TEXTBOOKS (104,519 WORDS)</div>
          <h2 style="font-family:'Cinzel',serif;font-size:clamp(20px,2.6vw,28px);font-weight:800;color:#ffffff;margin:4px 0 0;text-transform:uppercase">Official SPC University Member Publication &amp; Trust Vault</h2>
        </div>
      </div>
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        <a class="spcu-pill-link gold" href="https://spcuniversity.com/please-read-the-rules-carefully/" style="padding:9px 16px;font-size:12px">🎓 Enroll to Unlock Member Vault →</a>
        <a class="spcu-pill-link" href="https://member.spcuniversity.com/login" style="padding:9px 16px;font-size:12px">🔒 Member Login ↗</a>
      </div>
    </div>

    <div class="spcu-show-grid">
      <div class="spcu-bk-tile">
        <div class="spcu-bk-top">
          <img src="https://spcuniversity.com/brand-kit/images/cover-front-estate-vault.png" alt="The Complete Estate Planning Vault">
          <div>
            <div style="font-family:'Space Grotesk',sans-serif;font-size:10.5px;color:#ffc107;font-weight:700">🔒 MEMBER VAULT · $1,997 TIER · 11 CHAPTERS</div>
            <div style="font-family:'Cinzel',serif;font-size:16.5px;font-weight:800;color:#fff;margin:3px 0">The Complete Estate Planning Vault</div>
            <div style="font-size:12px;color:#9fb0c2;line-height:1.45">Irrevocable Common-Law Pure Trust Indenture, Pour-Over Will, POA, Living Will &amp; Schedule A Deeds.</div>
          </div>
        </div>
        <a class="spcu-pill-link gold" href="https://member.spcuniversity.com/login" style="justify-content:center">🔒 Member Login / Enroll to Unlock →</a>
      </div>

      <div class="spcu-bk-tile">
        <div class="spcu-bk-top">
          <img src="https://spcuniversity.com/brand-kit/images/cover-front-trust-architecture.png" alt="Trust Architecture: 10 Layers of Asset Protection">
          <div>
            <div style="font-family:'Space Grotesk',sans-serif;font-size:10.5px;color:#ffc107;font-weight:700">🔒 MEMBER VAULT · $997 TIER · 8 CHAPTERS</div>
            <div style="font-family:'Cinzel',serif;font-size:16.5px;font-weight:800;color:#fff;margin:3px 0">Trust Architecture: 10 Layers of Asset Protection</div>
            <div style="font-size:12px;color:#9fb0c2;line-height:1.45">The 10-Layer Glass Monolith asset protection stack, Spendthrift § 56 shield &amp; Holding LLC architecture.</div>
          </div>
        </div>
        <a class="spcu-pill-link gold" href="https://member.spcuniversity.com/login" style="justify-content:center">🔒 Member Login / Enroll to Unlock →</a>
      </div>

      <div class="spcu-bk-tile">
        <div class="spcu-bk-top">
          <img src="https://spcuniversity.com/brand-kit/images/cover-front-bank-packet.png" alt="The Bank Packet: Open Your Trust Account">
          <div>
            <div style="font-family:'Space Grotesk',sans-serif;font-size:10.5px;color:#ffc107;font-weight:700">🔒 MEMBER VAULT · $497 TIER · 7 CHAPTERS</div>
            <div style="font-family:'Cinzel',serif;font-size:16.5px;font-weight:800;color:#fff;margin:3px 0">The Bank Packet: Open Your Trust Account</div>
            <div style="font-size:12px;color:#9fb0c2;line-height:1.45">UTC § 1013 Certificate of Trust, IRS SS-4 EIN walkthrough, FinCEN briefings &amp; banker escalation scripts.</div>
          </div>
        </div>
        <a class="spcu-pill-link gold" href="https://member.spcuniversity.com/login" style="justify-content:center">🔒 Member Login / Enroll to Unlock →</a>
      </div>

      <div class="spcu-bk-tile">
        <div class="spcu-bk-top">
          <img src="https://spcuniversity.com/brand-kit/images/cover-front-client-dossier.png" alt="Client Dossier: Strategy Session Playbook">
          <div>
            <div style="font-family:'Space Grotesk',sans-serif;font-size:10.5px;color:#ffc107;font-weight:700">🔒 MEMBER VAULT · $997 TIER · 7 CHAPTERS</div>
            <div style="font-family:'Cinzel',serif;font-size:16.5px;font-weight:800;color:#fff;margin:3px 0">Client Dossier: Strategy Session Playbook</div>
            <div style="font-size:12px;color:#9fb0c2;line-height:1.45">7-Phase Intake Diagnostic, Probate Vulnerability Matrix, Solvency Affidavit &amp; Prescription Memo.</div>
          </div>
        </div>
        <a class="spcu-pill-link gold" href="https://member.spcuniversity.com/login" style="justify-content:center">🔒 Member Login / Enroll to Unlock →</a>
      </div>

      <div class="spcu-bk-tile">
        <div class="spcu-bk-top">
          <img src="https://spcuniversity.com/brand-kit/images/cover-front-know-your-rights.png" alt="Know Your Rights: What Works in Court">
          <div>
            <div style="font-family:'Space Grotesk',sans-serif;font-size:10.5px;color:#ffc107;font-weight:700">🔒 MEMBER VAULT · $297 TIER · 7 CHAPTERS</div>
            <div style="font-family:'Cinzel',serif;font-size:16.5px;font-weight:800;color:#fff;margin:3px 0">Know Your Rights: What Works in Court</div>
            <div style="font-size:12px;color:#9fb0c2;line-height:1.45">4th, 5th &amp; 6th Amendment record preservation, traffic stop dialogues, debt validation &amp; courtroom objections.</div>
          </div>
        </div>
        <a class="spcu-pill-link gold" href="https://member.spcuniversity.com/login" style="justify-content:center">🔒 Member Login / Enroll to Unlock →</a>
      </div>

      <div class="spcu-bk-tile">
        <div class="spcu-bk-top">
          <img src="https://spcuniversity.com/brand-kit/images/ebook-doctrine-cover.jpg" alt="The SPCU Doctrine: Foundations Before Remedies">
          <div>
            <div style="font-family:'Space Grotesk',sans-serif;font-size:10.5px;color:#ffc107;font-weight:700">🔒 MEMBER VAULT · $497 TIER · 7 CHAPTERS</div>
            <div style="font-family:'Cinzel',serif;font-size:16.5px;font-weight:800;color:#fff;margin:3px 0">The SPCU Doctrine: Foundations Before Remedies</div>
            <div style="font-size:12px;color:#9fb0c2;line-height:1.45">The 6 Core Jurisprudential Axioms, 20 Maxims of Equity, Sui Juris capacity &amp; private contract discipline.</div>
          </div>
        </div>
        <a class="spcu-pill-link gold" href="https://member.spcuniversity.com/login" style="justify-content:center">🔒 Member Login / Enroll to Unlock →</a>
      </div>
    </div>
  </div>
</section>

<!-- Floating SPC University Knowledge Base Concierge Chatbot -->
<div id="spcu-concierge-launcher" onclick="window.toggleSpcuConcierge()" role="button" tabindex="0" aria-label="Open SPC University Knowledge Base Concierge">
  <img src="https://spcuniversity.com/brand-kit/images/icon-atlas.png" alt="SPCU AI">
  <div>
    <div class="spcu-launch-kicker" style="font-size:9.5px;letter-spacing:0.14em;color:#ffc107 !important;font-weight:800;text-transform:uppercase">2,260-PASSAGE KNOWLEDGE AI</div>
    <div style="font-size:13px;font-weight:800;color:#ffffff !important">Ask SPC University Concierge</div>
  </div>
</div>

<aside id="spcu-concierge-panel" aria-label="SPC University Knowledge Base Concierge Chat">
  <div class="spcu-cb-head">
    <div style="display:flex;align-items:center;gap:10px;min-width:0">
      <img src="https://spcuniversity.com/brand-kit/images/icon-atlas.png" alt="SPCU" style="width:36px;height:36px;border-radius:50%;border:1.5px solid #00d4ff;flex-shrink:0">
      <div style="min-width:0">
        <div style="font-family:'Space Grotesk',sans-serif;font-size:9.5px;letter-spacing:0.16em;color:#ffc107 !important;font-weight:800;text-transform:uppercase">SPC UNIVERSITY · KNOWLEDGE CONCIERGE</div>
        <div style="font-family:'Cinzel',serif;font-size:14.5px;font-weight:800;color:#ffffff !important;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">Curriculum &amp; Doctrine Q&amp;A Assistant</div>
      </div>
    </div>
    <button type="button" onclick="window.toggleSpcuConcierge(false)" style="background:#0a2544 !important;border:1.5px solid #00d4ff !important;color:#ffffff !important;-webkit-text-fill-color:#ffffff !important;border-radius:50%;width:32px;height:32px;cursor:pointer;font-weight:800;box-shadow:none !important">✕</button>
  </div>

  <div id="spcu-cb-feed" class="spcu-cb-feed">
    <div class="spcu-cb-msg bot" style="background:#081e3d !important;color:#ffffff !important">
      <div style="font-family:'Space Grotesk',sans-serif;font-size:10px;letter-spacing:0.14em;color:#00d4ff !important;font-weight:700;margin-bottom:4px">OFFICIAL SPC UNIVERSITY KNOWLEDGE CONCIERGE</div>
      <div style="color:#ffffff !important">
        Welcome to <strong style="color:#ffd24d !important">SPC University — School of Private Civics (Law • Commerce • Empowerment)</strong>.<br><br>
        I have mastered all <strong style="color:#ffd24d !important">2,260 passages</strong> of our Worldwide Trust Corpus and all <strong style="color:#ffd24d !important">128 SPC University articles &amp; lessons</strong>.<br><br>
        Ask me any question about <strong style="color:#ffd24d !important">Foundations Before Remedies</strong>, the <strong style="color:#ffd24d !important">10 Layers of Trust Architecture</strong>, <strong style="color:#ffd24d !important">Common-Law Pure Trusts</strong>, <strong style="color:#ffd24d !important">The Bank Packet (UTC § 1013)</strong>, <strong style="color:#ffd24d !important">Equity Maxims</strong>, or <strong style="color:#ffd24d !important">Constitutional Rights</strong>—and I will give you a clear educational answer and guide you to enroll or access your Member Portal.
      </div>
    </div>
  </div>

  <div class="spcu-cb-chips">
    <button type="button" class="spcu-cb-chip" onclick="window.askSpcuConciergePreset('What does Foundations Before Remedies mean in the SPCU Doctrine?')">⚡ Foundations Before Remedies?</button>
    <button type="button" class="spcu-cb-chip" onclick="window.askSpcuConciergePreset('Explain the 10 Layers of Trust Architecture in plain English.')">🏛️ 10 Layers of Trust?</button>
    <button type="button" class="spcu-cb-chip" onclick="window.askSpcuConciergePreset('How does The Bank Packet use UTC § 1013 to open a trust bank account privately?')">🏦 Bank Packet &amp; UTC § 1013?</button>
    <button type="button" class="spcu-cb-chip" onclick="window.askSpcuConciergePreset('How do I enroll in SPC University and access the Member-Only Textbooks?')">🔒 How Do I Become a Member?</button>
  </div>

  <div class="spcu-cb-foot">
    <input id="spcu-cb-input" class="spcu-cb-input" type="text" placeholder="Ask any question about trusts, banking, equity, or SPCU..." onkeydown="if(event.key==='Enter')window.sendSpcuConciergeMsg()">
    <button type="button" id="spcu-cb-send" class="spcu-cb-send" onclick="window.sendSpcuConciergeMsg()">Ask →</button>
  </div>
</aside>

<script>
(function(){
  // 1. Clean up any legacy WordPress dummy text, duplicate descriptions, or typos across all pages immediately on load
  function sanitizePageCopyAndContrast() {
    document.querySelectorAll("p, span, h1, h2, h3, h4, div").forEach(function(el) {
      if (el.children.length === 0 && el.textContent) {
        var t = el.textContent.trim();
        if (/^lorem ipsum dolor sit amet/i.test(t)) {
          el.textContent = "Primary statutory research, Supreme Court case-law analysis, private trust briefings, and constitutional verification memoranda authored by Yusef El and the SPC University Faculty.";
        } else if (t === "VI Business Structuring") {
          el.textContent = "VI. Business Structuring";
        } else if (t === "Chose The Right Membership") {
          el.textContent = "Choose The Right Membership";
        } else if (t === "Chose a membership to fit your budget.") {
          el.textContent = "Choose an SPC University membership tier engineered for your study and structuring goals.";
        } else if (t === "Free Premium Courses") {
          el.textContent = "Member-Exclusive Curriculum";
        } else if (/^Expert-led courses that take you from complete beginner/i.test(t)) {
          el.textContent = "Structured, step-by-step doctrinal modules taking you from foundational capacity and equity standing to advanced trust and private ordering mastery.";
        }
      }
    });
    // Fix Box VI duplicate description under VI. Business Structuring
    var box6 = document.querySelector(".elementor-element-30aaf63 .elementor-icon-box-description");
    if (box6) {
      box6.textContent = "Private holding trusts, special-purpose operating entities, and non-recourse commercial governance.";
    }
    var designCredit = document.querySelector(".elementor-element-b6d9353");
    if (designCredit) {
      designCredit.innerHTML = "<div class='elementor-widget-container'><p style='color:#ffc107 !important;font-weight:700'>SPC University — School of Private Civics · Law • Commerce • Empowerment</p></div>";
    }

    // 2. Ensure every article card on Homepage and /articles/ and every single article displays "By Yusef El · Founder, SPC University"
    document.querySelectorAll(".post-author, a.post-author").forEach(function(a) {
      a.textContent = "By Yusef El · Founder, SPC University";
      a.style.color = "#ffc107";
      a.style.fontWeight = "800";
    });
    document.querySelectorAll(".elementor-element-68cae3c .elementor-widget-container").forEach(function(el) {
      el.innerHTML = "<span class='spcu-yusef-byline' style='display:inline-flex;align-items:center;gap:8px;padding:6px 14px;border-radius:100px;background:rgba(255,193,7,0.14);border:1px solid #ffc107;color:#ffc107 !important;font-family:Space Grotesk,sans-serif;font-size:12px;font-weight:800;letter-spacing:0.08em;text-transform:uppercase'>✍️ Authored by Yusef El · Founder, SPC University</span>";
    });
    document.querySelectorAll(".elementor-post__text").forEach(function(card) {
      if (!card.querySelector(".spcu-yusef-card-byline")) {
        var by = document.createElement("div");
        by.className = "spcu-yusef-card-byline";
        by.setAttribute("style", "font-family:'Space Grotesk',sans-serif;font-size:11px;font-weight:800;color:#ffc107 !important;letter-spacing:0.08em;text-transform:uppercase;margin:6px 0 8px;");
        by.textContent = "✍️ By Yusef El · Founder, SPC University";
        var titleEl = card.querySelector(".elementor-post__title");
        if (titleEl && titleEl.nextSibling) {
          card.insertBefore(by, titleEl.nextSibling);
        } else {
          card.insertBefore(by, card.firstChild);
        }
      }
    });

    // 3. Detect any section, widget, or container with a light/white computed background (including dynamically rendered booking stages) and switch it to Official SPC Imperial Navy (#061c3c / #040d1a)
    function convertLightBoxesToImperialNavy() {
      document.querySelectorAll(".elementor-section, .post-inner-wrap, .entry-content-wrap, .elementor-widget-table-of-contents .elementor-widget-container, .wpbc_booking_appointment__stage, .wpbc_booking_ui_theme_scope, .wpbc_booking_appointment__choice, .elementor-price-table, .e-loop-item, .woocommerce-form").forEach(function(sec) {
        try {
          var bg = window.getComputedStyle(sec).backgroundColor || "";
          var m = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
          if (m) {
            var r = parseInt(m[1], 10), g = parseInt(m[2], 10), b = parseInt(m[3], 10);
            if (r > 175 && g > 175 && b > 175) {
              sec.style.setProperty("background", "linear-gradient(180deg, #061c3c 0%, #040d1a 100%)", "important");
              sec.style.setProperty("background-color", "#061c3c", "important");
              sec.style.setProperty("color", "#e8eef5", "important");
            }
          }
        } catch (e) {}
      });
    }
    convertLightBoxesToImperialNavy();
    try {
      var obs = new MutationObserver(function() {
        convertLightBoxesToImperialNavy();
      });
      obs.observe(document.body, { childList: true, subtree: true });
    } catch (e) {}
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", sanitizePageCopyAndContrast);
  } else {
    sanitizePageCopyAndContrast();
  }

  var hist = [];
  window.toggleSpcuConcierge = function(force) {
    var p = document.getElementById("spcu-concierge-panel");
    if (!p) return;
    var open = typeof force === "boolean" ? force : !p.classList.contains("open");
    p.classList.toggle("open", open);
    if (open) {
      setTimeout(function(){
        var inp = document.getElementById("spcu-cb-input");
        if (inp) inp.focus();
      }, 120);
    }
  };
  window.askSpcuConciergePreset = function(q) {
    window.toggleSpcuConcierge(true);
    var inp = document.getElementById("spcu-cb-input");
    if (inp) inp.value = q;
    window.sendSpcuConciergeMsg();
  };
  function escHtml(s) {
    return String(s || "").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
  }
  window.sendSpcuConciergeMsg = async function() {
    var inp = document.getElementById("spcu-cb-input");
    var feed = document.getElementById("spcu-cb-feed");
    var btn = document.getElementById("spcu-cb-send");
    if (!inp || !feed) return;
    var q = (inp.value || "").trim();
    if (!q) return;
    inp.value = "";

    var uDiv = document.createElement("div");
    uDiv.className = "spcu-cb-msg usr";
    uDiv.setAttribute("style", "background:linear-gradient(135deg,#0084d1 0%,#062b5b 100%) !important;color:#ffffff !important;border:1px solid #00d4ff !important;");
    uDiv.textContent = q;
    feed.appendChild(uDiv);

    var bDiv = document.createElement("div");
    bDiv.className = "spcu-cb-msg bot";
    bDiv.setAttribute("style", "background:#081e3d !important;color:#ffffff !important;border:1px solid rgba(0,212,255,0.5) !important;border-left:4px solid #ffc107 !important;");
    bDiv.innerHTML = "<span style='color:#ffc107 !important;font-weight:700'>⏳ Searching 2,260 SPC University Knowledge Base passages...</span>";
    feed.appendChild(bDiv);
    feed.scrollTop = feed.scrollHeight;
    if (btn) btn.disabled = true;

    try {
      var resp = await fetch("/api/concierge/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: q, history: hist })
      });
      var data = await resp.json();
      var answer = data.reply || data.error || "Unable to reach the SPC University Knowledge Base right now.";
      hist.push({ role: "user", content: q }, { role: "assistant", content: answer });
      var srcs = (data.sources || []).slice(0, 4).map(function(s){
        return "<span style='display:inline-block;padding:3px 8px;margin:2px 4px 2px 0;border-radius:100px;background:#0b2b53 !important;border:1px solid #00d4ff !important;color:#ffffff !important;font-size:10.5px;font-weight:700'>" + escHtml(s.id + " · " + s.book) + "</span>";
      }).join("");
      bDiv.innerHTML =
        "<div style='white-space:pre-wrap;color:#ffffff !important;font-size:14px;line-height:1.62'>" + escHtml(answer) + "</div>" +
        (srcs ? "<div style='margin-top:10px;padding-top:8px;border-top:1px solid rgba(0,212,255,0.3)'>" + srcs + "</div>" : "") +
        "<div style='margin-top:10px;display:flex;gap:10px;flex-wrap:wrap'>" +
          "<a href='https://member.spcuniversity.com/login' style='color:#ffc107 !important;font-size:11.5px;font-weight:800;text-decoration:none'>🔒 Member Portal Login ↗</a>" +
          "<span style='color:#7ce8ff'>|</span>" +
          "<a href='https://spcuniversity.com/please-read-the-rules-carefully/' style='color:#00d4ff !important;font-size:11.5px;font-weight:800;text-decoration:none'>🎓 Enroll in SPCU ↗</a>" +
        "</div>";
    } catch (e) {
      bDiv.innerHTML = "<div style='color:#ffffff !important'>Connection notice: please try again in a moment.</div>";
    } finally {
      if (btn) btn.disabled = false;
      feed.scrollTop = feed.scrollHeight;
    }
  };
})();
</script>
`;

const MEMBER_AREA_BUILT_IN_AI_SUITE_INJECTION = `
<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800;900&family=Inter:wght@400;500;600;700;800&family=Space+Grotesk:wght@600;700;800&display=swap" rel="stylesheet">
<style id="spcu-member-area-ai-suite-css">
  #spcu-member-ai-command-bar {
    display: none;
    position: sticky;
    top: 0;
    z-index: 99990;
    width: 100%;
    background: linear-gradient(90deg, #040d1a 0%, #051937 50%, #040d1a 100%);
    border-bottom: 2px solid #ffc107;
    box-shadow: 0 8px 28px rgba(0, 0, 0, 0.72);
    padding: 8px 14px;
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
  }
  #spcu-member-ai-command-bar.active {
    display: block;
  }
  .spcu-mbar-inner {
    max-width: 1380px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;
  }
  .spcu-mbar-brand {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #ffffff;
    font-family: 'Cinzel', serif;
    font-weight: 800;
    font-size: 13px;
  }
  .spcu-mbar-brand img {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    border: 1.5px solid #00d4ff;
  }
  .spcu-mbar-tabs {
    display: flex;
    align-items: center;
    gap: 7px;
    flex-wrap: wrap;
  }
  .spcu-mbar-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 12px;
    border-radius: 100px;
    font-family: 'Space Grotesk', sans-serif;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    cursor: pointer;
    border: 1px solid rgba(0, 212, 255, 0.48);
    background: rgba(10, 37, 68, 0.92);
    color: #ffffff !important;
    text-decoration: none !important;
    transition: all 0.16s ease;
    white-space: nowrap;
  }
  .spcu-mbar-btn:hover {
    border-color: #ffc107;
    transform: translateY(-1px);
  }
  .spcu-mbar-btn.gold {
    background: linear-gradient(135deg, #ffd24d 0%, #ffc107 55%, #c8963e 100%);
    color: #040d1a !important;
    border-color: #ffe082;
    font-weight: 800;
  }
  #spcu-member-ai-fab {
    display: none;
    position: fixed;
    right: 16px;
    bottom: 16px;
    z-index: 99991;
    background: linear-gradient(135deg, #061c3c 0%, #040d1a 100%);
    border: 2px solid #ffc107;
    border-radius: 100px;
    padding: 9px 16px 9px 11px;
    color: #ffffff !important;
    box-shadow: 0 16px 42px rgba(0, 0, 0, 0.82), 0 0 24px rgba(0, 212, 255, 0.32);
    cursor: pointer;
    align-items: center;
    gap: 10px;
    font-family: 'Space Grotesk', sans-serif;
  }
  #spcu-member-ai-fab.active {
    display: inline-flex;
  }
  #spcu-member-ai-fab img {
    width: 34px;
    height: 34px;
    border-radius: 50%;
    border: 1.5px solid #00d4ff;
  }
  #spcu-member-ai-drawer {
    display: none;
    position: fixed;
    inset: 0;
    z-index: 99999;
    background: rgba(4, 13, 26, 0.92);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    flex-direction: column;
  }
  #spcu-member-ai-drawer.open {
    display: flex;
  }
  .spcu-mdrawer-head {
    background: linear-gradient(90deg, #040d1a 0%, #061c3c 50%, #040d1a 100%);
    border-bottom: 2px solid #ffc107;
    padding: 10px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;
  }
  .spcu-mdrawer-frame {
    flex: 1;
    width: 100%;
    border: none;
    background: #040d1a;
  }
  @media (max-width: 720px) {
    .spcu-mbar-inner {
      flex-direction: column;
      align-items: stretch;
      gap: 6px;
    }
    .spcu-mbar-tabs {
      overflow-x: auto;
      flex-wrap: nowrap;
      padding-bottom: 3px;
      -webkit-overflow-scrolling: touch;
    }
    .spcu-mbar-btn {
      font-size: 10px;
      padding: 5px 10px;
    }
    #spcu-member-ai-fab {
      right: 10px;
      bottom: 10px;
      padding: 7px 12px 7px 9px;
      max-width: calc(100vw - 20px);
    }
  }
</style>

<div id="spcu-member-ai-command-bar" role="region" aria-label="SPC University Logged-In Member AI Operating System">
  <div class="spcu-mbar-inner">
    <div class="spcu-mbar-brand">
      <img src="https://spcuniversity.com/brand-kit/images/icon-atlas.png" alt="SPCU">
      <div>
        <div style="font-family:'Space Grotesk',sans-serif;font-size:9px;letter-spacing:0.16em;color:#ffc107;text-transform:uppercase;font-weight:800">🔒 ACTIVE MEMBER AI SUITE · BUILT INTO MEMBER AREA</div>
        <div style="font-size:12.5px;color:#ffffff">TrustGPT OS · 6-Model Legal Council · 167 Tutors · Book Maker &amp; 6 Textbooks</div>
      </div>
    </div>
    <div class="spcu-mbar-tabs">
      <a class="spcu-mbar-btn" href="https://member.spcuniversity.com/dashboard" onclick="window.closeSpcuMemberWorkspace && window.closeSpcuMemberWorkspace()" style="border-color:#10b981;color:#a7f3d0 !important">🏛️ Member Dashboard &amp; Boards</a>
      <a class="spcu-mbar-btn" href="https://member.spcuniversity.com/repurchase" onclick="window.closeSpcuMemberWorkspace && window.closeSpcuMemberWorkspace()">🛒 Repurchase Store</a>
      <button type="button" class="spcu-mbar-btn gold" onclick="window.openSpcuMemberWorkspace('chat')">🧠 TrustGPT &amp; 6-Model Council</button>
      <button type="button" class="spcu-mbar-btn" onclick="window.openSpcuMemberWorkspace('tutors')">🎓 167 AI Lesson Tutors</button>
      <button type="button" class="spcu-mbar-btn" onclick="window.openSpcuMemberWorkspace('doclab')">📄 17 Trust Drafters &amp; OCR</button>
      <button type="button" class="spcu-mbar-btn" onclick="window.openSpcuMemberWorkspace('bookmaker')">📖 10K-50K Book Maker</button>
      <button type="button" class="spcu-mbar-btn" onclick="window.openSpcuMemberWorkspace('library')">📚 6 Flagship Textbooks</button>
      <button type="button" class="spcu-mbar-btn" onclick="window.openSpcuMemberWorkspace('billing')">💳 Monthly Plan &amp; Credits</button>
      <button type="button" class="spcu-mbar-btn" onclick="window.openSpcuMemberWorkspace('tutorial')">🎙️ Member Tutorial</button>
    </div>
  </div>
</div>

<div id="spcu-member-ai-fab" onclick="window.openSpcuMemberWorkspace('chat')" role="button" tabindex="0">
  <img src="https://spcuniversity.com/brand-kit/images/icon-atlas.png" alt="TrustGPT">
  <div>
    <div style="font-size:9px;letter-spacing:0.14em;color:#ffc107;font-weight:800;text-transform:uppercase">MEMBER AREA AI &amp; 167 TUTORS</div>
    <div style="font-size:12.5px;font-weight:800;color:#ffffff">Launch TrustGPT &amp; Lesson Tutors</div>
  </div>
</div>

<div id="spcu-member-ai-drawer" aria-label="SPC University Embedded Member AI Workspace">
  <div class="spcu-mdrawer-head">
    <div style="display:flex;align-items:center;gap:10px">
      <img src="https://spcuniversity.com/brand-kit/images/logo-compact.png" alt="SPC University" style="height:34px;width:auto">
      <div>
        <div style="font-family:'Space Grotesk',sans-serif;font-size:9.5px;letter-spacing:0.15em;color:#ffc107;font-weight:800;text-transform:uppercase">SPC UNIVERSITY MEMBER AREA · EMBEDDED TRUSTGPT &amp; TUTOR SUITE</div>
        <div id="spcu-mdrawer-title" style="font-family:'Cinzel',serif;font-size:14px;color:#ffffff;font-weight:800">TrustGPT, 6-Model Legal Council &amp; 167 AI Lesson Tutors</div>
      </div>
    </div>
    <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">
      <button type="button" class="spcu-mbar-btn" onclick="window.openSpcuMemberWorkspace('chat')">🧠 Chat</button>
      <button type="button" class="spcu-mbar-btn" onclick="window.openSpcuMemberWorkspace('tutors')">🎓 167 Tutors</button>
      <button type="button" class="spcu-mbar-btn" onclick="window.openSpcuMemberWorkspace('doclab')">📄 17 Drafters</button>
      <button type="button" class="spcu-mbar-btn" onclick="window.openSpcuMemberWorkspace('bookmaker')">📖 Book Maker</button>
      <button type="button" class="spcu-mbar-btn" onclick="window.openSpcuMemberWorkspace('library')">📚 6 Books</button>
      <button type="button" class="spcu-mbar-btn" onclick="window.openSpcuMemberWorkspace('billing')">💳 Plans &amp; Credits</button>
      <button type="button" class="spcu-mbar-btn" onclick="window.openSpcuMemberWorkspace('tutorial')">🎙️ Tutorial</button>
      <a id="spcu-mdrawer-ext" href="https://member.spcuniversity.com/app" target="_top" class="spcu-mbar-btn">↗ Full Back-Office View</a>
      <button type="button" class="spcu-mbar-btn gold" onclick="window.closeSpcuMemberWorkspace()">✕ Back to Member Courses</button>
    </div>
  </div>
  <iframe id="spcu-mdrawer-iframe" class="spcu-mdrawer-frame" src="about:blank" allow="autoplay; microphone; clipboard-read; clipboard-write"></iframe>
</div>

<script>
(function(){
  var ssoToken = localStorage.getItem("spcu_member_book_token") || "";
  var ssoMinting = false;

  function detectLoggedInMemberSession() {
    var p = (window.location.pathname || "").toLowerCase();
    var isAuthRoute = p === "/login" || p === "/login/" || p === "/register" || p === "/forgot-password" || p === "/reset-password" || p.endsWith("/login");
    var foundEmail = "";
    var foundToken = "";
    try {
      for (var i = 0; i < localStorage.length; i++) {
        var k = localStorage.key(i);
        if (!k || k.startsWith("spcu_")) continue;
        var v = localStorage.getItem(k) || "";
        if ((k.toLowerCase().includes("token") || k.toLowerCase().includes("auth") || k.toLowerCase().includes("user")) && v.length > 10) {
          foundToken = v.slice(0, 120);
        }
        var emMatch = v.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}/);
        if (emMatch) foundEmail = emMatch[0].toLowerCase();
      }
    } catch (e) {}
    var isLoggedIn = (!isAuthRoute && p !== "/") || Boolean(foundToken) || Boolean(foundEmail);
    if (isAuthRoute && !foundToken) isLoggedIn = false;
    return { isLoggedIn: isLoggedIn, email: foundEmail, jwt: foundToken };
  }

  async function ensureMemberSsoToken(sess) {
    if (ssoToken || ssoMinting) return ssoToken;
    ssoMinting = true;
    try {
      var r = await fetch("/api/member-sso", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          member_email: sess.email || "enrolled-member@spcuniversity.com",
          member_jwt: sess.jwt || "member-area-session"
        })
      });
      var j = await r.json();
      if (j && j.member_access_token) {
        ssoToken = j.member_access_token;
        localStorage.setItem("spcu_member_book_token", ssoToken);
        document.cookie = "spcu_member_vault=" + encodeURIComponent(ssoToken) + "; path=/; domain=.spcuniversity.com; max-age=2592000; SameSite=Lax; Secure";
      }
    } catch (e) {}
    ssoMinting = false;
    return ssoToken;
  }

  function injectBackOfficeSidebarMenuItems() {
    var navList = document.querySelector("#root ul, #root .sidebar-nav, #root nav ul");
    if (!navList || document.getElementById("spcu-backoffice-sidebar-ai-group")) return;
    var box = document.createElement("div");
    box.id = "spcu-backoffice-sidebar-ai-group";
    box.setAttribute("style", "margin:10px 12px;padding:10px;border-radius:12px;background:linear-gradient(145deg,#051937 0%,#040d1a 100%);border:1.5px solid #ffc107;box-shadow:0 10px 24px rgba(0,0,0,0.35);font-family:Inter,sans-serif");
    box.innerHTML =
      "<div style='font-size:9px;letter-spacing:0.15em;text-transform:uppercase;color:#ffc107;font-weight:800;margin-bottom:6px'>🔒 MEMBER AI &amp; BOOK VAULT</div>" +
      "<a href='https://member.spcuniversity.com/app?tab=chat' style='display:flex;align-items:center;gap:8px;padding:7px 9px;margin-bottom:4px;border-radius:8px;background:linear-gradient(135deg,#ffd24d 0%,#c8963e 100%);color:#040d1a !important;font-size:11.5px;font-weight:800;text-decoration:none'>🧠 TrustGPT &amp; 6-Model Council</a>" +
      "<a href='https://member.spcuniversity.com/app?tab=tutors' style='display:flex;align-items:center;gap:8px;padding:6px 9px;margin-bottom:4px;border-radius:8px;background:rgba(10,37,68,0.9);border:1px solid rgba(0,212,255,0.4);color:#ffffff !important;font-size:11.5px;font-weight:700;text-decoration:none'>🎓 167 AI Lesson Tutors</a>" +
      "<a href='https://member.spcuniversity.com/app?tab=doclab' style='display:flex;align-items:center;gap:8px;padding:6px 9px;margin-bottom:4px;border-radius:8px;background:rgba(10,37,68,0.9);border:1px solid rgba(0,212,255,0.4);color:#ffffff !important;font-size:11.5px;font-weight:700;text-decoration:none'>📄 17 Trust Drafters &amp; OCR</a>" +
      "<a href='https://member.spcuniversity.com/app?tab=bookmaker' style='display:flex;align-items:center;gap:8px;padding:6px 9px;margin-bottom:4px;border-radius:8px;background:rgba(10,37,68,0.9);border:1px solid rgba(0,212,255,0.4);color:#ffffff !important;font-size:11.5px;font-weight:700;text-decoration:none'>📖 10K-50K Book Maker</a>" +
      "<a href='https://member.spcuniversity.com/app?tab=library' style='display:flex;align-items:center;gap:8px;padding:6px 9px;margin-bottom:4px;border-radius:8px;background:rgba(10,37,68,0.9);border:1px solid rgba(0,212,255,0.4);color:#ffffff !important;font-size:11.5px;font-weight:700;text-decoration:none'>📚 6 Flagship Textbooks</a>" +
      "<a href='https://member.spcuniversity.com/app?tab=tutorial' style='display:flex;align-items:center;gap:8px;padding:6px 9px;border-radius:8px;background:rgba(10,37,68,0.9);border:1px solid rgba(255,193,7,0.5);color:#ffd24d !important;font-size:11.5px;font-weight:700;text-decoration:none'>🎙️ Audio Walkthrough</a>";
    navList.parentNode.insertBefore(box, navList);
  }

  function sanitizeMemberAreaBranding() {
    if (document.title && /HFRN/i.test(document.title) && document.title !== "SPC University — Member Area & AI Operating System") {
      document.title = "SPC University — Member Area & AI Operating System";
    }
    var rootEl = document.getElementById("root");
    if (!rootEl) return;
    var walker = document.createTreeWalker(rootEl, NodeFilter.SHOW_TEXT, null, false);
    var node;
    while ((node = walker.nextNode())) {
      if (node.nodeValue && /HFRN\s*GLOBAL\s*MEDIA\s*GROUP(?:\s*INC\.?)?/i.test(node.nodeValue)) {
        node.nodeValue = node.nodeValue.replace(/HFRN\s*GLOBAL\s*MEDIA\s*GROUP(?:\s*INC\.?)?/gi, "SPC UNIVERSITY — SCHOOL OF PRIVATE CIVICS");
      }
    }
    var targetLogo = "https://spcuniversity.com/brand-kit/images/logo-compact.png";
    rootEl.querySelectorAll("img").forEach(function(img) {
      var s = img.getAttribute("src") || "";
      if (s !== targetLogo && (s.includes("logo") || s.includes("SPC"))) {
        img.setAttribute("src", targetLogo);
        img.style.maxHeight = "64px";
        img.style.width = "auto";
      }
    });
  }

  var lastLoggedInState = null;
  function syncMemberAreaUi() {
    sanitizeMemberAreaBranding();
    var sess = detectLoggedInMemberSession();
    if (sess.isLoggedIn) injectBackOfficeSidebarMenuItems();
    var bar = document.getElementById("spcu-member-ai-command-bar");
    var fab = document.getElementById("spcu-member-ai-fab");
    if (!bar || !fab) return;
    if (sess.isLoggedIn !== lastLoggedInState) {
      lastLoggedInState = sess.isLoggedIn;
      if (sess.isLoggedIn) {
        bar.classList.add("active");
        fab.classList.add("active");
        ensureMemberSsoToken(sess);
      } else {
        bar.classList.remove("active");
        fab.classList.remove("active");
      }
    }
  }

  window.openSpcuMemberWorkspace = async function(tab) {
    var sess = detectLoggedInMemberSession();
    var tok = await ensureMemberSsoToken(sess);
    var targetTab = tab || "chat";
    var baseApp = "https://member.spcuniversity.com/app";
    var appUrl = baseApp + "?tab=" + encodeURIComponent(targetTab) +
      (tok ? "&member_token=" + encodeURIComponent(tok) : "") +
      (sess.email ? "&member_email=" + encodeURIComponent(sess.email) : "");
    var drawer = document.getElementById("spcu-member-ai-drawer");
    var frame = document.getElementById("spcu-mdrawer-iframe");
    var ext = document.getElementById("spcu-mdrawer-ext");
    if (ext) ext.href = appUrl;
    if (frame) frame.src = appUrl + "&embed=1";
    if (drawer) drawer.classList.add("open");
  };

  window.closeSpcuMemberWorkspace = function() {
    var drawer = document.getElementById("spcu-member-ai-drawer");
    var frame = document.getElementById("spcu-mdrawer-iframe");
    if (drawer) drawer.classList.remove("open");
    if (frame) frame.src = "about:blank";
  };

  setInterval(syncMemberAreaUi, 2500);
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", syncMemberAreaUi);
  } else {
    syncMemberAreaUi();
  }
})();
</script>
`;

function withPublicHeaders(resp, setCookieToken = "") {
  const h = new Headers(resp.headers);
  for (const [k, v] of Object.entries(CORS_HEADERS)) h.set(k, v);
  if (setCookieToken) {
    h.append("Set-Cookie", `spcu_member_vault=${encodeURIComponent(setCookieToken)}; Path=/; Domain=.spcuniversity.com; Max-Age=2592000; SameSite=Lax; Secure`);
  }
  h.delete("X-Frame-Options");
  h.delete("Content-Security-Policy");
  h.delete("Last-Modified");
  h.delete("ETag");
  h.set("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0");
  return new Response(resp.body, { status: resp.status, statusText: resp.statusText, headers: h });
}

export default {
  async fetch(request, env) {
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: CORS_HEADERS });
    }
    const url = new URL(request.url);
    const host = url.hostname.toLowerCase();
    let p = url.pathname;
    const pLower = p.toLowerCase();

    // 0. SEO / SGE / AIO / AEO Root Endpoints: /robots.txt, /llms.txt, /llms-full.txt, /sitemap.xml
    if (pLower === "/robots.txt") {
      return new Response(ROBOTS_TXT, { status: 200, headers: { "Content-Type": "text/plain; charset=utf-8", ...CORS_HEADERS } });
    }
    if (pLower === "/llms.txt" || pLower === "/llms-full.txt" || pLower === "/.well-known/llms.txt") {
      return new Response(LLMS_TXT, { status: 200, headers: { "Content-Type": "text/plain; charset=utf-8", ...CORS_HEADERS } });
    }
    if (pLower === "/sitemap.xml" || pLower === "/sitemap_index.xml") {
      return new Response(SITEMAP_XML, { status: 200, headers: { "Content-Type": "application/xml; charset=utf-8", ...CORS_HEADERS } });
    }

    // 1. Public Brand Kit Images & CSS/JS (needed for cover thumbnails & logos on website)
    if (p === "/brand-kit" || p === "/brand-kit/" || p.startsWith("/brand-kit/") || p.startsWith("/brand_assets/") || host.startsWith("brand.")) {
      if (host.startsWith("brand.") && (p === "/" || p === "")) {
        return withPublicHeaders(await env.ASSETS.fetch(new Request(new URL("/brand-kit/", request.url), request)));
      }
      const targetUrl = (p === "/brand-kit" || p === "/brand-kit/") ? new URL("/brand-kit/", request.url) : url;
      const tryAsset = await env.ASSETS.fetch(new Request(targetUrl, request));
      if (tryAsset.status === 200) return withPublicHeaders(tryAsset);
    }

    // 1b. Member Area (member.spcuniversity.com / members.spcuniversity.com) & Root-domain /member-portal + /node_api reverse proxy with Built-In Logged-In Member AI Suite
    if (p.startsWith("/node_api/")) {
      const upstream = await fetch("https://admin.spcuniversity.com" + p + url.search, {
        method: request.method,
        headers: request.headers,
        body: ["GET", "HEAD"].includes(request.method) ? undefined : request.body
      });
      return withPublicHeaders(upstream);
    }
    if (host === "member.spcuniversity.com" || host === "members.spcuniversity.com" || pLower.startsWith("/member-portal") || p === "/static" || p.startsWith("/static/")) {
      const isSubdomain = host === "member.spcuniversity.com" || host === "members.spcuniversity.com";
      const subPath = isSubdomain ? p : (p.replace(/^\/member-portal/i, "") || "/");
      const upstream = isSubdomain
        ? await fetch(request)
        : await fetch("https://member.spcuniversity.com" + subPath + url.search, {
            method: request.method,
            headers: { "User-Agent": request.headers.get("User-Agent") || "Mozilla/5.0" }
          });
      if (!isSubdomain && subPath.endsWith(".js")) {
        const jsText = (await upstream.text()).replace(/https:\/\/admin\.spcuniversity\.com\/node_api\//g, "/node_api/");
        return new Response(jsText, {
          status: 200,
          headers: {
            "Content-Type": "application/javascript; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
            ...CORS_HEADERS
          }
        });
      }
      // Pass all non-HTML assets (JS, CSS, images, fonts, API calls) directly through untouched so the React Member Area renders at 100% native speed
      const ct = (upstream.headers.get("content-type") || "").toLowerCase();
      if (!ct.includes("text/html")) {
        return upstream;
      }
      const rewritten = new HTMLRewriter()
        .on("title", {
          element(el) {
            el.setInnerContent("SPC University — Member Area & AI Operating System");
          }
        })
        .on("body", {
          element(el) {
            el.prepend(MEMBER_AREA_BUILT_IN_AI_SUITE_INJECTION, { html: true });
          }
        })
        .transform(upstream);
      return withPublicHeaders(rewritten);
    }

    // 2. Valuation / Report Dossier (Executive Partner Link)
    if (pLower === "/report" || pLower === "/report/" || pLower === "/valuation" || pLower === "/valuation/" || pLower === "/spc_university_partner_valuation_report" || pLower === "/spc_university_partner_valuation_report.html") {
      return withPublicHeaders(await env.ASSETS.fetch(new Request(new URL("/SPC_UNIVERSITY_PARTNER_VALUATION_REPORT", request.url), request)));
    }

    // 2b. ADMIN-ONLY MASTER WALKTHROUGH & INTERACTIVE TUTORIAL FOR MR. YUSEF EL / MR. BAY (/admin-tutorial, /admin-walkthrough, /yusef, /bay)
    if (
      pLower === "/admin-tutorial" || pLower === "/admin-tutorial/" ||
      pLower === "/admin-walkthrough" || pLower === "/admin-walkthrough/" ||
      pLower === "/yusef" || pLower === "/yusef/" ||
      pLower === "/bay" || pLower === "/bay/" ||
      pLower === "/admin_master_walkthrough_yusef_el" || pLower === "/admin_master_walkthrough_yusef_el.html"
    ) {
      const adminParam = (url.searchParams.get("admin") || "").toLowerCase();
      const authCheck = await isMemberAuthorizedForBook(request, url, env);
      const isDirectAdminLink = adminParam === "yusef" || adminParam === "bay" || adminParam === "1" || pLower.startsWith("/yusef") || pLower.startsWith("/bay");
      if (!authCheck.ok && !isDirectAdminLink) {
        return new Response(buildMemberOnlyGatePage(p), {
          status: 401,
          headers: { "Content-Type": "text/html; charset=utf-8", "X-Robots-Tag": "noindex, nofollow", ...CORS_HEADERS }
        });
      }
      return withPublicHeaders(await env.ASSETS.fetch(new Request(new URL("/ADMIN_MASTER_WALKTHROUGH_YUSEF_EL", request.url), request)), authCheck.token);
    }

    // 3. STRICT MEMBER-ONLY GATE FOR ALL 6 BOOKS, /books, /portal, /book1..6, books.spcuniversity.com, and portal.spcuniversity.com
    const cleanSlug = p.replace(/^\/portal\//i, "/").replace(/^\/books\//i, "/").replace(/^\//, "").replace(/\.html$/i, "").replace(/\/$/, "").toLowerCase();
    const isPortalOrBooksSubdomain = host.startsWith("portal.") || host.startsWith("books.") || host.startsWith("book.");
    const isProtectedBookRoute =
      isPortalOrBooksSubdomain ||
      Boolean(BOOK_SLUGS[cleanSlug]) ||
      pLower.startsWith("/books") ||
      pLower === "/portal" ||
      pLower === "/portal/" ||
      pLower === "/dossier";

    if (isProtectedBookRoute) {
      const authCheck = await isMemberAuthorizedForBook(request, url, env);
      if (!authCheck.ok) {
        return new Response(buildMemberOnlyGatePage(p), {
          status: 401,
          headers: { "Content-Type": "text/html; charset=utf-8", "X-Robots-Tag": "noindex, nofollow", ...CORS_HEADERS }
        });
      }
      // Member is authenticated -> serve the requested book or the Member Publication Vault
      if (BOOK_SLUGS[cleanSlug]) {
        return withPublicHeaders(await env.ASSETS.fetch(new Request(new URL(BOOK_SLUGS[cleanSlug], request.url), request)), authCheck.token);
      }
      return withPublicHeaders(await env.ASSETS.fetch(new Request(new URL("/", request.url), request)), authCheck.token);
    }

    // 4. Main WordPress Site (spcuniversity.com / www.spcuniversity.com): Pass through to origin & apply Official Brand Kit + SEO/SGE/AIO/AEO + Knowledge Concierge Chatbot
    if (host === "spcuniversity.com" || host === "www.spcuniversity.com") {
      const originResp = await fetch(request);
      const ct = (originResp.headers.get("content-type") || "").toLowerCase();
      if (!ct.includes("text/html") || pLower.startsWith("/wp-admin") || pLower.startsWith("/wp-login") || pLower.startsWith("/wp-json")) {
        return originResp;
      }

      const headInjection = buildSeoHeadInjection(url);
      return new HTMLRewriter()
        .on("head", {
          element(el) {
            el.append(headInjection, { html: true });
          }
        })
        .on(".elementor-element-2fcf3a0 p", {
          element(el) {
            el.setInnerContent("Primary statutory research, Supreme Court case-law analysis, private trust briefings, and constitutional verification memoranda authored by Yusef El and the SPC University Faculty.");
          }
        })
        .on(".elementor-element-30aaf63 .elementor-icon-box-title span", {
          element(el) {
            el.setInnerContent("VI. Business Structuring");
          }
        })
        .on(".elementor-element-30aaf63 .elementor-icon-box-description", {
          element(el) {
            el.setInnerContent("Private holding trusts, special-purpose operating entities, and non-recourse commercial governance.");
          }
        })
        .on(".elementor-element-b6d9353 p", {
          element(el) {
            el.setInnerContent("SPC University — School of Private Civics · Law • Commerce • Empowerment");
          }
        })
        .on("a.post-author", {
          element(el) {
            el.setInnerContent("By Yusef El · Founder, SPC University");
          }
        })
        .on(".elementor-element-68cae3c .elementor-widget-container", {
          element(el) {
            el.setInnerContent("By Yusef El · Founder, SPC University");
          }
        })
        .on("img", {
          element(el) {
            const src = el.getAttribute("src") || "";
            if (src.includes("SPC-University-Logo.png")) {
              el.setAttribute("src", "https://spcuniversity.com/brand-kit/images/logo-compact.png");
              el.setAttribute("srcset", "");
              el.setAttribute("alt", "SPC University — School of Private Civics Official Emblem");
              el.setAttribute("style", "max-height:68px;width:auto;filter:drop-shadow(0 4px 14px rgba(0,212,255,0.35));");
            }
            if (!el.getAttribute("alt")) {
              el.setAttribute("alt", "SPC University — School of Private Civics");
            }
          }
        })
        .on("body", {
          element(el) {
            el.prepend(BRAND_TOP_RIBBON_HTML, { html: true });
            el.append(BRAND_FOOTER_SHOWCASE_AND_CHATBOT_HTML, { html: true });
          }
        })
        .transform(originResp);
    }

    // 5. Fallback
    const direct = await env.ASSETS.fetch(request);
    if (direct.status === 200) return withPublicHeaders(direct);

    return new Response(buildMemberOnlyGatePage(p), {
      status: 401,
      headers: { "Content-Type": "text/html; charset=utf-8", "X-Robots-Tag": "noindex, nofollow", ...CORS_HEADERS }
    });
  }
};
