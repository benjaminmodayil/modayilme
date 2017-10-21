import React, { Component } from 'react'
import Link from 'gatsby-link'

class AboutMe extends Component {
  render() {
    return (
      <section>
        <h2>
          <span>about</span> .me
        </h2>
        <p>
          Hi there! My name is Benjamin Modayil. I’m a front-end developer/designer
          currently residing in Falls Church, VA. At the moment I’m a front-end developer
          apprentice with Viget.
        </p>
        <p>
          Currently, I’m looking for employment after my apprenticeship. If you’re looking
          for a potential hire, check out my <Link to="/work">resume</Link> and my{' '}
          <Link to="/work">portfolio</Link> (both also found on my{' '}
          <Link to="/work">works</Link> page).
        </p>
      </section>
    )
  }
}

export default AboutMe
