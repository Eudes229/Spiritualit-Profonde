import React from 'react';

function ZodiacSign({ sign }) {
  return (
    <div className="zodiac-sign-card">
      <img src={sign.image} alt={sign.name} className="zodiac-image" />
      <div className="zodiac-content">
        <h3>{sign.name} <span className="zodiac-symbol">{sign.symbol}</span></h3>
        <p className="zodiac-dates">{sign.dates}</p>
        <div className="zodiac-details">
          <p><strong>Élément :</strong> {sign.element}</p>
          <p><strong>Planète :</strong> {sign.planet}</p>
        </div>
        <p className="zodiac-description">{sign.description}</p>
        <div className="zodiac-traits">
          <div>
            <strong>Qualités :</strong>
            <ul>
              {sign.strengths.map(strength => <li key={strength}>{strength}</li>)}
            </ul>
          </div>
          <div>
            <strong>Défis :</strong>
            <ul>
              {sign.weaknesses.map(weakness => <li key={weakness}>{weakness}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ZodiacSign;
