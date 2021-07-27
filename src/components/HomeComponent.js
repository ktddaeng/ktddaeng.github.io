import React from 'react';
import Landing from './LandingComponent.js';
import About from './AboutComponent.js';
import Contact from './ContactComponent.js';
import Experience from './ExpComponent.js';
import Skills from './SkillsComponent.js';
import Portfolio from './Portfolio.js';

function Home(props) {
  return (
    <div id="home">
      <Landing/>
      <About/>
      <Skills/>
      <Experience/>
      <Portfolio/>
      <Contact/>
    </div>
  );
}

export default Home;
