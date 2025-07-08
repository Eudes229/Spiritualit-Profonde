// src/pages/Consultations.jsx

import React from 'react';
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
  );
}

export default Consultations;