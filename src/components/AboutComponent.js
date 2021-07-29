import React from 'react';
import '../demo.css';
import Skills from './SkillsComponent.js';
import { LoremIpsum, Avatar } from 'react-lorem-ipsum';

function About(props) {
  return (
    <div className="dum dumAbout" id="about">
      <h1>Who Am I?</h1>
      <Avatar gender="female"/>
      <LoremIpsum p={2} avgSentencesPerParagraph={6}/>
      <Skills/>
    </div>
  );
}

export default About;
