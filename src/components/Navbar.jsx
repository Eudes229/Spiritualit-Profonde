// src/components/Navbar.jsx (Version finale et propre)

import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Effet pour bloquer le scroll de la page quand le menu mobile est ouvert
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto'; // Utilisez 'auto' pour restaurer
    }
    // Nettoyage de l'effet quand le composant est démonté
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="navbar">
        <div className="navbar-logo">
          <NavLink to="/" onClick={closeMenu}>SPIRITIA</NavLink>
        </div>

        {/* Navigation pour les grands écrans */}
        <nav className="navbar-links-desktop">
          <NavLink to="/" className="nav-link" end>Accueil</NavLink>
          <NavLink to="/consultations" className="nav-link">Consultations</NavLink>
          <NavLink to="/actualites" className="nav-link">Actualités</NavLink>
          <NavLink to="/a-propos" className="nav-link">À Propos</NavLink>
          <NavLink to="/contact" className="nav-link">Contact</NavLink>
          
        </nav>

        {/* Bouton Hamburger pour mobile */}
        <button className="navbar-toggle" onClick={toggleMenu} aria-label="Ouvrir le menu">
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </header>
      
      {/* Menu latéral (Off-canvas) qui s'ouvre sur mobile */}
      <div className={`offcanvas-menu ${isMenuOpen ? 'active' : ''}`}>
        <div className="offcanvas-header">
          <button className="offcanvas-close" onClick={closeMenu} aria-label="Fermer le menu">
            × {/* Une croix plus standard */}
          </button>
        </div>
        
        <nav className="offcanvas-nav">
          <NavLink to="/" className="nav-link" onClick={closeMenu} end>Accueil</NavLink>
          <NavLink to="/consultations" className="nav-link" onClick={closeMenu}>Consultations</NavLink>
          <NavLink to="/actualites" className="nav-link" onClick={closeMenu}>Actualités</NavLink>
          <NavLink to="/a-propos" className="nav-link" onClick={closeMenu}>À Propos</NavLink>
          <NavLink to="/contact" className="nav-link" onClick={closeMenu}>Contact</NavLink>
        </nav>
      </div>
      
      {/* Fond semi-transparent */}
      {isMenuOpen && <div className="offcanvas-backdrop" onClick={closeMenu}></div>}
    </>
  );
}

export default Navbar;