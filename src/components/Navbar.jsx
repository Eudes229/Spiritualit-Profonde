// src/components/Navbar.jsx (Version finale avec responsivité mobile)

import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  // 1. On utilise un état pour savoir si le menu mobile est ouvert ou fermé
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fonction pour basculer l'état du menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  // Fonction pour fermer le menu (utile quand on clique sur un lien)
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // 2. Effet pour bloquer le scroll de la page quand le menu est ouvert (très pro !)
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  // J'ai simplifié la gestion du style des liens pour utiliser des classes CSS, c'est plus propre.
  return (
    // On utilise un Fragment (<>) car on va retourner plusieurs éléments au même niveau
    <>
      <header className="navbar">
        {/* GROUPE DE GAUCHE : Logo ou nom du site */}
        <div className="navbar-logo">
          <NavLink to="/">SPIRITIA</NavLink>
        </div>

        {/* GROUPE DE DROITE SUR DESKTOP : Les liens de navigation */}
        <nav className="navbar-links-desktop">
          <NavLink to="/" className="nav-link" end>Accueil</NavLink>
          <NavLink to="/consultations" className="nav-link">Consultations</NavLink>
          <NavLink to="/a-propos" className="nav-link">À Propos</NavLink>
          <NavLink to="/contact" className="nav-link">Contact</NavLink>
        </nav>

        {/* BOUTON HAMBURGER POUR MOBILE : n'apparaîtra que sur petits écrans */}
        <button className="navbar-toggle" onClick={toggleMenu} aria-label="Ouvrir le menu">
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </header>
      
      {/* Le conteneur du menu qui apparaît sur le côté (off-canvas) */}
      <div className={`offcanvas-menu ${isMenuOpen ? 'active' : ''}`}>
        <div className="offcanvas-header">
          <button className="offcanvas-close" onClick={closeMenu} aria-label="Fermer le menu">
            ✕
          </button>
        </div>
        
        <nav className="offcanvas-nav">
          <NavLink to="/" className="nav-link" onClick={closeMenu} end>Accueil</NavLink>
          <NavLink to="/consultations" className="nav-link" onClick={closeMenu}>Consultations</NavLink>
          <NavLink to="/a-propos" className="nav-link" onClick={closeMenu}>À Propos</NavLink>
          <NavLink to="/contact" className="nav-link" onClick={closeMenu}>Contact</NavLink>
        </nav>
      </div>
      
      {/* Fond semi-transparent qui s'affiche derrière le menu quand il est ouvert */}
      {isMenuOpen && <div className="offcanvas-backdrop" onClick={closeMenu}></div>}
    </>
  );
}

export default Navbar;