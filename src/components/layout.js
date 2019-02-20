import React, { useState } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Link from 'gatsby-link'
// import Header from "./header"

import 'normalize.css'
import './layout.css'

require('typeface-permanent-marker')
require('typeface-lato')

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
    render={data => (
      <>
        {/*// <Header siteTitle={data.site.siteMetadata.title} /> */}
        <nav>
          <Link to="/">
            <acronym title="Benjamin Modayil" class="font-special text-red text-3xl">
              B.M.
            </acronym>
          </Link>

          <div>
            <Link to="/">blog</Link>
            <Link to="/">work log</Link>
            <Link to="/">ui challenge</Link>
            <Link to="/">contact</Link>
          </div>
        </nav>
        <div>
          <main>{props.children}</main>
          <footer>© {new Date().getFullYear()}</footer>
        </div>
      </>
    )}
  />
)

export default Layout
