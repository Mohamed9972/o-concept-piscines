import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import QuoteForm from "@/components/QuoteForm";
import Reveal from "@/components/Reveal";
import { JsonLd } from "@/components/Showcase";
import { PHONE_DISPLAY, PHONE_TEL, SITE_URL, whatsappUrl } from "@/lib/site";
import { CheckIcon } from "@/components/Icons";

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

const WA_DEVIS = whatsappUrl("Bonjour Ô Concept Piscines, j'ai un projet de piscine. Voici mes dimensions : ");

const STEPS = [
  {
    title: "Décrivez votre projet",
    text: "Deux minutes : dimensions, ville, type de projet. Photos du terrain bienvenues sur WhatsApp.",
  },
  {
    title: "On échange directement",
    text: "Appel ou WhatsApp pour affiner : accès chantier, style souhaité, contraintes du terrain.",
  },
  {
    title: "Vous recevez un chiffrage clair",
    text: "Un devis détaillé par poste, sans jargon — puis visite si le projet se concrétise.",
  },
];

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
        intro="Deux minutes suffisent. Décrivez votre projet — nous revenons vers vous avec un premier avis, puis un chiffrage clair."
        crumbs={[{ href: "/", label: "Accueil" }, { label: "Devis" }]}
      />
      <section className="section" aria-label="Comment ça marche">
        <div className="wrap">
          <Reveal>
            <h2>Comment ça marche</h2>
          </Reveal>
          <Reveal>
            <div className="steps">
              {STEPS.map((st, i) => (
                <div className="step" key={st.title}>
                  <span className="num" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 style={{ margin: "0 0 .3rem" }}>{st.title}</h3>
                    <p className="muted" style={{ margin: 0 }}>
                      {st.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
      <section className="section" style={{ background: "var(--bg-warm)" }} aria-label="Formulaire de devis">
        <div className="wrap split">
          <Reveal>
            <QuoteForm />
          </Reveal>
          <div>
            <Reveal>
              <h2>Pour un chiffrage précis, indiquez :</h2>
              <ul className="checklist">
                {[
                  { strong: "Dimensions", text: "longueur × largeur approximatives, profondeur souhaitée." },
                  { strong: "Ville et accès", text: "où se trouve le terrain, accès pour les engins." },
                  { strong: "Type de projet", text: "construction neuve, rénovation ou simple étude." },
                  { strong: "Photos", text: "envoyez-les sur WhatsApp après le formulaire." },
                ].map((b) => (
                  <li key={b.strong}>
                    <CheckIcon />
                    <strong>{b.strong}</strong> — {b.text}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal>
              <div className="form-card" style={{ marginTop: "1.4rem" }}>
                <h3>Préférez parler directement ?</h3>
                <p className="muted" style={{ marginTop: 0 }}>
                  Appelez ou écrivez — photos du terrain bienvenues.
                </p>
                <p style={{ display: "flex", flexWrap: "wrap", gap: ".7rem" }}>
                  <a className="btn btn-ink btn-sm" href={PHONE_TEL}>
                    {PHONE_DISPLAY}
                  </a>
                  <a className="btn btn-line btn-sm" href={WA_DEVIS} target="_blank" rel="noopener">
                    WhatsApp
                  </a>
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
