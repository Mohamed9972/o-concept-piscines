import type { Metadata } from "next";
import ServiceArticle from "@/components/ServiceArticle";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Aménagement de piscine en Tunisie — Plages & extérieurs",
  description:
    "Aménagement de piscine en Tunisie : plages, margelles, éclairage, douche extérieure et espaces détente. Ô Concept Piscines transforme votre bassin en lieu de vie à Ariana, Tunis et environs.",
  alternates: { canonical: SITE_URL + "/services/amenagement-piscine" },
  openGraph: {
    title: "Aménagement de piscine en Tunisie",
    description: "Plages, éclairage et espaces extérieurs qui subliment l'eau.",
    url: SITE_URL + "/services/amenagement-piscine",
  },
};

export default function AmenagementPiscine() {
  return (
    <ServiceArticle
      slug="amenagement-piscine"
      name="Aménagement de piscine"
      h1="Aménagement de piscine en Tunisie"
      intro="Une piscine ne s'arrête pas au bassin. Plages, éclairage, douche extérieure : nous créons les abords qui transforment l'eau en véritable lieu de vie."
      heroImage={{
        src: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=1200&auto=format&fit=crop",
        alt: "Piscine avec plage en bois, transats et parasol",
        width: 1200,
        height: 900,
      }}
      sections={[
        {
          heading: "Les abords font la moitié du plaisir",
          paragraphs: [
            "Une belle eau avec une plage ratée ne donne pas envie de rester. À l'inverse, des margelles agréables pieds nus, un éclairage chaud le soir et un coin ombragé changent tout — sans toucher au bassin.",
          ],
        },
        {
          heading: "Ce que nous aménageons",
          bullets: [
            { strong: "Plages et margelles", text: "pierre, bois ou carrelage antidérapant selon votre usage." },
            { strong: "Éclairage", text: "projecteurs LED et ambiance du soir, sobres en énergie." },
            { strong: "Douche extérieure", text: "pratique et discrète, raccordée proprement." },
            { strong: "Espaces détente", text: "coin transats, pergola, rangements intégrés." },
            { strong: "Sécurité", text: "accès, revêtements non glissants, éclairage des marches." },
          ],
        },
      ]}
      steps={[
        { title: "Visite", text: "Nous relevons vos abords existants et vos envies à Ariana, Tunis et environs." },
        { title: "Proposition", text: "Matériaux et calepinage proposés avec un chiffrage clair par poste." },
        { title: "Réalisation", text: "Pose soignée, finitions nettes — prête pour l'été." },
      ]}
      related={[
        { href: "/services/conception-piscine", label: "conception de piscine" },
        { href: "/services/renovation-piscine", label: "rénovation de piscine" },
        { href: "/realisations", label: "nos réalisations" },
      ]}
    />
  );
}
