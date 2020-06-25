import React, { useState } from 'react';
import { Link } from 'gatsby';

const WorkPreviewCard = (props) => {
  return (
    <li className={'max-w-xs bg-white m-4 transition duration-150 ease-in'}>
      <Link
        to=""
        className="no-underline p-4 shadow-md hover-shadow-xl block w-full rounded-lg"
      >
        <h4 className="text-18 font-normal mb-4 text-purple-500 font-medium font-sans">
          Apprenticeships.me
        </h4>
        <ul className="flex">
          <li className="text-14 font-semibold bg-purple-200 rounded-full px-3 py-1 mr-2 text-purple-500">
            HTML
          </li>
          <li className="text-14 font-semibold bg-purple-200 rounded-full px-3 py-1 mr-2 text-purple-500">
            CSS
          </li>
          <li className="text-14 font-semibold bg-purple-200 rounded-full px-3 py-1 mr-2 text-purple-500">
            Netlify
          </li>
        </ul>
      </Link>
    </li>
  );
};

export default WorkPreviewCard;
