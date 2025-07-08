import React from 'react';

function GalleryItem({ image, title, description }) {
  return (
    <div className="gallery-item">
      <img src={image} alt={title} className="gallery-image" />
      <div className="gallery-item-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default GalleryItem;