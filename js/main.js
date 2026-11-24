/* Hub Zone Staffing: small site script (no dependencies).
   - English / Español switch (choice saved in localStorage)
   - mobile menu
   - "Add more (optional)" toggle on the candidate form
   - resume file name + size check */
(function () {
  "use strict";

  var STORE_KEY = "hz-lang";
  var ES = window.HZ_ES || {};
  var nodes = [];   // { el, en } for text
  var attrs = [];   // { el, attr, key, en }

  function readLang() {
    try {
      var saved = localStorage.getItem(STORE_KEY);
      if (saved === "en" || saved === "es") return saved;
    } catch (e) { /* storage blocked: fall through */ }
    var nav = (navigator.language || "en").toLowerCase();
    return nav.indexOf("es") === 0 ? "es" : "en";
  }

  function saveLang(lang) {
    try { localStorage.setItem(STORE_KEY, lang); } catch (e) { /* ignore */ }
  }

  function collect() {
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      nodes.push({ el: el, key: el.getAttribute("data-i18n"), en: el.innerHTML });
    });
    // data-i18n-attr="placeholder:key; aria-label:key2"
    document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      el.getAttribute("data-i18n-attr").split(";").forEach(function (pair) {
        var p = pair.split(":");
        if (p.length < 2) return;
        var attr = p[0].trim(), key = p[1].trim();
        attrs.push({ el: el, attr: attr, key: key, en: el.getAttribute(attr) || "" });
      });
    });
  }

  function apply(lang) {
    nodes.forEach(function (n) {
      var next = lang === "es" && ES[n.key] != null ? ES[n.key] : n.en;
      if (n.el.innerHTML !== next) n.el.innerHTML = next;
    });
    attrs.forEach(function (a) {
      var next = lang === "es" && ES[a.key] != null ? ES[a.key] : a.en;
      a.el.setAttribute(a.attr, next);
    });
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-lang-btn]").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-lang-btn") === lang));
    });
    // Tell the recruiter which language the person used
    document.querySelectorAll("input[name='language']").forEach(function (i) { i.value = lang; });
    refreshFileLabel();
  }

  var currentLang = "en";
  function setLang(lang) {
    currentLang = lang;
    saveLang(lang);
    apply(lang);
  }

  /* ---------- Mobile menu ---------- */
  function initMenu() {
    var btn = document.querySelector(".menu-toggle");
    var nav = document.getElementById("site-nav");
    if (!btn || !nav) return;
    function close() { nav.classList.remove("is-open"); btn.setAttribute("aria-expanded", "false"); }
    btn.addEventListener("click", function () {
      var open = !nav.classList.contains("is-open");
      nav.classList.toggle("is-open", open);
      btn.setAttribute("aria-expanded", String(open));
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("is-open")) { close(); btn.focus(); }
    });
    window.addEventListener("resize", function () { if (window.innerWidth > 920) close(); });
  }

  /* ---------- Optional fields toggle ---------- */
  function initMoreToggle() {
    document.querySelectorAll(".more-toggle").forEach(function (btn) {
      var panel = document.getElementById(btn.getAttribute("aria-controls"));
      if (!panel) return;
      btn.addEventListener("click", function () {
        var open = btn.getAttribute("aria-expanded") !== "true";
        btn.setAttribute("aria-expanded", String(open));
        panel.hidden = !open;
        if (open) {
          var first = panel.querySelector("input, textarea, select");
          if (first) first.focus();
        }
      });
    });
  }

  /* ---------- Resume picker ---------- */
  var MAX_BYTES = 8 * 1024 * 1024; // keep uploads small (Netlify request limit)
  var fileInput, fileWrap, fileName, fileError;

  function t(key, en) { return currentLang === "es" && ES[key] ? ES[key] : en; }

  function refreshFileLabel() {
    if (!fileInput || !fileName) return;
    var f = fileInput.files && fileInput.files[0];
    fileWrap.classList.toggle("has-file", !!f);
    fileName.textContent = f ? f.name : t("form.file.none", "PDF, Word or a photo. Max 8 MB.");
  }

  function initFile() {
    fileInput = document.getElementById("resume");
    if (!fileInput) return;
    fileWrap = fileInput.closest(".file-drop");
    fileName = document.getElementById("resume-name");
    fileError = document.getElementById("resume-error");
    fileInput.addEventListener("change", function () {
      var f = fileInput.files && fileInput.files[0];
      if (f && f.size > MAX_BYTES) {
        fileInput.value = "";
        fileError.hidden = false;
        fileError.textContent = t("form.file.big", "That file is over 8 MB. Try a PDF or a smaller photo.");
      } else {
        fileError.hidden = true;
      }
      refreshFileLabel();
    });
  }

  /* ---------- Boot ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    collect();
    document.querySelectorAll("[data-lang-btn]").forEach(function (b) {
      b.addEventListener("click", function () { setLang(b.getAttribute("data-lang-btn")); });
    });
    initMenu();
    initMoreToggle();
    initFile();
    var y = document.getElementById("year");
    if (y) y.textContent = String(new Date().getFullYear());
    currentLang = readLang();
    apply(currentLang);
  });
})();
