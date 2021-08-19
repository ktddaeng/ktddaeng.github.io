import React, { useState } from 'react';
import '../demo.css';
import { BLURBS } from '../shared/blurb';
import { SKILLS } from '../shared/skills';

function Skills() {
  //default value for selection
  const [skillParam, setSkillParam] = useState("all");

  //function to filter items using some()
  function search(items) {
    if (skillParam === "all") {
      return items;
    }

    return items.filter((item) => {
      return item.discipline.indexOf(skillParam) > -1;
    });
  }

  //makes a uniform card for each skill
  const skills = search(SKILLS.skills).map((skill) => {
    return (
      <div className="card bg-dark col-sm-5" key={skill.id}>
        <p>
          {skill.name}
        </p>
      </div>
    );
  });

  //makes uniform option object for each discipline
  const skilldrops = SKILLS.categories.map((disc) => {
    return (
      <option value={disc.name} key={disc.id}>
        {disc.display}
      </option>
    );
  });

  //makes uniform button object for each discipline
  const skillbuttons = SKILLS.categories.map((disc) => {
    return (
      <div className="btn btn-primary"
        role="button" buttonname={disc.name} key={disc.id}
        onClick={(e) => {
          if (skillParam != e.target.getAttribute('buttonname')) {
            setSkillParam (e.target.getAttribute('buttonname'))
          }
        }}>
        {disc.display}
      </div>
    );
  });

  return (
    <div className="dum dumSkills" id="skills">
      <h2>{BLURBS.skills.header}</h2>
      {/* Button select to filter skills.
        Only visible for larger screens*/}
      <div className="d-none d-md-block .d-lg-none .d-xl-none">
        {skillbuttons}
      </div>
      {/* Select option to filter skills.
        Only visible on smaller/medium screens*/}
      <select className="d-md-none" name="disciplines" id="select-disc"
        aria-label="Filter by Discipline"
        onChange={(e) => { setSkillParam(e.target.value) }}
        >
        {skilldrops}
      </select>
      {/* Displays the list of skills that fits the screen
        according to its size*/}
      <div className="row">
        {skills}
      </div>
    </div>
  );
}

export default Skills;
