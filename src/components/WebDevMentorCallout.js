import React from 'react';
import Link from '../components/Link';

export default function WebDevMentorCallout() {
  // TODO: make into a compound component https://kentcdodds.com/blog/compound-components-with-react-hooks
  return (
    <section className="mt-128 pb-64 lg-mb-192 px-24 md-px-0 lg-px-0">
      <h2 className="font-normal text-18 text-gray-800 leading-none text-center">
        Looking to learn web development?
      </h2>
      <p className="max-w-md mx-auto mt-16 font-sans leading-relaxed">
        While I’m not so equipped to provide a full replacement for a web development
        bootcamp… yet, I love teaching and helping prospective developers join the web
        community.
      </p>
      <div className="flex justify-center mt-16">
        <Link to="/contact" title="contact me" style="cta">
          contact me
        </Link>
      </div>
    </section>
  );
}
