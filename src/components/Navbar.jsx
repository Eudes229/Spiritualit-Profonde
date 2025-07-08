// src/components/Navbar.jsx (Version finale pour correspondre à votre design)

import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
// On importe les icônes que nous venons d'installer
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
  }, [isMenuOpen]);

  // J'ai renommé certains liens pour qu'ils correspondent à votre image
  const navLinks = [
    { to: "/", text: "Accueil", end: true },
    { to: "/galerie", text: "Galerie" },
    { to: "/evenements", text: "Événements" },
    { to: "/equipe", text: "Équipe" },
    { to: "/contact", text: "Contact" }
  ];

  return (
    <>
      <header className="navbar">
        <div className="navbar-logo">
          <NavLink to="/">SPIRITIA</NavLink>
        </div>

        {/* C'est le bouton "hamburger" qui ouvre le menu */}
        <button className="navbar-toggle" onClick={toggleMenu} aria-label="Ouvrir le menu">
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </header>
      
      {/* Le conteneur du menu qui apparaît sur le côté (off-canvas) */}
      <div className={`offcanvas-menu ${isMenuOpen ? 'active' : ''}`}>
        <div className="offcanvas-header">
          {/* Le bouton pour fermer le menu est maintenant à l'intérieur */}
          <button className="offcanvas-close" onClick={closeMenu} aria-label="Fermer le menu">
            ✕
          </button>
        </div>
        
        <div className="offcanvas-content">
          <nav className="offcanvas-nav">
            {navLinks.map(link => (
              <NavLink 
                key={link.to} 
                to={link.to} 
                className="nav-link" 
                onClick={closeMenu} 
                end={link.end}
              >
                {link.text}
              </NavLink>
            ))}
          </nav>

          <div className="offcanvas-socials">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="https://wa.me/22384876466" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
      
      {/* Fond semi-transparent qui s'affiche derrière le menu */}
      {isMenuOpen && <div className="offcanvas-backdrop" onClick={closeMenu}></div>}
    </>
  );
}

export default Navbar;