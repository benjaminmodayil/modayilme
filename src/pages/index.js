import React from 'react';
import Link from '../components/Link';
import { Link as InternalLink } from 'gatsby';

import Layout from '../components/layout';
import Avatar from '../images/avatar.png';
import IconArrowRight from '../images/IconArrowRight';

import SEO from '../components/seo';

const IndexPage = ({ location }) => {
  return (
    <Layout path={location.pathname}>
      <SEO
        title="Home"
        keywords={[
          `gatsby`,
          `front-end`,
          `react`,
          `developer`,
          `engineer`,
          `full-stack`,
          `twitch`,
          `streamer`,
          `video games`,
        ]}
      />
      <main className="lg-px-24">
        <header className="py-16 lg-py-64 flex flex-col lg-flex-row items-center lg-items-start justify-center lg-justify-between max-w-5xl mx-auto mt-128">
          <div className="bg-gray-100 rounded-sm shadow relative pt-64 pb-32 px-48 max-w-lg">
            <img
              src={Avatar}
              alt=""
              className="w-80 h-80 rounded-full border-4 border-white absolute right-0 lg-right-auto mr-24 lg--ml-96 -mt-96"
            />
            <h1 className="font-normal text-48 text-gray-800 -mt-80 absolute leading-none">
              Ben Modayil
            </h1>
            <p className="text-24 max-w-md">
              I’m a freelance Front-End Engineer living in Philadelphia, PA.
            </p>
            <h2 className="font-serif text-18 text-gray-800 mt-32">
              I Provide Services in Design & Development
            </h2>
            <p className="mt-12 text-16 leading-relaxed">
              I work across the spectrum between design and development to bridge the gap
              that traditional organizations suffer from.
            </p>

            <div className="flex flex-col">
              <Link to="#" style="cta" className="self-end cursor-not-allowed">
                learn more
              </Link>
            </div>
          </div>

          <div className="bg-gray-100 rounded-sm shadow relative pt-64 pb-32 px-48 max-w-xl flex flex-col mt-128 lg-mt-0">
            <h1 className="font-normal text-30 text-gray-800 -mt-80 absolute leading-none">
              Logbook
            </h1>
            <p className="text-18 max-w-md italic">
              I’m working on something for all too see 👀.
            </p>
            <Link to="#" style="cta" className="self-right self-end mb-24">
              learn more
            </Link>

            <InternalLink
              to="/project-log/fuchira"
              className="flex justify-between items-center py-8"
            >
              <div>
                <h2 className="mb-4 font-sans font-medium leading-none text-14">
                  Introducing Fuchira
                </h2>
                <span className="block text-12">February 20, 2020</span>
              </div>
              <IconArrowRight className="text-gray-800" />
            </InternalLink>
          </div>
        </header>
      </main>
      <section className="mt-128 mb-64 lg-mb-192 px-8 lg-px-0">
        <h2 className="font-normal text-18 text-gray-800 leading-none text-center">
          Looking to learn web development?
        </h2>
        <p className="max-w-md mx-auto mt-16 font-sans leading-relaxed">
          While I’m not so equipped to provide a full replacement for a web development
          bootcamp… yet, I love teaching and helping prospective developers join the web
          community.
        </p>
        <div className="flex justify-center mt-16">
          <Link to="/contact" title="contact me" style="cta">
            contact me
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;
