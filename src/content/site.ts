/**
 * All site content lives here.
 *
 * Components read from this file, so changing your name, title, or any
 * copy means editing one object — you never touch JSX to update text.
 *
 * Anything still wrapped in [square brackets] is a placeholder from the
 * original mockup that we haven't filled in yet.
 */

export const site = {
  name: "[Your Name]",
  eyebrow: "MSc Human-Centered AI — DTU · 2026",

  intro:
    "I design and build the interface between people and AI systems — looking for my first full-time role as a UX Engineer or in AI Product, based in Denmark.",

  chips: ["MSc Human-Centered AI, DTU", "R&D / Innovation, Topsoe", "Copenhagen, DK"],

  nav: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "My Projects", href: "#projects" },
    { label: "Interests", href: "#interests" },
    { label: "Contact", href: "#contact" },
  ],

  contact: {
    email: "aljonkon1@gmail.com",
    phone: "[+45 XX XX XX XX]",
    linkedin: "[linkedin.com/in/your-name]",
  },

  footerNote: "Built with care in Copenhagen.",
} as const;
