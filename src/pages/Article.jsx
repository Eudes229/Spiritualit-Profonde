// src/pages/Article.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import sanityClient from '../sanityClient';
import BlockContent from '@sanity/block-content-to-react'; // Pour afficher le corps de l'article

function Article() {
  const [post, setPost] = useState(null);
  const { slug } = useParams(); // Récupère le :slug de l'URL

  useEffect(() => {
    sanityClient.fetch(`*[_type == "post" && slug.current == $slug][0]{
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
      }`, { slug })
      .then((data) => setPost(data))
      .catch(console.error);
  }, [slug]);

  if (!post) return <div>Chargement...</div>;

  return (
    <article>
      <h1>{post.title}</h1>
      <span>Par {post.name}</span>
      {post.mainImage && <img src={post.mainImage.asset.url} alt={post.title} />}
      {/* Pour le body, il faut un renderer spécial car c'est du contenu riche */}
      <BlockContent blocks={post.body} projectId={import.meta.env.VITE_SANITY_PROJECT_ID} dataset="production" />
    </article>
  );
}

export default Article;