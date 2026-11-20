# Repo structure

```
personal-site/
├── CLAUDE.md  README.md  docs/       ← documentation
├── astro.config.mjs  package.json  tsconfig.json  .gitignore
├── public/            favicon.svg, cv.pdf (optional, later)
└── src/
    ├── config/        site.ts (name, socials, nav) · sections.ts (homepage order)
    ├── content.config.ts              ← Zod schema, "projects" collection
    ├── content/projects/<slug>/       ← index.md + images next to it
    ├── assets/site/                   ← site-wide images (hero bg)
    ├── styles/        tokens.css · global.css
    ├── layouts/       BaseLayout.astro (head, SEO/OG, Nav, Footer)
    ├── components/
    │   ├── Nav.astro  Footer.astro
    │   ├── sections/  Hero, FeaturedProjects, ProjectGrid, Skills, About, Contact
    │   └── ui/        ProjectTile, ProjectCard, MetricStat, Gallery, Reveal
    ├── scripts/       reveal.ts (IntersectionObserver, reduced-motion aware)
    └── pages/         index.astro · projects/index.astro · projects/[slug].astro · 404.astro
```
