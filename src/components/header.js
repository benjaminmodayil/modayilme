import React from 'react';

const Header = ({ primary, secondary }) => (
  <header className="mb-32 mt-128 px-4">
    <div>
      <div className="text-center mx-auto flex justify-center max-w-ch-12 bg-gray-100 rounded shadow">
        <h1
          className="heading text-48 w-full mx-auto -mt-24 absolute"
          dangerouslySetInnerHTML={{ __html: primary }}
        />
        <p
          className="text-18 font-light leading-normal pt-48 pb-24 mx-auto"
          dangerouslySetInnerHTML={{ __html: secondary }}
        />
      </div>
    </div>
  </header>
);

export default Header;
