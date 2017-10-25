import React from 'react'
import ReactDOM from 'react-dom'
import Link from 'gatsby-link'

require('smoothscroll-polyfill').polyfill()
import HomeHeader from '../_includes/homepage/HomeHeader'
import RandomAnimation from '../assets/RandomAnimation.js'
import IllAvatar from '../assets/IllAvatar.js'
import IconContactWithColor from '../assets/icons/IconContactWithColor.js'
import IconWebSkills from '../assets/icons/IconWebSkills.js'
import IconResume from '../assets/icons/IconResume.js'
import IconSocial from '../assets/icons/IconSocial.js'
import Updates from '../_includes/Updates.js'
import DetailsList from '../_includes/DetailsList.js'

class IndexPage extends React.Component {
  handleClick() {
    this.refs.about.scrollIntoView({ behavior: 'smooth' })
  }

  render() {
    const { data } = this.props
    return (
      <main className="home-page">
        <section className="home__section-one">
          <HomeHeader onClick={this.handleClick.bind(this)} />
          <h2 className="h-2 wrapper wrapper--extra-wide margin-center">
            my <span>writings</span>
          </h2>
          <ul className="article-loop">
            {data.allMarkdownRemark.edges
              .filter(i => i.node.frontmatter.type == 'blog')
              .map(post => {
                if (post.node.frontmatter.type == 'blog') {
                  return (
                    <li>
                      <Link
                        key={post.node.id}
                        to={post.node.frontmatter.path}
                        previous={post.node.frontmatter.title}
                      >
                        <h3 className="h-3">{post.node.frontmatter.title}</h3>
                        <p>{post.node.frontmatter.tldr}</p>
                      </Link>
                    </li>
                  )
                }
              })
              .filter((i, index) => (index = 3))}
          </ul>
        </section>

        <section className="home__section-two" ref="about">
          <div
            className="home__section-two__row wrapper wrapper--medium margin-center section-padding"
            id="bio"
          >
            <p className="text-level text-level-big">
              Okay. Enough third-person talk. I’m a{' '}
              <a href="https://en.wikipedia.org/wiki/Front-end_web_development">
                Front-End Developer
              </a>{' '}
              currently living in{' '}
              <a href="https://www.google.com/maps/place/Falls+Church,+VA/@38.8860194,-77.1898726,14z/data=!3m1!4b1!4m5!3m4!1s0x89b64b6e7a4663ad:0x6e536688973d9759!8m2!3d38.882334!4d-77.1710914">
                Falls Church, VA{' '}
              </a>. I work with <a href="https://www.viget.com">Viget</a> in the same
              position, but as an apprentice learning about the industry.
            </p>
            <p className="text-level text-level-big">
              If you’re looking for work examples you can check out one of the studies
              linked below:
            </p>
          </div>

          <h2 className="h-2 wrapper wrapper--extra-wide margin-center">
            my <span>work</span>
          </h2>
          <ul className="article-loop">
            {data.allMarkdownRemark.edges.map(post => {
              if (post.node.frontmatter.type == 'work') {
                return (
                  <li>
                    <Link key={post.node.id} to={post.node.frontmatter.path}>
                      <h3 className="h-3">{post.node.frontmatter.title}</h3>
                      <p>{post.node.frontmatter.tldr}</p>
                    </Link>
                  </li>
                )
              }
            })}
          </ul>
        </section>
        <section className="home__section-three section-margin">
          <div className="home__section-three__row row wrapper wrapper--tablet margin-center">
            <div className="home__section-three__row__col-left">
              <p className="text-level text-level-medium u-background-white">
                I really love learning technologies. I’m not lying here. Here’s a few
                things that I have been able to add to my skillset.
              </p>
            </div>

            <div className="home__section-three__row__col-right html-details position-right">
              <DetailsList />
              {/* <IconWebSkills /> */}
            </div>
          </div>
          <div className="home__section-three__row row wrapper wrapper--tablet margin-center">
            <div className="home__section-three__row__col-left">
              <p className="text-level text-level-medium u-background-white">
                If you need a <a href="./static/resumeModayil.pdf"> resume </a> then just
                click on that keyword. Also feel free to check-out my{' '}
                <a href="https://codepen.io/modayilme">Codepen</a> and below for more
                examples of this things I like to learn.
              </p>
            </div>

            <div className="home__section-three__row__col-right position-right html-list">
              <div className="details-container" ref="detailsContainer">
                <h2 className="h-2">
                  Resume <span>(very profesh.)</span>
                  <img src="#todo" alt="" />
                </h2>
                <div className="details-container__inner details-container__inner-resume">
                  <a href="resume">{<IconResume />}</a>
                </div>
              </div>
            </div>
          </div>

          <div className="home__section-three__row row wrapper wrapper--tablet margin-center">
            <div className="home__section-three__row__col-left">
              <p className="text-level text-level-medium u-background-white">
                If you’re wondering what I’m like outside of work, well, sorry to be a
                bummer, but I like to work. Usually I’m learning something new code-wise,
                reading a{' '}
                <a href="https://www.goodreads.com/user/show/50421880-benjamin">
                  book
                </a>/comics, listening to a podcast, or perhaps, on the rare occasion,
                relaxing.
              </p>
              <p className="text-level text-level-medium u-background-white">
                Interested in following me or keeping updated on things I write or do?
                Sign up for my newsletter below, follow me on my{' '}
                <a href="https://twitter.com/modayilme">Twitter</a>,{' '}
                <a href="https://www.instagram.com/modayilme/">Instagram</a>, or connect
                with me on{' '}
                <a href="https://www.linkedin.com/in/benjamin-modayil-89136411a/">
                  LinkedIn
                </a>.
              </p>
            </div>
            <div className="home__section-three__row__col-right position-right html-list">
              <div className="details-container" ref="detailsContainer">
                <h2 className="h-2">
                  Social <span>(HMU)</span>
                </h2>
                <ul className="details-container__inner">
                  <li>
                    <a href="#todo">
                      <span>Twitter</span>
                      <img src="#todo" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#todo">
                      <span>Instagram</span>
                      <img src="#todo" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#todo">
                      <span>LinkedIn</span>
                      <img src="#todo" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#todo">
                      <span>Github</span>
                      <img src="#todo" alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <Updates />
      </main>
    )
  }
}

export const indexBlogListingQuery = graphql`
  query IndexingQuery {
    allMarkdownRemark(limit: 6) {
      edges {
        node {
          id
          frontmatter {
            title
            tldr
            path
            type
          }
        }
      }
    }
  }
`

export default IndexPage
