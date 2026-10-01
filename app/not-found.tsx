import Link from "next/link";

export default function NotFound() {
  return (
    <main id="contenu" className="section">
      <div className="wrap" style={{ textAlign: "center", padding: "4rem 0" }}>
        <p className="kicker" style={{ justifyContent: "center" }}>
          <span className="n">404</span> Page introuvable
        </p>
        <h1>Oups — cette page n&apos;existe pas.</h1>
        <p className="lead" style={{ margin: "0 auto" }}>
          La page demandée a été déplacée ou n&apos;existe plus.
        </p>
        <p style={{ marginTop: "2rem", display: "flex", gap: ".8rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link className="btn btn-ink" href="/">
            Retour à l&apos;accueil
          </Link>
          <Link className="btn btn-line" href="/devis">
            Demander un devis
          </Link>
        </p>
      </div>
    </main>
  );
}
