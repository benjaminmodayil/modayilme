import React from 'react';

export default function IconResume(props) {
  return (
    <svg width={78} height={77} viewBox="0 0 78 77" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <filter y="-7.1%" filterUnits="objectBoundingBox" id="filter-1">
          <feOffset dy={2} in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur stdDeviation={2} in="shadowOffsetOuter1" result="shadowBlurOuter1" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.233157835 0" in="shadowBlurOuter1" result="shadowMatrixOuter1" />
          <feMerge>
            <feMergeNode in="shadowMatrixOuter1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g id="Page-4" fill="none" fillRule="evenodd">
        <g id="new3-copy">
          <g id="Group" filter="url(#filter-1)" transform="translate(3.723 1.71)">
            <g id="pdf" fillRule="nonzero">
              <path id="Shape" fill="#DB373D" d="M64.978 39.14H5.118l-4.49-5.986 5.985-5.986h56.87l5.985 5.986z" />
              <path d="M60.49 69.07H9.605c-1.654 0-2.993-1.34-2.993-2.992V3.223C6.613 1.57 7.953.23 9.606.23h35.917l17.96 17.958v47.89c0 1.653-1.34 2.993-2.994 2.993z" id="Shape" fill="#FFF" />
              <path d="M45.523.23v14.965c0 1.654 1.34 2.993 2.993 2.993h14.966L45.522.23z" id="Shape" fill="#B3B3B3" />
              <path d="M66.475 60.09H3.62C1.966 60.09.627 58.753.627 57.1V33.154h68.84v23.944c0 1.654-1.34 2.993-2.992 2.993z" id="Shape" fill="#F7484E" />
            </g>
            <text id=".pdf" fontFamily="Raleway-Medium, Raleway" fontSize={12} fontWeight={400} fill="#FFF">
              <tspan x="22.345" y="50.85">.pdf</tspan>
            </text>
          </g>
        </g>
      </g>
    </svg>
  );
}
