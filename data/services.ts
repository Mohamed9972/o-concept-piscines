/** Services catalogue — titles, slugs, summaries and imagery in one place. */

const u = (id: string, w: number) =>
  `https://images.unsplash.com/${id}?q=80&w=${w}&auto=format&fit=crop`;

export type Service = {
  slug: string;
  index: string;
  title: string;
  short: string;
  description: string;
  image: { src: string; alt: string; width: number; height: number };
};

export const SERVICES: Service[] = [
  {
    slug: "conception-piscine",
    index: "01",
    title: "Conception",
    short: "Un plan sur mesure, adapté à votre terrain et à votre architecture.",
    description:
      "Forme, dimensions, orientation, matériaux : un bassin dessiné pour votre lieu, pas un modèle copié-collé.",
    image: {
      src: u("photo-1600585154340-be6161a56a0c", 1200),
      alt: "Villa contemporaine et jardin à la tombée du soir",
      width: 1200,
      height: 900,
    },
  },
  {
    slug: "construction-piscine",
    index: "02",
    title: "Construction",
    short: "Un chantier propre, suivi et livré prêt à plonger.",
    description:
      "Structure, étanchéité, filtration, revêtement : un chantier organisé et une eau claire dès la mise en route.",
    image: {
      src: u("photo-1541888946425-d81bb19240f5", 1200),
      alt: "Équipe sur un chantier de gros œuvre, ferraillage en cours",
      width: 1200,
      height: 900,
    },
  },
  {
    slug: "renovation-piscine",
    index: "03",
    title: "Rénovation",
    short: "Redonner à votre bassin son éclat et son confort d'origine.",
    description:
      "Étanchéité, revêtement, filtration, éclairage : une seconde vie pour votre piscine, sans tout casser quand c'est possible.",
    image: {
      src: u("photo-1571896349842-33c89424de2d", 1200),
      alt: "Mosaïque bleue d'un bassin rénové, éclairé le soir",
      width: 1200,
      height: 900,
    },
  },
  {
    slug: "amenagement-piscine",
    index: "04",
    title: "Aménagement",
    short: "Plages, éclairage et espaces extérieurs qui subliment l'eau.",
    description:
      "Plages, éclairage, douche extérieure : les abords qui transforment un bassin en lieu de vie.",
    image: {
      src: u("photo-1576013551627-0cc20b96c2a7", 1200),
      alt: "Piscine avec plage en bois, transats et parasol",
      width: 1200,
      height: 900,
    },
  },
];
