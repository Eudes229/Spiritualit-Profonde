// src/pages/geomancie.jsx (Version corrigée avec le lien WhatsApp)

import React from 'react';
// Il n'y a pas besoin d'importer 'Link' ici, car tous les liens sont gérés par le composant lui-même.

function Geomancy() {
  // --- DÉBUT DE LA LOGIQUE WHATSAPP ---
  // Remplacez par votre numéro.
  const myWhatsappNumber = '22384876466'; 
  // Le message qui sera pré-rempli pour l'utilisateur.
  const whatsappMessage = "Bonjour, je suis intéressé(e) par un essai de la géomancie pour répondre à une question.";
  // Encodage du message pour l'URL.
  const encodedMessage = encodeURIComponent(whatsappMessage);
  // Création du lien WhatsApp complet.
  const whatsappLink = `https://wa.me/${myWhatsappNumber}?text=${encodedMessage}`;
  // --- FIN DE LA LOGIQUE WHATSAPP ---

  return (
    <div className="geomancy-container">
      <h1>La Géomancie Divinatoire</h1>
      <p className="subtitle">L'art ancestral de lire les messages de la Terre</p>
      
      <div className="geomancy-intro">
        <p>
          Pratiquée depuis l'Antiquité en Afrique, au Moyen-Orient et en Europe, la géomancie (du grec "geo" terre et "manteia" divination) est un art divinatoire qui décode les énergies à travers des figures sacrées tracées dans le sable ou sur papier.
        </p>
        <p>
          Bien plus qu'une simple prédiction, cette méthode offre une cartographie des influences invisibles qui façonnent votre présent et éclaire vos choix futurs.
        </p>
      </div>

      <div className="geomancy-content">
        <section className="history-section">
          <h2>Origines et Traditions</h2>
          <p>
            Apparue vers le IXe siècle, la géomancie s'est transmise à travers :
          </p>
          <ul>
            <li>Les savants arabes qui l'appelaient "Ilm al-Raml" (science du sable)</li>
            <li>Les mages de la Renaissance comme Cornelius Agrippa</li>
            <li>Les traditions africaines subsahariennes (comme le Fa du Bénin)</li>
          </ul>
        </section>

        <section className="method-section">
          <h2>La Méthode Géomantique</h2>
          <div className="method-steps">
            <div className="step">
              <h3>1. La Question</h3>
              <p>Formulez une question claire (amour, travail, décision importante) avant de tracer les figures.</p>
            </div>
            <div className="step">
              <h3>2. La Création des Figures</h3>
              <p>En méditant, tracez 16 lignes de points aléatoires puis réduisez-les en 4 figures mères (2 points = ligne brisée, 1 point = ligne pleine).</p>
            </div>
            <div className="step">
              <h3>3. Le Tirage</h3>
              <p>Les 4 figures mères génèrent 12 autres figures (filles, nièces, témoins) formant une "maison" géomantique.</p>
            </div>
            <div className="step">
              <h3>4. L'Interprétation</h3>
              <p>Chaque figure et sa position révèlent des aspects spécifiques de votre situation.</p>
            </div>
          </div>
        </section>

        <section className="figures-section">
          <h2>Les 16 Figures Clés</h2>
          <div className="figures-grid">
            <div className="figure-card">
              <h3>Via (Le Chemin)</h3>
              <p>Mouvement, voyage, changement rapide. Une énergie dynamique mais parfois instable.</p>
            </div>
            <div className="figure-card">
              <h3>Populus (La Foule)</h3>
              <p>Influence collective, attente. Recommande l'observation avant d'agir.</p>
            </div>
            <div className="figure-card">
              <h3>Conjonctio (L'Union)</h3>
              <p>Rencontres, collaborations. Peut indiquer une résolution de conflits.</p>
            </div>
            <div className="figure-card">
              <h3>Carcer (La Prison)</h3>
              <p>Blocages, limitations. Invite à la patience ou à reconsidérer ses options.</p>
            </div>
            {/* Vous pouvez ajouter les 12 autres figures ici */}
          </div>
        </section>

        <section className="interpretation-section">
          <h2>Clés d'Interprétation</h2>
          <div className="interpretation-tips">
            <h3>Les 4 Maisons Principales</h3>
            <ol>
              <li><strong>Maison 1</strong> : Le consultant et sa situation actuelle</li>
              <li><strong>Maison 7</strong> : Les relations et partenariats</li>
              <li><strong>Maison 10</strong> : La carrière et la destinée</li>
              <li><strong>Maison 4</strong> : Les fondations et la famille</li>
            </ol>
            <h3>Significations des Éléments</h3>
            <ul>
              <li>🔥 Feu (Figures impaires) : Action, passion, initiative</li>
              <li>🌍 Terre (Figures paires) : Stabilité, matérialité, résultats</li>
            </ul>
          </div>
        </section>

        {/* ========================================================= */}
        {/* == CORRECTION APPLIQUÉE ICI ============================= */}
        {/* ========================================================= */}
        <div className="geomancy-cta">
          <h3>Prêt à interroger l'oracle ?</h3>
          <p>Passez de la théorie à la pratique. Posez-moi directement votre question via WhatsApp pour obtenir une première réponse guidée par la géomancie.</p>
          
          {/* Le <button> est remplacé par un lien <a> vers WhatsApp */}
          <a 
            href={whatsappLink} 
            className="cta-button" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Essayer la Géomancie
          </a>
        </div>
      </div>
    </div>
  );
}

export default Geomancy;