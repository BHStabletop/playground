# Lokal entwickeln (Mac)

So baust du die Playground-Seite auf deinem eigenen Rechner weiter.

## 1. Einmalige Einrichtung

**a) Node.js installieren (Version 22 oder neuer)**
- Einfachster Weg: https://nodejs.org → „LTS" herunterladen und installieren.
- Prüfen im Terminal:
  ```sh
  node -v     # sollte v22.x.x (oder höher) zeigen
  ```

**b) Projekt klonen**
```sh
git clone https://github.com/BHStabletop/playground.git
cd playground
```

**c) Abhängigkeiten installieren**
```sh
npm install
```

## 2. Täglich: Entwicklungsserver starten

```sh
npm run dev
```
→ Seite öffnen: **http://localhost:4321**
Änderungen an Dateien erscheinen sofort im Browser (Hot Reload). Stoppen mit `Strg`+`C`.

## 3. Änderungen veröffentlichen

```sh
git add -A
git commit -m "Beschreibung deiner Änderung"
git push
```
→ Cloudflare Pages baut automatisch neu, nach ~1–2 Min ist https://playground-2eu.pages.dev aktualisiert.

> Tipp: Vor dem Push einmal `npm run build` ausführen – läuft der Build lokal durch, klappt er auch bei Cloudflare.

---

## Wo ändere ich was?

| Ich will … | Datei(en) |
|---|---|
| **Texte** (de + en) ändern | `src/i18n/ui.ts` |
| **Produkte** pflegen (Name, Text, Bild) | `src/data/products.ts` |
| **Farben / Schriften** anpassen | `src/styles/global.css` (Block `:root`) |
| **Startseite** umbauen (Reihenfolge der Sektionen) | `src/pages/index.astro` (+ `src/pages/en/index.astro`) |
| **Navigation / Footer** | `src/components/Header.astro` / `Footer.astro` |
| **Einzelne Sektion** ändern | `src/components/*.astro` (Hero, BrandStory, ProductsTeaser, Contact …) |
| **Impressum / Datenschutz** füllen | `src/pages/impressum.astro`, `datenschutz.astro` (+ `en/`) |
| **Bilder / Logo** | Dateien in `public/` ablegen, im Code mit `/dateiname.ext` verlinken |
| **Analytics (GTM)** aktivieren | `src/consts.ts` → `GTM_ID` setzen |
| **Instagram-Feed** | Secrets in Cloudflare (siehe README) + `functions/api/instagram.ts` |

## Projektstruktur (Kurzüberblick)

```text
src/
├── components/   → wiederverwendbare Bausteine (Header, Footer, Hero, Karten …)
├── data/         → Inhalte als Daten (products.ts)
├── i18n/         → Übersetzungen de/en (ui.ts)
├── layouts/      → Grundgerüst jeder Seite (Layout.astro: Header + Inhalt + Footer)
├── pages/        → jede Datei = eine URL (de im Root, en unter /en)
└── styles/       → global.css (Design-Tokens)
functions/        → Cloudflare-Backend (API-Endpunkte)
public/           → statische Dateien (Bilder, Favicon, robots.txt)
```

## Neue Seite anlegen
Eine neue Datei in `src/pages/` = automatisch eine neue URL.
Beispiel: `src/pages/kontakt.astro` → erreichbar unter `/kontakt`.
Für die englische Version dieselbe Datei unter `src/pages/en/` anlegen.

## Neue Sprache?
In `src/i18n/ui.ts` und `astro.config.mjs` (`i18n.locales`) erweitern.
