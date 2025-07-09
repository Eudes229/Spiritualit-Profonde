// src/pages/Booking.jsx (Version finale avec redirection WhatsApp)

import React, { useState } from 'react';
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
    const serviceName = 'Consultation Flash (25€)';

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
            Total : 25,00 €
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
  );
}

export default Booking;