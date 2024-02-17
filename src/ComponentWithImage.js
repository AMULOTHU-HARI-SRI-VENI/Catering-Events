import React from 'react';
import './ComponentWithImage.css'; // Import CSS file for styling

const ComponentWithImage = ({ text, heading,imageUrl }) => {
  return (
    <div className="component-container">
      <div className="text-container">
        <h1>{heading}</h1>
        <p>{text}</p>
      </div>
      <div className="image-container">
        <img src={imageUrl} alt="img" />
      </div>
    </div>
  );
};

export default ComponentWithImage;
