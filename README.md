# Playground

Neutrales Grundgerüst nach dem Vorbild von Heart&Soul:
**Astro 7 + Tailwind CSS v4 + i18n (de/en)**, gehostet auf **Cloudflare Pages**
mit einer **Pages Function** als Instagram-Feed-Backend.

## 🚀 Lokal starten

```sh
npm install
npm run dev        # Dev-Server auf http://localhost:4321
```

Zum Testen der Cloudflare Function lokal:

```sh
npm run build
cp .dev.vars.example .dev.vars   # Werte eintragen
npx wrangler pages dev dist
```

## 📁 Struktur

```text
/
├── functions/
│   └── api/instagram.ts     # Cloudflare Pages Function (Instagram-Feed)
├── public/                  # Statische Assets (Favicon, robots.txt …)
├── src/
│   ├── components/          # InstagramFeed, CookieBanner …
│   ├── i18n/ui.ts           # Übersetzungen de/en
│   ├── layouts/Layout.astro # Grund-Layout (inkl. optionalem GTM)
│   ├── pages/               # index.astro (de) + en/index.astro
│   └── styles/global.css    # Design-Tokens (hier Branding anpassen)
├── astro.config.mjs
└── package.json
```

## 🧩 Was anzupassen ist

1. **Branding:** Farben/Fonts in `src/styles/global.css` (`:root`-Tokens).
2. **Texte:** `src/i18n/ui.ts` (de + en).
3. **Instagram-Profil-Link:** `profileUrl`-Prop an `<InstagramFeed />`.
4. **Analytics:** `GTM_ID` in `src/consts.ts` setzen (leer = GTM aus).
5. **Rechtliches:** Impressum-/Datenschutz-Seiten unter `src/pages/` ergänzen
   (das Cookie-Banner verlinkt bereits auf `/datenschutz`).

## ☁️ Deployment (Cloudflare Pages)

1. Dieses Repo im Cloudflare-Dashboard als neues Pages-Projekt verbinden.
2. Build-Befehl: `npm run build` — Output-Verzeichnis: `dist`.
3. Für den Instagram-Feed als Secrets hinterlegen:
   - `IG_ACCESS_TOKEN` (Meta-Langzeit-Token, eigener Account)
   - `IG_BUSINESS_ID`
   - optional `IG_HASHTAG` (Filter; leer = alle Beiträge)

Eigene Domain anbinden: siehe Muster in `CUSTOM_DOMAIN_SETUP.md` des
Heart&Soul-Projekts.
