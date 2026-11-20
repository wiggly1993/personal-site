// Helpers for reading the "projects" collection.
import { getCollection, type CollectionEntry } from "astro:content";

export type Project = CollectionEntry<"projects">;

/** All published (non-draft) projects, sorted by `order`. */
export async function getProjects(): Promise<Project[]> {
  const all = await getCollection("projects", ({ data }) => !data.draft);
  return all.sort((a, b) => a.data.order - b.data.order);
}

/** Alt text for a project's cover: the matching gallery caption, or the title. */
export function coverAlt(project: Project): string {
  const { cover, gallery, title } = project.data;
  const match = gallery.find((g) => cover && g.src.src === cover.src);
  return match?.caption ?? `${title} — project illustration`;
}
