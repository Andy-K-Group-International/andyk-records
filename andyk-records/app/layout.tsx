import type { Metadata } from "next";
import { DM_Sans, IBM_Plex_Mono, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "800"],
  variable: "--font-dm-sans",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ibm-mono",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Andy'K Records | Official Release Identity of DJ Andy'K",
  description:
    "Andy'K Records is the official music label and release identity for DJ Andy'K — original electronic music, trance, progressive sound, albums and collaborations.",
  openGraph: {
    title: "Andy'K Records | Official Release Identity of DJ Andy'K",
    description:
      "Andy'K Records is the official music label and release identity for DJ Andy'K — original electronic music, trance, progressive sound, albums and collaborations.",
    url: "https://records.djandykofficial.com",
    siteName: "Andy'K Records",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Andy'K Records",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Andy'K Records | Official Release Identity of DJ Andy'K",
    description:
      "Andy'K Records is the official music label and release identity for DJ Andy'K — original electronic music, trance, progressive sound, albums and collaborations.",
    images: ["/logo.png"],
  },
  metadataBase: new URL("https://records.djandykofficial.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${ibmPlexMono.variable} ${playfairDisplay.variable}`}
    >
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
