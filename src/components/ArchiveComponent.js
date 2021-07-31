import React from 'react';
import '../demo.css';
import { PROJECTS } from '../shared/projects';

function Archive(props) {
  const projects = PROJECTS.map((project) => {
    return (
      <div className="card bg-dark" id={project.id}>
        <p>
          {project.name}
        </p>
      </div>
    );
  });

  return (
    <div className="dum dumArchive">
      <div class="card-deck">
        {projects}
      </div>
    </div>
  );
}

export default Archive;
