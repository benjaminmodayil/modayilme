import React from 'react';

function IconTailwind({ width = 54, height = 33 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height}>
      <defs>
        <linearGradient id="a" x1="-0.028" x2="1" y1="0" y2="0.988">
          <stop offset="0" stopColor="#2298BD"></stop>
          <stop offset="1" stopColor="#0ED7B5"></stop>
        </linearGradient>
      </defs>
      <path
        fill="url(#a)"
        fillRule="evenodd"
        d="M10 6.667Q12 0 20 0c4.957 0 7.227 1.92 9.187 3.578C30.391 4.596 31.48 5.516 33 5.833q4 .834 7-2.5Q38 10 30 10c-4.957 0-7.227-1.92-9.187-3.578C19.609 5.404 18.52 4.484 17 4.167q-4-.834-7 2.5zm-10 10Q2 10 10 10c4.957 0 7.227 1.92 9.187 3.578 1.204 1.018 2.292 1.938 3.813 2.255q4 .834 7-2.5Q28 20 20 20c-4.957 0-7.227-1.92-9.187-3.578C9.609 15.404 8.52 14.484 7 14.167c-2.667-.556-5 .277-7 2.5z"
      ></path>
    </svg>
  );
}

export default IconTailwind;
