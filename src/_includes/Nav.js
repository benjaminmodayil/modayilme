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
        <div className="nav__inner wrapper wrapper--tablet padding-top-and-bottom--16 color--white">
          <Link
            className="site__title color--white font-family--heading font-weight--bold font-size--24"
            to="/"
          >
            <span className="font-weight--light">Benjamin </span>
            Modayil
          </Link>
          <ul>
            <li>
              <Link to="/" className="padding-top-and-bottom--small">
                <IconHome />
                <span className="font-size--14">Home</span>
              </Link>
            </li>
            <li>
              <Link to="/contact" className="padding-top-and-bottom--small">
                <IconContact />
                <span className="font-size--14">Contact</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Nav
