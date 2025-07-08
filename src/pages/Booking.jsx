import React, { useState } from 'react';

function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    question: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Étape 1: Validation simple
    if (!formData.name || !formData.email || !formData.question) {
      alert("Veuillez remplir tous les champs.");
      return;
    }
    
    // Étape 2: Simulation du paiement
    // Dans une vraie application, ici on ouvrirait une fenêtre Stripe, PayPal, etc.
    console.log("Données pour la consultation :", formData);
    alert(`Merci, ${formData.name} !\n\nVous allez être redirigé vers une page de paiement sécurisée pour régler les 25 €.\n\n(Ceci est une simulation)`);
    
    // Étape 3: On pourrait ensuite rediriger l'utilisateur ou vider le formulaire
    setFormData({ name: '', email: '', question: '' });
  };

  return (
    <div>
      <h1>Réserver une Consultation Flash</h1>
      <p className="subtitle">Posez votre question et recevez une réponse personnalisée rapidement.</p>

      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="booking-summary">
          <h3>Résumé de votre commande</h3>
          <p><strong>Service :</strong> Consultation Flash par email</p>
          <p><strong>Détails :</strong> Une réponse claire à une question précise.</p>
          <p className="booking-price">Total : 25,00 €</p>
        </div>

        <div className="form-fields">
          <h3>Vos informations</h3>
          <div className="form-group">
            <label htmlFor="name">Nom complet</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Adresse Email (pour la réponse)</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="question">Votre Question (soyez aussi précis que possible)</label>
            <textarea id="question" name="question" rows="6" value={formData.question} onChange={handleChange} required></textarea>
          </div>
          <button type="submit" className="cta-button">
            Procéder au paiement de 25 €
          </button>
        </div>
      </form>
    </div>
  );
}

export default Booking;