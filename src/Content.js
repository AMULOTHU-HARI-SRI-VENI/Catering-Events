import React from "react";
import './ComponentWithImage.css';
const Content =({text,heading}) =>{
    return (
        <div className="component-container">
          <div className="text-container">
            <h1>{heading}</h1>
            <p>{text}</p>
          </div>
          
        </div>
      );
};

export default Content;