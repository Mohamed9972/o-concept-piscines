import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon } from "@/components/Icons";
import PageHero from "@/components/PageHero";
import QuoteForm from "@/components/QuoteForm";
import Reveal from "@/components/Reveal";
import { JsonLd } from "@/components/Showcase";
import { ADDRESS_LINES, EMAIL, PHONE_DISPLAY, PHONE_TEL, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact — Ariana | 98 157 900",
  description:
    "Contactez Ô Concept Piscines à Ariana : 98 157 900, piscineoconcept@gmail.com, Bureau A-216 Bloc A, Ariana Centre, 2080 Ariana. Appel, WhatsApp, email ou formulaire.",
  alternates: { canonical: SITE_URL + "/contact" },
  openGraph: {
    title: "Contact — Ô Concept Piscines",
    description: "98 157 900 · piscineoconcept@gmail.com · Ariana Centre, Tunisie.",
    url: SITE_URL + "/contact",
  },
};

export default function Contact() {
  return (
    <main id="contenu">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL + "/" },
            { "@type": "ListItem", position: 2, name: "Contact", item: SITE_URL + "/contact" },
          ],
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Ô Concept Piscines",
          telephone: "+21698157900",
          email: EMAIL,
          url: SITE_URL + "/contact",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Bureau A-216 Bloc A, Ariana Centre",
            addressLocality: "Ariana",
            postalCode: "2080",
            addressCountry: "TN",
          },
        }}
      />
      <PageHero
        title="Contactez Ô Concept Piscines"
        intro="Appelez, écrivez ou passez nous voir à Ariana Centre. Nous répondons vite — surtout sur WhatsApp."
        crumbs={[{ href: "/", label: "Accueil" }, { label: "Contact" }]}
      />
      <section className="section">
        <div className="wrap">
          <Reveal>
            <div className="contact-cards">
              <a href={PHONE_TEL}>
                <span className="clabel">Téléphone</span>
                <strong>{PHONE_DISPLAY}</strong>
                <br />
                <span className="muted">Appeler maintenant</span>
              </a>
              <a href="https://wa.me/21698157900?text=Bonjour%20%C3%94%20Concept%20Piscines">
                <span className="clabel">WhatsApp</span>
                <strong>Discuter sur WhatsApp</strong>
                <br />
                <span className="muted">Photos et questions bienvenues</span>
              </a>
              <a href={`mailto:${EMAIL}`}>
                <span className="clabel">Email</span>
                <strong>{EMAIL}</strong>
                <br />
                <span className="muted">Écrire un email</span>
              </a>
            </div>
          </Reveal>
          <div className="split" style={{ marginTop: "3rem" }}>
            <Reveal>
              <h2>Notre adresse</h2>
              <p className="lead">
                {ADDRESS_LINES.map((l) => (
                  <span key={l}>
                    {l}
                    <br />
                  </span>
                ))}
              </p>
              <iframe
                className="map"
                title="Carte — Ô Concept Piscines, Ariana Centre"
                src="https://www.google.com/maps?q=Ariana+Centre,+Ariana,+Tunisie&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </Reveal>
            <Reveal>
              <h2 style={{ fontSize: "1.6rem" }}>Écrivez-nous</h2>
              <QuoteForm compact />
                <p style={{ marginTop: "1rem" }}>
                  <Link className="btn btn-teal" href="/devis">
                    Ou demander un devis <ArrowIcon />
                  </Link>
                </p>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
