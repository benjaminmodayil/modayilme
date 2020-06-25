import React, { useContext } from 'react';
import Link from '../components/Link';
import SocialLinks from '../components/SocialLinks';

let links = [
  { name: 'Home', to: '/' },
  { name: 'Blog', to: '/blog' },
  { name: 'Project Log', to: '/project-log' },
  { name: 'Contact', to: '/contact' },
];

export default function Navigation({ location }) {
  return (
    <nav className="lowercase flex flex-col lg-flex-row items-center lg-justify-start text-14 font-medium container max-w-5xl">
      <div className="py-1 flex-1">
        <div className="border-b inline-flex justify-between w-256 mb-32 lg-mb-0">
          {links.map(({ name, to, isExternal }) => {
            return (
              <Link to={to} isExternal={isExternal} style="underline">
                {name}
              </Link>
            );
          })}
        </div>
      </div>
      <SocialLinks />
    </nav>
  );
}
