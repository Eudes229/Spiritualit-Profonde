import React from 'react';
import ZodiacSign from '../components/ZodiacSign';

// Données complètes pour les 12 signes avec plus de détails
const zodiacData = [
  {
    id: 'belier',
    name: 'Bélier',
    dates: '21 mars - 19 avril',
    symbol: '♈',
    element: 'Feu',
    planet: 'Mars',
    image: '/images/belier.png',
    description: 'Pionnier et courageux, le Bélier est un leader né qui n\'a pas peur de se lancer dans l\'aventure. Son énergie est contagieuse.',
    strengths: ['Courageux', 'Déterminé', 'Enthousiaste', 'Honnête'],
    weaknesses: ['Impatient', 'Impulsif', 'Têtu', 'Agressif'],
    compatibility: ['Lion', 'Sagittaire', 'Gémeaux'],
    house: '1ère maison',
    luckyNumbers: [1, 9],
    luckyColor: 'Rouge',
    personalityTraits: 'Dynamique, compétitif, spontané',
    bestProfessions: ['Entrepreneur', 'Athlète', 'Militaire'],
    famousPeople: ['Lady Gaga', 'Robert Downey Jr.', 'Emma Watson']
  },
  {
    id: 'taureau',
    name: 'Taureau',
    dates: '20 avril - 20 mai',
    symbol: '♉',
    element: 'Terre',
    planet: 'Vénus',
    image: '/images/taureau.png',
    description: 'Fiable et patient, le Taureau apprécie les bonnes choses de la vie. Il est travailleur et recherche la sécurité avant tout.',
    strengths: ['Fiable', 'Patient', 'Pratique', 'Dévoué'],
    weaknesses: ['Têtu', 'Possessif', 'Matérialiste'],
    compatibility: ['Vierge', 'Capricorne', 'Cancer'],
    house: '2ème maison',
    luckyNumbers: [2, 6],
    luckyColor: 'Vert',
    personalityTraits: 'Sensible, persévérant, fiable',
    bestProfessions: ['Banquier', 'Architecte', 'Chef cuisinier'],
    famousPeople: ['Dwayne Johnson', 'Adele', 'David Beckham']
  },
  {
    id: 'gemeaux',
    name: 'Gémeaux',
    dates: '21 mai - 20 juin',
    symbol: '♊',
    element: 'Air',
    planet: 'Mercure',
    image: '/images/gemeaux.png',
    description: 'Curieux et sociable, le Gémeaux est un communicant brillant, toujours prêt à apprendre et à échanger des idées.',
    strengths: ['Adaptable', 'Curieux', 'Intelligent', 'Éloquent'],
    weaknesses: ['Indécis', 'Superficiel', 'Anxieux'],
    compatibility: ['Balance', 'Vierge', 'Sagittaire'],
    house: '3ème maison',
    luckyNumbers: [3, 7],
    luckyColor: 'Jaune',
    personalityTraits: 'Expressif, versatile, spirituel',
    bestProfessions: ['Journaliste', 'Enseignant', 'Marketing'],
    famousPeople: ['Kanye West', 'Angelina Jolie', 'Johnny Depp']
  },
  {
    id: 'cancer',
    name: 'Cancer',
    dates: '21 juin - 22 juillet',
    symbol: '♋',
    element: 'Eau',
    planet: 'Lune',
    image: '/images/cancer.png',
    description: 'Émotionnel et intuitif, le Cancer est profondément attaché à son foyer et à ses proches. Il a un grand sens de l\'empathie.',
    strengths: ['Loyal', 'Empathique', 'Persuasif', 'Intuitif'],
    weaknesses: ['Dépendant', 'Susceptible', 'Pessimiste'],
    compatibility: ['Scorpion', 'Poissons', 'Taureau'],
    house: '4ème maison',
    luckyNumbers: [2, 7],
    luckyColor: 'Blanc',
    personalityTraits: 'Émotionnel, protecteur, sensible',
    bestProfessions: ['Infirmier', 'Psychologue', 'Designer d\'intérieur'],
    famousPeople: ['Tom Hanks', 'Selena Gomez', 'Ariana Grande']
  },
  {
    id: 'lion',
    name: 'Lion',
    dates: '23 juillet - 22 août',
    symbol: '♌',
    element: 'Feu',
    planet: 'Soleil',
    image: '/images/lion.jpg',
    description: 'Généreux et chaleureux, le Lion aime briller et être au centre de l\'attention. Il a un grand cœur et un fort sens du théâtre.',
    strengths: ['Créatif', 'Passionné', 'Généreux', 'Joyeux'],
    weaknesses: ['Arrogant', 'Autoritaire', 'Égoïste'],
    compatibility: ['Bélier', 'Sagittaire', 'Balance'],
    house: '5ème maison',
    luckyNumbers: [1, 5, 9],
    luckyColor: 'Or',
    personalityTraits: 'Charismatique, fier, loyal',
    bestProfessions: ['Acteur', 'Manager', 'Artiste'],
    famousPeople: ['Barack Obama', 'Jennifer Lopez', 'Madonna']
  },
  {
    id: 'vierge',
    name: 'Vierge',
    dates: '23 août - 22 septembre',
    symbol: '♍',
    element: 'Terre',
    planet: 'Mercure',
    image: '/images/vierge.jpg',
    description: 'Méthodique et précis, la Vierge a un sens aigu du détail. Elle est travailleuse et toujours prête à aider les autres.',
    strengths: ['Analytique', 'Fiable', 'Précis', 'Serviable'],
    weaknesses: ['Perfectionniste', 'Critique', 'Réservé'],
    compatibility: ['Taureau', 'Capricorne', 'Cancer'],
    house: '6ème maison',
    luckyNumbers: [3, 7, 8],
    luckyColor: 'Marron',
    personalityTraits: 'Pratique, méticuleux, intelligent',
    bestProfessions: ['Médecin', 'Ingénieur', 'Comptable'],
    famousPeople: ['Beyoncé', 'Keanu Reeves', 'Zendaya']
  },
  {
    id: 'balance',
    name: 'Balance',
    dates: '23 septembre - 22 octobre',
    symbol: '♎',
    element: 'Air',
    planet: 'Vénus',
    image: '/images/balance.jpg',
    description: 'Diplomate et sociable, la Balance recherche l\'harmonie et l\'équilibre en toute chose. Elle a un grand sens de la justice.',
    strengths: ['Diplomate', 'Gracieux', 'Pacifique', 'Sociable'],
    weaknesses: ['Indécis', 'Évite les conflits', 'Superficiel'],
    compatibility: ['Gémeaux', 'Lion', 'Sagittaire'],
    house: '7ème maison',
    luckyNumbers: [4, 6, 8],
    luckyColor: 'Bleu',
    personalityTraits: 'Romantique, charmant, équilibré',
    bestProfessions: ['Avocat', 'Designer', 'Conseiller'],
    famousPeople: ['Will Smith', 'Kim Kardashian', 'Bruno Mars']
  },
  {
    id: 'scorpion',
    name: 'Scorpion',
    dates: '23 octobre - 21 novembre',
    symbol: '♏',
    element: 'Eau',
    planet: 'Pluton',
    image: '/images/scorpion.jpg',
    description: 'Passionné et intense, le Scorpion a une profondeur mystérieuse. Il est perspicace et ne craint pas la transformation.',
    strengths: ['Résolu', 'Courageux', 'Passionné', 'Fidèle'],
    weaknesses: ['Jaloux', 'Secret', 'Rancunier'],
    compatibility: ['Cancer', 'Poissons', 'Vierge'],
    house: '8ème maison',
    luckyNumbers: [8, 11, 18],
    luckyColor: 'Noir',
    personalityTraits: 'Intense, déterminé, mystérieux',
    bestProfessions: ['Détective', 'Psychiatre', 'Chercheur'],
    famousPeople: ['Drake', 'Julia Roberts', 'Ryan Gosling']
  },
  {
    id: 'sagittaire',
    name: 'Sagittaire',
    dates: '22 novembre - 21 décembre',
    symbol: '♐',
    element: 'Feu',
    planet: 'Jupiter',
    image: '/images/sagittaire.jpg',
    description: 'Aventurier et optimiste, le Sagittaire a soif de liberté et de connaissances. Il est franc et aime explorer de nouveaux horizons.',
    strengths: ['Généreux', 'Idéaliste', 'Honnête', 'Aventurier'],
    weaknesses: ['Impatient', 'Trop franc', 'Irresponsable'],
    compatibility: ['Bélier', 'Lion', 'Balance'],
    house: '9ème maison',
    luckyNumbers: [3, 7, 9],
    luckyColor: 'Pourpre',
    personalityTraits: 'Aventureux, optimiste, philosophe',
    bestProfessions: ['Voyageur', 'Professeur', 'Photographe'],
    famousPeople: ['Taylor Swift', 'Brad Pitt', 'Miley Cyrus']
  },
  {
    id: 'capricorne',
    name: 'Capricorne',
    dates: '22 décembre - 19 janvier',
    symbol: '♑',
    element: 'Terre',
    planet: 'Saturne',
    image: '/images/capricone.jpg',
    description: 'Discipliné et responsable, le Capricorne est ambitieux et persévérant. Il a les pieds sur terre et sait où il va.',
    strengths: ['Responsable', 'Discipliné', 'Patient', 'Bon gestionnaire'],
    weaknesses: ['Sceptique', 'Rigide', 'Pessimiste'],
    compatibility: ['Taureau', 'Vierge', 'Poissons'],
    house: '10ème maison',
    luckyNumbers: [4, 8, 13],
    luckyColor: 'Gris',
    personalityTraits: 'Ambitieux, prudent, persévérant',
    bestProfessions: ['PDG', 'Politicien', 'Scientifique'],
    famousPeople: ['Michelle Obama', 'LeBron James', 'Denzel Washington']
  },
  {
    id: 'verseau',
    name: 'Verseau',
    dates: '20 janvier - 18 février',
    symbol: '♒',
    element: 'Air',
    planet: 'Uranus',
    image: '/images/verseau.jpg',
    description: 'Original et humaniste, le Verseau pense hors des sentiers battus. Il est progressiste et valorise l\'amitié et la liberté.',
    strengths: ['Progressiste', 'Original', 'Humaniste', 'Indépendant'],
    weaknesses: ['Détaché', 'Imprévisible', 'Rebelle'],
    compatibility: ['Gémeaux', 'Balance', 'Sagittaire'],
    house: '11ème maison',
    luckyNumbers: [4, 7, 11],
    luckyColor: 'Bleu électrique',
    personalityTraits: 'Innovant, excentrique, intellectuel',
    bestProfessions: ['Inventeur', 'Astronome', 'Activiste'],
    famousPeople: ['Oprah Winfrey', 'Cristiano Ronaldo', 'Harry Styles']
  },
  {
    id: 'poissons',
    name: 'Poissons',
    dates: '19 février - 20 mars',
    symbol: '♓',
    element: 'Eau',
    planet: 'Neptune',
    image: '/images/poisson.jpg',
    description: 'Sensible et intuitif, le Poissons est profondément empathique et créatif. Il a une riche vie intérieure et une grande compassion.',
    strengths: ['Compassionnel', 'Artistique', 'Intuitif', 'Gentil'],
    weaknesses: ['Trop sensible', 'Peu pratique', 'Échappiste'],
    compatibility: ['Cancer', 'Scorpion', 'Capricorne'],
    house: '12ème maison',
    luckyNumbers: [3, 9, 12],
    luckyColor: 'Violet',
    personalityTraits: 'Rêveur, spirituel, compatissant',
    bestProfessions: ['Musicien', 'Poète', 'Travailleur social'],
    famousPeople: ['Rihanna', 'Albert Einstein', 'Justin Bieber']
  }
];

function Astrology() {
  return (
    <div className="astrology-container">
      <header className="astrology-header">
        <h1>Le Guide Complet des Signes du Zodiaque</h1>
        <p className="subtitle">
          Explorez en détail les caractéristiques, compatibilités et secrets de chaque signe astrologique.
        </p>
      </header>
      
      <div className="zodiac-grid">
        {zodiacData.map(sign => (
          <ZodiacSign 
            key={sign.id} 
            sign={sign} 
          />
        ))}
      </div>
    </div>
  );
}

export default Astrology;