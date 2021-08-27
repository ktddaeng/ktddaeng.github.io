import React, { useState } from 'react';
import '../demo.css';
import { PROJECTS } from '../shared/projects';
import { BLURBS } from '../shared/blurb';
import { SKILLS } from '../shared/skills';
import { searchItems } from '../shared/utils';
// import clsx from 'clsx';

function Archive() {
  //default value for selection
  const [discParam, setDiscParam] = useState("all");

  //makes a uniform card for each project
  const projects = searchItems(PROJECTS, discParam).map((project, i) => {
    //if empty first object then return a "no results" message
    if (i === 0 && project == null) {
      return (
        <div>
          No matching results.
        </div>
      );
    }

    //otherwise render proper card
    return (
      <div className="card bg-dark m-2 p-2" key={project.id} id={project.id}>
        <div className="d-flex">
          <h3>{project.name}</h3>
          <div className="ps-2">
            {project.urls.map((url, i) => {
              return (
                <span className="pe-2" title={url.label} key={i}>
                  <a href={url.href} target="_blank" rel="noreferrer"><i className={url.icon}></i></a>
                </span>
              )
            })}
          </div>
        </div>
        <p>{project.company} · {project.date}</p>
        <p>{project.description}</p>
        <div className="d-flex">
          {project.skills.map((tag, i) => {
            return (
              <span className="tag me-2 p-1" key={i}>{tag}</span>
            )
          })}
        </div>
      </div>
    );
  });

  // //makes uniform button for filtering tray
  // //puts filter button at top and bottom in case of overflow
  // const filterbutton =
  // <div className="btn btn-outline-light" type="submit" role="button"
  //   data-bs-dismiss="offcanvas" onclick={handleSubmit}>
  //     Filter Results
  // </div>;
  //
  // //makes uniform radio buttons for filtering disciplines
  // const radiodiscipline = SKILLS.categories.map((skill, i) => {
  //   return (
  //     <div key={i}>
  //       <input type="radio"
  //         id={skill.name}
  //         name="filterdiscipline"/>
  //       <label htmlFor={skill.name}>
  //         {skill.display}
  //       </label>
  //     </div>
  //   );
  // });
  //
  // //makes uniform check list for filtering core skills
  // const checkskills = SKILLS.skills.map((skill, i) => {
  //   return (
  //     <div key={i}>
  //       <input type="checkbox"
  //         name="filterskill"/>
  //       <label htmlFor={skill.name}
  //         value={skill.name}>
  //         {skill.name}
  //       </label>
  //     </div>
  //   );
  // });

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
      <div className="form-check-inline" key={i}>
        <input type="radio" className="btn-check" name="skillbtn"
          value={disc.name} id={"skillbtn" + disc.name}
          onChange={(e) => { setDiscParam(e.target.value) }}/>
        <label className="btn btn-primary" htmlFor={"skillbtn" + disc.name}>{disc.display}</label>
      </div>
    );
  });

  return (
    <div className="dum dumArchive">
      <div className="d-flex flex-row justify-content-between">
        <h2 className="display-3">{BLURBS.archive.header}</h2>
        {/*<div className="btn btn-outline-light btn-skill"
          role="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvas"
          aria-controls="offcanvas">
          <i className={clsx("me-2", "bi-funnel")}></i>
          Filter
        </div> */}
      </div>
      {/* Button select to filter skills.
        Only visible for larger screens*/}
      <div className="d-none d-md-block .d-lg-none .d-xl-none text-center">
        {skillbuttons}
      </div>
      {/* Select option to filter skills.
        Only visible on smaller/medium screens*/}
      <select className="d-md-none" name="disciplines" id="select-disc"
        aria-label="Filter by Discipline"
        value={discParam}
        onChange={(e) => {
          setDiscParam(e.target.value)
          document.getElementById("skillbtn" + e.target.value).checked = true;
        }}
        >
        {skilldrops}
      </select>
      <div className="card-deck">
        {projects}
      </div>
      {/*
      <div className="offcanvas offcanvas-end bg-dark"
        tabIndex="-1" id="offcanvas"
        aria-labelledby="offcanvasLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasLabel">Filter Projects</h5>
          <button type="button"
            className="btn-close btn-close-white text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          {filterbutton}
          <h6>By Discipline</h6>
          <div className="form-check">
            {radiodiscipline}
          </div>
          <h6>By Skills</h6>
          <div className="form-check">
            {checkskills}
          </div>
          {filterbutton}
        </div>
      </div> */}
    </div>
  );
}

export default Archive;
