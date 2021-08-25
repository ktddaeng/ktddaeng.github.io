import React from 'react';
import '../demo.css';
import Skills from './SkillsComponent.js';
import { BLURBS } from '../shared/blurb';
import { LoremIpsum, Avatar } from 'react-lorem-ipsum';

function About() {
  return (
    <div className="dumAbout" id="about">
      <h1 className="display-3">{BLURBS.about.header}</h1>
      <Avatar gender="female"/>
      <LoremIpsum p={2} avgSentencesPerParagraph={6}/>
      <Skills/>
    </div>
  );
}

export default About;
