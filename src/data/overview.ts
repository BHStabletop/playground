import type { Lang } from "../i18n/ui";

/** Seitentexte der Kollektionen-Übersicht (/kollektionen). */
export const overview = {
  title: { de: "Kollektionen", en: "Collections" } satisfies Record<Lang, string>,
  heroImage: "/images/kollektionen-hero.jpg",
  heading: { de: "Pick your stage", en: "Pick your stage" } satisfies Record<Lang, string>,
  body: {
    de: "PLAYGROUND gliedert sich in vier Welten: STONEWARE als Basis mit Charakter, PLATFORMS für Höhe und Inszenierung, SPOTLIGHTS zum gezielten In-Szene-Setzen und ADDITIONS für die entscheidenden Details. Aufeinander abgestimmt, frei kombinierbar zu einem Tischbild, das Ihre Handschrift trägt.",
    en: "PLAYGROUND is divided into four worlds: STONEWARE as a base with character, PLATFORMS for height and staging, SPOTLIGHTS for targeted accents and ADDITIONS for the decisive details. Coordinated and freely combinable into a table setting that carries your signature.",
  } satisfies Record<Lang, string>,
  openCollection: { de: "Kollektion ansehen:", en: "View collection:" } satisfies Record<Lang, string>,
  /** Querformat-Motive 1030×454, je Kollektion-Slug */
  images: {
    stoneware: "/images/overview-stoneware.jpg",
    platforms: "/images/overview-platforms.jpg",
    spotlights: "/images/overview-spotlights.jpg",
    additions: "/images/overview-additions.jpg",
  } as Record<string, string>,
};
