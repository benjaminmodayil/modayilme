import React, { useState } from 'react';
import WorkPreviewCard from '../WorkPreviewCard';
import IconDesign from '../../images/IconDesign';
import IconDevelopment from '../../images/IconDevelopment';

export default function Services() {
  const [activeTab, setActiveTab] = useState('design');
  const [isDetailOpen, setDetailOpen] = useState(false);
  let workPreviews = [1, 2, 3];
  const onDetailClick = e => {
    // `current` points to the mounted text input element
    setDetailOpen(!e.currentTarget.open);
    // inputEl.current.focus();
  };
  return (
    <section className="bg-gray-100 py-32 px-4" id="services">
      <h2 className="sr-only">Services</h2>

      <div className="xl-max-w-6xl mx-auto">
        <p className="text-3xl font-medium font-sans leading-normal text-center mb-8">
          I provide services in Design and Development
        </p>
        <details className="max-w-md mx-auto mb-12" onClick={onDetailClick}>
          <summary className="text-xl font-light leading-normal mt-2 cursor-pointer">
            <Arrow
              width="16"
              height="16"
              className={`text-purple absolute -ml-8 mt-3 transition ${
                isDetailOpen ? '' : 'rotate-180'
              }`}
            />
            I work across the spectrum between design and development to bridge the gap
            that traditional organizations suffer from.
          </summary>
          <p className="py-8 leading-normal">
            In my experience so far, while it can be ideal to specialize in one capacity
            versus another (front-end versus back-end), it can also be especially
            impractical at the start of a project or for a project under a serious growth.
            Sometimes you need someone that can touch design and development.
          </p>
        </details>
        <div className="flex flex-col rounded">
          <div className="flex space-between">
            <button
              className={`transition group text-left w-1-2 p-4 flex justify-center hover-bg-purple-500 ${
                activeTab === 'design' ? 'active-shadow' : 'inactive-shadow'
              }`}
              onClick={() => setActiveTab('design')}
            >
              <div className="flex space-around">
                <IconDesign
                  width="60"
                  height="60"
                  className="mr-1 stroke-current group-hover-text-white"
                />
                <div className="group-hover-text-white">
                  <h3 className="text-lg font-semibold font-sans">
                    <span>Design</span>
                  </h3>
                  <p className="mt-1 font-medium">
                    Market Research, Wireframing, UI Design
                  </p>
                </div>
              </div>
            </button>
            <button
              className={`transition group text-left w-1-2 p-4 flex justify-center hover-bg-purple-500 ${
                activeTab === 'development' ? 'active-shadow' : 'inactive-shadow'
              }`}
              onClick={() => setActiveTab('development')}
            >
              <div className="flex space-around">
                <IconDevelopment
                  width="60"
                  height="60"
                  className="mr-1 group-hover-text-white"
                />
                <div className="group-hover-text-white">
                  <h3 className="text-lg font-semibold font-sans">
                    <span>Development</span>
                  </h3>
                  <p className="mt-1 font-medium">
                    Market Research, Wireframing, UI Design
                  </p>
                </div>
              </div>
            </button>
          </div>

          <div className="w-full p-4 skill-container py-16 bg-white">
            <ul className="list-reset flex flex-wrap justify-center lg-justify-around items-center">
              {workPreviews.map(i => {
                return <WorkPreviewCard />;
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Arrow({ width, height, className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={width}
      height={height}
      viewBox={`0 0 24 24`}
      className={`fill-current ${className}`}
    >
      <defs>
        <path
          id="a"
          fillRule="evenodd"
          d="M15.752.439l-6.563 5.25L2.627.439A1.5 1.5 0 10.752 2.782l7.5 6a1.5 1.5 0 001.875 0l7.5-6A1.5 1.5 0 0015.752.439z"
          opacity="1"
        />
      </defs>
      <use transform="rotate(-180 9.19 4.57)" xlinkHref="#a" />
    </svg>
  );
}
