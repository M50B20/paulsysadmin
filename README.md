# Portfolio — Paul Pichon

Portfolio personnel fait avec **Astro 5** + **Tailwind CSS 3**,
design sombre tech/minimaliste avec accents violet/indigo/cyan.

## Lancement rapide

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # build SSG dans ./dist
npm run preview    # prévisualiser le build
```

## Déploiement

### Vercel
```bash
npm i -g vercel
vercel --prod
```

### Netlify
```bash
npm i -g netlify-cli
netlify deploy --prod --dir dist
```

### GitHub Pages (existant)
```bash
npm run build
npm run deploy   # gh-pages -d dist
```
Pense à mettre `site: 'https://ton-domaine.fr'` dans `astro.config.mjs`.

---

## Structure

```
src/
├── components/        # Un composant par section
│   ├── Nav.astro
│   ├── Hero.astro
│   ├── About.astro
│   ├── Skills.astro
│   ├── Projects.astro
│   ├── Timeline.astro
│   ├── Certifications.astro
│   ├── Contact.astro
│   └── Footer.astro
├── data/              # Contenu en TypeScript pur
│   ├── skills.ts
│   ├── certifications.ts
│   ├── projects.ts
│   └── timeline.ts
├── layouts/
│   └── Layout.astro   # Méta, fonts, ViewTransitions
├── pages/
│   └── index.astro    # Page unique — importe tous les composants
└── styles/
    └── globals.css    # @tailwind + CSS variables + utilities custom
```

## Mettre à jour le contenu

| Quoi                   | Fichier                        |
|------------------------|--------------------------------|
| Compétences            | `src/data/skills.ts`           |
| Certifications         | `src/data/certifications.ts`   |
| Projets / Home-lab     | `src/data/projects.ts`         |
| Parcours / Timeline    | `src/data/timeline.ts`         |
| Email / réseaux        | `src/components/Contact.astro` |
| Texte héro / accroche  | `src/components/Hero.astro`    |
| Texte "À propos"       | `src/components/About.astro`   |
| Schéma réseau home-lab | `src/components/Projects.astro` (SVG inline) |

## CV

Dépose ton CV PDF ici : `public/assets/documents/CV_Paul_Pichon.pdf`  
Le lien "Télécharger le CV" dans le Hero pointe déjà vers ce chemin.

## Licence

Code source MIT · Contenu personnel © Paul Pichon
