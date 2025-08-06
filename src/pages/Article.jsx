// src/pages/Article.jsx (Version Finale, Robuste et Anti-Crash)

import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'; // <--- Link a été ajouté pour le message d'erreur
import { Helmet } from 'react-helmet-async';
import sanityClient from '../sanityClient';
import BlockContent from '@sanity/block-content-to-react';
import './Article.css';

// Les serializers pour le contenu riche de Sanity (inchangé)
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
  // GESTION DES 3 ÉTATS : CHARGEMENT, ERREUR, DONNÉES
  const [postData, setPostData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const { slug } = useParams();

  useEffect(() => {
    // REQUÊTE PLUS SÛRE
    const query = `*[_type == "post" && slug.current == $slug][0]{
        title, _id, slug, mainImage{asset->{_id,url}}, body, "name": author->name, publishedAt, excerpt
    }`;
    
    sanityClient.fetch(query, { slug })
      .then((data) => {
        if (data) {
          // Si des données sont trouvées, on les stocke
          setPostData(data);
        } else {
          // Si Sanity renvoie "null", on crée une erreur propre
          setError(`L'article demandé n'a pas été trouvé. Il est possible qu'il soit encore un brouillon (cliquez sur "Publier" dans Sanity) ou que le type (_type) soit incorrect dans le code.`);
        }
      })
      .catch((err) => {
        console.error("Erreur de connexion à Sanity:", err);
        setError("Une erreur de communication avec la base de données est survenue.");
      })
      .finally(() => {
        // Dans tous les cas, le chargement est terminé
        setIsLoading(false);
      });
  }, [slug]);

  // Affiche un message de chargement tant que la requête n'est pas terminée
  if (isLoading) {
    return (
      <div className="loading-container" style={{ padding: '50px', textAlign: 'center' }}>
        <div className="spinner"></div>
        <p>Chargement de l'article...</p>
      </div>
    );
  }

  // Affiche un message d'erreur clair et utile au lieu d'une page blanche
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

  // Si tout va bien (pas de chargement, pas d'erreur), on affiche l'article
  if (postData) {
    // Toutes les variables sont créées ici, en toute sécurité
    const pageUrl = `https://spiritualiteprofonde.com/actualites/${postData.slug.current}`;
    const pageTitle = `${postData.title} | Spiritia`;
    const pageDescription = postData.excerpt || (postData.body && postData.body.length > 0 ? new BlockContent({ blocks: [postData.body[0]] }).toJSON().join('').substring(0, 155) + '...' : `Découvrez l'article "${postData.title}" sur Spiritia.`);

    return (
      <>
        <Helmet>
          <title>{pageTitle}</title>
          <meta name="description" content={pageDescription} />
          <link rel="canonical" href={pageUrl} />
          <meta property="og:title" content={pageTitle} />
          <meta property="og:description" content={pageDescription} />
          <meta property="og:type" content="article" />
          <meta property="og:url" content={pageUrl} />
          <meta property="og:image" content={postData.mainImage?.asset?.url} />
          {/* ... et le reste de vos balises meta ... */}
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

  return null; // Fallback au cas où, ne rien afficher.
}

export default Article;