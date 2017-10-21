import React from 'react'
import Link from 'gatsby-link'
import IconWorkAlt from '../assets/icons/IconWorkAlt.js'
import Updates from '../_includes/Updates.js'

const Work = ({ data }) => (
  <main className="work__page">
    <header className="work__header">
      <div className="header__container">
        <div className="work__header-inner left">
          <h1>Workings</h1>
          <p>
            Find examples of my work and the type of things I'm interested in creating.{' '}
          </p>
        </div>
        <div className="right__column">
          <IconWorkAlt />
        </div>
      </div>
    </header>

    <div className="row">
      <p>
        Okay. Enough third-person talk. I’m a Front-End Developer currently living in
        Falls Church, VA. I work with Viget in the same position, but as an apprentice
        learning about the industry. If you’re looking for work examples you can check out
        one of the sites linked here or my experiments below:
      </p>
    </div>
    <div className="row">
      <Updates />
    </div>
  </main>
)
// query a work descriptor post
export const anotherQuery = graphql`
  query WorkQuery {
    site {
      siteMetadata {
        title
        skillset
      }
    }
  }
`
export default Work
