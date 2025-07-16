// src/pages/Actualites.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import sanityClient from '../sanityClient';

function Actualites() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    // La requête pour récupérer les articles (en langage GROQ de Sanity)
    sanityClient.fetch(`*[_type == "post"]{
        title,
        slug,
        mainImage{
          asset->{
            _id,
            url
          }
        },
        "name": author->name,
      }`)
      .then((data) => setPosts(data))
      .catch(console.error);
  }, []);

  if (!posts) return <div>Chargement...</div>;

  return (
    <main>
      <h1>Actualités du Blog</h1>
      <div>
        {posts.map((post) => (
          <article key={post.slug.current}>
            <Link to={`/actualites/${post.slug.current}`}>
              {post.mainImage && <img src={post.mainImage.asset.url} alt={post.title} />}
              <h2>{post.title}</h2>
              <span>Par {post.name}</span>
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}

export default Actualites;