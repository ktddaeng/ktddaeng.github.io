import React from 'react';
import '../demo.css';
import { PROJECTS } from '../shared/projects';
import { BLURBS } from '../shared/blurb';
import { SKILLS } from '../shared/skills';
import clsx from 'clsx';

function Archive() {
  //function to bring out filtering tray and process results filtering
  function filterResults() {
    console.log("opening filtering tray");
  }

  //makes a uniform card for each project
  const projects = PROJECTS.map((project) => {
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

  return (
    <div className="dum dumArchive">
      <div className="d-flex flex-row justify-content-between">
        <h2>{BLURBS.archive.header}</h2>
        <div className="btn btn-outline-light btn-skill" role="button"
          onClick={filterResults}>
          <i className={clsx("me-2", "bi-funnel")}></i>
          Filter
        </div>
      </div>
      <div className="card-deck">
        {projects}
      </div>
    </div>
  );
}

export default Archive;
