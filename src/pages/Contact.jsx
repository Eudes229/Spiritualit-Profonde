import React, { useState } from 'react';

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
    // Dans une vraie application, vous enverriez ces données à un serveur (backend)
    // ou utiliseriez un service comme EmailJS ou Formspree.
    console.log("Données du formulaire soumises :", formData);
    alert(`Merci, ${formData.name} ! Votre message a bien été envoyé (simulation).\nNous vous répondrons bientôt sur ${formData.email}.`);
    // Réinitialiser le formulaire
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div>
      <h1>Contactez-Nous</h1>
      <p>Pour toute question, partenariat ou simplement pour partager votre expérience.</p>

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