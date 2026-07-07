/* ============================================================
   IWillDrive — configuration de contenu
   Toute la donnée éditable du site est ici (aucune base de données).
   Les valeurs marquées TODO sont à confirmer avec le client / Elgea.
   ============================================================ */

// Palette active : "solaire" (DA officielle client) ou "electrique" (ancienne piste)
export const THEME: "solaire" | "electrique" = "solaire";

export const SITE = {
  name: "i will drive",
  tagline: "Apprendre à conduire, avancer avec confiance, choisir sa route.",
  description:
    "Auto-école indépendante en Dordogne — leçons de conduite avec un enseignant pédagogue. Réservation en ligne, suivi de vos heures et préparation à l'examen.",
  domain: "iwilldrive.fr",
  url: "https://iwilldrive.fr",
  // TODO — confirmer avec le client
  email: "contact@iwilldrive.fr",
  phone: "06 00 00 00 00",
  zone: "Dordogne",
  // TODO — URL réelle du portail élève Elgea (réservation + paiement)
  elgeaUrl: "https://www.elgeaweb.fr",
};

// Les 4 valeurs de la marque + leurs promesses (planche client, design/DA_2.jpeg)
export type ValueIconName = "coeur" | "personnes" | "soleil" | "papillon";

export const VALUES: { label: string; desc: string; color: string; icon: ValueIconName }[] = [
  {
    label: "Confiance",
    desc: "Apprendre sereinement, dans un climat de confiance et de bienveillance.",
    color: "var(--color-accent)",
    icon: "coeur",
  },
  {
    label: "Respect",
    desc: "Prendre confiance en soi : à chaque étape, vous progressez.",
    color: "var(--color-teal)",
    icon: "personnes",
  },
  {
    label: "Autonomie",
    desc: "À son rythme, sans jugement — chacun son tempo, chacun son chemin.",
    color: "var(--color-sun)",
    icon: "soleil",
  },
  {
    label: "Liberté",
    desc: "Libre de choisir sa route : vous êtes acteur de votre avenir.",
    color: "#7C5CBF",
    icon: "papillon",
  },
];

export const NAV = [
  { label: "Méthode", href: "#methode" },
  { label: "Formules", href: "#formules" },
  { label: "Zone", href: "#zone" },
  { label: "Avis", href: "#avis" },
  { label: "Contact", href: "#contact" },
];

// Les 4 bénéfices (cartes de la maquette finale, design/maquette_DA finale..jpeg)
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

export type Formula = {
  title: string;
  price: string;
  unit: string;
  features: string[];
  tag?: string;
  featured?: boolean;
  cta: string;
  variant: "primary" | "dark";
};

// TODO — tarifs et contenus exacts à valider avec le client
export const FORMULES: Formula[] = [
  {
    title: "Pack 20 heures",
    price: "980 €",
    unit: "soit 49 € l'heure",
    tag: "Le plus choisi",
    featured: true,
    features: [
      "20 h de conduite avec le même enseignant",
      "Support numérique de révision inclus",
      "Suivi des heures & points de récupération",
      "Éligible CPF & permis à 1 €",
    ],
    cta: "Réserver ce pack",
    variant: "primary",
  },
  {
    title: "Heures à l'unité",
    price: "52 €",
    unit: "par heure de conduite",
    features: [
      "Sans engagement",
      "Idéal pour un complément de formation",
      "Suivi pédagogique après chaque séance",
    ],
    cta: "Réserver une heure",
    variant: "dark",
  },
  {
    title: "Prépa examen",
    price: "55 €",
    unit: "par heure",
    features: [
      "Conditions réelles d'examen",
      "Bilan personnalisé après chaque séance",
      "Gestion du stress le jour J",
    ],
    cta: "Préparer mon examen",
    variant: "dark",
  },
];

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
    q: "Comment réserver une leçon ?",
    a: "Depuis votre espace élève en ligne, accessible 24h/24. Vous y voyez les créneaux disponibles, vos heures restantes et les points de récupération.",
  },
  {
    q: "Puis-je financer ma formation avec le CPF ?",
    a: "Oui. Les formules sont éligibles au CPF et au permis à 1 € par jour. On vous accompagne dans les démarches.",
  },
  {
    q: "Comment se passe une première leçon ?",
    a: "On fait le point sur votre niveau et vos objectifs, puis on démarre en douceur. Aucune pression : chacun avance à son rythme.",
  },
  {
    q: "Où se déroulent les cours ?",
    a: "Les points de rendez-vous et de récupération sont communiqués à la réservation, au plus proche de chez vous dans la zone couverte.",
  },
];
