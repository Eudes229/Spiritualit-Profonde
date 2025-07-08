import React from 'react';

function Numerology() {
  return (
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
  );
}

export default Numerology;