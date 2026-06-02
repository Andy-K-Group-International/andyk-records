import type { Metadata } from "next";
import LegalLayout from "../components/LegalLayout";

export const metadata: Metadata = {
  title: "Disclaimer | Andy'K Records",
  description:
    "Website disclaimer for records.djandykofficial.com — official label identity of DJ Andy'K.",
  alternates: { canonical: "/disclaimer" },
};

export default function DisclaimerPage() {
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
        Website Disclaimer
      </h1>

      <p style={{ fontFamily: "var(--font-mono-stack)", fontSize: 12, color: "#525252", marginTop: "1rem", marginBottom: "2.5rem" }}>
        Last updated: 19 February 2026
      </p>

      <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", marginBottom: "2.5rem" }} />

      <article className="legal-content" style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
        <p>
          This Disclaimer applies to the website operated by Andy&apos;K Records /
          ANDY&apos;K GROUP INTERNATIONAL LTD (&ldquo;we&rdquo;, &ldquo;us&rdquo;,
          &ldquo;our&rdquo;). By using this website, you accept this Disclaimer. If you do not
          agree, please do not use the website.
        </p>

        <section>
          <h2>1) Informational purposes only</h2>
          <p>
            All information on this website is provided for general informational purposes only. It
            does not constitute (and must not be relied upon as) legal, tax, financial, accounting,
            procurement, compliance, or other professional advice.
          </p>
          <p>
            You should obtain professional advice appropriate to your situation before taking any
            action based on information from this website.
          </p>
        </section>

        <section>
          <h2>2) No client relationship created</h2>
          <p>
            Your use of this website (including downloading materials, viewing documents, or
            submitting forms) does not create a client-consultant relationship with us. Any
            engagement, scope, deliverables, fees, timelines, and responsibilities are only
            established through a separate written agreement executed by both parties (including
            valid electronic signature where applicable).
          </p>
        </section>

        <section>
          <h2>3) No guarantees / results may vary</h2>
          <p>
            Where we describe services such as business development, lead generation, outreach
            support, tender research, bid support, market entry, consulting, or similar services,
            you acknowledge that outcomes depend on multiple factors outside our control (including
            third-party responses, market conditions, procurement decisions, internal client
            processes, and timing).
          </p>
          <p>
            Unless expressly agreed in a signed contract, we do not guarantee results, including
            (without limitation) number of leads, conversion rates, revenue, procurement awards,
            shortlist selection, or any specific business outcome.
          </p>
        </section>

        <section>
          <h2>4) Accuracy, completeness and updates</h2>
          <p>
            We aim to keep information on this website accurate and up to date. However, we make no
            representations or warranties that the content is accurate, complete, reliable, or
            current at all times. Content may be changed, updated, or removed without notice.
          </p>
        </section>

        <section>
          <h2>5) Third-party links and tools</h2>
          <p>
            This website may include links to third-party websites or may integrate third-party
            services (for example, hosting, analytics, email delivery, document tools, payment
            providers). We do not control third-party services and are not responsible for their
            content, availability, security, or privacy practices. Your use of third-party services
            is at your own risk and subject to their terms.
          </p>
        </section>

        <section>
          <h2>6) Documents, templates and downloads</h2>
          <p>
            Any templates, example documents, workflows, or downloadable materials are provided
            &ldquo;as is&rdquo; and may require adaptation for your specific circumstances. Where
            documents relate to services, they may be drafts, examples, or non-binding versions
            unless expressly stated otherwise.
          </p>
          <p>
            If you are provided with a client-specific document link or access, you are responsible
            for keeping it confidential and not sharing it with unauthorised parties.
          </p>
        </section>

        <section>
          <h2>7) Limitation of liability</h2>
          <p>
            To the maximum extent permitted by law, we will not be liable for any loss or damage
            arising from or in connection with your use of (or inability to use) this website,
            including any reliance on its content.
          </p>
          <p>
            This includes (without limitation) any indirect or consequential loss, loss of profits,
            loss of revenue, loss of business, loss of data, loss of goodwill, or business
            interruption.
          </p>
          <p>
            Nothing in this Disclaimer excludes or limits liability that cannot be excluded under
            applicable law, including liability for death or personal injury caused by negligence,
            fraud, or fraudulent misrepresentation.
          </p>
        </section>

        <section>
          <h2>8) Governing law</h2>
          <p>
            This Disclaimer is governed by the laws of England and Wales, and any disputes shall be
            subject to the exclusive jurisdiction of the courts of England and Wales.
          </p>
        </section>

        <section>
          <h2>9) Contact</h2>
          <p>
            If you have questions about this Disclaimer, contact us at: ceo@andykgroup.com
          </p>
        </section>
      </article>
    </LegalLayout>
  );
}
