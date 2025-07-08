// src/App.jsx (Version corrigée et optimisée)

import React from 'react';
import { Routes, Route } from 'react-router-dom';

// IMPORTS DES COMPOSANTS
import Navbar from './components/Navbar';
import WhatsAppButton from './components/WhatsAppButton'; 

// IMPORTS DE TOUTES LES PAGES
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Consultations from './pages/Consultations';
import Astrology from './pages/astrologie';
import Geomancy from './pages/geomancie';
import Numerology from './pages/numerologie';
import Booking from './pages/Booking';
import NotFound from './pages/NotFound';

function App() {
  return (
    // Le div principal qui contient toute l'application
    <div className="App">
      {/* La Navbar est toujours en haut, visible sur toutes les pages */}
      <Navbar />
      
      {/* 
        Le conteneur <main> a été retiré d'ici.
        Chaque composant de page (Home, About, etc.) doit maintenant
        avoir sa propre balise <main className="content"> pour que le style s'applique.
      */}
      <Routes>
        {/* --- ROUTES PRINCIPALES --- */}
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* --- ROUTES DES SERVICES --- */}
        <Route path="/consultations" element={<Consultations />} />
        <Route path="/astrologie" element={<Astrology />} />
        <Route path="/geomancie" element={<Geomancy />} />
        <Route path="/numerologie" element={<Numerology />} />
        
        {/* --- AUTRES ROUTES --- */}
        <Route path="/booking" element={<Booking />} />
        
        {/* Route pour les pages non trouvées (doit toujours être la dernière) */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Le bouton WhatsApp est toujours là, flottant au-dessus de tout */}
      <WhatsAppButton />
    </div>
  );
}

export default App;