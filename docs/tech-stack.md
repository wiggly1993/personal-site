# Tech stack

- **Astro** (latest, currently 7.x), static output, TypeScript strict.
- **Content Collections** with a Zod schema, so every project is validated at build time. See [project-schema.md](project-schema.md).
- **Plain CSS** with design tokens (CSS custom properties). No Tailwind, no UI framework, no React.
- **JS:** tiny, vanilla, only for nav and scroll reveals.
- **Images:** Astro `<Image />` / `astro:assets` (automatic WebP/AVIF, responsive sizes, lazy loading).
- **Font:** `@fontsource-variable/inter`, self-hosted.
- **Sitemap:** `@astrojs/sitemap`.
- **Node + npm:** from the local `.venv` (nodeenv), never global. See [environment.md](environment.md).
- **Hosting:** Cloudflare Pages, build `npm run build`, output `dist`. Push to `main` deploys. See [deploy-cloudflare.md](deploy-cloudflare.md).
