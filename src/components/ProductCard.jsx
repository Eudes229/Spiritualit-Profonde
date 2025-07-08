// src/components/ProductCard.js

import React from 'react';

// Ce composant affiche une seule carte produit
function ProductCard({ image, title, price, whatsappNumber }) {
  // Prépare le message pour WhatsApp
  const message = `Bonjour, je suis intéressé(e) par le produit : ${title} - Prix : ${price}.`;
  
  // Encode le message pour qu'il soit utilisable dans une URL
  const encodedMessage = encodeURIComponent(message);

  // Crée le lien WhatsApp final
  const whatsappLink = `https://wa.me/${+22384876466}?text=${encodedMessage}`;

  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <div className="product-info">
        <h3>{title}</h3>
        <p className="product-price">{price}</p>
        {/* Le lien <a> est utilisé comme un bouton pour rediriger vers WhatsApp */}
        <a 
          href={whatsappLink} 
          className="cta-button" 
          target="_blank" 
          rel="noopener noreferrer" // Important pour la sécurité et pour ouvrir dans un nouvel onglet
        >
          Acheter
        </a>
      </div>
    </div>
  );
}

export default ProductCard;