import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaFinal } from "@/components/Hero";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { JsonLd } from "@/components/Showcase";
import { SERVICES } from "@/data/services";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Nos services — Conception, construction, rénovation",
  description:
    "De la conception à la réalisation : Ô Concept Piscines vous accompagne pour la conception, la construction, la rénovation et l'aménagement de votre piscine en Tunisie.",
  alternates: { canonical: SITE_URL + "/services" },
  openGraph: {
    title: "Nos services — Ô Concept Piscines",
    description: "Conception, construction, rénovation et aménagement de piscines en Tunisie.",
    url: SITE_URL + "/services",
  },
};

export default function Services() {
  return (
    <main id="contenu">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL + "/" },
            { "@type": "ListItem", position: 2, name: "Services", item: SITE_URL + "/services" },
          ],
        }}
      />
      <PageHero
        title="Nos services"
        intro="De la conception à la réalisation, Ô Concept Piscines vous accompagne dans votre projet de piscine — avec un interlocuteur unique et un résultat soigné."
        crumbs={[{ href: "/", label: "Accueil" }, { label: "Services" }]}
      />
      {SERVICES.map((s, i) => {
        const href = `/services/${s.slug}`;
        const flip = i % 2 === 1;
        return (
          <section
            key={s.slug}
            id={s.slug}
            className="section"
            style={i % 2 === 1 ? { background: "var(--bg-warm)" } : undefined}
            aria-label={`${s.title} de piscine`}
          >
            <div className={`wrap split${flip ? " flip" : ""}`}>
              <Reveal>
                <h2>{s.title} de piscine</h2>
                <p className="lead">{s.short}</p>
                <p className="muted">{s.description}</p>
                <p style={{ marginTop: "1.6rem" }}>
                  <Link className="btn btn-ink" href={href}>
                    En savoir plus
                  </Link>
                </p>
              </Reveal>
              <Reveal className="media-col" variant="clip">
                <span className="frame wide" style={{ display: "block" }}>
                  <Image
                    src={s.image.src}
                    alt={s.image.alt}
                    width={s.image.width}
                    height={s.image.height}
                    sizes="(max-width: 920px) 100vw, 45vw"
                    loading="lazy"
                  />
                </span>
              </Reveal>
            </div>
          </section>
        );
      })}
      <CtaFinal
        title="Un projet ? Commençons par en parler."
        text="Conception, construction, rénovation ou aménagement — dites-nous où vous en êtes."
      />
    </main>
  );
}
