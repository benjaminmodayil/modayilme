import React from 'react';

const Header = ({ primary, secondary }) => (
  <header className="mt-16 lg-mt-32 mb-8 lg-mb-24 mx-auto px-4 flex justify-center flex-col` max-w-ch-12">
    <div>
      <div className="text-center">
        <h1
          className="block font-special text-red-500 text-4xl lg-text-6xl text-center leading-none"
          dangerouslySetInnerHTML={{ __html: primary }}
        />
        <p
          className="text-lg lg-text-2xl font-light leading-normal mt-4 px-2 lg-px-0 lg-mt-8 mx-auto"
          dangerouslySetInnerHTML={{ __html: secondary }}
        />
      </div>
    </div>
  </header>
);

export default Header;
