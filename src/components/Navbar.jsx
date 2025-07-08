// src/components/Navbar.jsx (Version finale avec menu hamburger)

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  // État pour gérer l'ouverture/fermeture du menu mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  // Pour fermer le menu quand on clique sur un lien (très pratique sur mobile)
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <NavLink to="/" onClick={closeMenu}>SPIRITIA</NavLink>
      </div>

      {/* Bouton Hamburger - s'affiche uniquement sur mobile grâce au CSS */}
      <button className="navbar-toggle" onClick={toggleMenu} aria-label="Ouvrir le menu">
        {isMenuOpen ? '✕' : '☰'} {/* Affiche une croix si le menu est ouvert, sinon le hamburger */}
      </button>

      {/* Les liens sont dans une div qui change de classe si le menu est ouvert */}
      <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <NavLink to="/" className="nav-link" onClick={closeMenu} end>Accueil</NavLink>
        <NavLink to="/consultations" className="nav-link" onClick={closeMenu}>Consultations</NavLink>
        <NavLink to="/a-propos" className="nav-link" onClick={closeMenu}>À Propos</NavLink>
        <NavLink to="/contact" className="nav-link" onClick={closeMenu}>Contact</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;