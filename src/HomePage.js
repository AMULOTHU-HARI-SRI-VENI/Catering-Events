import React from 'react';
import './App.css'; // Assuming you have some CSS file for styling
import LinkWithDropdown from './LinkWithDropdown';

function HomePage() {
  return (
    <div className="container">
      <div>
        <LinkWithDropdown />
      </div>
      <div className="header">
        <h2 alt="h2">24 CARROTS</h2>
      </div>
      <div className="right-links">
        <a href="#">VENUE</a>
        <a href="#">CAREERS</a>
        <button className='curved-button'>GET IN TOUCH</button>
      </div>
    </div>
  );
}

export default HomePage;
