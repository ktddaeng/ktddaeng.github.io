import React from 'react';
import '../demo.css';
import { BLURBS } from '../shared/blurb';
import { SKILLS } from '../shared/skills';

function Skills(props) {
  const skills = SKILLS.map((skill) => {
    return (
      <div className="card bg-dark col-sm-5">
        <p>
          {skill.name}
        </p>
      </div>
    );
  });

  return (
    <div className="dum dumSkills" id="skills">
      <h2>{BLURBS.skills.header}</h2>
      <div className="row">
        {skills}
      </div>
    </div>
  );
}

export default Skills;
