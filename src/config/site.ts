// Site-wide settings. Edit text and links here — components read from this file.

export const site = {
  name: "Beniamin Jablonski",
  tagline:
    "I build AI systems — from fine-tuned LLMs and agents to vision and generative models.",
  description:
    "Portfolio of Beniamin Jablonski: AI and deep-learning projects — fine-tuned LLMs, agents, computer vision, generative models and reinforcement learning.",

  bio: "I started out in physics, moved into engineering, and now build AI systems. I like turning messy problems into models that actually work.",

  // Short CV overview for the About section, newest first. Details stay in the CV itself.
  cv: [
    { period: "2023 – 2026", role: "MSc program, Artificial Intelligence", place: "Johannes Kepler University Linz" },
    { period: "2019 – 2021", role: "Tool Validation Engineer", place: "IMS Nanofabrication, Vienna" },
    { period: "2017 – 2019", role: "Research Assistant, quantum thermodynamics", place: "Austrian Academy of Sciences, Vienna" },
    { period: "2016 – 2019", role: "MSc Physics, with distinction", place: "University of Vienna" },
    { period: "2011 – 2016", role: "BSc Physics", place: "University of Vienna" },
  ],
  languages: "German · English · Polish",

  // Leave a value empty ("") to hide it on the site.
  contact: {
    email: "benjablonski@hotmail.com",
    phone: "+43 677 613 88 495",
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
