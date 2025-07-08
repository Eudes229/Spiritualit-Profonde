// src/App.jsx (Version mise à jour)

import React from 'react';
// BrowserRouter n'est pas nécessaire ici, car il est sûrement dans votre fichier main.jsx, c'est parfait.
import { Routes, Route } from 'react-router-dom';

// IMPORTS DES COMPOSANTS
import Navbar from './components/Navbar';
import WhatsAppButton from './components/WhatsAppButton'; 

// IMPORTS DE TOUTES LES PAGES
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Astrology from './pages/astrologie';
import Geomancy from './pages/geomancie';
import Numerology from './pages/numerologie';
import Booking from './pages/Booking';
import NotFound from './pages/NotFound';

// =========================================================
// == NOUVEL AJOUT : IMPORTER LA PAGE DES CONSULTATIONS =====
import Consultations from './pages/Consultations'; 
// =========================================================

function App() {
  return (
    // Le div principal qui contient toute l'application
    <div className="App">
      <Navbar />
      
      {/* Le contenu principal des pages qui change */}
      <main>
        <Routes>
          {/* Routes principales */}
          <Route path="/" element={<Home />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* ========================================================= */}
          {/* == NOUVEL AJOUT : LA ROUTE VERS LA PAGE CONSULTATIONS ==== */}
          <Route path="/consultations" element={<Consultations />} />
          {/* ========================================================= */}
          
          {/* Routes pour les consultations spécifiques (détails) */}
          <Route path="/astrologie" element={<Astrology />} />
          <Route path="/geomancie" element={<Geomancy />} />
          <Route path="/numerologie" element={<Numerology />} />
          
          {/* Route pour la page de réservation */}
          <Route path="/booking" element={<Booking />} />
          
          {/* Route "catch-all" pour les pages non trouvées */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Le bouton WhatsApp est placé ici, à la fin, pour être au-dessus de tout */}
      <WhatsAppButton />
    </div>
  );
}

export default App;