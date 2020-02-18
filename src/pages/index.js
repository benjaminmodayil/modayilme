import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
// import Image from '../components/image'
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import HeaderGraphic from '../images/HeaderGraphic';

import SocialLinks from '../components/SocialLinks';
import SEO from '../components/seo';

const IndexPage = () => {
  // const [activeHover, setActiveHover] = useState(null);
  // const move = id => {
  //   setActiveHover(id);
  // };

  // const reset = () => {
  //   setActiveHover(null);
  // };

  useEffect(() => {
    require('../../node_modules/mailtoui/dist/mailtoui-min.js').run();
  });
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[
          `gatsby`,
          `front-end`,
          `react`,
          `developer`,
          `engineer`,
          `full-stack`,
          `mixer`,
          `streamer`,
          `video games`
        ]}
      />
      <header className="py-16 lg-py-64 px-4 flex flex-col justify-center max-w-5xl xl-max-w-6xl mx-auto">
        <div className="flex items-center justify-center flex-col lg-flex-row lg-justify-between mb-16">
          <h1 className="sr-only">Ben Modayil's Homepage</h1>
          <div className="max-w-lg mb-32 lg-mb-0 font-sans">
            <p>
              <span className="text-center lg-text-left block text-3xl font-light">
                Hi, I'm
              </span>{' '}
              <span className="block font-special text-red-500 text-6xl text-center lg-text-left">
                Ben Modayil
              </span>
            </p>
            <p className="text-center lg-text-left text-3xl font-light leading-normal mt-8">
              I'm a freelance{' '}
              <span className="font-special font-normal text-purple-500">
                front-end engineer
              </span>{' '}
              living in Philadelphia, PA.
            </p>

            <p className="text-center lg-text-left text-xl font-light leading-normal mt-8">
              When I’m not working you can catch me streaming games on{' '}
              <a
                className="link"
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.mixer.com/movemathew"
              >
                Mixer
              </a>
              .
            </p>
          </div>
          <HeaderGraphic className="mx-auto max-w-full" />
        </div>
        <a className="text-center link link--obvious inline mx-auto" href="#services">
          learn about my services
        </a>
      </header>
      <main>
        <Services />
        <section className="px-4 py-16">
          <h2 className="sr-only">Writings</h2>
          <div className="shadow-md max-w-lg mx-auto bg-white relative z-10">
            <h3 className="font-special text-3xl font-semibold italic text-center text-purple-100 bg-purple-600 rounded py-4 relative z-10">
              Ben's (b)Logbook
            </h3>
            <ul className="relative z-10 bg-white">
              <li>
                <Link className="text-gray-800 block leading-none p-6 hover-shadow group hover-bg-purple-200 hover-text-purple-800">
                  <h4 className="text-base font-semibold mb-2">
                    Storybook 5.3+ Documentation-First Approach
                  </h4>
                  <span className="text-sm block">04/17/19</span>
                  <span className="text-purple-500 group-hover-text-purple-800 text-sm block text-right font-semibold">
                    Read
                  </span>
                </Link>
              </li>
              <li>
                <Link className="text-gray-800 block leading-none p-6 hover-shadow group hover-bg-purple-200 hover-text-purple-800">
                  <h4 className="text-base font-semibold mb-2">
                    Storybook 5.3+ Documentation-First Approach
                  </h4>
                  <span className="text-sm block">04/17/19</span>
                  <span className="text-purple-500 group-hover-text-purple-800 text-sm block text-right font-semibold">
                    Read
                  </span>
                </Link>
              </li>
              <li>
                <Link className="text-gray-800 block leading-none p-6 hover-shadow group hover-bg-purple-200 hover-text-purple-800">
                  <h4 className="text-base font-semibold mb-2">
                    Storybook 5.3+ Documentation-First Approach
                  </h4>
                  <span className="text-sm block">04/17/19</span>
                  <span className="text-purple-500 group-hover-text-purple-800 text-sm block text-right font-semibold">
                    Read
                  </span>
                </Link>
              </li>
              <li>
                <Link className="text-gray-800 block leading-none p-6 hover-shadow group hover-bg-purple-200 hover-text-purple-800">
                  <h4 className="text-base font-semibold mb-2">
                    Storybook 5.3+ Documentation-First Approach
                  </h4>
                  <span className="text-sm block">04/17/19</span>
                  <span className="text-purple-500 group-hover-text-purple-800 text-sm block text-right font-semibold">
                    Read
                  </span>
                </Link>
              </li>
            </ul>
            <span className="triangle absolute top-0 left-0 -ml-12 z-0"></span>
            <span className="absolute bottom-0 left-0 -mb-32 -ml-32 w-64 h-64 bg-red-200 rounded-full z-0"></span>
            <span className="absolute top-0 right-0 -mt-24 -mr-24 w-64 h-64 bg-purple-200 rounded z-0 transform rotate-22"></span>
          </div>
        </section>

        <section className="home-testimonials pt-64 pb-32 px-4">
          <Testimonials />
        </section>

        <section className="pt-64 pb-32 px-2">
          <div className="bg-white max-w-4xl mx-auto">
            <h2 className="sr-only">Contact Me</h2>
            <p className="text-3xl leading-normal text-center mb-48 max-w-xl mx-auto font-light px-3">
              If you’re looking for another engineer or have a project idea feel free to{' '}
              <br className="hidden lg-block" />
              <Link to="/contact" className="link">
                contact me.
              </Link>
            </p>

            <div className="social-media">
              <p className="text-center text-2xl max-w-md font-light mx-auto">
                When I’m not working, you can catch up with me on the links below.
              </p>
              <SocialLinks />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default IndexPage;
