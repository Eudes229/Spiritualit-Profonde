// src/components/Navbar.jsx (Version finale avec menu slide-in)

import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
// Optionnel : si vous voulez utiliser des icônes de réseaux sociaux
// import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fonction pour basculer l'état du menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  // Fonction pour fermer le menu quand on clique sur un lien ou sur le fond
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Effet pour bloquer le scroll de la page quand le menu est ouvert
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);


  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <NavLink to="/">SPIRITIA</NavLink>
        </div>

        {/* Bouton Hamburger - Toujours visible pour ouvrir le menu */}
        <button className="navbar-toggle" onClick={toggleMenu} aria-label="Ouvrir le menu">
          ☰
        </button>
      </nav>
      
      {/* Le conteneur du menu qui apparaît sur le côté */}
      <div className={`offcanvas-menu ${isMenuOpen ? 'active' : ''}`}>
        <div className="offcanvas-header">
          {/* Logo optionnel dans le menu */}
          <div className="offcanvas-logo">SPIRITIA</div>
          <button className="offcanvas-close" onClick={closeMenu} aria-label="Fermer le menu">
            ✕
          </button>
        </div>
        
        <div className="offcanvas-content">
          <NavLink to="/" className="nav-link" onClick={closeMenu} end>Accueil</NavLink>
          <NavLink to="/consultations" className="nav-link" onClick={closeMenu}>Consultations</NavLink>
          <NavLink to="/a-propos" className="nav-link" onClick={closeMenu}>À Propos</NavLink>
          <NavLink to="/contact" className="nav-link" onClick={closeMenu}>Contact</NavLink>

          {/* Séparateur et icônes des réseaux sociaux, comme sur votre image */}
          <hr className="offcanvas-divider" />

          <div className="offcanvas-socials">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">FB</a> {/* Remplacez par vos icônes */}
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">IG</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">IN</a>
            <a href="https://wa.me/22384876466" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">WA</a>
          </div>
        </div>
      </div>
      
      {/* Fond semi-transparent qui s'affiche derrière le menu */}
      {isMenuOpen && <div className="offcanvas-backdrop" onClick={closeMenu}></div>}
    </>
  );
}

export default Navbar;