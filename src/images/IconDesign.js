import React from 'react';

function Icon({ width, height, className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className={`fill-current ${className}`}
    >
      <defs>
        <circle id="cde" cx="15.27" cy="24.709" r="3.109" opacity="1"></circle>
        <circle id="def" cx="21.488" cy="34.038" r="3.109" opacity="1"></circle>
        <ellipse
          id="bcd"
          cx="35.479"
          cy="26.264"
          opacity="1"
          rx="6.218"
          ry="6.219"
        ></ellipse>
        <path
          id="abc"
          fillRule="evenodd"
          d="M44.89 12.657c-10.39-4.932-19.276 5.109-23.449 0-1.598-2.114 2.043-5.812 0-8.455-1.42-1.85-4.884-1.498-7.104-.015a23.216 23.216 0 0013.5 42.288 23.43 23.43 0 0022.566-16.909c.883-3.523 1.95-13.212-5.513-16.909z"
          opacity="1"
        ></path>
      </defs>
      <use fillOpacity="0" xlinkHref="#abc"></use>
      <use fillOpacity="0" xlinkHref="#bcd"></use>
      <use xlinkHref="#cde"></use>
      <use xlinkHref="#def"></use>
    </svg>
  );
}

export default Icon;
