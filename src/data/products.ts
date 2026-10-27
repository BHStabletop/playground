import type { Lang } from "../i18n/ui";

/**
 * Zentrale Produktdaten. Hier pflegst du alle Produkte an EINER Stelle.
 * - `slug`  : Teil der URL, z. B. /produkte/produkt-eins  (nur Kleinbuchstaben, Bindestriche)
 * - `image` : Pfad zu einer Datei in /public (z. B. /produkte/produkt-eins.webp)
 * - `name` / `tagline` / `description`: je Sprache (de/en)
 *
 * Neues Produkt = einfach ein weiteres Objekt in das Array einfügen.
 */
export interface Product {
  slug: string;
  image: string;
  /** Akzentfarbe für die Karte (CSS-Farbe), optional */
  accent?: string;
  name: Record<Lang, string>;
  tagline: Record<Lang, string>;
  description: Record<Lang, string>;
}

export const products: Product[] = [
  {
    slug: "produkt-eins",
    image: "/produkte/platzhalter-1.svg",
    accent: "#6c8cff",
    name: { de: "Produkt Eins", en: "Product One" },
    tagline: { de: "Kurzer Untertitel", en: "Short subtitle" },
    description: {
      de: "Beschreibe hier dein erstes Produkt in zwei bis drei Sätzen. Was ist es, für wen ist es, was macht es besonders?",
      en: "Describe your first product here in two or three sentences. What is it, who is it for, what makes it special?",
    },
  },
  {
    slug: "produkt-zwei",
    image: "/produkte/platzhalter-2.svg",
    accent: "#4d7d59",
    name: { de: "Produkt Zwei", en: "Product Two" },
    tagline: { de: "Kurzer Untertitel", en: "Short subtitle" },
    description: {
      de: "Beschreibe hier dein zweites Produkt. Die Inhalte kommen alle aus dieser Datei – ändere einfach die Texte und Bildpfade.",
      en: "Describe your second product here. All content comes from this file – just change the copy and image paths.",
    },
  },
  {
    slug: "produkt-drei",
    image: "/produkte/platzhalter-3.svg",
    accent: "#c98a4d",
    name: { de: "Produkt Drei", en: "Product Three" },
    tagline: { de: "Kurzer Untertitel", en: "Short subtitle" },
    description: {
      de: "Dein drittes Produkt. Lösche die Platzhalter, sobald du echte Produkte hast – oder füge beliebig viele weitere hinzu.",
      en: "Your third product. Delete the placeholders once you have real products – or add as many more as you like.",
    },
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
