# Hub Zone Staffing website (v1, 2026-11-24)

Plain HTML + `css/styles.css` + `js/main.js` + `js/i18n.js`. No build step. Drag this folder into Netlify to deploy.

## Files
- Pages: `index.html`, `find-a-job.html`, `hire-talent.html`, `services.html`, `about.html`, `contact.html`, `privacy.html`, `terms.html`, `thank-you.html`
- `assets/`: logo SVGs (light + dark), favicon (`hubzone-icon.svg`), app icon
- `js/i18n.js`: all Spanish text, keyed by the `data-i18n="…"` attribute on each element. English lives in the HTML. To change a sentence, edit it in both places.
- `js/main.js`: EN/ES switch (saved in the browser), mobile menu, "Add more (optional)" toggle, resume file name + 8 MB check.

## Swap teal for gold (wolf brand)
Change the 4 `--accent*` values at the top of `css/styles.css` (example gold values are in the comment there).

## Forms (Netlify Forms)
- `candidate` (Find a Job, with resume upload), `company` (Hire Talent), `contact` (Contact). All redirect to `thank-you.html`.
- Each form sends a hidden `language` field (en/es) so the recruiter knows which language to reply in.
- After first deploy: Netlify → Forms → enable form detection, then add an email notification to javier@hubzonellc.com.
- ⚠️ Check Netlify's current free-plan limits on form submissions and **file upload storage** before launch. Resumes can use that up fast. Backup plan: make resume optional (it already is) and ask for it by email.

## Placeholders to fill (search the HTML for `placeholder`)
1. Founder headshot (home + about) → add as `assets/founder.jpg` and replace the dashed box.
2. Founder full name + title (about).
3. Founder story in his own words (home) and short bio (about).
4. Open roles list (find-a-job).
5. Social links: 6 icons in every footer use `href="#"` (Facebook, Instagram, YouTube, X, LinkedIn, TikTok).
6. Privacy Policy + Terms are drafts: lawyer review needed. Cookie Policy + Accessibility pages not built yet.
7. Job type dropdown categories (find-a-job) are a best guess: confirm with him.
8. No testimonials on purpose: add only real ones, with permission.
