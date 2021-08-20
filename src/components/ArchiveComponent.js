import React from 'react';
import '../demo.css';
import { PROJECTS } from '../shared/projects';
import { BLURBS } from '../shared/blurb';
import clsx from 'clsx';

function Archive() {
  //function to bring out filtering tray and process results filtering
  function filterResults() {
    console.log("opening filtering tray");
  }

  //makes a uniform card for each project
  const projects = PROJECTS.map((project) => {
    return (
      <div className="card bg-dark" key={project.id} id={project.id}>
        <p>
          {project.name}
        </p>
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
