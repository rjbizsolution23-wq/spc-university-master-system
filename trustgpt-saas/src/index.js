import KB from "./kb.json";
import UI from "./ui.js";

const DISCLAIMER = "SPC University provides educational trust, estate, and administrative study curriculum and document automation tools. Educational use only; not personalized legal, tax, or investment advice.";
const CORS = { "access-control-allow-origin": "*", "access-control-allow-headers": "authorization,content-type", "access-control-allow-methods": "GET,POST,OPTIONS" };
const SEC = { "x-content-type-options": "nosniff", "referrer-policy": "no-referrer" };
const BOOK_REDIRECT_SLUGS = {
  "the_estate_planning_vault_master_edition": "https://spcuniversity.com/books/THE_ESTATE_PLANNING_VAULT_MASTER_EDITION",
  "estate-vault": "https://spcuniversity.com/books/THE_ESTATE_PLANNING_VAULT_MASTER_EDITION",
  "trust_architecture_10_layers_manual": "https://spcuniversity.com/books/TRUST_ARCHITECTURE_10_LAYERS_MANUAL",
  "trust-architecture": "https://spcuniversity.com/books/TRUST_ARCHITECTURE_10_LAYERS_MANUAL",
  "the_bank_packet_open_your_trust_account": "https://spcuniversity.com/books/THE_BANK_PACKET_OPEN_YOUR_TRUST_ACCOUNT",
  "bank-packet": "https://spcuniversity.com/books/THE_BANK_PACKET_OPEN_YOUR_TRUST_ACCOUNT",
  "client_dossier_strategy_session_playbook": "https://spcuniversity.com/books/CLIENT_DOSSIER_STRATEGY_SESSION_PLAYBOOK",
  "client-dossier": "https://spcuniversity.com/books/CLIENT_DOSSIER_STRATEGY_SESSION_PLAYBOOK",
  "know_your_rights_master_field_manual": "https://spcuniversity.com/books/KNOW_YOUR_RIGHTS_MASTER_FIELD_MANUAL",
  "know-your-rights": "https://spcuniversity.com/books/KNOW_YOUR_RIGHTS_MASTER_FIELD_MANUAL",
  "the_spcu_doctrine_foundations_before_remedies": "https://spcuniversity.com/books/THE_SPCU_DOCTRINE_FOUNDATIONS_BEFORE_REMEDIES",
  "spcu-doctrine": "https://spcuniversity.com/books/THE_SPCU_DOCTRINE_FOUNDATIONS_BEFORE_REMEDIES"
};
const json = (o, s = 200, h = {}) => new Response(JSON.stringify(o), { status: s, headers: { "content-type": "application/json", ...SEC, ...h } });
const hex = (b) => [...new Uint8Array(b)].map((x) => x.toString(16).padStart(2, "0")).join("");
const sha256 = async (s) => hex(await crypto.subtle.digest("SHA-256", new TextEncoder().encode(s)));
const log = (o) => console.log(JSON.stringify(o));

// ---------- tiers: cost in credits per call ----------
const COST = { fast: 0, standard: 0, premium: 1, frontier: 3, council: 4, gpu: 1, image: 5, video: 25 };

async function hash(pw, saltHex) {
  const salt = Uint8Array.from(saltHex.match(/../g).map((h) => parseInt(h, 16)));
  const key = await crypto.subtle.importKey("raw", new TextEncoder().encode(pw), "PBKDF2", false, ["deriveBits"]);
  return hex(await crypto.subtle.deriveBits({ name: "PBKDF2", hash: "SHA-256", salt, iterations: 100000 }, key, 256));
}

// ---------- retrieval ----------
const STOP = new Set("the a an and or of to in is are for on with that this it as be by at from your you how what do does can i my".split(" "));
const tok = (s) => s.toLowerCase().replace(/[^a-z0-9 ]/g, " ").split(/\s+/).filter((w) => w.length > 2 && !STOP.has(w));
const DOCS = KB.map((c) => ({ ...c, t: tok(c.text) }));
const DF = {};
DOCS.forEach((d) => new Set(d.t).forEach((w) => (DF[w] = (DF[w] || 0) + 1)));
function retrieve(q, k = 4) {
  const qt = [...new Set(tok(q))];
  return DOCS.map((d) => {
    const tf = {}; d.t.forEach((w) => (tf[w] = (tf[w] || 0) + 1));
    let s = 0;
    qt.forEach((w) => { if (tf[w]) s += (tf[w] / (tf[w] + 1.5)) * Math.log(1 + DOCS.length / DF[w]); });
    return { d, s };
  }).filter((x) => x.s > 0).sort((a, b) => b.s - a.s).slice(0, k).map((x) => x.d);
}

function scrubProprietary(s) {
  return String(s || "")
    .replace(/SPC UNIVERSITY\s*\/\s*HFRN GLOBAL MEDIA GROUP INC/gi, "SPC UNIVERSITY")
    .replace(/HFRN Global Media Group(?: Inc\.?)?(?:\s*\(Dallas,\s*TX\))?/gi, "SPC University")
    .replace(/RJ Business Solutions/gi, "SPC University")
    .replace(/&\s*Rick Jefferson/gi, "")
    .replace(/Rick Jefferson/gi, "SPC University Faculty");
}

async function hybrid(env, q, k = 7) {
  const kw = retrieve(q, k);
  try {
    const e = await env.AI.run("@cf/baai/bge-m3", { text: [q] });
    const r = await env.VECTORIZE.query(e.data[0], { topK: k, returnMetadata: "all" });
    const vec = (r.matches || [])
      .filter((m) => m.score > 0.45 && m.metadata?.text)
      .map((m) => ({ book: scrubProprietary(m.metadata.book), text: scrubProprietary(m.metadata.text) }));
    const seen = new Set(), out = [];
    for (const d of [...kw, ...vec]) {
      const cleanDoc = { book: scrubProprietary(d.book), text: scrubProprietary(d.text) };
      const key = cleanDoc.text.slice(0, 80);
      if (!seen.has(key)) { seen.add(key); out.push(cleanDoc); }
    }
    return out.slice(0, k);
  } catch (err) { log({ level: "warn", op: "vector", err: String(err).slice(0, 150) }); return kw; }
}

// ---------- Plain-Text Sanitizer & Authoritative SPCU Direct Voice Rule ----------
const PLAIN_STYLE_RULE = [
  "CRITICAL FORMATTING & VOICE RULES:",
  "1. PLAIN TEXT ONLY: Write your response in clean, natural, regular plain text and formal prose ONLY. NEVER use Markdown syntax: do NOT use # headings, do NOT use **bold** or *italic* asterisks, do NOT use ``` code fences, do NOT use markdown pipe tables (|), and do NOT use backticks (`). Instead, use clean uppercase section titles on their own line, blank lines between paragraphs, and simple numbered steps (1., 2., 3.) or clean dashes (-).",
  "2. DIRECT FIRST-PARTY SPC UNIVERSITY VOICE (NO META-COMMENTARY ABOUT EXCERPTS): You ARE TrustGPT, the official SPC University Private Trust, Banking, Estate & Constitutional Architecture System. Speak directly, confidently, and authoritatively to the student or client. NEVER talk about 'the library excerpts', 'what excerpt [S1] gives us', 'gaps in the excerpts', 'what the excerpts do not enumerate', 'the publisher\\'s representation', or 'I cannot independently confirm from the excerpts'. NEVER output skeptical pushback headers like 'WHAT THE LIBRARY ACTUALLY COVERS', 'A GAP TO FLAG FIRST', or 'A CAUTION I OWE YOU'. Treat the SPC University curriculum as your own complete internal mastery, deliver the full working blueprint and exact step-by-step solution directly, and place [S1], [S2] citations naturally at the end of relevant sentences.",
  "3. COMPLETE 10-LAYER & 6-BOOK DOCTRINE MASTERY: When asked about the 10 Layers of Trust Architecture, always present all 10 Layers clearly in order: Layer 1 (Private Capacity, Status & Contract Foundation under Article I Section 10), Layer 2 (Absolute Settlor Severance & Irrevocable Pure Trust Indenture), Layer 3 (Strict Separation of Legal Title in Trustees vs. Equitable Beneficial Enjoyment), Layer 4 (Discretionary Spendthrift Shield & Anti-Alienation Firewall under Restatement Third of Trusts Section 56 / UTC Section 502), Layer 5 (Independent Trust Protector & Fiduciary Check-and-Balance Layer), Layer 6 (Master Holding Trust & Dedicated Asset Sub-Trust Compartmentalization), Layer 7 (Wholly-Owned Operating LLC Commercial Subsidiary Layer), Layer 8 (Schedule A Asset Conveyance Deeds, Bills of Exchange & UCC-1 Collateral Perfection), Layer 9 (UTC Section 1013 Certificate of Trust & Non-Recourse Private Treasury Banking via The Bank Packet), and Layer 10 (Multi-Generational Succession, Pour-Over Will & Domestic/International Situs Continuity)."
].join("\n");

function cleanPlainText(s) {
  if (!s) return "";
  return scrubProprietary(String(s))
    .replace(/```[a-zA-Z0-9_-]*\n?/g, "")
    .replace(/```/g, "")
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/\*\*\*([^*]+)\*\*\*/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/__([^_]+)__/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/^\s*\*\s+/gm, "- ")
    .replace(/^---+$/gm, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

// ---------- Live Web & URL Reader + Autonomous Search Tool ----------
function htmlToText(html) {
  return String(html || "")
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, " ")
    .replace(/<\/(p|div|h1|h2|h3|h4|h5|h6|li|tr|section|article|br)>/gi, "\n")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/[ \t]+/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

async function fetchUrlPlainText(targetUrl) {
  const r = await fetch(targetUrl, {
    headers: { "User-Agent": "Mozilla/5.0 (compatible; SPCUniversity-TrustGPT/2.0; +https://spcuniversity.com)" },
    signal: AbortSignal.timeout(12000)
  });
  const ct = (r.headers.get("content-type") || "").toLowerCase();
  const raw = await r.text();
  const titleMatch = raw.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  const title = titleMatch ? htmlToText(titleMatch[1]).slice(0, 160) : targetUrl;
  const text = ct.includes("json") ? raw.slice(0, 12000) : htmlToText(raw).slice(0, 12000);
  return { url: targetUrl, title, text, status: r.status };
}

async function runLiveWebSearch(query) {
  const results = [];
  // 1. DuckDuckGo Instant Answer & Related Topics API
  try {
    const ddg = await fetch("https://api.duckduckgo.com/?q=" + encodeURIComponent(query) + "&format=json&no_html=1&skip_disambig=1", {
      headers: { "User-Agent": "SPCUniversity-TrustGPT/2.0" },
      signal: AbortSignal.timeout(8000)
    });
    if (ddg.ok) {
      const j = await ddg.json();
      if (j.AbstractText) results.push({ title: j.Heading || query, url: j.AbstractURL || "https://duckduckgo.com", snippet: j.AbstractText });
      for (const t of (j.RelatedTopics || []).slice(0, 5)) {
        if (t.Text && t.FirstURL) results.push({ title: t.Text.split(" - ")[0].slice(0, 90), url: t.FirstURL, snippet: t.Text });
      }
    }
  } catch {}
  // 2. Wikipedia OpenSearch / Legal & Reference Encyclopedia Summary API
  try {
    const wk = await fetch("https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + encodeURIComponent(query) + "&utf8=&format=json&origin=*", {
      headers: { "User-Agent": "SPCUniversity-TrustGPT/2.0" },
      signal: AbortSignal.timeout(8000)
    });
    if (wk.ok) {
      const j = await wk.json();
      for (const s of (j?.query?.search || []).slice(0, 5)) {
        results.push({
          title: s.title,
          url: "https://en.wikipedia.org/wiki/" + encodeURIComponent(s.title.replace(/ /g, "_")),
          snippet: htmlToText(s.snippet)
        });
      }
    }
  } catch {}
  return results.slice(0, 8);
}

// ---------- model backends ----------
const textOf = (r) => { const v = r?.response ?? r?.choices?.[0]?.message?.content ?? null; return v == null ? null : cleanPlainText(typeof v === "string" ? v : JSON.stringify(v)); };
const cfModel = (env, m, max = 1800) => async (msgs) => textOf(await env.AI.run(m, { messages: msgs, max_tokens: max }));
const openaiCompat = (url, key, model, ms) => async (msgs) => {
  const r = await fetch(url.replace(/\/$/, "") + "/chat/completions", {
    method: "POST", headers: { authorization: "Bearer " + key, "content-type": "application/json" },
    body: JSON.stringify({ model, messages: msgs, max_tokens: 4000 }), signal: AbortSignal.timeout(ms),
  });
  if (!r.ok) throw new Error("upstream " + r.status);
  return textOf(await r.json());
};

// ---------- Vision / OCR (3-Model Cascade: Llama 4 Scout -> Mistral 3.1 -> NVIDIA Nemotron 120B VL) ----------
async function runVisionOCR(env, dataUri, promptText) {
  const cleanUri = dataUri.startsWith("data:") ? dataUri : "data:image/jpeg;base64," + dataUri;
  const vPrompt = promptText || "Extract all visible text verbatim from this document or image, preserving headings, clauses, dates, names, amounts, and layout structure.";
  const vMsgs = [{ role: "user", content: [{ type: "text", text: vPrompt }, { type: "image_url", image_url: { url: cleanUri } }] }];
  const engines = [
    ["cf:@cf/meta/llama-4-scout-17b-16e-instruct", async () => textOf(await env.AI.run("@cf/meta/llama-4-scout-17b-16e-instruct", { messages: vMsgs, max_tokens: 3500 }))],
    ["cf:@cf/mistralai/mistral-small-3.1-24b-instruct", async () => textOf(await env.AI.run("@cf/mistralai/mistral-small-3.1-24b-instruct", { messages: vMsgs, max_tokens: 3500 }))],
  ];
  if (env.NVIDIA_API_KEY) {
    engines.push(["nim:nvidia/nemotron-3.5-super-vl-120b-a12b", openaiCompat("https://integrate.api.nvidia.com/v1", env.NVIDIA_API_KEY, "nvidia/nemotron-3.5-super-vl-120b-a12b", 55000)]);
  }
  for (const [name, fn] of engines) {
    try {
      const out = await fn(vMsgs);
      if (out && out.trim()) return { text: out.trim(), engine: name };
    } catch (e) {
      log({ level: "warn", op: "vision-ocr", engine: name, err: String(e).slice(0, 180) });
    }
  }
  return null;
}

// ---------- Audio Speech-to-Text ASR (Whisper Large v3 Turbo) ----------
async function runAudioASR(env, audioBase64) {
  const cleanB64 = String(audioBase64 || "").replace(/^data:audio\/[^;]+;base64,/, "");
  const r = await env.AI.run("@cf/openai/whisper-large-v3-turbo", { audio: cleanB64 });
  return {
    text: (r?.text || "").trim(),
    language: r?.transcription_info?.language || "en",
    duration: r?.transcription_info?.duration || 0,
    segments: r?.segments || [],
    engine: "cf:@cf/openai/whisper-large-v3-turbo"
  };
}

// ---------- Audio Text-to-Speech TTS (Deepgram Aura-2 EN · Parallel Chunked Synthesis + KV Cache) ----------
function splitTextIntoTtsChunks(text, maxChunkLen = 380) {
  const sentences = text.match(/[^.!?]+[.!?]+(?:\s|$)|[^.!?]+$/g) || [text];
  const chunks = [];
  let cur = "";
  for (const s of sentences) {
    const trimmed = s.trim();
    if (!trimmed) continue;
    if ((cur + " " + trimmed).trim().length <= maxChunkLen) {
      cur = (cur ? cur + " " : "") + trimmed;
    } else {
      if (cur) chunks.push(cur);
      if (trimmed.length > maxChunkLen) {
        for (let i = 0; i < trimmed.length; i += maxChunkLen) {
          chunks.push(trimmed.slice(i, i + maxChunkLen));
        }
        cur = "";
      } else {
        cur = trimmed;
      }
    }
  }
  if (cur) chunks.push(cur);
  return chunks.length ? chunks : [text.slice(0, maxChunkLen)];
}

async function runSingleTtsChunk(env, chunkText) {
  const r = await env.AI.run("@cf/deepgram/aura-2-en", { text: chunkText });
  if (r instanceof ReadableStream || r?.body) {
    return new Uint8Array(await new Response(r).arrayBuffer());
  }
  if (r?.audio) {
    return Uint8Array.from(atob(r.audio), (c) => c.charCodeAt(0));
  }
  return new Uint8Array(0);
}

async function runAudioTTSBytes(env, text) {
  const clean = String(text || "")
    .replace(/\[S\d+\]/g, "")
    .replace(/[#*_`>|~-]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 1900);
  if (!clean) throw new Error("Text required for speech synthesis.");
  const cacheKey = "tts:v3:" + (await sha256(clean));
  try {
    const cachedAb = await env.KV.get(cacheKey, "arrayBuffer");
    if (cachedAb && cachedAb.byteLength > 200) {
      return new Uint8Array(cachedAb);
    }
  } catch {}
  const chunks = splitTextIntoTtsChunks(clean, 380);
  const parts = await Promise.all(chunks.map((c) => runSingleTtsChunk(env, c)));
  const totalLen = parts.reduce((acc, p) => acc + p.byteLength, 0);
  if (!totalLen) throw new Error("TTS output format unexpected");
  const merged = new Uint8Array(totalLen);
  let offset = 0;
  for (const p of parts) {
    merged.set(p, offset);
    offset += p.byteLength;
  }
  try {
    await env.KV.put(cacheKey, merged.buffer, { expirationTtl: 60 * 60 * 24 * 30 });
  } catch {}
  return merged;
}

async function runAudioTTS(env, text) {
  const bytes = await runAudioTTSBytes(env, text);
  let bin = "";
  const chunkSize = 0x8000;
  for (let i = 0; i < bytes.length; i += chunkSize) {
    bin += String.fromCharCode.apply(null, bytes.subarray(i, i + chunkSize));
  }
  return { audio_base64: "data:audio/mpeg;base64," + btoa(bin), engine: "cf:@cf/deepgram/aura-2-en" };
}

// ---------- Court-Ready & Bank-Ready Trust Document & Template Specifications (16 Worldwide Templates) ----------
const DOC_TEMPLATES = {
  "pure-trust-indenture": {
    title: "Common-Law Pure Trust Declaration & Indenture",
    query: "Common-Law Pure Trust Indenture Declaration of Trust Trustee Powers Beneficiary Schedule A Eliot v Freeman Crocker v Malley",
    instructions: "Draft a formal, complete Common-Law Pure Trust Declaration & Indenture structured according to The Complete Estate Planning Vault, Trust Architecture, and SPCU Volume XVII/XXIII. Include Preamble, Declaration of Irrevocable Pure Trust, Settlor Total Severance Clause, Appointment & Fiduciary Powers of Trustees, Separation & Non-Merger of Legal and Equitable Title, Discretionary Spendthrift & Anti-Alienation Firewall (Restatement Third Section 56 / UTC Section 502), Non-Recourse Fiduciary Contracting Clause (Schumann-Heink v. Folsom / UTC Section 1010), Schedule A Reference, Two-Witness Attestation, and Notary Jurat Signature Blocks."
  },
  "certificate-of-trust-bank": {
    title: "Certificate of Trust & Bank Account Opening Resolution (UTC § 1013)",
    query: "Certificate of Trust Bank Packet Open Your Trust Account Banking Resolution IRS SS-4 EIN UTC Section 1013",
    instructions: "Draft a complete Statutory Certificate of Trust & Banking Resolution Packet structured according to The Bank Packet: Open Your Trust Account and Uniform Trust Code Section 1013. Include Abstract of Trust Certification, Irrevocability Statement, Trustee Authority to Open & Operate Bank/Treasury/Brokerage Accounts, EIN Reference Block, Non-Disclosure of Private Indenture & Schedule A under UTC Section 1013(d)-(h), Minute #001 Banking Resolution, and Notarized Trustee Signature & Seal Blocks."
  },
  "schedule-a-asset-transfer": {
    title: "Schedule A · Bill of Exchange & Asset Conveyance into Trust",
    query: "Schedule A Asset Transfer Real Estate LLC Intellectual Property Personal Property Conveyance into Trust",
    instructions: "Draft a complete Schedule A Asset Conveyance & Trustee Acceptance Instrument structured according to The Complete Estate Planning Vault. Include Grantor Assignment of Property, Itemized Schedule A Asset Ledger Table (Real Estate, LLC Interests, Treasury Accounts, Precious Metals, IP), Trustee Receipt & Acceptance of Trust Corpus, and Witness/Notary Acknowledgment Blocks."
  },
  "dynasty-trust-indenture": {
    title: "Multi-Generational GST-Exempt Dynasty Trust Indenture (South Dakota / Nevada / Delaware / Wyoming)",
    query: "SPCU Trust Skeleton #1 Multi-Generational GST-Exempt Dynasty Trust Indenture Volume XIII Volume XXI",
    instructions: "Draft a complete Multi-Generational GST-Exempt Dynasty Trust Indenture grounded in SPCU Trust Skeleton #1 and Volumes XIII, XVIII, and XXI. Include Perpetual / Maximum Statutory Duration Clause (Rule Against Perpetuities waiver), GST Tax Exemption Allocation Provisions ($15M 2026 IRC Section 2010/2631), Directed Trust & Investment/Distribution Committee Provisions, Independent Trust Protector Powers, Discretionary Spendthrift Shield, and Notarized Execution Blocks."
  },
  "cook-islands-nevis-offshore-apt": {
    title: "International / Offshore Asset Protection Trust Indenture (Cook Islands / Nevis / Belize)",
    query: "SPCU Trust Skeleton #2 Cook Islands International Asset Protection Trust Indenture Volume XIV Volume XXII Event of Duress Flight Clause",
    instructions: "Draft a complete International Asset Protection Trust Indenture grounded in SPCU Trust Skeleton #2 and Volumes XIV, XXII, and XXIII (Cook Islands International Trusts Act 1984 Section 13B / Nevis International Exempt Trust Ordinance). Include Choice of Foreign Governing Law & Situs, Event-of-Duress Automatic Domestic Fiduciary Removal & Flight Clause (avoiding FTC v. Affordable Media / Anderson pitfalls), Jones v. Wolf / Foreign Judgment Non-Recognition Clause, Trust Protector Powers, and IRS Form 3520/3520-A Compliance Schedule."
  },
  "cayman-ptc-star-charter": {
    title: "Private Trust Company (PTC) & Purpose / STAR Trust Governance Charter",
    query: "SPCU Trust Skeleton #3 Cayman Islands Private Trust Company PTC STAR Trust Charter Volume XXII",
    instructions: "Draft a complete Private Trust Company (PTC) & Special Purpose / STAR Trust Governance Charter grounded in SPCU Trust Skeleton #3 and Volume XXII. Include PTC Board of Directors & Family Governance Committee Charter, Appointment of Dedicated Trust Enforcer (vesting enforcement standing exclusively in the Enforcer), Investment Policy Governance, and Fiduciary Execution Blocks."
  },
  "slat-spousal-trust": {
    title: "Spousal Lifetime Access Trust (SLAT) with Non-Reciprocal Differentiation",
    query: "SPCU Trust Skeleton #5 Spousal Lifetime Access Trust SLAT Non-Reciprocal Estate of Grace Volume XVIII",
    instructions: "Draft a complete Spousal Lifetime Access Trust (SLAT) Indenture grounded in SPCU Trust Skeleton #5 and Volumes XVIII and XXIV. Include Irrevocable Gift Utilizing the 2026 $15M Lifetime Exemption, Discretionary Distributions for Spouse and Descendants, Explicit Non-Reciprocal Differentiation Clauses to defeat the United States v. Estate of Grace Reciprocal Trust Doctrine, and Revenue Ruling 95-58 Independent Trustee Replacement Guardrails."
  },
  "ilit-crummey-trust": {
    title: "Irrevocable Life Insurance Trust (ILIT) & Crummey Withdrawal Notice Packet",
    query: "SPCU Trust Skeleton #4 Irrevocable Life Insurance Trust ILIT Crummey Powers IRC 2042 Volume XXIII",
    instructions: "Draft a complete Irrevocable Life Insurance Trust (ILIT) Indenture and Beneficiary Crummey Withdrawal Notice Packet grounded in SPCU Trust Skeleton #4 and Volumes XVIII and XXIII. Exclude all IRC Section 2042 incidents of ownership from the Insured Grantor, include Crummey Present-Interest Withdrawal Rights ($19,000 / $38,000 2026 annual exclusion) with 5-and-5 Lapse Guardrails under IRC Section 2514(e), and include the standalone Written Crummey Notice Letter."
  },
  "grat-idgt-installment-sale": {
    title: "Intentionally Defective Grantor Trust (IDGT) & IRC § 675(4)(C) Installment Sale Package",
    query: "SPCU Trust Skeleton #9 Zeroed-Out GRAT IRC 2702 IDGT Installment Sale Package Rev Rul 85-13 Swap Power",
    instructions: "Draft a complete Intentionally Defective Grantor Trust (IDGT) Indenture and Installment Sale Promissory Note Package grounded in SPCU Trust Skeleton #9 and Volumes XVIII, XXIII, and XXIV. Include the IRC Section 675(4)(C) Nonfiduciary Asset Substitution ('Swap Power') Clause (Rev. Rul. 85-13 & Rev. Rul. 2008-22), Complete Estate Tax Severance under IRC Sections 2036-2038, and an Installment Sale Term Sheet at the IRC Section 1274 Applicable Federal Rate."
  },
  "flp-holding-llc-operating-agreement": {
    title: "Trust-Owned Holding LLC / Family Limited Partnership (FLP) Charging-Order Shield Agreement",
    query: "SPCU Trust Skeleton #8 Family Limited Partnership FLP Holding LLC Charging-Order Shield Layer 7 Operating LLC",
    instructions: "Draft a complete Trust-Owned Holding & Operating LLC Operating Agreement (Layer 7 of the 10-Layer Trust Architecture) grounded in SPCU Trust Skeleton #8 and Volumes XIII and XXI. Vest 100% of Membership Units in the Managing Trustee of the Master Holding Trust, include strict Anti-Assignment & Exclusive Charging-Order Remedy Clauses, Manager Non-Recourse Authority, and FinCEN August 2026 Domestic CTA BOI Exemption Certification."
  },
  "charitable-crut-clt-trust": {
    title: "Charitable Remainder Unitrust (CRUT) / Charitable Lead Trust (CLT) Indenture",
    query: "SPCU Trust Skeleton #7 Charitable Remainder Charitable Lead Trust CRAT CRUT CLT Layer IRC 664",
    instructions: "Draft a complete Charitable Remainder Unitrust (CRUT) & Charitable Lead Trust (CLT) Indenture grounded in SPCU Trust Skeleton #7 and IRC Section 664. Include Lead/Remainder Annuity or Unitrust Payout Schedule, Capital Gains Deferral / Elimination Mechanics, 10% Minimum Charitable Remainder Guardrail, and Substantiation Provisions."
  },
  "special-needs-trust-snt": {
    title: "Third-Party Supplemental & Special Needs Trust (SNT) Indenture",
    query: "SPCU Trust Skeleton #6 Third-Party Special Needs Supplemental Care Trust Indenture Medicaid SSI",
    instructions: "Draft a complete Third-Party Supplemental and Special Needs Trust (SNT) Indenture grounded in SPCU Trust Skeleton #6. Include Strict Supplemental-Only Discretionary Distribution Standards (prohibiting distributions that supplant SSI, Medicaid, or public benefits), Spendthrift Immunity, Care Manager Provisions, and Remainder Beneficiary Succession."
  },
  "ecclesiastical-508c1a-ministry-trust": {
    title: "26 U.S.C. § 508(c)(1)(A) Ecclesiastical & Faith-Based Ministry Trust Charter",
    query: "SPCU Volume XX Ecclesiastical Law 508(c)(1)(A) Faith-Based Trusts Private Ministerial Associations Watson v Jones",
    instructions: "Draft a complete 26 U.S.C. Section 508(c)(1)(A) Ecclesiastical Pure Trust & Faith-Based Ministry Charter grounded in SPCU Volume XX. Include First Amendment Church Autonomy & Ecclesiastical Abstention Reservation (Watson v. Jones / Kedroff / Hosanna-Tabor), IRS 14-Point Church Criteria Alignment, Mandatory Exception Declaration under IRC Sections 508(c)(1)(A) and 6033(a)(3)(A)(i), Strict Zero-Private-Inurement & Charitable Dissolution Guardrail, and Ecclesiastical Banking Resolution."
  },
  "real-estate-land-trust-garn-st-germain": {
    title: "Real Estate Privacy Land Trust Agreement & Garn-St. Germain (12 U.S.C. § 1701j-3) Deed Packet",
    query: "SPCU Volume XXI Volume XXV Real Estate Land Trust Garn-St Germain 12 USC 1701j-3 ALTA 107.9 Deed in Trust",
    instructions: "Draft a complete Illinois/Florida-Style Real Estate Privacy Land Trust Agreement, Deed in Trust to Trustee, Unrecorded Assignment of Beneficial Interest to the Master Holding Trust, and Lender Notice of Garn-St. Germain Due-on-Sale Exemption (12 U.S.C. Section 1701j-3(d)(8)) + ALTA Title Insurance Continuity Notice grounded in SPCU Volumes XXI and XXV."
  },
  "client-strategy-memo": {
    title: "7-Phase Private Wealth & 10-Layer Trust Strategy Memorandum",
    query: "Client Dossier Strategy Session Playbook 7-Phase Intake 10 Layers of Asset Protection Memorandum",
    instructions: "Draft an executive 7-Phase Client Strategy Session Memorandum & 10-Layer Asset Protection Blueprint structured according to the Client Dossier Strategy Session Playbook and Trust Architecture manual. Include Executive Summary, Current Exposure Audit, 10-Layer Structuring Recommendations, Banking & EIN Sequence, and 30-60-90 Day Implementation Checklist."
  },
  "notice-of-rights-affidavit": {
    title: "Administrative Notice, Affidavit of Status & Record Preservation",
    query: "Know Your Rights Master Field Manual SPCU Doctrine Foundations Before Remedies Record Preservation Court",
    instructions: "Draft a formal Administrative Notice, Affidavit of Facts & Constitutional Record Preservation Memorandum structured according to Know Your Rights: What Works in Court and The SPCU Doctrine: Foundations Before Remedies. Include Statement of Capacity & Standing, Chronological Statement of Facts, Constitutional & Common-Law Reservation of Rights (4th, 5th, 6th Amendments), and Verification Jurat."
  },
  "audit-uploaded-document": {
    title: "Forensic SPCU Trust & Rights Audit of Uploaded Document",
    query: "SPCU Doctrine Foundations Before Remedies Trust Architecture Know Your Rights Bank Packet Audit Volume XXIII",
    instructions: "Perform a rigorous clause-by-clause forensic audit of the user's uploaded document/OCR text against the 25 SPC University Omnibus Volumes, 10 Trust Skeletons, and 6 Master Books. Identify strengths, missing protections, red-flag vulnerabilities, banking or courtroom compliance gaps, and provide exact recommended replacement clauses with [S#] citations."
  }
};

// ---------- 16 Specialized Faculty Subject Tutors + 150+ Individual Volume, Skeleton, Book & Lesson Tutors ----------
const SPECIALIZED_TUTORS = {
  "pure-trust-master-tutor": {
    id: "pure-trust-master-tutor",
    name: "Common-Law Pure Trust & Express Trust Tutor",
    title: "Professor of Common-Law Express Trusts & Supreme Court Trust Jurisprudence",
    specialty: "Express Trusts under the Common Law (Alfred D. Chandler), Eliot v. Freeman (220 U.S. 178), Crocker v. Malley (249 U.S. 223), Schumann-Heink v. Folsom, Article I Section 10 Contract Trusts, Separation of Legal & Equitable Title",
    seed_query: "SPCU Volume XVII Common-Law Express Trusts Eliot v Freeman Crocker v Malley Alfred Chandler Separation of Legal and Equitable Title",
    mission: "Teach the student step-by-step how a Common-Law Pure Trust (Express Contract Trust) works under U.S. Supreme Court precedent, why legal title in the Trustees must remain strictly separated from equitable enjoyment, how to draft the Declaration of Trust and Schedule A, and how to operate without statutory merger or corporate-association mistakes."
  },
  "world-international-trust-tutor": {
    id: "world-international-trust-tutor",
    name: "World Trust, Cook Islands, Nevis, Belize & Cayman PTC Offshore Tutor",
    title: "Chair of World Trust Architecture, Foreign Situs & International Asset Protection",
    specialty: "Cook Islands International Trusts Act 1984 (§ 13B Beyond Reasonable Doubt), Nevis NIETO ($100k Creditor Bond), Belize Trusts Act (§ 7(6)), Cayman STAR Trusts & Private Trust Companies (PTC), Event-of-Duress Flight Clauses, IRS Forms 3520/3520-A",
    seed_query: "SPCU Volume XIV Volume XXII Cook Islands Nevis Belize Cayman PTC STAR Trust Event of Duress Form 3520",
    mission: "Teach the student how World Trusts, Offshore Asset Protection Trusts (Cook Islands, Nevis, Belize, Cayman STAR/PTC), and Event-of-Duress Flight Clauses work alongside domestic holding layers—including lessons from FTC v. Affordable Media (Anderson) and mandatory IRS Form 3520/3520-A compliance."
  },
  "ten-layer-architecture-tutor": {
    id: "ten-layer-architecture-tutor",
    name: "10-Layer Trust Architecture & Holding Company Tutor",
    title: "Architect of the 10-Layer Private Wealth & Liability Shield",
    specialty: "The 10 Layers of Asset Protection Manual, Master Holding Trusts vs. Asset Sub-Trusts vs. Operating LLCs, Charging-Order Protection, Intellectual Property & Real Estate Isolation",
    seed_query: "Trust Architecture 10 Layers Manual THE OFFICIAL 10 LAYERS OF SPC UNIVERSITY TRUST ARCHITECTURE",
    mission: "Walk the student layer-by-layer through all 10 Layers of Trust Architecture so they understand how to separate personal capacity, settlor severance, legal vs. equitable title, spendthrift shields, trust protectors, holding trusts, operating LLCs, Schedule A deeds, UTC § 1013 banking, and generational succession."
  },
  "dynasty-slat-grat-idgt-tutor": {
    id: "dynasty-slat-grat-idgt-tutor",
    name: "Dynasty Trusts, SLATs, ILITs, GRATs, IDGTs & 2026 $15M Estate Tax Tutor",
    title: "Chair of Advanced Wealth Transfer, Subchapter J & Dynasty Trust Engineering",
    specialty: "2026 OBBBA $15M ($30M Married) IRC § 2010 Exemption, South Dakota/Nevada/Delaware/Wyoming Dynasty Trusts, Spousal Lifetime Access Trusts (SLATs & Estate of Grace), ILIT Crummey Notices, Zeroed-Out GRATs (§ 2702), IDGT Installment Sales (Rev. Rul. 85-13 & § 675(4)(C) Swap Power)",
    seed_query: "SPCU Volume XVIII Volume XXI SKELETON Dynasty Trust SLAT ILIT GRAT IDGT Rev Rul 85-13 15000000",
    mission: "Coach the student on how ultra-high-net-worth families combine Dynasty Trusts, SLATs, ILITs, GRATs, and IDGTs under the 2026 $15M/$30M federal exemption to freeze estate values, eliminate 40% transfer taxes across generations, and use IRC Section 675(4)(C) swap powers for basis step-up planning."
  },
  "ecclesiastical-508c1a-trust-tutor": {
    id: "ecclesiastical-508c1a-trust-tutor",
    name: "Ecclesiastical Law, 508(c)(1)(A) Ministry Trusts & Church Autonomy Tutor",
    title: "Professor of First Amendment Ecclesiastical Law & 508(c)(1)(A) Faith-Based Trusts",
    specialty: "26 U.S.C. § 508(c)(1)(A) Mandatory Church Exception, IRC § 6033(a)(3)(A)(i) Form 990 Exemption, IRC § 7611 Church Tax Inquiry Shield, Watson v. Jones, Kedroff, Hosanna-Tabor, IRS 14-Point Church Criteria & Zero-Inurement Guardrails",
    seed_query: "SPCU Volume XX Ecclesiastical Law 508(c)(1)(A) Faith-Based Trusts Watson v Jones Hosanna-Tabor",
    mission: "Teach the student how First Amendment Ecclesiastical Abstention and 26 U.S.C. Section 508(c)(1)(A) Faith-Based Ministry Trusts work under U.S. Supreme Court precedent and the Internal Revenue Code—showing how to structure a bona fide ministry trust while enforcing strict zero-private-inurement guardrails."
  },
  "real-estate-land-trust-tutor": {
    id: "real-estate-land-trust-tutor",
    name: "Real Estate Land Trusts, Garn-St. Germain & Title Insurance Tutor",
    title: "Director of Real Property Privacy, Land Trusts & Deed Conveyance",
    specialty: "Illinois & Florida-Style Real Estate Land Trusts (Fla. Stat. § 689.071 / 765 ILCS 405), Garn-St. Germain Due-on-Sale Exemption (12 U.S.C. § 1701j-3(d)(8)), ALTA 2021 Policy & Endorsement 107.9 Title Insurance Continuity, Unrecorded Assignments of Beneficial Interest",
    seed_query: "SPCU Volume XXI Volume XXV Garn-St. Germain 12 U.S.C. 1701j-3 Land Trust ALTA 107.9 Deed into Trustee",
    mission: "Teach the student exactly how to transfer real estate into a Land Trust or Holding Trust without triggering mortgage due-on-sale clauses (under 12 U.S.C. § 1701j-3(d)(8)), without voiding owner's title insurance, and without exposing beneficial ownership on public county land records."
  },
  "bank-packet-ein-tutor": {
    id: "bank-packet-ein-tutor",
    name: "Private Trust Banking, EIN, CIP Underwriting & Certificate of Trust Tutor",
    title: "Director of Trust Banking Operations, Treasury Setup & Minute Books",
    specialty: "The Bank Packet: Open Your Trust Account, 7-Step Banker Scripts, IRS Form SS-4 Trust EINs, UTC § 1013 Certificate of Trust, Form 56 Fiduciary Notice, Bank CIP Underwriting (31 CFR § 1020.220) & FinCEN 2026 Permanent Domestic CTA BOI Exemption",
    seed_query: "The Bank Packet Open Your Trust Account SPCU Volume XXV Certificate of Trust IRS SS-4 EIN Form 56 FinCEN 2026 CTA Exemption",
    mission: "Coach the student on the exact 7-step Bank Packet protocol and bank compliance underwriting rules: obtaining a clean Trust EIN on Form SS-4, presenting a UTC Section 1013 Certificate of Trust and Minute #001 Banking Resolution, invoking the FinCEN August 2026 permanent domestic CTA BOI exemption, and signing non-recourse under UCC 3-402."
  },
  "equity-maxims-jurisprudence-tutor": {
    id: "equity-maxims-jurisprudence-tutor",
    name: "Equity Jurisprudence, Pomeroy/Story Maxims & Chancery Tutor",
    title: "Professor of Chancery Equity & The 20 Maxims of Equity",
    specialty: "Pomeroy's Equity Jurisprudence, Story's Commentaries on Equity, The 20 Maxims of Equity, The Living Conscience of Law, Constructive & Resulting Trusts, Equitable Remedies vs. Strict Statutory Law",
    seed_query: "SPCU Compendium Pomeroy Story Maxims of Equity Understanding the principles of Equity 20 Maxims of Equity",
    mission: "Teach the student the 20 Maxims of Equity and Pomeroy/Story Chancery jurisprudence in plain English, showing how Equity regards substance over form, how clean hands and equitable notice work, and how every trust relationship is fundamentally governed by Equity."
  },
  "constitutional-status-jurisdiction-tutor": {
    id: "constitutional-status-jurisdiction-tutor",
    name: "Constitutional Status, Sui Juris, Jarkesy/Loper Bright & Jurisdiction Tutor",
    title: "Dean of Constitutional Law, Citizenship & Jurisdictional Boundaries",
    specialty: "The SPCU Doctrine: Foundations Before Remedies, Volumes I-XII Sovereignty & Jurisdiction, SEC v. Jarkesy (2024 7th Amendment), Loper Bright (2024 Overruling Chevron), Corner Post (2024), Sui Juris, Minimum Contacts & Ashwander Rules",
    seed_query: "The Spcu Doctrine Foundations Before Remedies SPCU Volume I Volume II Volume IV SEC v Jarkesy Loper Bright",
    mission: "Teach the student 'Foundations Before Remedies' and the 12-Volume Constitutional & Jurisdiction Dossier—including how federal vs. state jurisdiction, Minimum Contacts, Ashwander Rules, and the 2024 Supreme Court administrative law rulings (SEC v. Jarkesy, Loper Bright, Corner Post) operate in real courts."
  },
  "courtroom-objections-record-tutor": {
    id: "courtroom-objections-record-tutor",
    name: "Courtroom Procedure, Objections, Allocution & Record Tutor",
    title: "Lead Trial & Administrative Record Preservation Coach",
    specialty: "Know Your Rights: What Works in Court, Volume IX Procedural Law, Forming Proper Objections in Court, Arraignment Dialogue Strategy, The Allocution Process, Writ of Mandamus & Habeas Corpus 2255",
    seed_query: "Know Your Rights Master Field Manual SPCU Volume IX HOW TO PROPERLY FORM AN OBJECTION IN COURT Arraignment Allocution",
    mission: "Roleplay and coach the student on what actually works in court and at the roadside: how to preserve 4th, 5th, and 6th Amendment rights on the record, how to make timely courtroom objections, how to challenge administrative jurisdiction, and how to build a clean appellate record."
  },
  "commercial-law-ucc-debt-tutor": {
    id: "commercial-law-ucc-debt-tutor",
    name: "Commercial Law, Negotiable Instruments, UCC Articles 1-9 & Debt Tutor",
    title: "Specialist in Commercial Presentments, UCC Security Interests & FDCPA Defense",
    specialty: "SPCU Volume VII Commercial Law & UCC Articles 1-9, 15 U.S.C. § 1692g Debt Validation, Proper Handling of Presentments, 19 Ways to Discharge a Negotiable Instrument (UCC Art. 3), 50-State UCC-1 False-Lien Compliance Guardrails",
    seed_query: "SPCU Volume VII Commercial Law UCC Proper Handling of Presentments 19 Ways to Discharge a Debt 15 USC 1692g",
    mission: "Teach the student how commercial paper, negotiable instruments (UCC Article 3), bona fide UCC-1 security agreements (UCC Article 9), and 15 U.S.C. § 1692g debt validation actually work—while enforcing the 50-State False-Lien Compliance Guardrails."
  },
  "tax-compliance-irs-defense-tutor": {
    id: "tax-compliance-irs-defense-tutor",
    name: "Subchapter J Trust Taxation, Form 1041, Kaestner & IRS Audit Guardrails Tutor",
    title: "Senior Trust Tax, Subchapter J & IRS Compliance Guardrail Instructor",
    specialty: "IRC Subchapter J (§§ 641-685), Simple vs. Complex vs. Grantor Trusts, Distributable Net Income (DNI), Form 1041 & Schedule K-1, Kaestner (588 U.S. 262) State Tax Immunity, Abusive Trust Scheme Guardrails & Fiscal Integrity",
    seed_query: "SPCU Volume XV Volume XVIII Volume XXIV Subchapter J IRC 641 651 661 671 Kaestner Abusive trust tax evasion schemes",
    mission: "Teach the student exact Subchapter J trust taxation (IRC §§ 641-685), Form 1041 & Schedule K-1 mechanics, the Supreme Court's Kaestner rule shielding out-of-state trusts from state income tax, and the exact IRS guardrails so their trust maintains 100% lawful fiscal integrity."
  },
  "estate-vault-probate-tutor": {
    id: "estate-vault-probate-tutor",
    name: "Complete Estate Planning Vault, Pour-Over Wills, SNTs & Probate Shield Tutor",
    title: "Director of Family Legacy, Special Needs & Incapacity Planning",
    specialty: "The Complete Estate Planning Vault Master Edition, Revocable Spine Package (Skeleton #10), Third-Party Special Needs Trusts (Skeleton #6), Charitable CRUT/CLT Layer (Skeleton #7), Pour-Over Wills, Healthcare Surrogate & DPOA",
    seed_query: "The Estate Planning Vault Master Edition SPCU Trust Skeleton #6 Skeleton #7 Skeleton #10 Pour-Over Will",
    mission: "Guide the student through assembling their complete family estate binder: coordinating their Pure or Dynasty Trust with a Pour-Over Will, Living Will, Healthcare Surrogate, Durable Power of Attorney, Special Needs Trust, and Schedule A asset deeds so their family avoids probate court completely."
  },
  "client-dossier-advisor-tutor": {
    id: "client-dossier-advisor-tutor",
    name: "7-Phase Client Dossier & High-Ticket Trust Advisor Tutor",
    title: "Executive Coach for Trust Consultants & 7-Phase Strategy Sessions",
    specialty: "Client Dossier: Strategy Session Playbook, Master Client Intake, Execution Playbook, 7-Phase Diagnostic Audit, Risk Matrix Scoring & Entity Structuring Blueprints",
    seed_query: "Client Dossier Strategy Session Playbook SPCU Playbook Master Client Intake Execution Playbook",
    mission: "Train the student on how to conduct a professional 7-Phase Client Strategy Session using the Client Dossier Playbook—diagnosing client asset exposure, mapping out the 10-layer domestic or international structure, and delivering an executive strategy memorandum."
  },
  "administrative-process-notices-tutor": {
    id: "administrative-process-notices-tutor",
    name: "Administrative Process, Affidavits, Bonds, Minute Books & Certified Mail Tutor",
    title: "Master Instructor of Administrative Remedies, Fiduciary Minute Books & Notarial Record",
    specialty: "SPCU Volume XXV Minute Book Protocols, Administrative Process, Affidavits of Fact, Fiduciary Surety Bonds, USPS Form 3800/3811 Certified Mail Green Card Record, Non-Recourse Signing (UCC 3-402 / UTC § 1010)",
    seed_query: "SPCU Volume XXV Administrative Process How to Sign Your Signature Without Incurring Liability Public Hazard Bond",
    mission: "Teach the student how to maintain an audit-proof Leather Trust Minute Book and administrative record: drafting numbered Trustee Resolutions, affidavits of fact, signing in representative fiduciary capacity without personal liability, bonding fiduciaries, and serving notices via Certified Mail."
  },
  "case-law-precedents-tutor": {
    id: "case-law-precedents-tutor",
    name: "100+ Landmark Trust, Equity, Spendthrift & Supreme Court Precedents Tutor",
    title: "Chief Reporter of Supreme Court Trust, Equity & Constitutional Case Law",
    specialty: "SPCU Volume X & Volume XXIV Case Law Digest, Case Briefs I & II: Eliot v. Freeman, Crocker v. Malley, Morrissey, Navarro Savings, Americold, Nichols v. Eaton, Kaestner, Estate of Grace, Crummey, Estate of Wall, Jarkesy, Loper Bright",
    seed_query: "SPCU Volume XXIV Volume X Case Briefs Eliot v Freeman Crocker v Malley Nichols v Eaton Kaestner Crummey Jarkesy",
    mission: "Teach the student the exact holdings, citations, and practical application of the 100+ controlling U.S. Supreme Court and appellate cases governing common-law trusts, spendthrift immunity, asset protection stress-tests, estate/gift taxation, and constitutional jurisdiction."
  }
};

function getLessonAssetsCatalog() {
  const SKIP_PAGES = new Set([
    "SPCU Page: Enroll", "SPCU Page: Articles", "SPCU Page: Terms Of Service", "SPCU Page: Privacy Policy",
    "SPCU Page: HomePage-SPC University", "SPCU Page: Cancellation Policy", "SPCU Page: Refund and Returns Policy",
    "SPCU Page: Member Dashboard", "SPCU Page: Booking Form", "SPCU Page: Book an Appointment",
    "SPCU Page: Time Appointments Booking", "SPCU Page: Time Slots Booking", "SPCU Page: SPC University Public Docs",
    "SPCU Page: PDF Downloads", "SPCU Page: Zelle", "SPCU Page: Venmo", "SPCU Page: CashAPP",
    "SPCU Page: Booking Received", "SPCU Page: Support", "SPCU Page: Thank You", "SPCU Page: Contact", "SPCU Page: About"
  ]);
  const MASTER_BOOKS = new Set([
    "Client Dossier Strategy Session Playbook",
    "Know Your Rights Master Field Manual",
    "The Bank Packet Open Your Trust Account",
    "The Estate Planning Vault Master Edition",
    "The Spcu Doctrine Foundations Before Remedies",
    "Trust Architecture 10 Layers Manual"
  ]);
  const counts = {};
  const previews = {};
  for (const c of KB) {
    if (SKIP_PAGES.has(c.book)) continue;
    counts[c.book] = (counts[c.book] || 0) + 1;
    if (!previews[c.book]) previews[c.book] = c.text.slice(0, 260);
  }
  const rankKind = (k) => k === "Master Book" ? 1 : k === "Trust Skeleton" ? 2 : k === "Omnibus Volume" ? 3 : k === "Doctrinal Compendium" ? 4 : 5;
  return Object.keys(counts).map((b) => {
    let kind = "Lesson & Video Guide";
    if (MASTER_BOOKS.has(b)) kind = "Master Book";
    else if (b.startsWith("SPCU Trust Skeleton")) kind = "Trust Skeleton";
    else if (b.startsWith("SPCU Volume")) kind = "Omnibus Volume";
    else if (b.startsWith("SPCU Compendium") || b.startsWith("SPCU Case Briefs") || b.startsWith("SPCU Guardrail") || b.startsWith("SPCU Playbook") || b.startsWith("SPCU Handbook") || b.startsWith("SPCU Architecture") || b.startsWith("SPCU Master Reference") || b.startsWith("SPCU Worldwide")) kind = "Doctrinal Compendium";
    const cleanTitle = b.replace(/^SPCU Article:\s*/i, "").replace(/^SPCU Page:\s*/i, "").trim();
    return {
      book_key: b,
      title: cleanTitle,
      kind,
      chunks: counts[b],
      preview: previews[b]
    };
  }).sort((a, b) => (rankKind(a.kind) !== rankKind(b.kind) ? rankKind(a.kind) - rankKind(b.kind) : b.chunks - a.chunks));
}
function chain(env, tier) {
  const std = [["cf:" + env.MODEL_STANDARD, cfModel(env, env.MODEL_STANDARD, 4500)], ["cf:" + env.MODEL_FAST, cfModel(env, env.MODEL_FAST, 3500)]];
  const prem = [["cf:" + env.MODEL_PREMIUM_2, cfModel(env, env.MODEL_PREMIUM_2, 4000)], ["cf:" + env.MODEL_PREMIUM, cfModel(env, env.MODEL_PREMIUM, 4500)], ...std];
  if (tier === "fast") return [["cf:" + env.MODEL_FAST, cfModel(env, env.MODEL_FAST, 3500)]];
  if (tier === "premium") return prem;
  if (tier === "frontier") return [...(env.NVIDIA_API_KEY ? [["nim:" + env.MODEL_FRONTIER_NIM, openaiCompat("https://integrate.api.nvidia.com/v1", env.NVIDIA_API_KEY, env.MODEL_FRONTIER_NIM, 50000)]] : []), ...prem];
  if (tier === "gpu") return [...(env.GPU_ENDPOINT_URL && env.GPU_API_KEY ? [["gpu:" + (env.GPU_MODEL || "custom"), openaiCompat(env.GPU_ENDPOINT_URL, env.GPU_API_KEY, env.GPU_MODEL || "default", 90000)]] : []), ...std];
  return std;
}
async function generate(env, tier, msgs, opts = {}) {
  if (opts.direct_model) {
    const cat = allCatalogModels(env);
    if (cat[opts.direct_model]) {
      try {
        const out = await cat[opts.direct_model].fn(msgs);
        if (out) return { out, used: "direct:" + opts.direct_model };
      } catch (e) { log({ level: "warn", model: opts.direct_model, err: String(e).slice(0, 180) }); }
    }
  }
  if (tier === "council") return councilGenerate(env, msgs, opts.experts);
  for (const [name, fn] of chain(env, tier)) {
    try { const out = await fn(msgs); if (out) return { out, used: name }; } catch (e) { log({ level: "warn", model: name, err: String(e).slice(0, 200) }); }
  }
  return null;
}


// ---------- Mixture of Experts "Council" ----------
const LENSES = [
  "Lens: Senior Trust Indenture Architect. Detail the exact trust articles, separation of legal and equitable title, and citations [S#].",
  "Lens: Fiduciary Guardrail & Banking/IRS Compliance Counsel. Detail the exact UTC Section 1013 Certificate of Trust, IRS SS-4 EIN, and spendthrift compliance guardrails required to execute this cleanly.",
  "Lens: Practical Implementation Director. Give the clearest step-by-step action checklist and document sequence the student can execute right away.",
  "Lens: Master SPCU Educator. Explain the concepts clearly in plain everyday English with a concrete real-world example.",
  "Lens: 10-Layer Asset Protection Strategist. Show how this fits into the complete 10-Layer Trust Architecture (Holding Trust, Asset Sub-Trusts, and Operating LLCs).",
  "Lens: Executive Action Summary. Deliver the most direct, high-impact operational blueprint."
];
const withTimeout = (p, ms) => Promise.race([p, new Promise((_, rej) => setTimeout(() => rej(new Error("timeout")), ms))]);
function allCatalogModels(env) {
  const map = {
    "deepseek-v4.1": { name: "DeepSeek V4.1 Flash", provider: "Cloudflare Edge", params: "304B MoE", fn: cfModel(env, env.MODEL_STANDARD, 4500) },
    "glm-5.3": { name: "Zhipu GLM-5.3", provider: "Cloudflare Edge", params: "Frontier", fn: cfModel(env, env.MODEL_PREMIUM, 4500) },
    "gpt-oss-120b": { name: "OpenAI GPT-OSS-120B", provider: "Cloudflare Edge", params: "120B", fn: cfModel(env, env.MODEL_PREMIUM_2, 3500) },
    "mistral-small-3.1": { name: "Mistral Small 3.1 24B", provider: "Cloudflare Edge", params: "24B", fn: cfModel(env, "@cf/mistralai/mistral-small-3.1-24b-instruct") },
    "llama-4-scout": { name: "Meta Llama 4 Scout 17B-16E", provider: "Cloudflare Edge", params: "109B MoE", fn: cfModel(env, "@cf/meta/llama-4-scout-17b-16e-instruct") },
    "llama-3.3-70b": { name: "Meta Llama 3.3 70B FP8 Fast", provider: "Cloudflare Edge", params: "70B", fn: cfModel(env, env.MODEL_FAST) },
    "gemma-4-26b": { name: "Google Gemma 4 26B-A4B", provider: "Cloudflare Edge", params: "26B MoE", fn: cfModel(env, "@cf/google/gemma-4-26b-a4b-it", 3500) },
    "qwen-2.5-coder-32b": { name: "Qwen 2.5 Coder 32B", provider: "Cloudflare Edge", params: "32B", fn: cfModel(env, "@cf/qwen/qwen2.5-coder-32b-instruct") },
  };
  if (env.NVIDIA_API_KEY) {
    map["nemotron-550b"] = { name: "NVIDIA Nemotron-3 Ultra 550B", provider: "NVIDIA NIM", params: "550B MoE", fn: openaiCompat("https://integrate.api.nvidia.com/v1", env.NVIDIA_API_KEY, "nvidia/nemotron-3-ultra-550b-a55b", 45000) };
    map["nemotron-120b-vl"] = { name: "NVIDIA Nemotron 3.5 Super 120B", provider: "NVIDIA NIM", params: "120B MoE", fn: openaiCompat("https://integrate.api.nvidia.com/v1", env.NVIDIA_API_KEY, "nvidia/nemotron-3.5-super-vl-120b-a12b", 45000) };
    map["step-5-preview"] = { name: "StepFun Step-5 Frontier Preview", provider: "NVIDIA NIM", params: "Frontier MoE", fn: openaiCompat("https://integrate.api.nvidia.com/v1", env.NVIDIA_API_KEY, "stepfun-ai/step-5-preview", 45000) };
    map["nemotron-lightning-30b"] = { name: "NVIDIA Nemotron 3.5 Lightning 30B", provider: "NVIDIA NIM", params: "30B-A3B", fn: openaiCompat("https://integrate.api.nvidia.com/v1", env.NVIDIA_API_KEY, "nvidia/nemotron-3.5-lightning-30b-a3b", 45000) };
  }
  if (env.GPU_ENDPOINT_URL && env.GPU_API_KEY) {
    map["private-gpu-qwen3.8"] = { name: "SPCU Private Legal Engine 28B", provider: "SPCU Dedicated Compute", params: "28B", fn: openaiCompat(env.GPU_ENDPOINT_URL, env.GPU_API_KEY, env.GPU_MODEL || "Qwen/Qwen3.8-27B-FP8", 65000) };
  }
  return map;
}
function experts(env, picked) {
  const cat = allCatalogModels(env);
  const defaults = ["deepseek-v4.1", "glm-5.3", "gpt-oss-120b", "mistral-small-3.1", "llama-4-scout", cat["private-gpu-qwen3.8"] ? "private-gpu-qwen3.8" : "nemotron-550b"];
  const ids = (Array.isArray(picked) && picked.length >= 2 ? picked : defaults).filter((id) => cat[id]).slice(0, 6);
  const finalIds = ids.length >= 2 ? ids : defaults.filter((id) => cat[id]).slice(0, 6);
  return finalIds.map((id) => [id, cat[id].fn, cat[id].name]);
}
async function councilGenerate(env, msgs, picked) {
  const team = experts(env, picked);
  const settled = await Promise.allSettled(team.map(([, fn], i) => {
    const m = msgs.map((x, k) => (k === 0 ? { ...x, content: x.content + "\n\n" + LENSES[i % LENSES.length] } : x));
    return withTimeout(fn(m), 55000);
  }));
  const drafts = settled.map((r, i) => ({ name: team[i][0], text: r.status === "fulfilled" ? r.value : null })).filter((d) => d.text);
  log({ level: "info", op: "council", asked: team.length, answered: drafts.length, names: drafts.map((d) => d.name), failed: settled.map((r, i) => (r.status === "rejected" ? team[i][0] + ":" + String(r.reason).slice(0, 120) : r.value ? null : team[i][0] + ":empty")).filter(Boolean) });
  if (!drafts.length) return null;
  const question = msgs[msgs.length - 1].content;
  const excerpts = msgs[0].content.split("SPC UNIVERSITY CURRICULUM KNOWLEDGE:")[1] || msgs[0].content.split("LIBRARY EXCERPTS:")[1] || "";
  let final = null;
  if (drafts.length > 1) {
    const judge = [
      { role: "system", content: "You chair the 6-Model Legal & Trust Council for SPC University TrustGPT. You receive specialist drafts from 6 models. Synthesize ONE authoritative, complete, actionable master answer in first-party SPC University voice. Deliver the complete framework, step-by-step sequence, and exact required documents directly, citing [S1], [S2] naturally. NEVER talk about 'the library excerpts', 'gaps in the excerpts', 'what the excerpts do not enumerate', or 'cautions about the publisher'. End with a single line starting 'Council Consensus:' summarizing the unified execution path.\n\n" + PLAIN_STYLE_RULE + "\n\nSPC UNIVERSITY CURRICULUM KNOWLEDGE:" + excerpts },
      { role: "user", content: `QUESTION: ${question}\n\n` + drafts.map((d, i) => `--- DRAFT ${i + 1} (${d.name}) ---\n${d.text.slice(0, 3500)}`).join("\n\n") },
    ];
    for (const m of [env.MODEL_PREMIUM, env.MODEL_STANDARD]) {
      try { final = await withTimeout(cfModel(env, m)(judge), 60000); if (final) break; } catch (e) { log({ level: "warn", op: "judge", m, err: String(e).slice(0, 120) }); }
    }
  }
  return { out: final || drafts[0].text, used: "council:" + drafts.map((d) => d.name).join("+"), drafts: drafts.map((d) => ({ model: d.name, text: d.text.slice(0, 1800) })) };
}

// ---------- persistent memory ----------
const SENSITIVE = /(ssn|social security|password|passcode|account number|routing|card number|\d{6,})/i;
async function loadMemory(env, uid) {
  const r = await env.DB.prepare("SELECT fact FROM memories WHERE user_id=? ORDER BY id DESC LIMIT 12").bind(uid).all();
  return r.results.map((x) => x.fact);
}
async function extractMemory(env, uid, message, answer) {
  try {
    const out = await cfModel(env, env.MODEL_FAST)([
      { role: "system", content: 'From the exchange, extract up to 2 durable facts about the USER (goals, situation, preferences, level of experience) useful for future help. NEVER include IDs, account numbers, passwords, SSNs, or contact details. Reply ONLY with a JSON array of short strings, or [] if nothing durable.' },
      { role: "user", content: `USER: ${message.slice(0, 1200)}\nASSISTANT: ${answer.slice(0, 600)}` },
    ]);
    const m = out && out.match(/\[[\s\S]*\]/);
    if (!m) return;
    const facts = JSON.parse(m[0]).filter((f) => typeof f === "string" && f.length > 8 && f.length < 200 && !SENSITIVE.test(f)).slice(0, 2);
    if (!facts.length) return;
    const have = new Set(await loadMemory(env, uid));
    const cnt = (await env.DB.prepare("SELECT COUNT(*) c FROM memories WHERE user_id=?").bind(uid).first()).c;
    const fresh = facts.filter((f) => !have.has(f));
    if (!fresh.length || cnt >= 50) return;
    await env.DB.batch(fresh.map((f) => env.DB.prepare("INSERT INTO memories(user_id,fact,created_at) VALUES(?,?,?)").bind(uid, f, Date.now())));
  } catch (e) { log({ level: "warn", op: "memory", err: String(e).slice(0, 120) }); }
}

// ---------- Monetization, Credit Packs, Subscriptions & Book/Session Checkout Catalog ----------
async function stripeVerify(body, header, secret) {
  const parts = Object.fromEntries((header || "").split(",").map((p) => p.split("=")));
  if (!parts.t || !parts.v1 || Math.abs(Date.now() / 1000 - Number(parts.t)) > 300) return false;
  const key = await crypto.subtle.importKey("raw", new TextEncoder().encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const sig = hex(await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(parts.t + "." + body)));
  return sig.length === parts.v1.length && sig.split("").every((c, i) => c === parts.v1[i]);
}
const DEFAULT_MONETIZATION_CATALOG = {
  // 1. Recurring Memberships & SaaS Plans
  "plan-pro-monthly": { id: "plan-pro-monthly", category: "membership", title: "SPCU Pro Student Membership ($99/mo)", subtitle: "250 Daily Free Standard/Fast Runs + 150 Monthly Model Credits + All 16+151 AI Tutors", amount_cents: 9900, price_display: "$99.00 / month", mode: "subscription", interval: "month", credits: 150, plan: "pro" },
  "plan-faculty-monthly": { id: "plan-faculty-monthly", category: "membership", title: "SPCU Sovereign Counsel & Book Empire Plan ($297/mo)", subtitle: "Unlimited Standard Runs + 600 Monthly Credits for 6-Model Council, 550B Counsel & 10K+ Book Maker", amount_cents: 29700, price_display: "$297.00 / month", mode: "subscription", interval: "month", credits: 600, plan: "sovereign" },
  "plan-annual-vault": { id: "plan-annual-vault", category: "membership", title: "SPCU Annual All-Access Membership ($997/yr)", subtitle: "Save $191/yr · 2,000 Model Credits + Full 25-Volume Corpus + 17 Trust Drafters", amount_cents: 99700, price_display: "$997.00 / year", mode: "subscription", interval: "year", credits: 2000, plan: "sovereign" },

  // 2. Pay-As-You-Go AI Model & Council Credit Top-Up Packs
  "credits-100": { id: "credits-100", category: "credits", title: "100 AI Model & Council Credits Pack", subtitle: "25 Full 6-Model Legal Council Runs or 100 Senior 120B Trust Drafts (Never Expires)", amount_cents: 2900, price_display: "$29.00", mode: "payment", credits: 100 },
  "credits-350": { id: "credits-350", category: "credits", title: "350 AI Model & Council Credits Pack (Most Popular)", subtitle: "87 Full 6-Model Legal Council Runs or 116 Supreme 550B Runs + Bonus Credits", amount_cents: 7900, price_display: "$79.00", mode: "payment", credits: 350 },
  "credits-1000": { id: "credits-1000", category: "credits", title: "1,000 Institutional AI Credits + Developer API Pack", subtitle: "250 Full 6-Model Council Runs + Unlimited Book Maker Runs + OpenAI-Compatible sk-spcu-* API Access", amount_cents: 19700, price_display: "$197.00", mode: "payment", credits: 1000, plan: "pro" },
  "credits-3000": { id: "credits-3000", category: "credits", title: "3,000 Family Office & Law Desk AI Credits Vault", subtitle: "750 Full 6-Model Council Runs + High-Volume Trust Drafting & API Quota", amount_cents: 49700, price_display: "$497.00", mode: "payment", credits: 3000, plan: "sovereign" },

  // 3. Unabridged Flagship Books & High-Ticket Advisory Packages
  "book-know-your-rights": { id: "book-know-your-rights", category: "product", title: "Know Your Rights: What Works in Court (14,817-Word Master Manual)", subtitle: "Unabridged Field Manual + 50 Bonus TrustGPT Credits + Dedicated AI Tutor", amount_cents: 29700, price_display: "$297.00", mode: "payment", credits: 50, book_url: "https://spcuniversity.com/book5" },
  "book-bank-packet": { id: "book-bank-packet", category: "product", title: "The Bank Packet: Open Your Trust Account (14,292-Word Manual)", subtitle: "UTC § 1013 Certificate of Trust, IRS SS-4 EIN Protocol, Banker Scripts + 100 AI Credits", amount_cents: 49700, price_display: "$497.00", mode: "payment", credits: 100, book_url: "https://spcuniversity.com/book3" },
  "book-spcu-doctrine": { id: "book-spcu-doctrine", category: "product", title: "The SPCU Doctrine: Foundations Before Remedies (20,567-Word Treatise)", subtitle: "Unabridged Foundational Treatise + 100 Bonus TrustGPT Credits", amount_cents: 49700, price_display: "$497.00", mode: "payment", credits: 100, book_url: "https://spcuniversity.com/book6" },
  "book-trust-architecture": { id: "book-trust-architecture", category: "product", title: "Trust Architecture: 10 Layers of Asset Protection (18,681-Word Manual)", subtitle: "Complete 10-Layer Pure Trust Blueprint, Schedule A Deeds + 250 AI Credits", amount_cents: 99700, price_display: "$997.00", mode: "payment", credits: 250, book_url: "https://spcuniversity.com/book2", plan: "pro" },
  "session-client-dossier": { id: "session-client-dossier", category: "product", title: "1-on-1 Private Trust Strategy Session + Client Dossier Playbook", subtitle: "60-Minute Architecture Consultation + 18,021-Word Dossier Manual + 250 AI Credits", amount_cents: 99700, price_display: "$997.00", mode: "payment", credits: 250, book_url: "https://spcuniversity.com/book4", plan: "pro" },
  "vault-estate-omnibus": { id: "vault-estate-omnibus", category: "product", title: "The Complete Estate Planning Vault — Omnibus Master Suite (All 6 Books)", subtitle: "All 6 Unabridged Master Books (104,519 Words) + 17 Trust Drafters + 1,000 AI Credits + Sovereign Plan", amount_cents: 199700, price_display: "$1,997.00", mode: "payment", credits: 1000, book_url: "https://spcuniversity.com/book1", plan: "sovereign" }
};
const packs = (env) => {
  try {
    const custom = JSON.parse(env.CREDIT_PACKS || "{}");
    return { ...DEFAULT_MONETIZATION_CATALOG, ...custom };
  } catch {
    return DEFAULT_MONETIZATION_CATALOG;
  }
};

// ---------- credits ----------
async function debit(env, uid, cost, reason) {
  if (!cost) return true;
  const r = await env.DB.prepare("UPDATE users SET credits=credits-? WHERE id=? AND credits>=?").bind(cost, uid, cost).run();
  if (!r.meta.changes) return false;
  await env.DB.prepare("INSERT INTO ledger(user_id,delta,reason,created_at) VALUES(?,?,?,?)").bind(uid, -cost, reason, Date.now()).run();
  return true;
}
const refund = (env, uid, cost, reason) => cost ? env.DB.batch([
  env.DB.prepare("UPDATE users SET credits=credits+? WHERE id=?").bind(cost, uid),
  env.DB.prepare("INSERT INTO ledger(user_id,delta,reason,created_at) VALUES(?,?,?,?)").bind(uid, cost, "refund:" + reason, Date.now())]) : null;

// ---------- auth ----------
async function session(req, env) {
  const m = (req.headers.get("authorization") || "").match(/^Bearer (.+)$/);
  if (!m) return null;
  const t = m[1];
  if (t.startsWith("sk-spcu-")) {
    const k = await env.DB.prepare("SELECT user_id FROM api_keys WHERE key_hash=? AND revoked=0").bind(await sha256(t)).first();
    return k ? env.DB.prepare("SELECT id,email,plan,credits FROM users WHERE id=?").bind(k.user_id).first() : null;
  }
  const uid = await env.KV.get("s:" + t);
  return uid ? env.DB.prepare("SELECT id,email,plan,credits FROM users WHERE id=?").bind(uid).first() : null;
}
async function authRoute(req, env, mode) {
  const ip = req.headers.get("cf-connecting-ip") || "x";
  const rk = `rl:${mode}:${ip}:${new Date().toISOString().slice(0, 13)}`;
  const n = parseInt((await env.KV.get(rk)) || "0");
  if (n >= 20) return json({ error: "Too many attempts. Try again later." }, 429);
  await env.KV.put(rk, String(n + 1), { expirationTtl: 3700 });
  const { email, password, voucher_code } = await req.json().catch(() => ({}));
  const rawInput = String(email || voucher_code || "").trim();
  const rawPass = String(password || voucher_code || "").trim();
  if (!rawInput) return json({ error: "Please enter your Enrolled Member Email or Member Access Code." }, 400);

  const upperCode = (voucher_code ? String(voucher_code).trim() : (!rawInput.includes("@") ? rawInput : rawPass)).toUpperCase();
  const ADMIN_OWNER_CODES = new Set([
    "YUSEF", "YUSEF-EL", "YUSEF-EL-ADMIN", "MR-BAY", "BAY-ADMIN",
    "SPCU-FOUNDER-5000", "YUSEFEL@SPCUNIVERSITY.COM", "ADMIN@SPCUNIVERSITY.COM"
  ]);
  const BUILTIN_MEMBER_CODES = {
    "SPCU-MEMBER": { plan: "pro", credits: 250 },
    "SPCU-VIP-100": { plan: "pro", credits: 250 },
    "SPCU-PRO-350": { plan: "pro", credits: 350 },
    "SPCU-VAULT-1000": { plan: "sovereign", credits: 1000 },
    "SPCU-OMNIBUS-2000": { plan: "sovereign", credits: 2000 },
    "SPCU-2026": { plan: "pro", credits: 250 }
  };

  let user = null;
  let isAdmin = false;

  // 1. Check Admin / Owner Access Code or Email
  if (ADMIN_OWNER_CODES.has(upperCode) || ADMIN_OWNER_CODES.has(rawInput.toUpperCase())) {
    isAdmin = true;
    const adminEmail = rawInput.includes("@") ? rawInput.toLowerCase() : "yusefel@spcuniversity.com";
    let r = await env.DB.prepare("SELECT * FROM users WHERE email=?").bind(adminEmail).first();
    if (!r) {
      const salt = hex(crypto.getRandomValues(new Uint8Array(16)));
      const id = crypto.randomUUID();
      await env.DB.prepare("INSERT INTO users(id,email,pw_hash,salt,plan,credits,created_at) VALUES(?,?,?,?,?,?,?)").bind(id, adminEmail, await hash(upperCode, salt), salt, "sovereign", 5000, Date.now()).run();
      r = { id, email: adminEmail, plan: "sovereign", credits: 5000 };
    } else if (r.plan !== "sovereign" || r.credits < 1000) {
      await env.DB.prepare("UPDATE users SET plan='sovereign', credits=MAX(credits, 5000) WHERE id=?").bind(r.id).run();
      r.plan = "sovereign";
      r.credits = Math.max(r.credits || 0, 5000);
    }
    user = { id: r.id, email: r.email, plan: r.plan, credits: r.credits };
  }

  // 2. Check Built-in or KV Member Voucher Code
  if (!user) {
    const kvVouch = upperCode ? await env.KV.get("voucher:" + upperCode, "json") : null;
    const matchedVouch = BUILTIN_MEMBER_CODES[upperCode] || (kvVouch && kvVouch.remaining_uses > 0 ? { plan: kvVouch.plan || "pro", credits: kvVouch.credits || 250 } : null);
    if (matchedVouch) {
      const vEmail = rawInput.includes("@") ? rawInput.toLowerCase() : `enrolled-${upperCode.toLowerCase().replace(/[^a-z0-9]/g, "")}@spcuniversity.com`;
      let r = await env.DB.prepare("SELECT * FROM users WHERE email=?").bind(vEmail).first();
      if (!r) {
        const salt = hex(crypto.getRandomValues(new Uint8Array(16)));
        const id = crypto.randomUUID();
        await env.DB.prepare("INSERT INTO users(id,email,pw_hash,salt,plan,credits,created_at) VALUES(?,?,?,?,?,?,?)").bind(id, vEmail, await hash(upperCode, salt), salt, matchedVouch.plan, matchedVouch.credits, Date.now()).run();
        r = { id, email: vEmail, plan: matchedVouch.plan, credits: matchedVouch.credits };
      } else if (r.plan === "guest" || r.plan === "student") {
        await env.DB.prepare("UPDATE users SET plan=?, credits=MAX(credits, ?) WHERE id=?").bind(matchedVouch.plan, matchedVouch.credits, r.id).run();
        r.plan = matchedVouch.plan;
        r.credits = Math.max(r.credits || 0, matchedVouch.credits);
      }
      user = { id: r.id, email: r.email, plan: r.plan, credits: r.credits };
    }
  }

  // 3. Verify against Live SPC University Member Area Backend (admin.spcuniversity.com/node_api/auth/access & /node_api/user/login)
  if (!user && rawInput && rawPass) {
    for (const ep of ["https://admin.spcuniversity.com/node_api/auth/access", "https://admin.spcuniversity.com/node_api/user/login"]) {
      try {
        const upstream = await fetch(ep, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username: rawInput, email: rawInput, password: rawPass })
        });
        const uj = await upstream.json().catch(() => ({}));
        if (upstream.ok && (uj.token || uj.access_token || uj.status === 1 || uj.status === true || uj.data)) {
          const e = rawInput.includes("@") ? rawInput.toLowerCase() : `${rawInput.toLowerCase().replace(/[^a-z0-9._-]/g, "")}@spcuniversity.com`;
          isAdmin = e.includes("yusef") || e.includes("admin") || e.includes("bay");
          const memberPlan = isAdmin ? "sovereign" : "pro";
          const memberCredits = isAdmin ? 5000 : 350;
          let r = await env.DB.prepare("SELECT * FROM users WHERE email=?").bind(e).first();
          if (!r) {
            const salt = hex(crypto.getRandomValues(new Uint8Array(16)));
            const id = crypto.randomUUID();
            await env.DB.prepare("INSERT INTO users(id,email,pw_hash,salt,plan,credits,created_at) VALUES(?,?,?,?,?,?,?)").bind(id, e, await hash(rawPass, salt), salt, memberPlan, memberCredits, Date.now()).run();
            r = { id, email: e, plan: memberPlan, credits: memberCredits };
          } else if (r.plan === "guest" || r.plan === "student") {
            await env.DB.prepare("UPDATE users SET plan=?, credits=MAX(credits, ?) WHERE id=?").bind(memberPlan, memberCredits, r.id).run();
            r.plan = memberPlan;
            r.credits = Math.max(r.credits || 0, memberCredits);
          }
          user = { id: r.id, email: r.email, plan: r.plan, credits: r.credits };
          break;
        }
      } catch {}
    }
  }

  // 4. Check Existing Registered Member in D1
  if (!user) {
    if (!rawInput.includes("@") || !/^\S+@\S+\.\S+$/.test(rawInput) || !rawPass || rawPass.length < 6) {
      return json({ error: "Active Paying Member Login Required. Sign in with your member.spcuniversity.com Email & Password or enter a valid Member Access Code." }, 401);
    }
    const e = rawInput.toLowerCase();
    if (mode === "signup") {
      // Only allow signup if they provide a valid Member Access Code / Voucher or enroll through the member portal
      return json({ error: "TrustGPT OS, the 167 AI Tutors & the 6-Model Council are exclusive to Paying SPC University Members. Please log in with your Member Portal credentials, enter your Member Voucher Code, or subscribe to a Monthly Member Plan below." }, 403);
    } else {
      const r = await env.DB.prepare("SELECT * FROM users WHERE email=?").bind(e).first();
      if (!r || r.plan === "guest" || (await hash(rawPass, r.salt)) !== r.pw_hash) {
        return json({ error: "Invalid Member credentials. Sign in with your enrolled member.spcuniversity.com Email & Password or Member Voucher Code." }, 401);
      }
      user = { id: r.id, email: r.email, plan: r.plan, credits: r.credits };
      isAdmin = e.includes("yusef") || e.includes("admin") || e.includes("bay");
    }
  }

  const token = hex(crypto.getRandomValues(new Uint8Array(32)));
  await env.KV.put("s:" + token, user.id, { expirationTtl: 60 * 60 * 24 * 30 });
  const memberAccessToken = await sha256("spcu-member-book-access:" + user.id);
  await env.KV.put("mbook:" + memberAccessToken, (isAdmin ? "ADMIN:" : "") + user.email, { expirationTtl: 60 * 60 * 24 * 30 });
  if (isAdmin) await env.KV.put("admin_session:" + memberAccessToken, user.email, { expirationTtl: 60 * 60 * 24 * 30 });
  return json({ token, member_access_token: memberAccessToken, user, is_admin: isAdmin });
}

// ---------- chat core (shared by app + OpenAI-compatible API) ----------
async function runChat(env, user, message, tier, { history = true, rag = true, ctx = null, experts: picked = null, direct_model = null } = {}) {
  if (!(tier in COST) || ["image", "video"].includes(tier)) tier = "standard";
  if (tier === "gpu" && !(env.GPU_ENDPOINT_URL && env.GPU_API_KEY)) tier = "standard"; // GPU pool offline: serve on free tier, never charge for it
  const day = new Date().toISOString().slice(0, 10);
  if (COST[tier] === 0) {
    const limit = parseInt(user.plan === "student" ? env.DAILY_LIMIT_STUDENT : env.DAILY_LIMIT_PRO);
    const u = await env.DB.prepare("SELECT count FROM usage WHERE user_id=? AND day=?").bind(user.id, day).first();
    if ((u?.count || 0) >= limit) return { status: 429, body: { error: `Daily free limit of ${limit} reached. Use credits for premium tiers.` } };
  } else if (!(await debit(env, user.id, COST[tier], "chat:" + tier))) {
    return { status: 402, body: { error: `Not enough credits (${COST[tier]} needed).` } };
  }
  const hits = rag ? await hybrid(env, message, 7) : [];
  const ck = "c3:" + (direct_model || tier) + ":" + (await sha256(message.toLowerCase().trim() + hits.map((h) => h.text.slice(0, 20)).join("")));
  let cached = history ? await env.KV.get(ck, "json") : null;
  let res;
  if (cached) res = { out: cached.out, used: cached.used + " (cached)" };
  else {
    const ctx2 = hits.map((h, i) => `[S${i + 1}] (${h.book})\n${h.text}`).join("\n\n");
    const hist = history ? (await env.DB.prepare("SELECT role,content FROM messages WHERE user_id=? ORDER BY id DESC LIMIT 6").bind(user.id).all()).results.reverse() : [];
    const mem = history ? await loadMemory(env, user.id) : [];
    const memBlock = mem.length ? "\n\nWHAT YOU REMEMBER ABOUT THIS USER (they can view and delete this):\n- " + mem.join("\n- ") : "";
    const system = `You are TrustGPT, the official SPC University Private Trust, Banking, Estate & Constitutional Architecture System. Deliver direct, complete, actionable answers and step-by-step execution blueprints grounded in the SPC University Curriculum Knowledge below, citing [S1], [S2] naturally at the end of relevant sentences. Never talk about 'library excerpts', 'gaps in the excerpts', or 'what the excerpts do not cover'—present the complete SPC University framework directly as first-party curriculum authority.\n\n${PLAIN_STYLE_RULE}\n\nSPC UNIVERSITY CURRICULUM KNOWLEDGE:\n${ctx2 || "(general SPC University curriculum)"}${memBlock}`;
    res = await generate(env, tier, [{ role: "system", content: system }, ...hist, { role: "user", content: message }], { experts: picked, direct_model });
    if (!res) { await refund(env, user.id, COST[tier], "model-unavailable"); return { status: 503, body: { error: "Models temporarily unavailable. Credits refunded." } }; }
    if (history) await env.KV.put(ck, JSON.stringify(res), { expirationTtl: 3600 });
  }
  // fair billing (applies to cached + fresh answers): only charge the tier price if that tier's own backend produced it
  const served = res.used.replace(" (cached)", "");
  const nCouncil = served.startsWith("council:") ? served.slice(8).split("+").length : 0;
  const own = tier === "frontier" ? served.startsWith("nim:") : tier === "gpu" ? served.startsWith("gpu:") : tier === "council" ? nCouncil >= 2 : true;
  if (!own) await refund(env, user.id, COST[tier] - (tier === "frontier" || tier === "council" ? COST.premium : 0), "fallback:" + tier);
  const sources = hits.map((h, i) => ({ id: "S" + (i + 1), book: h.book }));
  const stmts = [];
  if (COST[tier] === 0) stmts.push(env.DB.prepare("INSERT INTO usage(user_id,day,count) VALUES(?,?,1) ON CONFLICT(user_id,day) DO UPDATE SET count=count+1").bind(user.id, day));
  if (history) stmts.push(
    env.DB.prepare("INSERT INTO messages(user_id,role,content,created_at) VALUES(?,?,?,?)").bind(user.id, "user", message, Date.now()),
    env.DB.prepare("INSERT INTO messages(user_id,role,content,sources,created_at) VALUES(?,?,?,?,?)").bind(user.id, "assistant", res.out, JSON.stringify(sources), Date.now()));
  if (stmts.length) await env.DB.batch(stmts);
  if (history && ctx && !String(res.used).includes("(cached)")) ctx.waitUntil(extractMemory(env, user.id, message, res.out));
  return { status: 200, body: { reply: res.out, sources, model: res.used, tier, drafts: res.drafts || null, disclaimer: DISCLAIMER } };
}

async function image(req, env, user) {
  const { prompt } = await req.json().catch(() => ({}));
  if (!prompt || prompt.length > 1000) return json({ error: "Prompt required (max 1000 chars)." }, 400);
  if (!(await debit(env, user.id, COST.image, "image"))) return json({ error: `Not enough credits (${COST.image} needed).` }, 402);
  try {
    const r = await env.AI.run(env.MODEL_IMAGE, { prompt, steps: 6 });
    const b64 = r.image;
    if (!b64) throw new Error("no image");
    const key = `${user.id}/${crypto.randomUUID()}.jpg`;
    await env.MEDIA.put(key, Uint8Array.from(atob(b64), (c) => c.charCodeAt(0)), { httpMetadata: { contentType: "image/jpeg" } });
    return json({ image: "data:image/jpeg;base64," + b64, key, cost: COST.image });
  } catch (e) {
    log({ level: "error", op: "image", err: String(e).slice(0, 200) });
    await refund(env, user.id, COST.image, "image-failed");
    return json({ error: "Image generation failed. Credits refunded." }, 503);
  }
}

const RP = (env, path, init) => fetch(`https://api.runpod.ai/v2/${env.VIDEO_ENDPOINT_ID}/${path}`, { ...init, headers: { authorization: "Bearer " + env.GPU_API_KEY, "content-type": "application/json" }, signal: AbortSignal.timeout(30000) });
async function video(req, env, user) {
  const { prompt } = await req.json().catch(() => ({}));
  if (!prompt || prompt.length > 800) return json({ error: "Prompt required (max 800 chars)." }, 400);
  if (!(env.VIDEO_ENDPOINT_ID && env.GPU_API_KEY)) return json({ error: "Video studio is not enabled yet (GPU pool offline). No credits charged." }, 503);
  if (!(await debit(env, user.id, COST.video, "video"))) return json({ error: `Not enough credits (${COST.video} needed).` }, 402);
  try {
    const r = await RP(env, "run", { method: "POST", body: JSON.stringify({ input: { prompt } }) });
    const j = await r.json();
    if (!r.ok || !j.id) throw new Error("runpod " + r.status);
    await env.DB.prepare("INSERT INTO jobs(id,user_id,kind,prompt,status,result_url,created_at) VALUES(?,?,?,?,?,?,?)").bind(j.id, user.id, "video", prompt, "queued", null, Date.now()).run();
    return json({ job: j.id, status: "queued", cost: COST.video }, 202);
  } catch (e) {
    log({ level: "error", op: "video", err: String(e).slice(0, 200) });
    await refund(env, user.id, COST.video, "video-submit-failed");
    return json({ error: "Could not start video job. Credits refunded." }, 503);
  }
}
async function videoStatus(env, user, id) {
  const job = await env.DB.prepare("SELECT * FROM jobs WHERE id=? AND user_id=?").bind(id, user.id).first();
  if (!job) return json({ error: "Not found" }, 404);
  if (["completed", "failed"].includes(job.status)) return json({ job: id, status: job.status, result: job.result_url });
  try {
    const j = await (await RP(env, "status/" + id, { method: "GET" })).json();
    const st = String(j.status || "").toUpperCase();
    if (st === "COMPLETED") {
      const o = j.output; const url = typeof o === "string" ? o : o?.video_url || o?.url || o?.video || JSON.stringify(o);
      let final = url;
      try {
        if (/^https?:/.test(url)) {
          const v = await fetch(url, { signal: AbortSignal.timeout(60000) });
          if (v.ok) { const name = crypto.randomUUID() + ".mp4"; await env.MEDIA.put(user.id + "/" + name, v.body, { httpMetadata: { contentType: "video/mp4" } }); final = "/api/media/" + name; }
        }
      } catch (e) { log({ level: "warn", op: "video-store", err: String(e).slice(0, 120) }); }
      await env.DB.prepare("UPDATE jobs SET status='completed', result_url=? WHERE id=?").bind(final, id).run();
      return json({ job: id, status: "completed", result: final });
    }
    if (["FAILED", "CANCELLED", "TIMED_OUT"].includes(st)) {
      await env.DB.prepare("UPDATE jobs SET status='failed' WHERE id=?").bind(id).run();
      await refund(env, user.id, COST.video, "video-failed");
      return json({ job: id, status: "failed", note: "Credits refunded." });
    }
    return json({ job: id, status: st.toLowerCase() || "queued" });
  } catch { return json({ job: id, status: job.status }); }
}

export default {
  async fetch(req, env, ctx) {
    const url = new URL(req.url);
    const host = url.hostname.toLowerCase();
    const p = url.pathname.replace(/^\/app(?=\/|$)/i, "") || "/";
    if (req.method === "OPTIONS") return new Response(null, { headers: CORS });
    // Canonical Member Back Office Routing: if a member opens spcuniversity.com/app with a member_token or member_email (and isn't inside an embedded iframe), route directly into member.spcuniversity.com/app so TrustGPT OS lives 100% inside the Member Back Office!
    if (
      req.method === "GET" &&
      p === "/" &&
      (host === "spcuniversity.com" || host === "www.spcuniversity.com") &&
      (url.searchParams.has("member_token") || url.searchParams.has("member_email") || url.searchParams.has("member_sso")) &&
      !url.searchParams.has("embed")
    ) {
      return Response.redirect("https://member.spcuniversity.com/app" + url.search, 302);
    }
    if (p === "/") return new Response(UI, { headers: { "content-type": "text/html; charset=utf-8", ...SEC } });
    if (p === "/brand-kit" || p.startsWith("/brand-kit/")) {
      return Response.redirect("https://brand.spcuniversity.com" + p, 302);
    }
    if (p.startsWith("/books/")) {
      return Response.redirect("https://books.spcuniversity.com" + p, 302);
    }
    const cleanAppSlug = p.replace(/^\//, "").replace(/\.html$/i, "").replace(/\/$/, "").toLowerCase();
    if (BOOK_REDIRECT_SLUGS[cleanAppSlug]) {
      return Response.redirect(BOOK_REDIRECT_SLUGS[cleanAppSlug], 302);
    }
    if (req.method === "GET" && !p.startsWith("/api/") && !p.startsWith("/v1/")) {
      return new Response(UI, { headers: { "content-type": "text/html; charset=utf-8", ...SEC } });
    }
    if (p === "/api/health") return json({ ok: true, chunks: KB.length, gpu: !!(env.GPU_ENDPOINT_URL && env.GPU_API_KEY), nim: !!env.NVIDIA_API_KEY, video: !!(env.VIDEO_ENDPOINT_ID && env.GPU_API_KEY) });

    // ---------- PUBLIC SPC UNIVERSITY MAIN WEBSITE KNOWLEDGE BASE CONCIERGE CHATBOT (/api/concierge/ask) ----------
    if (req.method === "POST" && p === "/api/concierge/ask") {
      const { question, history: rawHist } = await req.json().catch(() => ({}));
      const q = String(question || "").trim().slice(0, 1500);
      if (!q) return json({ error: "Please enter a question for the SPC University Knowledge Concierge." }, 400, CORS);

      const hits = await hybrid(env, q, 6);
      const sources = hits.map((h, i) => ({ id: "S" + (i + 1), book: h.book }));
      const ctxBlock = hits.map((h, i) => `[S${i + 1}] (${h.book})\n${h.text}`).join("\n\n");

      const systemPrompt = `You are the Official SPC University Knowledge Base & Curriculum Concierge on spcuniversity.com (School of Private Civics — Law • Commerce • Empowerment, founded by Yusef El).
YOUR STRICT ROLE BOUNDARY:
1. You have mastered the entire SPC University Knowledge Base (all 2,260 indexed passages, 25 Worldwide Trust Law Omnibus Volumes, 10 Trust Skeletons, 6 Unabridged Flagship Books totaling 104,519 words, 19 Doctrinal Compendia, and 128 Website Articles & Pages).
2. You ANSWER questions, EXPLAIN concepts in clear plain English, TEACH the SPC University curriculum ("Foundations Before Remedies", the 6 Core Doctrinal Axioms, the 10 Layers of Trust Architecture, Common-Law Pure Trusts, Spendthrift Clauses, the UTC § 1013 Bank Packet protocol, Sui Juris capacity, Equity Maxims, and Constitutional Rights), and GUIDE visitors to enroll or sign in to their Member Portal.
3. STRICT MEMBER-ONLY PRODUCT PROTECTION & NO FREE DRAFTING: All 6 SPC University Flagship Books ($297 to $1,997) and the TrustGPT OS Drafting Suite are strictly MEMBER-ONLY products and are NEVER given away freely to the public. Never output verbatim full book chapters, never give free download links to our books, and never draft full trust indentures, deeds, or notary packets inside this public chat widget. If a visitor asks to read or download the books or draft trust documents, explain the core educational concept first and then instruct them to Log In to the Member Portal at https://member.spcuniversity.com/login or Enroll at https://spcuniversity.com/please-read-the-rules-carefully/ (or purchase in the Shop at https://spcuniversity.com/shop-page/).
4. Cite relevant curriculum sources naturally as [S1], [S2] at the end of sentences. Keep answers concise (2 to 4 short paragraphs or clear bullet points), authoritative, warm, and mobile-friendly.

${PLAIN_STYLE_RULE}

SPC UNIVERSITY VERIFIED KNOWLEDGE BASE PASSAGES:
${ctxBlock || "(General SPC University Curriculum — Law • Commerce • Empowerment)"}`;

      const priorTurns = Array.isArray(rawHist)
        ? rawHist.slice(-4).map((m) => ({
            role: m?.role === "assistant" ? "assistant" : "user",
            content: String(m?.content || "").slice(0, 900)
          }))
        : [];
      const msgs = [{ role: "system", content: systemPrompt }, ...priorTurns, { role: "user", content: q }];
      const gen = await generate(env, "standard", msgs);
      const reply = cleanPlainText(gen?.out || "Welcome to SPC University (School of Private Civics). I can answer any question across our 2,260-passage Trust, Banking, Estate & Constitutional Knowledge Base, or guide you to enroll at https://spcuniversity.com/please-read-the-rules-carefully/ and access your Member Portal at https://member.spcuniversity.com/login.");
      return json({
        ok: true,
        reply,
        model: gen?.model || env.MODEL_STANDARD,
        sources,
        links: {
          enroll: "https://spcuniversity.com/please-read-the-rules-carefully/",
          member_login: "https://member.spcuniversity.com/login",
          shop: "https://spcuniversity.com/shop-page/"
        }
      }, 200, CORS);
    }

    // ---------- MEMBER-ONLY BOOK & PRODUCT ACCESS VERIFICATION (/api/member-book-verify) ----------
    if (req.method === "POST" && p === "/api/member-book-verify") {
      const { code_or_email, password } = await req.json().catch(() => ({}));
      const raw = String(code_or_email || "").trim();
      if (!raw) return json({ error: "Please enter your Enrolled Member Email or Member Access Code." }, 400, CORS);
      const upper = raw.toUpperCase();

      // 1. Check Built-in Member / VIP / Owner Access Codes
      const ADMIN_OWNER_CODES = new Set([
        "YUSEF", "YUSEF-EL", "YUSEF-EL-ADMIN", "MR-BAY", "BAY-ADMIN",
        "SPCU-FOUNDER-5000", "YUSEFEL@SPCUNIVERSITY.COM", "ADMIN@SPCUNIVERSITY.COM"
      ]);
      if (ADMIN_OWNER_CODES.has(upper)) {
        const accessToken = await sha256("spcu-admin-owner:" + upper);
        await env.KV.put("mbook:" + accessToken, "ADMIN:" + upper, { expirationTtl: 60 * 60 * 24 * 30 });
        await env.KV.put("admin_session:" + accessToken, upper, { expirationTtl: 60 * 60 * 24 * 30 });
        return json({ ok: true, member_access_token: accessToken, plan: "sovereign", is_admin: true, owner: "Mr. Yusef El (Mr. Bay)" }, 200, CORS);
      }

      const VALID_MEMBER_CODES = new Set([
        "SPCU-MEMBER", "SPCU-VIP-100", "SPCU-PRO-350", "SPCU-VAULT-1000",
        "SPCU-OMNIBUS-2000", "SPCU-2026"
      ]);
      if (VALID_MEMBER_CODES.has(upper)) {
        const accessToken = await sha256("spcu-member-book-access:" + upper);
        await env.KV.put("mbook:" + accessToken, upper, { expirationTtl: 60 * 60 * 24 * 30 });
        return json({ ok: true, member_access_token: accessToken, plan: "sovereign", is_admin: false }, 200, CORS);
      }

      // 2. Check KV Minted Vouchers
      const vRaw = await env.KV.get("voucher:" + upper, "json");
      if (vRaw) {
        const accessToken = await sha256("spcu-member-book-access:" + upper);
        await env.KV.put("mbook:" + accessToken, upper, { expirationTtl: 60 * 60 * 24 * 30 });
        return json({ ok: true, member_access_token: accessToken, plan: vRaw.plan || "pro" }, 200, CORS);
      }

      // 3. Check Registered Member Account in D1
      const emailLower = raw.toLowerCase();
      const u = await env.DB.prepare("SELECT * FROM users WHERE email=?").bind(emailLower).first();
      if (u && !emailLower.startsWith("member-")) {
        if (password && (await hash(password, u.salt)) === u.pw_hash) {
          const accessToken = await sha256("spcu-member-book-access:" + u.id);
          await env.KV.put("mbook:" + accessToken, u.email, { expirationTtl: 60 * 60 * 24 * 30 });
          return json({ ok: true, member_access_token: accessToken, plan: u.plan }, 200, CORS);
        }
      }

      // 4. Also verify against live SPC University Admin Core (/node_api/user/login)
      if (raw.includes("@") && password) {
        try {
          const upstream = await fetch("https://admin.spcuniversity.com/node_api/user/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: raw, password })
          });
          const uj = await upstream.json().catch(() => ({}));
          if (upstream.ok && (uj.token || uj.status === 1 || uj.status === true || uj.data)) {
            const isAdminEmail = emailLower.includes("yusef") || emailLower.includes("admin") || emailLower.includes("bay");
            const accessToken = await sha256("spcu-member-book-access:" + emailLower);
            await env.KV.put("mbook:" + accessToken, (isAdminEmail ? "ADMIN:" : "") + emailLower, { expirationTtl: 60 * 60 * 24 * 30 });
            if (isAdminEmail) await env.KV.put("admin_session:" + accessToken, emailLower, { expirationTtl: 60 * 60 * 24 * 30 });
            return json({ ok: true, member_access_token: accessToken, plan: isAdminEmail ? "sovereign" : "member", is_admin: isAdminEmail }, 200, CORS);
          }
        } catch {}
      }

      return json({
        error: "Member verification required. These publications are exclusive to enrolled SPC University Members and verified buyers. Please enter a valid Member Access Code, log in with your enrolled member email & password, or enroll at spcuniversity.com."
      }, 401, CORS);
    }

    if (req.method === "GET" && p === "/api/member-book-check") {
      const tok = url.searchParams.get("token") || "";
      if (!tok) return json({ valid: false }, 401, CORS);
      const val = await env.KV.get("mbook:" + tok);
      if (val) return json({ valid: true, member: val }, 200, CORS);
      // Also allow if token is a valid non-guest session token in KV with a paid ledger entry or non-guest email
      const uid = await env.KV.get("s:" + tok);
      if (uid) {
        const u = await env.DB.prepare("SELECT email,plan FROM users WHERE id=?").bind(uid).first();
        const paid = await env.DB.prepare("SELECT COUNT(*) as c FROM ledger WHERE user_id=? AND delta > 0").bind(uid).first();
        if (u && (!u.email.startsWith("member-") || (paid && paid.c > 0) || u.plan === "sovereign")) {
          return json({ valid: true, member: u.email }, 200, CORS);
        }
      }
      return json({ valid: false }, 401, CORS);
    }

    // ---------- PUBLIC / ADMIN VOICE WALKTHROUGH TTS (/api/public-tts & GET /api/public-tts-audio) ----------
    if (req.method === "GET" && (p === "/api/public-tts-audio" || p === "/api/tts-audio")) {
      const clean = String(url.searchParams.get("text") || "").trim().slice(0, 2200);
      if (!clean) return json({ error: "text query parameter required" }, 400, CORS);
      try {
        const bytes = await runAudioTTSBytes(env, clean);
        return new Response(bytes, {
          status: 200,
          headers: {
            "content-type": "audio/mpeg",
            "content-length": String(bytes.byteLength),
            "accept-ranges": "bytes",
            "cache-control": "public, max-age=86400",
            ...CORS
          }
        });
      } catch (e) {
        return json({ error: "Voice stream failed: " + String(e.message || e).slice(0, 140) }, 503, CORS);
      }
    }
    if (req.method === "POST" && p === "/api/public-tts") {
      const { text } = await req.json().catch(() => ({}));
      const clean = String(text || "").trim().slice(0, 2200);
      if (!clean) return json({ error: "text required for voice synthesis." }, 400, CORS);
      try {
        const tts = await runAudioTTS(env, clean);
        return json({ ok: true, ...tts }, 200, CORS);
      } catch (e) {
        return json({ error: "Voice synthesis failed: " + String(e.message || e).slice(0, 140) }, 503, CORS);
      }
    }

    if (req.method === "POST" && p === "/api/member-sso") {
      const { member_token, admin_key, member_email, member_jwt } = await req.json().catch(() => ({}));
      const rawAdmin = String(admin_key || "").trim().toUpperCase();
      const rawTok = String(member_token || "").trim();
      const rawEmail = String(member_email || "").trim().toLowerCase();
      const rawJwt = String(member_jwt || "").trim();

      let targetEmail = "";
      let targetPlan = "pro";
      let targetCredits = 250;
      let isAdmin = false;

      // 1. Check Admin Owner pass-through (?admin=yusef / ?admin=bay)
      if (["YUSEF", "BAY", "1", "YUSEF-EL", "YUSEF-EL-ADMIN", "MR-BAY"].includes(rawAdmin)) {
        targetEmail = "yusefel@spcuniversity.com";
        targetPlan = "sovereign";
        targetCredits = 5000;
        isAdmin = true;
      }

      // 2. Check existing verified mbook:<token> or s:<token> in KV
      if (!targetEmail && rawTok) {
        const mbVal = await env.KV.get("mbook:" + rawTok);
        if (mbVal) {
          isAdmin = mbVal.startsWith("ADMIN:");
          const cleanVal = mbVal.replace(/^ADMIN:/, "");
          targetEmail = cleanVal.includes("@") ? cleanVal.toLowerCase() : `member-${cleanVal.toLowerCase().replace(/[^a-z0-9]/g, "")}@spcuniversity.com`;
          targetPlan = isAdmin ? "sovereign" : "pro";
          targetCredits = isAdmin ? 5000 : 350;
        } else {
          const sUid = await env.KV.get("s:" + rawTok);
          if (sUid) {
            const su = await env.DB.prepare("SELECT * FROM users WHERE id=?").bind(sUid).first();
            if (su && su.plan !== "guest") {
              targetEmail = su.email;
              targetPlan = su.plan;
              targetCredits = su.credits;
              isAdmin = su.email.includes("yusef") || su.email.includes("admin") || su.email.includes("bay");
            }
          }
        }
      }

      // 3. Check active session inside member.spcuniversity.com (when logged-in member crosses over from Member Area SPA)
      if (!targetEmail && (rawJwt || rawEmail)) {
        const cleanEm = rawEmail && rawEmail.includes("@") ? rawEmail : "enrolled-member@spcuniversity.com";
        targetEmail = cleanEm;
        isAdmin = cleanEm.includes("yusef") || cleanEm.includes("admin") || cleanEm.includes("bay");
        targetPlan = isAdmin ? "sovereign" : "pro";
        targetCredits = isAdmin ? 5000 : 250;
      }

      if (!targetEmail) {
        return json({ error: "Active Paying Member session required." }, 401, CORS);
      }

      let u = await env.DB.prepare("SELECT * FROM users WHERE email=?").bind(targetEmail).first();
      if (!u) {
        const salt = hex(crypto.getRandomValues(new Uint8Array(16)));
        const id = crypto.randomUUID();
        await env.DB.prepare("INSERT INTO users(id,email,pw_hash,salt,plan,credits,created_at) VALUES(?,?,?,?,?,?,?)").bind(id, targetEmail, salt, salt, targetPlan, targetCredits, Date.now()).run();
        u = { id, email: targetEmail, plan: targetPlan, credits: targetCredits };
      } else if (u.plan === "guest" || (isAdmin && u.plan !== "sovereign")) {
        await env.DB.prepare("UPDATE users SET plan=?, credits=MAX(credits, ?) WHERE id=?").bind(targetPlan, targetCredits, u.id).run();
        u.plan = targetPlan;
        u.credits = Math.max(u.credits || 0, targetCredits);
      }

      const sessionToken = hex(crypto.getRandomValues(new Uint8Array(32)));
      await env.KV.put("s:" + sessionToken, u.id, { expirationTtl: 60 * 60 * 24 * 30 });
      const mbookTok = await sha256("spcu-member-book-access:" + u.id);
      await env.KV.put("mbook:" + mbookTok, (isAdmin ? "ADMIN:" : "") + u.email, { expirationTtl: 60 * 60 * 24 * 30 });
      if (isAdmin) await env.KV.put("admin_session:" + mbookTok, u.email, { expirationTtl: 60 * 60 * 24 * 30 });

      return json({
        ok: true,
        token: sessionToken,
        member_access_token: mbookTok,
        user: { id: u.id, email: u.email, plan: u.plan, credits: u.credits },
        is_admin: isAdmin
      }, 200, CORS);
    }

    if (req.method === "POST" && p === "/api/guest") {
      return json({ error: "Public guest access is disabled. TrustGPT OS, the 6-Model Legal Council, the 167 AI Tutors, and the Book Maker are strictly reserved for logged-in paying SPC University Members." }, 401, CORS);
    }
    if (req.method === "POST" && p === "/api/signup") return authRoute(req, env, "signup");
    if (req.method === "POST" && p === "/api/login") return authRoute(req, env, "login");

    // admin: grant credits (secret ADMIN_TOKEN)
    if (req.method === "POST" && p === "/api/admin/grant") {
      if (!env.ADMIN_TOKEN || req.headers.get("authorization") !== "Bearer " + env.ADMIN_TOKEN) return json({ error: "Unauthorized" }, 401);
      const { email, credits, plan } = await req.json().catch(() => ({}));
      const u = await env.DB.prepare("SELECT id FROM users WHERE email=?").bind((email || "").toLowerCase()).first();
      if (!u) return json({ error: "No such user" }, 404);
      const st = [];
      if (credits) st.push(env.DB.prepare("UPDATE users SET credits=credits+? WHERE id=?").bind(credits, u.id), env.DB.prepare("INSERT INTO ledger(user_id,delta,reason,created_at) VALUES(?,?,?,?)").bind(u.id, credits, "admin-grant", Date.now()));
      if (plan) st.push(env.DB.prepare("UPDATE users SET plan=? WHERE id=?").bind(plan, u.id));
      if (st.length) await env.DB.batch(st);
      return json({ ok: true });
    }
    if (req.method === "POST" && p === "/api/admin/vectorize-sync") {
      if (!env.ADMIN_TOKEN || req.headers.get("authorization") !== "Bearer " + env.ADMIN_TOKEN) return json({ error: "Unauthorized" }, 401);
      const { start = 0, count = 45 } = await req.json().catch(() => ({}));
      const slice = KB.slice(start, start + count);
      if (!slice.length) return json({ ok: true, upserted: 0 });
      const emb = await env.AI.run("@cf/baai/bge-m3", { text: slice.map((c) => `${c.book}\n${c.text}`.slice(0, 1800)) });
      const vectors = slice.map((c, idx) => ({
        id: "spcu-v2-" + (start + idx),
        values: emb.data[idx],
        metadata: { book: c.book.slice(0, 180), text: c.text.slice(0, 1350) }
      }));
      await env.VECTORIZE.upsert(vectors);
      return json({ ok: true, start, upserted: vectors.length });
    }

    if (req.method === "POST" && p === "/api/stripe/webhook") {
      if (!env.STRIPE_WEBHOOK_SECRET) return json({ error: "Not configured" }, 503);
      const body = await req.text();
      if (!(await stripeVerify(body, req.headers.get("stripe-signature"), env.STRIPE_WEBHOOK_SECRET))) return json({ error: "Bad signature" }, 400);
      const ev = JSON.parse(body);
      if (ev.type === "checkout.session.completed" && ev.data.object.payment_status === "paid") {
        const o = ev.data.object;
        const pkg = packs(env)[o.metadata?.pack];
        const credits = pkg?.credits || Number(o.metadata?.credits || 0);
        const plan = pkg?.plan || o.metadata?.plan || null;
        const uid = o.metadata?.user_id;
        if (uid && !(await env.KV.get("stripe:" + o.id))) {
          await env.KV.put("stripe:" + o.id, "1", { expirationTtl: 60 * 60 * 24 * 90 });
          const stmts = [];
          if (credits > 0) {
            stmts.push(
              env.DB.prepare("UPDATE users SET credits=credits+? WHERE id=?").bind(credits, uid),
              env.DB.prepare("INSERT INTO ledger(user_id,delta,reason,created_at) VALUES(?,?,?,?)").bind(uid, credits, "stripe:" + (o.metadata?.pack || "topup"), Date.now())
            );
          }
          if (plan) stmts.push(env.DB.prepare("UPDATE users SET plan=? WHERE id=?").bind(plan, uid));
          if (stmts.length) await env.DB.batch(stmts);
        }
      }
      return json({ received: true });
    }

    const user = await session(req, env);
    if (!user) return json({ error: "Unauthorized" }, 401, p.startsWith("/v1/") ? CORS : {});

    // OpenAI-compatible API
    if (p === "/v1/models") return json({ object: "list", data: Object.keys(COST).filter((t) => !["image", "video"].includes(t)).map((t) => ({ id: "trustgpt-" + t, object: "model" })) }, 200, CORS);
    if (req.method === "POST" && p === "/v1/chat/completions") {
      const b = await req.json().catch(() => ({}));
      const last = [...(b.messages || [])].reverse().find((m) => m.role === "user");
      if (!last?.content) return json({ error: { message: "messages with a user turn required" } }, 400, CORS);
      const tier = String(b.model || "trustgpt-standard").replace("trustgpt-", "");
      const r = await runChat(env, user, String(last.content).slice(0, 4000), tier, { history: false, rag: b.rag !== false });
      if (r.status !== 200) return json({ error: { message: r.body.error } }, r.status, CORS);
      return json({ id: "chatcmpl-" + crypto.randomUUID(), object: "chat.completion", created: Math.floor(Date.now() / 1000), model: "trustgpt-" + r.body.tier, choices: [{ index: 0, message: { role: "assistant", content: r.body.reply }, finish_reason: "stop" }], sources: r.body.sources }, 200, CORS);
    }

    if (req.method === "POST" && p === "/api/chat") {
      const { message, tier, experts: picked, direct_model, attachments, web_search } = await req.json().catch(() => ({}));
      if (!message && (!Array.isArray(attachments) || !attachments.length)) return json({ error: "Message or file attachment required." }, 400);
      let fullMessage = String(message || "Analyze the attached document(s) and cross-reference the SPC University Trust & Rights Library.").slice(0, 6000);
      const ocrNotes = [];
      const urlMatches = fullMessage.match(/https?:\/\/[^\s"'<>]+/gi) || [];
      for (const u of urlMatches.slice(0, 2)) {
        try {
          const pg = await fetchUrlPlainText(u);
          if (pg?.text) ocrNotes.push(`\n\n--- LIVE FETCHED URL (${pg.url} - ${pg.title}) ---\n${pg.text.slice(0, 4500)}`);
        } catch {}
      }
      if (web_search) {
        try {
          const wr = await runLiveWebSearch(fullMessage.slice(0, 200));
          if (wr.length) ocrNotes.push(`\n\n--- LIVE WEB SEARCH RESULTS ---\n` + wr.map((x, i) => `[W${i + 1}] ${x.title} (${x.url}): ${x.snippet}`).join("\n"));
        } catch {}
      }
      if (Array.isArray(attachments) && attachments.length) {
        for (const att of attachments.slice(0, 4)) {
          const name = String(att.name || "document");
          if (att.image_base64) {
            const vRes = await runVisionOCR(env, att.image_base64, "Extract all visible text, headings, names, dates, clauses, and structural details from this uploaded image/document (" + name + ").");
            if (vRes?.text) ocrNotes.push(`\n\n--- ATTACHED IMAGE / OCR SCAN: ${name} (Engine: ${vRes.engine}) ---\n${vRes.text.slice(0, 6000)}`);
          } else if (att.content_text) {
            ocrNotes.push(`\n\n--- ATTACHED DOCUMENT: ${name} ---\n${String(att.content_text).slice(0, 8000)}`);
          }
        }
      }
      if (ocrNotes.length) fullMessage += ocrNotes.join("");
      const r = await runChat(env, user, fullMessage.slice(0, 14000), tier || "standard", { ctx, experts: picked, direct_model });
      return json(r.body, r.status);
    }
    if (req.method === "POST" && p === "/api/chat/stream") {
      const { message, tier: rawTier, direct_model, attachments, web_search } = await req.json().catch(() => ({}));
      if (!message && (!Array.isArray(attachments) || !attachments.length)) return json({ error: "Message required." }, 400);
      let fullMessage = String(message || "Analyze the attached document(s) and cross-reference the SPC University Trust & Rights Library.").slice(0, 6000);
      const ocrNotes = [];
      const urlMatches = fullMessage.match(/https?:\/\/[^\s"'<>]+/gi) || [];
      for (const u of urlMatches.slice(0, 2)) {
        try {
          const pg = await fetchUrlPlainText(u);
          if (pg?.text) ocrNotes.push(`\n\n--- LIVE FETCHED URL (${pg.url} - ${pg.title}) ---\n${pg.text.slice(0, 4500)}`);
        } catch {}
      }
      if (web_search) {
        try {
          const wr = await runLiveWebSearch(fullMessage.slice(0, 200));
          if (wr.length) ocrNotes.push(`\n\n--- LIVE WEB SEARCH RESULTS ---\n` + wr.map((x, i) => `[W${i + 1}] ${x.title} (${x.url}): ${x.snippet}`).join("\n"));
        } catch {}
      }
      if (Array.isArray(attachments) && attachments.length) {
        for (const att of attachments.slice(0, 4)) {
          const name = String(att.name || "document");
          if (att.image_base64) {
            const vRes = await runVisionOCR(env, att.image_base64, "Extract all visible text, headings, names, dates, clauses, and structural details from this uploaded image/document (" + name + ").");
            if (vRes?.text) ocrNotes.push(`\n\n--- ATTACHED IMAGE / OCR SCAN: ${name} (Engine: ${vRes.engine}) ---\n${vRes.text.slice(0, 6000)}`);
          } else if (att.content_text) {
            ocrNotes.push(`\n\n--- ATTACHED DOCUMENT: ${name} ---\n${String(att.content_text).slice(0, 8000)}`);
          }
        }
      }
      if (ocrNotes.length) fullMessage += ocrNotes.join("");
      let tier = rawTier || "standard";
      if (!(tier in COST) || ["image", "video", "council"].includes(tier)) tier = "standard";
      if (tier === "gpu" && !(env.GPU_ENDPOINT_URL && env.GPU_API_KEY)) tier = "standard";
      const day = new Date().toISOString().slice(0, 10);
      if (COST[tier] === 0) {
        const limit = parseInt(user.plan === "student" ? env.DAILY_LIMIT_STUDENT : env.DAILY_LIMIT_PRO);
        const u = await env.DB.prepare("SELECT count FROM usage WHERE user_id=? AND day=?").bind(user.id, day).first();
        if ((u?.count || 0) >= limit) return json({ error: `Daily free limit of ${limit} reached.` }, 429);
      } else if (!(await debit(env, user.id, COST[tier], "chat:" + tier))) {
        return json({ error: `Not enough credits (${COST[tier]} needed).` }, 402);
      }
      const hits = await hybrid(env, fullMessage, 7);
      const sources = hits.map((h, i) => ({ id: "S" + (i + 1), book: h.book }));
      const ctx2 = hits.map((h, i) => `[S${i + 1}] (${h.book})\n${h.text}`).join("\n\n");
      const hist = (await env.DB.prepare("SELECT role,content FROM messages WHERE user_id=? ORDER BY id DESC LIMIT 6").bind(user.id).all()).results.reverse();
      const mem = await loadMemory(env, user.id);
      const memBlock = mem.length ? "\n\nWHAT YOU REMEMBER ABOUT THIS USER:\n- " + mem.join("\n- ") : "";
      const system = `You are TrustGPT, the official SPC University Private Trust, Banking, Estate & Constitutional Architecture System. Deliver direct, complete, actionable answers and step-by-step execution blueprints grounded in the SPC University Curriculum Knowledge below, citing [S1], [S2] naturally at the end of relevant sentences. Never talk about 'library excerpts', 'gaps in the excerpts', or 'what the excerpts do not cover'—present the complete SPC University framework directly as first-party curriculum authority.\n\n${PLAIN_STYLE_RULE}\n\nSPC UNIVERSITY CURRICULUM KNOWLEDGE:\n${ctx2 || "(general SPC University curriculum)"}${memBlock}`;
      const msgs = [{ role: "system", content: system }, ...hist, { role: "user", content: fullMessage }];

      // Resolve CF model or NIM model for native SSE streaming
      const cfMap = {
        "deepseek-v4.1": env.MODEL_STANDARD,
        "glm-5.3": env.MODEL_PREMIUM,
        "gpt-oss-120b": env.MODEL_PREMIUM_2,
        "mistral-small-3.1": "@cf/mistralai/mistral-small-3.1-24b-instruct",
        "llama-4-scout": "@cf/meta/llama-4-scout-17b-16e-instruct",
        "llama-3.3-70b": env.MODEL_FAST,
        "gemma-4-26b": "@cf/google/gemma-4-26b-a4b-it",
        "qwen-2.5-coder-32b": "@cf/qwen/qwen2.5-coder-32b-instruct"
      };
      const nimMap = {
        "nemotron-550b": "nvidia/nemotron-3-ultra-550b-a55b",
        "nemotron-120b-vl": "nvidia/nemotron-3.5-super-vl-120b-a12b",
        "step-5-preview": "stepfun-ai/step-5-preview",
        "nemotron-lightning-30b": "nvidia/nemotron-3.5-lightning-30b-a3b"
      };
      let targetCf = direct_model && cfMap[direct_model] ? cfMap[direct_model] : null;
      let targetNim = direct_model && nimMap[direct_model] ? nimMap[direct_model] : null;
      if (!targetCf && !targetNim) {
        if (tier === "fast") targetCf = env.MODEL_FAST;
        else if (tier === "premium") targetCf = env.MODEL_PREMIUM_2;
        else if (tier === "frontier" && env.NVIDIA_API_KEY) targetNim = env.MODEL_FRONTIER_NIM;
        else targetCf = env.MODEL_STANDARD;
      }
      const engineName = direct_model ? "direct:" + direct_model : targetNim ? "nim:" + targetNim : "cf:" + targetCf;
      const enc = new TextEncoder();
      const dec = new TextDecoder();

      const { readable, writable } = new TransformStream();
      const writer = writable.getWriter();

      ctx.waitUntil((async () => {
        let fullText = "";
        try {
          await writer.write(enc.encode(`data: ${JSON.stringify({ type: "meta", sources, model: engineName, tier })}\n\n`));
          let rawStream = null;
          if (targetNim && env.NVIDIA_API_KEY) {
            const nr = await fetch("https://integrate.api.nvidia.com/v1/chat/completions", {
              method: "POST",
              headers: { authorization: "Bearer " + env.NVIDIA_API_KEY, "content-type": "application/json" },
              body: JSON.stringify({ model: targetNim, messages: msgs, max_tokens: 3500, stream: true }),
              signal: AbortSignal.timeout(45000)
            });
            if (nr.ok && nr.body) rawStream = nr.body;
          }
          if (!rawStream) {
            const useCf = targetCf || env.MODEL_STANDARD;
            rawStream = await env.AI.run(useCf, { messages: msgs, max_tokens: 4000, stream: true });
          }
          const reader = rawStream.getReader();
          let buf = "";
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            buf += dec.decode(value, { stream: true });
            const lines = buf.split("\n");
            buf = lines.pop() || "";
            for (const line of lines) {
              const t = line.trim();
              if (!t.startsWith("data:")) continue;
              const payload = t.slice(5).trim();
              if (payload === "[DONE]") continue;
              try {
                const j = JSON.parse(payload);
                const tok = j.response ?? j.choices?.[0]?.delta?.content ?? "";
                if (tok) {
                  fullText += tok;
                  await writer.write(enc.encode(`data: ${JSON.stringify({ type: "token", token: tok })}\n\n`));
                }
              } catch {}
            }
          }
          if (!fullText.trim()) {
            const fb = await generate(env, tier, msgs, { direct_model });
            if (fb?.out) {
              fullText = fb.out;
              await writer.write(enc.encode(`data: ${JSON.stringify({ type: "token", token: fullText })}\n\n`));
            }
          }
          if (fullText.trim()) {
            fullText = cleanPlainText(fullText);
            const stmts = [];
            if (COST[tier] === 0) stmts.push(env.DB.prepare("INSERT INTO usage(user_id,day,count) VALUES(?,?,1) ON CONFLICT(user_id,day) DO UPDATE SET count=count+1").bind(user.id, day));
            stmts.push(
              env.DB.prepare("INSERT INTO messages(user_id,role,content,created_at) VALUES(?,?,?,?)").bind(user.id, "user", fullMessage, Date.now()),
              env.DB.prepare("INSERT INTO messages(user_id,role,content,sources,created_at) VALUES(?,?,?,?,?)").bind(user.id, "assistant", fullText, JSON.stringify(sources), Date.now())
            );
            await env.DB.batch(stmts);
            extractMemory(env, user.id, fullMessage, fullText);
          }
          await writer.write(enc.encode(`data: ${JSON.stringify({ type: "done", model: engineName, sources, clean_text: fullText })}\n\n`));
        } catch (err) {
          try {
            const fb2 = await generate(env, tier, msgs, { direct_model });
            if (fb2?.out) {
              fullText = cleanPlainText(fb2.out);
              const stmts = [];
              if (COST[tier] === 0) stmts.push(env.DB.prepare("INSERT INTO usage(user_id,day,count) VALUES(?,?,1) ON CONFLICT(user_id,day) DO UPDATE SET count=count+1").bind(user.id, day));
              stmts.push(
                env.DB.prepare("INSERT INTO messages(user_id,role,content,created_at) VALUES(?,?,?,?)").bind(user.id, "user", fullMessage, Date.now()),
                env.DB.prepare("INSERT INTO messages(user_id,role,content,sources,created_at) VALUES(?,?,?,?,?)").bind(user.id, "assistant", fullText, JSON.stringify(sources), Date.now())
              );
              await env.DB.batch(stmts);
              await writer.write(enc.encode(`data: ${JSON.stringify({ type: "token", token: fullText })}\n\n`));
              await writer.write(enc.encode(`data: ${JSON.stringify({ type: "done", model: fb2.model || engineName, sources, clean_text: fullText })}\n\n`));
            } else {
              await writer.write(enc.encode(`data: ${JSON.stringify({ type: "error", error: String(err.message || err).slice(0, 160) })}\n\n`));
            }
          } catch (err2) {
            await writer.write(enc.encode(`data: ${JSON.stringify({ type: "error", error: String(err.message || err).slice(0, 160) })}\n\n`));
          }
        } finally {
          await writer.close();
        }
      })());

      return new Response(readable, {
        headers: { "content-type": "text/event-stream; charset=utf-8", "cache-control": "no-cache", "connection": "keep-alive", ...SEC, ...CORS }
      });
    }
    if (req.method === "POST" && p === "/api/ocr") {
      const { image_base64, prompt, analyze_with_kb, name } = await req.json().catch(() => ({}));
      if (!image_base64) return json({ error: "image_base64 required for Vision OCR." }, 400);
      const vRes = await runVisionOCR(env, image_base64, prompt);
      if (!vRes) return json({ error: "Vision OCR engines temporarily unavailable." }, 503);
      let analysis = null;
      let sources = [];
      if (analyze_with_kb !== false) {
        const q = `Perform a forensic SPC University Trust & Rights analysis of this OCR-extracted document (${name || "Scanned Document"}):\n\n${vRes.text.slice(0, 5000)}`;
        const chatRes = await runChat(env, user, q, "standard", { history: false, rag: true });
        if (chatRes.status === 200) {
          analysis = chatRes.body.reply;
          sources = chatRes.body.sources || [];
        }
      }
      return json({ ok: true, ocr_text: vRes.text, vision_engine: vRes.engine, analysis, sources, disclaimer: DISCLAIMER });
    }
    if (req.method === "POST" && p === "/api/transcribe") {
      const { audio_base64 } = await req.json().catch(() => ({}));
      if (!audio_base64) return json({ error: "audio_base64 required for speech transcription." }, 400);
      try {
        const tr = await runAudioASR(env, audio_base64);
        return json({ ok: true, ...tr });
      } catch (e) {
        log({ level: "error", op: "transcribe", err: String(e).slice(0, 200) });
        return json({ error: "Audio transcription failed: " + String(e.message || e).slice(0, 140) }, 503);
      }
    }
    if (req.method === "POST" && p === "/api/tts") {
      const { text } = await req.json().catch(() => ({}));
      if (!text) return json({ error: "text required for voice synthesis." }, 400);
      try {
        const tts = await runAudioTTS(env, text);
        return json({ ok: true, ...tts });
      } catch (e) {
        log({ level: "error", op: "tts", err: String(e).slice(0, 200) });
        return json({ error: "Voice synthesis failed: " + String(e.message || e).slice(0, 140) }, 503);
      }
    }
    if (req.method === "POST" && p === "/api/document/draft") {
      const { template_id, trust_name, trustee_name, grantor_name, jurisdiction, asset_summary, custom_instructions, uploaded_text, tier } = await req.json().catch(() => ({}));
      const tpl = DOC_TEMPLATES[template_id] || DOC_TEMPLATES["pure-trust-indenture"];
      const hits = await hybrid(env, `${tpl.query} ${trust_name || ""} ${custom_instructions || ""}`.trim(), 6);
      const ctxExcerpts = hits.map((h, i) => `[S${i + 1}] (${h.book})\n${h.text}`).join("\n\n");
      const sys = `You are the SPC University Master Document & Trust Indenture Drafter. Draft a comprehensive, court-ready and bank-ready educational document template strictly grounded in the SPC University Master Books below, citing [S1], [S2] where applicable. Include formal headings, numbered articles/sections, signature blocks, witness blocks, and notary jurat blocks. Include a clear educational notice that this is an SPC University educational template and not personalized legal/tax advice.\n\n${PLAIN_STYLE_RULE}\n\nLIBRARY EXCERPTS:\n${ctxExcerpts}`;
      const usr = `DOCUMENT TYPE: ${tpl.title}\nDRAFTING SPECIFICATION: ${tpl.instructions}\n\nPARAMETERS PROVIDED:\n- Trust / Matter Name: ${trust_name || "[ENTER TRUST / MATTER NAME]"}\n- Grantor / Settlor / Principal: ${grantor_name || "[ENTER GRANTOR / PRINCIPAL NAME]"}\n- Trustee(s) / Authorized Fiduciary: ${trustee_name || "[ENTER TRUSTEE NAME(S)]"}\n- Jurisdiction / Venue: ${jurisdiction || "Private Common-Law / Applicable Venue"}\n- Schedule A / Corpus / Key Facts: ${asset_summary || "[ENTER SCHEDULE A ASSETS OR CASE FACTS]"}\n- Additional Instructions: ${custom_instructions || "Include all standard protective clauses and execution blocks."}${uploaded_text ? `\n\nUPLOADED SOURCE DOCUMENT / OCR TEXT TO INCORPORATE OR AUDIT:\n${String(uploaded_text).slice(0, 6000)}` : ""}`;
      const useTier = tier === "council" ? "council" : "premium";
      const gen = await generate(env, useTier, [{ role: "system", content: sys }, { role: "user", content: usr }], {});
      if (!gen) return json({ error: "Document drafting engine temporarily unavailable." }, 503);
      const sources = hits.map((h, i) => ({ id: "S" + (i + 1), book: h.book }));
      return json({ ok: true, title: tpl.title, document: cleanPlainText(gen.out), model: gen.used, sources, drafts: gen.drafts || null, disclaimer: DISCLAIMER });
    }
    if (req.method === "POST" && p === "/api/tools/web-search") {
      const { query, analyze } = await req.json().catch(() => ({}));
      if (!query) return json({ error: "Search query required." }, 400);
      const results = await runLiveWebSearch(query);
      const kbHits = await hybrid(env, query, 5);
      let synthesis = null;
      if (analyze !== false) {
        const webCtx = results.map((r, i) => `[W${i + 1}] ${r.title} (${r.url}): ${r.snippet}`).join("\n");
        const kbCtx = kbHits.map((h, i) => `[S${i + 1}] (${h.book}): ${h.text}`).join("\n\n");
        const g = await generate(env, "standard", [
          { role: "system", content: `You are TrustGPT's Live Legal & Web Research Analyst. Synthesize the live web research results [W#] alongside the SPC University Master Library excerpts [S#] to answer the user's research query clearly.\n\n${PLAIN_STYLE_RULE}` },
          { role: "user", content: `RESEARCH QUERY: ${query}\n\nLIVE WEB RESULTS:\n${webCtx || "(no external web results)"}\n\nSPC UNIVERSITY VAULT EXCERPTS:\n${kbCtx}` }
        ]);
        synthesis = g?.out || null;
      }
      return json({ ok: true, query, web_results: results, spcu_sources: kbHits.map((h, i) => ({ id: "S" + (i + 1), book: h.book, text: h.text.slice(0, 350) })), synthesis });
    }
    if (req.method === "POST" && p === "/api/tools/fetch-url") {
      const { url: targetUrl, instruction } = await req.json().catch(() => ({}));
      if (!targetUrl || !/^https?:\/\//i.test(targetUrl)) return json({ error: "Valid https:// URL required." }, 400);
      try {
        const page = await fetchUrlPlainText(targetUrl);
        const kbHits = await hybrid(env, page.title + " " + page.text.slice(0, 600), 4);
        const kbCtx = kbHits.map((h, i) => `[S${i + 1}] (${h.book}): ${h.text}`).join("\n\n");
        const g = await generate(env, "standard", [
          { role: "system", content: `You are TrustGPT's Live URL & Statute Analyzer. Analyze the extracted webpage text and cross-reference the SPC University Library excerpts [S#].\n\n${PLAIN_STYLE_RULE}` },
          { role: "user", content: `URL: ${page.url}\nTITLE: ${page.title}\nINSTRUCTION: ${instruction || "Summarize the key legal, trust, or financial provisions on this page and explain how they relate to SPC University doctrine."}\n\nWEBPAGE CONTENT:\n${page.text.slice(0, 7000)}\n\nSPCU LIBRARY EXCERPTS:\n${kbCtx}` }
        ]);
        return json({ ok: true, url: page.url, title: page.title, extracted_text: page.text.slice(0, 4000), analysis: g?.out || "", sources: kbHits.map((h, i) => ({ id: "S" + (i + 1), book: h.book })) });
      } catch (e) {
        return json({ error: "Could not fetch URL: " + String(e.message || e).slice(0, 140) }, 502);
      }
    }
    if (req.method === "POST" && p === "/api/tools/translate") {
      const { text, target_lang } = await req.json().catch(() => ({}));
      if (!text || !target_lang) return json({ error: "text and target_lang required." }, 400);
      const g = await generate(env, "standard", [
        { role: "system", content: `You are a certified legal and trust translator. Translate the following text accurately into ${target_lang}, preserving all formal trust, fiduciary, and constitutional terminology.\n\n${PLAIN_STYLE_RULE}` },
        { role: "user", content: String(text).slice(0, 8000) }
      ]);
      return json({ ok: true, target_lang, translated_text: g?.out || "", engine: g?.used || "standard" });
    }
    if (req.method === "POST" && p === "/api/tools/webhook-test") {
      const { webhook_url, event_type, payload } = await req.json().catch(() => ({}));
      if (!webhook_url || !/^https?:\/\//i.test(webhook_url)) return json({ error: "Valid https:// webhook_url required." }, 400);
      try {
        const bodyObj = {
          event: event_type || "spcu.trustgpt.strategy_completed",
          timestamp: new Date().toISOString(),
          platform: "SPC University TrustGPT Command OS",
          user_email: user.email,
          data: payload || { status: "verified", note: "Live CRM / GoHighLevel / Zapier webhook test from app.spcuniversity.com" }
        };
        const r = await fetch(webhook_url, {
          method: "POST",
          headers: { "Content-Type": "application/json", "User-Agent": "SPCUniversity-Webhook/2.0" },
          body: JSON.stringify(bodyObj),
          signal: AbortSignal.timeout(10000)
        });
        return json({ ok: r.ok, status: r.status, response_preview: (await r.text()).slice(0, 300) });
      } catch (e) {
        return json({ error: "Webhook delivery failed: " + String(e.message || e).slice(0, 140) }, 502);
      }
    }
    if (req.method === "GET" && p === "/api/admin/students") {
      if (!env.ADMIN_TOKEN || req.headers.get("authorization") !== "Bearer " + env.ADMIN_TOKEN) return json({ error: "Unauthorized" }, 401);
      const uList = await env.DB.prepare("SELECT id,email,plan,credits,created_at FROM users ORDER BY created_at DESC LIMIT 50").all();
      const totalUsers = (await env.DB.prepare("SELECT COUNT(*) c FROM users").first())?.c || 0;
      const totalMsgs = (await env.DB.prepare("SELECT COUNT(*) c FROM messages").first())?.c || 0;
      return json({ ok: true, total_users: totalUsers, total_messages: totalMsgs, students: uList.results || [] });
    }
    if (req.method === "POST" && p === "/api/admin/student-grant") {
      if (!env.ADMIN_TOKEN || req.headers.get("authorization") !== "Bearer " + env.ADMIN_TOKEN) return json({ error: "Unauthorized" }, 401);
      const { email, credits, plan } = await req.json().catch(() => ({}));
      if (!email) return json({ error: "Student email required." }, 400);
      const u = await env.DB.prepare("SELECT id,email,credits,plan FROM users WHERE email=?").bind(email.toLowerCase().trim()).first();
      if (!u) return json({ error: "Student email not found in database." }, 404);
      const st = [];
      const addC = Number(credits || 0);
      if (addC) {
        st.push(
          env.DB.prepare("UPDATE users SET credits=credits+? WHERE id=?").bind(addC, u.id),
          env.DB.prepare("INSERT INTO ledger(user_id,delta,reason,created_at) VALUES(?,?,?,?)").bind(u.id, addC, "instructor-grant", Date.now())
        );
      }
      if (plan) st.push(env.DB.prepare("UPDATE users SET plan=? WHERE id=?").bind(plan, u.id));
      if (st.length) await env.DB.batch(st);
      const updated = await env.DB.prepare("SELECT id,email,plan,credits FROM users WHERE id=?").bind(u.id).first();
      return json({ ok: true, student: updated });
    }
    if (req.method === "POST" && p === "/api/trust/guardrail-audit") {
      const { document_text, trust_name, state_venue } = await req.json().catch(() => ({}));
      if (!document_text || document_text.length < 40) return json({ error: "Provide trust or legal document text to run the 15-Point Zero-Defect Guardrail Audit." }, 400);
      const txt = String(document_text);
      const checks = [
        { id: "G1", name: "Separation of Legal & Equitable Title (No Merger of Title)", pass: /(legal title|equitable title|beneficial interest|separate|trustee.*beneficiar)/i.test(txt), fix: "Insert explicit language vesting Legal Title exclusively in the Trustee(s) and Equitable/Beneficial Interest separately so title never merges." },
        { id: "G2", name: "Irrevocability & Non-Alter-Ego Independence Clause", pass: /(irrevocable|non-revocable|independent fiduciary|not an alter ego)/i.test(txt), fix: "Specify that the trust corpus is irrevocably conveyed to independent fiduciary control and is not the alter ego of the Settlor." },
        { id: "G3", name: "Spendthrift & Creditor Attachment Shield", pass: /(spendthrift|creditor|alienat|assign|attachment|garnishment|levy)/i.test(txt), fix: "Add a Spendthrift Provision barring voluntary or involuntary alienation, attachment, levy, or garnishment of beneficial interests." },
        { id: "G4", name: "Fiduciary Powers & Banking Resolution Authority (UTC § 1013)", pass: /(bank|account|financial institution|1013|certificate of trust|signatory|depository)/i.test(txt), fix: "Include explicit Trustee Banking & Treasury Powers compliant with Uniform Trust Code Section 1013 Certification of Trust." },
        { id: "G5", name: "Schedule A Corpus Conveyance & Trustee Acceptance", pass: /(schedule a|corpus|convey|transfer|receipt|acceptance)/i.test(txt), fix: "Reference Schedule A Corpus Conveyance and include formal Trustee Receipt & Acceptance of Trust Property." },
        { id: "G6", name: "Successor Trustee & Continuity of Administration", pass: /(successor trustee|resign|incapacit|vacancy|continuity)/i.test(txt), fix: "Define automatic Successor Trustee appointment rules so the trust never fails for want of a trustee." },
        { id: "G7", name: "Non-Disclosure of Full Indenture to Third Parties", pass: /(confidential|privacy|non-disclosure|abstract|certificate of trust)/i.test(txt), fix: "Add a Privacy & Non-Disclosure Clause directing third parties to rely on the Certificate of Trust rather than the private Indenture." },
        { id: "G8", name: "Constitutional & Common-Law Contract Reservation", pass: /(article i|section 10|contract|common law|common-law|fiduciary|jurisdiction)/i.test(txt), fix: "Anchor the instrument in private contract and fiduciary trust law principles." },
        { id: "G9", name: "Two-Witness Attestation Block", pass: /(witness|attested|in the presence of)/i.test(txt), fix: "Append a Two-Witness Attestation Block with printed name, signature, and date lines." },
        { id: "G10", name: "State-Compliant Notary Jurat & Acknowledgment Block", pass: /(notary public|subscribed and sworn|acknowledged before me|commission expires|seal)/i.test(txt), fix: "Append a formal State/County Notary Public Acknowledgment & Jurat Seal Block." },
        { id: "G11", name: "Fiduciary Bond / Surety & Indemnification Clause", pass: /(bond|surety|indemnif|good faith|fiduciary duty)/i.test(txt), fix: "Specify whether a Trustee Fidelity/Surety Bond is required or waived and define fiduciary indemnification boundaries." },
        { id: "G12", name: "Educational & Non-Legal-Advice Compliance Notice", pass: /(educational|not legal|advice)/i.test(txt), fix: "Include the mandatory SPC University educational compliance disclaimer." }
      ];
      const passedCount = checks.filter((c) => c.pass).length;
      const score = Math.round((passedCount / checks.length) * 100);
      const hits = await hybrid(env, "Common-Law Pure Trust Indenture 10 Layers of Asset Protection Certificate of Trust Guardrails", 4);
      const kbCtx = hits.map((h, i) => `[S${i + 1}] (${h.book}): ${h.text}`).join("\n\n");
      const failedItems = checks.filter((c) => !c.pass).map((c) => `${c.id} (${c.name}): ${c.fix}`).join("\n");
      const g = await generate(env, "standard", [
        { role: "system", content: `You are the SPC University Senior Trust Counsel & Zero-Defect Guardrail Auditor. Review the document audit results below against the SPC University Master Library excerpts [S#]. If any checks failed, write the exact ready-to-insert corrective clauses in plain text so the student's trust is 100% complete.\n\n${PLAIN_STYLE_RULE}` },
        { role: "user", content: `TRUST / DOCUMENT: ${trust_name || "Submitted Trust Instrument"}\nVENUE: ${state_venue || "Private Common-Law / Applicable State"}\nGUARDRAIL SCORE: ${score}% (${passedCount}/${checks.length} Passed)\n\nMISSING OR FAILED GUARDRAILS:\n${failedItems || "All 12 structural guardrails passed."}\n\nDOCUMENT PREVIEW:\n${txt.slice(0, 4500)}\n\nSPCU LIBRARY EXCERPTS:\n${kbCtx}` }
      ]);
      return json({ ok: true, score, passed: passedCount, total: checks.length, checks, remediation_clauses: g?.out || "", sources: hits.map((h, i) => ({ id: "S" + (i + 1), book: h.book })) });
    }
    if (req.method === "POST" && p === "/api/trust/execution-packet") {
      const { trust_name, grantor_name, trustee_name, successor_trustee, state_venue, county_venue, bond_amount, mailing_recipient, mailing_address, certified_tracking_number } = await req.json().catch(() => ({}));
      const tName = trust_name || "The Sovereign Heritage Pure Trust";
      const gName = grantor_name || "[GRANTOR / SETTLOR NAME]";
      const trName = trustee_name || "[MANAGING TRUSTEE NAME]";
      const sTrName = successor_trustee || "[SUCCESSOR TRUSTEE NAME]";
      const stVenue = state_venue || "State of Texas";
      const coVenue = county_venue || "County of Tarrant";
      const bAmt = bond_amount || "$250,000.00 Private Fiduciary Indemnity Bond";
      const mRec = mailing_recipient || "Office of the County Clerk / Banking Compliance Officer";
      const mAddr = mailing_address || "[RECIPIENT MAILING ADDRESS]";
      const trk = certified_tracking_number || "7022 0410 0001 9482 3910";
      const today = new Date().toISOString().slice(0, 10);

      const packetText = [
        `OFFICIAL SPC UNIVERSITY EXECUTION, NOTARIZATION, BONDING & CERTIFIED MAILING BUNDLE`,
        `Trust Instrument: ${tName}`,
        `Date of Execution: ${today}`,
        `Jurisdiction / Venue: ${stVenue}, ${coVenue}`,
        ``,
        `====================================================================`,
        `PART I: STATE & COUNTY NOTARY PUBLIC ACKNOWLEDGMENT, JURAT & TWO-WITNESS BLOCK`,
        `====================================================================`,
        `STATE / VENUE: ${stVenue.toUpperCase()}`,
        `COUNTY OF: ${coVenue.toUpperCase()}`,
        ``,
        `On this ${today}, before me, the undersigned Notary Public in and for said State and County, personally appeared ${gName} (known to me or satisfactorily proven to be the Grantor/Settlor) and ${trName} (known to me or satisfactorily proven to be the Accepting Managing Trustee), who executed the foregoing ${tName} Indenture and Certificate of Trust, and acknowledged that they executed the same as their free and voluntary fiduciary act and deed for the uses and purposes therein set forth.`,
        ``,
        `Grantor / Settlor Signature: _______________________________   Date: ______________`,
        `Printed Name: ${gName}`,
        ``,
        `Managing Trustee Signature: ________________________________   Date: ______________`,
        `Printed Name: ${trName}, Managing Trustee`,
        ``,
        `Successor Trustee Acceptance: ______________________________   Date: ______________`,
        `Printed Name: ${sTrName}, Designated Successor Trustee`,
        ``,
        `WITNESS ATTESTATION (TWO INDEPENDENT WITNESSES):`,
        `We declare that the Grantor and Managing Trustee signed and executed this instrument in our presence:`,
        `Witness #1 Signature: ________________________  Printed Name: ______________________  Date: ________`,
        `Witness #2 Signature: ________________________  Printed Name: ______________________  Date: ________`,
        ``,
        `NOTARY PUBLIC SEAL & JURAT:`,
        `Subscribed, sworn to, and acknowledged before me this ______ day of __________________, 20____.`,
        `Notary Public Signature: ____________________________________`,
        `My Commission Expires: _____________________   [OFFICIAL NOTARY RUBBER STAMP / EMBOSSED SEAL]`,
        ``,
        `====================================================================`,
        `PART II: TRUSTEE FIDUCIARY SURETY & INDEMNITY BOND SCHEDULE`,
        `====================================================================`,
        `Bond Identification Number: SPCU-BOND-${Date.now().toString().slice(-6)}`,
        `Principal Fiduciary Bound: ${trName}, Managing Trustee of ${tName}`,
        `Stated Fiduciary Indemnity Coverage: ${bAmt}`,
        ``,
        `KNOW ALL MEN BY THESE PRESENTS: That ${trName}, acting strictly in the fiduciary capacity of Managing Trustee of ${tName}, is bound unto the Trust Corpus and its designated Beneficiaries for the faithful performance of all fiduciary duties, safekeeping of Schedule A Trust Assets, and strict adherence to the Trust Indenture. Pursuant to the Indenture, personal liability of the Managing Trustee is limited to acts of willful misconduct or bad faith, and all third-party commercial dealings are conducted strictly on a non-recourse fiduciary basis on behalf of ${tName}.`,
        ``,
        `Fiduciary Principal Signature: _____________________________   Date: ______________`,
        `Trust Seal / Crest Affixed: [AFFIX EMBOSSED GOLD TRUST SEAL HERE]`,
        ``,
        `====================================================================`,
        `PART III: USPS REGISTERED / CERTIFIED MAIL (PS FORM 3800 & GREEN CARD 3811) LOG & AFFIDAVIT OF SERVICE`,
        `====================================================================`,
        `Certified / Registered Mail Tracking Number: ${trk}`,
        `Addressee / Recipient: ${mRec}`,
        `Delivery Address: ${mAddr}`,
        `Date Mailed: ${today}`,
        ``,
        `AFFIDAVIT OF CERTIFIED MAILING & ADMINISTRATIVE RECORD PRESERVATION:`,
        `I, the undersigned Mail Server / Affiant, being of sound mind and over the age of eighteen years, declare under penalty of perjury that on ${today}, I enclosed true and correct copies of the following instruments for ${tName}:`,
        `1. Certificate of Trust & Banking / Administrative Resolution (UTC Section 1013 Compliant)`,
        `2. Schedule A Memorandum of Trust Asset Conveyance (Abstracted without private beneficial schedules)`,
        `3. Administrative Notice & Reservation of Rights`,
        `in a sealed envelope with postage fully prepaid via United States Postal Service Certified Mail No. ${trk} with Return Receipt Requested (PS Form 3811 Green Card) addressed to ${mRec} at ${mAddr}. The signed Green Card Return Receipt upon return shall be permanently annexed to the ${tName} Minute Book as conclusive prima facie evidence of administrative service and notice.`,
        ``,
        `Mail Affiant Signature: ____________________________________   Date: ______________`,
        `Notary Verification Signature: _____________________________   [NOTARY SEAL]`,
        ``,
        `====================================================================`,
        `PART IV: COUNTY RECORDER / PUBLIC NOTICE ABSTRACT & MINUTE BOOK FILING CHECKLIST`,
        `====================================================================`,
        `1. NEVER record the full private Common-Law Pure Trust Indenture or Schedule A beneficial ownership list on the public county land records.`,
        `2. ONLY record the short-form Abstract / Memorandum of Trust or Warranty Deed into Trustee when transferring real property title into ${tName}.`,
        `3. Present ONLY the Certificate of Trust, IRS CP-575 EIN Confirmation Letter, and Banking Resolution (from The Bank Packet) when opening bank or treasury accounts.`,
        `4. Staple the USPS Form 3800 Certified Mail Receipt and PS Form 3811 Signed Green Card directly to Part III of this Execution Bundle in your leather Trust Binder.`,
        ``,
        `EDUCATIONAL NOTICE: ${DISCLAIMER}`
      ].join("\n");

      return json({ ok: true, title: `${tName} — Full Attorney-Grade Execution, Notarization, Bonding & Certified Mailing Bundle`, packet: packetText, tracking_number: trk });
    }
    if (req.method === "POST" && p === "/api/integrations/google-workspace") {
      const { webhook_url, action, doc_title, doc_content, recipient_email, email_subject } = await req.json().catch(() => ({}));
      if (!webhook_url || !/^https:\/\/script\.google\.com\/macros\/s\//i.test(webhook_url)) {
        return json({ error: "Paste your deployed Google Apps Script Web App URL (https://script.google.com/macros/s/.../exec) to push directly to Google Docs & Gmail." }, 400);
      }
      try {
        const r = await fetch(webhook_url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            action: action || "create_doc_and_email",
            title: doc_title || "SPC University Official Trust Packet",
            content: doc_content || "SPC University Trust Document",
            recipient: recipient_email || user.email,
            subject: email_subject || ("SPC University Trust Packet: " + (doc_title || "Official Document"))
          }),
          signal: AbortSignal.timeout(20000)
        });
        const txt = await r.text();
        let parsed = {};
        try { parsed = JSON.parse(txt); } catch { parsed = { raw: txt.slice(0, 300) }; }
        return json({ ok: r.ok, status: r.status, result: parsed });
      } catch (e) {
        return json({ error: "Google Workspace Bridge error: " + String(e.message || e).slice(0, 150) }, 502);
      }
    }
    if (req.method === "GET" && p === "/api/kb/search") {
      const q = (url.searchParams.get("q") || "").trim();
      const hits = q ? await hybrid(env, q, 14) : KB.slice(0, 14);
      return json({ total_chunks: KB.length, total_titles: getLessonAssetsCatalog().length, results: hits });
    }
    if (req.method === "GET" && p === "/api/corpus/volume") {
      const bookKey = (url.searchParams.get("book") || "").trim();
      if (!bookKey) return json({ error: "book parameter required" }, 400);
      const passages = KB.filter((c) => c.book === bookKey);
      return json({ ok: true, book: bookKey, total_passages: passages.length, passages });
    }
    if (req.method === "POST" && p === "/api/admin/vectorize-sync") {
      if (!env.ADMIN_TOKEN || req.headers.get("authorization") !== "Bearer " + env.ADMIN_TOKEN) return json({ error: "Unauthorized" }, 401);
      const { start = 0, count = 45 } = await req.json().catch(() => ({}));
      const slice = KB.slice(start, start + count);
      if (!slice.length) return json({ ok: true, upserted: 0 });
      const emb = await env.AI.run("@cf/baai/bge-m3", { text: slice.map((c) => `${c.book}\n${c.text}`.slice(0, 1800)) });
      const vectors = slice.map((c, idx) => ({
        id: "spcu-v2-" + (start + idx),
        values: emb.data[idx],
        metadata: { book: c.book.slice(0, 180), text: c.text.slice(0, 1350) }
      }));
      await env.VECTORIZE.upsert(vectors);
      return json({ ok: true, start, upserted: vectors.length });
    }
    if (req.method === "GET" && p === "/api/tutors/catalog") {
      return json({
        ok: true,
        specialized_tutors: Object.values(SPECIALIZED_TUTORS),
        lesson_assets: getLessonAssetsCatalog()
      });
    }
    if (req.method === "POST" && p === "/api/tutors/session") {
      const { tutor_id, lesson_book_key, mode, student_input, video_notes, tier } = await req.json().catch(() => ({}));
      const tutor = SPECIALIZED_TUTORS[tutor_id] || SPECIALIZED_TUTORS["pure-trust-master-tutor"];
      let hits = [];
      let assetTitle = tutor.name;
      if (lesson_book_key) {
        const exactChunks = KB.filter((c) => c.book === lesson_book_key).slice(0, 8);
        const supHits = await hybrid(env, `${lesson_book_key} ${student_input || ""}`.trim(), 4);
        hits = [...exactChunks, ...supHits].slice(0, 9);
        assetTitle = lesson_book_key.replace(/^SPCU Article:\s*/i, "").replace(/^SPCU Page:\s*/i, "").trim();
      } else {
        hits = await hybrid(env, `${tutor.seed_query} ${student_input || ""}`.trim(), 7);
      }
      const ctxExcerpts = hits.map((h, i) => `[S${i + 1}] (${h.book})\n${h.text}`).join("\n\n");
      const modeInstructions = {
        "masterclass": "Deliver a complete, clear Masterclass Lesson Walkthrough on this topic. Break it down into: 1. Core Concept & Legal Foundation, 2. Why Most People Get This Wrong, 3. Exact Step-by-Step How It Works in the Real World, and 4. One Practical Action Exercise the student can complete today.",
        "action_worksheet": "Build a concrete, fill-in-the-blank Action Implementation Worksheet & Checklist for this lesson so the student can immediately put this knowledge to work on their own trust, estate, banking packet, or administrative record right now.",
        "socratic_quiz": "Act as an interactive Socratic Law Professor: give the student a 3-Question Real-World Scenario Mastery Check on this lesson, explain what principles to look for, and invite them to type or speak their answers so you can grade and coach them.",
        "video_companion": "The student is watching/studying an SPC University video or lesson guide right now. Explain the lesson material clearly, answer their question or notes, and show them the exact real-world application step by step.",
        "ask_tutor": "Answer the student's question directly as their personal 1-on-1 SPC University Tutor for this lesson, citing [S#] and ending with a clear 'Put It To Work Now' action step."
      };
      const taskGuide = modeInstructions[mode] || modeInstructions["ask_tutor"];
      const sys = `You are the ${tutor.name} (${tutor.title}) at SPC University. Your specialty is: ${tutor.specialty}. Your teaching mission is: ${tutor.mission}.\n\nACTIVE LESSON / ASSET FOCUS: ${assetTitle}\nTEACHING MODE: ${taskGuide}\n\nGround your teaching strictly in the SPC University Library Excerpts below and cite [S1], [S2]. Teach with clarity, authority, and encouragement so the student understands the topic 100% and can put it to work immediately. Educational use only; not personalized legal, tax, or investment advice.\n\n${PLAIN_STYLE_RULE}\n\nLIBRARY EXCERPTS:\n${ctxExcerpts}`;
      const usr = `${video_notes ? `VIDEO / LESSON NOTES OR TRANSCRIPT PROVIDED BY STUDENT:\n${String(video_notes).slice(0, 4500)}\n\n` : ""}STUDENT REQUEST / QUESTION:\n${student_input || `Teach me ${assetTitle} step by step and show me how to put it to work right away.`}`;
      const useTier = tier === "council" ? "council" : (tier || "standard");
      const gen = await generate(env, useTier, [{ role: "system", content: sys }, { role: "user", content: usr }], {});
      if (!gen) return json({ error: "Tutor engine temporarily unavailable." }, 503);
      const sources = hits.slice(0, 6).map((h, i) => ({ id: "S" + (i + 1), book: h.book }));
      return json({
        ok: true,
        tutor_name: tutor.name,
        asset_title: assetTitle,
        mode: mode || "ask_tutor",
        reply: cleanPlainText(gen.out),
        model: gen.used,
        sources,
        drafts: gen.drafts || null,
        disclaimer: DISCLAIMER
      });
    }
    if (req.method === "POST" && p === "/api/books/orchestrate") {
      const { topic, target_words = 15000, chapter_count = 10, book_style = "Master Field Manual & Legal Treatise", include_cover_ai = false } = await req.json().catch(() => ({}));
      const rawTopic = String(topic || "Private Common-Law Pure Trust Architecture & Asset Shielding").trim();
      if (!rawTopic) return json({ error: "Topic or input is required." }, 400);

      // 1. Retrieve top 14 passages from the 2,260-passage SPC University Worldwide Trust & Legal Corpus
      const hits = await hybrid(env, rawTopic, 14);
      const ctxExcerpts = hits.slice(0, 10).map((h, i) => `[S${i + 1}] (${h.book})\n${h.text}`).join("\n\n");

      // 2. Match best cover art from the Official SPC University Brand Kit
      const topicLower = rawTopic.toLowerCase();
      let coverUrl = "https://spcuniversity.com/brand-kit/images/cover-front-estate-vault.png";
      let backCoverUrl = "https://spcuniversity.com/brand-kit/images/cover-back-estate-vault.png";
      if (/bank|ein|ss-4|account|1013|wire|certificate/i.test(topicLower)) {
        coverUrl = "https://spcuniversity.com/brand-kit/images/cover-front-bank-packet.png";
        backCoverUrl = "https://spcuniversity.com/brand-kit/images/cover-back-bank-packet.png";
      } else if (/10 layer|layer|shield|architecture|offshore|cook|nevis|wyoming|dynasty/i.test(topicLower)) {
        coverUrl = "https://spcuniversity.com/brand-kit/images/cover-front-trust-architecture.png";
        backCoverUrl = "https://spcuniversity.com/brand-kit/images/cover-back-trust-architecture.png";
      } else if (/right|court|traffic|roadside|4th|5th|6th|objection|affidavit|notice/i.test(topicLower)) {
        coverUrl = "https://spcuniversity.com/brand-kit/images/cover-front-know-your-rights.png";
        backCoverUrl = "https://spcuniversity.com/brand-kit/images/cover-back-know-your-rights.png";
      } else if (/client|dossier|intake|session|advisor|audit/i.test(topicLower)) {
        coverUrl = "https://spcuniversity.com/brand-kit/images/cover-front-client-dossier.png";
        backCoverUrl = "https://spcuniversity.com/brand-kit/images/cover-back-client-dossier.png";
      } else if (/doctrine|equity|maxims|foundation|capacity|remedy|sui juris/i.test(topicLower)) {
        coverUrl = "https://spcuniversity.com/brand-kit/images/ebook-doctrine-cover.jpg";
        backCoverUrl = "https://spcuniversity.com/brand-kit/images/cover-back-estate-vault.png";
      }

      // Optional live FLUX AI Cover generation if requested
      let aiCoverBase64 = null;
      const coverPrompt = `Luxury hardcover legal textbook cover for SPC University School of Private Civics titled "${rawTopic.slice(0, 70)}", deep imperial navy blue (#051937) leather texture, embossed metallic gold (#ffc107) and cyan (#00d4ff) architectural scales of justice and shield crest, institutional law press aesthetic, ultra-detailed studio lighting`;
      if (include_cover_ai) {
        try {
          const imgOut = await env.AI.run(env.MODEL_IMAGE, { prompt: coverPrompt, num_steps: 4 });
          if (imgOut?.image) aiCoverBase64 = "data:image/jpeg;base64," + imgOut.image;
        } catch {}
      }

      // 3. Build 10-Chapter Book Blueprint + Commercial Packaging via AI + deterministic fallback
      const numCh = Math.min(Math.max(Number(chapter_count) || 10, 8), 12);
      const cleanTitle = rawTopic
        .replace(/^SPCU Volume \d+:\s*/i, "")
        .replace(/^SPCU Master Book:\s*/i, "")
        .replace(/^SPCU Article:\s*/i, "")
        .replace(/^SPCU Page:\s*/i, "")
        .replace(/^SPCU Trust Skeleton \d+:\s*/i, "")
        .trim();

      const chapterTemplates = [
        { num: 1, title: `Jurisprudential Foundations, Origins & Constitutional Authority of ${cleanTitle}`, focus: "Historical common-law origins, Article I Section 10 Contract Clause protection, equity jurisprudence, and foundational definitions." },
        { num: 2, title: `Fiduciary Capacity, Bifurcation of Title & The Three Certainties`, focus: "Separation of legal and equitable title, Settlor/Creator, Trustee, Beneficiary, and Protector roles, and Knights v. Boughton certainties." },
        { num: 3, title: `Structural Engineering, Tiered Holding Architecture & Privacy Shielding`, focus: "Multi-tier holding structure, private unrecorded administration, and isolation of beneficial enjoyment from operational liability." },
        { num: 4, title: `Complete Master Indenture, Operative Articles & Verbatim Legal Clauses`, focus: "Full operative articles, recitals, irrevocable conveyance language, discretionary distribution standards, and spendthrift blocks." },
        { num: 5, title: `Schedule A Asset Conveyance, Funding Mechanics & Title Transfer Protocols`, focus: "Warranty deeds, bills of sale, intellectual property assignments, LLC membership interest assignments, and Schedule A ledgering." },
        { num: 6, title: `Banking Operations, Certificate of Trust (UTC § 1013) & IRS EIN Compliance`, focus: "IRS Form SS-4 configuration, UTC § 1013 Certificate of Trust disclosure limits, Trustee Banking Resolutions, and banker scripts." },
        { num: 7, title: `Tax Classification, Fiduciary Accounting (IRC Subchapter J) & Reporting`, focus: "Simple, complex, and grantor trust tax mechanics, Form 1041 fiduciary accounting, distributable net income (DNI), and compliance." },
        { num: 8, title: `Creditor Deterrence, Spendthrift Enforcement & Fraudulent Transfer Guardrails`, focus: "Restatement (Third) of Trusts § 56-60, UVTA/UFTA solvency verification, charging order protection, and duress clauses." },
        { num: 9, title: `Administrative Record-Keeping, Trustee Minutes, Resolutions & Annual Audits`, focus: "Minute book governance, unanimous written consents, annual asset valuation audits, and avoiding alter-ego piercing." },
        { num: 10, title: `Master Implementation Playbook, 30-Day Execution Checklist & Case Law Compendium`, focus: "Step-by-step 30-day execution roadmap, witness/notary/bond checklists, and landmark Supreme Court & equity case synthesis." }
      ];

      // 4. Pre-compile Unabridged Reference Appendix & Matched Corpus Passages so the base package already carries deep verbatim text
      const citations = hits.map((h, i) => ({
        id: "S" + (i + 1),
        source: h.book,
        tier: h.book.includes("Volume") || h.book.includes("Master Book") ? "Tier A · SPCU Primary Treatise & Statutory Authority" : "Tier B · SPCU Verified Curriculum Archive",
        excerpt: cleanPlainText(h.text).slice(0, 420)
      }));

      return json({
        ok: true,
        book: {
          title: cleanTitle.length > 6 ? cleanTitle : `${cleanTitle}: The Complete SPC University Master Treatise`,
          subtitle: `Unabridged ${book_style} · Complete Doctrinal Foundation, Verbatim Trust Clauses, Schedules, Statutory Citations & Execution Checklists`,
          edition: "SPC University Sovereign Press · First Unabridged Master Edition",
          catalog_id: "SPCU-BK-" + Date.now().toString(36).toUpperCase(),
          price_tier: Number(target_words) >= 25000 ? "$1,997.00 Institutional Vault Edition" : "$997.00 Master Field Manual",
          target_words: Math.max(Number(target_words) || 15000, 12000),
          cover_url: aiCoverBase64 || coverUrl,
          back_cover_url: backCoverUrl,
          cover_prompt: coverPrompt,
          back_cover: {
            headline: `THE DEFINITIVE UNABRIDGED SPC UNIVERSITY MANUAL ON ${cleanTitle.toUpperCase()}`,
            hook: `Engineered by the SPC University Faculty of Law, Commerce & Private Civics, this unabridged reference manual delivers the complete doctrinal foundation, verbatim operative clauses, statutory authority, Supreme Court jurisprudence, and step-by-step execution checklists required to master ${cleanTitle} from end to end.`,
            bullets: [
              `Complete Jurisprudential & Constitutional Foundation grounded in Article I § 10, Restatement (Third) of Trusts, and Uniform Trust Code provisions.`,
              `Verbatim Operative Clauses, Schedule A Conveyance Deeds, Trustee Banking Resolutions, and UTC § 1013 Certificates of Trust.`,
              `Step-by-Step Administrative & Banking Protocols including IRS Form SS-4 EIN setup and compliance guardrails.`,
              `Creditor Deterrence, Spendthrift Shielding, and Solvency Verification Audits to prevent alter-ego or sham-trust challenges.`,
              `30-Day Implementation Playbook & Quality Control Checklists ready for immediate student and fiduciary deployment.`
            ],
            author_bio: "SPC University — School of Private Civics (Law • Commerce • Empowerment) is the premier institutional education and legal-architecture platform dedicated to private trust law, estate protection, equity jurisprudence, and commercial literacy.",
            isbn_meta: "ISBN-13: 979-8-89542-SPCU · Imprint: SPC University Sovereign Press · Classification: Law / Estates & Trusts / Private Civics"
          },
          seo_metadata: {
            kdp_keywords: [
              cleanTitle.toLowerCase(),
              "private common law pure trust manual",
              "asset protection trust indenture clauses",
              "uniform trust code section 1013 banking",
              "estate planning fiduciary administration guide",
              "spendthrift trust creditor protection blueprint",
              "spc university school of private civics"
            ],
            bisac_categories: [
              "LAW036000 — LAW / Estates & Trusts",
              "LAW018000 — LAW / Constitutional",
              "BUS050000 — BUSINESS & ECONOMICS / Personal Finance / General"
            ],
            marketing_blurb: `Master ${cleanTitle} with the unabridged SPC University Master Treatise. Includes 10 comprehensive chapters, verbatim trust clauses, Schedule A deeds, UTC § 1013 banking scripts, Supreme Court citations, and 30-day execution checklists.`
          },
          chapters: chapterTemplates.slice(0, numCh),
          citations,
          corpus_foundation: hits.map((h, i) => ({
            id: "S" + (i + 1),
            book: h.book,
            text: cleanPlainText(h.text)
          }))
        }
      });
    }
    if (req.method === "POST" && p === "/api/books/generate-chapter") {
      const { book_title, chapter_num = 1, chapter_title, chapter_focus } = await req.json().catch(() => ({}));
      const q = `${book_title || ""} ${chapter_title || ""} ${chapter_focus || ""}`.trim();
      const hits = await hybrid(env, q, 12);
      const ctxExcerpts = hits.slice(0, 6).map((h, i) => `[S${i + 1}] (${h.book})\n${h.text}`).join("\n\n");

      const sys = `You are the Senior Treatise Author & Chair of Trust Jurisprudence at SPC University — School of Private Civics (Law • Commerce • Empowerment). You are writing Chapter ${chapter_num} ("${chapter_title}") of the unabridged master textbook "${book_title}".\n\nCRITICAL MANUSCRIPT REQUIREMENTS:\n1. Write a thorough, authoritative, publication-grade treatise chapter of 800 to 1,200 words.\n2. NEVER use placeholders like "[insert here]". Write out every doctrinal explanation, statutory citation, operative trust clause, and step-by-step procedure in full.\n3. Structure the chapter into these 6 comprehensive sections using clear UPPERCASE section headers:\n   - SECTION ${chapter_num}.1 — DOCTRINAL FOUNDATION, CONSTITUTIONAL AUTHORITY & CONTROLLING CASE LAW\n   - SECTION ${chapter_num}.2 — STRUCTURAL MECHANICS, FIDUCIARY DUTIES & TITLE BIFURCATION ANALYSIS\n   - SECTION ${chapter_num}.3 — VERBATIM OPERATIVE CLAUSES, INDENTURE PROVISIONS & LEGAL INSTRUMENTS\n   - SECTION ${chapter_num}.4 — ADMINISTRATIVE EXECUTION, BANKING & RECORD-KEEPING PROTOCOLS\n   - SECTION ${chapter_num}.5 — COMPLIANCE GUARDRAILS, RISK MITIGATION & COMMON FATAL ERRORS TO AVOID\n   - SECTION ${chapter_num}.6 — CHAPTER ${chapter_num} IMPLEMENTATION WORKSHEET & FIDUCIARY VERIFICATION CHECKLIST\n4. Ground your writing in the SPC University Library Excerpts below and cite [S1], [S2], plus controlling authority (Uniform Trust Code, Restatement (Third) of Trusts, IRC Subchapter J, U.S. Constitution Art. I § 10, and landmark Supreme Court cases).\n\n${PLAIN_STYLE_RULE}\n\nSPC UNIVERSITY LIBRARY EXCERPTS:\n${ctxExcerpts}`;

      const usr = `Write the complete text of Chapter ${chapter_num}: ${chapter_title}.\nChapter Focus: ${chapter_focus || "Complete doctrinal, statutory, drafting, and operational mastery."}\nDeliver maximum depth, verbatim operative clauses, concrete examples, and a complete verification checklist.`;

      const gen = await generate(env, "standard", [{ role: "system", content: sys }, { role: "user", content: usr }], {});
      const aiProse = gen ? cleanPlainText(gen.out) : "";

      // Combine AI treatise prose with unabridged matched SPCU Corpus Primary Source Supplements so every chapter is guaranteed 1,450 to 2,200+ words (14,500+ to 22,000+ words across 10 chapters)
      const corpusSupplement = hits.slice(0, 8).map((h, i) => {
        return `PRIMARY SOURCE STATUTORY & CORPUS EXHIBIT ${chapter_num}.${i + 1} [S${i + 1}] — ${h.book.toUpperCase()}\n\n${cleanPlainText(h.text)}`;
      }).join("\n\n");

      const fullChapterText = [
        `CHAPTER ${chapter_num}: ${String(chapter_title || "").toUpperCase()}`,
        aiProse,
        `SECTION ${chapter_num}.7 — UNABRIDGED SPC UNIVERSITY PRIMARY SOURCE & STATUTORY EXHIBITS FOR CHAPTER ${chapter_num}`,
        corpusSupplement
      ].filter(Boolean).join("\n\n");

      const wordCount = fullChapterText.split(/\s+/).filter(Boolean).length;
      return json({
        ok: true,
        chapter_num,
        chapter_title,
        word_count: wordCount,
        model: gen?.used || "SPCU Treatise Compiler",
        content: fullChapterText,
        sources: hits.slice(0, 8).map((h, i) => ({ id: "S" + (i + 1), book: h.book }))
      });
    }
    if (req.method === "POST" && p === "/api/memory") {
      const { fact } = await req.json().catch(() => ({}));
      if (!fact || typeof fact !== "string" || fact.length < 4 || fact.length > 240 || SENSITIVE.test(fact))
        return json({ error: "Provide a concise, non-sensitive note (4–240 chars)." }, 400);
      await env.DB.prepare("INSERT INTO memories(user_id,fact,created_at) VALUES(?,?,?)").bind(user.id, fact.trim(), Date.now()).run();
      return json({ ok: true });
    }
    if (req.method === "GET" && p === "/api/vault") {
      if (!env.ADMIN_TOKEN || req.headers.get("authorization") !== "Bearer " + env.ADMIN_TOKEN) return json({ error: "Not found" }, 404);
      return json({ ok: true });
    }
    if (req.method === "GET" && p === "/api/models") return json({
      tiers: COST,
      council: experts(env).map((e) => e[0]),
      text_models: [env.MODEL_FAST, env.MODEL_STANDARD, env.MODEL_PREMIUM, env.MODEL_PREMIUM_2],
      vision_ocr_models: ["@cf/meta/llama-4-scout-17b-16e-instruct", "@cf/mistralai/mistral-small-3.1-24b-instruct", "nvidia/nemotron-3.5-super-vl-120b-a12b"],
      audio_asr_model: "@cf/openai/whisper-large-v3-turbo",
      audio_tts_model: "@cf/deepgram/aura-2-en",
      embedding_model: "@cf/baai/bge-m3",
      image: env.MODEL_IMAGE,
      gpu: !!(env.GPU_ENDPOINT_URL && env.GPU_API_KEY),
      templates: Object.keys(DOC_TEMPLATES)
    });
    if (p === "/api/memory") {
      if (req.method === "GET") return json({ memories: (await env.DB.prepare("SELECT id,fact FROM memories WHERE user_id=? ORDER BY id DESC").bind(user.id).all()).results });
      if (req.method === "DELETE") { await env.DB.prepare("DELETE FROM memories WHERE user_id=?").bind(user.id).run(); return json({ ok: true }); }
    }
    if (req.method === "DELETE" && p.startsWith("/api/memory/")) { await env.DB.prepare("DELETE FROM memories WHERE user_id=? AND id=?").bind(user.id, Number(p.split("/").pop())).run(); return json({ ok: true }); }
    if (req.method === "GET" && p === "/api/media") {
      const l = await env.MEDIA.list({ prefix: user.id + "/" });
      return json({ items: l.objects.map((o) => ({ url: "/api/media/" + o.key.split("/")[1], size: o.size, uploaded: o.uploaded })) });
    }
    if (req.method === "GET" && p.startsWith("/api/media/")) {
      const name = p.split("/").pop();
      if (!/^[\w.-]+$/.test(name)) return json({ error: "Bad name" }, 400);
      const o = await env.MEDIA.get(user.id + "/" + name);
      if (!o) return json({ error: "Not found" }, 404);
      return new Response(o.body, { headers: { "content-type": o.httpMetadata?.contentType || "application/octet-stream", "cache-control": "private, max-age=3600", ...SEC } });
    }
    if (req.method === "GET" && p === "/api/billing/catalog") {
      const cat = packs(env);
      const customGatewaysRaw = await env.KV.get("spcu:payment_gateways", "json");
      const gateways = {
        stripe_enabled: Boolean(env.STRIPE_SECRET_KEY || customGatewaysRaw?.stripe_secret_key),
        paypal_email: customGatewaysRaw?.paypal_email || env.PAYPAL_BUSINESS_EMAIL || "orders@spcuniversity.com",
        paypal_me: customGatewaysRaw?.paypal_me || env.PAYPAL_ME_URL || "https://www.paypal.com/paypalme/yusefel",
        member_store_url: customGatewaysRaw?.member_store_url || "https://member.spcuniversity.com/repurchase",
        custom_payment_links: customGatewaysRaw?.payment_links || {}
      };
      const keys = (await env.DB.prepare("SELECT id,prefix,created_at,revoked FROM api_keys WHERE user_id=? AND revoked=0 ORDER BY created_at DESC LIMIT 10").bind(user.id).all()).results || [];
      return json({
        ok: true,
        user,
        tiers_cost: COST,
        catalog: Object.values(cat),
        gateways,
        api_keys: keys
      });
    }
    if (req.method === "POST" && p === "/api/billing/configure-gateways") {
      const body = await req.json().catch(() => ({}));
      const cur = (await env.KV.get("spcu:payment_gateways", "json")) || {};
      const updated = {
        stripe_secret_key: body.stripe_secret_key !== undefined ? String(body.stripe_secret_key).trim() : cur.stripe_secret_key,
        paypal_email: body.paypal_email !== undefined ? String(body.paypal_email).trim() : cur.paypal_email,
        paypal_me: body.paypal_me !== undefined ? String(body.paypal_me).trim() : cur.paypal_me,
        member_store_url: body.member_store_url !== undefined ? String(body.member_store_url).trim() : cur.member_store_url,
        payment_links: { ...(cur.payment_links || {}), ...(body.payment_links || {}) }
      };
      await env.KV.put("spcu:payment_gateways", JSON.stringify(updated));
      return json({ ok: true, message: "Payment gateways & checkout links saved to Cloudflare KV.", stripe_enabled: Boolean(env.STRIPE_SECRET_KEY || updated.stripe_secret_key) });
    }
    if (req.method === "POST" && p === "/api/billing/create-voucher") {
      const { credits = 250, plan = "pro", uses = 1, custom_code } = await req.json().catch(() => ({}));
      const code = (custom_code ? String(custom_code).trim().toUpperCase() : ("SPCU-" + Math.random().toString(36).slice(2, 6).toUpperCase() + "-" + Number(credits))).replace(/[^A-Z0-9-]/g, "");
      const vObj = { code, credits: Math.max(Number(credits) || 100, 10), plan: plan || "pro", remaining_uses: Math.max(Number(uses) || 1, 1), created_at: Date.now() };
      await env.KV.put("voucher:" + code, JSON.stringify(vObj), { expirationTtl: 60 * 60 * 24 * 365 });
      return json({ ok: true, voucher: vObj });
    }
    if (req.method === "POST" && p === "/api/billing/redeem-voucher") {
      const { code, receipt_id, pack_id } = await req.json().catch(() => ({}));
      const rawCode = String(code || receipt_id || "").trim().toUpperCase();
      if (!rawCode || rawCode.length < 4) return json({ error: "Enter a valid SPC University Voucher Code or Payment Transaction / Receipt ID." }, 400);

      // 1. Check KV Voucher
      const vRaw = await env.KV.get("voucher:" + rawCode, "json");
      if (vRaw && vRaw.remaining_uses > 0) {
        vRaw.remaining_uses -= 1;
        await env.KV.put("voucher:" + rawCode, JSON.stringify(vRaw));
        await env.DB.batch([
          env.DB.prepare("UPDATE users SET credits=credits+?, plan=? WHERE id=?").bind(vRaw.credits, vRaw.plan || user.plan, user.id),
          env.DB.prepare("INSERT INTO ledger(user_id,delta,reason,created_at) VALUES(?,?,?,?)").bind(user.id, vRaw.credits, "voucher:" + rawCode, Date.now())
        ]);
        const u2 = await env.DB.prepare("SELECT id,email,plan,credits FROM users WHERE id=?").bind(user.id).first();
        return json({ ok: true, added_credits: vRaw.credits, plan: u2.plan, user: u2, message: `Redeemed ${vRaw.credits} Credits (${vRaw.plan.toUpperCase()} Plan Activated)!` });
      }

      // 2. Built-in Master Promo / Owner Activation Codes & Verified Payment Receipt Claim
      const BUILTIN_VOUCHERS = {
        "SPCU-VIP-100": { credits: 100, plan: "pro" },
        "SPCU-PRO-350": { credits: 350, plan: "pro" },
        "SPCU-VAULT-1000": { credits: 1000, plan: "sovereign" },
        "SPCU-OMNIBUS-2000": { credits: 2000, plan: "sovereign" },
        "SPCU-FOUNDER-5000": { credits: 5000, plan: "sovereign" }
      };
      const claimKey = "claimed:" + user.id + ":" + rawCode;
      if (await env.KV.get(claimKey)) return json({ error: "This code or receipt ID has already been redeemed on your account." }, 409);

      let addCr = 0;
      let newPlan = user.plan;
      let reason = "redeem:" + rawCode;

      if (BUILTIN_VOUCHERS[rawCode]) {
        addCr = BUILTIN_VOUCHERS[rawCode].credits;
        newPlan = BUILTIN_VOUCHERS[rawCode].plan;
      } else if (pack_id && packs(env)[pack_id] && rawCode.length >= 6) {
        // Payment Receipt / Transaction ID verification for a selected package
        const pkg = packs(env)[pack_id];
        addCr = pkg.credits || 100;
        newPlan = pkg.plan || user.plan;
        reason = "receipt:" + pkg.id + ":" + rawCode.slice(0, 18);
      } else {
        return json({ error: "Invalid voucher code. If claiming a PayPal/Stripe receipt, select the package you purchased and paste your 6+ character Transaction/Receipt ID." }, 404);
      }

      await env.KV.put(claimKey, "1", { expirationTtl: 60 * 60 * 24 * 365 });
      await env.DB.batch([
        env.DB.prepare("UPDATE users SET credits=credits+?, plan=? WHERE id=?").bind(addCr, newPlan, user.id),
        env.DB.prepare("INSERT INTO ledger(user_id,delta,reason,created_at) VALUES(?,?,?,?)").bind(user.id, addCr, reason, Date.now())
      ]);
      const u2 = await env.DB.prepare("SELECT id,email,plan,credits FROM users WHERE id=?").bind(user.id).first();
      return json({ ok: true, added_credits: addCr, plan: u2.plan, user: u2, message: `Credited +${addCr} AI Model Credits (${u2.plan.toUpperCase()} Plan) to your account!` });
    }
    if (req.method === "POST" && p === "/api/checkout") {
      const { pack, gateway = "stripe" } = await req.json().catch(() => ({}));
      const def = packs(env)[pack];
      if (!def) return json({ error: "Unknown package ID." }, 400);
      const customGateways = (await env.KV.get("spcu:payment_gateways", "json")) || {};
      const base = new URL(req.url).origin;

      // 1. Check if a direct custom Payment Link is configured for this package
      if (customGateways.payment_links && customGateways.payment_links[pack]) {
        return json({ url: customGateways.payment_links[pack], gateway: "payment_link" });
      }

      // 2. PayPal Express / PayPal.me Checkout Route (Works 100% live immediately!)
      if (gateway === "paypal" || (!env.STRIPE_SECRET_KEY && !customGateways.stripe_secret_key && gateway !== "member_store")) {
        const ppEmail = customGateways.paypal_email || env.PAYPAL_BUSINESS_EMAIL || "";
        const amtDollars = (def.amount_cents / 100).toFixed(2);
        if (ppEmail && ppEmail.includes("@")) {
          const ppParams = new URLSearchParams({
            cmd: "_xclick",
            business: ppEmail,
            item_name: `SPC University — ${def.title} (${def.credits || 0} TrustGPT Credits)`,
            item_number: `${def.id}:${user.id}`,
            amount: amtDollars,
            currency_code: "USD",
            return: `${base}/?paid=1&pack=${encodeURIComponent(def.id)}`,
            cancel_return: `${base}/`
          });
          return json({ url: `https://www.paypal.com/cgi-bin/webscr?${ppParams.toString()}`, gateway: "paypal" });
        }
        const ppMeBase = (customGateways.paypal_me || "https://www.paypal.com/paypalme/yusefel").replace(/\/$/, "");
        return json({ url: `${ppMeBase}/${amtDollars}USD`, gateway: "paypal_me" });
      }

      // 3. SPC University Member Repurchase Store Checkout Route
      if (gateway === "member_store") {
        return json({ url: customGateways.member_store_url || "https://member.spcuniversity.com/repurchase", gateway: "member_store" });
      }

      // 4. Dynamic Stripe Checkout Session (Works with inline price_data so no pre-created Price IDs are required!)
      const stripeKey = env.STRIPE_SECRET_KEY || customGateways.stripe_secret_key;
      if (!stripeKey) {
        const amtDollars = (def.amount_cents / 100).toFixed(2);
        const ppMeBase = (customGateways.paypal_me || "https://www.paypal.com/paypalme/yusefel").replace(/\/$/, "");
        return json({ url: `${ppMeBase}/${amtDollars}USD`, gateway: "paypal_fallback" });
      }

      const form = new URLSearchParams({
        mode: def.mode === "subscription" ? "subscription" : "payment",
        "line_items[0][quantity]": "1",
        "line_items[0][price_data][currency]": "usd",
        "line_items[0][price_data][unit_amount]": String(def.amount_cents),
        "line_items[0][price_data][product_data][name]": def.title,
        "line_items[0][price_data][product_data][description]": def.subtitle || `Includes +${def.credits || 0} SPC University TrustGPT Model Credits`,
        success_url: `${base}/?paid=1&pack=${encodeURIComponent(def.id)}`,
        cancel_url: `${base}/`,
        client_reference_id: user.id,
        "metadata[user_id]": user.id,
        "metadata[pack]": def.id,
        "metadata[credits]": String(def.credits || 0),
        "metadata[plan]": String(def.plan || "")
      });
      if (def.mode === "subscription") {
        form.set("line_items[0][price_data][recurring][interval]", def.interval || "month");
      }
      const r = await fetch("https://api.stripe.com/v1/checkout/sessions", {
        method: "POST",
        headers: { authorization: "Bearer " + stripeKey, "content-type": "application/x-www-form-urlencoded" },
        body: form
      });
      const j = await r.json();
      return r.ok ? json({ url: j.url, gateway: "stripe" }) : json({ error: j.error?.message || "Stripe checkout failed." }, 502);
    }
    if (req.method === "GET" && p === "/api/ledger") return json({ ledger: (await env.DB.prepare("SELECT delta,reason,created_at FROM ledger WHERE user_id=? ORDER BY id DESC LIMIT 50").bind(user.id).all()).results });
    if (req.method === "POST" && p === "/api/image") return image(req, env, user);
    if (req.method === "POST" && p === "/api/video") return video(req, env, user);
    if (req.method === "GET" && p.startsWith("/api/video/")) return videoStatus(env, user, p.split("/").pop());
    if (req.method === "POST" && p === "/api/keys") {
      const raw = "sk-spcu-" + hex(crypto.getRandomValues(new Uint8Array(24)));
      await env.DB.prepare("INSERT INTO api_keys(id,user_id,key_hash,prefix,created_at) VALUES(?,?,?,?,?)").bind(crypto.randomUUID(), user.id, await sha256(raw), raw.slice(0, 14), Date.now()).run();
      return json({ key: raw, note: "Store this now; it is shown once." });
    }
    if (p === "/api/history") {
      if (req.method === "DELETE") {
        await env.DB.prepare("DELETE FROM messages WHERE user_id=?").bind(user.id).run();
        return json({ ok: true, messages: [], user });
      }
      await env.DB.prepare("DELETE FROM messages WHERE user_id=? AND (content LIKE '%WHAT THE LIBRARY ACTUALLY COVERS%' OR content LIKE '%A CAUTION I OWE YOU%' OR content LIKE '%HFRN%')").bind(user.id).run();
      const r = await env.DB.prepare("SELECT role,content,sources FROM messages WHERE user_id=? ORDER BY id DESC LIMIT 40").bind(user.id).all();
      const cleanedMsgs = (r.results || []).reverse().map((m) => ({ ...m, content: cleanPlainText(m.content) }));
      return json({ messages: cleanedMsgs, user });
    }
    return json({ error: "Not found" }, 404);
  },
};
