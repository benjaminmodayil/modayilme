import React from 'react';

function ArrowRight({ height = 21, width = 25, className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={`fill-current ${className}`}
    >
      <g fill="none" fillRule="evenodd">
        <path d="M-1.505-6h27.736v33.085H-1.505z"></path>
        <path
          stroke="#9FAEC0"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M23.26 10.543H1.466M15.335 1.09l7.924 9.452-7.924 9.453"
        ></path>
      </g>
    </svg>
  );
}

export default ArrowRight;
