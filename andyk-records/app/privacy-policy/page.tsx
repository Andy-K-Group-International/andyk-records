import type { Metadata } from "next";
import Link from "next/link";
import LegalLayout from "../components/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy | Andy'K Records",
  description:
    "Privacy policy for records.djandykofficial.com — official label identity of DJ Andy'K, released under ANDY'K GROUP INTERNATIONAL LTD.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
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
        Privacy Policy
      </h1>

      <div style={{ marginTop: "0.75rem", marginBottom: "2.5rem" }}>
        <p style={{ fontFamily: "var(--font-mono-stack)", fontSize: 12, color: "#525252" }}>
          Andy&apos;K Records / ANDY&apos;K GROUP INTERNATIONAL LTD
        </p>
        <p style={{ fontFamily: "var(--font-mono-stack)", fontSize: 12, color: "#525252" }}>
          Registered Company Number: 16453500
        </p>
        <p style={{ fontFamily: "var(--font-mono-stack)", fontSize: 12, color: "#525252" }}>
          86&ndash;90 Paul Street, London, EC2A 4NE, United Kingdom
        </p>
        <p style={{ fontFamily: "var(--font-mono-stack)", fontSize: 12, color: "#525252" }}>
          Email: ceo@andykgroup.com
        </p>
        <p
          style={{
            fontFamily: "var(--font-mono-stack)",
            fontSize: 12,
            color: "#525252",
            marginTop: "0.5rem",
          }}
        >
          DJ Andy&apos;K is an artist name of Andrej Kneisl. Music released under ANDY&apos;K
          GROUP INTERNATIONAL LTD (UK Company No. 16453500, 86&ndash;90 Paul Street, London,
          EC2A 4NE).
        </p>
      </div>

      <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", marginBottom: "2.5rem" }} />

      <article className="legal-content" style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
        <section>
          <h2>Introduction</h2>
          <p>
            Andy&apos;K Records / ANDY&apos;K GROUP INTERNATIONAL LTD (&ldquo;we&rdquo;,
            &ldquo;us&rdquo;, &ldquo;our&rdquo;) is committed to protecting and respecting your
            privacy. This Privacy Policy explains how we collect, use, and safeguard personal data
            in connection with our B2G and B2B lead generation and outreach services conducted
            across multiple languages and regions.
          </p>
          <p>
            We comply fully with the UK General Data Protection Regulation (UK GDPR) and the UK
            Data Protection Act 2018.
          </p>
        </section>

        <section>
          <h2>1. Data We Collect</h2>
          <p>
            We collect personal data necessary for B2B lead generation and outreach, including but
            not limited to:
          </p>
          <ul>
            <li>Business contact details (name, job title, company name, business email, phone number)</li>
            <li>Communication content (emails, call recordings, meeting notes)</li>
            <li>Technical data (IP addresses, device information, browsing behavior when you visit our website)</li>
            <li>Language preferences and regional data for outreach customization</li>
          </ul>
        </section>

        <section>
          <h2>2. How We Use Your Data</h2>
          <p>We use your personal data to:</p>
          <ul>
            <li>Identify and contact potential business clients and partners</li>
            <li>Customize communication and outreach based on language and region</li>
            <li>Provide, manage, and improve our B2B lead generation and outreach services</li>
            <li>Comply with legal and regulatory obligations</li>
          </ul>
        </section>

        <section>
          <h2>3. Legal Basis for Processing</h2>
          <p>Our processing of your data is based on one or more of the following:</p>
          <ul>
            <li>Your consent (where applicable)</li>
            <li>
              Legitimate interests: To conduct and improve our business outreach activities, provided
              this does not override your rights
            </li>
            <li>Compliance with legal obligations</li>
          </ul>
        </section>

        <section>
          <h2>4. Data Sharing</h2>
          <p>We do not sell or rent your personal data. We may share data with:</p>
          <ul>
            <li>Trusted third-party service providers (e.g., CRM platforms, communication tools)</li>
            <li>Regulatory authorities if required by law</li>
          </ul>
          <p>
            All third parties are required to process your data securely and in accordance with GDPR
            and UK Data Protection laws.
          </p>
        </section>

        <section>
          <h2>5. International Transfers</h2>
          <p>
            As we operate in multiple countries and languages, your data may be transferred outside
            the UK and European Economic Area (EEA). When this happens, we ensure appropriate
            safeguards are in place to protect your data according to GDPR standards.
          </p>
        </section>

        <section>
          <h2>6. Data Retention</h2>
          <p>
            We retain your personal data only for as long as necessary to fulfill the purposes
            outlined, or as required by law. When data is no longer needed, it will be securely
            deleted or anonymized.
          </p>
        </section>

        <section>
          <h2>7. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access the personal data we hold about you</li>
            <li>Request correction or deletion of your data</li>
            <li>Object to or restrict processing</li>
            <li>Data portability</li>
            <li>Withdraw consent at any time (where processing is based on consent)</li>
            <li>Lodge a complaint with the UK Information Commissioner&apos;s Office (ICO)</li>
          </ul>
          <p>
            To exercise any of these rights, please contact us at: ceo@andykgroup.com.
          </p>
        </section>

        <section>
          <h2>8. Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your data from
            unauthorized access, loss, or destruction.
          </p>
        </section>

        <section>
          <h2>9. Cookies &amp; Tracking</h2>
          <p>
            Our website uses cookies to improve user experience and gather technical data. You can
            manage cookie preferences via your browser settings or our{" "}
            <Link href="/cookies-policy">cookie consent banner</Link>.
          </p>
        </section>

        <section>
          <h2>10. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any
            significant changes via our website or direct communication.
          </p>
        </section>

        <section>
          <h2>11. Contact</h2>
          <p>
            For questions or concerns about this Privacy Policy or our data practices, please
            contact:
          </p>
          <div
            style={{
              marginTop: "0.75rem",
              fontFamily: "var(--font-mono-stack)",
              fontSize: 13,
              color: "#a3a3a3",
              lineHeight: 1.7,
            }}
          >
            <p style={{ color: "#ffffff", fontWeight: 500 }}>
              Andy&apos;K Records / ANDY&apos;K GROUP INTERNATIONAL LTD
            </p>
            <p>Email: ceo@andykgroup.com</p>
            <p>Address: 86&ndash;90 Paul Street, London, EC2A 4NE, United Kingdom</p>
          </div>
        </section>
      </article>
    </LegalLayout>
  );
}
