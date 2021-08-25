import React from 'react';
import '../demo.css';

function Landing() {
  return (
    <div className="dumLanding">
      <p>Landing Component Here</p>
      <div className="dum"></div>
      <div className="display-3">
        <a href="#about">
          <i className="bi-arrow-down-circle"></i>
        </a>
      </div>
    </div>
  );
}

export default Landing;
