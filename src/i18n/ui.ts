export const languages = {
  de: "Deutsch",
  en: "English",
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "de";

export const ui = {
  de: {
    "site.title": "Playground",
    "site.description":
      "Playground – ein neutrales Grundgerüst auf Basis von Astro, Tailwind CSS und Cloudflare Pages.",

    "nav.home": "Startseite",
    "nav.cta": "Kontakt aufnehmen",

    "hero.headline": "Willkommen bei<br />Playground",
    "hero.body":
      "Dies ist das Grundgerüst. Tausche Texte, Farben und Komponenten aus, um deine eigene Seite zu bauen.",

    "footer.rights": "Alle Rechte vorbehalten.",
    "footer.impressum": "Impressum",
    "footer.datenschutz": "Datenschutz",
    "footer.cookieSettings": "Cookie-Einstellungen",

    "cookie.title": "Wir verwenden Cookies",
    "cookie.text":
      "Wir nutzen notwendige Cookies, damit diese Website funktioniert. Mit deiner Zustimmung nutzen wir außerdem Analyse-Cookies (über Google Tag Manager), um die Nutzung der Website zu verstehen und zu verbessern. Mehr dazu in unserer",
    "cookie.privacyLink": "Datenschutzerklärung",
    "cookie.acceptAll": "Alle akzeptieren",
    "cookie.rejectAll": "Nur notwendige",

    "instagram.title": "Instagram",
    "instagram.subtitle":
      "Aktuelle Beiträge direkt aus unserem Instagram-Account.",
    "instagram.loading": "Beiträge werden geladen …",
    "instagram.empty": "Aktuell sind keine Beiträge verfügbar.",
    "instagram.error": "Instagram-Beiträge konnten gerade nicht geladen werden.",
    "instagram.cta": "Mehr auf Instagram ansehen",
  },
  en: {
    "site.title": "Playground",
    "site.description":
      "Playground – a neutral starter scaffold built on Astro, Tailwind CSS and Cloudflare Pages.",

    "nav.home": "Home",
    "nav.cta": "Get in touch",

    "hero.headline": "Welcome to<br />Playground",
    "hero.body":
      "This is the scaffold. Swap out copy, colors and components to build your own site.",

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

    "instagram.title": "Instagram",
    "instagram.subtitle":
      "Latest posts straight from our Instagram account.",
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
