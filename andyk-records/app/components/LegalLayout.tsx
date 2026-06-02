import Image from "next/image";
import Link from "next/link";

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Cookies Policy", href: "/cookies-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Copyright", href: "/copyright" },
  { label: "Company Information", href: "/company-information" },
];

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Navbar */}
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
          <Link href="/" style={{ display: "flex", alignItems: "center" }}>
            <Image
              src="/logo.png"
              width={120}
              height={50}
              alt="Andy'K Records"
              style={{ objectFit: "contain", objectPosition: "left center" }}
              priority
            />
          </Link>
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

      {/* Content */}
      <main style={{ background: "#0a0a0a", minHeight: "100vh" }}>
        <div
          style={{
            maxWidth: 760,
            margin: "0 auto",
            padding: "3rem 1.5rem 5rem",
          }}
        >
          <Link className="back-link" href="/">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M10 12L6 8L10 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back to Andy&apos;K Records
          </Link>
          {children}
        </div>
      </main>

      {/* Legal footer */}
      <footer
        style={{
          background: "#0a0a0a",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          padding: "2.5rem 2rem",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.5rem 1.5rem",
              marginBottom: "1.5rem",
            }}
          >
            <Link className="footer-link" href="/">
              Home
            </Link>
            {LEGAL_LINKS.map((link) => (
              <Link key={link.href} className="footer-link" href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
          <p
            style={{
              fontFamily: "var(--font-mono-stack)",
              fontSize: 10,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#525252",
            }}
          >
            &#8471; &amp; &copy; 2026 ANDY&apos;K GROUP INTERNATIONAL LTD &middot; All rights
            reserved
          </p>
        </div>
      </footer>
    </>
  );
}
