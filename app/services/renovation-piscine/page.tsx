import type { Metadata } from "next";
import ServiceArticle from "@/components/ServiceArticle";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Rénovation de piscine en Tunisie — Redonner vie à votre bassin",
  description:
    "Rénovation de piscine en Tunisie : liner, étanchéité, filtration, éclairage et plages. Ô Concept Piscines redonne éclat et confort à votre bassin à Ariana, Tunis et environs.",
  alternates: { canonical: SITE_URL + "/services/renovation-piscine" },
  openGraph: {
    title: "Rénovation de piscine en Tunisie",
    description: "Redonner à votre bassin son éclat, son étanchéité et son confort.",
    url: SITE_URL + "/services/renovation-piscine",
  },
};

export default function RenovationPiscine() {
  return (
    <ServiceArticle
      slug="renovation-piscine"
      name="Rénovation de piscine"
      h1="Rénovation de piscine en Tunisie"
      intro="Eau trouble, revêtement fatigué, fuite ou plage datée ? Nous remettons votre bassin à neuf — proprement, sans tout casser quand c'est possible."
      heroImage={{
        src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1200&auto=format&fit=crop",
        alt: "Mosaïque bleue d'un bassin rénové, éclairé le soir",
        width: 1200,
        height: 900,
      }}
      sections={[
        {
          heading: "Les signes qu'il faut rénover",
          bullets: [
            { strong: "Eau difficile à garder claire", text: "malgré les produits — filtration à revoir." },
            { strong: "Revêtement tâché, plissé ou percé", text: "liner ou carrelage à remplacer." },
            { strong: "Perte d'eau inexpliquée", text: "étanchéité à contrôler." },
            { strong: "Plage glissante ou abîmée", text: "margelles et abords à reprendre." },
            { strong: "Éclairage terne", text: "projecteurs LED modernes, bien plus agréables le soir." },
          ],
        },
        {
          heading: "Notre méthode",
          paragraphs: [
            "D'abord un diagnostic sur place : structure, étanchéité, hydraulique, électricité. Ensuite un devis par poste — vous savez exactement ce qui est refait et pourquoi. Nous privilégions les interventions ciblées plutôt que la démolition systématique.",
          ],
        },
        {
          heading: "Ce que la rénovation change",
          paragraphs: [
            "Une eau plus claire, moins de produits, une piscine plus sûre et une terrasse qui donne envie d'y rester. Souvent, quelques choix bien placés (revêtement, éclairage, margelles) transforment complètement le lieu.",
          ],
        },
      ]}
      steps={[
        { title: "Diagnostic", text: "Photos puis visite : nous identifions ce qui doit vraiment être refait." },
        { title: "Devis par poste", text: "Chaque intervention est chiffrée séparément, sans surprise." },
        { title: "Remise à neuf", text: "Intervention ciblée, remise en eau et conseils d'entretien." },
      ]}
      related={[
        { href: "/services/conception-piscine", label: "conception de piscine" },
        { href: "/services/construction-piscine", label: "construction de piscine" },
        { href: "/services/amenagement-piscine", label: "aménagement de piscine" },
        { href: "/realisations", label: "nos réalisations" },
      ]}
    />
  );
}
