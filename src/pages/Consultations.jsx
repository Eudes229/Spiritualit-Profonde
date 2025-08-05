// src/views/Consultations.jsx

import React from 'react';
import { Helmet } from 'react-helmet-async'; // <--- 1. IMPORTER L'OUTIL SEO
import ConsultationCard from '../components/ConsultationCard'; // Assurez-vous d'avoir ce composant

// Les données des consultations, maintenant sur leur propre page
const consultationsData = [
  {
    id: 'astro',
    title: 'Consultation Astrologique',
    description: 'Explorez votre thème astral pour comprendre vos forces, vos faiblesses et votre véritable chemin de vie. Une lecture approfondie de votre carte du ciel.',
    price: '100 €',
    image: '/images/astrologie.png',
    linkTo: '/astrologie' // Lien vers une future page de réservation
  },
  {
    id: 'geomancy',
    title: 'Géomancie Divinatoire',
    description: 'Posez vos questions les plus pressantes et obtenez des réponses claires et directes grâce à cet art divinatoire ancestral basé sur l\'interprétation des figures de la terre.',
    price: '200 €',
    image: '/images/geomancie.png',
    linkTo: '/geomancie'
  },
  {
    id: 'numerology',
    title: 'Analyse Numérologique Complète',
    description: 'Découvrez la vibration de vos nombres personnels (chemin de vie, nombre d\'expression, etc.) et comment ils influencent votre personnalité et votre destinée.',
    price: '250 €',
    image: '/images/numérologie.png',
    linkTo: '/numerologie'
  }
];

function Consultations() {
  return (
    <>
      {/* ====================================================== */}
      {/* 2. SEO PUISSANT POUR LA PAGE DES CONSULTATIONS         */}
      {/* ====================================================== */}
      <Helmet>
        <title>Consultations de Voyance & Guidance Spirituelle - Spiritia</title>
        <meta name="description" content="Découvrez nos consultations personnalisées en astrologie, géomancie et numérologie. Nos experts vous offrent une guidance spirituelle sérieuse pour éclairer votre avenir." />
        <link rel="canonical" href="https://spiritualiteprofonde.com/consultations" />

        {/* --- OPEN GRAPH (Facebook, WhatsApp, etc.) --- */}
        <meta property="og:title" content="Nos Consultations Spirituelles | Astrologie, Géomancie, Numérologie" />
        <meta property="og:description" content="Trouvez la guidance dont vous avez besoin. Explorez nos consultations personnalisées pour des réponses claires." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://spiritualiteprofonde.com/consultations" />
        <meta property="og:image" content="https://spiritualiteprofonde.com/og-image-consultations.jpg" /> {/* Créez cette image ! */}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Spiritia" />
        <meta property="og:locale" content="fr_FR" />

        {/* --- TWITTER CARDS --- */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nos Consultations Spirituelles | Astrologie, Géomancie, Numérologie" />
        <meta name="twitter:description" content="Trouvez la guidance dont vous avez besoin. Explorez nos consultations personnalisées." />
        <meta name="twitter:image" content="https://spiritualiteprofonde.com/og-image-consultations.jpg" />

        {/* --- DONNÉES STRUCTURÉES (Schema.org) pour une liste de services --- */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": "Liste des Consultations Spirituelles",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "item": {
                    "@type": "Service",
                    "name": "Consultation Astrologique",
                    "url": "https://spiritualiteprofonde.com/astrologie"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "item": {
                    "@type": "Service",
                    "name": "Géomancie Divinatoire",
                    "url": "https://spiritualiteprofonde.com/geomancie"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "item": {
                    "@type": "Service",
                    "name": "Analyse Numérologique Complète",
                    "url": "https://spiritualiteprofonde.com/numerologie"
                  }
                }
              ]
            }
          `}
        </script>
      </Helmet>
      {/* ====================================================== */}
      {/* FIN DU BLOC SEO                                        */}
      {/* ====================================================== */}
    <main className="content">
      <section className="home-section">
        <h1>Nos Consultations Spirituelles</h1>
        <p className="subtitle">Choisissez l'accompagnement qui résonne le plus avec vous pour éclairer votre chemin.</p>
        
        <div className="consultations-grid" style={{ marginTop: '2rem' }}>
          {consultationsData.map(consultation => (
            <ConsultationCard
              key={consultation.id}
              {...consultation} 
            />
          ))}
        </div>
      </section>
    </main>
    </>
  );
}

export default Consultations;