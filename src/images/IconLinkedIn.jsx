import React from 'react';

function LogoLinkedin(props) {
  const fill = props.fill || 'currentColor';
  const secondaryfill = props.secondaryfill || fill;
  const strokewidth = props.strokewidth || 1;
  const width = props.width || '100%';
  const height = props.height || '100%';
  const title = props.title || 'logo linkedin';

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
          d="M15.3,0H0.7C0.3,0,0,0.3,0,0.7v14.7C0,15.7,0.3,16,0.7,16h14.7c0.4,0,0.7-0.3,0.7-0.7V0.7 C16,0.3,15.7,0,15.3,0z M4.7,13.6H2.4V6h2.4V13.6z M3.6,5C2.8,5,2.2,4.3,2.2,3.6c0-0.8,0.6-1.4,1.4-1.4c0.8,0,1.4,0.6,1.4,1.4 C4.9,4.3,4.3,5,3.6,5z M13.6,13.6h-2.4V9.9c0-0.9,0-2-1.2-2c-1.2,0-1.4,1-1.4,2v3.8H6.2V6h2.3v1h0c0.3-0.6,1.1-1.2,2.2-1.2 c2.4,0,2.8,1.6,2.8,3.6V13.6z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default LogoLinkedin;
