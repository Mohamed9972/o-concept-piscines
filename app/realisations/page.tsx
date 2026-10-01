import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { JsonLd } from "@/components/Showcase";
import { GALLERY, GALLERY_FEATURE } from "@/data/projects";
import { PHONE_DISPLAY, PHONE_TEL, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Nos réalisations — Piscines sur mesure",
  description:
    "Découvrez une sélection de projets de piscines conçus et réalisés par Ô Concept Piscines en Tunisie : villas contemporaines, bassins rectangulaires, plages minérales et détails d'eau.",
  alternates: { canonical: SITE_URL + "/realisations" },
  openGraph: {
    title: "Nos réalisations — Ô Concept Piscines",
    description: "Une sélection de projets de piscines conçus et réalisés par Ô Concept Piscines.",
    url: SITE_URL + "/realisations",
  },
};

const CRUMB = `${SITE_URL}/realisations`;

export default function Realisations() {
  return (
    <main id="contenu">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL + "/" },
            { "@type": "ListItem", position: 2, name: "Réalisations", item: CRUMB },
          ],
        }}
      />
      <PageHero
        title="Nos réalisations"
        intro="Une sélection de projets de piscines conçus et réalisés par Ô Concept Piscines. Chaque bassin est dessiné pour son lieu — lumière, architecture, usages."
        crumbs={[{ href: "/", label: "Accueil" }, { label: "Réalisations" }]}
      />
      <section className="section">
        <div className="wrap">
          <Reveal variant="clip">
            <div className="feature-block">
              <Image
                src={GALLERY_FEATURE.src}
                alt={GALLERY_FEATURE.alt}
                width={GALLERY_FEATURE.width}
                height={GALLERY_FEATURE.height}
                sizes="100vw"
                priority
              />
              <div className="txt">
                <h2 style={{ color: "#fff" }}>{GALLERY_FEATURE.caption}.</h2>
                <p style={{ color: "rgba(255,255,255,.85)", maxWidth: "56ch" }}>
                  Lignes droites, margelles claires, éclairage chaud : le bassin prolonge la
                  villa sans l&apos;écraser.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal className="masonry cascade">
            {GALLERY.map((g) => (
              <figure key={`${g.src}-${g.caption}`}>
                <span className="frame" style={{ display: "block" }}>
                  <Image
                    src={g.src}
                    alt={g.alt}
                    width={g.width}
                    height={g.height}
                    sizes="(max-width: 660px) 100vw, (max-width: 1080px) 50vw, 33vw"
                    loading="lazy"
                  />
                </span>
                <figcaption className="caption">{g.caption}</figcaption>
              </figure>
            ))}
          </Reveal>
          <Reveal>
            <div style={{ marginTop: "3rem", borderTop: "1px solid var(--ink)", paddingTop: "3rem", display: "grid", gap: "1rem" }}>
              <h2>Votre projet pourrait être le prochain.</h2>
              <p className="lead">
                Envoyez-nous vos dimensions, quelques photos du terrain et vos envies. Nous vous
                répondons vite.
              </p>
              <p style={{ display: "flex", flexWrap: "wrap", gap: ".9rem", alignItems: "center" }}>
                <Link className="btn btn-teal" href="/devis">
                  Demander un devis
                </Link>
                <a className="phone-big" style={{ color: "var(--ink)", margin: 0 }} href={PHONE_TEL}>
                  {PHONE_DISPLAY}
                </a>
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
