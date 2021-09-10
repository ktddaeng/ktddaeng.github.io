import React from 'react';
import '../demo.css';
import clsx from 'clsx';

function Footer() {
  return (
    <div className="compFooter text-center py-3">
      {/*<h6>
        <i className={clsx("footerIcon", 'bi-flower2')}></i> coded by <a className="link-square p-1" href="https://github.com/ktddaeng"><span>ktddaeng</span></a>
      </h6>*/}
      <h6><a className="link-square p-2" href="https://github.com/ktddaeng"><span>
        <i className={clsx("footerIcon", 'bi-flower2')}></i>
        coded by ktddaeng
      </span></a></h6>
    </div>
  );
}

export default Footer;
