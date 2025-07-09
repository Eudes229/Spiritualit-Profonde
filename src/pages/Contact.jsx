// src/pages/Contact.jsx (Version finale améliorée)

import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
// 1. Importer les icônes que nous allons utiliser
import { FaUser, FaEnvelope, FaPen, FaPaperPlane } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  // NOUVEAU : State pour gérer le statut de l'envoi
  const [status, setStatus] = useState('idle'); // 'idle', 'sending', 'sent', 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending'); // On passe en mode "envoi en cours"

    const serviceID = 'service_wpu87rd';
    const templateID = 'template_et2ur3d';
    const publicKey = 'mfQYOHNENQeH5uYG3';

    const templateParams = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
         console.log('E-mail envoyé avec succès !', response.status, response.text);
         setStatus('sent'); // Succès !
         // Réinitialiser le formulaire après un court délai pour que l'utilisateur voie le message
         setTimeout(() => {
           setFormData({ name: '', email: '', subject: '', message: '' });
           setStatus('idle');
         }, 3000);
      })
      .catch((err) => {
         console.error('Erreur lors de l\'envoi de l\'e-mail :', err);
         setStatus('error'); // Erreur !
      });
  };

  return (
    <main className="content">
      <div className="contact-header">
        <h1>Contactez-Nous</h1>
        <p className="subtitle">Pour toute question, partenariat ou simplement pour partager votre expérience.</p>
      </div>

      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          
          {/* 2. Ajout de l'icône dans chaque groupe de formulaire */}
          <div className="form-group">
            <label htmlFor="name"><FaUser className="form-icon" /> Nom complet</label>
            <input type="text" id="name" name="name" placeholder="Votre nom..." value={formData.name} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="email"><FaEnvelope className="form-icon" /> Adresse Email</label>
            <input type="email" id="email" name="email" placeholder="Votre email..." value={formData.email} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="subject"><FaPen className="form-icon" /> Sujet</label>
            <input type="text" id="subject" name="subject" placeholder="Sujet de votre message..." value={formData.subject} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Votre Message</label>
            <textarea id="message" name="message" rows="6" placeholder="Écrivez votre message ici..." value={formData.message} onChange={handleChange} required></textarea>
          </div>

          <button type="submit" className="cta-button form-submit-btn" disabled={status === 'sending'}>
            {status === 'sending' ? 'Envoi en cours...' : 'Envoyer le Message'}
            <FaPaperPlane className="submit-icon" />
          </button>
          
          {/* NOUVEAU : Messages de statut pour l'utilisateur */}
          {status === 'sent' && <p className="status-message success">Merci ! Votre message a bien été envoyé.</p>}
          {status === 'error' && <p className="status-message error">Une erreur est survenue. Veuillez réessayer.</p>}

        </form>
      </div>
    </main>
  );
}

export default Contact;