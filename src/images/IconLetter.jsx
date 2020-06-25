import React from 'react';

function Letter(props) {
  const fill = props.fill || 'currentColor';
  const secondaryfill = props.secondaryfill || fill;
  const strokewidth = props.strokewidth || 1;
  const width = props.width || '100%';
  const height = props.height || '100%';
  const title = props.title || 'letter';

  return (
    <svg
      height={height}
      width={width}
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      className={`fill-current ${props.className}`}
    >
      <title>{title}</title>
      <g fill={secondaryfill}>
        <path
          d="M15,1H1C0.4,1,0,1.4,0,2v1.4l8,4.5l8-4.4V2C16,1.4,15.6,1,15,1z"
          fill={secondaryfill}
        />
        <path
          d="M7.5,9.9L0,5.7V14c0,0.6,0.4,1,1,1h14c0.6,0,1-0.4,1-1V5.7L8.5,9.9C8.22,10.04,7.78,10.04,7.5,9.9z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Letter;
