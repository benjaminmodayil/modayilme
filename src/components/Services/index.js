import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from '../Link';
import ServiceSummary from '../ServiceSummary';
import IconDesign from '../../images/IconDesign';
import IconDevelopment from '../../images/IconDevelopment';
import IconSketch from '../../images/IconSketch';
import IconInvisionStudio from '../../images/IconInvisionStudio';
import IconWhimsical from '../../images/IconWhimsical';
import IconReact from '../../images/IconReact';
import IconTailwind from '../../images/IconTailwind';
import IconGatsby from '../../images/IconGatsby';
import IconNetlify from '../../images/IconNetlify';
// import IconWhimsical from '../../images/IconWhimsical';
import HacktopiaThumbnail from '../../images/hacktopia-thumbnail.jpg';
import MarvinKnorrThumbnail from '../../images/thumbnail-marvinknorrlaw.jpg';

export default function Services() {
  const [activeTab, setActiveTab] = useState('design');
  const [isDetailOpen, setDetailOpen] = useState(false);

  const onDetailClick = e => {
    // `current` points to the mounted text input element
    setDetailOpen(!e.currentTarget.open);
    // inputEl.current.focus();
  };

  const isDesignActive = activeTab === 'design';
  const isDevelopmentActive = activeTab === 'development';
  return (
    <section className="bg-gray-100 py-32 px-4" id="services">
      <h2 className="sr-only">Services</h2>
      <div className="xl-max-w-6xl mx-auto">
        <p className="max-w-xs px-4 md-max-w-full mx-auto lg-px-0 text-xl md-text-2xl lg-text-3xl font-medium font-sans leading-normal text-center mb-8">
          I provide services in <br className="lg-hidden" />
          <span className="font-special text-red-500 text-2xl lg-text-3xl">
            Design
          </span>{' '}
          and{' '}
          <span className="font-special text-red-500 text-2xl lg-text-3xl">
            Development
          </span>
        </p>
        <p className="text-lg lg-text-2xl font-light mx-auto max-w-ch-8">
          I work across the spectrum between design and development to bridge the gap that
          traditional organizations suffer from.
        </p>
        <div className="mt-16 flex flex-col lg-flex-row justify-center lg-py-64 relative">
          <ServiceSummary
            onTap={() => setActiveTab('design')}
            isActiveCheck={isDesignActive}
            initialPosX={'-30vw'}
            finalPosX="0"
            // initialPosY={'400px'}
            // finalPosY="0"
            Icon={IconDesign}
            iconRow={[
              <IconSketch width="60" height="60" />,
              <IconInvisionStudio width="60" height="60" />,
              <IconWhimsical width="60" height="60" />
            ]}
            title="Design"
            description="My typical process can include me researching your market competitors,
      looking at current design trends in your industry, providing mood boards,
      designing wireframes, and designing full artboards in sketch. All while you
      approve and provide feedback throughout the process."
            url="https://www.marvinknorrlaw.com"
            image={MarvinKnorrThumbnail}
            siteName="Marvin Knorr Law"
            workDescription="Designed with Invision Studio and developed using GatsbyJS and
      NetlifyCMS."
          />

          <ServiceSummary
            onTap={() => setActiveTab('development')}
            isActiveCheck={isDevelopmentActive}
            initialPosX={'30vw'}
            finalPosX="0"
            // initialPosY={'400px'}
            // finalPosY="0vh"
            Icon={IconDevelopment}
            iconRow={[
              <IconReact width="40" height="40" />,
              <IconTailwind width="40" height="20.45" />,
              <IconGatsby width="40" height="40" />,
              <IconNetlify width="40" height="40" />
            ]}
            title="Development"
            description={`Once a design is finalized, I start developing using <a href="https://jamstack.org" class="link" rel="noopener noreferrer" target="_blank">JAMstack</a> technologies to keep recurring costs low. For most projects I like to use GatsbyJS and TailwindCSS for development, Netlify CMS as the content management system, and use Netlify as a hosting platform. Not all projects are the same though, so I recommend getting in contact if you have other needs.`}
            url="http://master--hacktopia.netlify.com"
            image={HacktopiaThumbnail}
            siteName="Hacktopia"
            workDescription="Developed using GatsbyJS, TailwindCSS, and NetlifyCMS"
          />
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
