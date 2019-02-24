import React from 'react'

export default function IconWeb(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      height="19.705"
      width="19.705"
      {...props}
    >
      <defs>
        <path id="a" fillRule="evenodd" d="M2.352 7.352h15" />
        <path id="b" fillRule="evenodd" d="M7.352 7.352v10" />
        <path
          id="c"
          fillRule="evenodd"
          d="M16.352 17.352h-13a1 1 0 0 1-1-1v-13a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1z"
        />
      </defs>
      <use xlinkHref="#a" fillOpacity={0} stroke="#5C5D5D" />
      <use xlinkHref="#b" fillOpacity={0} stroke="#5C5D5D" />
      <use xlinkHref="#c" fillOpacity={0} stroke="#5C5D5D" />
    </svg>
  )
}
