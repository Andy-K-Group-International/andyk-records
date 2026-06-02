import type { Metadata } from "next";
import LegalLayout from "../components/LegalLayout";

export const metadata: Metadata = {
  title: "Copyright | Andy'K Records",
  description:
    "Copyright information for Andy'K Records and DJ Andy'K music. ℗ & © ANDY'K GROUP INTERNATIONAL LTD.",
  alternates: { canonical: "/copyright" },
};

export default function CopyrightPage() {
  return (
    <LegalLayout>
      <h1
        style={{
          fontFamily: "var(--font-display-stack)",
          fontWeight: 800,
          fontSize: "clamp(1.75rem, 5vw, 2.5rem)",
          letterSpacing: "-0.02em",
          color: "#ffffff",
          marginBottom: "0.5rem",
        }}
      >
        Copyright Notice
      </h1>

      <div style={{ marginTop: "0.75rem", marginBottom: "2.5rem" }}>
        <p style={{ fontFamily: "var(--font-mono-stack)", fontSize: 12, color: "#525252" }}>
          Andy&apos;K Records / ANDY&apos;K GROUP INTERNATIONAL LTD
        </p>
        <p style={{ fontFamily: "var(--font-mono-stack)", fontSize: 12, color: "#525252" }}>
          Last updated: 2026
        </p>
      </div>

      <article className="legal-content" style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
        <section>
          <h2>Music &amp; Sound Recordings</h2>
          <div className="legal-info-box" style={{ marginTop: "0.75rem" }}>
            <p style={{ fontFamily: "var(--font-mono-stack)", fontSize: 13, color: "#ffffff", marginBottom: "0.5rem" }}>
              &#8471; &amp; &copy; 2026 ANDY&apos;K GROUP INTERNATIONAL LTD
            </p>
            <p>
              All sound recordings, master recordings, and music productions released under the name
              DJ Andy&apos;K are the exclusive property of ANDY&apos;K GROUP INTERNATIONAL LTD. All
              rights reserved.
            </p>
          </div>
        </section>

        <section>
          <h2>Lyrics, Artwork &amp; Visual Content</h2>
          <div className="legal-info-box" style={{ marginTop: "0.75rem" }}>
            <p style={{ fontFamily: "var(--font-mono-stack)", fontSize: 13, color: "#ffffff", marginBottom: "0.5rem" }}>
              &copy; 2026 DJ Andy&apos;K / ANDY&apos;K GROUP INTERNATIONAL LTD
            </p>
            <p>
              All lyrics, album artwork, cover designs, artist photographs, logos, and visual
              materials associated with DJ Andy&apos;K are protected by copyright and owned by or
              exclusively licensed to ANDY&apos;K GROUP INTERNATIONAL LTD.
            </p>
          </div>
        </section>

        <section>
          <h2>Website Content</h2>
          <p>
            &copy; 2026 Andy&apos;K Records / ANDY&apos;K GROUP INTERNATIONAL LTD. All text, code,
            design, and multimedia content published on records.djandykofficial.com is protected by
            applicable intellectual property laws.
          </p>
        </section>

        <section>
          <h2>Prohibited Uses</h2>
          <p>Without prior written permission, you may not:</p>
          <ul>
            <li>Copy, reproduce, or distribute any music, recordings, or artwork</li>
            <li>Use DJ Andy&apos;K music in videos, films, broadcasts, or commercial projects</li>
            <li>Re-upload or redistribute tracks on any platform</li>
            <li>Create derivative works based on the music or visual identity</li>
            <li>Use the DJ Andy&apos;K or Andy&apos;K Records name, logo, or likeness for promotional purposes</li>
          </ul>
        </section>

        <section>
          <h2>Licensing &amp; Sync</h2>
          <p>
            For licensing enquiries — including sync licensing, broadcast use, playlist placement,
            cover permissions, or any commercial use of DJ Andy&apos;K music — please contact:
          </p>
          <div className="legal-info-box" style={{ marginTop: "0.75rem" }}>
            <p style={{ color: "#ffffff", fontWeight: 600, marginBottom: "0.25rem" }}>
              ANDY&apos;K GROUP INTERNATIONAL LTD
            </p>
            <p>
              Email:{" "}
              <a href="mailto:ceo@andykgroup.com">ceo@andykgroup.com</a>
            </p>
            <p>Registered office: 86&ndash;90 Paul Street, London, EC2A 4NE, United Kingdom</p>
            <p>Company No.: 16453500</p>
          </div>
        </section>

        <section>
          <h2>Streaming &amp; Personal Use</h2>
          <p>
            Listening to DJ Andy&apos;K music through licensed streaming platforms (Spotify, Apple
            Music, TIDAL, SoundCloud, YouTube) is permitted and encouraged within the terms of those
            platforms. Such use does not grant any ownership rights over the content.
          </p>
        </section>

        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: "2rem",
            fontFamily: "var(--font-mono-stack)",
            fontSize: 11,
            color: "#525252",
            lineHeight: 1.7,
          }}
        >
          <p>&#8471; &amp; &copy; 2026 ANDY&apos;K GROUP INTERNATIONAL LTD &middot; All rights reserved</p>
          <p>UK Company No. 16453500 &middot; 86&ndash;90 Paul Street, London, EC2A 4NE</p>
        </div>
      </article>
    </LegalLayout>
  );
}
