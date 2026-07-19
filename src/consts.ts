/* ============================================================
   i will drive — configuration de contenu
   Toute la donnée éditable du site est ici (aucune base de données).
   Sources : maquette 4 pages + flyer « Pièces d'inscription »
   (design/, fournis par le client). Les TODO restent à confirmer.
   ============================================================ */

// Palette active : "solaire" (DA officielle client) ou "electrique" (ancienne piste)
export const THEME: "solaire" | "electrique" = "solaire";

export const SITE = {
  name: "i will drive",
  baseline: "L'auto-école nouvelle génération.",
  tagline: "Apprendre à conduire, avancer avec confiance, choisir sa route.",
  description:
    "i will drive — auto-école nouvelle génération à Grand-Brassac, Dordogne (24). Permis B, conduite accompagnée (AAC) et supervisée. Réservation en ligne, accompagnement humain et sur-mesure.",
  // Domaine acheté par le client (IONOS) — NB : les supports print
  // affichent « i-will-drive.fr », à harmoniser côté client
  domain: "iwilldrive.fr",
  url: "https://iwilldrive.fr",
  email: "ae.denainw@gmail.com",
  phone: "07 84 27 01 43",
  city: "Grand-Brassac",
  zone: "Dordogne (24)",
  // TODO — URL réelle du portail élève Elgea (réservation + paiement)
  elgeaUrl: "https://www.elgeaweb.fr",
  // TODO — vrais comptes réseaux sociaux (annoncés sur le flyer)
  socials: [
    { label: "Instagram", href: "#" },
    { label: "Facebook", href: "#" },
    { label: "TikTok", href: "#" },
  ],
};

export const NAV = [
  { label: "Méthode", href: "#methode" },
  { label: "Formations", href: "#formations" },
  { label: "Inscription", href: "#inscription" },
  { label: "Avis", href: "#avis" },
  { label: "Contact", href: "#contact" },
];

// « Pourquoi choisir i will drive ? » (maquette p.2)
export const WHY_INTRO =
  "i will drive, c'est bien plus qu'une auto-école. C'est un accompagnement humain, moderne et sur-mesure pour vous aider à atteindre votre objectif : la liberté de conduire.";

// Les 4 valeurs et leurs textes officiels (maquette p.2)
export type ValueIconName = "coeur" | "personnes" | "soleil" | "papillon";

export const VALUES: { label: string; desc: string; color: string; icon: ValueIconName }[] = [
  {
    label: "Confiance",
    desc: "Une relation basée sur l'écoute, la bienveillance et la transparence.",
    color: "var(--color-accent)",
    icon: "coeur",
  },
  {
    label: "Respect",
    desc: "Chaque élève est unique. Nous respectons votre rythme, vos besoins et vos objectifs.",
    color: "var(--color-teal)",
    icon: "personnes",
  },
  {
    label: "Autonomie",
    desc: "Nous vous donnons toutes les clés pour devenir un(e) conducteur(trice) sûr(e) et responsable.",
    color: "var(--color-sun)",
    icon: "soleil",
  },
  {
    label: "Liberté",
    desc: "Apprendre à conduire, c'est gagner en liberté et en confiance pour construire votre avenir.",
    color: "#7C5CBF",
    icon: "papillon",
  },
];

// Les 2 bandeaux « atouts » (maquette p.2)
export const HIGHLIGHTS = [
  {
    title: "100 % numérique, 100 % flexible",
    desc: "Réservez vos leçons en ligne 7j/7 et 24h/24. Suivez votre progression en temps réel depuis votre espace personnel.",
    color: "var(--color-teal)",
  },
  {
    title: "Accompagnement personnalisé",
    desc: "Un suivi sur-mesure à chaque étape de votre formation.",
    color: "var(--color-accent)",
  },
];

// Les 4 bénéfices (cartes de la maquette web)
export type FeatureIconName = "calendrier" | "personne" | "euro" | "bouclier";

export const FEATURES: { icon: FeatureIconName; color: string; title: string; desc: string }[] = [
  {
    icon: "calendrier",
    color: "var(--color-teal)",
    title: "Horaires adaptés",
    desc: "Cours en journée, soirée et week-end.",
  },
  {
    icon: "personne",
    color: "var(--color-accent)",
    title: "Accompagnement sur-mesure",
    desc: "Un suivi personnalisé à chaque étape.",
  },
  {
    icon: "euro",
    color: "var(--color-sun)",
    title: "Tarifs justes et transparents",
    desc: "Pas de frais cachés, tout est clair.",
  },
  {
    icon: "bouclier",
    color: "#7C5CBF",
    title: "Taux de réussite élevé",
    desc: "Une méthode efficace et reconnue.",
  },
];

// USP du bandeau de bas de page (flyer p.4)
export const FOOTER_USPS = [
  "Horaires adaptés à votre quotidien",
  "Enseignant diplômé et expérimenté",
  "Véhicules récents et sécurisés",
  "Méthode efficace et bienveillante",
];

/* ---------- Formations & tarifs (maquette p.3 — tarifs officiels client) ---------- */

// Les formations proposées
export const FORMATIONS = [
  {
    title: "Permis B",
    desc: "La formation traditionnelle pour devenir un conducteur confiant et responsable.",
    color: "var(--color-teal)",
  },
  {
    title: "Conduite accompagnée (AAC)",
    desc: "Apprenez à votre rythme et gagnez en expérience avec vos proches.",
    color: "var(--color-accent)",
  },
  {
    title: "Conduite supervisée",
    desc: "Plus de flexibilité pour vous entraîner avec un accompagnateur de votre choix.",
    color: "#7C5CBF",
  },
  {
    title: "Code numérique Rousseau",
    desc: "Préparez votre code en ligne avec la référence n°1.",
    color: "var(--color-sun)",
  },
];

// Tableau « Pack Permis B tout compris »
export const PACKS = {
  columns: [
    { name: "Pack Essentiel", color: "var(--color-teal)" },
    { name: "Pack Progression", color: "var(--color-accent)" },
    { name: "Pack Réussite", color: "#7C5CBF" },
  ],
  rows: [
    { label: "Frais d'inscription", values: ["80 €", "80 €", "80 €"] },
    { label: "Code numérique Rousseau (6 mois)", values: ["49 €", "49 €", "49 €"] },
    { label: "Évaluation de départ", values: ["55 €", "55 €", "55 €"] },
    { label: "Heures de conduite", values: ["20 h", "25 h", "30 h"] },
    { label: "Accompagnement à l'examen pratique", values: ["✓", "✓", "✓"] },
  ],
  totals: ["1 290 €", "1 560 €", "1 830 €"],
  paymentNote: "Paiement en 3 ou 4 fois sans frais.",
};

// Prestations à l'unité
export const UNIT_PRICES = [
  { label: "1 heure de conduite", price: "55 €" },
  { label: "Heure supplémentaire", price: "55 €" },
  { label: "Accompagnement examen pratique", price: "60 €" },
  { label: "Rendez-vous préalable", price: "50 €" },
];

// Autres formations
export const OTHER_FORMATIONS = [
  { label: "Pack AAC (20 h + 2 RDV)", price: "1 450 €" },
  { label: "Conduite supervisée", price: "à partir de 1 390 €", note: "selon le nombre d'heures" },
];

/* ---------- Pièces d'inscription (flyer « Permis Classique (B) ») ---------- */

export type DocIconName = "identite" | "domicile" | "photo" | "assr" | "jdc" | "reglement";

export const INSCRIPTION_DOCS: { icon: DocIconName; color: string; title: string; desc: string }[] = [
  {
    icon: "identite",
    color: "var(--color-accent)",
    title: "Pièce d'identité",
    desc: "Carte nationale d'identité ou passeport en cours de validité (recto/verso).",
  },
  {
    icon: "domicile",
    color: "var(--color-teal)",
    title: "Justificatif de domicile",
    desc: "De moins de 6 mois (facture d'électricité, de gaz, d'eau, de téléphone, assurance habitation, avis d'imposition…).",
  },
  {
    icon: "photo",
    color: "var(--color-sun)",
    title: "E-photo d'identité",
    desc: "Photo d'identité agréée ANTS (avec code e-photo).",
  },
  {
    icon: "assr",
    color: "#7C5CBF",
    title: "ASSR 2",
    desc: "Attestation Scolaire de Sécurité Routière de 2ᵈ niveau ou ASR, si né(e) après le 31 décembre 1987.",
  },
  {
    icon: "jdc",
    color: "var(--color-teal)",
    title: "Justificatif JDC",
    desc: "Justificatif de Journée Défense et Citoyenneté, pour les 17-25 ans révolus.",
  },
  {
    icon: "reglement",
    color: "var(--color-sun)",
    title: "Mode de règlement",
    desc: "Selon la formule choisie (paiement en plusieurs fois possible, nous consulter).",
  },
];

export const INSCRIPTION_NOTE =
  "Dossier complet indispensable pour valider votre inscription et débuter votre formation.";

/* ---------- Avis & FAQ ---------- */

export type Review = {
  quote: string;
  name: string;
  source: string;
  badge?: string;
};

// TODO — remplacer par de vrais avis Google une fois la fiche créée
export const AVIS: Review[] = [
  {
    quote:
      "Pédagogue, patient, toujours de bonne humeur. J'avais peur de conduire, il m'a mise en confiance dès la première leçon.",
    name: "Léa M.",
    source: "Avis Google · Mai 2026",
    badge: "Permis obtenu du 1er coup",
  },
  {
    quote:
      "Des explications claires et un vrai suivi. On sait toujours où on en est et ce qu'il reste à travailler.",
    name: "Karim B.",
    source: "Avis Google · Avril 2026",
  },
  {
    quote:
      "Après un échec ailleurs, j'ai enfin trouvé quelqu'un qui prend le temps. Résultat : permis en poche.",
    name: "Sophie D.",
    source: "Avis Google · Mars 2026",
    badge: "Reconversion réussie",
  },
];

export type Faq = { q: string; a: string };

export const FAQ: Faq[] = [
  {
    q: "Comment réserver une leçon ?",
    a: "Depuis votre espace élève en ligne, accessible 7j/7 et 24h/24. Vous y voyez les créneaux disponibles, vos heures restantes et votre progression en temps réel.",
  },
  {
    q: "Quels documents faut-il pour s'inscrire ?",
    a: "Pièce d'identité, justificatif de domicile de moins de 6 mois, e-photo agréée ANTS, ASSR 2 (ou ASR), justificatif JDC pour les 17-25 ans, et votre mode de règlement. Le détail complet est dans la section Inscription.",
  },
  {
    q: "Peut-on payer en plusieurs fois ?",
    a: "Oui — paiement en 3 ou 4 fois sans frais sur les packs. Consultez-nous pour les autres modalités.",
  },
  {
    q: "Comment se passe une première leçon ?",
    a: "On fait le point sur votre niveau et vos objectifs avec l'évaluation de départ, puis on démarre en douceur. Aucune pression : chacun avance à son rythme.",
  },
  {
    q: "Où se déroulent les cours ?",
    a: "En Dordogne, autour de Grand-Brassac. Les points de rendez-vous et de récupération sont communiqués à la réservation, au plus proche de chez vous.",
  },
];
