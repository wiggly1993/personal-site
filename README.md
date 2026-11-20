# Beniamin Jablonski · AI Projects

Static portfolio site built with Astro. Hosted on Cloudflare Pages: every push to `main` deploys.

## Run locally

```sh
source .venv/bin/activate && npm install
source .venv/bin/activate && npm run dev     # http://localhost:4321
source .venv/bin/activate && npm run build   # output in dist/
```

Never install anything globally. See `docs/environment.md`.

## Add a project (3 steps)

1. Create a folder `src/content/projects/<your-slug>/`.
2. Add `index.md` inside it. Copy the frontmatter from an existing project and edit it (fields: `docs/project-schema.md`).
3. Put any images next to `index.md` and reference them as `./image.png` in `cover` / `gallery`. Run `npm run build` to check.

## Remove or hide a project

- Delete its folder, **or** set `draft: true` in its frontmatter.

## Other edits

- Feature / reorder: `featured` and `order` in the frontmatter.
- Homepage sections: `src/config/sections.ts`.
- Name, bio, contact links: `src/config/site.ts`.
- Colors, fonts, spacing: `src/styles/tokens.css`.

All project docs: `CLAUDE.md`.
