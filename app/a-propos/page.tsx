import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaFinal } from "@/components/Hero";
import { CheckIcon } from "@/components/Icons";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { JsonLd } from "@/components/Showcase";
import { ABOUT_IMAGE } from "@/data/projects";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "À propos — Pisciniste en Tunisie",
  description:
    "Ô Concept Piscines, spécialiste de la construction et du design de piscines en Tunisie. Une approche simple : des bassins bien dessinés, bien construits, pensés pour durer. Basés à Ariana.",
  alternates: { canonical: SITE_URL + "/a-propos" },
  openGraph: {
    title: "À propos — Ô Concept Piscines",
    description: "Spécialiste de la construction et du design de piscines en Tunisie.",
    url: SITE_URL + "/a-propos",
  },
};

export default function APropos() {
  return (
    <main id="contenu">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL + "/" },
            { "@type": "ListItem", position: 2, name: "À propos", item: SITE_URL + "/a-propos" },
          ],
        }}
      />
      <PageHero
        title="À propos de Ô Concept Piscines"
        intro="Spécialiste de la construction et du design de piscines en Tunisie. Nous dessinons et construisons des bassins qui s'intègrent à votre lieu — et qui durent."
        crumbs={[{ href: "/", label: "Accueil" }, { label: "À propos" }]}
      />
      <section className="section">
        <div className="wrap split asym">
          <Reveal>
            <h2>
              Des piscines nettes,
              <br />
              bien pensées, <em>bien construites.</em>
            </h2>
            <p className="lead">
              Pas de promesses gonflées, pas de chiffres inventés. Notre travail parle : un plan
              clair, un chantier tenu, une eau claire à la livraison.
            </p>
            <ul className="checklist">
              <li>
                <CheckIcon />
                <strong>Écoute</strong> — votre terrain, votre maison, vos usages d&apos;abord.
              </li>
              <li>
                <CheckIcon />
                <strong>Justesse</strong> — la bonne forme, la bonne taille, les bons matériaux.
              </li>
              <li>
                <CheckIcon />
                <strong>Soin</strong> — structure, étanchéité et finitions traitées avec rigueur.
              </li>
            </ul>
            <p className="muted">
              Basés à Ariana Centre, nous accompagnons des projets à Tunis et dans toute la
              Tunisie.
            </p>
            <p style={{ display: "flex", flexWrap: "wrap", gap: ".8rem", marginTop: "1.6rem" }}>
              <Link className="btn btn-ink" href="/realisations">
                Voir nos réalisations
              </Link>
              <Link className="btn btn-line" href="/services">
                Nos services
              </Link>
            </p>
          </Reveal>
          <Reveal className="media-col" variant="clip">
            <span className="frame tall" style={{ display: "block" }}>
              <Image
                src={ABOUT_IMAGE.src}
                alt={ABOUT_IMAGE.alt}
                width={ABOUT_IMAGE.width}
                height={ABOUT_IMAGE.height}
                sizes="(max-width: 920px) 100vw, 45vw"
                loading="lazy"
              />
            </span>
            <p className="caption">{ABOUT_IMAGE.caption}</p>
          </Reveal>
        </div>
      </section>
      <CtaFinal
        title="Un projet en tête ? Parlons-en simplement."
        text="Dites-nous où vous en êtes — nous vous répondons vite."
      />
    </main>
  );
}
