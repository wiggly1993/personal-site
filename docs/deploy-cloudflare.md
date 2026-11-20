# Deploy: Cloudflare Pages

The owner connects the repo in the Cloudflare dashboard. Steps:

1. Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Authorize GitHub, pick `wiggly1993/personal-site`.
3. Framework preset: **Astro**. Build command: `npm run build`. Output directory: `dist`.
4. Environment variable: `NODE_VERSION` = `26` (`.nvmrc` also pins 26; Astro needs ≥ 22.23.4).
5. **Save and Deploy.** Every push to `main` redeploys automatically.
6. Custom domain: project → **Custom domains** → add the domain (€10–15/year), follow the DNS prompts.
7. After the domain is live, set `site` in `astro.config.mjs` to the real URL (needed for sitemap and OG tags).
