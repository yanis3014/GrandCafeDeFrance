export interface Review {
  id: number;
  author: string;
  source: "Google" | "TripAdvisor";
  rating: number;
  date: string; // On peut mettre une date approximative ou "Il y a un mois"
  text: string;
  restaurantSlug?: string; // Optionnel : si tu veux afficher l'avis uniquement sur une page précise
}

export const REVIEWS: Review[] = [
  {
    id: 1,
    author: "Marie L.",
    source: "Google",
    rating: 5,
    date: "Janvier 2026",
    text: "Je mets 5 étoiles car ma mère et moi avons été très bien servies ! Avec une pizza géante chacune, que demander de plus. Service rapide. Petit compliment pour le serveur qui a été très sympathique et a donné à boire à mon toutou. Les chiens sont les bienvenus !",
  },
  {
    id: 2,
    author: "Thomas B.",
    source: "TripAdvisor",
    rating: 5,
    date: "Décembre 2025",
    text: "Une expérience absolument parfaite ! Tout s'est merveilleusement bien passé du début à la fin. Le service était tout simplement impeccable - vraiment rien à redire.",
  },
  {
    id: 3,
    author: "Sophie D.",
    source: "Google",
    rating: 5,
    date: "Janvier 2026",
    text: "Merci pour ce déjeuner magnifique et délicieux. Le tartare était excellent. Le service est impeccable. L’endroit a beaucoup de charme.",
  },
  {
    id: 4,
    author: "Marc & Julie",
    source: "TripAdvisor",
    rating: 5,
    date: "Décembre 2025",
    text: "Superbe découverte ! L’endroit est élégant, avec une belle ambiance de brasserie traditionnelle. La terrasse est parfaite pour observer l’animation de la ville. Mention spéciale pour le café gourmand qui était délicieux.",
  },
  {
    id: 5,
    author: "Laurent V.",
    source: "Google",
    rating: 5,
    date: "Janvier 2026",
    text: "J’ai passé un excellent moment. L’accueil de Sevan a été très chaleureux, attentif, souriant et professionnel. Le faux-filet a été un régal, ne changez pas de fournisseur ! Je reviendrai 🌴🌞",
  }
];