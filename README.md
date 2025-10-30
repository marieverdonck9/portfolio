# Marie Verdonck — Portfolio

Local dev and build instructions for the portfolio site.

Getting started

1. Install dependencies

```zsh
npm install
```

2. Start development server

```zsh
npm start
```

3. Build for production

```zsh
npm run build
```

Notes and quick checklist

- Place a one-page PDF CV at `/public/Marie_Verdonck_CV.pdf` so the "Download CV" button works.
- Tailwind is used; if you change classes, ensure `tailwind.config.js` and PostCSS are set up (they are present in the repo).
- Images are stored in `src/assets` — consider optimizing (jpeg/webp) for faster load.

What I changed (high level)

- Added a top header and clearer navigation.
- Reworked the Profile card with a strong headline, CTAs (Download CV / Contact) and hiring intent.
- Added a featured projects strip to highlight 3 projects for hiring managers.
- Improved project cards with compact featured variant, consistent image sizing and better descriptions.
- Marked three projects as featured in `src/projectInfo.js`.
- Added small CSS helper classes for line-clamping.

Next steps I recommend

1. Add `public/Marie_Verdonck_CV.pdf` (one-page tailored CV).
2. Review featured projects and choose 2–3 to expand into short case studies (problem, approach, impact / results).
3. Optionally add a short testimonials / collaborators section or include quantified outcomes (e.g., 'reduced assay time by X', 'improved sensitivity by Y').
4. Run `npm run build` and open `build/index.html` to verify visuals and fix any runtime issues.

If you'd like, I can run the build and fix any errors, generate a compact one-page CV template, or help write two targeted case study pages for translational immuno-oncology roles.
