import type { Metadata } from "next";
import Link from "next/link";
import LegalLayout from "../components/LegalLayout";

export const metadata: Metadata = {
  title: "Company Information | Andy'K Records",
  description:
    "Company information for ANDY'K GROUP INTERNATIONAL LTD — official record label of DJ Andy'K.",
  alternates: { canonical: "/company-information" },
};

export default function CompanyInformationPage() {
  return (
    <LegalLayout>
      <h1
        style={{
          fontFamily: "var(--font-display-stack)",
          fontWeight: 800,
          fontSize: "clamp(1.75rem, 5vw, 2.5rem)",
          letterSpacing: "-0.02em",
          color: "#ffffff",
          marginBottom: "0.25rem",
        }}
      >
        Imprint / Company Information
      </h1>
      <p style={{ fontFamily: "var(--font-mono-stack)", fontSize: 12, color: "#525252" }}>
        (Legal Notice)
      </p>
      <p style={{ fontFamily: "var(--font-mono-stack)", fontSize: 12, color: "#525252", marginTop: "1rem", marginBottom: "2.5rem" }}>
        Last updated: 19 February 2026
      </p>

      <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", marginBottom: "2.5rem" }} />

      <article className="legal-content" style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
        <p>
          This website is operated by Andy&apos;K Records / ANDY&apos;K GROUP INTERNATIONAL LTD
          (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;).
        </p>

        <section>
          <h2>1) Company details</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
            <p><strong>Legal name:</strong> Andy&apos;K Records / ANDY&apos;K GROUP INTERNATIONAL LTD</p>
            <p><strong>Company type:</strong> Private company limited by shares (United Kingdom)</p>
            <p><strong>Company number:</strong> 16453500</p>
            <p><strong>Registered office:</strong> 86&ndash;90 Paul Street, London, EC2A 4NE, United Kingdom</p>
          </div>
        </section>

        <section>
          <h2>2) Contact</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
            <p><strong>Email:</strong> ceo@andykgroup.com</p>
            <p><strong>Website:</strong> records.djandykofficial.com</p>
          </div>
        </section>

        <section>
          <h2>Artist information</h2>
          <p>
            DJ Andy&apos;K is an artist name of Andrej Kneisl. Music is released under
            ANDY&apos;K GROUP INTERNATIONAL LTD (UK Company No. 16453500, 86&ndash;90 Paul
            Street, London, EC2A 4NE, United Kingdom). Andy&apos;K Records is the official
            release and label identity of DJ Andy&apos;K.
          </p>
        </section>

        <section>
          <h2>3) Business information</h2>
          <p>
            Unless otherwise stated, the content and services described on this website are
            provided by Andy&apos;K Records / ANDY&apos;K GROUP INTERNATIONAL LTD.
          </p>
        </section>

        <section>
          <h2>4) Intellectual property</h2>
          <p>
            All content on this website (including text, branding, logos, templates, layouts,
            documents, and materials) is owned by or licensed to Andy&apos;K Records /
            ANDY&apos;K GROUP INTERNATIONAL LTD and is protected by applicable intellectual
            property laws. Unauthorised copying, reproduction, distribution, or commercial reuse
            is prohibited.
          </p>
        </section>

        <section>
          <h2>5) Liability notice</h2>
          <p>
            We make reasonable efforts to keep the content on this website accurate and up to date.
            However, we do not guarantee that all information is complete, accurate, or current at
            all times. Use of this website and reliance on its content is at your own risk.
          </p>
          <p>
            For more information, please refer to our{" "}
            <Link href="/terms-and-conditions">Website Terms &amp; Conditions</Link> and{" "}
            <Link href="/disclaimer">Disclaimer</Link>.
          </p>
        </section>

        <section>
          <h2>6) Privacy and cookies</h2>
          <p>
            Information about how we process personal data is provided in our{" "}
            <Link href="/privacy-policy">Privacy Policy</Link>. Information about cookies and
            similar technologies is provided in our{" "}
            <Link href="/cookies-policy">Cookies Policy</Link>.
          </p>
        </section>

        <section>
          <h2>7) Governing law</h2>
          <p>
            This Legal Notice is governed by the laws of England and Wales and any disputes shall
            be subject to the exclusive jurisdiction of the courts of England and Wales.
          </p>
        </section>
      </article>
    </LegalLayout>
  );
}
