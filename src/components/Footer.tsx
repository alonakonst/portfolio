import { site } from "../content/site";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--line)", padding: "28px 0" }}>
      <div
        className="container"
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 8 }}
      >
        <span className="mono" style={{ fontSize: 12.5, color: "var(--ink-4)" }}>
          © {new Date().getFullYear()} {site.name}
        </span>
        <span className="mono" style={{ fontSize: 12.5, color: "var(--ink-4)" }}>
          {site.footerNote}
        </span>
      </div>
    </footer>
  );
}
