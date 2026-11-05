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


  /**
   * Case studies, rendered by components/Projects.tsx in this order:
   * header → design process → summary → problem → research → solution → big figure → how it works →
   * evaluation.
   */
  projects: [
    {
      id: "thesis",
      index: "01",
      badge: "MSc Thesis · DTU · Grade 12/12",
      year: "2026",
      title: "Designing a Vocabulary Acquisition Support Tool for Adult Danish Learners",
      heroVisual: "[Hero mockup: weekly goal dashboard and an AI-generated exercise]",
      heroImage: "/thesis/dual-loop.png",
      heroAlt: "Dual-loop design: vocabulary learning loop nested inside the weekly autonomy loop, with app screens for each step",
      researchImage: "/thesis/double-diamond.png",
      researchAlt:
        "Double Diamond process: Discover and Define in the problem space, Develop and Deliver in the solution space",
      modelImage: "/thesis/process-diagram.png",
      modelAlt:
        "Proposed model: the vocabulary learning loop (capture, resolution, rehearsal) nested inside the autonomy loop (forethought, performance, self-reflection)",
      modelCaption:
        "The proposed model, based on Ma's vocabulary learning loop and Zimmerman's SRL loop.",
      architectureDiagram: true,
      facts: {
        role: "",
      },
      links: [
        { label: "GitHub →", href: "https://github.com/alonakonst/vocabulary_system" },
        { label: "Download thesis (PDF) ↓", href: "/thesis/Thesis.pdf", download: true },
      ],
      summary:
        "Adult learners meet Danish vocabulary every day but rarely retain it. Grounded in learning theory and learner autonomy research, I designed and built a mobile PWA that turns everyday encounters into lasting vocabulary. An LLM generates example sentences on demand, and Google Cloud handles translation and audio. In a 7-day field study with 5 learners, the app scored 80.5 on the System Usability Scale and 4 of 5 learners improved their self-regulation.",
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
          "Proposed model: a dual loop in which the self-regulated learning (autonomy) loop guides the vocabulary acquisition loop, so learners plan, monitor and reflect on how they learn words.",
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
      },
      evaluation: {
        method:
          "7-day unsupervised field study with 5 adult Danish learners on their own phones, using pre/post self-regulation questionnaires, telemetry and the System Usability Scale.",
        results: [
          "SUS score: 80.5 / 100",
          "80% (4 of 5) showed increased self-regulation",
          "179 words captured, 27 of 36 practice sessions completed (75%)",
        ],
        limitations:
          "A 7-day study with 5 learners shows short-term engagement, not vocabulary acquisition. Measuring whether learners actually acquire and retain words would require longitudinal studies over months, with delayed retention tests and a comparison group.",
      },
    },
  ],

  contact: {
    email: "alyonakonsta@gmail.com",
    phone: "+45 91478234",
    linkedin: "www.linkedin.com/in/alonakonst",
  },

} as const;
