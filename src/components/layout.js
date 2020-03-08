import React, { useState } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Link from 'gatsby-link';
import 'normalize.css';
import './layout.css';

const Layout = props => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={() => (
      <>
        <nav className="flex flex-row justify-center lg-justify-between max-w-5xl xl-max-w-6xl mx-auto p-4 lg-px-0 lg-py-8">
          <div className="relative flex flex-col lg-block bg-purple-100 lg-bg-transparent rounded p-4 lg-py-0 text-right w-48 lg-w-full">
            <Link
              to="/"
              className="no-underline hover-underline absolute left-0 lg-block pl-4 -mt-2 lg-mt-0 lg-l-0 lg-pr-24 lg-pt-0 lg-pr-0"
            >
              <acronym
                title="Benjamin Modayil | Go to Home Page"
                className="font-special text-red-500 text-2xl -mt-1 inline-block"
              >
                B.M.
              </acronym>
            </Link>
            <Link
              className="text-base no-underline hover-underline ml-6 text-purple-500 mb-4 lg-mb-0"
              to="/blog"
            >
              blog
            </Link>
            <Link
              className="text-base no-underline hover-underline ml-6 text-purple-500 mb-4 lg-mb-0"
              to="/project-log"
            >
              project log
            </Link>
            {/*
            <Link
              className="text-base no-underline hover-underline ml-6 text-purple-500 mb-4 lg-mb-0"
              to="/ui"
            >
              ui challenge
            </Link> */}
            <Link
              className="text-base no-underline hover-underline ml-6 bg-purple-100 text-purple-500 rounded px-2 py-1"
              to="/contact"
            >
              contact me
            </Link>
          </div>
        </nav>
        <div className="overflow-x-hidden">{props.children}</div>
        <footer className="container mx-auto text-center opacity-50 my-4">
          © {new Date().getFullYear()}
        </footer>
      </>
    )}
  />
);

export default Layout;
