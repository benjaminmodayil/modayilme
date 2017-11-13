import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Nav from '../_includes/Nav.js'
import Footer from '../_includes/Footer.js'
// import ColorTheme from '../components/ColorTheme.js'

import './index.scss'
// <ColorTheme />
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
          {this.renderNav()}
          {this.props.children()}
          <Footer />
        </div>
      </div>
    )
  }
}

export default TemplateWrapper
