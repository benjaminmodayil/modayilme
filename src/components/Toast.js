import React from 'react';

export default function Toast() {
  return (
    <div className="flex justify-center bg-yellow-400 p-4">
      <div className="w-full max-w-lg flex justify-around items-center text-14">
        <div className="bg-yellow-200 rounded-full lg-p-8">
          <ConstructionSign className="w-20 h-20" />
        </div>
        <p>This site is under construction so some links don't work at the moment.</p>
      </div>
    </div>
  );
}

function ConstructionSign({ title, width = 48, height = 48, className }) {
  return (
    <svg
      height={height}
      width={width}
      className={className}
      viewBox={`0 0 ${width} ${height}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title || 'construction sign'}</title>
      <g>
        <path d="M41,43V3a1,1,0,0,0-1-1H36a1,1,0,0,0-1,1V43Z" fill="#d8d8d8" />
        <path d="M13,43V3a1,1,0,0,0-1-1H8A1,1,0,0,0,7,3V43Z" fill="#d8d8d8" />
        <rect height="3" width="14" fill="#b3b3b3" x="3" y="43" />
        <rect height="3" width="14" fill="#b3b3b3" x="31" y="43" />
        <rect height="2" width="6" fill="#b3b3b3" x="7" y="26" />
        <rect height="2" width="6" fill="#b3b3b3" x="35" y="26" />
        <path
          d="M46,6H2A1,1,0,0,0,1,7V25a1,1,0,0,0,1,1H46a1,1,0,0,0,1-1V7A1,1,0,0,0,46,6Z"
          fill="#d8d8d8"
        />
        <rect height={16 / height} width={42 / height} fill="#fff" x="3" y="8" />
        <path
          d="M45,17.036l-9-9h9Zm-25-9h8l16,16H36Zm8,16H20l-16-16h8Zm-25-9,9,9H3Z"
          fill="#ed7064"
        />
        <path d="M13,6H6.966V3a1,1,0,0,1,1-1H12a1,1,0,0,1,1,1Z" fill="#ffd764" />
        <path d="M41,6H34.966V3a1,1,0,0,1,1-1H40a1,1,0,0,1,1,1Z" fill="#ffd764" />
      </g>
    </svg>
  );
}
