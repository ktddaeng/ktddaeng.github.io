import React from 'react';
import Landing from './LandingComponent.js';
import About from './AboutComponent.js';
import Contact from './ContactComponent.js';
import Experience from './ExpComponent.js';
import Skills from './SkillsComponent.js';

function Home(props) {
  return (
    <div>
      <Landing/>
      <About/>
      <Skills/>
      <Experience/>
      <Contact/>
    </div>
  );
}

export default Home;
