import React, { Component } from 'react'
import Link from 'gatsby-link'

import IconArchive from '../assets/icons/IconArchive.js'
import IconWork from '../assets/icons/IconWork.js'
import IconContact from '../assets/icons/IconContact.js'
// import IconLinkedIn from '../assets/icons/IconLinkedIn.js'
import IconLink from '../assets/icons/IconLink.js'
import IconCodepen from '../assets/icons/IconCodepen.js'
import IconMobile from '../assets/icons/home-icons/IconMobile.js'

class Footer extends Component {
  render() {
    return (
      <footer className="home__footer margin-top--64">
        <div className="footer__inner wrapper wrapper--wide margin-center">
          <div className="footer__inner__callout">
            <h2 className="h-2 font-size--96 color--white margin-bottom--32">
              Want to chat?
            </h2>
            <Link className="footer__inner__callout__hmu" to="/contact">
              Contact Me
            </Link>
            <IconMobile className="icon-mobile" />
          </div>
          <ul className="footer__links__container margin-top--64">
            <li className="footer__links link-how-i-made margin-bottom--32">
              <Link
                to="/work/how-i-made-my-site"
                className="footer__process color--white"
              >
                <p className="font-family--heading font-weight--bold margin-bottom--8">
                  Handcrafted through trial and error
                </p>
                <span className="font-family--body">Learn how I built my website.</span>
              </Link>
            </li>
            <li className="footer__links link-social-accounts">
              <div className="links__inner">
                <ul>
                  <li className="margin-bottom--16">
                    <Link to="/contact">
                      <IconContact />
                      <span>Contact</span>
                    </Link>
                  </li>
                  <li className="margin-bottom--16">
                    <a href="http://www.codepen.io/modayilme">
                      <IconCodepen />
                      <span>Codepen</span>
                    </a>
                  </li>
                  <li className="margin-bottom--16">
                    <a href="https://www.linkedin.com/in/benjamin-modayil">
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
// <IconLinkedIn />
