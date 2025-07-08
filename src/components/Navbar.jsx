// src/components/Navbar.jsx (Version corrigée)

import React from 'react';
import { NavLink } from 'react-router-dom';
// Optionnel : si vous avez un logo en image
// import logo from '../assets/logo.png'; 

function Navbar() {
  // Cette fonction pour le style est bonne, mais on peut faire encore plus propre avec des classes.
  // Je vais vous montrer les deux options. On garde la vôtre pour l'instant.
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      // On retire la couleur et le soulignement d'ici pour les mettre dans le CSS
    };
  };

  return (
    <nav className="navbar">
      {/* GROUPE DE GAUCHE : Logo ou nom du site */}
      <div className="navbar-logo">
        <NavLink to="/">
          {/* Si vous avez une image de logo : */}
          {/* <img src={logo} alt="Spiritia Logo" /> */}
          
          {/* Si vous voulez juste du texte : */}
          SPIRITIA
        </NavLink>
      </div>

      {/* GROUPE DE DROITE : Tous les liens de navigation */}
      <div className="navbar-links">
        <NavLink to="/" style={navLinkStyles} className="nav-link">
          Accueil
        </NavLink>
        <NavLink to="/consultations" style={navLinkStyles} className="nav-link">
          Consultations
        </NavLink>
        <NavLink to="/a-propos" style={navLinkStyles} className="nav-link">
          À Propos
        </NavLink>
        <NavLink to="/contact" style={navLinkStyles} className="nav-link">
          Contact
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;