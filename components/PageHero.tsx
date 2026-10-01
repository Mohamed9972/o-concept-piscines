import Link from "next/link";
import type { ReactNode } from "react";

export function Crumbs({ items }: { items: { href?: string; label: string }[] }) {
  return (
    <p className="crumbs" aria-label="Fil d'Ariane">
      {items.map((it, i) => (
        <span key={it.label}>
          {i > 0 && " · "}
          {it.href ? <Link href={it.href}>{it.label}</Link> : it.label}
        </span>
      ))}
    </p>
  );
}

export default function PageHero({
  title,
  intro,
  crumbs,
}: {
  title: ReactNode;
  intro: string;
  crumbs: { href?: string; label: string }[];
}) {
  return (
    <section className="page-hero">
      <div className="wrap">
        <Crumbs items={crumbs} />
        <h1>{title}</h1>
        <p className="sub">{intro}</p>
      </div>
    </section>
  );
}
