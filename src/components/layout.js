import React, { useState } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Link from 'gatsby-link'
import 'normalize.css'
import './layout.css'

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
        <nav className="flex justify-between container mx-auto py-4">
          <Link to="/" className="no-underline hover-underline">
            <acronym title="Benjamin Modayil" class="font-special text-red text-2xl">
              B.M.
            </acronym>
          </Link>

          <div>
            <Link className="text-sm no-underline hover-underline ml-6" to="/">
              blog
            </Link>
            <Link className="text-sm no-underline hover-underline ml-6" to="/">
              work log
            </Link>
            <Link className="text-sm no-underline hover-underline ml-6" to="/">
              ui challenge
            </Link>
            <Link className="text-sm no-underline hover-underline ml-6" to="/">
              contact
            </Link>
          </div>
        </nav>
        <main className="container mx-auto">{props.children}</main>
        <footer className="container mx-auto">© {new Date().getFullYear()}</footer>
      </>
    )}
  />
)

export default Layout
