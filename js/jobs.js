/* Hub Zone — Jobs board (sample).
   Today: reads window.HZ_JOBS (data/jobs.js).
   Later: swap loadJobs() for a fetch to the Hub Zone Data Center API. */
(function () {
  const $ = (s, el = document) => el.querySelector(s);
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  async function loadJobs() {
    return (window.HZ_JOBS || []).slice().sort((a, b) => b.postedAt.localeCompare(a.postedAt));
  }

  const ago = (d) => {
    const days = Math.max(0, Math.round((Date.now() - new Date(d + "T12:00:00")) / 864e5));
    return days === 0 ? "Posted today" : days === 1 ? "Posted 1 day ago" : days < 30 ? `Posted ${days} days ago` : `Posted ${Math.round(days / 30)} mo ago`;
  };

  let jobs = [];
  const els = {};

  function fillSelect(sel, values, label) {
    sel.innerHTML = `<option value="">${label}</option>` + [...new Set(values)].sort().map((v) => `<option>${esc(v)}</option>`).join("");
  }

  function render() {
    const q = els.q.value.trim().toLowerCase();
    const cat = els.cat.value, loc = els.loc.value, type = els.type.value;
    const list = jobs.filter((j) =>
      (!q || [j.title, j.summary, j.category, j.industry].join(" ").toLowerCase().includes(q)) &&
      (!cat || j.category === cat) && (!loc || j.city === loc) && (!type || j.workplace === type));
    els.count.textContent = `${list.length} open ${list.length === 1 ? "job" : "jobs"}`;
    els.grid.innerHTML = list.length ? list.map((j) => `
      <button class="job-card" type="button" data-id="${esc(j.id)}">
        <span class="cat">${esc(j.category)}${j.showOnWeb ? "" : " · <span style=\"color:#b45309\">Preview: not public yet</span>"}</span>
        <h3>${esc(j.title)}</h3>
        <p class="sum">${esc(j.summary)}</p>
        <span class="chips"><span class="chip">${esc(j.city)}, ${esc(j.region)}</span><span class="chip">${esc(j.workType)}</span><span class="chip plain">${esc(j.workplace)}</span></span>
        <span class="foot"><span>${ago(j.postedAt)}</span><span class="go">View job →</span></span>
      </button>`).join("") : `<div class="jobs-empty">No jobs match that search yet. Try fewer filters, or <a href="find-a-job.html">send us your info</a> and we'll reach out when one fits.</div>`;
  }

  function open(id, push = true) {
    const j = jobs.find((x) => x.id === id);
    if (!j) return;
    const body = j.description.map((s) => `<h3>${esc(s.h)}</h3>` +
      (s.p || []).map((p) => `<p>${esc(p)}</p>`).join("") +
      (s.list ? `<ul>${s.list.map((li) => `<li>${esc(li)}</li>`).join("")}</ul>` : "")).join("");
    els.panel.innerHTML = `
      <button class="close" type="button" data-close>Close ✕</button>
      <span class="cat" style="color:var(--accent-strong);font-weight:700">${esc(j.category)} · ${esc(j.id)}</span>
      <h2 id="job-title">${esc(j.title)}</h2>
      <div class="chips"><span class="chip">${esc(j.city)}, ${esc(j.region)}</span><span class="chip">${esc(j.workType)}</span><span class="chip plain">${esc(j.workplace)}</span></div>
      <div class="facts">
        <div class="fact"><b>Pay</b>${esc(j.salaryText)}</div>
        <div class="fact"><b>Experience</b>${esc(j.experienceYears)}</div>
        <div class="fact"><b>Industry</b>${esc(j.industry)}</div>
        <div class="fact"><b>Benefits</b>${esc(j.benefits.join(", "))}</div>
      </div>
      ${body}
      <form class="apply" novalidate>
        <h3>Apply for this job</h3>
        <p class="note">Takes about a minute. A Hub Zone recruiter reaches out within 1 business day.</p>
        <div class="row">
          <label>Full name<input name="name" required autocomplete="name"></label>
          <label>Phone<input name="phone" type="tel" required autocomplete="tel"></label>
        </div>
        <div class="row">
          <label>Email<input name="email" type="email" required autocomplete="email"></label>
          <label>LinkedIn (optional)<input name="linkedin" type="url" placeholder="https://linkedin.com/in/…"></label>
        </div>
        <label>Resume (PDF or Word)<input name="resume" type="file" accept=".pdf,.doc,.docx"></label>
        <label class="consent"><input type="checkbox" name="consent" required> I agree that Hub Zone may store my info to contact me about jobs, as described in the Privacy Policy.</label>
        <button class="btn btn-primary" type="submit">Send application</button>
      </form>`;
    els.drawer.hidden = false;
    document.body.style.overflow = "hidden";
    $(".close", els.panel).focus();
    if (push) history.replaceState(null, "", "#" + j.id);
    $("form", els.panel).addEventListener("submit", (e) => {
      e.preventDefault();
      const f = e.target;
      if (!f.reportValidity()) return;
      // SAMPLE ONLY: nothing is sent or stored. Real version posts to the Hub Zone Data Center.
      f.outerHTML = `<div class="apply-done">Sample only: nothing was sent. In the real version this application goes straight into the Hub Zone Data Center, linked to job ${esc(j.id)}.</div>`;
    });
  }

  function close() {
    els.drawer.hidden = true;
    document.body.style.overflow = "";
    history.replaceState(null, "", location.pathname);
  }

  document.addEventListener("DOMContentLoaded", async () => {
    ["q", "cat", "loc", "type", "grid", "count", "drawer", "panel"].forEach((k) => (els[k] = document.getElementById("jobs-" + k)));
    jobs = await loadJobs();
    fillSelect(els.cat, jobs.map((j) => j.category), "All categories");
    fillSelect(els.loc, jobs.map((j) => j.city), "All locations");
    fillSelect(els.type, jobs.map((j) => j.workplace), "On-site / hybrid / remote");
    ["input", "change"].forEach((ev) => [els.q, els.cat, els.loc, els.type].forEach((el) => el.addEventListener(ev, render)));
    els.grid.addEventListener("click", (e) => { const c = e.target.closest(".job-card"); if (c) open(c.dataset.id); });
    els.drawer.addEventListener("click", (e) => { if (e.target.matches("[data-close], .scrim")) close(); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !els.drawer.hidden) close(); });
    render();
    if (location.hash) open(location.hash.slice(1), false);
  });
})();
