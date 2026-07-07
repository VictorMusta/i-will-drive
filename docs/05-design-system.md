# Design System — i will drive

> Artefact BMAD · UX/Architect phase · v1.0 · 2026-07-07
> Source de vérité visuelle : `design/maquette_DA finale..jpeg` (maquette client)
> Dépend de : [Brief](01-project-brief.md) §10 · Implémente la DA finale en **Atomic Design**

## 1. Direction retenue (maquette finale)

- **Hero clair** sur fond « mesh » dégradé (crème → turquoise en haut à droite,
  rose en bas à droite, orange safran en bas à gauche). Recréé en CSS
  (radial-gradients) : léger, net, responsive — pas d'image de fond.
- Titre bleu profond avec **« conduire. » en dégradé arc-en-ciel**
  (corail → safran → vert → turquoise), point final corail.
- **Tirets de marque** : 4 tirets aux couleurs des valeurs (corail, safran,
  turquoise, violet) — motif de la maquette client (≠ marquage routier).
- **Valeurs dans le hero** : picto + label compacts, sur une ligne.
- **CTA dégradé** corail → turquoise, arrondi complet, texte blanc.
- **Icône seule** (soleil + silhouette, `design/favirone.jpeg`) en grand à
  droite du hero, fond blanc fondu par multiply.
- **4 cartes bénéfices** blanches sous le hero, pastille d'icône pastel :
  Horaires adaptés (turquoise) · Accompagnement sur-mesure (corail) ·
  Tarifs justes et transparents (safran) · Taux de réussite élevé (violet).
- Rappel contrainte : **aucun symbole automobile** hors logo officiel.

## 2. Tokens (inchangés depuis §10 du brief)

| Token | Valeur | Usage |
|---|---|---|
| `--color-accent` | `#FF6F61` corail | CTA (départ du dégradé), Confiance |
| `--color-teal` | `#00BFAE` turquoise | fin du dégradé CTA, Respect |
| `--color-sun` | `#FFB703` safran | Autonomie, étoiles |
| `--color-ink` / `--color-dark` | `#14213D` bleu profond | texte fort, cartes avis |
| violet valeurs | `#7C5CBF` | Liberté, Taux de réussite |
| `--color-ground` | `#FFFBF5` | fond de page |
| Typo | Baloo 2 / Nunito / Caveat | titres / corps / script |

## 3. Inventaire Atomic Design

```
src/components/
├─ atoms/          # indivisibles, sans logique métier
│  ├─ Button.astro        # variant: primary (dégradé) | ghost | dark — <a> ou <button>
│  ├─ BrandDashes.astro   # les 4 tirets couleurs des valeurs
│  ├─ Wordmark.astro      # lockup texte « i will drive »
│  ├─ ValueIcon.astro     # cœur, personnes, soleil, papillon
│  └─ FeatureIcon.astro   # calendrier, personne, euro, bouclier
├─ molecules/      # composition d'atoms + contenu
│  ├─ ValueBadge.astro    # picto + label (+ desc optionnelle)
│  ├─ FeatureCard.astro   # carte bénéfice (pastille pastel + titre + tiret + texte)
│  ├─ FormulaCard.astro   # carte formule + CTA
│  ├─ ReviewCard.astro    # carte avis (fond bleu profond)
│  └─ FaqItem.astro       # accordéon question/réponse
├─ organisms/      # sections autonomes de la page
│  ├─ Header.astro        # wordmark + nav + CTA dégradé
│  ├─ Hero.astro          # mesh + titre arc-en-ciel + valeurs + CTA + icône seule
│  ├─ Features.astro      # grille des 4 cartes bénéfices
│  ├─ Welcome.astro       # manifesto client + logo horizontal + promesses
│  ├─ Formulas.astro      # section formules
│  ├─ Reviews.astro       # section avis
│  ├─ Zone.astro          # section zone (Dordogne)
│  ├─ Faq.astro           # section FAQ
│  ├─ Contact.astro       # formulaire Netlify
│  └─ Footer.astro
└─ (template)      # src/layouts/Layout.astro — SEO, polices, thème
```

Pages = assemblage d'organisms uniquement (`src/pages/index.astro`).
Contenu éditable centralisé dans `src/consts.ts` (SITE, NAV, VALUES, FEATURES,
FORMULES, AVIS, FAQ) — zéro contenu en dur dans les organisms.

## 4. Décisions

| # | Décision | Raison |
|---|---|---|
| DS1 | Fond mesh en CSS, pas l'image | poids, netteté, adaptation à toutes tailles |
| DS2 | Hero clair (remplace hero bleu profond) | maquette finale client |
| DS3 | CTA en dégradé corail→turquoise | maquette ; départ corail = couleur d'action historique |
| DS4 | « conduire. » en gradient-clip CSS | fidèle maquette, accessible (texte réel) |
| DS5 | Icône seule intégrée en multiply | fond blanc du JPEG fondu sans détourage |
| DS6 | Cartes bénéfices remplacent les 3 étapes numérotées | contenu maquette client > invention |
