import type { Lang } from "../i18n/ui";

/**
 * Die vier PLAYGROUND-Welten. Reihenfolge = Reihenfolge in Navigation, Slider und Übersicht.
 * Bilder liegen in /public/images. Serien je Kollektion stehen in `groups`.
 */
export interface Series {
  name: string;
  image: string;
}

export interface SeriesGroup {
  /** Gruppenname, z. B. "Essentials" (wird als vertikale Überschrift gesetzt) */
  name: string;
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
}

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
    groups: [],
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
    groups: [],
  },
  {
    slug: "spotlights",
    name: "Spotlights",
    headline: "Material matters",
    intro: {
      de: "Und plötzlich wird das Alltägliche besonders: Bei SPOTLIGHTS spielen Materialien, Formen und Strukturen zusammen und machen Speisen zu kleinen Inszenierungen. Aus Stein, Holz und Glas entsteht die Bühne für Beilagen und Details, aufregend anders oder besonders hochwertig.",
      en: "Suddenly the everyday becomes special: with SPOTLIGHTS, materials, shapes and textures work together and turn food into small performances. Stone, wood and glass become the stage for sides and details, excitingly different or especially refined.",
    },
    hero: "/images/spotlights-hero.jpg",
    teaser: "/images/spotlights-teaser.jpg",
    groups: [],
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
    groups: [],
  },
];

export function getCollection(slug: string): Collection | undefined {
  return collections.find((c) => c.slug === slug);
}
