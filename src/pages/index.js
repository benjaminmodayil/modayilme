import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import HeaderGraphic from '../images/HeaderGraphic';
import LogBookList from '../components/LogBookList';

import SocialLinks from '../components/SocialLinks';
import SEO from '../components/seo';

const IndexPage = () => {
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
            <p className="text-gray-700 text-center lg-text-left text-3xl leading-normal mt-8">
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
        <section className="px-4 py-32">
          <h2 className="sr-only">Writings</h2>
          <LogBookList />
        </section>

        <section className="home-testimonials py-16 lg-pt-64 lg-pb-32 px-4">
          <Testimonials />
        </section>

        <section className="py-16 lg-pt-64 lg-pb-32 px-2">
          <div className="bg-white max-w-4xl mx-auto">
            <h2 className="sr-only">Contact Me</h2>
            <p className="text-3xl leading-normal text-center mb-24 lg-mb-48 max-w-xl mx-auto font-light px-3">
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
