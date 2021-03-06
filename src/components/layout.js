import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Navigation from "../components/Navigation"
import WebDevMentorCallout from "../components/WebDevMentorCallout"

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
      <div className="bg-gray-50 lg-pt-64 lg-py-96">
        <div className="max-w-7xl mx-auto bg-white shadow-md pt-32 rounded min-h-almost">
          <Navigation location={path} />
          <div className="overflow-x-hidden">{children}</div>
          <WebDevMentorCallout />
        </div>
        <footer className="container mx-auto text-white text-center opacity-50 mt-8 py-2 text-12">
          © {new Date().getFullYear()}
        </footer>
      </div>
    )}
  />
)

export default Layout
