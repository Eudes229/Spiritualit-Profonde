import React from 'react';
import { Link } from 'react-router-dom'; // <-- VÉRIFIER L'IMPORT

function ConsultationCard({ title, description, price, image, linkTo }) {
  return (
    <div className="consultation-card">
      <img src={image} alt={title} className="consultation-image" />
      <div className="consultation-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="consultation-footer">
          <p className="consultation-price">{price}</p>
          
          {/* VÉRIFIER QUE LE BOUTON EST BIEN UN COMPOSANT <Link> */}
          <Link to={linkTo} className="cta-button">
            En savoir plus
          </Link>

        </div>
      </div>
    </div>
  );
}

export default ConsultationCard;