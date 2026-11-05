import type { Lang } from "../i18n/ui";

type Copy = Record<Lang, string>;

/** Texte der Seite „Über die Marke“ (Figma 36:174). */
export const brand = {
  metaTitle: { de: "Über die Marke", en: "About the brand" } satisfies Copy,
  metaDescription: {
    de: "PLAYGROUND ist die Bühne für kulinarische Kreativität: designorientierte Tischkollektionen für experimentelles, modernes Food-Design.",
    en: "PLAYGROUND is the stage for culinary creativity: design-led tableware collections for experimental, modern food design.",
  } satisfies Copy,
  hero: { de: "Über die Marke", en: "About the brand" } satisfies Copy,
  heroAlt: {
    de: "Gedeckter Tisch mit Etagere, Tellern und Schalen von PLAYGROUND",
    en: "Laid table with stand, plates and bowls by PLAYGROUND",
  } satisfies Copy,
  intro: {
    heading: { de: "No Limits", en: "No Limits" } satisfies Copy,
    body: {
      de: "PLAYGROUND ist die Bühne für kulinarische Kreativität. Unsere designorientierten Tischkollektionen geben Ihnen die Freiheit, Ihren eigenen Stil auszudrücken. Mit mutigen Materialien, innovativen Formen und Gespür für Trends ermöglichen wir Präsentationen, die Eindruck hinterlassen – für experimentelles, modernes Food-Design.",
      en: "PLAYGROUND is the stage for culinary creativity. Our design-led tableware collections give you the freedom to express your own style. With bold materials, innovative shapes and a feel for trends, we make presentations that leave an impression – for experimental, modern food design.",
    } satisfies Copy,
  },
  material: {
    heading: { de: "Material matters", en: "Material matters" } satisfies Copy,
    body: {
      de: "Schimmernde Glasuren, matte Oberflächen, markante Texturen: Von Steinzeug über Holz bis Glas erzählt jedes Material seine eigene Geschichte. Unsere Kollektionen greifen internationale Food- und Interior-Trends auf und bringen sie als Erste auf den Tisch.",
      en: "Shimmering glazes, matte finishes, distinctive textures: from stoneware to wood to glass, every material tells its own story. Our collections pick up international food and interior trends and are the first to bring them to the table.",
    } satisfies Copy,
    slideAlt: {
      de: "Gedeckter Tisch mit Steinzeug-Tellern und Schalen",
      en: "Laid table with stoneware plates and bowls",
    } satisfies Copy,
    /** Figma zeigt dreimal dasselbe Motiv als Platzhalter-Slides. */
    slides: [
      "/images/marke-material-1.jpg",
      "/images/marke-material-2.jpg",
      "/images/marke-material-3.jpg",
    ],
  },
  mix: {
    heading: { de: "Mix & Match", en: "Mix & Match" } satisfies Copy,
    body: {
      de: "Formen, Höhen und Farben, die zueinander passen: Stellen Sie Ihr Tischbild frei zusammen und erweitern Sie es jederzeit. Mix & Match ohne Regeln.",
      en: "Shapes, heights and colours that go together: compose your table setting freely and extend it at any time. Mix & match without rules.",
    } satisfies Copy,
    alt: {
      de: "Draufsicht auf kombinierte Teller, Schalen und Platten verschiedener Kollektionen",
      en: "Top view of combined plates, bowls and platters from different collections",
    } satisfies Copy,
    image: "/images/marke-mix-match.jpg",
    cta: { de: "Mehr auf Instagram", en: "More on Instagram" } satisfies Copy,
  },
  video: {
    heading: { de: "Neuheiten Video", en: "New Arrivals Video" } satisfies Copy,
    label: {
      de: "Platzhalter für das Neuheiten-Video",
      en: "Placeholder for the new arrivals video",
    } satisfies Copy,
  },
};
