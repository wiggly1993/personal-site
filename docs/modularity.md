# Modularity contract (always keep this true)

1. **Add a project:** create `src/content/projects/<slug>/index.md` and its images. Nothing else changes; it appears automatically.
2. **Remove a project:** delete its folder, or set `draft: true` to hide it.
3. **Reorder or feature:** change `order` and `featured` in the frontmatter.
4. **Add or remove a homepage section:** edit the array in `src/config/sections.ts`.
5. **Restyle the whole site:** edit only `src/styles/tokens.css`.
6. **Components never hard-code project names.** Everything comes from the collection.
