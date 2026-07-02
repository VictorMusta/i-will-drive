# Architecture — IWillDrive

> Artefact BMAD · Architect phase · v0.1 · 2026-06-30
> Dépend de : [PRD](02-prd.md)

## 1. Principe directeur

Site **statique, sans base de données, sans backend propre**. Tout l'état métier vit
dans Elgea. Le seul flux sortant est le formulaire de contact → email via un service tiers.

## 2. Vue d'ensemble

```
                        ┌────────────────────────────┐
   Visiteur (mobile) ──▶│   Site IWillDrive (Astro)    │
                        │   HTML statique sur CDN       │
                        └───────────┬──────────────────┘
                                    │
        ┌───────────────┬──────────┴───────────┬──────────────────┐
        ▼               ▼                       ▼                  ▼
  CTA "Réserver"   Formulaire contact      Section Avis      Bouton "Avis"
        │               │                       │                  │
        ▼               ▼                       ▼                  ▼
  Portail Elgea    Netlify Forms          Widget Google     Google Business
  (réservation +   → email moniteur        (avis affichés)   (dépôt d'avis)
   paiement)        (pas de BDD)
```

## 3. Stack technique

| Couche | Choix | Justification |
|--------|-------|---------------|
| Framework | **Astro** | Génère du HTML statique, 0 JS par défaut → top SEO + perf |
| Style | **Tailwind CSS** | Itération rapide, design cohérent |
| Contenu | **Markdown / MDX** | Pages éditables sans toucher au code |
| Formulaire | **Netlify Forms** (ou Formspree) | Contact → email, sans backend ni BDD |
| Hébergement | **Netlify** (offre gratuite) | Déploiement auto sur push, HTTPS, formulaires inclus |
| CI/CD | Build Astro déclenché par push GitHub | Zéro ops |
| Domaine | **iwilldrive.fr** | Local, disponible, HTTPS gratuit |
| Analytics | Plausible / GA4 (léger) | Mesure O1/O2 |
| CMS (v2) | **Decap CMS** (git-based) | Édition contenu sans DB, plus tard |

> Alternative hébergement : **GitHub Pages** fonctionne aussi (statique + domaine + HTTPS),
> mais pas de formulaire natif (service tiers requis) ni de fonctions. Netlify est préféré
> pour la marge sans surcoût.

## 4. Intégration Elgea (détaillée)

- **Pas d'API publique Elgea** → intégration par lien, pas par données.
- v1 : bouton **"Mon espace élève / Réserver"** → URL du portail Elgea (nouvel onglet).
- v1.1 (si Elgea l'autorise) : **sous-domaine de marque** `espace.iwilldrive.fr`
  (CNAME / redirection) pour une continuité visuelle.
- À confirmer auprès de Codes Rousseau : personnalisation portail, lien profond vers
  la page de réservation, éventuel embed iframe (probablement bloqué — prévoir le lien).

## 5. Arborescence du site

```
/                     Accueil (proposition de valeur + CTA)
/formules             Packs d'heures, support numérique, prépa examen + tarifs
/methode              Pédagogie, approche, à propos du moniteur
/zone                 Communes couvertes (SEO local)
/avis                 Avis Google + témoignages + CTA "laisser un avis"
/faq                  Permis, CPF, déroulé, points de récupération
/contact              Formulaire (→ email)
/mentions-legales     Mentions légales
/confidentialite      Politique RGPD + cookies
```

## 6. Structure de repo proposée

```
i-will-drive/
├─ docs/                    # artefacts BMAD (ce dossier)
├─ src/
│  ├─ pages/               # routes Astro (.astro / .md)
│  ├─ components/          # Header, Footer, CTA, AvisCard, FormulaCard…
│  ├─ layouts/             # BaseLayout (SEO, meta, schema.org)
│  ├─ content/             # contenu Markdown (formules, faq, témoignages)
│  └─ styles/              # Tailwind
├─ public/                 # logo, favicon, images, robots.txt, sitemap
├─ astro.config.mjs
├─ tailwind.config.cjs
├─ netlify.toml            # config build + forms
└─ package.json
```

## 7. SEO local (différenciateur clé)

- Données structurées **schema.org `DrivingSchool`** (nom, zone, horaires, avis, géo).
- Une page par axe de recherche : méthode, formules, zone.
- Fiche **Google Business Profile** liée + NAP (nom/adresse/tel) cohérent partout.
- `sitemap.xml` + `robots.txt` générés au build.

## 8. RGPD / conformité

- Bandeau cookies (uniquement si analytics non anonymisé).
- Formulaire : pas de stockage, relais email ; mention de finalité + consentement.
- Pages mentions légales + confidentialité (adaptées au statut juridique retenu).

## 9. Décisions d'architecture (ADR condensés)

| # | Décision | Raison |
|---|----------|--------|
| AD1 | Pas de base de données | Aucun état métier côté site (tout dans Elgea) |
| AD2 | Astro plutôt que Next.js | Vitrine statique : perf + SEO, pas besoin de SSR |
| AD3 | Netlify plutôt que GitHub Pages | Formulaires natifs + marge serverless, même gratuité |
| AD4 | Paiement via Elgea, pas de Stripe propre | Elgea gère déjà (Pass Rousseau) + CPF/ANTS |
| AD5 | `.fr` uniquement | Public local, `.com` indisponible |
