import React, { useState } from 'react';
import '../demo.css';
import { BLURBS } from '../shared/blurb';
import { SKILLS } from '../shared/skills';

function Skills() {
  //default value for selection
  const [skillParam, setSkillParam] = useState("all");

  //function to filter items using some()
  function search(items) {
    console.log("obtaining new results " + skillParam);
    if (skillParam === "all") {
      return items;
    }

    return items.filter((item) => {
      return item.discipline.indexOf(skillParam) > -1;
    });
  }

  //makes a uniform card for each skill
  const skills = search(SKILLS.skills).map((skill, i) => {
    return (
      <div className="card bg-dark col-sm-5" key={i}>
        <p>
          {skill.name}
        </p>
      </div>
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
    // return (
    //   <div className="btn btn-primary btn-skill"
    //     role="button" buttonname={disc.name} key={disc.id} data-bs-toggle="button"
    //     onClick={(e) => {
    //       if (skillParam !== e.target.getAttribute('buttonname')) {
    //         setSkillParam (e.target.getAttribute('buttonname'))
    //       }
    //     }}>
    //     {disc.display}
    //   </div>
    // );
    return (
      <div className="form-check-inline" key={i}>
        <input type="radio" className="btn-check" name="skillbtn"
          value={disc.name} id={"skillbtn" + disc.name}
          onChange={(e) => { setSkillParam(e.target.value) }}/>
        <label className="btn btn-primary" htmlFor={"skillbtn" + disc.name}>{disc.display}</label>
      </div>
    );
  });

  return (
    <div className="dumSkills" id="skills">
      <h2 className="display-3">{BLURBS.skills.header}</h2>
      {/* Button select to filter skills.
        Only visible for larger screens*/}
      <div className="d-none d-md-block .d-lg-none .d-xl-none">
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
      <div className="row">
        {skills}
      </div>
    </div>
  );
}

export default Skills;
