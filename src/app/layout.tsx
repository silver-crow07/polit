import type { Metadata, Viewport } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com"),
  title: {
    default: `${site.name} — Former Block Pramukh, Hasayan`,
    template: `%s | ${site.name}`,
  },
  description: site.seoDescription,
  keywords: [
    site.name,
    site.alternateName,
    "Former Block Pramukh Hasayan",
    "Hasayan Hathras",
    "Uttar Pradesh public representative",
  ],
  openGraph: {
    type: "profile",
    title: `${site.name} — Former Block Pramukh, Hasayan`,
    description: site.seoDescription,
    siteName: site.name,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Former Block Pramukh, Hasayan`,
    description: site.seoDescription,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#101D35",
  width: "device-width",
  initialScale: 1,
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  alternateName: site.alternateName,
  jobTitle: "Former Block Pramukh",
  worksFor: {
    "@type": "Organization",
    name: "Hasayan",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hasayan",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
  description: site.intro,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} ${playfair.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-saffron focus:px-4 focus:py-2 focus:font-semibold focus:text-navy"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
