import { useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import { site } from "../content/site";

type Project = (typeof site.projects)[number];

const body: CSSProperties = { fontSize: 15.5, lineHeight: 1.65, color: "var(--ink-2)", margin: 0 };
const grid2: CSSProperties = { display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "32px 48px" };
const grid3: CSSProperties = { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "32px 48px" };
const chipRow: CSSProperties = { display: "flex", flexWrap: "wrap", gap: 8 };
const svgMono: CSSProperties = { fontFamily: "var(--font-mono)" };

/* A labelled block inside a case study, e.g. "PROBLEM" or "EVALUATION" */
function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div style={{ marginTop: 48 }}>
      <div className="eyebrow" style={{ color: "var(--accent)", marginBottom: 16 }}>
        {title}
      </div>
      {children}
    </div>
  );
}

/* System architecture: device → Flask on Gunicorn → database and external APIs */
function ArchitectureDiagram() {
  const box: CSSProperties = { fill: "var(--bg)", stroke: "var(--ink)", strokeWidth: 1.25 };
  const title: CSSProperties = { ...svgMono, fontSize: 12, fill: "var(--ink)" };
  const sub: CSSProperties = { ...svgMono, fontSize: 10, fill: "var(--ink-3)" };
  const bottom = [
    { x: 40, title: "DATABASE", lines: ["PostgreSQL (prod)", "SQLite (dev)", "9 tables, Peewee ORM"] },
    { x: 235, title: "OPENAI API", lines: ["gpt-5.4-nano", "spelling, examples, cloze"] },
    { x: 430, title: "GOOGLE CLOUD", lines: ["Translation (primary)", "Text-to-Speech (da-DK)"] },
  ];
  return (
    <svg
      viewBox="0 0 640 350"
      role="img"
      aria-label="Architecture: a mobile PWA calls a Flask server on Gunicorn over HTTPS, which uses PostgreSQL and the OpenAI and Google Cloud APIs"
      style={{ width: "100%", maxWidth: 680, display: "block", margin: "0 auto" }}
    >
      <defs>
        <marker id="arch-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M0,0 L10,5 L0,10 z" style={{ fill: "var(--ink)" }} />
        </marker>
      </defs>

      {/* Learner device */}
      <rect x="40" y="10" width="560" height="70" style={box} />
      <text x="320" y="36" textAnchor="middle" style={title}>
        LEARNER DEVICE · MOBILE PWA
      </text>
      <text x="320" y="58" textAnchor="middle" style={sub}>
        Vanilla JS SPA · service worker cache · localStorage session state
      </text>

      <line x1="320" y1="80" x2="320" y2="118" style={{ stroke: "var(--ink)", strokeWidth: 1.25 }} markerEnd="url(#arch-arrow)" />
      <text x="332" y="104" style={{ ...sub, textAnchor: "start" }}>
        HTTPS · REST / JSON
      </text>

      {/* Server */}
      <rect x="40" y="118" width="560" height="80" style={box} />
      <text x="320" y="142" textAnchor="middle" style={title}>
        RENDER · GUNICORN
      </text>
      <text x="320" y="164" textAnchor="middle" style={sub}>
        Flask monolith: serves HTML, JS and the JSON API
      </text>
      <text x="320" y="182" textAnchor="middle" style={sub}>
        2 workers × 8 threads · stateless · no server-side cache
      </text>

      {/* Fan-out to services */}
      {bottom.map((b) => (
        <g key={b.title}>
          <line
            x1={b.x + 85}
            y1="198"
            x2={b.x + 85}
            y2="248"
            style={{ stroke: "var(--ink)", strokeWidth: 1.25 }}
            markerEnd="url(#arch-arrow)"
          />
          <rect x={b.x} y="250" width="170" height="84" style={box} />
          <text x={b.x + 85} y="274" textAnchor="middle" style={title}>
            {b.title}
          </text>
          {b.lines.map((line, i) => (
            <text key={line} x={b.x + 85} y={294 + i * 15} textAnchor="middle" style={sub}>
              {line}
            </text>
          ))}
        </g>
      ))}
    </svg>
  );
}

/* A small label above a paragraph */
function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <div className="mono" style={{ fontSize: 12.5, color: "var(--accent)", marginBottom: 8 }}>
        {label}
      </div>
      <div style={body}>{children}</div>
    </div>
  );
}

function List({ items, ordered = false }: { items: readonly string[]; ordered?: boolean }) {
  const Tag = ordered ? "ol" : "ul";
  return (
    <Tag style={{ ...body, margin: 0, paddingLeft: 20 }}>
      {items.map((item) => (
        <li key={item} style={{ marginBottom: 6 }}>
          {item}
        </li>
      ))}
    </Tag>
  );
}

function Chips({ items }: { items: readonly string[] }) {
  return (
    <div style={chipRow}>
      {items.map((item) => (
        <div key={item} className="chip">
          {item}
        </div>
      ))}
    </div>
  );
}

function CaseStudy({ project: p }: { project: Project }) {
  const [open, setOpen] = useState(false);

  return (
    <article
      id={p.id}
      style={{
        background: "var(--bg)",
        border: "1px solid var(--line)",
        padding: 56,
        marginBottom: 32,
      }}
    >
      {/* Header: title, one-line description, hero visual, quick facts, links */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: 16,
          alignItems: "baseline",
          marginBottom: 28,
        }}
      >
        <div style={{ display: "flex", alignItems: "baseline", gap: 16 }}>
          <span className="idx" style={{ fontSize: 15 }}>
            PROJECT / {p.index}
          </span>
          <span className="chip">{p.badge}</span>
        </div>
        <span className="mono" style={{ fontSize: 13, color: "var(--ink-4)" }}>
          {p.year}
        </span>
      </div>

      <h3 style={{ fontSize: 30, lineHeight: 1.2, marginBottom: 10 }}>{p.title}</h3>
      <p className="mono" style={{ fontSize: 13, color: "var(--ink-4)", margin: 0 }}>
        {p.description}
      </p>

      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={`${p.id}-body`}
        className="btn btn-outline"
        style={{ width: "100%", marginTop: 28 }}
      >
        {open ? "Hide case study ↑" : "Read case study ↓"}
      </button>

      {open && (
      <div id={`${p.id}-body`}>
      {p.heroImage ? (
        /* Portrait visual on the left, facts stacked on the right */
        <div className="grid-2" style={{ ...grid2, gridTemplateColumns: "2fr 3fr", marginTop: 32, alignItems: "start" }}>
          <img
            src={p.heroImage}
            alt={p.heroAlt}
            style={{ width: "100%", display: "block", border: "1px solid var(--line)" }}
          />
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            {p.facts.role && <Field label="ROLE">{p.facts.role}</Field>}
            <Field label="TIMELINE">{p.facts.timeline}</Field>
            <Field label="TEAM">{p.facts.team}</Field>
            <Chips items={p.facts.stack} />
            {p.links.length > 0 && (
              <div style={{ display: "flex", flexWrap: "wrap", gap: 24 }}>
                {p.links.map((link) => (
                  <a key={link.label} href={link.href} className="mono" style={{ fontSize: 13, color: "var(--accent)" }}>
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      ) : (
        <>
          <div className="placeholder-frame" style={{ height: 320, marginTop: 32 }}>
            {p.heroVisual}
          </div>

          <div className="grid-3" style={{ ...grid3, marginTop: 32 }}>
            {p.facts.role && <Field label="ROLE">{p.facts.role}</Field>}
            <Field label="TIMELINE">{p.facts.timeline}</Field>
            <Field label="TEAM">{p.facts.team}</Field>
          </div>
          <div style={{ marginTop: 28 }}>
            <Chips items={p.facts.stack} />
          </div>
          {p.links.length > 0 && (
            <div style={{ display: "flex", flexWrap: "wrap", gap: 24, marginTop: 24 }}>
              {p.links.map((link) => (
                <a key={link.label} href={link.href} className="mono" style={{ fontSize: 13, color: "var(--accent)" }}>
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </>
      )}

      {/* TL;DR */}
      <div style={{ background: "var(--bg-alt)", padding: 24, marginTop: 40 }}>
        <Field label="TL;DR">{p.tldr}</Field>
      </div>

      {/* Problem: who has it, why it matters, what was missing */}
      <Section title="PROBLEM">
        <div className="grid-3" style={grid3}>
          <Field label="WHO HAS IT">{p.problem.who}</Field>
          <Field label="WHY IT MATTERS">{p.problem.why}</Field>
          <Field label="WHAT WAS MISSING">{p.problem.missing}</Field>
        </div>
      </Section>

      {/* Research and insights */}
      <Section title="RESEARCH & INSIGHTS">
        {p.researchImage && (
          <img
            src={p.researchImage}
            alt={p.researchAlt}
            style={{ width: "100%", display: "block", border: "1px solid var(--line)", marginBottom: 40 }}
          />
        )}
        <div className="grid-2" style={grid2}>
          <Field label="HOW I UNDERSTOOD USERS">{p.research.approach}</Field>
          <Field label="KEY FINDINGS">
            <List items={p.research.findings} />
          </Field>
        </div>
      </Section>

      {/* Solution: user's point of view, screenshots, user journey */}
      <Section title="SOLUTION">
        <div className="grid-2" style={grid2}>
          <Field label="FROM THE USER'S POINT OF VIEW">{p.solution.userView}</Field>
          <Field label="USER JOURNEY">
            <List items={p.solution.journey} ordered />
          </Field>
        </div>
        {p.solution.screenshots.length > 0 && (
          <div className="grid-2" style={{ ...grid2, marginTop: 32 }}>
            {p.solution.screenshots.map((shot) => (
              <div key={shot} className="placeholder-frame" style={{ height: 240 }}>
                {shot}
              </div>
            ))}
          </div>
        )}
      </Section>

      {/* How it works: architecture and key technical decisions */}
      <Section title="HOW IT WORKS">
        <div style={{ marginBottom: 32 }}>
          {p.architectureDiagram ? (
            <ArchitectureDiagram />
          ) : (
            <Field label="ARCHITECTURE">{p.how.architecture}</Field>
          )}
        </div>
        <div className="grid-2" style={grid2}>
          {p.how.decisions.map((d) => (
            <Field key={d.title} label={d.title.toUpperCase()}>
              Trade-off: {d.tradeoff}
            </Field>
          ))}
        </div>
      </Section>

      {/* Evaluation and results */}
      <Section title="EVALUATION & RESULTS">
        <div className="grid-2" style={grid2}>
          <Field label="HOW I TESTED IT">{p.evaluation.method}</Field>
          <Field label="RESULTS">
            <List items={p.evaluation.results} />
          </Field>
        </div>
        <div className="grid-2" style={{ ...grid2, marginTop: 32 }}>
          <Field label="WHAT WORKED">{p.evaluation.worked}</Field>
          <Field label="WHAT DIDN'T">{p.evaluation.didntWork}</Field>
        </div>
      </Section>

      {/* Reflection */}
      <Section title="REFLECTION">
        <div className="grid-3" style={grid3}>
          <Field label="WHAT I LEARNED">{p.reflection.learned}</Field>
          {p.reflection.differently && (
            <Field label="WHAT I'D DO DIFFERENTLY">{p.reflection.differently}</Field>
          )}
          {p.reflection.next && <Field label="NEXT STEP">{p.reflection.next}</Field>}
        </div>
      </Section>

      {/* Skills */}
      <Section title="SKILLS">
        <Chips items={p.skills} />
      </Section>
      </div>
      )}
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "96px 0", borderBottom: "1px solid var(--line)" }}>
      <div className="container">
        <div className="eyebrow" style={{ color: "var(--accent)", marginBottom: 20 }}>
          Selected work
        </div>
        <h2 style={{ fontSize: 44, lineHeight: 1.1, marginBottom: 48 }}>Case studies</h2>

        {site.projects.map((project) => (
          <CaseStudy key={project.id} project={project} />
        ))}

        {/* Teaser for the next case study */}
        <div
          style={{
            border: "1px dashed var(--line-dash)",
            padding: "32px 56px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <span className="idx" style={{ fontSize: 15 }}>
            PROJECT / 03
          </span>
          <span className="mono" style={{ fontSize: 13.5, color: "var(--ink-4)" }}>
            Next case study — in progress, check back soon
          </span>
        </div>
      </div>
    </section>
  );
}
