import React, { Component } from 'react'
import Link from 'gatsby-link'

import IconHome from '../assets/icons/IconHome.js'
import IconArchive from '../assets/icons/IconArchive.js'
import IconWork from '../assets/icons/IconWork.js'
import IconContact from '../assets/icons/IconContact.js'

class Nav extends Component {
  render() {
    return (
      <nav className="nav margin-center">
        <div className="nav__inner wrapper wrapper--tablet padding-top-and-bottom--small">
          <Link className="site__title padding-top-and-bottom--small" to="/">
            modayil.me
          </Link>
          <ul>
            <li>
              <Link to="/" className="padding-top-and-bottom--small">
                <IconHome />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/contact" className="padding-top-and-bottom--small">
                <IconContact />
                <span>Contact</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Nav
