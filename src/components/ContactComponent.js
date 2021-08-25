import React from 'react';
import '../demo.css';
import { LINKS } from '../shared/links';
import { BLURBS } from '../shared/blurb';
import clsx from 'clsx';
import { LoremIpsum } from 'react-lorem-ipsum';

function Contact() {
  //makes a uniform button for each link
  const linklist = LINKS.map((buttonlink) => {
    return (
      <a className="btn btn-outline-light"
        href={buttonlink.url}
        key={buttonlink.id}>
        <i className={clsx("me-2", buttonlink.icon)}></i>
        {buttonlink.name}
      </a>
    );
  });

  return (
    <div className="dumContact" id="contact">
      <h1 className="display-3">{BLURBS.contact.header}</h1>
      <LoremIpsum avgSentencesPerParagraph={4}/>
      <div className="d-grid gap-2 d-md-block">
        {linklist}
      </div>
    </div>
  );
}

export default Contact;
