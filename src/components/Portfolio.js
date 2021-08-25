import React from 'react';
import '../demo.css';
import { BLURBS } from '../shared/blurb';
import { PROJECTS } from '../shared/projects';
import { Avatar } from 'react-lorem-ipsum';

function Portfolio() {

  //makes a uniform card item for a featured project
  const featprojects = PROJECTS.filter((project) => {
    //only render featured projects
    return project.featured === true;
  }).map((project, i) => {
    return (
      <div className="card m-2 p-2 flex-md-row" key={i}>
        <img src="..." className="card-img-top" alt={project.name + " thumbnail"}/>
        <div className="card-body">
          <p>{project.company}</p>
          <h3>{project.name}</h3>
          <div className="d-flex">
            {project.urls.map((url, i) => {
              return (
                <span className="pe-2" title={url.label} key={i}>
                  <a href={url.href} target="_blank" rel="noreferrer"><i className={url.icon}></i></a>
                </span>
              )
            })}
          </div>
          <p>{project.description}</p>
          <div className="d-flex">
            {project.skills.map((tag, i) => {
              return (
                <span className="tag me-2 p-1" key={i}>{tag}</span>
              )
            })}
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="dumSkills" id="portfolio">
      <h1 className="display-3">{BLURBS.projects.header}</h1>
      <div>
        {featprojects}
      </div>
      <h6><a href="/archive">Check out my full portfolio</a></h6>
    </div>
  );
}

export default Portfolio;
