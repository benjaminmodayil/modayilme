import React, { useEffect } from 'react';
import LinkedIn from '../images/icon-linkedin.svg';
import Instagram from '../images/icon-instagram.svg';
import Twitter from '../images/icon-twitter.svg';
import Letter from '../images/icon-letter.svg';
import Mixer from '../images/icon-mixer.svg';

const SocialLinks = () => {
  useEffect(() => {
    require('../../node_modules/mailtoui/dist/mailtoui-min.js').run();
  });

  return (
    <ul className="list-reset flex justify-between max-w-xs mx-auto mt-12 items-center">
      <li>
        <a
          href="https://www.twitter.com/modayilme"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Twitter} alt="Twitter" />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/benjamin-modayil/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={LinkedIn} alt="LinkedIn" />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/modayilme"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Instagram} alt="Instagram" />
        </a>
      </li>
      <li>
        <a
          href="https://www.mixer.com/movemathew"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Mixer} alt="Mixer" />
        </a>
      </li>
      <li>
        <a
          className="mailtoui"
          href="mailto:modayilme@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Letter} alt="Email" />
        </a>
      </li>
    </ul>
  );
};

export default SocialLinks;
