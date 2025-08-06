// src/pages/Booking.jsx (Version finale avec redirection WhatsApp)

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async'; // <--- 1. IMPORTER L'OUTIL SEO
// Import des icônes pour un meilleur design
import { FaUser, FaEnvelope, FaQuestionCircle, FaWhatsapp } from 'react-icons/fa';

function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    question: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // --- LOGIQUE DE REDIRECTION WHATSAPP ---

    // 1. Vos informations
    const myWhatsappNumber = '22896170781'; // Votre numéro WhatsApp
    const serviceName = 'Consultation Flash (12000 FCFA)';

    // 2. Construction du message à partir des données du formulaire
    const message = `
Bonjour, je souhaite réserver une ${serviceName}.
Voici mes informations :

*Nom :* ${formData.name}
*Email (pour la réponse) :* ${formData.email}

*Ma Question :*
${formData.question}

Merci de m'indiquer la prochaine étape pour le paiement.
    `;

    // 3. Encodage du message et création du lien
    const encodedMessage = encodeURIComponent(message.trim());
    const whatsappUrl = `https://wa.me/${myWhatsappNumber}?text=${encodedMessage}`;

    // 4. Redirection de l'utilisateur vers WhatsApp
    window.location.href = whatsappUrl;
    
    // Optionnel : Réinitialiser le formulaire après un court délai
    setTimeout(() => {
      setFormData({ name: '', email: '', question: '' });
    }, 1000);
  };

  return (
    <>
      {/* ====================================================== */}
      {/* 2. SEO PUISSANT POUR LA PAGE DE RÉSERVATION            */}
      {/* ====================================================== */}
      <Helmet>
        <title>Réserver une Consultation Flash de Voyance (25€) - Spiritia</title>
        <meta name="description" content="Posez votre question urgente et obtenez une réponse rapide. Réservez votre consultation flash de voyance ou d'astrologie pour une guidance claire et personnalisée." />
        <link rel="canonical" href="https://spiritualiteprofonde.com/booking" /> {/* Adaptez l'URL si elle est différente */}

        {/* --- OPEN GRAPH (Facebook, WhatsApp, etc.) --- */}
        <meta property="og:title" content="Consultation Flash (25€) - Une Réponse Rapide à Votre Question" />
        <meta property="og:description" content="Vous avez une question urgente ? Obtenez une guidance personnalisée rapidement avec notre service de consultation flash." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://spiritualiteprofonde.com/booking" />
        <meta property="og:image" content="https://spiritualiteprofonde.com/images/lelogo.png" /> {/* Créez cette image ! */}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Spiritia" />
        <meta property="og:locale" content="fr_FR" />

        {/* --- TWITTER CARDS --- */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Consultation Flash (25€) - Une Réponse Rapide à Votre Question" />
        <meta name="twitter:description" content="Vous avez une question urgente ? Obtenez une guidance personnalisée rapidement." />
        <meta name="twitter:image" content="https://spiritualiteprofonde.com/images/lelogo.png" />

        {/* --- DONNÉES STRUCTURÉES (Schema.org) pour un service spécifique --- */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Consultation Flash de Voyance",
              "description": "Un service de consultation rapide par email ou WhatsApp pour répondre à une question spécifique en astrologie, tarot ou autre domaine spirituel.",
              "provider": {
                "@type": "Organization",
                "name": "Spiritia"
              },
              "offers": {
                "@type": "Offer",
                "price": "25.00",
                "priceCurrency": "EUR"
              },
              "serviceType": "Consultation Spirituelle"
            }
          `}
        </script>
      </Helmet>
      {/* ====================================================== */}
      {/* FIN DU BLOC SEO                                        */}
      {/* ====================================================== */}
    <main className="content booking-page">
      <div className="booking-header">
        <h1>Réserver une Consultation Flash</h1>
        <p className="subtitle">Posez votre question et recevez une réponse personnalisée rapidement.</p>
      </div>

      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="booking-summary">
          <h3>Résumé de votre commande</h3>
          <p><strong>Service :</strong> Consultation Flash par email</p>
          <p><strong>Détails :</strong> Une réponse claire et précise à votre question.</p>
          <p>
            Après avoir envoyé votre demande, vous serez redirigé vers WhatsApp pour finaliser le paiement et la consultation.
          </p>
          <div className="booking-price">
            Total : 12,000 <FCFA></FCFA>
          </div>
        </div>

        <div className="form-fields">
          <h3>Vos informations</h3>
          <div className="form-group">
            <label htmlFor="name"><FaUser className="form-icon" /> Nom complet</label>
            <input type="text" id="name" name="name" placeholder="Votre nom et prénom" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email"><FaEnvelope className="form-icon" /> Adresse Email (pour la réponse)</label>
            <input type="email" id="email" name="email" placeholder="exemple@domaine.com" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="question"><FaQuestionCircle className="form-icon" /> Votre Question</label>
            <textarea id="question" name="question" rows="6" placeholder="Soyez aussi précis(e) que possible..." value={formData.question} onChange={handleChange} required></textarea>
          </div>
          <button type="submit" className="cta-button form-submit-btn">
            Contacter via WhatsApp pour finaliser
            <FaWhatsapp style={{ marginLeft: '10px' }} />
          </button>
        </div>
      </form>
    </main>
    </>
  );
}

export default Booking;