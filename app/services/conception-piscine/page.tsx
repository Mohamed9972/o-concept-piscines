import type { Metadata } from "next";
import ServiceArticle from "@/components/ServiceArticle";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Conception de piscine en Tunisie — Plan sur mesure",
  description:
    "Conception de piscine en Tunisie : forme, dimensions, orientation et intégration à votre villa. Ô Concept Piscines dessine un bassin adapté à votre terrain à Ariana, Tunis et environs.",
  alternates: { canonical: SITE_URL + "/services/conception-piscine" },
  openGraph: {
    title: "Conception de piscine en Tunisie — Plan sur mesure",
    description: "Un bassin dessiné pour votre terrain, votre architecture et votre style de vie.",
    url: SITE_URL + "/services/conception-piscine",
  },
};

export default function ConceptionPiscine() {
  return (
    <ServiceArticle
      slug="conception-piscine"
      name="Conception de piscine"
      h1="Conception de piscine en Tunisie"
      intro="Une belle piscine commence sur plan. Nous dessinons un bassin adapté à votre terrain, à votre maison et à votre façon de vivre — avant le premier coup de pelle."
      heroImage={{
        src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
        alt: "Villa contemporaine et jardin à la tombée du soir",
        width: 1200,
        height: 900,
      }}
      sections={[
        {
          heading: "Pourquoi la conception change tout",
          paragraphs: [
            "En Tunisie, chaque terrain a ses contraintes : surface disponible, pente, accès chantier, ensoleillement, vis-à-vis, style de la villa. Un plan bien pensé évite les surcoûts et garantit une piscine agréable à vivre pendant des années.",
          ],
        },
        {
          heading: "Ce que nous étudions avec vous",
          bullets: [
            { strong: "Implantation", text: "orientation, soleil, vent, intimité, vue depuis la maison." },
            { strong: "Forme et dimensions", text: "rectangulaire, couloir de nage, forme libre, selon l'usage." },
            { strong: "Profondeur et accès", text: "escalier immergé, plage, sécurité des enfants." },
            { strong: "Matériaux et eau", text: "revêtement, margelles, teinte de l'eau, éclairage." },
            { strong: "Local technique", text: "filtration et entretien pensés pour rester simples." },
          ],
        },
      ]}
      steps={[
        { title: "Échange", text: "Vos envies, vos photos, vos dimensions. Nous nous déplaçons si besoin à Ariana, Tunis et environs." },
        { title: "Plan", text: "Proposition de forme et d'implantation, ajustée avec vous jusqu'au bon compromis." },
        { title: "Chiffrage", text: "Un devis clair basé sur le plan validé — pour passer sereinement à la construction." },
      ]}
      related={[
        { href: "/services/construction-piscine", label: "construction de piscine" },
        { href: "/services/renovation-piscine", label: "rénovation de piscine" },
        { href: "/services/amenagement-piscine", label: "aménagement de piscine" },
        { href: "/realisations", label: "nos réalisations" },
      ]}
    />
  );
}
