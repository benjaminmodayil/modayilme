import React from 'react'

export default function IconContactWithColor(props) {
  return (
    <svg
      width={115}
      height={116}
      viewBox="0 0 115 116"
      className="icon-contact--color"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <filter
          x="-7.5%"
          y="-5.6%"
          width="114%"
          height="114%"
          filterUnits="objectBoundingBox"
          id="filter-1"
        >
          <feOffset dy={2} in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur
            stdDeviation={2}
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.274088542 0"
            in="shadowBlurOuter1"
            result="shadowMatrixOuter1"
          />
          <feMerge>
            <feMergeNode in="shadowMatrixOuter1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g id="Symbols" fill="none" fillRule="evenodd">
        <g id="updates" fillRule="nonzero">
          <g id="Group-6">
            <g
              id="icon-airplane"
              filter="url(#filter-1)"
              transform="translate(4.025 2.646)"
            >
              <path
                d="M25.453 101.81c-.515 0 10.298-44.027 10.298-44.027.264-.85.955-1.5 1.82-1.712.863-.218 1.78.043 2.41.672L57.795 74.56c.522.52.79 1.24.738 1.98-.052.735-.42 1.412-1.012 1.854L26.98 101.3c-.45.342-.99.51-1.527.51z"
                id="Shape"
                fill="#7F7F7F"
              />
              <path
                d="M83.974 106.902c-.542 0-1.08-.174-1.526-.51L1.018 45.305c-.737-.55-1.117-1.456-.996-2.368.12-.913.724-1.688 1.58-2.03L103.41.18c.867-.342 1.857-.192 2.572.41.72.596 1.052 1.538.868 2.455L86.47 104.855c-.172.858-.77 1.567-1.59 1.88-.292.112-.6.167-.906.167z"
                id="Shape"
                fill="#E6E6E6"
              />
              <path
                d="M25.455 101.81c-.136 0-.273-.01-.41-.03-1.233-.203-2.138-1.266-2.138-2.514v-38.18c0-.805.383-1.563 1.03-2.043L102.84.503c1.08-.804 2.593-.625 3.46.397.868 1.026.788 2.548-.18 3.48L36.14 71.652l-8.274 28.42c-.35 1.05-1.332 1.74-2.41 1.74z"
                id="Shape"
                fill="#B3B3B3"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  )
}
