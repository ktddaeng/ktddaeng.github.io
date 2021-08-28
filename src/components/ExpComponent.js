import React from 'react';
import '../demo.css';
import { BLURBS } from '../shared/blurb';
import { EXPERIENCES } from '../shared/exp';

function Experience() {

  //makes a uniform accordion item
  const experiences = EXPERIENCES.map((exp, i) => {
    return (
      <div className="accordion-item" key={i}>
        <p className="accordion-header" id={"heading" + exp.name}>
          <button className={"accordion-button" + (i > 0 ? ' collapsed' : '')}
            data-bs-toggle="collapse" data-bs-target={"#" + exp.name} type="button"
            aria-expanded="false" aria-controls={exp.name}
            >
            {exp.company}
          </button>
        </p>
        <div id={exp.name} className={"accordion-collapse collapse" + (i == 0 ? ' show' : '')}
          aria-labelledby={"heading" + exp.name}
          data-bs-parent="#expAccordion">
          <div className="accordion-body">
            <h3>{exp.title} | {exp.company}</h3>
            <h6>{exp.year_start} - {exp.year_end}</h6>
            <ul>
            {exp.description.map((bullet, j) => {
              return (
                <li key={j}>{bullet}</li>
              )
            })}
            </ul>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="dumExp" id="exp">
      <h2 className="display-3">{BLURBS.exp.header}</h2>
      <div className="accordion accordion-flush" id="expAccordion">
        {experiences}
      </div>
    </div>
  );
}

export default Experience;
