# Céline & Olivier — 20 Février 2027

Plateforme de mariage premium pour Céline et Olivier, au Complexe Mundi (Yaoundé, Cameroun). Next.js 16, TypeScript, Tailwind CSS v4, Framer Motion, GSAP, intégration Notion (RSVP + Hébergement), Google Maps, météo.

## Stack technique

| Domaine | Choix |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack) |
| Langage | TypeScript |
| Style | Tailwind CSS v4 (`@theme` dans `globals.css`, pas de fichier config) |
| Animations | Framer Motion + GSAP |
| CRM | Notion API (RSVP + Hébergement) |
| Cartographie | Google Maps (iframe embed) |
| Météo | OpenWeatherMap |
| Déploiement | Vercel |
| Domaine | Hostinger |

## Démarrer en local

```bash
npm install
cp .env.example .env.local   # puis renseignez les clés (voir ci-dessous)
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000).

## Structure du projet

```
src/
  app/                  routes (page.tsx, layout.tsx, api/*, sitemap.ts, robots.ts)
  components/
    layout/             IntroScreen, Navigation
    sections/           une section = un dossier (hero, story, rsvp, accommodation, ...)
    ui/                 composants réutilisables (boutons de formulaire, headings, images)
    animations/         Reveal (scroll-reveal), FloatingPetals, ConfettiPetals
  data/
    content.ts          TOUT le texte du site (noms, dates, programme, menu, etc.)
    images.ts           registre central des images — changez juste les `src`
  integrations/
    notion.ts            client Notion + création des entrées RSVP / Hébergement
  lib/                   hooks partagés (useCountdown, useMounted, cn)
scripts/
  setup-notion.mjs       crée automatiquement les deux bases Notion
  verify.mjs              script de vérification visuelle (Playwright)
```

### Modifier le contenu

Tout le texte affiché sur le site (prénoms, programme du jour J, menu, dress code, informations pratiques, etc.) est centralisé dans **`src/data/content.ts`**. Les champs encore au stade de brouillon sont marqués `[PLACEHOLDER]` — recherchez ce mot pour les retrouver tous.

### Remplacer les images

Toutes les images sont déclarées dans **`src/data/images.ts`**. Pour remplacer une photo, changez uniquement son champ `src` (gardez `width`/`height` proches du ratio réel pour éviter les distorsions).

Si une photo n'est pas encore disponible, ajoutez `placeholder: true` à son entrée dans `images.ts` : un encart « Photo à venir » s'affiche à la place plutôt qu'une image incorrecte.

## Notion — RSVP & Hébergement

1. Créez une intégration interne sur [notion.so/my-integrations](https://www.notion.so/my-integrations), copiez le secret dans `NOTION_API_KEY`.
2. Créez une page Notion vide qui servira de parent, partagez-la avec votre intégration (`···` → `Connexions` → votre intégration), copiez son ID dans `NOTION_PARENT_PAGE_ID` (l'ID est la suite de caractères dans l'URL de la page).
3. Lancez :
   ```bash
   npm run notion:setup
   ```
   Cela crée automatiquement deux bases : **« Mariage — Confirmations RSVP »** et **« Mariage — Réservations Hébergement »**, avec toutes les colonnes nécessaires (dont un lien WhatsApp cliquable généré automatiquement).
4. Collez les deux IDs affichés dans `.env.local` (`NOTION_RSVP_DATABASE_ID`, `NOTION_ACCOMMODATION_DATABASE_ID`).

Chaque soumission de formulaire (RSVP ou réservation) crée une ligne dans la base correspondante, avec un statut par défaut (`En attente`) que vous pouvez changer manuellement dans Notion (`Confirmé`, `Payé`, `Annulé`, `Occupé`...). La colonne **Lien WhatsApp** est un lien `https://wa.me/...` cliquable directement depuis Notion — pas besoin d'enregistrer le numéro pour contacter l'invité.

## Google Maps

La carte utilise l'embed gratuit de Google Maps (`google.com/maps?...&output=embed`), sans clé API — elle fonctionne immédiatement. Les coordonnées du lieu sont dans `couple.venueCoordinates` (`src/data/content.ts`) ; mettez-les à jour avec les coordonnées exactes du Complexe Mundi une fois confirmées.

Si vous préférez une carte JS entièrement personnalisable (marqueurs sur mesure, style de carte premium), une clé `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` est déjà prévue dans `.env.example` pour une future migration vers `@vis.gl/react-google-maps`.

## Météo

L'API `/api/weather` interroge OpenWeatherMap avec la clé `OPENWEATHER_API_KEY`. Les prévisions horaires ne couvrent que les ~5 prochains jours : tant que le mariage est loin, le site affiche un message d'attente au lieu de prévisions inventées. Les vraies prévisions apparaîtront automatiquement à l'approche du 20 février 2027.

## Variables d'environnement

Voir `.env.example` pour la liste complète. Aucune clé n'est obligatoire pour lancer le site en local — les fonctionnalités correspondantes se dégradent proprement (formulaires affichent une erreur claire, météo affiche un message d'attente) si une clé manque.

## Vérification visuelle (Playwright)

Un script de contrôle est disponible pour capturer chaque section en desktop (1440px) et mobile (390px), et détecter les erreurs console / débordements horizontaux :

```bash
npm run dev            # dans un terminal
npx playwright install chromium   # une seule fois
node scripts/verify.mjs           # dans un second terminal
```

Les captures sont écrites dans `verify-screenshots/` (non versionné).

## Déploiement sur Vercel

1. Poussez le projet sur un dépôt Git (GitHub/GitLab/Bitbucket).
2. Sur [vercel.com/new](https://vercel.com/new), importez le dépôt.
3. Ajoutez toutes les variables de `.env.local` dans **Project Settings → Environment Variables**.
4. Déployez. Build command et output sont détectés automatiquement (`next build`).

## Connexion du domaine Hostinger

1. Sur Vercel : **Project → Settings → Domains** → ajoutez votre domaine (ex. `celine-et-olivier.com`).
2. Vercel affiche les enregistrements DNS à créer (généralement un `A` vers `76.76.21.21` pour la racine, et un `CNAME` vers `cname.vercel-dns.com` pour `www`).
3. Sur Hostinger : **hPanel → Domaines → DNS / Zone Editor** de votre domaine, créez/modifiez ces enregistrements avec les valeurs fournies par Vercel.
4. Attendez la propagation DNS (de quelques minutes à 24h). Vercel détecte automatiquement la validation et délivre le certificat SSL.
5. Mettez à jour `siteUrl` dans `src/app/layout.tsx`, `src/app/sitemap.ts` et `src/app/robots.ts` avec le domaine définitif.

## Accessibilité & performance

- Contrastes de texte vérifiés WCAG AA sur les principales combinaisons texte/fond.
- Navigation au clavier : anneaux de focus visibles sur les champs de formulaire et liens.
- `prefers-reduced-motion` respecté (animations désactivées si l'utilisateur le demande au niveau système).
- Images optimisées via `next/image` (lazy loading, formats responsives).
- Cible Lighthouse 90+ : à valider une fois les vraies photos (compressées) en place — les placeholders Unsplash actuels sont plus lourds que des photos optimisées dédiées.
