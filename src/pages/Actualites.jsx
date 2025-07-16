
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import sanityClient from '../sanityClient';
import './Actualites.css';

function Actualites() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    
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
      }`)
      .then((data) => setPosts(data))
      .catch(console.error);
    
  }, []);

  
  if (!posts) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Chargement des actualités...</p>
      </div>
    );
  }

  return (
    <main className="actualites-container">
      <h1 className="actualites-title">Actualités du Blog</h1>
      <div className="actualites-grid">
        {posts.map((post) => (
          <Link to={`/actualites/${post.slug.current}`} key={post.slug.current} className="article-card">
            <div className="article-card-image-wrapper">
              <img 
                src={post.mainImage ? post.mainImage.asset.url : 'url_image_par_defaut.jpg'} 
                alt={post.title} 
              />
            </div>
            <div className="article-card-content">
              <h2 className="article-card-title">{post.title}</h2>
              <span className="article-card-author">Par {post.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}

export default Actualites;