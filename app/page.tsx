import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero, { CtaFinal } from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Reveal from "@/components/Reveal";
import { JsonLd, ServiceRows, WorkShowcase } from "@/components/Showcase";
import { HOME_FEATURED, INTRO_IMAGE } from "@/data/projects";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Ô Concept Piscines — Piscines sur mesure en Tunisie | Conception & Construction",
  description:
    "Ô Concept Piscines conçoit et construit des piscines sur mesure en Tunisie. Design, construction, rénovation et aménagement extérieur. Basés à Ariana, nous intervenons à Tunis et dans toute la Tunisie. Demandez votre devis.",
  alternates: { canonical: SITE_URL + "/" },
  openGraph: {
    title: "Ô Concept Piscines — Piscines sur mesure en Tunisie",
    description: "Conception et construction de piscines pensées pour votre espace, votre architecture et votre style de vie.",
    url: SITE_URL + "/",
  },
};

export default function Home() {
  return (
    <main id="contenu">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          url: SITE_URL + "/",
          name: "Ô Concept Piscines",
          inLanguage: "fr-TN",
        }}
      />
      <Hero />
      <Marquee />

      {/* Intro — éditorial asymétrique */}
      <section className="section" aria-label="Introduction">
        <div className="wrap split asym">
          <Reveal>
            <h2>
              Votre projet de piscine,
              <br />
              pensé comme un <em>espace de vie.</em>
            </h2>
            <p className="lead">
              Nous dessinons des piscines qui s&apos;intègrent à votre villa et à votre terrain,
              puis nous les construisons avec soin. Un seul interlocuteur, un projet clair, un
              résultat net.
            </p>
            <p style={{ marginTop: "1.8rem" }}>
              <Link className="btn btn-ink" href="/services">
                Découvrir nos services
              </Link>
            </p>
          </Reveal>
          <Reveal className="media-col" variant="clip">
            <span className="frame tall" style={{ display: "block" }}>
              <Image
                src={INTRO_IMAGE.src}
                alt={INTRO_IMAGE.alt}
                width={INTRO_IMAGE.width}
                height={INTRO_IMAGE.height}
                sizes="(max-width: 920px) 100vw, 45vw"
                loading="lazy"
              />
            </span>
            <p className="caption">{INTRO_IMAGE.caption}</p>
          </Reveal>
        </div>
      </section>

      {/* Réalisations sélectionnées */}
      <section className="section" aria-label="Réalisations sélectionnées" style={{ background: "var(--bg-warm)" }}>
        <div className="wrap">
          <Reveal style={{ maxWidth: 720 }}>
            <h2>Quelques réalisations</h2>
            <p className="lead">
              Un aperçu de notre approche. Le portfolio complet vit sur la page Réalisations.
            </p>
          </Reveal>
          <Reveal variant="clip">
            <WorkShowcase items={HOME_FEATURED} />
          </Reveal>
          <p style={{ marginTop: "2.5rem" }}>
            <Link className="btn btn-line" href="/realisations">
              Voir toutes les réalisations
            </Link>
          </p>
        </div>
      </section>

      {/* Services — lignes éditoriales */}
      <section className="section" aria-label="Nos services">
        <div className="wrap">
          <Reveal style={{ maxWidth: 720 }}>
            <h2>
              Quatre expertises,
              <br />
              un seul niveau <em>d&apos;exigence.</em>
            </h2>
          </Reveal>
          <Reveal>
            <ServiceRows />
          </Reveal>
        </div>
      </section>

      <CtaFinal />
    </main>
  );
}
