import Image from "next/image";
import Link from "next/link";
import { ADDRESS_LINES, EMAIL, NAV_LINKS, PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="wrap foot-grid">
        <div>
          <p className="foot-word">
            Ô Concept <em>Piscines</em>
          </p>
          <p style={{ maxWidth: "36ch", opacity: 0.8 }}>
            Conception et construction de piscines sur mesure en Tunisie. Piscine prête à
            plonger, aménagements extérieurs.
          </p>
          <p>
            <a href={PHONE_TEL} style={{ fontWeight: 700, color: "#fff" }}>
              {PHONE_DISPLAY}
            </a>
            <br />
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </p>
        </div>
        <nav aria-label="Navigation pied de page">
          <p style={{ fontWeight: 700, color: "#fff" }}>Naviguer</p>
          {NAV_LINKS.map((l) => (
            <p key={l.href}>
              <Link href={l.href}>{l.label}</Link>
            </p>
          ))}
          <p>
            <Link href="/devis">Demander un devis</Link>
          </p>
        </nav>
        <nav aria-label="Services pied de page">
          <p style={{ fontWeight: 700, color: "#fff" }}>Services</p>
          <p>
            <Link href="/services/conception-piscine">Conception de piscine</Link>
          </p>
          <p>
            <Link href="/services/construction-piscine">Construction de piscine</Link>
          </p>
          <p>
            <Link href="/services/renovation-piscine">Rénovation de piscine</Link>
          </p>
          <p>
            <Link href="/services/amenagement-piscine">Aménagement de piscine</Link>
          </p>
        </nav>
        <div>
          <p style={{ fontWeight: 700, color: "#fff" }}>Adresse</p>
          <p>
            {ADDRESS_LINES.map((l) => (
              <span key={l}>
                {l}
                <br />
              </span>
            ))}
          </p>
          <p>
            <a href="https://wa.me/21698157900">WhatsApp</a>
          </p>
          <Image src="/logo.svg" alt="Ô Concept Piscines" width={120} height={46} loading="lazy" style={{ marginTop: "1rem", filter: "brightness(0) invert(1)" }} />
        </div>
      </div>
      <div className="wrap foot-bottom">
        <span>© {year} Ô Concept Piscines · Tous droits réservés</span>
        <span>Pisciniste en Tunisie — Ariana · Tunis</span>
      </div>
    </footer>
  );
}
