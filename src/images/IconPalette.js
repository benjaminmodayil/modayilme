import React from 'react';

export default function IconPalette(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" height="18.933" width="20.786" {...props}>
      <defs>
        <path id="a" fillRule="evenodd" d="M16.034 5.666c-3.342-1.586-6.2 1.643-7.542 0-.514-.68.657-1.869 0-2.719-.457-.595-1.571-.482-2.285-.005a7.466 7.466 0 0 0 4.342 13.6 7.536 7.536 0 0 0 7.258-5.438c.284-1.133.627-4.249-1.773-5.438z" />
        <ellipse id="b" rx={2} ry={2} cx="13.007" cy="10.042" />
        <ellipse id="c" rx={1} ry={1} cx="6.507" cy="9.542" />
        <ellipse id="d" rx={1} ry={1} cx="8.507" cy="12.542" />
      </defs>
      <use xlinkHref="#a" fillOpacity={0} stroke="#5C5D5D" />
      <use xlinkHref="#b" fillOpacity={0} stroke="#5C5D5D" />
      <use xlinkHref="#c" fill="#5C5D5D" />
      <use xlinkHref="#d" fill="#5C5D5D" />
    </svg>
  );
}
