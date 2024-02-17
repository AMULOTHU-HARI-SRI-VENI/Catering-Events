import React, { useState } from 'react';
import './LinkWithDropdown.css'; // Import CSS file for styling

const LinkWithDropdown = () => {
  const [leftDropdown, setLeftDropdown] = useState(false);
  const [rightDropdown, setRightDropdown] = useState(false);

  const toggleLeftDropdown = () => {
    setLeftDropdown(!leftDropdown);
  };

  const toggleRightDropdown = () => {
    setRightDropdown(!rightDropdown);
  };

  return (
    <div className="home-page">
      <div className="links-container">
        <div className="left-links">
          <div className="link" onMouseEnter={toggleLeftDropdown} onMouseLeave={toggleLeftDropdown}>
            <a href="#">ABOUT</a>
            {leftDropdown && (
              <div className="dropdown-content">
                <ul>
                <li><a href="#">ABOUT 24 CARROTS</a></li>
                <li><a href="#">TEAM</a></li>
                <li><a href="#">AWARDS&PRESS</a></li>
                <li><a href="#">BLOG</a></li>
                </ul>
              </div>
            )}
          </div>
          <div className="link" onMouseEnter={toggleLeftDropdown} onMouseLeave={toggleLeftDropdown}>
            <a href="#">SERVICES</a>
            {leftDropdown && (
              <div className="dropdown-content">

                <ul>
                <li><a href="#">GOURMENT TRAINING</a></li>
                <li><a href="#">BAR SERVICE</a></li>
                <li><a href="#">STAFFING</a></li>
                <li><a href="#">PRODUCTION</a></li>
                </ul>
              </div>
            )}
          </div>
          <div className="link" onMouseEnter={toggleLeftDropdown} onMouseLeave={toggleLeftDropdown}>
            <a href="#">EVENTS</a>
            {leftDropdown && (
              <div className="dropdown-content">
                <ul>
                <li><a href="#">WEDDINGS</a></li>
                <li><a href="#">CORPORATE</a></li>
                <li><a href="#">SOCIAL</a></li>
                <li><a href="#">GALLERY</a></li>
                </ul>
              </div>
            )}
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default LinkWithDropdown;
