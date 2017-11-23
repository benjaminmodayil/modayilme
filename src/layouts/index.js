import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Nav from '../_includes/Nav.js'
import Footer from '../_includes/Footer.js'
// import ColorTheme from '../components/ColorTheme.js'

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
          title="Home | Benjamin Modayil"
          meta={[
            {
              name: 'description',
              content:
                'Benjamin Modayil is a Front-End Developer from Philadelphia, PA. He likes to write things related to development and life on this site.'
            },
            { itemprop: 'name', content: "Benjamin Modayil's site" },
            {
              itemprop: 'description',
              content:
                'Benjamin Modayil is a Front-End Developer from Philadelphia, PA. He likes to write things related to development and life on this site.'
            },
            // <!-- Schema image tag must be at least 180x120px -->
            { itemprop: 'image', content: 'static/google-plus-image.png' },

            // <!-- Twitter Card data -->
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:site', content: '@modayilme' },
            { name: 'twitter:title', content: "Benjamin Modayil's site" },
            {
              name: 'twitter:description',
              content:
                'Benjamin Modayil is a Front-End Developer from Philadelphia, PA. He likes to write things related to development and life on this site.'
            },
            { name: 'twitter:creator', content: '@modayilme' },
            // <!-- Twitter summary card with large image must be at least 280x150px -->
            { name: 'twitter:image:src', content: 'static/twitter-image.png' },

            // <!-- Open Graph data -->
            { property: 'og:title', content: "Benjamin Modayil's site" },
            { property: 'og:type', content: 'website' },
            { property: 'og:url', content: 'www.modayil.me' },
            // <!-- Open graph image should be 1200 x 1200 (more info here: http://www.h3xed.com/web-and-internet/how-to-use-og-image-meta-tag-facebook-reddit) -->
            { property: 'og:image', content: 'static/op-image.jpg' },
            {
              property: 'og:description',
              content:
                'Benjamin Modayil is a Front-End Developer from Philadelphia, PA. He likes to write things related to development and life on this site.'
            },
            { property: 'og:site_name', content: "Benjamin Modayil's site" },
            { name: 'theme-color', content: '#F7484E' }
          ]}
          link={[
            { rel: 'shortcut icon', href: 'static/favicon.ico', type: 'image/x-icon' },
            { rel: 'icon', href: 'static/favicon.ico', type: 'image/x-icon' },
            {
              rel: 'stylesheet',
              href:
                'https://fonts.googleapis.com/css?family=Merriweather:300,300i,400,400i,700,700i|Raleway:200,300,400,400i,500,500i,600,600i,700,700i'
            }
          ]}
        >
          <html lang="en" />
        </Helmet>

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
