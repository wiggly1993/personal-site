// Site-wide settings. Edit text and links here — components read from this file.

export const site = {
  name: "Beniamin Jablonski",
  tagline:
    "I build AI systems — from fine-tuned LLMs and agents to vision and generative models.",
  description:
    "Portfolio of Beniamin Jablonski: AI and deep-learning projects — fine-tuned LLMs, agents, computer vision, generative models and reinforcement learning.",

  // TODO(owner): write a short bio (2–3 sentences, first person).
  bio: "",

  education: {
    school: "Johannes Kepler University Linz",
    shortName: "JKU",
    // TODO(owner): degree and years, e.g. "MSc Artificial Intelligence · 2022–2025".
    detail: "",
  },

  // Leave a value empty ("") to hide it on the site.
  contact: {
    email: "", // TODO(owner): public email address
    github: "https://github.com/wiggly1993", // from the repo URL — TODO(owner): confirm
    linkedin: "", // TODO(owner): LinkedIn profile URL
  },

  nav: [
    { label: "Projects", href: "/projects/" },
    { label: "Skills", href: "/#skills" },
    { label: "About", href: "/#about" },
    { label: "Contact", href: "/#contact" },
  ],
};
