import type { Metadata } from "next";
import ServiceArticle from "@/components/ServiceArticle";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Construction de piscine en Tunisie — Pisciniste",
  description:
    "Construction de piscine en Tunisie par Ô Concept Piscines : structure, étanchéité, filtration et finitions soignées. Chantier suivi, livré prêt à plonger à Ariana, Tunis et en Tunisie.",
  alternates: { canonical: SITE_URL + "/services/construction-piscine" },
  openGraph: {
    title: "Construction de piscine en Tunisie",
    description: "Un chantier propre et suivi, livré prêt à plonger.",
    url: SITE_URL + "/services/construction-piscine",
  },
};

export default function ConstructionPiscine() {
  return (
    <ServiceArticle
      slug="construction-piscine"
      name="Construction de piscine"
      h1="Construction de piscine en Tunisie"
      intro="Constructeur de piscines à Ariana et Tunis : nous construisons votre bassin dans les règles de l'art, avec un chantier tenu et une eau claire dès la mise en route."
      heroImage={{
        src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200&auto=format&fit=crop",
        alt: "Équipe sur un chantier de gros œuvre, ferraillage en cours",
        width: 1200,
        height: 900,
      }}
      sections={[
        {
          heading: "Une construction sans mauvaises surprises",
          paragraphs: [
            "Une piscine est un ouvrage qui doit durer des décennies. La qualité se joue dans ce qu'on ne voit plus après le chantier : la structure, l'étanchéité, l'hydraulique et la filtration. C'est là que notre exigence fait la différence.",
          ],
        },
        {
          heading: "Les étapes du chantier",
          bullets: [
            { strong: "Terrassement et structure", text: "fouille précise, ferraillage et béton soignés." },
            { strong: "Étanchéité", text: "le point critique : traité avec le plus grand soin." },
            { strong: "Hydraulique et filtration", text: "skimmers, refoulements, pompe et filtre dimensionnés pour une eau claire." },
            { strong: "Revêtement et margelles", text: "liner, carrelage ou enduit selon le projet ; plages propres." },
            { strong: "Mise en eau et réglages", text: "nous vous expliquons l'entretien de base à la livraison." },
          ],
        },
        {
          heading: "Quel budget prévoir ?",
          paragraphs: [
            "Chaque projet est différent — taille, accès, revêtement, options. Plutôt qu'une grille tarifaire trompeuse, nous préférons chiffrer sur plan et après visite. Envoyez-nous vos dimensions : vous recevez un devis clair et détaillé.",
          ],
        },
      ]}
      steps={[
        { title: "Visite", text: "Nous étudions votre terrain et vos contraintes d'accès à Ariana, Tunis et environs." },
        { title: "Chantier", text: "Un planning tenu, un chantier propre, des points d'étape réguliers." },
        { title: "Livraison", text: "Mise en eau, réglages et explications d'entretien — prêt à plonger." },
      ]}
      related={[
        { href: "/services/conception-piscine", label: "conception de piscine" },
        { href: "/services/renovation-piscine", label: "rénovation de piscine" },
        { href: "/services/amenagement-piscine", label: "aménagement de piscine" },
        { href: "/realisations", label: "nos réalisations" },
      ]}
    />
  );
}
