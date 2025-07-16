import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import sanityClient from '../sanityClient';
import BlockContent from '@sanity/block-content-to-react';

const serializers = {

  types: {

    h1: (props) => <h1 className="text-4xl font-bold my-6" {...props} />,

    h2: (props) => <h2 className="text-3xl font-bold my-5" {...props} />,

    h3: (props) => <h3 className="text-2xl font-bold my-4" {...props} />,

    blockquote: (props) => <blockquote className="border-l-4 border-gray-400 pl-4 italic my-4" {...props} />,
    
  },

  marks: {
    link: ({ mark, children }) => {

      const { blank, href } = mark;
      return blank ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
          {children}
        </a>
      ) : (
        <a href={href} className="text-blue-600 hover:underline">{children}</a>
      );
    },
  },
};

function Article() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();

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

  if (!post) return <div className="text-center p-8">Chargement...</div>;

  return (

    <article className="max-w-3xl mx-auto p-4 md:p-8">
      <h1 className="text-5xl font-extrabold mb-2">{post.title}</h1>
      <p className="text-gray-600 mb-6">Par {post.name}</p>
      
      {post.mainImage && (
        <img 
          className="w-full h-auto object-cover rounded-lg mb-8" 
          src={post.mainImage.asset.url} 
          alt={post.title} 
        />
      )}
      
      { }
      <div className="prose lg:prose-xl max-w-none">
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