// src/pages/Contact.jsx (Version améliorée avec EmailJS)

import React, { useState } from 'react';
import emailjs from '@emailjs/browser'; // <-- 1. Importer la librairie

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
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

    // --- 2. LOGIQUE D'ENVOI AVEC EMAILJS ---
    
    // Remplacez les clés ci-dessous par les vôtres (trouvées sur le site EmailJS)
    const serviceID = 'service_wpu87rd'; // Le Service ID de votre service Gmail
    const templateID = 'template_et2ur3d'; // Le Template ID de votre modèle d'e-mail
    const publicKey = 'mfQYOHNENQeH5uYG3'; // Votre Public Key

    // L'objet `templateParams` doit contenir les mêmes noms de variables que dans votre modèle EmailJS
    const templateParams = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
         console.log('E-mail envoyé avec succès !', response.status, response.text);
         alert(`Merci, ${formData.name} ! Votre message a bien été envoyé.`);
         // Réinitialiser le formulaire seulement si l'envoi a réussi
         setFormData({ name: '', email: '', subject: '', message: '' });
      })
      .catch((err) => {
         console.error('Erreur lors de l\'envoi de l\'e-mail :', err);
         alert('Une erreur est survenue, votre message n\'a pas pu être envoyé. Veuillez réessayer.');
      });
  };

  return (
    // La structure de votre formulaire reste exactement la même
    <div className="content">
      <h1>Contactez-Nous</h1>
      <p className="subtitle">Pour toute question, partenariat ou simplement pour partager votre expérience.</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nom complet</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Adresse Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Sujet</label>
          <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Votre Message</label>
          <textarea id="message" name="message" rows="6" value={formData.message} onChange={handleChange} required></textarea>
        </div>
        <button type="submit" className="cta-button">Envoyer le Message</button>
      </form>
    </div>
  );
}

export default Contact;