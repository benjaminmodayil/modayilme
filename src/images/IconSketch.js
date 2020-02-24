import React from 'react';

function Icon({ width = 37, height = 34 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height}>
      <path
        fill="#FDB300"
        fillRule="evenodd"
        d="M8.249 1.12L18.903 0l10.655 1.12 8.249 11.004L18.903 34 0 12.124 8.249 1.119z"
      ></path>
      <path
        fill="#EA6C00"
        fillRule="evenodd"
        d="M18.903 34L7.657 12.124H0L18.903 34zm0 0L30.15 12.124h7.657L18.904 34z"
      ></path>
      <path fill="#FDAD00" fillRule="evenodd" d="M7.657 12.124H30.15L18.903 34"></path>
      <path
        fill="#FDD231"
        fillRule="evenodd"
        d="M8.249 1.12L18.903 0 7.657 12.124l.592-11.005zM18.903 0L30.15 12.124l-.592-11.005L18.903 0z"
      ></path>
      <path
        fill="#FDAD00"
        fillRule="evenodd"
        d="M8.249 1.12L0 12.123h7.657l.592-11.005zm21.31 0l8.248 11.004H30.15l-.592-11.005z"
      ></path>
      <path fill="#FEEEB7" fillRule="evenodd" d="M18.903 0L7.657 12.124H30.15"></path>
    </svg>
  );
}

export default Icon;
