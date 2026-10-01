"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/site";
import { ArrowIcon, CloseIcon } from "./Icons";

export default function Header() {
  const pathname = usePathname();
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open ]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const close = useCallback(() => setOpen(false), []);

  return (
    <>
      <header className={`site-header${solid && !open ? " solid" : ""}`}>
        <div className="wrap bar">
          <Link className="brand" href="/" aria-label="Ô Concept Piscines — Accueil">
            <Image src="/logo.svg" alt="Logo Ô Concept Piscines" width={120} height={46} priority />
            <span className="word">
              Ô CONCEPT<small>PISCINES</small>
            </span>
          </Link>
          <nav className="nav-desktop" aria-label="Navigation principale">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                className="nav-link"
                href={l.href}
                aria-current={pathname === l.href ? "page" : undefined}
              >
                {l.label}
              </Link>
            ))}
            <Link className="btn btn-teal btn-sm" href="/devis">
              Demander un devis
            </Link>
          </nav>
          <button
            className="burger"
            onClick={() => setOpen(true)}
            aria-label="Ouvrir le menu"
            aria-expanded={open}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>
      <div className={`mobile-menu${open ? " open" : ""}`} aria-hidden={!open}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <strong style={{ fontFamily: "var(--serif)", fontSize: "1.3rem" }}>Ô Concept Piscines</strong>
          <button
            onClick={close}
            aria-label="Fermer le menu"
            style={{ background: "none", border: "1px solid rgba(255,255,255,.3)", color: "#fff", borderRadius: "50%", width: 52, height: 52, fontSize: "1.2rem", cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center" }}
          >
            <CloseIcon />
          </button>
        </div>
        <nav aria-label="Menu mobile">
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href} onClick={close} tabIndex={open ? 0 : -1}>
              {l.label}
              <ArrowIcon />
            </Link>
          ))}
        </nav>
        <div style={{ marginTop: "auto", display: "grid", gap: ".7rem" }}>
          <Link className="btn btn-teal" href="/devis" onClick={close} tabIndex={open ? 0 : -1}>
            Demander un devis
          </Link>
          <a className="btn btn-ghost" href="tel:+21698157900" tabIndex={open ? 0 : -1}>
            Appeler · 98 157 900
          </a>
        </div>
      </div>
    </>
  );
}
