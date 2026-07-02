# Epics & Stories — IWillDrive

> Artefact BMAD · Scrum Master phase · v0.1 · 2026-06-30
> Dépend de : [PRD](02-prd.md), [Architecture](03-architecture.md)

Format story : *En tant que … je veux … afin de …* + critères d'acceptation (CA).

---

## EPIC 0 — Cadrage & fondations (préalables)

**Objectif :** lever les inconnues et poser les bases techniques.

### S0.1 — Valider les pré-requis Elgea
- En tant que porteur projet, je veux confirmer l'abonnement Elgea actif et l'URL du portail élève, afin de câbler le bon CTA.
- **CA :** URL du portail connue ; portail réservation activé ; personnalisation/sous-domaine confirmés ou non.

### S0.2 — Réserver le domaine
- **CA :** `iwilldrive.fr` réservé (OVH/Gandi) ; emails de marque envisagés.

### S0.3 — Initialiser le repo Astro + Tailwind + Netlify
- **CA :** projet Astro qui build ; Tailwind configuré ; déploiement Netlify auto sur push ; HTTPS OK.

### S0.4 — Layout de base + SEO technique
- **CA :** `BaseLayout` avec meta/OpenGraph ; `sitemap.xml` + `robots.txt` ; données structurées `DrivingSchool`.

---

## EPIC 1 — Identité de marque (DA)

**Objectif :** une marque IWillDrive cohérente et pro.

### S1.1 — Logo & charte
- **CA :** logo (versions claire/foncée) ; palette ; typographies ; favicon.

### S1.2 — Ton & messages clés
- **CA :** baseline, proposition de valeur, ton éditorial documentés dans `docs/`.

---

## EPIC 2 — Vitrine (cœur du site)

**Objectif :** présenter et convaincre.

### S2.1 — Page d'accueil  *(FR1)*
- En tant que visiteur, je veux comprendre l'offre en 5 s et voir un CTA clair.
- **CA :** hero + proposition de valeur + CTA "Réserver" + preuve sociale (avis) ; mobile-first.

### S2.2 — Page Méthode / À propos  *(FR1)*
- **CA :** parcours du moniteur, approche pédagogique, photo, réassurance.

### S2.3 — Page Formules / Tarifs  *(FR2)*
- **CA :** pack d'heures, support numérique, heures de prépa examen ; tarifs ; mention CPF ; CTA vers Elgea.

### S2.4 — Page Zone d'intervention  *(FR6)*
- **CA :** communes listées ; contenu optimisé SEO local.

### S2.5 — FAQ  *(FR7, FR10)*
- **CA :** questions permis/CPF/déroulé ; **heures et points de récupération** des conduites.

---

## EPIC 3 — Tunnel d'acquisition

**Objectif :** convertir le visiteur en élève ou en contact.

### S3.1 — CTA "Réserver / Mon espace élève"  *(FR3)*
- En tant qu'élève, je veux accéder à la réservation/au paiement en 1 clic.
- **CA :** bouton présent sur toutes les pages → portail Elgea (nouvel onglet) ; libellé clair.

### S3.2 — Formulaire de contact  *(FR4)*
- En tant que prospect, je veux être rappelé sans créer de compte.
- **CA :** champs nom/tel/email/message ; envoi → email moniteur ; anti-spam ; message de confirmation ; **aucune BDD** ; mention RGPD.

### S3.3 — Sous-domaine de marque Elgea  *(FR11, Could)*
- **CA :** `espace.iwilldrive.fr` → portail Elgea (si autorisé) ; sinon lien direct.

---

## EPIC 4 — Visibilité & réputation

**Objectif :** être trouvé et inspirer confiance.

### S4.1 — Fiche Google Business Profile  *(FR9)*
- **CA :** fiche créée, catégorie auto-école/moniteur, NAP cohérent, liée au site.

### S4.2 — Section Avis + collecte  *(FR5)*
- En tant que visiteur, je veux lire des avis ; en tant que moniteur, je veux en récolter.
- **CA :** avis Google affichés ; CTA "laisser un avis" → Google ; témoignages éditables.

### S4.3 — Présence annuaires (TripAdvisor/Maps/…)  *(O1)*
- **CA :** fiches créées là où pertinent ; liens cohérents depuis le site.

---

## EPIC 5 — Conformité & mise en ligne

### S5.1 — Mentions légales & confidentialité  *(FR8)*
- **CA :** pages présentes, adaptées au statut juridique retenu ; cookies gérés.

### S5.2 — Recette & go-live
- **CA :** Lighthouse ≥ 95 ; LCP < 2 s mobile ; liens Elgea testés ; formulaire testé ; site live sur `iwilldrive.fr`.

---

## EPIC 6 — Volet business (parallèle, hors site)

> Aide à la décision uniquement — validation par expert-comptable.

### S6.1 — Comparatif de statut
- **CA :** tableau micro vs EURL vs SASU (charges, TVA, optimisation) ; questions à poser au comptable.

### S6.2 — Brouillon de business plan
- **CA :** hypothèses CA/charges, seuil de TVA, projection simple.

---

## Backlog priorisé (ordre de réalisation suggéré)

1. **Sprint 0** : S0.1 → S0.4 (fondations) + S1.1 (logo)
2. **Sprint 1** : S2.1, S2.3, S3.1, S3.2 (site convertit dès la fin du sprint)
3. **Sprint 2** : S2.2, S2.4, S2.5, S4.1, S4.2
4. **Sprint 3** : S5.1, S5.2 (go-live), puis S3.3, S4.3
5. **En parallèle** : EPIC 6 (business)

## Définition of Ready / Done

- **Ready** : story claire, CA écrits, dépendances levées, contenu/visuels dispo.
- **Done** : déployé sur Netlify, testé mobile, conforme NFR (perf/SEO/RGPD), validé par le client.
