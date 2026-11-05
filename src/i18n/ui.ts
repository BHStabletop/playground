export const languages = {
  de: "Deutsch",
  en: "English",
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "de";

export const ui = {
  de: {
    "site.title": "PLAYGROUND | Your stage. Your rules.",
    "site.description":
      "PLAYGROUND ist die Bühne für kulinarische Kreativität: designorientierte Tischkollektionen von BHS tabletop für experimentelles, modernes Food-Design.",

    // Navigation
    "nav.home": "Startseite",
    "nav.collections": "Kollektionen",
    "nav.about": "Über die Marke",
    "nav.contact": "Kontakt",
    "nav.menu": "Menü öffnen",
    "nav.close": "Menü schließen",
    "nav.main": "Hauptnavigation",

    // Startseite
    "home.hero": "No Limits",
    "home.intro.heading": "Your stage. Your rules.",
    "home.intro.body":
      "PLAYGROUND ist die Bühne für kulinarische Kreativität. Unsere designorientierten Tischkollektionen geben Ihnen die Freiheit, Ihren eigenen Stil auszudrücken. Mit mutigen Materialien, innovativen Formen und Gespür für Trends ermöglichen wir Präsentationen, die Eindruck hinterlassen – für experimentelles, modernes Food-Design.",
    "home.intro.cta": "Mehr zur Marke",
    "home.collections.heading": "Kollektionen",
    "home.collections.cta": "Zur Kollektionsübersicht",
    "home.feed.heading": "Made to be seen",
    "home.feed.body":
      "No Limits. Auch im Feed. Inszenierungen, Kombinationen und Trends aus der PLAYGROUND-Community. Lassen Sie sich für Ihr nächstes Tischbild inspirieren.",
    "home.feed.cta": "Mehr auf Instagram",
    "home.contact.heading": "Let’s play",
    "home.contact.body":
      "Sie haben eine Idee oder ein Tischbild im Kopf, das Ihre Handschrift trägt? Lassen Sie uns darüber sprechen. Ob neue Kollektion, Mix & Match oder die passende Bühne für Ihre Gerichte – wir zeigen Ihnen die Möglichkeiten, die Komposition bleibt bei Ihnen.",
    "home.contact.cta": "Kontakt aufnehmen",

    // Slider
    "slider.prev": "Zurück",
    "slider.next": "Weiter",

    // Kontakt
    "contact.email": "hallo@playground.example",

    // Footer
    "footer.copy": "© 2026 BHS tabletop AG",
    "footer.impressum": "Impressum",
    "footer.datenschutz": "Datenschutz",
    "footer.cookieSettings": "Cookie-Einstellungen",
    "footer.instagram": "PLAYGROUND auf Instagram",

    // Cookie banner
    "cookie.title": "Wir verwenden Cookies",
    "cookie.text":
      "Wir nutzen notwendige Cookies, damit diese Website funktioniert. Mit Ihrer Zustimmung nutzen wir außerdem Analyse-Cookies (über Google Tag Manager), um die Nutzung der Website zu verstehen und zu verbessern. Mehr dazu in unserer",
    "cookie.privacyLink": "Datenschutzerklärung",
    "cookie.acceptAll": "Alle akzeptieren",
    "cookie.rejectAll": "Nur notwendige",

    // Legal
    "impressum.eyebrow": "Rechtliches",
    "impressum.title": "Impressum",
    "datenschutz.eyebrow": "Rechtliches",
    "datenschutz.title": "Datenschutzerklärung",

    // Instagram
    "instagram.title": "Instagram",
    "instagram.subtitle": "Aktuelle Beiträge direkt aus unserem Instagram-Account.",
    "instagram.loading": "Beiträge werden geladen …",
    "instagram.empty": "Aktuell sind keine Beiträge verfügbar.",
    "instagram.error": "Instagram-Beiträge konnten gerade nicht geladen werden.",
    "instagram.cta": "Mehr auf Instagram",
  },
  en: {
    "site.title": "PLAYGROUND | Your stage. Your rules.",
    "site.description":
      "PLAYGROUND is the stage for culinary creativity: design-led table collections by BHS tabletop for experimental, modern food design.",

    "nav.home": "Home",
    "nav.collections": "Collections",
    "nav.about": "About the brand",
    "nav.contact": "Contact",
    "nav.menu": "Open menu",
    "nav.close": "Close menu",
    "nav.main": "Main navigation",

    "home.hero": "No Limits",
    "home.intro.heading": "Your stage. Your rules.",
    "home.intro.body":
      "PLAYGROUND is the stage for culinary creativity. Our design-led table collections give you the freedom to express your own style. With bold materials, innovative shapes and a feel for trends, we make presentations that leave an impression – for experimental, modern food design.",
    "home.intro.cta": "More about the brand",
    "home.collections.heading": "Collections",
    "home.collections.cta": "See all collections",
    "home.feed.heading": "Made to be seen",
    "home.feed.body":
      "No Limits. In the feed, too. Settings, combinations and trends from the PLAYGROUND community. Find inspiration for your next table.",
    "home.feed.cta": "More on Instagram",
    "home.contact.heading": "Let’s play",
    "home.contact.body":
      "Do you have an idea or a table setting in mind that carries your signature? Let’s talk about it. Whether a new collection, mix & match or the right stage for your dishes – we show you the possibilities, the composition stays yours.",
    "home.contact.cta": "Get in touch",

    "slider.prev": "Previous",
    "slider.next": "Next",

    "contact.email": "hallo@playground.example",

    "footer.copy": "© 2026 BHS tabletop AG",
    "footer.impressum": "Legal notice",
    "footer.datenschutz": "Privacy",
    "footer.cookieSettings": "Cookie settings",
    "footer.instagram": "PLAYGROUND on Instagram",

    "cookie.title": "We use cookies",
    "cookie.text":
      "We use necessary cookies to make this site work. With your consent, we also use analytics cookies (via Google Tag Manager) to understand and improve how the site is used. Learn more in our",
    "cookie.privacyLink": "privacy policy",
    "cookie.acceptAll": "Accept all",
    "cookie.rejectAll": "Necessary only",

    "impressum.eyebrow": "Legal",
    "impressum.title": "Legal notice",
    "datenschutz.eyebrow": "Legal",
    "datenschutz.title": "Privacy policy",

    "instagram.title": "Instagram",
    "instagram.subtitle": "Latest posts straight from our Instagram account.",
    "instagram.loading": "Loading posts …",
    "instagram.empty": "No posts are available right now.",
    "instagram.error": "Instagram posts couldn't be loaded right now.",
    "instagram.cta": "More on Instagram",
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
