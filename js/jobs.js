/* Hub Zone — Jobs board.
   Today: reads window.HZ_JOBS (data/jobs.js).
   Later: swap loadJobs() for a fetch to the Hub Zone Data Center API.
   UI text follows the site's EN/ES switch (<html lang>). Job content stays as written. */
(function () {
  const $ = (s, el = document) => el.querySelector(s);
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const T = {
    en: {
      count: (n) => n === 1 ? "1 open job" : `${n} open jobs`,
      allCat: "All job types", allLoc: "All locations", allWork: "Any work style",
      clear: "Clear filters", view: "View job", notPublic: "Not public yet",
      empty: "No jobs match that search.", emptyTry: "Clear the filters, or", emptySend: "send us your info",
      today: "Posted today", day: "Posted 1 day ago", days: (n) => `Posted ${n} days ago`, months: (n) => n === 1 ? "Posted 1 month ago" : `Posted ${n} months ago`,
      close: "Close", pay: "Pay", exp: "Experience", industry: "Industry", benefits: "Benefits",
      applyT: "Apply for this job", applyNow: "Apply now", sendInfo: "Send us your info",
      applyNote: "You will apply on our secure application page. Upload your resume or use LinkedIn or Indeed. A Hub Zone recruiter reaches out within 1 business day.",
      applySoon: "Online applications for this job open soon. Send us your info, or call or text (843) 267-5538.",
      jobType: { "Full-time": "Full-time", "Part-time": "Part-time", "Contract": "Contract" },
      work: { "On-site": "On-site", "Hybrid": "Hybrid", "Remote": "Remote" }
    },
    es: {
      count: (n) => n === 1 ? "1 empleo abierto" : `${n} empleos abiertos`,
      allCat: "Todos los tipos", allLoc: "Todas las ubicaciones", allWork: "Cualquier modalidad",
      clear: "Borrar filtros", view: "Ver empleo", notPublic: "Aún no público",
      empty: "Ningún empleo coincide con esa búsqueda.", emptyTry: "Borre los filtros, o", emptySend: "envíenos sus datos",
      today: "Publicado hoy", day: "Publicado hace 1 día", days: (n) => `Publicado hace ${n} días`, months: (n) => n === 1 ? "Publicado hace 1 mes" : `Publicado hace ${n} meses`,
      close: "Cerrar", pay: "Salario", exp: "Experiencia", industry: "Industria", benefits: "Beneficios",
      applyT: "Solicite este empleo", applyNow: "Solicitar ahora", sendInfo: "Envíenos sus datos",
      applyNote: "Solicitará en nuestra página segura. Suba su currículum o use LinkedIn o Indeed. Un reclutador de Hub Zone le contacta en 1 día laborable.",
      applySoon: "Las solicitudes en línea para este empleo abren pronto. Envíenos sus datos, o llame o envíe texto al (843) 267-5538.",
      jobType: { "Full-time": "Tiempo completo", "Part-time": "Medio tiempo", "Contract": "Contrato" },
      work: { "On-site": "Presencial", "Hybrid": "Híbrido", "Remote": "Remoto" }
    }
  };
  const lang = () => (document.documentElement.lang === "es" ? "es" : "en");
  const t = () => T[lang()];
  const tr = (map, v) => (map && map[v]) || v;

  async function loadJobs() {
    return (window.HZ_JOBS || []).filter((j) => j.status === "open").sort((a, b) => b.postedAt.localeCompare(a.postedAt));
  }

  function ago(d) {
    const days = Math.max(0, Math.round((Date.now() - new Date(d + "T12:00:00")) / 864e5));
    const L = t();
    if (days === 0) return L.today;
    if (days === 1) return L.day;
    if (days < 30) return L.days(days);
    return L.months(Math.max(1, Math.round(days / 30)));
  }

  let jobs = [];
  let openId = null;
  const els = {};

  function fillSelect(sel, values, label, map) {
    const keep = sel.value;
    sel.innerHTML = `<option value="">${esc(label)}</option>` +
      [...new Set(values.filter(Boolean))].sort().map((v) => `<option value="${esc(v)}">${esc(tr(map, v))}</option>`).join("");
    sel.value = keep;
  }

  function fillFilters() {
    const L = t();
    fillSelect(els.cat, jobs.map((j) => j.category), L.allCat);
    fillSelect(els.loc, jobs.map((j) => j.city), L.allLoc);
    els.clear.textContent = L.clear;
  }

  const filtersOn = () => !!(els.q.value.trim() || els.cat.value || els.loc.value);

  function chips(j) {
    const L = t();
    return `<span class="chips"><span class="chip">${esc(j.city)}, ${esc(j.region)}</span><span class="chip">${esc(tr(L.jobType, j.workType))}</span>${j.workplace ? `<span class="chip plain">${esc(tr(L.work, j.workplace))}</span>` : ""}</span>`;
  }

  function render() {
    const L = t();
    const q = els.q.value.trim().toLowerCase();
    const cat = els.cat.value, loc = els.loc.value;
    const list = jobs.filter((j) =>
      (!q || [j.title, j.summary, j.category, j.industry, j.city].join(" ").toLowerCase().includes(q)) &&
      (!cat || j.category === cat) && (!loc || j.city === loc));
    els.count.textContent = L.count(list.length);
    els.clear.hidden = !filtersOn();
    els.grid.innerHTML = list.length ? list.map((j) => `
      <button class="job-card" type="button" data-id="${esc(j.id)}">
        <span class="card-top"><span class="cat">${esc(j.category)}</span></span>
        <h3>${esc(j.title)}</h3>
        <p class="sum">${esc(j.summary)}</p>
        ${chips(j)}
        <span class="foot"><span>${esc(ago(j.postedAt))}</span><span class="go">${esc(L.view)} <span aria-hidden="true">→</span></span></span>
      </button>`).join("")
      : `<div class="jobs-empty"><p><strong>${esc(L.empty)}</strong></p><p>${esc(L.emptyTry)} <a href="#send-info">${esc(L.emptySend)}</a>.</p></div>`;
  }

  function open(id, push = true) {
    const j = jobs.find((x) => x.id === id);
    if (!j) return;
    const L = t();
    openId = id;
    const body = j.description.map((s) => `<h3>${esc(s.h)}</h3>` +
      (s.p || []).map((p) => `<p>${esc(p)}</p>`).join("") +
      (s.list ? `<ul>${s.list.map((li) => `<li>${esc(li)}</li>`).join("")}</ul>` : "")).join("");
    els.panel.innerHTML = `
      <div class="panel-top"><span class="cat">${esc(j.category)}</span><button class="close" type="button" data-close>${esc(L.close)} <span aria-hidden="true">✕</span></button></div>
      <h2 id="job-title">${esc(j.title)}</h2>
      ${chips(j)}
      <div class="facts">
        ${[[L.pay, j.salaryText], [L.exp, j.experienceYears], [L.industry, j.industry], [L.benefits, (j.benefits || []).join(", ")]].filter(([, v]) => v).map(([k, v]) => `<div class="fact"><b>${esc(k)}</b>${esc(v)}</div>`).join("")}
      </div>
      ${applyButton(j, L)}
      ${body}
      <div class="apply">
        <h3>${esc(L.applyT)}</h3>
        <p class="note">${esc(j.applyUrl ? L.applyNote : L.applySoon)}</p>
        ${applyButton(j, L)}
      </div>`;
    if (els.drawer.hidden) {
      els.drawer.hidden = false;
      document.body.style.overflow = "hidden";
      els.panel.scrollTop = 0;
      $(".close", els.panel).focus();
    }
    if (push) history.replaceState(null, "", "#" + j.id);
  }

  // Apply = the job's secure PCR application page (resume, LinkedIn or Indeed go straight into PCR).
  // No apply link yet → send them to the general "send us your info" form.
  function applyButton(j, L) {
    if (j.applyUrl) {
      return `<a class="btn btn-primary apply-btn" href="${esc(j.applyUrl)}" target="_blank" rel="noopener">${esc(L.applyNow)} <span aria-hidden="true">↗</span></a>`;
    }
    return `<a class="btn btn-ghost apply-btn" href="#send-info" data-close>${esc(L.sendInfo)}</a>`;
  }

  function close() {
    els.drawer.hidden = true;
    openId = null;
    document.body.style.overflow = "";
    history.replaceState(null, "", location.pathname + location.search);
    const card = els.grid.querySelector(".job-card");
    if (card) card.focus({ preventScroll: true });
  }

  document.addEventListener("DOMContentLoaded", async () => {
    ["q", "cat", "loc", "grid", "count", "drawer", "panel", "clear"].forEach((k) => (els[k] = document.getElementById("jobs-" + k)));
    if (!els.grid) return;
    jobs = await loadJobs();
    fillFilters();
    ["input", "change"].forEach((ev) => [els.q, els.cat, els.loc].forEach((el) => el.addEventListener(ev, render)));
    els.clear.addEventListener("click", () => { els.q.value = ""; els.cat.value = ""; els.loc.value = ""; render(); els.q.focus(); });
    els.grid.addEventListener("click", (e) => { const c = e.target.closest(".job-card"); if (c) open(c.dataset.id); });
    els.drawer.addEventListener("click", (e) => { if (e.target.closest("[data-close]") || e.target.matches(".scrim")) close(); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !els.drawer.hidden) close(); });
    // Re-draw UI text when the EN/ES switch changes <html lang>.
    new MutationObserver(() => { fillFilters(); render(); if (openId) open(openId, false); })
      .observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] });
    render();
    if (location.hash && location.hash.startsWith("#HZ-")) open(location.hash.slice(1), false);
  });
})();
