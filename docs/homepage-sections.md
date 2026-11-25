# Homepage sections (order in `src/config/sections.ts`)

1. **Hero:** "Beniamin Jablonski" + tagline ("I build AI systems — from fine-tuned LLMs and agents to vision and generative models."). Background `title_background.png` (dark neural-network look) with a dark overlay for readability.
2. **FeaturedProjects:** projects with `featured: true`, sorted by `order`, alternating light/dark tiles.
3. **ProjectGrid:** all other projects, category filter chips (vanilla JS, works without JS too).
4. **Skills:** generated from the union of all project tags, grouped by category.
5. **About:** short bio + compact CV timeline and languages (`cv`, `languages` in `site.ts`, taken from the owner's CV).
6. **Contact:** email, phone, GitHub, LinkedIn from `src/config/site.ts`. TODO(owner): LinkedIn.
