import React from 'react';

function Twitch(props) {
  const fill = props.fill || 'currentColor';
  const secondaryfill = props.secondaryfill || fill;
  const strokewidth = props.strokewidth || 1;
  const width = props.width || '100%';
  const height = props.height || '100%';
  const title = props.title || 'twitch';

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
          d="M1.433,0,.358,2.746V14H4v2H6.328l2.03-2h3.1l4.179-4.209V0ZM14.209,9.075l-2.388,2.388H8l-2,2.03v-2.03H2.746V1.433H14.209Z"
          fill={fill}
        />
        <rect height="4.175" width="1.433" fill={secondaryfill} x="10.388" y="4.179" />
        <rect height="4.175" width="1.433" fill={secondaryfill} x="6.567" y="4.179" />
      </g>
    </svg>
  );
}

export default Twitch;
