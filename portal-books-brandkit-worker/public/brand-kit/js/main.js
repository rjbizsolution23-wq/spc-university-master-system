/* ==========================================================================
   SPC University Brand Kit — site behaviour
   - responsive nav + scroll spy
   - image lightbox
   - copy-to-clipboard for colour values
   - print-to-PDF (full guide or a single section)
   - in-browser ZIP assembly of the brand kit
   No network calls leave this origin.
   ========================================================================== */

(function () {
  "use strict";

  /* ----------------------------------------------------------------------
     Asset manifest — single source of truth for the downloadable kit.
     Every file below is served from this site under /images/.
     ---------------------------------------------------------------------- */

  var ASSETS = [
    // 01 — Logo and brand source
    { f: "logo-primary.jpg", d: "1599×899", folder: "01_Logo_and_Brand_Source", label: "Primary logo" },
    { f: "logo-compact.png", d: "220×95", folder: "01_Logo_and_Brand_Source", label: "Compact banner logo" },
    { f: "icon-atlas.png", d: "150×150", folder: "01_Logo_and_Brand_Source", label: "Atlas icon / favicon" },
    { f: "hero-original.jpg", d: "1280×720", folder: "01_Logo_and_Brand_Source", label: "Original site hero banner" },
    { f: "ebook-doctrine-cover.jpg", d: "598×776", folder: "01_Logo_and_Brand_Source", label: "The SPCU Doctrine ebook cover" },
    { f: "article-01-ssn-civil-matter.png", d: "300×169", folder: "01_Logo_and_Brand_Source", label: "Article art 01" },
    { f: "article-02-trust-tax.jpg", d: "300×169", folder: "01_Logo_and_Brand_Source", label: "Article art 02" },
    { f: "article-03-non-resident-non-person.jpg", d: "300×169", folder: "01_Logo_and_Brand_Source", label: "Article art 03" },
    { f: "article-04-freedom-to-travel.jpg", d: "300×169", folder: "01_Logo_and_Brand_Source", label: "Article art 04" },

    // 02 — Brand boards
    { f: "board-identity.png", d: "1376×768", folder: "02_Brand_Boards", label: "Brand identity board" },
    { f: "board-logo-system.png", d: "1376×768", folder: "02_Brand_Boards", label: "Logo system sheet" },
    { f: "board-templates.png", d: "1376×768", folder: "02_Brand_Boards", label: "Marketing and social template kit" },
    { f: "board-applications.png", d: "1376×768", folder: "02_Brand_Boards", label: "Brand applications mockup" },

    // 03 — Front covers
    { f: "cover-front-trust-architecture.png", d: "848×1264", folder: "03_Book_Covers_Front", label: "Trust Architecture — front" },
    { f: "cover-front-client-dossier.png", d: "848×1264", folder: "03_Book_Covers_Front", label: "Client Dossier — front" },
    { f: "cover-front-estate-vault.png", d: "848×1264", folder: "03_Book_Covers_Front", label: "Estate Planning Vault — front" },
    { f: "cover-front-bank-packet.png", d: "848×1264", folder: "03_Book_Covers_Front", label: "The Bank Packet — front" },
    { f: "cover-front-know-your-rights.png", d: "848×1264", folder: "03_Book_Covers_Front", label: "Know Your Rights — front" },

    // 04 — Back covers
    { f: "cover-back-trust-architecture.png", d: "848×1264", folder: "04_Book_Covers_Back", label: "Trust Architecture — back" },
    { f: "cover-back-client-dossier.png", d: "848×1264", folder: "04_Book_Covers_Back", label: "Client Dossier — back" },
    { f: "cover-back-estate-vault.png", d: "848×1264", folder: "04_Book_Covers_Back", label: "Estate Planning Vault — back" },
    { f: "cover-back-bank-packet.png", d: "848×1264", folder: "04_Book_Covers_Back", label: "The Bank Packet — back" },
    { f: "cover-back-know-your-rights.png", d: "848×1264", folder: "04_Book_Covers_Back", label: "Know Your Rights — back" },

    // 05 — YouTube thumbnails
    { f: "yt-thumb-trust-architecture.png", d: "1376×768", folder: "05_YouTube_Thumbnails", label: "Thumbnail — 10 Layers of Trust" },
    { f: "yt-thumb-client-dossier.png", d: "1376×768", folder: "05_YouTube_Thumbnails", label: "Thumbnail — Your 7-Phase Game Plan" },
    { f: "yt-thumb-bank-packet.png", d: "1376×768", folder: "05_YouTube_Thumbnails", label: "Thumbnail — Open Your Trust Account" },
    { f: "yt-thumb-estate-vault.png", d: "1376×768", folder: "05_YouTube_Thumbnails", label: "Thumbnail — The Complete Estate Vault" },
    { f: "yt-thumb-know-your-rights.png", d: "1376×768", folder: "05_YouTube_Thumbnails", label: "Thumbnail — Know Your Rights" },

    // 06 — Marketing and mockups
    { f: "mockup-library-lineup.png", d: "1376×768", folder: "06_Marketing_and_Mockups", label: "Library lineup" },
    { f: "mockup-hardcover-tablet.png", d: "1376×768", folder: "06_Marketing_and_Mockups", label: "Hardcover and tablet mockup" },
    { f: "mockup-member-portal.png", d: "1376×768", folder: "06_Marketing_and_Mockups", label: "Member portal — My Materials" },
    { f: "mockup-social-promo-set.png", d: "1376×768", folder: "06_Marketing_and_Mockups", label: "Social promo set" },
    { f: "hero-option-a-centered.png", d: "1376×768", folder: "06_Marketing_and_Mockups", label: "Hero option A — centred (known typo)" },
    { f: "hero-option-b-split.png", d: "1376×768", folder: "06_Marketing_and_Mockups", label: "Hero option B — split (cropped covers)" },

    // 07 — Interior layouts
    { f: "interior-trust-guide.png", d: "1376×768", folder: "07_Interior_Page_Layouts", label: "Trust guide interior pages" },
    { f: "interior-dossier-forms.png", d: "1376×768", folder: "07_Interior_Page_Layouts", label: "Dossier forms and playbook" }
  ];

  var IMG_BASE = "images/";

  /* ----------------------------------------------------------------------
     Small helpers
     ---------------------------------------------------------------------- */

  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  var toastEl = $("#toast");
  var toastTimer = null;
  function toast(msg) {
    if (!toastEl) return;
    toastEl.textContent = msg;
    toastEl.classList.add("show");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(function () {
      toastEl.classList.remove("show");
    }, 2600);
  }

  /* ----------------------------------------------------------------------
     Responsive navigation
     ---------------------------------------------------------------------- */

  var header = $("#siteHeader");
  var navToggle = $("#navToggle");

  if (navToggle && header) {
    navToggle.addEventListener("click", function () {
      var open = header.classList.toggle("nav-open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    // close the mobile menu after a jump
    $$(".nav-list a").forEach(function (a) {
      a.addEventListener("click", function () {
        header.classList.remove("nav-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ----------------------------------------------------------------------
     Scroll spy — highlight the section currently in view
     ---------------------------------------------------------------------- */

  var navLinks = $$(".nav-list a");
  var sections = $$("main section[id]");

  if ("IntersectionObserver" in window && sections.length) {
    var visible = {};

    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        visible[entry.target.id] = entry.isIntersecting ? entry.intersectionRatio : 0;
      });

      var bestId = null;
      var bestRatio = 0;
      Object.keys(visible).forEach(function (id) {
        if (visible[id] > bestRatio) {
          bestRatio = visible[id];
          bestId = id;
        }
      });

      if (bestId) {
        navLinks.forEach(function (a) {
          var match = a.getAttribute("href") === "#" + bestId;
          if (match) {
            a.setAttribute("aria-current", "true");
          } else {
            a.removeAttribute("aria-current");
          }
        });
      }
    }, { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] });

    sections.forEach(function (s) { spy.observe(s); });
  }

  /* ----------------------------------------------------------------------
     Lightbox
     ---------------------------------------------------------------------- */

  var lb = $("#lightbox");
  var lbImg = $("#lightboxImg");
  var lbCaption = $("#lbCaption");
  var lbDownload = $("#lightboxDownload");
  var lbClose = $("#lightboxClose");
  var lastFocused = null;

  function openLightbox(src, caption) {
    if (!lb) return;
    lastFocused = document.activeElement;
    lbImg.src = src;
    lbImg.alt = caption || "Enlarged brand asset";
    lbCaption.textContent = caption || "";
    lbDownload.href = src;
    lbDownload.setAttribute("download", "");
    lb.classList.add("open");
    lb.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    lbClose.focus();
  }

  function closeLightbox() {
    if (!lb) return;
    lb.classList.remove("open");
    lb.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (lastFocused && lastFocused.focus) lastFocused.focus();
  }

  $$("[data-enlarge]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      openLightbox(btn.getAttribute("data-enlarge"), btn.getAttribute("data-caption"));
    });
  });

  if (lbClose) lbClose.addEventListener("click", closeLightbox);

  if (lb) {
    lb.addEventListener("click", function (e) {
      // click on the backdrop (not on the image or buttons) closes
      if (e.target === lb) closeLightbox();
    });
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && lb && lb.classList.contains("open")) closeLightbox();
  });

  /* ----------------------------------------------------------------------
     Copy colour values
     ---------------------------------------------------------------------- */

  function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text);
    }
    // fallback for older browsers / non-secure contexts
    return new Promise(function (resolve, reject) {
      try {
        var ta = document.createElement("textarea");
        ta.value = text;
        ta.setAttribute("readonly", "");
        ta.style.position = "fixed";
        ta.style.top = "-1000px";
        document.body.appendChild(ta);
        ta.select();
        var ok = document.execCommand("copy");
        document.body.removeChild(ta);
        ok ? resolve() : reject(new Error("copy failed"));
      } catch (err) {
        reject(err);
      }
    });
  }

  $$(".hex-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var hex = btn.getAttribute("data-hex");
      copyText(hex).then(function () {
        btn.classList.add("copied");
        var last = btn.lastElementChild;
        if (last) last.textContent = "copied";
        toast(hex + " copied to clipboard");
        window.setTimeout(function () {
          btn.classList.remove("copied");
          if (last) last.textContent = "copy";
        }, 1800);
      }).catch(function () {
        toast("Copy blocked — select the value manually");
      });
    });
  });

  /* ----------------------------------------------------------------------
     Print to PDF — whole guide, or one section
     ---------------------------------------------------------------------- */

  // Images are lazy-loaded for page speed, which means images far down the page
  // may not be decoded yet. Printing immediately would emit blank panels into
  // the PDF, so force every image eager and wait for it before printing.
  function ensureImagesLoaded() {
    var imgs = $$("img");
    imgs.forEach(function (im) { im.loading = "eager"; });

    var pending = imgs.filter(function (im) { return !im.complete; });
    if (!pending.length) return Promise.resolve();

    return Promise.all(pending.map(function (im) {
      return new Promise(function (resolve) {
        var settle = function () { resolve(); };
        im.addEventListener("load", settle, { once: true });
        im.addEventListener("error", settle, { once: true });
        // never let a slow file hang the print dialog
        window.setTimeout(settle, 6000);
      });
    }));
  }

  // Ctrl/Cmd+P must behave like the buttons.
  window.addEventListener("beforeprint", function () {
    $$("img").forEach(function (im) { im.loading = "eager"; });
  });

  function printWhole() {
    document.body.classList.remove("print-section");
    $$(".section").forEach(function (s) { s.classList.remove("print-target"); });
    toast("Preparing PDF…");
    ensureImagesLoaded().then(function () {
      window.print();
    });
  }

  function printSection(id) {
    var target = document.getElementById(id);
    if (!target) { printWhole(); return; }

    $$(".section").forEach(function (s) { s.classList.remove("print-target"); });
    target.classList.add("print-target");
    document.body.classList.add("print-section");

    var cleanup = function () {
      document.body.classList.remove("print-section");
      target.classList.remove("print-target");
      window.removeEventListener("afterprint", cleanup);
    };
    window.addEventListener("afterprint", cleanup);

    window.print();
  }

  $$(".print-section").forEach(function (btn) {
    btn.addEventListener("click", function () {
      printSection(btn.getAttribute("data-target"));
    });
  });

  var guideBtn = $("#guidePdfBtn");
  if (guideBtn) guideBtn.addEventListener("click", printWhole);

  var heroPrint = $("#heroPrint");
  if (heroPrint) heroPrint.addEventListener("click", printWhole);

  /* ----------------------------------------------------------------------
     ZIP assembly
     ---------------------------------------------------------------------- */

  function buildReadme() {
    return [
      "SPC UNIVERSITY — BRAND KIT",
      "School of Private Civics  |  spcuniversity.com",
      "=====================================================",
      "",
      "Taglines:  Substance Over Form",
      "           Law • Commerce • Empowerment",
      "           Knowledge Is Power, Understanding Is Freedom",
      "",
      "FOLDERS",
      "  01_Logo_and_Brand_Source  Logos, original hero, ebook cover, article art",
      "  02_Brand_Boards           Identity, logo system, templates, applications",
      "  03_Book_Covers_Front      Five front covers, 848x1264",
      "  04_Book_Covers_Back       Five back covers, 848x1264",
      "  05_YouTube_Thumbnails     Five thumbnails, 1376x768",
      "  06_Marketing_and_Mockups  Lineup, mockups, portal, hero options",
      "  07_Interior_Page_Layouts  Editorial pages and forms",
      "",
      "COLOURS",
      "  Midnight Navy  #051937   Deep Black     #040D1A",
      "  Electric Cyan  #00D4FF   Cerulean Blue  #0084D1",
      "  Chrome Silver  #E8EEF5   Chrome Mid     #8E9EAB",
      "  Classic Gold   #FFC107   Bronze Gold    #C8963E",
      "",
      "TYPE",
      "  Display:  beveled extended sans (Orbitron / Anton as web substitutes)",
      "  Serif:    warm editorial serif (Libre Baskerville / Georgia)",
      "  Reading:  clean sans (Inter or system UI)",
      "",
      "KNOWN LIMITATIONS",
      "  - No official brand guideline exists; this kit is reconstructed from the",
      "    live site and its artwork. Colours and type are an interpretation.",
      "  - The logo is raster only, about 1600px wide. No vector or transparent",
      "    master is available. Use the compact banner below 120px.",
      "  - Fine lettering inside the crest can blur at small sizes. Composite the",
      "    real logo file over artwork for print and hero placements.",
      "  - The four article images are natively 300x169.",
      "  - Interior pages are layout mockups; the copy is placeholder.",
      "  - The two hero options have defects: option A carries a badge typo,",
      "    option B crops several covers. Rebuild from verified front covers.",
      "",
      "DISCLAIMER",
      "  Educational assets only. Not legal advice.",
      "  Logos and branding are the property of SPC University.",
      ""
    ].join("\n");
  }

  function buildManifestCsv() {
    var head = "folder,filename,label,width_x_height,local_path";
    var rows = ASSETS.map(function (a) {
      return [a.folder, a.f, '"' + a.label + '"', a.d, IMG_BASE + a.f].join(",");
    });
    return [head].concat(rows).join("\n") + "\n";
  }

  function buildBrandNotes() {
    return [
      "# SPC University — Brand Notes",
      "",
      "Reconstructed identity for the School of Private Civics.",
      "",
      "## Logos",
      "| Mark | File | Size | Use |",
      "|---|---|---|---|",
      "| Primary crest | logo-primary.jpg | 1599x899 | Hero, cover tops, presentations |",
      "| Compact banner | logo-compact.png | 220x95 | Headers, navigation, footers |",
      "| Atlas icon | icon-atlas.png | 150x150 | Avatars, favicons, app tiles |",
      "",
      "## Colour",
      "| Name | Hex | Role |",
      "|---|---|---|",
      "| Midnight Navy | #051937 | Primary background |",
      "| Deep Black | #040D1A | Logo panels |",
      "| Electric Cyan | #00D4FF | Glow, links, energy |",
      "| Cerulean Blue | #0084D1 | Icon, secondary |",
      "| Chrome Silver | #E8EEF5 | Metal, display type |",
      "| Chrome Mid | #8E9EAB | Captions, secondary metal |",
      "| Classic Gold | #FFC107 | Callouts, CTAs |",
      "| Bronze Gold | #C8963E | Ebook metal, fine rules |",
      "",
      "## Product line",
      "| Title | Subtitle | Role |",
      "|---|---|---|",
      "| Trust Architecture | The 10-Layer Framework | Core doctrine |",
      "| Client Dossier | Strategy Session Playbook, 7 Phases | Process |",
      "| The Bank Packet | Trust Account Opening Kit | Execution |",
      "| The Estate Planning Vault | Complete Edition | Flagship |",
      "| Know Your Rights | What Works in Court | Entry title |",
      "",
      "## Guardrails",
      "- No immunity, guarantee or urgency claims.",
      "- Every back cover carries: For educational purposes only. Not legal advice.",
      "- Gold is an accent, never a background.",
      ""
    ].join("\n");
  }

  // Fetch one image as an array buffer, for zip inclusion.
  function fetchAsset(name) {
    return fetch(IMG_BASE + name, { cache: "force-cache" }).then(function (r) {
      if (!r.ok) throw new Error("HTTP " + r.status + " for " + name);
      return r.arrayBuffer();
    });
  }

  var zipBtn = $("#zipBtn");
  var zipProgress = $("#zipProgress");
  var zipFill = $("#zipFill");
  var zipLabel = $("#zipLabel");

  function setProgress(done, total, labelText) {
    if (!zipProgress) return;
    zipProgress.classList.add("active");
    var pct = total ? Math.round((done / total) * 100) : 0;
    if (zipFill) zipFill.style.width = pct + "%";
    if (zipLabel) zipLabel.textContent = labelText || (done + " of " + total + " files  —  " + pct + "%");
  }

  function saveBlob(blob, filename) {
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    // give the browser a moment before revoking
    window.setTimeout(function () { URL.revokeObjectURL(url); }, 15000);
  }

  function buildZip(list, zipName, btn) {
    if (typeof window.JSZip === "undefined") {
      toast("ZIP library did not load — use the per-file downloads");
      return;
    }

    var original = btn ? btn.textContent : "";
    if (btn) { btn.disabled = true; btn.textContent = "Building…"; }

    var zip = new window.JSZip();
    var done = 0;
    var failed = [];

    setProgress(0, list.length, "Reading files…");

    var chain = Promise.resolve();

    list.forEach(function (asset) {
      chain = chain.then(function () {
        return fetchAsset(asset.f).then(function (buf) {
          zip.file(asset.folder + "/" + asset.f, buf);
          done++;
          setProgress(done, list.length, "Adding " + done + " of " + list.length + "  —  " + asset.f);
        }).catch(function (err) {
          failed.push(asset.f);
          done++;
          setProgress(done, list.length, "Skipped " + asset.f);
          // keep going: one missing file must not sink the archive
          if (window.console && console.warn) console.warn("ZIP skip:", asset.f, err && err.message);
        });
      });
    });

    chain.then(function () {
      // Always include the documentation files, once per archive.
      zip.file("README.txt", buildReadme());
      zip.file("MANIFEST.csv", buildManifestCsv());
      zip.file("BRAND_KIT.md", buildBrandNotes());

      if (zipLabel) zipLabel.textContent = "Compressing…";

      return zip.generateAsync({ type: "blob", compression: "DEFLATE", compressionOptions: { level: 6 } });
    }).then(function (blob) {
      saveBlob(blob, zipName);
      var sizeMb = (blob.size / (1024 * 1024)).toFixed(1);
      if (failed.length) {
        toast("Saved " + zipName + " (" + sizeMb + " MB) — " + failed.length + " file(s) skipped");
        if (zipLabel) zipLabel.textContent = "Saved " + zipName + " (" + sizeMb + " MB). Skipped: " + failed.join(", ");
      } else {
        toast("Saved " + zipName + " — " + sizeMb + " MB");
        if (zipLabel) zipLabel.textContent = "Saved " + zipName + " (" + sizeMb + " MB, " + list.length + " images)";
      }
    }).catch(function (err) {
      toast("ZIP build failed: " + (err && err.message ? err.message : "unknown error"));
      if (zipLabel) zipLabel.textContent = "ZIP build failed. Try again, or use the per-folder zips.";
    }).then(function () {
      if (btn) { btn.disabled = false; btn.textContent = original; }
    });
  }

  if (zipBtn) {
    zipBtn.addEventListener("click", function () {
      buildZip(ASSETS, "SPC_University_Brand_Kit.zip", zipBtn);
    });
  }

  var heroDownload = $("#heroDownload");
  if (heroDownload) {
    heroDownload.addEventListener("click", function () {
      var hub = document.getElementById("downloads");
      if (hub) hub.scrollIntoView({ behavior: "smooth", block: "start" });
      window.setTimeout(function () {
        if (zipBtn) zipBtn.focus();
      }, 600);
    });
  }

  // Per-folder zips
  $$(".folder-zip").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var folder = btn.getAttribute("data-folder");
      var list = ASSETS.filter(function (a) { return a.folder === folder; });
      if (!list.length) { toast("No files found for that folder"); return; }
      buildZip(list, folder + ".zip", btn);
    });
  });

  /* ----------------------------------------------------------------------
     Warm the cache for kit files after the page settles, so the ZIP button
     feels instant. Skipped on save-data connections.
     ---------------------------------------------------------------------- */

  var conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  var saveData = conn && (conn.saveData || /2g/.test(conn.effectiveType || ""));

  if (!saveData && "requestIdleCallback" in window) {
    window.requestIdleCallback(function () {
      ASSETS.forEach(function (a) {
        // prefetch only; failure is silent and harmless
        fetch(IMG_BASE + a.f, { cache: "force-cache" }).catch(function () {});
      });
    }, { timeout: 6000 });
  }
})();
