import React from 'react';

export default function Icon({ width, height, className }) {
  return (
    <svg
      width={width}
      height={height}
      className={`fill-current stroke-current ${className}`}
    >
      <defs>
        <path id="path-123" fillRule="evenodd" d="M2.352 18.577h48.676" opacity={1} />
        <path id="path-234" fillRule="evenodd" d="M18.577 18.577v32.45" opacity={1} />
        <path
          id="path-345"
          fillRule="evenodd"
          d="M47.783 51.028H5.597a3.246 3.246 0 01-3.245-3.245V5.597a3.246 3.246 0 013.245-3.245h42.186a3.246 3.246 0 013.245 3.245v42.186a3.246 3.246 0 01-3.245 3.245z"
          opacity={1}
        />
      </defs>
      <use fillOpacity={0} xlinkHref="#path-123" />
      <use fillOpacity={0} xlinkHref="#path-234" />
      <use fillOpacity={0} xlinkHref="#path-345" />
    </svg>
  );
}
