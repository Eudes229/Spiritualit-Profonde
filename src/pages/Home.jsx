// src/views/Home.jsx (Version finale avec la section Rituels corrigée et enrichie)

import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async'; // <--- 1. IMPORTER L'OUTIL SEO
import GalleryItem from '../components/GalleryItem';
import ConsultationCard from '../components/ConsultationCard';
import ProductCard from '../components/ProductCard';

// ========================================================
// LISTE DES DONNÉES DE LA PAGE
// ========================================================

const productsData = [
  { id: 'p1', title: 'Talisman de Protection Suprême', price: '110 €', image: '/images/talisman.jpg' },
  { id: 'p2', title: 'Bague de Pouvoir Lunaire', price: '140 €', image: '/images/baguedepouvoir.jpg' },
  { id: 'p3', title: 'Savon de Chance et d\'Abondance', price: '100 €', image: '/images/savon.jpg' },
  { id: 'p4', title: 'Pendentif des 7 Chakras', price: '110 €', image: '/images/pendentif.jpg' },
  { id: 'p5', title: 'Encens de Purification Tibétain', price: '80 €', image: '/images/encens.jpg' },
  { id: 'p6', title: 'Huile d\'Onction Sacrée', price: '150 €', image: '/images/huile.jpg' },
  { id: 'p7', title: 'Cristal de Quartz Rose Amour', price: '190 €', image: '/images/cristal.png' },
  { id: 'p8', title: 'Miroir Noir de Divination', price: '210 €', image: '/images/miroir.jpg' },
  { id: 'p9', title: 'Kit de Rituel de Prospérité', price: '195 €', image: '/images/kit.jpg' },
  { id: 'p10', title: 'Bougie d\'Intention "Paix Intérieure"', price: '120 €', image: '/images/bougie.jpg' },
  { id: 'p11', title: 'Eau de Floride Énergétique', price: '130 €', image: '/images/eau.jpg' },
  { id: 'p12', title: 'Amulette Contre le Mauvais Œil', price: '140 €', image: '/images/amulette.jpg' },
];

const consultationsData = [
  { id: 'astro', title: 'Consultation Astrologique', description: 'Explorez votre thème astral pour comprendre vos forces et votre chemin de vie.', price: '30 €', image: '/images/astrologie.png', linkTo: '/astrologie' },
  { id: 'geomancy', title: 'Géomancie Divinatoire', description: 'Obtenez des réponses claires à vos questions grâce à cet art divinatoire ancestral.', price: '45 €', image: '/images/geomancie.png', linkTo: '/geomancie' },
  { id: 'numerology', title: 'Analyse Numérologique', description: 'Découvrez la vibration de vos nombres personnels et leur signification.', price: '40 €', image: '/images/numérologie.png', linkTo: '/numerologie' }
];

// --- DONNÉES ENRICHIES POUR LA SECTION RITUELS ---
const ritualsData = [
  { 
    id: 'r1', 
    title: 'Rituel de Déblocage Énergétique', 
    description: 'Libérez-vous des blocages, des peurs et des énergies stagnantes qui freinent votre progression. Un nouveau départ pour retrouver clarté et dynamisme.',
    image: '/images/déblocage.jpg',
  },
  { 
    id: 'r2', 
    title: 'Rituel d\'Attraction de la Chance', 
    description: 'Alignez vos vibrations avec celles de la chance et des opportunités. Ce rituel est conçu pour ouvrir les portes du hasard favorable dans votre vie.',
    image: '/images/chance.jpg',
  },
  { 
    id: 'r3', 
    title: 'Rituel d\'Abondance et de Richesse', 
    description: 'Levez les barrières mentales liées à la prospérité et attirez l\'abondance financière et matérielle. Connectez-vous à l\'énergie de la richesse universelle.',
    image: '/images/fortune.jpg',
  },
  { 
    id: 'r4', 
    title: 'Rituel de la Nouvelle Lune', 
    description: 'Posez vos intentions et semez les graines de vos futurs succès lors de ce puissant rituel de manifestation. Idéal pour commencer de nouveaux projets.',
    image: '/images/nouvellelune.jpg',
  },
  { 
    id: 'r5', 
    title: 'Rituel de Libération des Liens Toxiques', 
    description: 'Coupez les liens énergétiques négatifs avec des personnes ou des situations passées pour retrouver votre souveraineté et votre paix intérieure.',
    image: '/images/liberation.jpg',
  },
  { 
    id: 'r6', 
    title: 'Rituel d\'Amour et d\'Harmonie', 
    description: 'Attirez un nouvel amour ou renforcez les liens d\'une relation existante en ouvrant votre chakra du cœur à l\'énergie universelle de l\'affection.',
    image: '/images/amour.jpg',
  }
];
// --- FIN DES DONNÉES RITUELS ---

const imagesData = [
  { id: 1, title: 'Cristaux Énergétiques', description: 'Harmonisez vos chakras.', image: '/images/cristaux.png' },
  { id: 2, title: 'Sanctuaire de Méditation', description: 'Trouvez la paix intérieure.', image: '/images/santu.png' }
];

const eventsData = [
  { id: 1, title: 'Cercle de Pleine Lune', description: 'Le 15 du mois prochain.', image: '/images/cercle.png' },
  { id: 2, title: 'Atelier Lithothérapie', description: 'Tous les samedis.', image: '/images/artelier.png' },
];


function Home() {
  const myWhatsappNumber = '22896170781'; 

  // Fonction pour créer un lien WhatsApp personnalisé pour chaque rituel
  const createWhatsAppLink = (ritualTitle) => {
    const message = `Bonjour, je suis intéressé(e) par le "${ritualTitle}" et j'aimerais avoir plus d'informations.`;
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${myWhatsappNumber}?text=${encodedMessage}`;
  };

  return (
    <>
     {/* ====================================================== */}
      {/* 2. SEO PUISSANT POUR LA PAGE D'ACCUEIL                 */}
      {/* ====================================================== */}
      <Helmet>
        <title>Spiritia - Votre Guide Spirituel pour Astrologie, Tarot et Rituels</title>
        <meta name="description" content="Découvrez votre chemin spirituel avec Spiritia. Consultations personnalisées en astrologie, géomancie, tarot, et rituels guidés pour manifester vos désirs." />
        <link rel="canonical" href="https://spiritualiteprofonde.com/" />

        {/* --- OPEN GRAPH (Facebook, WhatsApp, etc.) --- */}
        <meta property="og:title" content="Spiritia - Votre Guide Spirituel Complet" />
        <meta property="og:description" content="Explorez votre potentiel avec nos consultations, rituels et produits spirituels. Votre voyage commence ici." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://spiritualiteprofonde.com/" />
        <meta property="og:image" content="https://spiritualiteprofonde.com/images/lelogo.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Spiritia" />
        <meta property="og:locale" content="fr_FR" />

        {/* --- TWITTER CARDS --- */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Spiritia - Votre Guide Spirituel Complet" />
        <meta name="twitter:description" content="Explorez votre potentiel avec nos consultations, rituels et produits spirituels. Votre voyage commence ici." />
        <meta name="twitter:image" content="https://spiritualiteprofonde.com/images/lelogo.png" />

        {/* --- DONNÉES STRUCTURÉES (SCHEMA.ORG) --- */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Spiritia",
              "url": "https://spiritualiteprofonde.com/",
              "logo": "https://spiritualiteprofonde.com/images/lelogo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+22896170781",
                "contactType": "Customer Service"
              }
            }
          `}
        </script>
      </Helmet>
      {/* ====================================================== */}
      {/* FIN DU BLOC SEO                                        */}
      {/* ====================================================== */}
      <header className="hero-section">
        <div className="hero-content">
          <h1>Explorez Votre Spiritualité</h1>
          <p>Des consultations personnalisées et des ressources pour vous guider sur votre chemin.</p>
        </div>
      </header>

      <main className="content">

        {/* SECTION BOUTIQUE SPIRITUELLE (INCHANGÉE) */}
        <section className="home-section">
          <h2>Notre Boutique Spirituelle</h2>
          <div className="products-grid">
            {productsData.map(product => (
              <ProductCard
                key={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
                whatsappNumber={myWhatsappNumber}
              />
            ))}
          </div>
        </section>


        {/* SECTION CONSULTATION RAPIDE (INCHANGÉE) */}
        <section className="home-section cta-section">
          <h2>Une Question Urgente ?</h2>
          <p>Obtenez une réponse rapide et ciblée à une question spécifique grâce à notre consultation flash.</p>
          <Link to="/booking" className="cta-button">
            Consulter maintenant (25 €)
          </Link>
        </section>

        {/* SECTION CONSULTATIONS APPROFONDIES (INCHANGÉE) */}
        <section className="home-section">
          <h2>Nos Consultations Approfondies</h2>
          <div className="consultations-grid">
            {consultationsData.map(consultation => (
              <ConsultationCard key={consultation.id} {...consultation} />
            ))}
          </div>
        </section>

        {/* ======================================================== */}
        {/* == SECTION "RITUELS GUIDÉS" ENTIÈREMENT MISE À JOUR ==== */}
        {/* ======================================================== */}
        <section className="home-section">
          <h2>Nos Rituels Guidés</h2>
          <p className="subtitle">Des cérémonies pas-à-pas pour aligner votre énergie et manifester vos désirs.</p>
          <div className="rituals-grid">
            {ritualsData.map(ritual => (
              <div key={ritual.id} className="ritual-card">
                <img src={ritual.image} alt={ritual.title} className="ritual-image" />
                <div className="ritual-content">
                  <h3>{ritual.title}</h3>
                  <p>{ritual.description}</p>
                  {/* Le lien est maintenant un <a> qui génère un message WhatsApp unique */}
                  <a 
                    href={createWhatsAppLink(ritual.title)} 
                    className="cta-button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demander ce Rituel
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* ======================================================== */}


        {/* SECTION GALERIE & ÉVÉNEMENTS (INCHANGÉE) */}
        <section className="home-section">
          <div className="dual-section-grid">
            <div className="sub-section">
              <h2>Galerie d'Inspiration</h2>
              <div className="gallery-grid">
                {imagesData.map(item => (
                  <GalleryItem key={item.id} {...item} />
                ))}
              </div>
            </div>
            <div className="sub-section">
              <h2>Événements à Venir</h2>
              <div className="gallery-grid">
                {eventsData.map(item => (
                  <GalleryItem key={item.id} {...item} />
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}

export default Home;