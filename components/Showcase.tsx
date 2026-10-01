import Image from "next/image";
import Link from "next/link";
import type { ProjectImage } from "@/data/projects";
import { SERVICES } from "@/data/services";
import { ArrowIcon } from "./Icons";

/** Asymmetric editorial showcase: one large feature + stacked smaller works. */
export function WorkShowcase({ items }: { items: ProjectImage[] }) {
  const [feature, ...rest] = items;
  return (
    <div className="work-ed">
      <Link className="work-item" href="/realisations" aria-label={`Voir nos réalisations — ${feature.caption}`}>
        <span className="frame" style={{ display: "block" }}>
          <Image
            src={feature.src}
            alt={feature.alt}
            width={feature.width}
            height={feature.height}
            sizes="(max-width: 920px) 100vw, 60vw"
            loading="lazy"
          />
        </span>
        <span className="meta">
          <strong>{feature.caption}</strong>
        </span>
      </Link>
      <div className="stack">
        {rest.map((p) => (
          <Link key={p.src} className="work-item" href="/realisations" aria-label={`Voir nos réalisations — ${p.caption}`}>
            <span className="frame" style={{ display: "block" }}>
              <Image
                src={p.src}
                alt={p.alt}
                width={p.width}
                height={p.height}
                sizes="(max-width: 920px) 100vw, 35vw"
                loading="lazy"
              />
            </span>
            <span className="meta">
              <strong>{p.caption}</strong>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

/** Sophisticated numbered service rows — no SaaS cards. */
export function ServiceRows() {
  return (
    <div className="svc-rows">
      {SERVICES.map((s) => {
        const href = `/services/${s.slug}`;
        return (
          <Link key={s.index} className="svc-row" href={href}>
            <span>
              <h3>{s.title}</h3>
              <p>{s.short}</p>
            </span>
            <Image
              className="thumb"
              src={s.image.src}
              alt={s.image.alt}
              width={440}
              height={275}
              sizes="220px"
              loading="lazy"
            />
            <span className="arrow" aria-hidden="true">
              <ArrowIcon />
            </span>
          </Link>
        );
      })}
    </div>
  );
}

/** Small helper to emit validated JSON-LD. */
export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
