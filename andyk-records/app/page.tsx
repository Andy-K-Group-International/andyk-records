import Image from "next/image";

const WAVEFORM_BARS = [
  { h: 20, d: 0.00 }, { h: 38, d: 0.07 }, { h: 55, d: 0.14 }, { h: 32, d: 0.21 },
  { h: 65, d: 0.28 }, { h: 22, d: 0.35 }, { h: 48, d: 0.42 }, { h: 62, d: 0.49 },
  { h: 28, d: 0.56 }, { h: 44, d: 0.63 }, { h: 58, d: 0.70 }, { h: 18, d: 0.77 },
  { h: 40, d: 0.84 }, { h: 54, d: 0.91 }, { h: 24, d: 0.98 }, { h: 50, d: 1.05 },
  { h: 68, d: 1.12 }, { h: 34, d: 1.19 }, { h: 52, d: 1.26 }, { h: 20, d: 1.33 },
  { h: 42, d: 1.26 }, { h: 60, d: 1.19 }, { h: 30, d: 1.12 }, { h: 50, d: 1.05 },
  { h: 16, d: 0.98 }, { h: 46, d: 0.91 }, { h: 62, d: 0.84 }, { h: 36, d: 0.77 },
  { h: 54, d: 0.70 }, { h: 22, d: 0.63 }, { h: 40, d: 0.56 }, { h: 58, d: 0.49 },
  { h: 26, d: 0.42 }, { h: 44, d: 0.35 }, { h: 18, d: 0.28 }, { h: 50, d: 0.21 },
  { h: 64, d: 0.14 }, { h: 30, d: 0.07 }, { h: 48, d: 0.00 }, { h: 22, d: 0.07 },
];

const RELEASE_ITEMS = [
  {
    num: "01",
    title: "Original Electronic Music",
    desc: "Tracks, albums and singles produced under the DJ Andy'K name",
  },
  {
    num: "02",
    title: "Trance & Progressive Releases",
    desc: "Emotional, euphoric and progressive electronic productions",
  },
  {
    num: "03",
    title: "Albums, Singles & Collaborations",
    desc: "Full catalogue releases and selected featured works",
  },
  {
    num: "04",
    title: "Cover Art & Visual Identity",
    desc: "Release artwork, visual direction and brand consistency",
  },
  {
    num: "05",
    title: "Release Credits & Publishing",
    desc: "Label references, production credits and publishing identity",
  },
  {
    num: "06",
    title: "Music Storytelling",
    desc: "Emotional sound design, narrative-driven production and cinematic atmosphere",
  },
];

const monoLabel: React.CSSProperties = {
  fontFamily: "var(--font-mono-stack)",
  fontSize: 11,
  letterSpacing: "0.16em",
  color: "#a3a3a3",
  textTransform: "uppercase" as const,
};

const sectionHeading: React.CSSProperties = {
  fontFamily: "var(--font-display-stack)",
  fontWeight: 800,
  fontSize: "clamp(1.75rem, 4vw, 3rem)",
  lineHeight: 1.15,
  letterSpacing: "-0.02em",
  color: "#ffffff",
};

const accentEm: React.CSSProperties = {
  fontFamily: "var(--font-accent-stack)",
  fontStyle: "italic",
  fontWeight: 400,
  color: "#a3a3a3",
  fontSize: "0.95em",
};

export default function Home() {
  return (
    <>
      {/* ── NAVBAR ─────────────────────────────────────── */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "rgba(10,10,10,0.96)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 68,
          }}
        >
          <Image
            src="/logo.png"
            width={120}
            height={50}
            alt="Andy'K Records"
            style={{ objectFit: "contain", objectPosition: "left center", filter: "invert(1) brightness(1.2)" }}
            priority
          />
          <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
            <a
              className="nav-link"
              href="https://www.djandykofficial.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              DJ Andy&apos;K
            </a>
            <a
              className="nav-link"
              href="https://lab.djandykofficial.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Music Lab
            </a>
          </div>
        </div>
      </nav>

      {/* ── HERO ───────────────────────────────────────── */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          padding: "0 2rem 9rem",
          textAlign: "center",
          background: "#0a0a0a",
        }}
      >
        <Image
          src="/logo.png"
          className="hero-logo"
          width={320}
          height={320}
          alt="Andy'K Records"
          style={{ filter: "invert(1) brightness(1.1)", display: "block", margin: "80px auto 40px" }}
          priority
        />

        <p style={{ ...monoLabel, marginBottom: "2rem" }}>
          The Official Release Identity of DJ Andy&apos;K
        </p>

        <h1
          style={{
            fontFamily: "var(--font-display-stack)",
            fontWeight: 800,
            fontSize: "clamp(3rem, 8vw, 6rem)",
            lineHeight: 1,
            letterSpacing: "-0.03em",
            color: "#ffffff",
          }}
        >
          ANDY&apos;K RECORDS
        </h1>

        <p
          style={{
            fontFamily: "var(--font-accent-stack)",
            fontStyle: "italic",
            fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
            color: "#a3a3a3",
            maxWidth: 540,
            lineHeight: 1.6,
            marginTop: "2rem",
          }}
        >
          Original electronic music. Emotional trance. Progressive sound.
        </p>

        <div className="hero-ctas" style={{ marginTop: "2.5rem" }}>
          <a
            className="btn-primary"
            href="https://www.djandykofficial.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            EXPLORE DJ ANDY&apos;K &rarr;
          </a>
          <a
            className="btn-secondary"
            href="https://lab.djandykofficial.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            VISIT MUSIC LAB &rarr;
          </a>
        </div>

        {/* Animated waveform */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 80,
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            gap: 3,
            overflow: "hidden",
          }}
        >
          {WAVEFORM_BARS.map((bar, i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: 2,
                height: bar.h,
                background: "rgba(255,255,255,0.2)",
                borderRadius: 1,
                animation: `waveBar ${1.2 + (i % 5) * 0.1}s ease-in-out ${bar.d}s infinite`,
                transformOrigin: "bottom",
              }}
            />
          ))}
        </div>
      </section>

      {/* ── ABOUT ──────────────────────────────────────── */}
      <section style={{ background: "#111111", padding: "100px 2rem" }}>
        <div
          style={{
            maxWidth: 680,
            margin: "0 auto",
            display: "flex",
            gap: "3rem",
            alignItems: "stretch",
          }}
        >
          <div
            style={{
              width: 2,
              background: "rgba(255,255,255,0.9)",
              flexShrink: 0,
              borderRadius: 1,
            }}
          />
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1.75rem" }}>
            <p style={monoLabel}>About</p>
            <h2 style={sectionHeading}>
              A Music Label Identity for Emotional{" "}
              <em style={accentEm}>Electronic Sound</em>
            </h2>
            <p style={{ color: "#a3a3a3", fontSize: 17, lineHeight: 1.8 }}>
              Andy&apos;K Records exists as the release and label identity behind DJ Andy&apos;K
              music projects. It supports original tracks, albums, visual concepts, selected
              collaborations, and publishing references connected to the DJ Andy&apos;K universe.
              The label is focused on emotional electronic music, trance, progressive sound,
              cinematic atmosphere, and creative storytelling.
            </p>
          </div>
        </div>
      </section>

      {/* ── RELEASE IDENTITY ───────────────────────────── */}
      <section style={{ background: "#0a0a0a", padding: "7rem 2rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: "3.5rem", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <p style={monoLabel}>Release Identity</p>
            <h2 style={sectionHeading}>
              Built for Releases, Credits and{" "}
              <em style={accentEm}>Creative Direction</em>
            </h2>
          </div>

          <div
            className="release-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {RELEASE_ITEMS.map((item) => (
              <div className="release-card" key={item.num}>
                <span
                  style={{
                    fontFamily: "var(--font-mono-stack)",
                    fontSize: 11,
                    letterSpacing: "0.14em",
                    color: "#525252",
                    display: "block",
                    marginBottom: 12,
                  }}
                >
                  {item.num}
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-display-stack)",
                    fontWeight: 800,
                    fontSize: 18,
                    letterSpacing: "-0.01em",
                    color: "#ffffff",
                    marginBottom: 8,
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ color: "#a3a3a3", fontSize: 14, lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ECOSYSTEM ──────────────────────────────────── */}
      <section style={{ background: "#111111", padding: "7rem 2rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "3.5rem" }}>
            <p style={monoLabel}>Ecosystem</p>
            <h2 style={sectionHeading}>
              Part of the DJ Andy&apos;K{" "}
              <em style={accentEm}>Official Ecosystem</em>
            </h2>
            <p style={{ color: "#a3a3a3", fontSize: "1.05rem", lineHeight: 1.8, maxWidth: 580 }}>
              Andy&apos;K Records belongs to the creative music branch of the Andy&apos;K
              ecosystem, together with DJ Andy&apos;K Official and Andy&apos;K Music Lab.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 0,
              maxWidth: 480,
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-mono-stack)",
                fontSize: 11,
                letterSpacing: "0.14em",
                color: "#525252",
                textTransform: "uppercase",
                paddingBottom: "1rem",
                paddingLeft: "2rem",
              }}
            >
              DJ ANDY&apos;K OFFICIAL
            </p>

            <a
              className="ecosystem-link"
              href="https://www.djandykofficial.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>&rarr;</span> DJ ANDY&apos;K
            </a>

            <a
              className="ecosystem-link ecosystem-link--current"
              href="https://records.djandykofficial.com"
            >
              <span>&rarr;</span> ANDY&apos;K RECORDS
            </a>

            <a
              className="ecosystem-link"
              href="https://lab.djandykofficial.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>&rarr;</span> ANDY&apos;K MUSIC LAB
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────── */}
      <footer
        style={{
          background: "#0a0a0a",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          padding: "4rem 2rem 3rem",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
          }}
        >
          <Image
            src="/logo.png"
            width={80}
            height={80}
            alt="Andy'K Records"
            style={{ objectFit: "contain", objectPosition: "left center", filter: "invert(1) brightness(1.2)" }}
          />

          <p style={{ color: "#525252", fontSize: "0.875rem", lineHeight: 1.7 }}>
            &copy; 2026 Andy&apos;K Records. All rights reserved. A DJ Andy&apos;K release
            identity.
          </p>

          <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
            <a
              className="footer-link"
              href="https://www.djandykofficial.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              DJ Andy&apos;K Official
            </a>
            <a
              className="footer-link"
              href="https://lab.djandykofficial.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Andy&apos;K Music Lab
            </a>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 24,
              borderTop: "1px solid rgba(255,255,255,0.06)",
              paddingTop: "1.5rem",
            }}
          >
            <a className="legal-link" href="/privacy-policy">Privacy Policy</a>
            <a className="legal-link" href="/cookies-policy">Cookies Policy</a>
            <a className="legal-link" href="/terms-and-conditions">Terms &amp; Conditions</a>
            <a className="legal-link" href="/disclaimer">Disclaimer</a>
            <a className="legal-link" href="/copyright">Copyright</a>
            <a className="legal-link" href="/company-information">Company Information</a>
          </div>

          <p
            style={{
              fontFamily: "var(--font-mono-stack)",
              color: "#525252",
              fontSize: 10,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            &#8471; &amp; &copy; 2026 ANDY&apos;K GROUP INTERNATIONAL LTD
          </p>
        </div>
      </footer>
    </>
  );
}
