import React from 'react';
import './ImageGallery.css';
function ImageGallery({ images }) {
  return (
    <div className="image-gallery">
      <div className="image-container">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`img ${index}`} />
        ))}
      </div>
    </div>
  );
}

export default ImageGallery;
