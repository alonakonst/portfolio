import { site } from "../content/site";

export default function Hero() {
  return (
    <header
      id="top"
      className="hero-grid"
      style={{
        paddingTop: 168,
        paddingBottom: 96,
        borderBottom: "1px solid var(--line)",
      }}
    >
      <div className="container">
        <div className="eyebrow" style={{ color: "var(--accent)", marginBottom: 20 }}>
          {site.eyebrow}
        </div>

        <h1 className="hero-h1" style={{ fontSize: 64, lineHeight: 1.04, maxWidth: 800 }}>
          {site.name}
        </h1>

        <p
          style={{
            fontSize: 22,
            lineHeight: 1.5,
            color: "var(--ink-3)",
            maxWidth: 640,
            margin: "24px 0 0",
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

        <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginTop: 44 }}>
          <a href="#projects" className="btn btn-solid">
            View my work ↓
          </a>
          <a href="#contact" className="btn btn-outline">
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}
