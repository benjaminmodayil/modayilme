import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import HeaderGraphic from '../images/HeaderGraphic';
import LogBookList from '../components/LogBookList';

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
      <header className="py-16 lg-py-64 flex flex-col justify-center max-w-5xl xl-max-w-6xl mx-auto">
        <div className="flex items-center justify-center flex-col lg-flex-row lg-justify-between mb-16">
          <h1 className="sr-only">Ben Modayil's Homepage</h1>
          <div className="max-w-lg mb-32 lg-mb-0 font-sans px-4 xl-px-0">
            <p>
              <span className="text-center lg-text-left block text-3xl font-light">
                Hi, I'm
              </span>{' '}
              <span className="block font-special text-red-500 text-4xl md-text-5xl lg-text-6xl text-center lg-text-left">
                Ben Modayil
              </span>
            </p>
            <p className="text-gray-700 text-center lg-text-left text-lg md-text-xl lg-text-3xl leading-normal mt-8 lg-px-0 max-w-ch-5 mx-auto">
              I'm a freelance{' '}
              <span className="font-special font-normal text-purple-500 text-xl lg-text-3xl">
                front-end engineer
              </span>{' '}
              living in Philadelphia, PA.
            </p>

            <p className="text-center lg-text-left text-base md-text-lg lg-text-xl font-light leading-normal md-px-8 lg-px-0 mt-8 max-w-ch-6">
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

        <section className="home-testimonials py-16 lg-pt-64 lg-pb-32 lg-px-4">
          <Testimonials />
        </section>

        <section className="pt-16 lg-pt-64 px-4 lg-px-0">
          <div className="bg-white max-w-4xl mx-auto">
            <h2 className="sr-only">Contact Me</h2>
            <p className="text-xl lg-text-3xl leading-normal text-center mb-24 max-w-ch-8 mx-auto font-light px-4 lg-px-0">
              If you’re looking for another engineer or have a project idea feel free to{' '}
              <Link to="/contact" className="link">
                contact me
              </Link>
              .
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default IndexPage;
