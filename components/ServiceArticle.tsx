import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { JsonLd } from "@/components/Showcase";
import { PHONE_DISPLAY, PHONE_TEL, SITE_URL } from "@/lib/site";
import { ArrowIcon, CheckIcon } from "./Icons";

export type ArticleSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: { strong: string; text: string }[];
};

export default function ServiceArticle({
  slug,
  name,
  h1,
  intro,
  heroImage,
  sections,
  steps,
  related,
}: {
  slug: string;
  name: string;
  h1: string;
  intro: string;
  heroImage: { src: string; alt: string; width: number; height: number };
  sections: ArticleSection[];
  steps: { title: string; text: string }[];
  related: { href: string; label: string }[];
}) {
  const url = `${SITE_URL}/services/${slug}`;
  return (
    <main id="contenu">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL + "/" },
            { "@type": "ListItem", position: 2, name: "Services", item: SITE_URL + "/services" },
            { "@type": "ListItem", position: 3, name, item: url },
          ],
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: h1,
          provider: { "@id": `${SITE_URL}/#business` },
          areaServed: "Tunisia",
          url,
        }}
      />
      <PageHero
        title={h1}
        intro={intro}
        crumbs={[{ href: "/", label: "Accueil" }, { href: "/services", label: "Services" }, { label: name }]}
      />
      <section className="section">
        <div className="wrap split">
          <div className="prose">
            {sections.map((s) => (
              <Reveal key={s.heading}>
                <h2>{s.heading}</h2>
                {s.paragraphs?.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
                {s.bullets && (
                  <ul className="checklist">
                    {s.bullets.map((b) => (
                      <li key={b.strong}>
                        <CheckIcon />
                        <strong>{b.strong}</strong> — {b.text}
                      </li>
                    ))}
                  </ul>
                )}
              </Reveal>
            ))}
            <Reveal>
              <h2>Comment se passe le projet</h2>
              <div className="steps">
                {steps.map((st, i) => (
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
            <Reveal>
              <p style={{ marginTop: "1.6rem" }}>
                Voir aussi :{" "}
                {related.map((r, i) => (
                  <span key={r.href}>
                    {i > 0 && " · "}
                    <Link href={r.href}>{r.label}</Link>
                  </span>
                ))}
              </p>
            </Reveal>
          </div>
          <div>
            <Reveal className="media-col" variant="clip">
              <span className="frame wide" style={{ display: "block" }}>
                <Image
                  src={heroImage.src}
                  alt={heroImage.alt}
                  width={heroImage.width}
                  height={heroImage.height}
                  sizes="(max-width: 920px) 100vw, 45vw"
                  loading="lazy"
                />
              </span>
            </Reveal>
            <Reveal>
              <div className="form-card" style={{ marginTop: "1.2rem" }}>
                <h3>Parler de mon projet</h3>
                <p className="muted">Décrivez votre terrain en 2 minutes — nous vous rappelons.</p>
                <p>
                  <Link className="btn btn-teal" href="/devis">
                    Demander un devis
                  </Link>
                </p>
                <p>
                  <a href="https://wa.me/21698157900">Continuer sur WhatsApp <ArrowIcon size={16} className="link-arrow" /></a>
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      <section className="section" style={{ background: "var(--bg-warm)" }}>
        <div className="wrap" style={{ display: "grid", gap: "1rem" }}>
          <h2>Donnons forme à votre idée.</h2>
          <p style={{ display: "flex", flexWrap: "wrap", gap: ".9rem", alignItems: "center" }}>
            <Link className="btn btn-teal" href="/devis">
              Parler de mon projet
            </Link>
            <a className="phone-big" style={{ color: "var(--ink)", margin: 0 }} href={PHONE_TEL}>
              {PHONE_DISPLAY}
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
