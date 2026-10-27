export const languages = {
  de: "Deutsch",
  en: "English",
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "de";

export const ui = {
  de: {
    "site.title": "Playground | Deine Marke",
    "site.description":
      "Playground – Marken- und Produktseite auf Basis von Astro, Tailwind CSS und Cloudflare Pages.",

    // Navigation
    "nav.home": "Startseite",
    "nav.products": "Produkte",
    "nav.about": "Über uns",
    "nav.contact": "Kontakt",
    "nav.cta": "Kontakt aufnehmen",
    "nav.menu": "Menü öffnen",

    // Hero
    "hero.eyebrow": "Willkommen",
    "hero.headline": "Playground",
    "hero.body":
      "Dies ist das Marken-Grundgerüst. Ersetze Texte, Bilder und Farben, um deine eigene Seite zu gestalten.",
    "hero.cta": "Produkte entdecken",

    // Brand story
    "brand.eyebrow": "Über uns",
    "brand.heading": "Wofür wir stehen",
    "brand.body":
      "Erzähl hier die Geschichte deiner Marke: Was macht euch aus, was treibt euch an, was haben eure Kundinnen und Kunden davon. Zwei bis vier Sätze reichen für den ersten Eindruck.",
    "brand.cta": "Mehr über uns",

    // Products
    "products.eyebrow": "Produkte",
    "products.heading": "Unsere Produkte",
    "products.subtitle":
      "Eine kurze Einführung in dein Sortiment. Jede Karte unten ist ein Produkt – die Inhalte pflegst du zentral in einer Datei.",
    "products.viewAll": "Alle Produkte ansehen",
    "products.cta": "Details ansehen",

    // Contact
    "contact.eyebrow": "Kontakt",
    "contact.heading": "Lass uns sprechen",
    "contact.body":
      "Fragen, Wünsche oder eine Zusammenarbeit? Schreib uns – wir melden uns zeitnah zurück.",
    "contact.email": "hallo@playground.example",
    "contact.cta": "E-Mail schreiben",

    // Footer
    "footer.tagline": "Deine Marke in einem Satz.",
    "footer.rights": "Alle Rechte vorbehalten.",
    "footer.impressum": "Impressum",
    "footer.datenschutz": "Datenschutz",
    "footer.cookieSettings": "Cookie-Einstellungen",

    // Cookie banner
    "cookie.title": "Wir verwenden Cookies",
    "cookie.text":
      "Wir nutzen notwendige Cookies, damit diese Website funktioniert. Mit deiner Zustimmung nutzen wir außerdem Analyse-Cookies (über Google Tag Manager), um die Nutzung der Website zu verstehen und zu verbessern. Mehr dazu in unserer",
    "cookie.privacyLink": "Datenschutzerklärung",
    "cookie.acceptAll": "Alle akzeptieren",
    "cookie.rejectAll": "Nur notwendige",

    // Product detail
    "productDetail.back": "← Alle Produkte",
    "productDetail.cta": "Jetzt anfragen",

    // Legal
    "impressum.eyebrow": "Rechtliches",
    "impressum.title": "Impressum",
    "datenschutz.eyebrow": "Rechtliches",
    "datenschutz.title": "Datenschutzerklärung",

    // Instagram (optional, später aktivierbar)
    "instagram.title": "Instagram",
    "instagram.subtitle": "Aktuelle Beiträge direkt aus unserem Instagram-Account.",
    "instagram.loading": "Beiträge werden geladen …",
    "instagram.empty": "Aktuell sind keine Beiträge verfügbar.",
    "instagram.error": "Instagram-Beiträge konnten gerade nicht geladen werden.",
    "instagram.cta": "Mehr auf Instagram ansehen",
  },
  en: {
    "site.title": "Playground | Your Brand",
    "site.description":
      "Playground – a brand and product site built on Astro, Tailwind CSS and Cloudflare Pages.",

    "nav.home": "Home",
    "nav.products": "Products",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.cta": "Get in touch",
    "nav.menu": "Open menu",

    "hero.eyebrow": "Welcome",
    "hero.headline": "Playground",
    "hero.body":
      "This is the brand scaffold. Replace copy, images and colors to craft your own site.",
    "hero.cta": "Explore products",

    "brand.eyebrow": "About us",
    "brand.heading": "What we stand for",
    "brand.body":
      "Tell your brand's story here: what sets you apart, what drives you, what your customers gain. Two to four sentences are enough for a first impression.",
    "brand.cta": "More about us",

    "products.eyebrow": "Products",
    "products.heading": "Our products",
    "products.subtitle":
      "A short intro to your range. Each card below is a product – you manage the content centrally in one file.",
    "products.viewAll": "View all products",
    "products.cta": "View details",

    "contact.eyebrow": "Contact",
    "contact.heading": "Let's talk",
    "contact.body":
      "Questions, ideas or a collaboration? Write to us – we'll get back to you soon.",
    "contact.email": "hallo@playground.example",
    "contact.cta": "Send an email",

    "footer.tagline": "Your brand in one sentence.",
    "footer.rights": "All rights reserved.",
    "footer.impressum": "Legal notice",
    "footer.datenschutz": "Privacy policy",
    "footer.cookieSettings": "Cookie settings",

    "cookie.title": "We use cookies",
    "cookie.text":
      "We use necessary cookies to make this site work. With your consent, we also use analytics cookies (via Google Tag Manager) to understand and improve how the site is used. Learn more in our",
    "cookie.privacyLink": "privacy policy",
    "cookie.acceptAll": "Accept all",
    "cookie.rejectAll": "Necessary only",

    "productDetail.back": "← All products",
    "productDetail.cta": "Enquire now",

    "impressum.eyebrow": "Legal",
    "impressum.title": "Legal notice",
    "datenschutz.eyebrow": "Legal",
    "datenschutz.title": "Privacy policy",

    "instagram.title": "Instagram",
    "instagram.subtitle": "Latest posts straight from our Instagram account.",
    "instagram.loading": "Loading posts …",
    "instagram.empty": "No posts are available right now.",
    "instagram.error": "Instagram posts couldn't be loaded right now.",
    "instagram.cta": "See more on Instagram",
  },
} as const;

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

export function getLocalizedPath(path: string, lang: Lang): string {
  const cleanPath = path.replace(/^\/(de|en)/, "") || "/";
  return lang === defaultLang ? cleanPath : `/en${cleanPath}`;
}
