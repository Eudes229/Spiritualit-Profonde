// src/components/RitualCard.jsx

import React from 'react';
import { Link } from 'react-router-dom';

function RitualCard({ title, description, image, linkTo }) {
  return (
    <div className="ritual-card">
      <img src={image} alt={title} className="ritual-image" />
      <div className="ritual-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <Link to={linkTo} className="cta-button">
          Découvrir le Rituel
        </Link>
      </div>
    </div>
  );
}

export default RitualCard;