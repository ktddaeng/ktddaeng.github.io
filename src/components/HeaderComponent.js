import React from 'react';
import '../demo.css';
import Headroom from 'react-headroom';

function Header() {

  return (
    <div>
      <Headroom>
      <nav id="navbar" className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/#home"><h2>&lt;kd&gt;</h2></a>
          <button className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvas"
            aria-controls="offcanvas" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse">
            <div className="navbar-nav">
              <a className="nav-link" href="/#about">About</a>
              <a className="nav-link" href="/#exp">Experience</a>
              <a className="nav-link" href="/#portfolio">Portfolio</a>
              <a className="nav-link" href="/#contact">Contact</a>
              <a className="link-square" href="/resumelink" tabIndex="-1" aria-disabled="true"><span>Resume</span></a>
            </div>
          </div>
        </div>
      </nav>
      </Headroom>
      <div className="offcanvas offcanvas-end bg-dark"
        tabIndex="-1" id="offcanvas"
        aria-labelledby="offcanvasLabel">
        <div className="offcanvas-header d-flex flex-row-reverse">
          <button type="button"
            className="btn-close btn-close-white text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <div><a href="/#about">About</a></div>
          <a href="/#exp">Experience</a>
          <a href="/#portfolio">Portfolio</a>
          <a href="/#contact">Contact</a>
          <a className="disabled" href="/resumelink" tabIndex="-1" aria-disabled="true">Resume</a>
        </div>
      </div>
    </div>
  );
}

/*
  <Link className="nav-link"
    to="/#about"
    spy={true}
    smooth={true}>About</Link>*/
export default Header;
