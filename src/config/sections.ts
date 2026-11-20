// Homepage sections, top to bottom.
// To remove a section: delete or comment out its line. To reorder: move the line.
import Hero from "../components/sections/Hero.astro";
import FeaturedProjects from "../components/sections/FeaturedProjects.astro";
import ProjectGrid from "../components/sections/ProjectGrid.astro";
import Skills from "../components/sections/Skills.astro";
import About from "../components/sections/About.astro";
import Contact from "../components/sections/Contact.astro";

export const sections = [
  Hero,
  FeaturedProjects,
  ProjectGrid,
  Skills,
  About,
  Contact,
];
