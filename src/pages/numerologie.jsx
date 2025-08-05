import React from 'react';
import { Helmet } from 'react-helmet-async'; // <--- 1. IMPORTER L'OUTIL SEO

function Numerology() {
  return (
     <>
      {/* ====================================================== */}
      {/* 2. SEO PUISSANT POUR LA PAGE NUMÉROLOGIE               */}
      {/* ====================================================== */}
      <Helmet>
        <title>Numérologie : Calculer votre Chemin de Vie & Signification des Nombres</title>
        <meta name="description" content="Découvrez les secrets de la numérologie. Apprenez à calculer votre chemin de vie à partir de votre date de naissance et comprenez la signification de chaque nombre pour votre destin." />
        <link rel="canonical" href="https://spiritualiteprofonde.com/numerologie" /> {/* Adaptez l'URL si elle est différente */}

        {/* --- OPEN GRAPH (Facebook, WhatsApp, etc.) --- */}
        <meta property="og:title" content="Numérologie : Calculez Votre Chemin de Vie | Spiritia" />
        <meta property="og:description" content="Votre date de naissance cache un code secret. Découvrez comment calculer votre chemin de vie et ce qu'il révèle sur votre personnalité et votre mission." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://spiritualiteprofonde.com/numerologie" />
        <meta property="og:image" content="https://spiritualiteprofonde.com/images/lelogo.png" /> {/* Créez cette image ! */}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Spiritia" />
        <meta property="og:locale" content="fr_FR" />

        {/* --- TWITTER CARDS --- */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Numérologie : Calculez Votre Chemin de Vie | Spiritia" />
        <meta name="twitter:description" content="Votre date de naissance cache un code secret. Découvrez comment calculer votre chemin de vie." />
        <meta name="twitter:image" content="https://spiritualiteprofonde.com/images/lelogo.png" />

        {/* --- DONNÉES STRUCTURÉES (Schema.org) pour un guide et un service --- */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Consultation de Numérologie Complète",
              "description": "Un service d'analyse numérologique pour calculer et interpréter votre thème complet (Chemin de Vie, Nombre d'Expression, etc.) et révéler vos talents, défis et votre mission d'âme.",
              "provider": {
                "@type": "Organization",
                "name": "Spiritia"
              },
              "serviceType": "Consultation Spirituelle"
            }
          `}
        </script>
      </Helmet>
      {/* ====================================================== */}
      {/* FIN DU BLOC SEO                                        */}
      {/* ====================================================== */}
    <div className="numerology-container">
      <h1>La Puissance de la Numérologie</h1>
      <p className="subtitle">Décryptez les messages cachés dans vos nombres.</p>
      
      <div className="numerology-content">
        <p>
          La numérologie est l'étude de la signification symbolique des nombres. En analysant votre date de naissance et votre nom complet, nous pouvons révéler votre "chemin de vie", votre "nombre d'expression" et votre "année personnelle".
        </p>
        <p>
          Ces nombres clés vous donnent des aperçus profonds sur votre personnalité, vos talents naturels et les cycles que vous traversez.
        </p>
        
        <h2>Signification des Nombres Fondamentaux</h2>
        
        <div className="number-meanings">
          <div className="number-card">
            <h3>1 - Le Leader</h3>
            <p>Indépendance, initiative, ambition. Les 1 sont des pionniers avec une forte volonté. Ils représentent le commencement et l'action.</p>
          </div>
          
          <div className="number-card">
            <h3>2 - Le Diplomate</h3>
            <p>Coopération, sensibilité, équilibre. Les 2 sont pacifiques et intuitifs. Ils excellent dans les relations et la médiation.</p>
          </div>
          
          <div className="number-card">
            <h3>3 - Le Créatif</h3>
            <p>Expression, joie de vivre, communication. Les 3 sont sociables et artistiques. Ils rayonnent par leur optimisme.</p>
          </div>
          
          <div className="number-card">
            <h3>4 - Le Bâtisseur</h3>
            <p>Stabilité, organisation, travail. Les 4 sont pratiques et fiables. Ils construisent sur des bases solides.</p>
          </div>
          
          <div className="number-card">
            <h3>5 - Le Libre Esprit</h3>
            <p>Liberté, adaptabilité, changement. Les 5 sont énergiques et aiment la variété. Ils représentent le mouvement.</p>
          </div>
          
          <div className="number-card">
            <h3>6 - Le Responsable</h3>
            <p>Harmonie, service, famille. Les 6 sont nourriciers et responsables. Ils recherchent l'équilibre dans les relations.</p>
          </div>
          
          <div className="number-card">
            <h3>7 - Le Sage</h3>
            <p>Réflexion, spiritualité, analyse. Les 7 sont introspectifs et cherchent la vérité. Ils aiment l'étude et la solitude.</p>
          </div>
          
          <div className="number-card">
            <h3>8 - Le Puissant</h3>
            <p>Abondance, pouvoir, réalisation. Les 8 sont ambitieux et bons gestionnaires. Ils maîtrisent le monde matériel.</p>
          </div>
          
          <div className="number-card">
            <h3>9 - L'Humaniste</h3>
            <p>Altruisme, compassion, universalité. Les 9 sont idéalistes et généreux. Ils se consacrent à de grandes causes.</p>
          </div>
        </div>
        
        <div className="calculation-section">
          <h2>Comment calculer votre chemin de vie</h2>
          <p>Additionnez tous les chiffres de votre date de naissance (jour/mois/année) et réduisez jusqu'à obtenir un chiffre entre 1 et 9.</p>
          <p>Exemple : 15/08/1990 → 1+5+0+8+1+9+9+0 = 33 → 3+3 = 6</p>
        </div>
      </div>
    </div>
    </>
  );
}

export default Numerology;