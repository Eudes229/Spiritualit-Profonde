import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Importe l'icône WhatsApp

function WhatsAppButton() {
  // PERSONNALISEZ CES INFORMATIONS
  const phoneNumber = '22384876466'; // <-- Mettez votre numéro ici (format international SANS le '+')
  const message = "Bonjour, je visite votre site et j'aimerais avoir plus d'informations.";

  // Encode le message pour l'URL
  const encodedMessage = encodeURIComponent(message);

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappUrl}
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contacter via WhatsApp"
    >
      <FaWhatsapp className="whatsapp-icon" />
    </a>
  );
}

export default WhatsAppButton;