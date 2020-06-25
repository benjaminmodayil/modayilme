import React from 'react';

export default function LinkArrow({ height = 8, width = 13, className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={`fill-current ${className}`}
    >
      <g fill="none" fillRule="evenodd">
        <path d="M-.25-3h14v14h-14z"></path>
        <path
          stroke="#9FAEC0"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12.25 4h-11m7-4l4 4-4 4"
        ></path>
      </g>
    </svg>
  );
}
