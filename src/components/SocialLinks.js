import React, { useState } from 'react';
import LinkedIn from '../images/icon-linkedin.svg';
import Instagram from '../images/icon-instagram.svg';
import Twitter from '../images/icon-twitter.svg';
import Letter from '../images/icon-letter.svg';
import Mixer from '../images/icon-mixer.svg';

const SocialLinks = () => {
  return (
    <ul className="list-reset flex justify-between max-w-xs mx-auto mt-12 items-center">
      <li>
        <a href="https://www.twitter.com/modayilme">
          <img src={Twitter} alt="Twitter" />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/benjamin-modayil/">
          <img src={LinkedIn} alt="LinkedIn" />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/modayilme">
          <img src={Instagram} alt="Instagram" />
        </a>
      </li>
      <li>
        <a href="https://www.mixer.com/modayilme">
          <img src={Mixer} alt="Mixer" />
        </a>
      </li>
      <li>
        <a className="mailtoui" href="mailto:modayilme@gmail.com">
          <img src={Letter} alt="Email" />
        </a>
      </li>
    </ul>
  );
};

export default SocialLinks;
