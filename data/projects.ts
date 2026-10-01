/**
 * TEMPORARY imagery — Unsplash placeholders, 100% piscines & jacuzzis.
 * Every photo below was visually verified (pool or jacuzzi visible).
 * To go live with real Ô Concept Piscines photography:
 *  1. Drop the real photos into `public/images/` (e.g. `piscine-01.jpg`).
 *  2. Replace each `src` below with the local path (e.g. `/images/piscine-01.jpg`).
 *  3. Keep the `alt` descriptive and the `width`/`height` matching the file.
 * No component changes needed — everything reads from this file.
 *
 * Rule: captions describe only what is visible in the photo.
 * No project names, no locations, no numbers — never invent.
 */

export type ProjectImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
};

const u = (id: string, w: number) =>
  `https://images.unsplash.com/${id}?q=80&w=${w}&auto=format&fit=crop`;

export const HERO_POSTER = u("photo-1600596542815-ffad4c1539a9", 1600);
export const HERO_POSTER_ALT =
  "Piscine d'une villa moderne au coucher du soleil";

export const HOME_FEATURED: ProjectImage[] = [
  {
    src: u("photo-1600596542815-ffad4c1539a9", 1400),
    alt: "Piscine rectangulaire d'une villa moderne au coucher du soleil",
    width: 1400,
    height: 1750,
    caption: "Piscine rectangulaire",
  },
  {
    src: u("photo-1540541338287-41700207dee6", 1000),
    alt: "Grande piscine à débordement entourée de palmiers face à la mer",
    width: 1000,
    height: 750,
    caption: "Piscine à débordement",
  },
  {
    src: u("photo-1576013551627-0cc20b96c2a7", 1000),
    alt: "Piscine avec plage en bois, transats et parasol",
    width: 1000,
    height: 750,
    caption: "Plage en bois et transats",
  },
];

export const GALLERY_FEATURE: ProjectImage = {
  src: u("photo-1613490493576-7fde63acd811", 1800),
  alt: "Villa moderne avec grande piscine éclairée la nuit",
  width: 1800,
  height: 1000,
  caption: "Une eau calme, une architecture nette",
};

export const GALLERY: ProjectImage[] = [
  {
    src: u("photo-1600596542815-ffad4c1539a9", 900),
    alt: "Piscine rectangulaire devant une villa moderne au coucher du soleil",
    width: 900,
    height: 1150,
    caption: "Piscine rectangulaire",
  },
  {
    src: u("photo-1572331165267-854da2b10ccc", 900),
    alt: "Piscine avec transats et parasols au coucher du soleil",
    width: 900,
    height: 700,
    caption: "Piscine et transats",
  },
  {
    src: u("photo-1571896349842-33c89424de2d", 900),
    alt: "Mosaïque bleue d'un bassin éclairé le soir",
    width: 900,
    height: 700,
    caption: "Mosaïque du bassin",
  },
  {
    src: u("photo-1576013551627-0cc20b96c2a7", 900),
    alt: "Piscine avec plage en bois, transats et parasol",
    width: 900,
    height: 900,
    caption: "Plage en bois et transats",
  },
  {
    src: u("photo-1584132967334-10e028bd69f7", 900),
    alt: "Piscine et plage en bois avec transats face à la mer",
    width: 900,
    height: 700,
    caption: "Piscine et plage bois",
  },
  {
    src: u("photo-1530549387789-4c1017266635", 900),
    alt: "Nageur en papillon dans un couloir de nage",
    width: 900,
    height: 600,
    caption: "Couloir de nage",
  },
  {
    src: u("photo-1562016600-ece13e8ba570", 900),
    alt: "Reflets sur l'eau turquoise d'une piscine",
    width: 900,
    height: 900,
    caption: "Eau turquoise",
  },
  {
    src: u("photo-1544843776-7c98a52e08a4", 900),
    alt: "Femme profitant des remous d'un jacuzzi extérieur",
    width: 900,
    height: 1125,
    caption: "Jacuzzi et détente",
  },
  {
    src: u("photo-1600573472592-401b489a3cdc", 900),
    alt: "Bassin carrelé et terrasse d'une maison moderne",
    width: 900,
    height: 700,
    caption: "Bassin et terrasse",
  },
  {
    src: u("photo-1766603636584-38baba9fcfd4", 900),
    alt: "Jacuzzi extérieur en carrelage sur une terrasse avec transats",
    width: 900,
    height: 700,
    caption: "Jacuzzi extérieur",
  },
];

export const INTRO_IMAGE: ProjectImage = {
  src: u("photo-1613490493576-7fde63acd811", 1200),
  alt: "Villa moderne avec piscine à débordement le soir",
  width: 1200,
  height: 1500,
  caption: "Architecture et eau — un seul dessin",
};

export const ABOUT_IMAGE: ProjectImage = {
  src: u("photo-1600596542815-ffad4c1539a9", 1200),
  alt: "Piscine rectangulaire d'une villa moderne",
  width: 1200,
  height: 1400,
  caption: "Matière et précision",
};

export const CTA_BACKGROUND = {
  src: u("photo-1572331165267-854da2b10ccc", 1800),
  alt: "",
  width: 1800,
  height: 1000,
};
