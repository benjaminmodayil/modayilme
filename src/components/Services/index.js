import React, { useState } from 'react';
import WorkPreviewCard from '../WorkPreviewCard';
import Link from '../Link';
import IconDesign from '../../images/IconDesign';
import IconDevelopment from '../../images/IconDevelopment';
import IconSketch from '../../images/IconSketch';
import IconInvisionStudio from '../../images/IconInvisionStudio';
import IconWhimsical from '../../images/IconWhimsical';
import HacktopiaThumbnail from '../../images/hacktopia-thumbnail.jpg';
import MarvinKnorrThumbnail from '../../images/thumbnail-marvinknorrlaw.jpg';

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
        <details className="max-w-md mx-auto" onClick={onDetailClick}>
          <summary className="text-xl font-light leading-normal mt-2 cursor-pointer">
            <Arrow
              width="16"
              height="16"
              className={`text-purple absolute -ml-8 mt-3 transition duration-150 ease-in ${
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
        <div className="mt-16 flex flex-col lg-flex-row justify-center">
          <div className="bg-white shadow-md rounded p-8 max-w-2xl w-full">
            <h3 className="flex justify-center items-center text-2xl leading-none text-lg font-semibold font-sans text-purple-600 -ml-12">
              <IconDesign
                width="52"
                height="52"
                className="mr-2 stroke-current group-hover-text-white"
              />
              Design
            </h3>
            <div className="mt-6 flex justify-between w-48 mx-auto">
              <IconSketch width="60" height="60" />
              <IconInvisionStudio width="60" height="60" />
              <IconWhimsical width="60" height="60" />
            </div>
            <p className="mt-4 leading-normal max-w-lg mx-auto text-lg">
              My typical process can include me researching your market competitors,
              looking at current design trends in your industry, providing mood boards,
              designing wireframes, and designing full artboards in sketch. All while you
              approve and provide feedback throughout the process.
            </p>
            <Link
              isExternal="true"
              to={`https://www.marvinknorrlaw.com`}
              className="bg-white rounded flex block shadow-md max-w-lg mx-auto mt-12"
            >
              <span
                style={{
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundImage: `url(${MarvinKnorrThumbnail})`,
                  width: '240px',
                  height: 'auto'
                }}
              />
              <div className="p-4">
                <h4 className="font-semibold mb-2">Marvin Knorr Law</h4>
                <p className="mb-2 text-sm italic leading-normal">
                  Designed with Invision Studio and developed using GatsbyJS and
                  NetlifyCMS.
                </p>

                <span className="text-sm text-purple-600 font-semibold self-end hover-underline">
                  Visit
                </span>
              </div>
            </Link>
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
