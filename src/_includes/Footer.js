import React, { Component } from 'react'
import Link from 'gatsby-link'

import IconArchive from '../assets/icons/IconArchive.js'
import IconWork from '../assets/icons/IconWork.js'
import IconContact from '../assets/icons/IconContact.js'
import IconLinkedIn from '../assets/icons/IconLinkedIn.js'
import IconLink from '../assets/icons/IconLink.js'
import IconCodepen from '../assets/icons/IconCodepen.js'

class Footer extends Component {
  render() {
    return (
      <footer className="home__footer">
        <div className="footer__inner wrapper wrapper--responsive margin-center">
          <h2 className="h-2">Thanks for stopping by!</h2>
          <ul>
            <li>
              <Link to="/work/how-i-made-my-site" className="footer__process">
                <p>Handcrafted through trial and error</p>
                <span>Learn how I built my website.</span>
              </Link>
            </li>
            <li className="footer__links">
              <div className="links__inner">
                <ul>
                  <li>
                    <Link to="/contact">
                      <IconContact />
                      <span>Contact</span>
                    </Link>
                  </li>
                  <li>
                    <a href="http://www.codepen.io/modayilme">
                      <IconCodepen />
                      <span>Codepen</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/benjamin-modayil">
                      <IconLinkedIn />
                      <span>LinkedIn</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </footer>
    )
  }
}

export default Footer