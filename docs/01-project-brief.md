# Project Brief — IWillDrive

> Artefact BMAD · Analyst phase · v0.1 · 2026-06-30

## 1. Contexte

Enseignant de la conduite indépendant (en cours de bascule depuis une micro-entreprise),
~64 k€ de CA annuel. Très bon pédagogue, forte réputation auprès des élèves. A exercé
chez Ornikar, En Voiture Simone, Cause de Conduite, Gauduchau. Souhaite se mettre à son
compte sous une marque propre et professionnaliser sa présence en ligne.

## 2. Problème

- Aucune présence numérique propre ni identité de marque.
- Acquisition d'élèves dépend du bouche-à-oreille et d'anciens employeurs.
- Besoin de crédibilité et de visibilité locale (Google, avis) pour capter une clientèle directe.
- L'opérationnel (planning, paiement, dossiers, CPF, ANTS) est complexe et réglementé.

## 3. Insight clé — décision structurante

Le **back-office métier sera assuré par Elgea Web (Codes Rousseau)** : planning, espace
élève, paiement en ligne (Pass Rousseau → Stripe/PayPal en coulisse), facturation, suivi
financier, CPF, permis à 1 €, ANTS, RdvPermis.

→ Elgea n'expose **pas d'API publique** pour un site tiers. L'intégration se fait donc
**au niveau parcours** (redirection / sous-domaine de marque), pas en arrière-plan.

→ Conséquence : **le site IWillDrive est une vitrine marketing + tunnel d'acquisition**,
sans données métier ni base de données. Tout l'opérationnel reste dans Elgea.

## 4. Objectifs (business)

| # | Objectif | Indicateur de succès |
|---|----------|----------------------|
| O1 | Gagner en visibilité locale | Apparition Google Maps + fiche établissement, 1re page sur "auto-école / moniteur indépendant + ville" |
| O2 | Capter des élèves en direct | N° de prises de contact / mois via le site |
| O3 | Crédibiliser la marque | Avis Google collectés depuis le site, taux d'avis ≥ 4,5★ |
| O4 | Fluidifier le parcours élève | Redirection propre vers réservation/paiement Elgea |
| O5 | Sécuriser le passage en indépendant | Comparatif de statut + business plan livrés (aide à la décision, validés par un comptable) |

## 5. Périmètre

### Dans le périmètre (site)
- Vitrine : présentation, pédagogie, formules, zone géographique, FAQ.
- Tunnel : CTA "Réserver / Mon espace élève" → Elgea ; formulaire de contact (→ email).
- Visibilité : SEO local, fiche Google Business, incitation aux avis.
- Identité : nom de marque IWillDrive, logo, charte (DA).

### Hors périmètre (assuré par Elgea ou tiers)
- Planning, réservation, paiement, dossiers élèves, facturation, CPF/ANTS → **Elgea**.
- Comptabilité / suivi des comptes → **Elgea + banque pro / outil indépendant**.
- Décision juridique et fiscale → **expert-comptable** (le site fournit l'aide à la décision, pas la décision).

## 6. Parties prenantes

- **Sponsor / utilisateur final** : le beau-père (enseignant indépendant).
- **Porteur projet / dev** : le gendre (toi).
- **Fournisseur back-office** : Codes Rousseau / Elgea Web.
- **Conseil** : expert-comptable (statut, fiscalité, business plan).

## 7. Contraintes & hypothèses

- Budget de fonctionnement quasi nul → hébergement gratuit, domaine ~15 €/an.
- Public 100 % francophone, local → `.fr`, SEO local prioritaire.
- **Hypothèse à valider** : abonnement Elgea Web actif + portail réservation élève activé.
- **Hypothèse à valider** : possibilité de personnaliser/lier le portail Elgea (sous-domaine de marque, lien profond).
- Conformité RGPD (formulaire de contact, cookies, avis).

## 8. Risques

| Risque | Impact | Mitigation |
|--------|--------|------------|
| Elgea ne permet pas le sous-domaine de marque | Moyen | Bouton "Mon espace élève" classique vers URL Elgea |
| Confusion paiement (Stripe direct vs Elgea) | Moyen | Décision actée : **paiement via Elgea**, pas de Stripe propre en v1 |
| Statut juridique mal choisi | Élevé | Comparatif + validation comptable avant bascule |
| Faible visibilité au lancement | Moyen | SEO local + Google Business + collecte d'avis dès J1 |

## 9. Domaine & marque

- Nom retenu : **i will drive** (minuscules, préféré à WillDrive).
- Domaine : **iwilldrive.fr** — vérifié **disponible** (le `.com` est pris/parké, abandonné).
  Le mockup client mentionne `iwilldrive-autoecole.fr` → à trancher avec lui.

## 10. Direction artistique (réfs client — 2026-07-02)

Le client a fourni ses références (dossier `design/`) : DA **« Solaire »**,
chaleureuse et inclusive — qui remplace la piste « Bleu Électrique ».

- **Palette officielle** : Corail solaire `#FF6F61` · Turquoise douce `#00BFAE` ·
  Jaune soleil `#FFB703` · Bleu profond `#14213D`.
- **Wordmark** : « *i will* drive » en minuscules — script manuscrit + rondes.
- **4 valeurs** : Confiance · Respect · Autonomie · Liberté.
- **Promesse** : « Apprendre à conduire, avancer avec confiance, choisir sa route. »
- **Zone confirmée : Dordogne** (axe SEO local).
- Typo web retenue en approximation : Baloo 2 (titres) + Nunito (corps) + Caveat (script).
- ⚠️ Le logo fourni est une image IA → **vectorisation propre à prévoir** avant impression.
