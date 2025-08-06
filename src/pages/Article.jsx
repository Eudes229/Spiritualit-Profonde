// src/pages/Article.jsx (Version Finale, Corrigée et Optimisée)

import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import sanityClient from '../sanityClient';
import BlockContent from '@sanity/block-content-to-react';
import './Article.css';

// Les serializers (inchangés, ils sont corrects)
const serializers = {
  types: {
    h1: (props) => <h1 className="text-4xl font-bold my-4" {...props} />,
    h2: (props) => <h2 className="text-3xl font-bold my-3" {...props} />,
    h3: (props) => <h3 className="text-2xl font-bold my-2" {...props} />,
    blockquote: (props) => <blockquote className="border-l-4 border-orange-500 pl-4 italic my-4" {...props} />,
  }, 
  marks: {
    link: ({ mark, children }) => {
      const { blank, href } = mark;
      return blank ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline">{children}</a>
      ) : (
        <a href={href} className="text-orange-400 hover:underline">{children}</a>
      );
    },
  },
};

function Article() {
  const [postData, setPostData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const { slug } = useParams();

  useEffect(() => {
    // =========================================================================
    // == REQUÊTE OPTIMISÉE QUI GÉNÈRE L'EXTRAIT AUTOMATIQUEMENT ==
    // =========================================================================
    const query = `*[_type == "post" && slug.current == $slug][0]{
        title,
        _id,
        slug,
        mainImage{asset->{_id,url}},
        body,
        "name": author->name,
        publishedAt,
        // Si le champ 'excerpt' est vide, crée un extrait à partir des 155 premiers caractères du corps du texte.
        "generatedExcerpt": coalesce(excerpt, pt::text(body[0]))[0...155]
    }`;
    
    sanityClient.fetch(query, { slug })
      .then((data) => {
        if (data) {
          setPostData(data);
        } else {
          setError(`L'article demandé est introuvable. Veuillez vérifier dans Sanity qu'il est bien "Publié" (et non en brouillon).`);
        }
      })
      .catch((err) => {
        console.error("Erreur de connexion à Sanity:", err);
        setError("Une erreur de communication avec la base de données est survenue.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [slug]);

  // GESTION DU CHARGEMENT (inchangé, c'est correct)
  if (isLoading) {
    return (
      <div className="loading-container" style={{ padding: '50px', textAlign: 'center' }}>
        <div className="spinner"></div>
        <p>Chargement de l'article...</p>
      </div>
    );
  }

  // GESTION DES ERREURS (inchangé, c'est correct)
  if (error) {
    return (
      <div className="error-container" style={{ padding: '50px', textAlign: 'center', color: '#333' }}>
        <h1 style={{ color: '#d9534f' }}>Oups, l'article est introuvable</h1>
        <p style={{ fontSize: '1.2em', margin: '20px auto', maxWidth: '600px' }}>{error}</p>
        <Link to="/actualites" style={{ display: 'inline-block', marginTop: '20px', padding: '12px 25px', backgroundColor: '#e88d2d', color: 'white', textDecoration: 'none', borderRadius: '5px', fontWeight: 'bold' }}>
            Retour à la liste des actualités
        </Link>
      </div>
    );
  }

  // AFFICHAGE DE L'ARTICLE (logique simplifiée)
  if (postData) {
    const pageUrl = `https://spiritualiteprofonde.com/actualites/${postData.slug.current}`;
    const pageTitle = `${postData.title} | Spiritia`;
    // On utilise maintenant notre extrait généré directement, c'est plus propre !
    const pageDescription = `${postData.generatedExcerpt}...` || `Découvrez l'article "${postData.title}" sur Spiritia.`;

    return (
      <>
        <Helmet>
          <title>{pageTitle}</title>
          <meta name="description" content={pageDescription} />
          <link rel="canonical" href={pageUrl} />
          {/* ... etc ... */}
        </Helmet>
        
        <article className="article-container">
          <header className="article-header">
            <h1 className="article-title">{postData.title}</h1>
            <p className="article-author">Par {postData.name || 'Spiritia'}</p>
          </header>
          
          {postData.mainImage && (
            <img 
              className="article-main-image" 
              src={postData.mainImage.asset.url} 
              alt={postData.title} 
            />
          )}
          
          {postData.body && (
            <div className="article-body">
              <BlockContent
                blocks={postData.body}
                projectId="qoljwjfa" 
                dataset="production"
                serializers={serializers} 
              />
            </div>
          )}
        </article>
      </>
    );
  }

  return null;
}

export default Article;