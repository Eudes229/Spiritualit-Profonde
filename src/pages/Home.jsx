// Remplacez le contenu de votre fichier Home.js par celui-ci

import React from 'react';
import { Link } from 'react-router-dom';
import GalleryItem from '../components/GalleryItem';
import ConsultationCard from '../components/ConsultationCard';
import ProductCard from '../components/ProductCard'; // <-- NOUVEAU : Importer le composant produit

// ========================================================
// LISTE DES PRODUITS DE LA BOUTIQUE
// ========================================================
// Ajoutez autant de produits que vous le souhaitez ici.
// N'oubliez pas de mettre les images correspondantes dans votre dossier `public/images/products/`
const productsData = [
  { id: 'p1', title: 'Talisman de Protection Suprême', price: '150 €', image: '/images/talisman.png' },
  { id: 'p2', title: 'Bague de Pouvoir Lunaire', price: '100 €', image: '/images/baguedepouvoir.png' },
  { id: 'p3', title: 'Savon de Chance et d\'Abondance', price: '60 €', image: '/images/savon.png' },
  { id: 'p4', title: 'Pendentif des 7 Chakras', price: '110 €', image: '/images/pendentif.png' },
  { id: 'p5', title: 'Encens de Purification Tibétain', price: '80 €', image: '/images/encens.png' },
  { id: 'p6', title: 'Huile d\'Onction Sacrée', price: '250 €', image: '/public/images/huile.png' },
  { id: 'p7', title: 'Cristal de Quartz Rose Amour', price: '300 €', image: '/images/cristal.png' },
  { id: 'p8', title: 'Miroir Noir de Divination', price: '550 €', image: '/images/miroir.png' },
  { id: 'p9', title: 'Kit de Rituel de Prospérité', price: '500 €', image: '/images/kit.png' },
  { id: 'p10', title: 'Bougie d\'Intention "Paix Intérieure"', price: '120 €', image: '/images/bougie.png' },
  { id: 'p11', title: 'Eau de Floride Énergétique', price: '150 €', image: '/images/eau.png' },
  { id: 'p12', title: 'Amulette Contre le Mauvais Œil', price: '140 €', image: '/images/amulette.png' },
];


// Les données existantes restent les mêmes
const consultationsData = [
  { id: 'astro', title: 'Consultation Astrologique', description: 'Explorez votre thème astral pour comprendre vos forces et votre chemin de vie.', price: '100 €', image: '/images/astrologie.png', linkTo: '/astrologie' },
  { id: 'geomancy', title: 'Géomancie Divinatoire', description: 'Obtenez des réponses claires à vos questions grâce à cet art divinatoire ancestral.', price: '200 €', image: '/images/geomancie.png', linkTo: '/geomancie' },
  { id: 'numerology', title: 'Analyse Numérologique', description: 'Découvrez la vibration de vos nombres personnels et leur signification.', price: '250 €', image: '/images/numérologie.png', linkTo: '/numerologie' }
];
const imagesData = [
  { id: 1, title: 'Cristaux Énergétiques', description: 'Harmonisez vos chakras.', image: '/images/cristaux.png' },
  { id: 2, title: 'Sanctuaire de Méditation', description: 'Trouvez la paix intérieure.', image: '/images/santu.png' }
];
const eventsData = [
  { id: 1, title: 'Cercle de Pleine Lune', description: 'Le 15 du mois prochain.', image: '/images/cercle.png' },
  { id: 2, title: 'Atelier Lithothérapie', description: 'Tous les samedis.', image: '/images/artelier.png' },
];


function Home() {
  // !! TRÈS IMPORTANT !!
  // Remplacez le numéro ci-dessous par votre numéro WhatsApp (sans le '+', ni '00')
  const myWhatsappNumber = '22384876466'; 

  return (
    <>
      <header className="hero-section">
        <div className="hero-content">
          <h1>Explorez Votre Spiritualité</h1>
          <p>Des consultations personnalisées et des ressources pour vous guider sur votre chemin.</p>
        </div>
      </header>

      <main className="content">

        {/* ======================================================== */}
        {/* NOUVELLE SECTION : BOUTIQUE SPIRITUELLE                  */}
        {/* ======================================================== */}
        <section className="home-section">
          <h2>Notre Boutique Spirituelle</h2>
          <div className="products-grid">
            {productsData.map(product => (
              <ProductCard
                key={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
                whatsappNumber={myWhatsappNumber} // On passe le numéro au composant
              />
            ))}
          </div>
        </section>


        {/* SECTION POUR LA CONSULTATION RAPIDE */}
        <section className="home-section cta-section">
          <h2>Une Question Urgente ?</h2>
          <p>Obtenez une réponse rapide et ciblée à une question spécifique grâce à notre consultation flash.</p>
          <Link to="/booking" className="cta-button">
            Consulter maintenant (25 €)
          </Link>
        </section>

        {/* SECTION DES CONSULTATIONS APPROFONDIES */}
        <section className="home-section">
          <h2>Nos Consultations Approfondies</h2>
          <div className="consultations-grid">
            {consultationsData.map(consultation => (
              <ConsultationCard key={consultation.id} {...consultation} />
            ))}
          </div>
        </section>

        {/* SECTION GALERIE */}
        <section className="home-section">
          <h2>Galerie d'Inspiration</h2>
          <div className="gallery-grid">
            {imagesData.map(item => (
              <GalleryItem key={item.id} {...item} />
            ))}
          </div>
        </section>

        {/* SECTION ÉVÉNEMENTS */}
        <section className="home-section">
          <h2>Événements à Venir</h2>
          <div className="gallery-grid">
            {eventsData.map(item => (
              <GalleryItem key={item.id} {...item} />
            ))}
          </div>
        </section>

      </main>
    </>
  );
}

export default Home;

