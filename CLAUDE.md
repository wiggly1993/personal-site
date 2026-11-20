CLAUDE.md — Beniamin Jablonski · Personal AI Projects Site
1. Mission prepared github repo currently empty: https://github.com/wiggly1993/personal-site.git 
Build a personal portfolio website showing my AI / deep-learning projects.
* Look & feel: as close as possible the style of apple.com (product pages like iPhone/MacBook). Lots of whitespace, huge confident headlines, alternating light/dark full-width sections, subtle scroll animations, translucent sticky nav.
* Modular: adding or removing a project = adding or deleting one folder. Adding or removing a homepage section = editing one line in a config file.
* Cheap: fully static site. Free hosting on Cloudflare Pages. The only cost is a domain (about €10–15 a year).
2. Locations (macOS)
/Users/benjablonski/Local_Folder/WebPage/
├── personal-site/                 ← THIS REPO (git root, pushed to GitHub as a private repo)
├── Projects_Shortened_rebuild/
│   └── images/                    ← SOURCE images (read-only, copy from here)
├── AI_Projects/                   ← old project code/notebooks (read-only reference for extra detail)
└── DRL/                           ← deep RL project code (read-only reference)
Rules:
* Never edit or delete anything outside personal-site/.
* The build must never reference paths outside the repo, because Cloudflare only sees the repo. Copy images into the repo.
3. Tech stack
* Astro (latest), static output, TypeScript strict.
* Content Collections with a Zod schema, so every project is validated at build time.
* Plain CSS with design tokens (CSS custom properties). No Tailwind, no UI framework, no React. Keep JS tiny: vanilla, only for nav and scroll reveals.
* Images through Astro <Image /> / astro:assets (automatic WebP/AVIF, responsive sizes, lazy loading).
* Font: @fontsource-variable/inter, self-hosted.
* Node LTS, npm.
* Hosting: Cloudflare Pages connected to the GitHub repo. Build command npm run build, output folder dist. A push to main deploys automatically.
4. Repo structure
personal-site/
├── CLAUDE.md
├── README.md                       ← how to add/remove a project (keep it short)
├── astro.config.mjs
├── package.json
├── tsconfig.json
├── .gitignore                      ← node_modules, dist, .astro, .DS_Store
├── public/
│   ├── favicon.svg
│   └── cv.pdf                      ← optional, add later
└── src/
    ├── config/
    │   ├── site.ts                 ← name, tagline, email, socials, nav links
    │   └── sections.ts             ← ORDERED list of homepage sections (toggle here)
    ├── content.config.ts           ← Zod schema for the "projects" collection
    ├── content/
    │   └── projects/
    │       ├── llm-finetune-code-editing/
    │       │   ├── index.md        ← frontmatter + body text
    │       │   └── *.png           ← images live NEXT to their project
    │       ├── llm-agent-from-scratch/
    │       ├── airborne-optical-sectioning/
    │       └── ...                 ← one folder per project
    ├── assets/
    │   └── site/                   ← site-wide images (hero background, etc.)
    ├── styles/
    │   ├── tokens.css              ← colors, type scale, spacing, radii, motion
    │   └── global.css
    ├── layouts/
    │   └── BaseLayout.astro        ← <head>, SEO/OG tags, Nav, Footer
    ├── components/
    │   ├── Nav.astro
    │   ├── Footer.astro
    │   ├── sections/               ← each homepage section = one component
    │   │   ├── Hero.astro
    │   │   ├── FeaturedProjects.astro
    │   │   ├── ProjectGrid.astro   ← all non-featured projects, filterable by category
    │   │   ├── Skills.astro
    │   │   ├── About.astro
    │   │   └── Contact.astro
    │   └── ui/
    │       ├── ProjectTile.astro   ← big Apple-style tile (featured)
    │       ├── ProjectCard.astro   ← small card (grid)
    │       ├── MetricStat.astro    ← "49% → 75%" big-number style
    │       ├── Gallery.astro
    │       └── Reveal.astro        ← scroll fade-in wrapper
    ├── scripts/
    │   └── reveal.ts               ← IntersectionObserver, respects prefers-reduced-motion
    └── pages/
        ├── index.astro             ← renders sections from config/sections.ts
        ├── projects/
        │   ├── index.astro         ← all projects
        │   └── [slug].astro        ← project detail page, generated per folder
        └── 404.astro
Modularity contract (always keep this true)
1. Add a project: create src/content/projects/<slug>/index.md and its images. Nothing else changes; it appears automatically.
2. Remove a project: delete its folder, or set draft: true to hide it.
3. Reorder or feature: change the order and featured fields in the frontmatter.
4. Add or remove a homepage section: edit the array in src/config/sections.ts.
5. Restyle the whole site: edit only src/styles/tokens.css.
6. Components never hard-code project names. Everything comes from the collection.
5. Project schema (src/content.config.ts)
// use the Astro glob loader: pattern "**/index.md", base "./src/content/projects"
{
  title: string,                 // "Fine-Tuning a 7B LLM for Code Editing"
  subtitle: string,              // one line under the title
  summary: string,               // ≤ 160 chars, used on cards and meta description
  category: enum[
    "LLMs & Agents", "Computer Vision", "Generative Models",
    "Sequence Models", "Explainable AI & Data Viz", "Reinforcement Learning"
  ],
  tags: string[],                // ["QLoRA", "Unsloth", "Synthetic data"]
  date: date,                    // approximate is fine
  order: number,                 // lower = earlier
  featured: boolean,             // big tile on homepage
  draft: boolean (default false),
  theme: enum["light","dark"] (default "light"),  // tile background
  cover: image().optional(),     // relative path, e.g. "./cover.png"
  gallery: { src: image(), caption: string }[] (default []),
  metrics: { value: string, label: string }[] (default []),  // "75%" / "well-formed diffs"
  links: { github?: url, demo?: url, paper?: url, slides?: url } (default {})
}
Projects with no images must still look great. Render a typographic tile with a large gradient title and the metrics. Never use broken placeholders.
6. Design system (authentic Apple-style)
* Colors: light bg #ffffff, alt light #f5f5f7, dark bg #000000, dark alt #1d1d1f, text #1d1d1f, secondary text #6e6e73, link/accent #0071e3. Alternate light and dark sections down the page.
* Type (Inter variable): hero 56–96px with clamp(), weight 600–700, letter-spacing −0.015em to −0.03em on big headings; section titles 40–64px; body 17–21px, line-height 1.47. Use gradient text on hero and featured titles (subtle, e.g. blue→purple).
* Layout: max content width about 980px for text and about 1440px for tiles. Large vertical padding (120–160px desktop). Tiles have 18–28px radius and no harsh borders.
* Nav: 44–48px high, sticky, backdrop-filter: saturate(180%) blur(20px), semi-transparent background, small 12–14px links.
* Motion: fade-up on scroll (opacity plus 20–40px translate, about 600ms, ease-out). Slight image scale on hover. Everything turns off under prefers-reduced-motion.
* Featured tile: full-width; headline, subtitle, 2–3 big metric stats, "Learn more ›" link in accent blue, cover image below.
* Responsive and mobile-first. Lighthouse ≥ 95 in all categories. Semantic HTML, alt text on every image, keyboard-focus styles.
7. Homepage sections (initial sections.ts order)
1. Hero: "Beniamin Jablonski" + tagline (draft: "I build AI systems — from fine-tuned LLMs and agents to vision and generative models."). Background: title_background.png (dark, neural-network look), with a dark overlay so text stays readable.
2. FeaturedProjects: projects with featured: true, sorted by order, alternating light/dark tiles.
3. ProjectGrid: all other projects, with category filter chips (vanilla JS, works without JS too).
4. Skills: generated from the union of all project tags, grouped by category.
5. About: short bio placeholder + education at JKU Linz (Johannes Kepler University). TODO(owner): write the bio.
6. Contact: email + GitHub + LinkedIn from site.ts (TODO(owner): fill in).
8. Images: source → destination
Source: /Users/benjablonski/Local_Folder/WebPage/Projects_Shortened_rebuild/images/ Copy them, don't move them. Keep file names.
Source file    Copy to
title_background.png    src/assets/site/
pixelation_greyscale.png, pixelation_cnn.png    projects/self-supervised-unpixelation/
aos_unet_architecture.png, aos_high_contrast.png, aos_low_contrast.png, aos_heavily_occluded.png    projects/airborne-optical-sectioning/
cancer_cell_lines.jpg    projects/cancer-cell-classification/
transformer_architecture.png    projects/transformer-text-generation/
connect4.jpg, connect4_umap.png, connect4_tsne.png    projects/connect4-dimensionality-reduction/
credit_cards.png, credit_pdp_pay1.png, credit_counterfactual_umap.png    projects/xai-credit-default/
ppo_training_process.png, ppo_rewards.png    projects/ppo-bipedal-walker/
jku_lit_logo.pdf    Don't copy. University logo; only use it if the owner says so (then convert to SVG for About).
Projects with no source images yet: LLM fine-tuning, LLM agent, normalising flows, GAN, VAE, LSTM, other DL work. Use typographic tiles. The original slides contain diagrams for these; if the owner later drops them into the images folder, wire them up.
Check every image with Read before using it. Convert or resize anything over 2500px wide. Keep originals out of public/ so Astro optimizes them.  look for the full projects (and images in this path on local Mac): ╰─ pwd                                                                        ─╯
/Users/benjablonski/Local_Folder/WebPage/Projects_Shortened_rebuild  pdf file: Projects_Shortened.pdf  
9. Seed content (create one folder per project)
Write the body as a short narrative in my voice (first person, plain English): Problem → Approach → Result, 120–250 words, plus a "Tech" line. Use only the facts below. Never invent numbers, links or claims. Mark missing info as <!-- TODO(owner): ... -->.
1. llm-finetune-code-editing · LLMs & Agents · featured · order 1 · dark Fine-tuning Qwen2.5-Coder-7B for code editing (Aider Polyglot). Goal: teach a 7B open model to solve coding exercises in 6 languages and pass Aider's Polyglot benchmark. Synthetic data: DeepSeek API generated 3,000 Exercism-style tasks (stub, solution, tests, plan) from a custom prompt. Test harness: every sample executed in its language; kept only if the tests pass and the stub fails, giving 2,777 verified samples. Training: QLoRA (4-bit, rank 16) with Unsloth on rented Vast.ai GPUs, inputs wrapped in Aider's real prompt layout. Result: well-formed diffs rose 49% → 75%. Earlier runs on commit data failed. TODO(owner): the slide sentence is cut off ("…which"); finish the lesson learned. Metrics: 49% → 75% well-formed diffs · 2,777 verified samples · 6 languages.
2. llm-agent-from-scratch · LLMs & Agents · featured · order 2 · light A tool-calling LLM agent in plain Python, no frameworks. JSON tool calls (calculator, files, bash); bad JSON retried. Evaluation: golden tasks scored by an LLM judge, 100% accuracy. Context engineering: file offloading, todo plan, summaries, 60% fewer tokens. Sandboxed bash in Docker, sub-agents for parallel subtasks, KV-cache-friendly prompt layout. Metrics: 100% golden-task accuracy · −60% tokens.
3. airborne-optical-sectioning · Computer Vision · featured · order 3 · dark Detecting people hidden by forest occlusion using drone-based Airborne Optical Sectioning (AOS), 3 input images at a time. Dataset: 30,000 simulated focal stacks (focal heights 0 m, 1 m, 2 m). U-Net-like CNN autoencoder with skip connections (18.7M parameters). Self-supervised: ground-truth images as restoration targets. Successfully removes occlusions. Gallery: U-Net architecture, high-contrast, low-contrast and heavily occluded results. Metrics: 30,000 focal stacks · 18.7M parameters.
4. self-supervised-unpixelation · Computer Vision · featured · order 4 · light CNN-based pixelation removal without labelled data. Images converted to grayscale and resized to 64×64. Random rectangular regions replaced with block averages. Simple 9-layer CNN with 128 channels (not a U-Net). The original pixels are the ground truth. Unpixelates images it has never seen.
5. cancer-cell-classification · Computer Vision · order 5 Classifying 9 cancer cell lines from multi-channel fluorescence microscopy (blue, red, yellow channels). Wide ResNet-101-2, pre-trained, with a custom classifier. Class imbalance handled by upsampling. TODO(owner): the slide says "best in class accuracy"; give the actual number or rank (for example a course challenge leaderboard).
6. xai-credit-default · Explainable AI & Data Viz · featured · order 6 · light Explaining credit-card default predictions. 30,000 Taiwan credit-card clients (payment history, demographics, default outcome). Random Forest classifier. SHAP for global feature importance, LIME for individual explanations, Partial Dependence Plots, counterfactual exploration via UMAP. Result: PAY1 (most recent payment status) was the dominant predictor across all methods.
7. connect4-dimensionality-reduction · Explainable AI & Data Viz · order 7 Visualizing high-dimensional Connect 4 game states. Recorded thousands of moves from AI-vs-random games; 42 board positions per state. UMAP and t-SNE compress states to 2D. UMAP shows how game complexity changes over time; t-SNE trajectories show game paths coloured by winner.
8. ppo-bipedal-walker · Reinforcement Learning · featured · order 8 · dark Teaching BipedalWalker to walk with Proximal Policy Optimization. Loop: collect transitions into a rollout buffer → train Actor (policy) and Critic (value) for 5 epochs → advantages from Critic values, clipped policy-gradient updates → clear buffer, repeat. Actor outputs mean and variance for continuous actions. 3,000 episodes, 376 hidden units, learning rate 1e-5. Episode rewards rise steadily and the agent learns to walk. Metrics: 3,000 episodes. Reference code may be in ../DRL/ (read-only).
9. transformer-text-generation · Sequence Models · order 9 Character-level transformer with multi-head attention trained on Trump speech transcripts. Generates text one character at a time; temperature controls creative vs predictable output.
10. lstm-text-generation · Sequence Models · order 10 Character-level LSTM for next-character prediction and text generation, plus using its predictions to build better codes for text compression.
11. normalising-flows · Generative Models · order 11 MNIST digits flattened to 784-D. Invertible coupling layers, change-of-variables formula, trained by maximum likelihood (NLL with Jacobian log-determinants). Sample a Gaussian, invert through the flow, get new digits.
12. gan-mnist · Generative Models · order 12 Min-max game on MNIST: a discriminator separates real digits from fakes; a generator (decoder from latent vectors) learns to fool it. Also projected-gradient-ascent adversarial examples that fool classifiers.
13. vae-generative-modeling · Generative Models · order 13 Encoder predicts mean and log-variance; reparameterization trick for end-to-end training; KL term keeps the latent space near N(0, I); sample from the prior and decode to get new images.
14. deep-learning-foundations · Computer Vision · order 14 Collection of smaller CNN projects: modified VGG plus ImageNet-pre-trained models on CIFAR-10 with layer freezing for faster training; ResNet-style skip connections for deeper nets; lightweight mobile CNNs (separable convolutions plus attention, under 30K parameters); training tooling (TensorBoard, progress bars, checkpointing, hyperparameter search).
15. foodflation · draft: true · TODO(owner) foodflation.io: Austrian grocery price comparison (in progress). Write it up when ready.
10. First-run tasks (do in order, tick them off)
1. npm create astro@latest . (minimal template, TypeScript strict). Then git init, .gitignore, first commit.
2. Install @fontsource-variable/inter. Create tokens.css and global.css.
3. Build the content schema, then create all project folders from §9 and copy images per §8.
4. Build the layout, Nav, Footer, the section components and the UI components.
5. Build index.astro (sections from config), projects/index.astro, projects/[slug].astro, 404.astro.
6. Add SEO: title/description per page, Open Graph image (use the project cover), sitemap integration.
7. npm run build must pass with zero errors. Run npm run dev, check desktop and mobile widths, fix layout issues.
8. Write README.md: how to add/remove a project in 3 steps.
9. gh repo create personal-site --private --source=. --push (ask me before pushing).
10. Print the Cloudflare Pages setup steps for me (I connect the repo myself in the dashboard).
11. Working rules
* Ask before: pushing, deleting files, adding any dependency not listed here, or changing the schema.
* Small, focused commits with clear messages.
* After visual changes, run the dev server and check the result before saying "done".
* Keep everything editable by a beginner: clear names, short components, comments only where the intent isn't obvious.
* Never fabricate project facts, metrics, links or contact details. Use TODO(owner).

also long term:
create LOTS OF SMALLER .md FILES THAT ALL CARRY other vital informations. no .md file should have more than 200 words. including this one. including CLAUDE.md. break all this info apart so later on you can easier edit and update individual smaller files. remember: CLAUDE.md is supposed to serve 1 main purpose: it should give a brief description of the project and point to all the other .md files (inlcuding paths) so we have this one library pointing everywhere. 
