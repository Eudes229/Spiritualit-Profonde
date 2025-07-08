import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // <-- VÉRIFIER L'IMPORT
import App from './App';
import './App.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* VÉRIFIER QUE <BrowserRouter> ENTOURE BIEN <App /> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);