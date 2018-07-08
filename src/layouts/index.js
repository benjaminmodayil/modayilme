import React from 'react'
import Helmet from 'react-helmet'
import 'typeface-merriweather'
import 'typeface-raleway'
import Navigation from '../components/Navigation'
import Waves from '../assets/Waves'
import Transition from './transition'

import './generated.css'

class TemplateWrapper extends React.Component {
  setColors = () => {
    let item = this.props.data.site.siteMetadata.navigation.filter(
      i => this.props.location.pathname === i.URL
    )
    return this.props.location.pathname.split('/').length === 3
      ? 'bg-white text-black'
      : 'bg-purple text-white'
    // return item[0] ? item[0].bgColor : 'bg-white text-black'
  }
  render() {
    let { social } = this.props.data.site.siteMetadata
    let { navigation } = this.props.data.site.siteMetadata

    return (
      <div className={`site__container min-h-screen ${this.setColors()}`}>
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
            { itemprop: 'image', content: 'assets/google-plus-meta.png' }, // <!-- Twitter Card data -->
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:site', content: '@modayilme' },
            { name: 'twitter:title', content: "Benjamin Modayil's site" },
            {
              name: 'twitter:description',
              content:
                'Benjamin Modayil is a Front-End Developer from Philadelphia, PA. He likes to write things related to development and life on this site.'
            },
            { name: 'twitter:creator', content: '@modayilme' }, // <!-- Twitter summary card with large image must be at least 280x150px -->
            { name: 'twitter:image:src', content: 'assets/twitter-meta.png' }, // <!-- Open Graph data -->
            { property: 'og:title', content: "Benjamin Modayil's site" },
            { property: 'og:type', content: 'website' },
            { property: 'og:url', content: 'www.modayil.me' }, // <!-- Open graph image should be 1200 x 1200 (more info here: http://www.h3xed.com/web-and-internet/how-to-use-og-image-meta-tag-facebook-reddit) -->
            { property: 'og:image', content: 'assets/oggraph-meta.png' },
            {
              property: 'og:description',
              content:
                'Benjamin Modayil is a Front-End Developer from Philadelphia, PA. He likes to write things related to development and life on this site.'
            },
            { property: 'og:site_name', content: "Benjamin Modayil's site" },
            { name: 'theme-color', content: '#5E548E' }
          ]}
          link={[
            { rel: 'shortcut icon', href: 'assets/favicon.ico', type: 'image/x-icon' },
            { rel: 'icon', href: 'assets/favicon.ico', type: 'image/x-icon' }
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Navigation navigation={navigation} location={this.props.location} />

        <div className="site__inner" data={social}>
          {this.props.children()}
        </div>

        {this.props.location.pathname.split('/').length !== 3 ? <Waves /> : ''}
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
        navigation {
          URL
          title
          bgColor
        }
      }
    }
  }
`
