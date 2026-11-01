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
  name: "Alona Konstantinova",
  eyebrow: "HUMAN-CENTERED AI ENGINEER",

  intro: "I design, build and evaluate AI systems end to end.",

  chips: ["AI Engineer, Topsoe", "MSc Human-Centered AI, DTU", "Copenhagen, DK"],

  nav: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "My Projects", href: "#projects" },
    { label: "Interests", href: "#interests" },
    { label: "Contact", href: "#contact" },
  ],

  /**
   * Case studies, rendered by components/Projects.tsx in this order:
   * header → TL;DR → problem → research → solution → how it works →
   * evaluation → reflection → skills.
   */
  projects: [
    {
      id: "thesis",
      index: "01",
      badge: "MSc Thesis · DTU · Grade 12/12",
      year: "2026",
      title: "Designing a Vocabulary Acquisition Support Tool for Adult Danish Learners",
      description:
        "A mobile PWA that pairs AI-generated retrieval practice with a weekly self-regulated goal loop, helping adult learners keep the words they meet in daily life.",
      heroVisual: "[Hero mockup: weekly goal dashboard and an AI-generated exercise]",
      heroImage: "/thesis/dual-loop.png",
      heroAlt: "Dual-loop design: vocabulary learning loop nested inside the weekly autonomy loop, with app screens for each step",
      researchImage: "/thesis/double-diamond.png",
      researchAlt:
        "Double Diamond process: Discover and Define in the problem space, Develop and Deliver in the solution space",
      architectureDiagram: true,
      facts: {
        role: "",
        timeline: "Spring – August 2026",
        team: "Individual MSc project, DTU Compute",
        stack: ["Python (Flask)", "PostgreSQL", "Vanilla JS PWA", "OpenAI API", "Google Cloud APIs"],
      },
      links: [{ label: "GitHub →", href: "https://github.com/alonakonst/vocabulary_system" }],
      tldr:
        "This project investigated a real user problem: adult learners meet Danish vocabulary in daily life but rarely retain it. Building on research into language learning and learner autonomy, I developed a model grounded in linguistics theory and psychology, and designed a solution around it with an LLM as a tool. In a 7-day field study with 5 learners it scored 80.5 on the System Usability Scale, and 4 of 5 learners improved their self-regulation.",
      problem: {
        who: "International adults in Denmark taking Danskuddannelse 3 after full working days.",
        why: "Class time is short, and vocabulary is forgotten quickly once formal instruction ends.",
        missing:
          "Apps like Duolingo use rigid curricula, and flashcard tools need manual entry. Neither supports capturing real-life words and keeping up the habit.",
      },
      research: {
        approach:
          "Double Diamond process: semi-structured interviews with adult Danish learners, analysed with Framework Analysis (Gu's Tetrahedral Model) and Affinity Diagramming.",
        findings: [
          "The breakdown was metacognitive, not laziness: learners lacked structure to self-regulate once deadlines ended.",
          "Meaning lookup was well supported, but recording and retention had no support, so workflows stopped at lookup.",
          "Generative AI can produce endless practice, but full automation undermines learning. Learners need scaffolding instead.",
        ],
      },
      solution: {
        userView:
          "Add any word met in daily life and it is enriched with translation, audio and example sentences. Then run a 12-item AI practice session and commit to weekly goals with an end-of-week review.",
        screenshots: [],
        journey: [
          "Encounter a word in news or class",
          "Capture and auto-enrich it in the app",
          "Commit to weekly goal targets",
          "Complete a 12-item AI practice session",
          "Reflect and review at the end of the week",
        ],
      },
      how: {
        architecture:
          "Vanilla JS PWA → Flask API on Gunicorn → PostgreSQL, with OpenAI and Google Cloud APIs.",
        decisions: [
          {
            title: "Stateless multi-threaded backend",
            tradeoff:
              "Keeps workers free during slow AI calls and supports multiple users, but session state must live in the browser.",
          },
          {
            title: "Zero-build PWA over native app",
            tradeoff:
              "Installs instantly with no app store, but has no native push notifications to bring users back.",
          },
        ],
      },
      evaluation: {
        method:
          "7-day unsupervised field study with 5 adult Danish learners on their own phones, using pre/post self-regulation questionnaires, telemetry and the System Usability Scale.",
        results: [
          "SUS score: 80.5 / 100",
          "80% (4 of 5) showed increased self-regulation",
          "179 words captured, 27 of 36 practice sessions completed (75%)",
        ],
        worked:
          "The dual loop turned word capture into a self-regulated habit. AI exercises were fast and felt natural.",
        didntWork:
          "Without push notifications, users who closed the app sometimes forgot to return. Translation was weak on complex idioms.",
      },
      reflection: {
        learned:
          "AI is not always the solution. The LLM worked best as a tool inside a learner-centred model, scaffolding self-regulation rather than replacing the learner's effort.",
        differently: "",
        next: "",
      },
      skills: ["Research through Design", "Usability testing", "Full-stack", "Python / Flask", "PWA", "AI API integration"],
    },
    {
      id: "topsoe",
      index: "02",
      badge: "AI Engineer · Topsoe",
      year: "2025 – present",
      title: "Internal AI platform & evaluation tooling",
      description:
        "Evaluation pipelines and full-stack tools for the AI infrastructure Topsoe's teams use day to day.",
      heroVisual: "[Hero screenshot — internal, or a sanitised mock-up]",
      heroImage: "",
      heroAlt: "",
      researchImage: "",
      researchAlt: "",
      architectureDiagram: false,
      facts: {
        role: "AI Engineer (Student Worker)",
        timeline: "May 2025 – present",
        team: "Five-engineer AI team",
        stack: ["Python", "DeepEval", "JavaScript", "MCP", "Figma"],
      },
      links: [] as { label: string; href: string }[],
      tldr: "[2–3 sentences: what the platform does, who uses it, and your part in it.]",
      problem: {
        who: "[Who uses the internal AI infrastructure]",
        why: "[Why it matters]",
        missing: "[What was missing]",
      },
      research: {
        approach: "[How you understood user needs]",
        findings: ["[Key finding 1]", "[Key finding 2]"],
      },
      solution: {
        userView: "[What users experience]",
        screenshots: ["[Screenshot 1]"],
        journey: ["[Step 1]", "[Step 2]", "[Step 3]"],
      },
      how: {
        architecture: "[Architecture diagram]",
        decisions: [
          { title: "[Technical decision 1]", tradeoff: "[Trade-off]" },
          { title: "[Technical decision 2]", tradeoff: "[Trade-off]" },
        ],
      },
      evaluation: {
        method: "Evaluation pipelines in Python with DeepEval, assessing deployed LLMs from multiple providers.",
        results: ["[Metric: number]"],
        worked: "[What worked]",
        didntWork: "[What did not work]",
      },
      reflection: {
        learned: "[What you learned]",
        differently: "[What you would do differently]",
        next: "[Next step]",
      },
      skills: ["AI engineering", "Evaluation", "Full-stack", "Python", "UX prototyping"],
    },
  ],

  contact: {
    email: "alyonakonsta@gmail.com",
    phone: "+45 91478234",
    linkedin: "[linkedin.com/in/your-name]",
  },

} as const;
