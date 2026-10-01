import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon } from "@/components/Icons";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { JsonLd } from "@/components/Showcase";
import { ADDRESS_LINES, EMAIL, PHONE_DISPLAY, PHONE_TEL, SITE_URL, whatsappUrl } from "@/lib/site";

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

const WA_HELLO = whatsappUrl("Bonjour Ô Concept Piscines, je vous contacte depuis votre site.");

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
        title="Contact"
        intro="Téléphone, WhatsApp ou email — choisissez le moyen le plus simple. Basés à Ariana Centre, nous intervenons à Tunis et dans toute la Tunisie."
        crumbs={[{ href: "/", label: "Accueil" }, { label: "Contact" }]}
      />
      <section className="section" aria-label="Moyens de contact">
        <div className="wrap">
          <Reveal>
            <h2>Joignez-nous directement</h2>
            <p className="lead">Pas de standard, pas d&apos;attente : vous parlez à l&apos;équipe qui construira votre piscine.</p>
          </Reveal>
          <Reveal>
            <div className="cards3">
              <a href={PHONE_TEL}>
                <span className="clabel">Téléphone</span>
                <strong>{PHONE_DISPLAY}</strong>
                <span className="muted">Appel direct, réponse rapide</span>
              </a>
              <a href={WA_HELLO} target="_blank" rel="noopener">
                <span className="clabel">WhatsApp</span>
                <strong>Discussion instantanée</strong>
                <span className="muted">Envoyez photos et dimensions</span>
              </a>
              <a href={`mailto:${EMAIL}`}>
                <span className="clabel">Email</span>
                <strong>{EMAIL}</strong>
                <span className="muted">Plans, devis et questions détaillées</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="section" style={{ background: "var(--bg-warm)" }} aria-label="Adresse et projet">
        <div className="wrap split">
          <Reveal>
            <h2>Où nous trouver</h2>
            <div className="info-rows">
              <div>
                <span className="k">Adresse</span>
                <span>{ADDRESS_LINES.join(", ")}</span>
              </div>
              <div>
                <span className="k">Zone d&apos;intervention</span>
                <span>Ariana, Tunis et environs — déplacements possibles dans toute la Tunisie</span>
              </div>
            </div>
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
            <h2>Un projet de piscine ?</h2>
            <p className="lead">
              Décrivez votre terrain en deux minutes et recevez un premier avis — puis un chiffrage clair.
            </p>
            <p style={{ marginTop: "1.6rem", display: "flex", flexWrap: "wrap", gap: ".8rem" }}>
              <Link className="btn btn-teal" href="/devis">
                Demander un devis <ArrowIcon />
              </Link>
              <a className="btn btn-line" href={WA_HELLO} target="_blank" rel="noopener">
                WhatsApp direct
              </a>
            </p>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
