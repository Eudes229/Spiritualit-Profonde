// src/pages/Article.jsx (Version finale corrigée et optimisée)

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import sanityClient from '../sanityClient';
import BlockContent from '@sanity/block-content-to-react';
import './Article.css';

// Les serializers pour le contenu riche de Sanity
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
  const [post, setPost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    // REQUÊTE SANITY ENRICHIE POUR LE SEO
    const query = `*[_type == "post" && slug.current == $slug][0]{
        title,
        _id,
        slug,
        mainImage{
          asset->{
            _id,
            url
          }
        },
        body,
        "name": author->name,
        publishedAt,
        excerpt // CHAMP SEO : le résumé de l'article
    }`;
    
    sanityClient.fetch(query, { slug })
      .then((data) => setPost(data))
      .catch(console.error);
  }, [slug]);

  if (!post) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Chargement de l'article...</p>
      </div>
    );
  }

  // PRÉPARATION DES DONNÉES SEO (À L'INTÉRIEUR DU COMPOSANT)
  const pageUrl = `https://spiritualiteprofonde.com/actualites/${post.slug.current}`;
  const pageTitle = `${post.title} | Spiritia`;
  const pageDescription = post.excerpt || (post.body ? new BlockContent({ blocks: [post.body[0]] }).toJSON().join('').substring(0, 155) + '...' : "Découvrez cet article sur Spiritia.");

  return (
    // ON UTILISE UN FRAGMENT <> POUR ENTOURER LE JSX
    <>
      {/* ====================================================== */}
      {/* SEO PUISSANT ET DYNAMIQUE POUR L'ARTICLE            */}
      {/* ====================================================== */}
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={pageUrl} />

        {/* --- OPEN GRAPH (Facebook, WhatsApp, etc.) --- */}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={post.mainImage?.asset?.url} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Spiritia" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="article:published_time" content={post.publishedAt} />
        <meta property="article:author" content={post.name || 'Spiritia'} />

        {/* --- TWITTER CARDS --- */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={post.mainImage?.asset?.url} />

        {/* --- DONNÉES STRUCTURÉES (SCHEMA.ORG) pour l'Article --- */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Article",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "${pageUrl}"
              },
              "headline": "${post.title.replace(/"/g, '\\"')}",
              "description": "${pageDescription.replace(/"/g, '\\"')}",
              "image": "${post.mainImage?.asset?.url}",
              "author": {
                "@type": "Person",
                "name": "${post.name || 'Spiritia'}"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Spiritia",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://spiritualiteprofonde.com/images/logoact.jpeg"
                }
              },
              "datePublished": "${post.publishedAt}"
            }
          `}
        </script>
      </Helmet>
      {/* ====================================================== */}
      {/* FIN DU BLOC SEO                                        */}
      {/* ====================================================== */}

      <article className="article-container">
        <header className="article-header">
          <h1 className="article-title">{post.title}</h1>
          <p className="article-author">Par {post.name || 'Spiritia'}</p>
        </header>
        
        {post.mainImage && (
          <img 
            className="article-main-image" 
            src={post.mainImage.asset.url} 
            alt={post.title} 
          />
        )}
        
        <div className="article-body">
          <BlockContent
            blocks={post.body}
            projectId={import.meta.env.VITE_SANITY_PROJECT_ID || 'VOTRE_ID_DE_PROJET_SANITY'}
            dataset="production"
            serializers={serializers} 
          />
        </div>
      </article>
    </>
  );
}

export default Article;