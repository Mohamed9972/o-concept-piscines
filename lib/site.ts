/** Site-wide constants — single source of truth for contact & SEO. */
export const SITE_URL = "https://oconcept-piscines.tn";
export const SITE_NAME = "Ô Concept Piscines";
export const PHONE_DISPLAY = "98 157 900";
export const PHONE_TEL = "tel:+21698157900";
export const WHATSAPP_NUMBER = "21698157900";
export const EMAIL = "piscineoconcept@gmail.com";
export const ADDRESS_LINES = [
  "Bureau A-216 Bloc A",
  "Ariana Centre",
  "2080 Ariana, Tunisie",
] as const;

export function whatsappUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const NAV_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/services", label: "Services" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
] as const;
