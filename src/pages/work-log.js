import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

const listItems = [];
for (let i = 0; i < 11; i++) {
  listItems.push(
    <li className="bg-white shadow-md hover-shadow-xl rounded transition duration-150 ease-in">
      <Link className="no-underline p-4 block">
        <div className="flex flex-col">
          <h3 className="text-xl">This is a title</h3>
          <p className="text-base text-red-dark font-medium">Working on something cool</p>
          <span className="text-sm text-purple-500 font-semibold self-end">
            Read more
          </span>
        </div>
      </Link>
    </li>
  );
}

const ProjectLog = () => (
  <Layout>
    <SEO title="Project Log | Benjamin Modayil" />
    <header className="mt-64 mb-32 mx-auto px-4 flex justify-center flex-col max-w-xl xl-max-w-6xl">
      <div>
        <div className="mb-32 lg-mb-0 text-center">
          <h1 className="block font-special text-red-500 text-6xl text-center">
            Project Log
          </h1>
          <p className="text-xl lg-text-2xl font-light leading-normal mt-8 max-w-md mx-auto">
            Just some thoughts or random code stuff I thought was worth sharing.
          </p>
        </div>
      </div>
    </header>
    <main>
      <ul className="list-reset text-left grid-container">{listItems}</ul>
    </main>
  </Layout>
);

export default ProjectLog;
