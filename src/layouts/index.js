import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Nav from '../_includes/Nav.js'
import Footer from '../_includes/Footer.js'
import Container from '../_includes/Container.js'

import './index.scss'

class TemplateWrapper extends React.Component {
  renderNav = () => {
    if (this.props.location.pathname != '/') {
      return <Nav />
    }
  }

  render() {
    return (
      <div className="site__container">
        <Helmet
          title="Welcome to modayil.me"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' }
          ]}
          link={[
            { rel: 'shortcut icon', href: '/favicon.ico', type: 'image/x-icon' },
            { rel: 'icon', href: '/favicon.ico', type: 'image/x-icon' }
          ]}
        />
        <div className="site__inner">
          <div className="site-alert">
            <div className="wrapper wrapper--responsive margin-center">
              <strong>Note:</strong>
              <p>
                This site is under construction 👷🏾‍♂️. Feel free to look around, but
                note, pages, even posts aren't completed. Stay tuned for November 6th,
                where the site will be 💯 live.
              </p>
            </div>
          </div>
          {this.renderNav()}
          {this.props.children()}
          <Footer />
        </div>
      </div>
    )
  }
}

export default TemplateWrapper
