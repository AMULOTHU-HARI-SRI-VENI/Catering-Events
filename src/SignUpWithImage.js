import React from 'react';
import './SignUpWithImage.css';
import Content from './Content';
function SignUpWithImage() {
  return (
    <div className="container">
      <div className="image-section">
        <img src="image2.jpg" alt="img" />
      </div>
      <div className="signup-section">
        <div><Content 
         heading ="Endless Inspiration"
         text ="Sign up to our newsletter for fresh updates, encouragement, and exclusive insights."/>
        </div>
        <div className="spacer" />
        <button>Sign Up</button>
      </div>
    </div>
  );
}

export default SignUpWithImage;
