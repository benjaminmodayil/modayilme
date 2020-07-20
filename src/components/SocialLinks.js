import React, { useEffect } from 'react';
import LinkedIn from '../images/IconLinkedIn.jsx';
import Instagram from '../images/IconInstagram.jsx';
import Twitter from '../images/IconTwitter.jsx';
import Email from '../images/IconLetter.jsx';
import Twitch from '../images/IconTwitch.jsx';

const SocialLinks = () => {
  useEffect(() => {
    require('../../node_modules/mailtoui/dist/mailtoui-min.js').run();
  });

  return (
    <ul className="flex justify-between mx-auto items-center w-192 lg-w-128">
      <li>
        <a
          className="group"
          href="https://www.twitter.com/24props"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter width={16} className="group-hover-text-gray-500" title="Twitter" />
        </a>
      </li>
      <li>
        <a
          className="group"
          href="https://www.linkedin.com/in/benjamin-modayil/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn width={16} className="group-hover-text-gray-500" title="LinkedIn" />
        </a>
      </li>
      <li>
        <a
          className="group"
          href="https://www.instagram.com/24props"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram width={16} className="group-hover-text-gray-500" title="Instagram" />
        </a>
      </li>
      <li>
        <a
          className="group"
          href="https://www.twitch.tv/24props"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitch width={16} className="group-hover-text-gray-500" title="Twitch" />
        </a>
      </li>
      <li>
        <a
          className="mailtoui group"
          href="mailto:modayilme@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Email width={16} className="group-hover-text-gray-500" title="Email" />
        </a>
      </li>
    </ul>
  );
};

export default SocialLinks;
