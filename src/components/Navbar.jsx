// src/components/Navbar.jsx (Version finale avec menu hamburger)

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  // État pour gérer l'ouverture/fermeture du menu mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fonction pour ouvrir/fermer le menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  // Fonction pour fermer le menu quand on clique sur un lien
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <NavLink to="/" onClick={closeMenu}>SPIRITIA</NavLink>
      </div>

      {/* Le bouton "hamburger" qui apparaît sur mobile */}
      <button className="navbar-toggle" onClick={toggleMenu} aria-label="Ouvrir le menu">
        {isMenuOpen ? '✕' : '☰'} {/* Affiche une croix ou le hamburger */}
      </button>

      {/* Les liens du menu. La classe "active" est ajoutée/retirée quand on clique */}
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