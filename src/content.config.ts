// Schema for the "projects" collection.
// Every src/content/projects/<slug>/index.md is validated against this at build time.
// See docs/project-schema.md. Ask the owner before changing it.
import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { CATEGORIES } from "./config/categories";

const projects = defineCollection({
  // The folder name becomes the slug: "llm-agent-from-scratch/index.md" → "llm-agent-from-scratch".
  loader: glob({
    pattern: "**/index.md",
    base: "./src/content/projects",
    generateId: ({ entry }) => entry.replace(/\/index\.md$/, ""),
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      subtitle: z.string(),
      summary: z.string().max(160),
      category: z.enum(CATEGORIES),
      tags: z.array(z.string()),
      date: z.coerce.date(),
      order: z.number(),
      featured: z.boolean(),
      draft: z.boolean().default(false),
      theme: z.enum(["light", "dark"]).default("light"),
      cover: image().optional(),
      gallery: z
        .array(z.object({ src: image(), caption: z.string() }))
        .default([]),
      metrics: z
        .array(z.object({ value: z.string(), label: z.string() }))
        .default([]),
      links: z
        .object({
          github: z.url().optional(),
          demo: z.url().optional(),
          paper: z.url().optional(),
          slides: z.url().optional(),
        })
        .default({}),
    }),
});

export const collections = { projects };
