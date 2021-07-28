import React from 'react';
import '../demo.css';
import SmoothScroll from 'smooth-scroll';

function Header(props) {
  var easeInOutQuad = new SmoothScroll(
    '[data-easing="easeInOutQuad"]',
    {easing: 'easeInOutQuad'}
  );

  return (
    <div className="fixed-top">
      <nav id="navbar" className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/#home">KD</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class Name="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link" href="/#about">About</a>
              <a className="nav-link" href="/#portfolio">Portfolio</a>
              <a className="nav-link" href="/#contact">Contact</a>
              <a className="nav-link" href="/archive">Archive</a>
              <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Resume</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
