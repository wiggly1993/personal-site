// Project categories, in the order they appear in filters and the Skills section.
export const CATEGORIES = [
  "LLMs & Agents",
  "Computer Vision",
  "Generative Models",
  "Sequence Models",
  "Explainable AI & Data Viz",
  "Reinforcement Learning",
] as const;

export type Category = (typeof CATEGORIES)[number];
