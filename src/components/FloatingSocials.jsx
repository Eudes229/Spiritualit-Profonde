// src/components/FloatingSocials.jsx

import React from 'react';
// On importe toutes les icônes depuis la librairie react-icons
import { FaWhatsapp, FaFacebookF, FaTiktok, FaYoutube, FaInstagram } from 'react-icons/fa';

function FloatingSocials() {
  // =======================================================
  // == METTEZ VOS LIENS DE RÉSEAUX SOCIAUX ICI ==
  // =======================================================
  const socialLinks = {
    whatsapp: 'https://wa.me/22896170781',
    facebook: 'https://www.facebook.com/votrepage',
    tiktok: 'https://www.tiktok.com/@spiritualitelegale?_t=ZN-8xt1evXCEaM&_r=1',
    youtube: 'https://youtube.com/@spiritualitesante-officiel',
    instagram: 'https://www.facebook.com/share/16zzMaJ52d/',
  };
  // =======================================================

  return (
    <div className="floating-social-bar">
      <a href={socialLinks.whatsapp} className="social-icon whatsapp" target="_blank" rel="noopener noreferrer" aria-label="Contacter via WhatsApp">
        <FaWhatsapp />
      </a>
      <a href={socialLinks.facebook} className="social-icon facebook" target="_blank" rel="noopener noreferrer" aria-label="Suivre sur Facebook">
        <FaFacebookF />
      </a>
      <a href={socialLinks.tiktok} className="social-icon tiktok" target="_blank" rel="noopener noreferrer" aria-label="Suivre sur TikTok">
        <FaTiktok />
      </a>
      <a href={socialLinks.youtube} className="social-icon youtube" target="_blank" rel="noopener noreferrer" aria-label="Suivre sur YouTube">
        <FaYoutube />
      </a>
      <a href={socialLinks.instagram} className="social-icon instagram" target="_blank" rel="noopener noreferrer" aria-label="Suivre sur Instagram">
        <FaInstagram />
      </a>
    </div>
  );
}

export default FloatingSocials;