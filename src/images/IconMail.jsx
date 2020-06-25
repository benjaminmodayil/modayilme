import React from 'react';

function Mail(props) {
  const fill = props.fill || 'currentColor';
  const secondaryfill = props.secondaryfill || fill;
  const strokewidth = props.strokewidth || 1;
  const width = props.width || '100%';
  const height = props.height || '100%';
  const title = props.title || 'mail';

  return (
    <svg
      height={height}
      width={width}
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      className={`fill-current ${props.className}`}
    >
      <title>{title}</title>
      <g fill={secondaryfill} stroke={secondaryfill}>
        <path
          d="M14.5,14.5h-13 c-0.552,0-1-0.448-1-1v-11c0-0.552,0.448-1,1-1h13c0.552,0,1,0.448,1,1v11C15.5,14.052,15.052,14.5,14.5,14.5z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
        />
        <polyline
          fill="none"
          points=" 2.5,4.5 8,9 13.5,4.5 "
          stroke={secondaryfill}
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}

export default Mail;
