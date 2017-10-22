import React, { Component } from 'react'
import Link from 'gatsby-link'

import IconHome from '../assets/icons/IconHome.js'
import IconArchive from '../assets/icons/IconArchive.js'
import IconWork from '../assets/icons/IconWork.js'
import IconContact from '../assets/icons/IconContact.js'

class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        <div className="nav__inner wrapper wrapper--tablet margin-center padding-top-and-bottom">
          <Link className="site__title" to="/">
            modayil.me
          </Link>
          <ul>
            <li>
              <Link to="/">
                <IconHome />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/contact">
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
