import React from 'react';
import '../demo.css';
import { PROJECTS } from '../shared/projects';
import { BLURBS } from '../shared/blurb';
import { SKILLS } from '../shared/skills';
import clsx from 'clsx';

function Archive() {
  //function to process results filtering
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
    //TODO: find way to filter results
  }

  //makes a uniform card for each project
  const projects = PROJECTS.map((project, i) => {
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

  //makes uniform button for filtering tray
  //puts filter button at top and bottom in case of overflow
  const filterbutton =
  <div className="btn btn-outline-light" type="submit" role="button"
    data-bs-dismiss="offcanvas" onclick={handleSubmit}>
      Filter Results
  </div>;

  //makes uniform radio buttons for filtering disciplines
  const radiodiscipline = SKILLS.categories.map((skill, i) => {
    return (
      <div key={i}>
        <input type="radio"
          id={skill.name}
          name="filterdiscipline"/>
        <label htmlFor={skill.name}>
          {skill.display}
        </label>
      </div>
    );
  });

  //makes uniform check list for filtering core skills
  const checkskills = SKILLS.skills.map((skill, i) => {
    return (
      <div key={i}>
        <input type="checkbox"
          name="filterskill"/>
        <label htmlFor={skill.name}
          value={skill.name}>
          {skill.name}
        </label>
      </div>
    );
  });

  return (
    <div className="dum dumArchive">
      <div className="d-flex flex-row justify-content-between">
        <h2 className="display-3">{BLURBS.archive.header}</h2>
        <div className="btn btn-outline-light btn-skill"
          role="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvas"
          aria-controls="offcanvas">
          <i className={clsx("me-2", "bi-funnel")}></i>
          Filter
        </div>
      </div>
      <div className="card-deck">
        {projects}
      </div>
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
      </div>
    </div>
  );
}

export default Archive;
