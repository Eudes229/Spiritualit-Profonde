// src/pages/Actualites.jsx (Version finale avec SEO Puissant intégré)

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async'; // <--- 1. IMPORTER L'OUTIL SEO
import sanityClient from '../sanityClient';
import './Actualites.css';

function Actualites() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    // La requête Sanity reste la même
    sanityClient.fetch(`*[_type == "post"] | order(_createdAt desc){
        title,
        slug,
        mainImage{
          asset->{
            _id,
            url
          }
        },
        "name": author->name,
        // Optionnel : récupérer un court extrait pour la description
        "excerpt": pt::text(body[0..1]),
      }`)
      .then((data) => setPosts(data))
      .catch(console.error);
  }, []);

  // Le spinner de chargement est une excellente pratique
  if (!posts) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Chargement des actualités...</p>
      </div>
    );
  }

  return (
    <>
      {/* ====================================================== */}
      {/* 2. SEO PUISSANT POUR LA PAGE D'ACTUALITÉS (BLOG)      */}
      {/* ====================================================== */}
      <Helmet>
        <title>Actualités & Blog Spirituel - Astrologie, Tarot, Rituels | Spiritia</title>
        <meta name="description" content="Découvrez nos derniers articles sur la spiritualité. Guides, conseils et actualités sur l'astrologie, la voyance, les rituels et le développement personnel." />
        <link rel="canonical" href="https://spiritualiteprofonde.com/actualites" />

        {/* --- OPEN GRAPH (Facebook, WhatsApp, etc.) --- */}
        <meta property="og:title" content="Actualités & Blog Spirituel | Spiritia" />
        <meta property="og:description" content="Explorez nos articles et guides pour approfondir votre chemin spirituel." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://spiritualiteprofonde.com/actualites" />
        <meta property="og:image" content="https://spiritualiteprofonde.com/images/logoact.jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Spiritia" />
        <meta property="og:locale" content="fr_FR" />

        {/* --- TWITTER CARDS --- */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Actualités & Blog Spirituel | Spiritia" />
        <meta name="twitter:description" content="Explorez nos articles et guides pour approfondir votre chemin spirituel." />
        <meta name="twitter:image" content="https://spiritualiteprofonde.com/images/logoact.jpeg" />
      </Helmet>
      {/* ====================================================== */}
      {/* FIN DU BLOC SEO                                        */}
      {/* ====================================================== */}

      <main className="actualites-container">
        <h1 className="actualites-title">Actualités & Blog Spirituel</h1>
        <p className="actualites-subtitle">Nos derniers articles pour éclairer votre chemin</p>
        <div className="actualites-grid">
          {posts.map((post) => (
            <Link to={`/actualites/${post.slug.current}`} key={post.slug.current} className="article-card">
              <div className="article-card-image-wrapper">
                <img 
                  src={post.mainImage ? post.mainImage.asset.url : '/images/default-blog.jpg'} // Utiliser une image par défaut locale
                  alt={post.title} 
                />
              </div>
              <div className="article-card-content">
                <h2 className="article-card-title">{post.title}</h2>
                <p className="article-card-excerpt">{post.excerpt || 'Cliquez pour lire la suite...'}</p>
                <span className="article-card-author">Par {post.name || 'Spiritia'}</span>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}

export default Actualites;