import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import FloatingSocials from './components/FloatingSocials';

import Article from './pages/Article';
import Actualites from './pages/Actualites';
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

    <div className="App">
    
      {/* Navbar visible sur toutes les pages */}
      <Navbar />

      {/* Le contenu principal qui changera en fonction de l'URL */}
      <main>
        <Routes>
          {/* --- ROUTES PRINCIPALES --- */}
          <Route path="/" element={<Home />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* --- ROUTES DES SERVICES --- */}
          <Route path="/consultations" element={<Consultations />} />
          <Route path="/actualites" element={<Actualites />} /> {/* La liste des articles */}
          <Route path="/actualites/:slug" element={<Article />} /> {/* Un article unique */}
          <Route path="/astrologie" element={<Astrology />} />
          <Route path="/geomancie" element={<Geomancy />} />
          <Route path="/numerologie" element={<Numerology />} />
          
          {/* --- AUTRES ROUTES --- */}
          <Route path="/booking" element={<Booking />} />
          
          {/* Route "catch-all" pour les pages non trouvées (doit toujours être en dernier) */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Barre sociale flottante, visible sur toutes les pages */}
      <FloatingSocials />
    </div>
  );
}

export default App;