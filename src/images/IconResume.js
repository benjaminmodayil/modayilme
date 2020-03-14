import React from 'react';

function Resume() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="48"
      height="48"
      className="font-sans"
    >
      <defs>
        <path id="a" d="M0 0H48V48H0z" opacity="1"></path>
        <mask id="c" maskContentUnits="userSpaceOnUse" maskUnits="userSpaceOnUse">
          <path d="M0 0H48V48H0z"></path>
          <use fill="#fff" xlinkHref="#a"></use>
        </mask>
        <mask id="d" maskContentUnits="userSpaceOnUse" maskUnits="userSpaceOnUse">
          <path d="M0 0H48V48H0z"></path>
          <use fill="#fff" xlinkHref="#b"></use>
        </mask>
      </defs>
      <g mask="url(#c)">
        <path fill="#E06D70" fillRule="evenodd" d="M44 27H4l-3-4 4-4h38l4 4-3 4z"></path>
        <path
          fill="#E6E6E6"
          fillRule="evenodd"
          d="M41 47H7a2 2 0 01-2-2V3a2 2 0 012-2h24l12 12v32a2 2 0 01-2 2z"
        ></path>
        <path fill="#B3B3B3" fillRule="evenodd" d="M31 1v10a2 2 0 002 2h10L31 1z"></path>
        <path
          fill="#E06D70"
          fillRule="evenodd"
          d="M45 41H3a2 2 0 01-2-2V23h46v16a2 2 0 01-2 2z"
        ></path>
      </g>
      <text fontSize="0" transform="translate(7 28)">
        <tspan
          x="0"
          y="8"
          fill="#FFF"
          fontSize="8"
          fontWeight="700"
          style={{
            whiteSpace: 'pre',
            WebkitTextTransform: 'none',
            textTransform: 'none'
          }}
        >
          RESUME
        </tspan>
      </text>
      <g mask="url(#d)">
        <path
          fill="#72C472"
          fillRule="evenodd"
          d="M28.125 12.625H24.75V4.75a.375.375 0 00-.375-.375h-.75a.375.375 0 00-.375.375v7.875h-3.375a.375.375 0 00-.295.607l4.125 5.25a.375.375 0 00.59 0l4.125-5.25a.375.375 0 00-.295-.607z"
        ></path>
      </g>
    </svg>
  );
}

export default Resume;
