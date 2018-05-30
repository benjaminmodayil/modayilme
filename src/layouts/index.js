import React from 'react'
import Helmet from 'react-helmet'
<<<<<<< HEAD
import 'typeface-merriweather'
import 'typeface-raleway'
import Border from '../components/Border'
import Navigation from '../components/Navigation.js'
import Footer from '../components/_Footer.js'
import './generated.css'

class TemplateWrapper extends React.Component {
  render() {
    let { social } = this.props.data.site.siteMetadata
    let { navigation } = this.props.data.site.siteMetadata
=======
import Navigation from '../components/Navigation.js'
import Footer from '../components/_Footer.js'

import 'typeface-merriweather'
import 'typeface-raleway'

import './generated.css'

class TemplateWrapper extends React.Component {
  renderNav = () => {
    // if (this.props.location.pathname != '/') {
    //   return <Nav />
    // }
  }

  render() {
    let { social } = this.props.data.site.siteMetadata
>>>>>>> 4d1798138bea3e67c17aa9d0e69bd58a2a509357
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
            }, // <!-- Schema image tag must be at least 180x120px -->
            { itemprop: 'image', content: 'static/google-plus-image.png' }, // <!-- Twitter Card data -->
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:site', content: '@modayilme' },
            { name: 'twitter:title', content: "Benjamin Modayil's site" },
            {
              name: 'twitter:description',
              content:
                'Benjamin Modayil is a Front-End Developer from Philadelphia, PA. He likes to write things related to development and life on this site.'
            },
            { name: 'twitter:creator', content: '@modayilme' }, // <!-- Twitter summary card with large image must be at least 280x150px -->
            { name: 'twitter:image:src', content: 'static/twitter-image.png' }, // <!-- Open Graph data -->
            { property: 'og:title', content: "Benjamin Modayil's site" },
            { property: 'og:type', content: 'website' },
            { property: 'og:url', content: 'www.modayil.me' }, // <!-- Open graph image should be 1200 x 1200 (more info here: http://www.h3xed.com/web-and-internet/how-to-use-og-image-meta-tag-facebook-reddit) -->
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
            { rel: 'icon', href: 'static/favicon.ico', type: 'image/x-icon' }
          ]}
        >
          <html lang="en" />
        </Helmet>
<<<<<<< HEAD
        <Border color={'red'} />
        <Navigation navigation={navigation} />
=======
        <Navigation />
>>>>>>> 4d1798138bea3e67c17aa9d0e69bd58a2a509357
        <div className="site__inner">{this.props.children()}</div>
        <Footer data={social} />
      </div>
    )
  }
}

export default TemplateWrapper

export const layoutQuery = graphql`
  query layoutQuery {
    site {
      siteMetadata {
        social {
          URL
          title
          svgURL
        }
<<<<<<< HEAD
        navigation {
          URL
          title
        }
=======
>>>>>>> 4d1798138bea3e67c17aa9d0e69bd58a2a509357
      }
    }
  }
`
