import type { Metadata, Viewport } from "next";
import { Fraunces, Outfit } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { JsonLd } from "@/components/Showcase";
import { EMAIL, SITE_NAME, SITE_URL } from "@/lib/site";
import "./globals.css";

const serif = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-serif",
});

const sans = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Ô Concept Piscines — Piscines sur mesure en Tunisie | Conception & Construction",
    template: "%s | Ô Concept Piscines",
  },
  description:
    "Ô Concept Piscines conçoit et construit des piscines sur mesure en Tunisie. Design, construction, rénovation et aménagement extérieur. Basés à Ariana, nous intervenons à Tunis et dans toute la Tunisie.",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "fr_TN",
    siteName: SITE_NAME,
    title: "Ô Concept Piscines — Piscines sur mesure en Tunisie",
    description:
      "Conception et construction de piscines pensées pour votre espace, votre architecture et votre style de vie.",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#101d1b",
};

const ORG_JSONLD = {
  "@context": "https://schema.org",
  "@type": "PoolContractor",
  "@id": `${SITE_URL}/#business`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.svg`,
  email: EMAIL,
  telephone: "+21698157900",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Bureau A-216 Bloc A, Ariana Centre",
    addressLocality: "Ariana",
    postalCode: "2080",
    addressCountry: "TN",
  },
  areaServed: [{ "@type": "City", name: "Ariana" }, { "@type": "City", name: "Tunis" }, { "@type": "Country", name: "Tunisia" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr-TN" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        <a className="skip" href="#contenu">
          Aller au contenu
        </a>
        <Header />
        {children}
        <Footer />
        <JsonLd data={ORG_JSONLD} />
      </body>
    </html>
  );
}
