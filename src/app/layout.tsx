import type { Metadata, Viewport } from "next";
import { Fraunces, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ScrollReveal } from "@/components/scroll-reveal";
import {
  INVITE_URL,
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
  SUPPORT_URL,
} from "@/lib/site";
import { cn } from "@/lib/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// Fraunces — soft, characterful display serif that matches the mascot's
// warm, slightly vintage personality while staying grown-up at large sizes.
const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  axes: ["SOFT", "opsz"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — ${SITE_TAGLINE}`,
    template: `%s — ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: "snibcall" }],
  creator: "snibcall",
  publisher: "snibcall",
  keywords: SITE_KEYWORDS,
  category: "technology",
  classification: "Discord Bot",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    url: "/",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    creator: "@snibcall",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#121213" },
    { media: "(prefers-color-scheme: light)", color: "#121213" },
  ],
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

// JSON-LD structured data — helps Google show the bot as a SoftwareApplication
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      inLanguage: "en-US",
      publisher: { "@id": `${SITE_URL}/#org` },
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#org`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/icon`,
      sameAs: [SUPPORT_URL],
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${SITE_URL}/#app`,
      name: SITE_NAME,
      applicationCategory: "CommunicationApplication",
      operatingSystem: "Discord",
      description: SITE_DESCRIPTION,
      url: SITE_URL,
      downloadUrl: INVITE_URL,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      publisher: { "@id": `${SITE_URL}/#org` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={cn(
        "dark h-full antialiased",
        geistSans.variable,
        geistMono.variable,
        fraunces.variable
      )}
      lang="en"
    >
      <body
        className="flex min-h-full flex-col overflow-x-hidden bg-background font-sans text-foreground antialiased"
        data-scroll-behavior="smooth"
      >
        <div
          aria-hidden="true"
          className="scroll-progress fixed top-0 left-0 z-[200] h-0.5 w-full bg-pink-500"
        />
        {children}
        <ScrollReveal />
        <script
          // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD is generated server-side from trusted constants.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          type="application/ld+json"
        />
      </body>
    </html>
  );
}
