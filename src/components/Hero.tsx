import { site } from "../content/site";

const heroButton = { minWidth: 150, padding: "14px 28px" } as const;

export default function Hero() {
  const hasLinkedin = !site.contact.linkedin.startsWith("[");

  return (
    <header
      id="top"
      className="hero-grid"
      style={{
        paddingTop: 112,
        paddingBottom: 104,
        borderBottom: "1px solid var(--line)",
      }}
    >
      <div className="container">
        <div
          className="eyebrow"
          style={{ color: "var(--accent)", marginBottom: 24, letterSpacing: "0.12em" }}
        >
          {site.eyebrow}
        </div>

        <h1
          className="hero-h1"
          style={{
            fontSize: 68,
            fontWeight: 700,
            lineHeight: 1.02,
            letterSpacing: "-0.025em",
            maxWidth: 820,
          }}
        >
          {site.name}
        </h1>

        <p
          style={{
            fontSize: 22,
            lineHeight: 1.55,
            color: "var(--ink-2)",
            maxWidth: 620,
            margin: "28px 0 0",
          }}
        >
          {site.intro}
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 36 }}>
          {site.chips.map((chip) => (
            <div key={chip} className="chip">
              {chip}
            </div>
          ))}
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginTop: 48 }}>
          <a
            href={`https://mail.google.com/mail/?view=cm&to=${site.contact.email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-solid"
            style={heroButton}
          >
            Email
          </a>
          {hasLinkedin && (
            <a
              href={`https://${site.contact.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              style={heroButton}
            >
              LinkedIn
            </a>
          )}
          <a href="/Alona-CV.pdf" download className="btn btn-outline" style={heroButton}>
            CV
          </a>
        </div>
      </div>
    </header>
  );
}
