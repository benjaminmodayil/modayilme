import React from 'react'
import Link from 'gatsby-link'

import RandomAnimation from '../assets/RandomAnimation.js'
import IconArchive from '../assets/icons/IconArchive.js'
import IconWork from '../assets/icons/IconWork.js'
import IconContact from '../assets/icons/IconContact.js'
import Updates from '../_includes/Updates.js'
import AboutMe from '../_includes/AboutMe.js'

const IndexPage = ({ data }) => (
  <div>
    <nav className="nav mobile-only">
      <div className="nav__inner">
        <ul>
          <li>
            <Link to="/archive">
              <IconArchive />
              <span>Archive</span>
            </Link>
          </li>
          <li>
            <Link to="/work">
              <IconWork />
              <span>Work</span>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <IconContact />
              <span>Contact</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>

    <main className="home">
      <header className="home__header">
        <div className="header__container">
          <div className="left__column">
            <h1>
              <span>Welcome to</span> modayil.me
            </h1>
            <p>
              <span>Benjamin Modayil</span> is a Front-End Developer from Philadelphia,
              Pennsylvannia.
            </p>
            <Link to="/work" className="btn">
              Learn more
            </Link>
          </div>

          <div className="right__column">
            <nav className="nav nav__home">
              <div className="nav__inner desktop-only">
                <ul>
                  <li>
                    <Link to="/archive">
                      <IconArchive />
                      <span>Archive</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/work">
                      <IconWork />
                      <span>Work</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact">
                      <IconContact />
                      <span>Contact</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
      <div className="home__content wrapper">
        <div className="row">
          <div className="home__module component__list home__updates">
            <h2>
              <span>updates</span> from my life
            </h2>
            <ul>
              {data.allMarkdownRemark.edges.map(post => (
                <li>
                  <Link key={post.node.id} to={post.node.frontmatter.path}>
                    <h3>{post.node.frontmatter.title}</h3>
                    <p>{post.node.frontmatter.tldr}</p>
                    <small>date</small>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="home__module component__list home__featured">
            <h2>
              my <span>featured</span> work
            </h2>
            <ul>
              <li>
                <Link to="/work-preview.html">
                  <h3>Lighthouse Hill</h3>
                  <p>My Web Design Capstone Project</p>
                </Link>
              </li>
              <li>
                <Link to="/work-preview.html">
                  <h3>GroundRulesCo</h3>
                  <p>Group Project with other Viget Interns</p>
                </Link>
              </li>
              <li>
                <Link to="/work-preview.html">
                  <h3>Polygon Animation</h3>
                  <p>description goes here</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="home__module home__about">
            <AboutMe />
          </div>
          <div className="svg__animation home__module">
            <RandomAnimation />
          </div>
        </div>
        <Updates />
      </div>
    </main>
  </div>
)

// export const pageQuery = graphql`
//   query IndexQuery {
//     allMarkdownRemark(limit: 10) {
//       edges {
//         node {
//           id
//           frontmatter {
//             title
//             tldr
//             path
//           }
//         }
//       }
//     }
//   }
// `
export default IndexPage
