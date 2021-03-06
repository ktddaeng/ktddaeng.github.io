import React, { useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import '../demo.css';
import { BLURBS } from '../shared/blurb';
import { SKILLS } from '../shared/skills';
import { searchItems } from '../shared/utils';

function Skills() {
  //default value for selection
  const [skillParam, setSkillParam] = useState("all");

  //makes a uniform card for each skill
  const skills = searchItems(SKILLS.skills, skillParam).map((skill, i) => {
    return (
      <CSSTransition key={i}>
        <div className="card col-md-6 col-5 m-2 skill-card">
          <span className="align-middle">{skill.name}</span>
        </div>
      </CSSTransition>
    );
  });

  //makes uniform option object for each discipline
  const skilldrops = SKILLS.categories.map((disc, i) => {
    return (
      <option value={disc.name} key={i}>
        {disc.display}
      </option>
    );
  });

  //makes uniform button object for each discipline
  const skillbuttons = SKILLS.categories.map((disc, i) => {
    return (
      <div className="form-check-inline skill-button" key={i}>
        <input type="radio" className="btn-check" name="skillbtn"
          value={disc.name} id={"skillbtn" + disc.name}
          onChange={(e) => { setSkillParam(e.target.value) }}
          />
        <label htmlFor={"skillbtn" + disc.name}>{disc.display}</label>
      </div>
    );
  });

  return (
    <div className="dumSkills" id="skills">
      <h2 className="display-3">{BLURBS.skills.header}</h2>
      {/* Button select to filter skills.
        Only visible for larger screens*/}
      <div className="mb-2 d-none d-md-block .d-lg-none .d-xl-none text-center">
        {skillbuttons}
      </div>
      {/* Select option to filter skills.
        Only visible on smaller/medium screens*/}
      <select className="d-md-none" name="disciplines" id="select-disc"
        aria-label="Filter by Discipline"
        value={skillParam}
        onChange={(e) => {
          setSkillParam(e.target.value)
          document.getElementById("skillbtn" + e.target.value).checked = true;
        }}
        >
        {skilldrops}
      </select>
      {/* Displays the list of skills that fits the screen
        according to its size*/}
      <TransitionGroup className="row justify-content-center">
        {skills}
      </TransitionGroup>
    </div>
  );
}

export default Skills;
