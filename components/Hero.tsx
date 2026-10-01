import Link from "next/link";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";
import { ArrowIcon } from "./Icons";
import WaterCanvas from "./WaterCanvas";

/** Full-screen cinematic hero — video background, masked headline entrance. */
export default function Hero() {
  return (
    <section className="hero" aria-label="Présentation">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>
      <div className="shade" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />
      <div className="hero-inner">
        <h1>
          <span className="rise">
            <span style={{ ["--d" as string]: "0.05s" }}>Piscines</span>
          </span>
          <span className="rise">
            <span style={{ ["--d" as string]: "0.17s" }}>
              <em>sur mesure</em>
            </span>
          </span>
          <span className="rise">
            <span style={{ ["--d" as string]: "0.29s" }}>en Tunisie</span>
          </span>
        </h1>
        <p className="sub">Conception et construction pensées pour votre espace.</p>
        <div className="hero-ctas">
          <Link className="btn btn-teal" href="/devis">
            Demander un devis <ArrowIcon />
          </Link>
          <Link className="btn btn-ghost" href="/realisations">
            Voir nos réalisations
          </Link>
        </div>
        <div className="hero-meta">
          <span>De la conception à la réalisation — Ariana · Tunis</span>
        </div>
      </div>
    </section>
  );
}

/** Final conversion moment — living WebGL water behind the ask. */
export function CtaFinal({
  title = "Imaginons votre prochaine piscine.",
  text = "Vous avez un projet de piscine en Tunisie ? Échangeons sur vos besoins et imaginons ensemble votre futur espace.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="cta-final" aria-label="Demander un devis">
      <div className="water-fallback" aria-hidden="true" />
      <WaterCanvas />
      <div className="shade" aria-hidden="true" />
      <div className="wrap inner">
        <h2 style={{ maxWidth: "14ch" }}>{title}</h2>
        <p className="lead" style={{ color: "rgba(255,255,255,.85)" }}>
          {text}
        </p>
        <p style={{ marginTop: "2rem", display: "flex", flexWrap: "wrap", gap: ".9rem" }}>
          <Link className="btn btn-teal" href="/devis">
            Demander un devis <ArrowIcon />
          </Link>
        </p>
        <a className="phone-big" href={PHONE_TEL}>
          {PHONE_DISPLAY}
        </a>
      </div>
    </section>
  );
}
