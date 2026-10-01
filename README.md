# Ô Concept Piscines — Next.js (App Router, TypeScript)

Reconstruction Next.js du site vitrine statique `../o-concept-piscines` (contenu factuel préservé,
présentation repensée : composants réutilisables, routes réelles, SEO Next.js).

## Démarrer

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # doit réussir
npm start
```

## Déploiement Netlify

Aucune config spéciale : connectez le dépôt, build `npm run build`, publish `.next`.
Le runtime Next.js officiel de Netlify détecte automatiquement le projet App Router.
Aucune dépendance interdite (pas de Prisma/Neon/DB, pas de backend).

## Routes

`/`, `/realisations`, `/services`, `/services/conception-piscine`,
`/services/construction-piscine`, `/services/renovation-piscine`,
`/a-propos`, `/devis`, `/contact`, 404 (`app/not-found.tsx`),
`/sitemap.xml` (`app/sitemap.ts`), `/robots.txt` (`app/robots.ts`).

## Architecture

- `app/` — routes + `layout.tsx` (fonts Fraunces/Inter, metadata, JSON-LD Organization)
- `components/` — `Header` (client), `Footer`, `Hero`/`CtaFinal`, `Showcase`
  (WorkShowcase, ServiceRows), `ServiceArticle`, `QuoteForm` (client),
  `PageHero`, `Reveal` (client)
- `data/projects.ts`, `data/services.ts` — **toutes les images centralisées ici**
- `lib/site.ts` — contacts, URL canonique, navigation
- `public/video/hero.mp4` — vidéo hero officielle (4,7 Mo, `preload="metadata"` + poster)
- `public/logo.svg` — **placeholder** reprenant les couleurs du logo officiel
  (fichier officiel jamais fourni : les champs LOGO/HERO VIDEO URL étaient vides).
  → En production : déposez `public/logo.png` officiel et mettez à jour les
  références (`Header`, `Footer`, JSON-LD).

## Design

`DESIGN.md` est la source de vérité visuelle (système éditorial : Fraunces +
Outfit, 1 accent Lagoon, pas de kickers, pas de cards génériques).
Motion : un seul moment fort (eau WebGL `components/WaterCanvas.tsx`, three.js
chargé uniquement sur les pages avec CTA final, jamais sous
prefers-reduced-motion) + entrées masquées + reveals sobres.

## Formulaires

Pas de backend : `QuoteForm` génère un message WhatsApp pré-rempli
(`wa.me/21698157900`) + fallback `mailto:piscineoconcept@gmail.com`.

## Avant mise en ligne

1. Remplacer `SITE_URL` (`lib/site.ts`) par le vrai domaine.
2. Remplacer les visuels Unsplash (`data/`) par les vraies photos chantiers.
3. Ajouter les liens sociaux réels dans `Footer` si disponibles.
