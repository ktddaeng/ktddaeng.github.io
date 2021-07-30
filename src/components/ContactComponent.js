import React from 'react';
import '../demo.css';
import { LINKS } from '../shared/links';
import clsx from 'clsx';
import { LoremIpsum, Avatar } from 'react-lorem-ipsum';

function Contact(props) {
  const linklist = LINKS.map((buttonlink) => {
    return (
      <a className="btn btn-outline-light" href={buttonlink.url}>
        <i className={clsx("me-2", buttonlink.icon)}></i>
        {buttonlink.name}
      </a>
    );
  });

  return (
    <div className="dum dumContact" id="contact">
      <h1>Where to Find Me</h1>
      <LoremIpsum avgSentencesPerParagraph={4}/>
      <div className="d-grid gap-2 d-md-block">
        {linklist}
      </div>
    </div>
  );
}

export default Contact;
