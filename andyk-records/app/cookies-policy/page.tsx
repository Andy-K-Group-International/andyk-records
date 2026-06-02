import type { Metadata } from "next";
import Link from "next/link";
import LegalLayout from "../components/LegalLayout";

export const metadata: Metadata = {
  title: "Cookies Policy | Andy'K Records",
  description:
    "Cookies policy for records.djandykofficial.com — how Andy'K Records uses cookies and tracking technologies.",
  alternates: { canonical: "/cookies-policy" },
};

export default function CookiesPolicyPage() {
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
        Cookies Policy
      </h1>

      <div style={{ marginTop: "0.75rem", marginBottom: "2.5rem" }}>
        <p style={{ fontFamily: "var(--font-mono-stack)", fontSize: 12, color: "#525252" }}>
          Andy&apos;K Records / ANDY&apos;K GROUP INTERNATIONAL LTD
        </p>
        <p style={{ fontFamily: "var(--font-mono-stack)", fontSize: 12, color: "#525252" }}>
          Company Number: 16453500
        </p>
        <p style={{ fontFamily: "var(--font-mono-stack)", fontSize: 12, color: "#525252" }}>
          86&ndash;90 Paul Street, London, EC2A 4NE, United Kingdom
        </p>
        <p style={{ fontFamily: "var(--font-mono-stack)", fontSize: 12, color: "#525252" }}>
          Email: ceo@andykgroup.com
        </p>
        <p style={{ fontFamily: "var(--font-mono-stack)", fontSize: 12, color: "#525252", marginTop: "0.5rem" }}>
          Last Updated: 20 February 2026
        </p>
      </div>

      <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", marginBottom: "2.5rem" }} />

      <article className="legal-content" style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
        <section>
          <h2>1. Introduction</h2>
          <p>
            This Cookies Policy explains how Andy&apos;K Records / ANDY&apos;K GROUP INTERNATIONAL
            LTD (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) uses cookies and similar
            technologies when you visit our website.
          </p>
          <p>This policy should be read together with our <Link href="/privacy-policy">Privacy Policy</Link>.</p>
          <p>
            We comply with the UK GDPR, the Data Protection Act 2018, and the Privacy and Electronic
            Communications Regulations (PECR).
          </p>
        </section>

        <section>
          <h2>2. What Are Cookies?</h2>
          <p>
            Cookies are small text files stored on your device (computer, tablet, smartphone) when
            you visit a website. They help websites function properly, improve user experience, and
            provide analytical information.
          </p>
          <p style={{ marginTop: "0.75rem" }}>Cookies may be:</p>
          <ul>
            <li><strong>Session cookies</strong> &mdash; deleted when you close your browser</li>
            <li><strong>Persistent cookies</strong> &mdash; remain stored for a defined period</li>
            <li><strong>First-party cookies</strong> &mdash; set by us</li>
            <li><strong>Third-party cookies</strong> &mdash; set by external services</li>
          </ul>
        </section>

        <section>
          <h2>3. Types of Cookies We Use</h2>

          <h3>A. Strictly Necessary Cookies</h3>
          <p>These cookies are essential for the operation of our website. They enable core functionalities such as:</p>
          <ul>
            <li>Security</li>
            <li>Network management</li>
            <li>Access to secure areas</li>
            <li>Form submission</li>
          </ul>
          <p style={{ marginTop: "0.5rem", fontSize: 13, color: "#525252" }}>
            These cookies do not require your consent.
          </p>

          <h3>B. Performance &amp; Analytics Cookies</h3>
          <p>
            These cookies help us understand how visitors use our website by collecting anonymous
            information such as:
          </p>
          <ul>
            <li>Number of visitors</li>
            <li>Pages visited</li>
            <li>Traffic sources</li>
            <li>Time spent on pages</li>
          </ul>
          <p style={{ marginTop: "0.5rem" }}>We may use tools such as:</p>
          <ul>
            <li>Vercel Analytics (privacy-friendly, no personal data)</li>
            <li>Google Analytics (or equivalent)</li>
            <li>Server log monitoring tools</li>
          </ul>
          <p style={{ marginTop: "0.5rem", fontSize: 13, color: "#525252" }}>
            These cookies are only activated with your consent.
          </p>

          <h3>C. Functional Cookies</h3>
          <p>These cookies allow the website to remember:</p>
          <ul>
            <li>Language preferences</li>
            <li>Region selection</li>
            <li>Saved settings</li>
          </ul>
          <p style={{ marginTop: "0.5rem", fontSize: 13, color: "#525252" }}>
            They improve usability but are not strictly necessary.
          </p>

          <h3>D. Marketing &amp; Tracking Cookies</h3>
          <p>If used, these cookies may:</p>
          <ul>
            <li>Track browsing behavior</li>
            <li>Measure campaign performance</li>
            <li>Enable remarketing</li>
          </ul>
          <p style={{ marginTop: "0.5rem", fontSize: 13, color: "#525252" }}>
            We only use marketing cookies with your explicit consent.
          </p>
        </section>

        <section>
          <h2>4. Legal Basis for Using Cookies</h2>
          <p>Under UK GDPR and PECR:</p>
          <ul>
            <li>Strictly necessary cookies are used based on legitimate interest.</li>
            <li>All non-essential cookies require your prior consent.</li>
          </ul>
          <p>You may withdraw your consent at any time.</p>
        </section>

        <section>
          <h2>5. Managing Cookies</h2>
          <p>You can manage cookies in the following ways:</p>

          <h3>A. Cookie Banner</h3>
          <p>When you first visit our website, you will be presented with a cookie consent banner allowing you to:</p>
          <ul>
            <li>Accept all cookies</li>
            <li>Reject non-essential cookies</li>
            <li>Customize preferences</li>
          </ul>

          <h3>B. Browser Settings</h3>
          <p>You can also control cookies through your browser settings:</p>
          <ul>
            <li>Block all cookies</li>
            <li>Delete stored cookies</li>
            <li>Set preferences per website</li>
          </ul>
          <p style={{ marginTop: "0.5rem", fontSize: 13, color: "#525252" }}>
            Note: Blocking essential cookies may affect website functionality.
          </p>
        </section>

        <section>
          <h2>Cookie List</h2>
          <p style={{ fontSize: 13, color: "#525252", marginBottom: "1.5rem" }}>
            Below is a list of the cookies we use, grouped by category.
          </p>

          <h3>A) Strictly Necessary Cookies</h3>
          <div className="legal-table-wrap" style={{ marginTop: "0.75rem" }}>
            <table className="legal-table">
              <thead>
                <tr>
                  <th>Cookie name</th>
                  <th>Provider</th>
                  <th>Purpose</th>
                  <th>Type</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="mono">cookie_consent_status</td>
                  <td>records.djandykofficial.com</td>
                  <td>Stores your cookie consent choice (accept/reject/preferences).</td>
                  <td>First-party</td>
                  <td>6 months</td>
                </tr>
                <tr>
                  <td className="mono">cookie_consent_preferences</td>
                  <td>records.djandykofficial.com</td>
                  <td>Stores category preferences (analytics/functional/marketing).</td>
                  <td>First-party</td>
                  <td>6 months</td>
                </tr>
                <tr>
                  <td className="mono">csrf_token</td>
                  <td>records.djandykofficial.com</td>
                  <td>Security cookie to protect forms from abuse (CSRF protection).</td>
                  <td>First-party</td>
                  <td>Session</td>
                </tr>
                <tr>
                  <td className="mono">session_id</td>
                  <td>records.djandykofficial.com</td>
                  <td>Maintains session state.</td>
                  <td>First-party</td>
                  <td>Session</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>B) Performance &amp; Analytics Cookies</h3>
          <div className="legal-table-wrap" style={{ marginTop: "0.75rem" }}>
            <table className="legal-table">
              <thead>
                <tr>
                  <th>Cookie name</th>
                  <th>Provider</th>
                  <th>Purpose</th>
                  <th>Type</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="mono">va_*</td>
                  <td>Vercel Analytics</td>
                  <td>Privacy-friendly analytics — no personal data stored.</td>
                  <td>First-party</td>
                  <td>Session</td>
                </tr>
                <tr>
                  <td className="mono">_ga</td>
                  <td>Google Analytics</td>
                  <td>Distinguishes users for analytics.</td>
                  <td>Third-party</td>
                  <td>2 years</td>
                </tr>
                <tr>
                  <td className="mono">_ga_&lt;container-id&gt;</td>
                  <td>Google Analytics</td>
                  <td>Persists session state for GA4.</td>
                  <td>Third-party</td>
                  <td>2 years</td>
                </tr>
                <tr>
                  <td className="mono">_gid</td>
                  <td>Google Analytics</td>
                  <td>Distinguishes users for analytics.</td>
                  <td>Third-party</td>
                  <td>24 hours</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>C) Functional Cookies</h3>
          <div className="legal-table-wrap" style={{ marginTop: "0.75rem" }}>
            <table className="legal-table">
              <thead>
                <tr>
                  <th>Cookie name</th>
                  <th>Provider</th>
                  <th>Purpose</th>
                  <th>Type</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="mono">site_language</td>
                  <td>records.djandykofficial.com</td>
                  <td>Saves language preference.</td>
                  <td>First-party</td>
                  <td>12 months</td>
                </tr>
                <tr>
                  <td className="mono">region_preference</td>
                  <td>records.djandykofficial.com</td>
                  <td>Saves region selection.</td>
                  <td>First-party</td>
                  <td>12 months</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>D) Marketing &amp; Tracking Cookies (Meta Pixel)</h3>
          <div className="legal-table-wrap" style={{ marginTop: "0.75rem" }}>
            <table className="legal-table">
              <thead>
                <tr>
                  <th>Cookie name</th>
                  <th>Provider</th>
                  <th>Purpose</th>
                  <th>Type</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="mono">_fbp</td>
                  <td>Meta (Facebook)</td>
                  <td>Stores browser ID to deliver/measure ads and remarketing (if enabled).</td>
                  <td>Third-party</td>
                  <td>3 months</td>
                </tr>
                <tr>
                  <td className="mono">_fbc</td>
                  <td>Meta (Facebook)</td>
                  <td>Stores click ID from ads (if enabled).</td>
                  <td>Third-party</td>
                  <td>3 months</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p style={{ fontSize: 13, color: "#525252", fontStyle: "italic" }}>
            Analytics and marketing cookies are only activated after you provide consent via the
            cookie banner.
          </p>
        </section>

        <section>
          <h2>6. Third-Party Cookies</h2>
          <p>
            Some cookies may be set by third-party services integrated into our website, including:
          </p>
          <ul>
            <li>Analytics tools</li>
            <li>Payment processors</li>
            <li>CRM systems</li>
            <li>Embedded content providers</li>
          </ul>
          <p>
            We ensure these providers comply with GDPR standards and process data securely.
          </p>
        </section>

        <section>
          <h2>7. Data Retention</h2>
          <p>Cookies are stored for varying durations depending on their type:</p>
          <ul>
            <li><strong>Session cookies:</strong> deleted after browser session ends</li>
            <li><strong>Persistent cookies:</strong> stored for up to 24 months (or as required for functionality)</li>
          </ul>
        </section>

        <section>
          <h2>8. Updates to This Policy</h2>
          <p>
            We may update this Cookies Policy from time to time. Any significant changes will be
            published on our website.
          </p>
        </section>

        <section>
          <h2>9. Contact</h2>
          <p>For any questions regarding this Cookies Policy, please contact:</p>
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
