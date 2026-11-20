# Project schema (`src/content.config.ts`)

Astro glob loader: pattern `**/index.md`, base `./src/content/projects`. Ask the owner before changing the schema.

```ts
{
  title: string,            // "Fine-Tuning a 7B LLM for Code Editing"
  subtitle: string,         // one line under the title
  summary: string,          // ≤ 160 chars, cards + meta description
  category: "LLMs & Agents" | "Computer Vision" | "Generative Models"
          | "Sequence Models" | "Explainable AI & Data Viz" | "Reinforcement Learning",
  tags: string[],           // ["QLoRA", "Unsloth", "Synthetic data"]
  date: date,               // approximate is fine
  order: number,            // lower = earlier
  featured: boolean,        // big tile on homepage
  draft: boolean,           // default false
  theme: "light" | "dark",  // default "light", tile background
  cover?: image(),          // e.g. "./cover.png"
  gallery: { src: image(), caption: string }[],   // default []
  metrics: { value: string, label: string }[],    // default []
  links: { github?, demo?, paper?, slides? }      // urls, default {}
}
```

Projects with no images must still look great: typographic tile with a large gradient title and the metrics. Never use broken placeholders.
