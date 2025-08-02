// src/main.jsx (Version finale et correcte)
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async'; // Outil SEO
import App from './App';
import './App.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <HelmetProvider> {/* On active l'outil pour toute l'application */}
        <App />
      </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode>
);