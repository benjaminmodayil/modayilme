import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Nav from '../_includes/Nav.js'
import Footer from '../_includes/Footer.js'

import './index.scss'

class TemplateWrapper extends React.Component {
  renderNav = () => {
    if (this.props.location.pathname != '/') {
      return <Nav />
    }
  }

  themify = () => {
    // Yank theme color from localStorage and use it.
    document.documentElement.style.setProperty('--red', 'blue')

    // // document.documentElement.style.setProperty(
    // //   '--mainColor',
    // //   localStorage.getItem('userThemeColor')
    // // )

    // localStorage.setItem('userThemeColor', this.value)

    // var colorInput = document.querySelector('#choose-theme-color')

    // colorInput.addEventListener('change', function() {
    //   // Theme the site!
    //   document.documentElement.style.setProperty('--mainColor', this.value)

    //   // Save the value for next time page is visited.
    //   document.documentElement.style.setProperty(
    //     '--mainColor',
    //     localStorage.getItem('userThemeColor')
    //   )
    //   localStorage.setItem('userThemeColor', this.value)
    // })
  }

  render() {
    return (
      <div className="site__container">
        {this.themify()}
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
