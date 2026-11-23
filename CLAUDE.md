# CLAUDE.md — Beniamin Jablonski · Personal AI Projects Site

Static Apple-style portfolio of AI/deep-learning projects. Astro + plain CSS, hosted free on Cloudflare Pages. One folder per project.

## Working rules
- **NEVER install globally:** no brew, npm -g, system pip, sudo.
- Use only the local `.venv`. Start every Bash command with `source .venv/bin/activate &&` (Node/npm via nodeenv; check: `which node && node -v`).
- `.venv` stays in `.gitignore`.
- No `gh`: give manual github.com + `git remote add` commands.
- Ask before pushing, deleting, new dependencies, schema changes.
- Never fabricate facts; use `TODO(owner)`. Docs ≤ 200 words each.
- More: `docs/working-rules.md`, `docs/environment.md`

## Docs library (`docs/`)
- `mission.md` — goals · `locations.md` — paths
- `tech-stack.md` · `repo-structure.md` · `modularity.md`
- `project-schema.md` — Zod schema
- `design-colors-type.md` · `design-layout-motion.md`
- `homepage-sections.md` · `images.md`
- `content-writing-rules.md` → `seed/*.md` (facts per project)
- `first-run-tasks.md` — progress checklist
- `deploy-cloudflare.md` · `visual-check.md` — screenshot workflow
- `../README.md` — add/remove a project · `../AGENTS.md` — Astro dev tips
