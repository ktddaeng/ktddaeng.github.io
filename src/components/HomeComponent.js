import React from 'react';
import Landing from './LandingComponent.js';
import About from './AboutComponent.js';
import Contact from './ContactComponent.js';
import Experience from './ExpComponent.js';
import Portfolio from './Portfolio.js';

function Home() {
  return (
    <div id="home">
      <Landing/>
      <About/>
      <Experience/>
      <Portfolio/>
      <Contact/>
    </div>
  );
}

export default Home;
