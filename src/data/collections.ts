import type { Lang } from "../i18n/ui";

/**
 * Die vier PLAYGROUND-Welten. Reihenfolge = Reihenfolge in Navigation, Slider und Übersicht.
 * Bilder liegen in /public/images. Serien je Kollektion stehen in `groups`.
 *
 * Bildpfade: Serien `/images/<kollektion>/<serie-kebab>.jpg`, Hero/Teaser `/images/<kollektion>-hero|teaser.jpg`,
 * „On stage“ `/images/<kollektion>-stage-<n>.jpg`.
 */
export interface Series {
  name: string;
  image: string;
  /** Nur bei `feature-*`-Layouts: das große Hochformat-Bild (460×678) */
  feature?: boolean;
}

/**
 * - `grid`: 220×250-Kacheln, 3 Spalten, Gruppenname als vertikale Überschrift (Stoneware)
 * - `feature-left` / `feature-right`: ein großes Hochformat (460×678) plus zwei gestapelte 380×282-Bilder
 * - `banner`: ein Querformat über die volle Inhaltsbreite (940×282)
 */
export type GroupLayout = "grid" | "feature-left" | "feature-right" | "banner";

export interface SeriesGroup {
  /** Gruppenname, z. B. "Essentials" (wird als vertikale Überschrift gesetzt); ohne Namen keine Überschrift */
  name?: string;
  layout: GroupLayout;
  series: Series[];
}

export interface Collection {
  slug: string;
  name: string;
  /** Englische Headline unter dem Hero, z. B. "Stone meets soul" */
  headline: string;
  intro: Record<Lang, string>;
  hero: string;
  teaser: string;
  groups: SeriesGroup[];
  /** Bilder des „On stage“-Sliders (1030×454) */
  stage: string[];
}

const kebab = (name: string) =>
  name
    .toLowerCase()
    .replace(/&/g, " ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const series = (slug: string, names: string[], feature?: string): Series[] =>
  names.map((name) => ({
    name,
    image: `/images/${slug}/${kebab(name)}.jpg`,
    ...(name === feature ? { feature: true } : {}),
  }));

const stage = (slug: string, count = 3) =>
  Array.from({ length: count }, (_, i) => `/images/${slug}-stage-${i + 1}.jpg`);

export const collections: Collection[] = [
  {
    slug: "stoneware",
    name: "Stoneware",
    headline: "Stone meets soul",
    intro: {
      de: "Steinzeug von schlicht bis auffallend: Glasuren, die wie Salzkristalle schimmern, Oberflächen, weich wie warme Erde. Formen, die jedes Gericht inszenieren, immer mit Charakter. Vielseitig genug für den Alltag, ausdrucksstark genug für den großen Auftritt.",
      en: "Stoneware from understated to striking: glazes that shimmer like salt crystals, surfaces as soft as warm earth. Shapes that stage every dish, always with character. Versatile enough for every day, expressive enough for the big entrance.",
    },
    hero: "/images/stoneware-hero.jpg",
    teaser: "/images/stoneware-teaser.jpg",
    groups: [
      { name: "Essentials", layout: "grid", series: series("stoneware", ["ELEMENTS", "RENEW"]) },
      { name: "Extraordinary", layout: "grid", series: series("stoneware", ["AURA", "EMBRACE", "SILENTO", "NAMI", "2IN1", "GLOW"]) },
      { name: "Prime", layout: "grid", series: series("stoneware", ["NARA", "SEA", "SPOT ON"]) },
      { name: "Treasures", layout: "grid", series: series("stoneware", ["MUSE", "SHELLS", "BREAD & BITE", "SAVANNA", "BLUE PEARL", "TERRA", "TAVOLINI", "COAST & COUNTRY", "YUM!"]) },
    ],
    stage: stage("stoneware"),
  },
  {
    slug: "platforms",
    name: "Platforms",
    headline: "Reach new heights",
    intro: {
      de: "Höhe als Gestaltungsmittel: Menagen und Präsentationselemente mit harmonischen Proportionen, die den Tisch in verschiedene Ebenen gliedern. Sie heben Gerichte im wörtlichen Sinn hervor und schaffen lebendige, mehrdimensionale Tischbilder.",
      en: "Height as a design tool: stands and display pieces with balanced proportions that divide the table into levels. They literally lift dishes up and create lively, multi-dimensional table settings.",
    },
    hero: "/images/platforms-hero.jpg",
    teaser: "/images/platforms-teaser.jpg",
    groups: [
      { layout: "feature-right", series: series("platforms", ["ANANTI", "LOFT", "ELEVATE"], "ELEVATE") },
      { layout: "banner", series: series("platforms", ["ARC"]) },
    ],
    stage: stage("platforms"),
  },
  {
    slug: "spotlights",
    name: "Spotlights",
    headline: "Crafted for creativity",
    intro: {
      de: "Und plötzlich wird das Alltägliche besonders: Bei SPOTLIGHTS spielen Materialien, Formen und Strukturen zusammen und machen Speisen zu kleinen Inszenierungen. Aus Stein, Holz und Glas entsteht die Bühne für Beilagen und Details, aufregend anders oder besonders hochwertig.",
      en: "Suddenly the everyday becomes special: with SPOTLIGHTS, materials, shapes and textures work together and turn food into small performances. Stone, wood and glass become the stage for sides and details, excitingly different or especially refined.",
    },
    hero: "/images/spotlights-hero.jpg",
    teaser: "/images/spotlights-teaser.jpg",
    groups: [
      { layout: "feature-left", series: series("spotlights", ["STAINLESS STEEL", "CAST IRON", "NATURAL STONE"], "STAINLESS STEEL") },
      { layout: "feature-right", series: series("spotlights", ["GLASS", "BAMBOO", "WOOD"], "WOOD") },
      { layout: "banner", series: series("spotlights", ["TERRACOTTA"]) },
    ],
    stage: stage("spotlights"),
  },
  {
    slug: "additions",
    name: "Additions",
    headline: "It’s in the details",
    intro: {
      de: "Kleine Dinge mit großer Wirkung: Kannen und Gießer, Brotkörbe, Gewürzstreuer und viele feine Accessoires, die den Tisch vollenden. Charaktervolle Akzente, die Wärme ausstrahlen und Gästen das Gefühl geben, wirklich willkommen zu sein.",
      en: "Small things with a big impact: jugs and pourers, bread baskets, seasoning shakers and many fine accessories that complete the table. Characterful accents that radiate warmth and make guests feel truly welcome.",
    },
    hero: "/images/additions-hero.jpg",
    teaser: "/images/additions-teaser.jpg",
    groups: [
      { layout: "feature-left", series: series("additions", ["POTS & POURERS", "BREAD BASKETS", "SEASONING"], "POTS & POURERS") },
      { layout: "banner", series: series("additions", ["CUTLERY"]) },
    ],
    stage: stage("additions"),
  },
];

export function getCollection(slug: string): Collection | undefined {
  return collections.find((c) => c.slug === slug);
}
