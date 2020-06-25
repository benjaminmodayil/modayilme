import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Navigation from '../components/Navigation';
import Toast from '../components/Toast';
import 'normalize.css';
import './layout.css';

const Layout = ({ path, children }) => (
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
        <Toast />
        <div className="bg-gray-100 lg-pt-16 lg-py-96">
          <div className="max-w-6xl mx-auto bg-white shadow-md pt-32 rounded min-h-almost">
            <Navigation location={path} />
            <div className="overflow-x-hidden">{children}</div>
          </div>
        </div>
        <footer className="container mx-auto text-center opacity-50 mt-8 py-2 text-12">
          © {new Date().getFullYear()}
        </footer>
      </>
    )}
  />
);

export default Layout;
