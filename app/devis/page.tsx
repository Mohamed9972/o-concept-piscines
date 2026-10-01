import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import QuoteForm from "@/components/QuoteForm";
import Reveal from "@/components/Reveal";
import { JsonLd } from "@/components/Showcase";
import { ADDRESS_LINES, EMAIL, PHONE_DISPLAY, PHONE_TEL, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Demander un devis — Piscine en Tunisie",
  description:
    "Demandez votre devis de piscine en Tunisie : conception, construction ou rénovation. Formulaire simple en 2 minutes. Réponse rapide au 98 157 900 ou sur WhatsApp.",
  alternates: { canonical: SITE_URL + "/devis" },
  openGraph: {
    title: "Demander un devis — Ô Concept Piscines",
    description: "Formulaire simple en 2 minutes. Réponse rapide.",
    url: SITE_URL + "/devis",
  },
};

export default function Devis() {
  return (
    <main id="contenu">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL + "/" },
            { "@type": "ListItem", position: 2, name: "Demander un devis", item: SITE_URL + "/devis" },
          ],
        }}
      />
      <PageHero
        title="Demander un devis"
        intro="Deux minutes suffisent. Décrivez votre projet — nous vous répondons vite avec un premier avis et un chiffrage."
        crumbs={[{ href: "/", label: "Accueil" }, { label: "Devis" }]}
      />
      <section className="section">
        <div className="wrap split">
          <Reveal>
            <QuoteForm />
          </Reveal>
          <Reveal>
            <h2>Appelez-nous.</h2>
            <p className="lead">
              Un projet venant de Facebook ou Instagram ? Appelez ou écrivez directement — photos
              du terrain bienvenues.
            </p>
            <div className="contact-cards">
              <a href={PHONE_TEL}>
                <strong>{PHONE_DISPLAY}</strong>
                <br />
                <span className="muted">Appeler — réponse rapide</span>
              </a>
              <a href="https://wa.me/21698157900?text=Bonjour%20%C3%94%20Concept%20Piscines%2C%20j%27ai%20un%20projet%20de%20piscine.">
                <strong>WhatsApp</strong>
                <br />
                <span className="muted">Envoyer photos + dimensions</span>
              </a>
              <a href={`mailto:${EMAIL}`}>
                <strong>{EMAIL}</strong>
                <br />
                <span className="muted">Écrire un email</span>
              </a>
            </div>
            <p className="muted" style={{ marginTop: "1rem" }}>
              {ADDRESS_LINES.join(", ")}.
            </p>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
