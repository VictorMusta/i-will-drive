# PRD — IWillDrive

> Artefact BMAD · Product Manager phase · v0.1 · 2026-06-30
> Dépend de : [Project Brief](01-project-brief.md)

## 1. Vision produit

Un site vitrine rapide et soigné qui transforme la réputation du moniteur en élèves :
il rassure, met en avant la pédagogie, et **redirige proprement vers Elgea Web** pour
toute action opérationnelle (réserver, payer, suivre). Aucune donnée métier sur le site.

## 2. Personas

- **Léa, 18 ans** — veut passer le permis, cherche un moniteur sur Google, lit les avis,
  veut réserver vite depuis son téléphone.
- **Parent de Léa** — paie, veut de la transparence (formules, prix, sérieux, CPF).
- **Adulte en reconversion** — finance via CPF, compare, veut un interlocuteur humain.

## 3. Parcours cible

```
Recherche Google / avis  →  Site IWillDrive (vitrine)  →  CTA
   ├─ "Réserver / Mon espace élève"  →  Portail Elgea (réservation + paiement)
   ├─ "Être rappelé"                 →  Formulaire contact  →  email moniteur
   └─ "Laisser un avis"              →  Fiche Google Business
```

## 4. Exigences fonctionnelles (FR)

| ID | Exigence | Priorité (MoSCoW) |
|----|----------|-------------------|
| FR1 | Page d'accueil présentant le moniteur, sa pédagogie et sa proposition de valeur | Must |
| FR2 | Page Formules / Tarifs (pack d'heures, support numérique, heures de prépa examen) | Must |
| FR3 | CTA proéminent "Réserver / Mon espace élève" → portail Elgea | Must |
| FR4 | Formulaire de contact (nom, tel, email, message) → email, sans BDD | Must |
| FR5 | Section Avis (intégration Google / témoignages) + incitation à déposer un avis | Must |
| FR6 | Page Zone d'intervention (communes couvertes) pour le SEO local | Should |
| FR7 | FAQ (permis, CPF, déroulé des leçons, points de récupération) | Should |
| FR8 | Mentions légales, politique de confidentialité, gestion cookies (RGPD) | Must |
| FR9 | Fiche Google Business Profile créée et liée | Must |
| FR10 | Informer des heures & points de récupération pour les conduites | Should |
| FR11 | Sous-domaine de marque `espace.iwilldrive.fr` → Elgea (si Elgea l'autorise) | Could |
| FR12 | Espace contenu éditable par le moniteur (CMS git) | Could (v2) |

## 5. Exigences non-fonctionnelles (NFR)

| ID | Exigence | Cible |
|----|----------|-------|
| NFR1 | Performance | Lighthouse ≥ 95, LCP < 2 s sur mobile |
| NFR2 | SEO | HTML statique, métadonnées + données structurées `DrivingSchool` (schema.org) |
| NFR3 | Responsive | Mobile-first (majorité du trafic) |
| NFR4 | Accessibilité | WCAG AA de base |
| NFR5 | Coût d'exploitation | Hébergement gratuit, domaine seul payant |
| NFR6 | Sécurité / RGPD | HTTPS, consentement cookies, données contact non stockées (relais email) |
| NFR7 | Maintenabilité | Déploiement auto sur push, contenu en Markdown |

## 6. Hors périmètre (rappel)

Planning, paiement, dossiers, facturation, compta, CPF/ANTS → **Elgea**.
Aucune authentification ni base de données côté site.

## 7. Livrables annexes (piste business, hors site)

- **Comparatif de statut** : micro-entreprise vs EURL vs SASU (aide à la décision).
- **Brouillon de business plan**.
- ⚠️ Décision finale → **expert-comptable**. Ces livrables ne sont pas du conseil réglementé.

## 8. Critères de "Done" produit (v1)

- Les FR Must sont livrées et le site est en ligne sur `iwilldrive.fr`.
- Un visiteur mobile peut, en < 3 clics : comprendre l'offre, accéder à Elgea, ou laisser un message.
- Fiche Google Business active et liée depuis le site.
- Scores NFR1/NFR2 atteints.

## 9. Questions ouvertes (à lever avec le client / Codes Rousseau)

1. Abonnement Elgea Web actif ? Portail réservation élève activé ?
2. URL exacte du portail élève Elgea + personnalisation possible (logo, sous-domaine) ?
3. Zone géographique précise (communes) pour le SEO local ?
4. Tarifs et contenu exact des formules.
5. Statut juridique visé (impacte mentions légales).
