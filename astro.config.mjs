// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  // Live domain (used for sitemap + Open Graph URLs).
  site: "https://benjablonski.dev",
  output: "static",
  trailingSlash: "always",
  // Scoped styles via classes, so a parent's styles also reach child components it passes `class` to.
  scopedStyleStrategy: "class",
  integrations: [sitemap()],
});
