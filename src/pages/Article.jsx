
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import sanityClient from '../sanityClient';
import BlockContent from '@sanity/block-content-to-react';
import './Article.css';


const serializers = {
  types: {
    h1: (props) => <h1 {...props} />,
    h2: (props) => <h2 {...props} />,
    h3: (props) => <h3 {...props} />,
    blockquote: (props) => <blockquote {...props} />,
  },
  marks: {
    link: ({ mark, children }) => {
      const { blank, href } = mark;
      return blank ? (
        <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
      ) : (
        <a href={href}>{children}</a>
      );
    },
  },
};

function Article() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    
    sanityClient.fetch(`*[_type == "post" && slug.current == $slug][0]{ title, _id, slug, mainImage{ asset->{ _id, url }}, body, "name": author->name }`, { slug })
      .then((data) => setPost(data))
      .catch(console.error);
  }, [slug]);

  if (!post) return <div className="text-center p-8">Chargement...</div>;

  return (
    <article className="article-container">
      <header className="article-header">
        <h1 className="article-title">{post.title}</h1>
        <p className="article-author">Par {post.name}</p>
      </header>
      
      {post.mainImage && (
        <img 
          className="article-main-image" 
          src={post.mainImage.asset.url} 
          alt={post.title} 
        />
      )}
      
      {}
      <div className="article-body">
        <BlockContent
          blocks={post.body}
          projectId={import.meta.env.VITE_SANITY_PROJECT_ID}
          dataset="production"
          serializers={serializers} 
        />
      </div>
    </article>
  );
}

export default Article;