import React from 'react'
import ReactDOM from 'react-dom'
import Link from 'gatsby-link'

import HomeHeader from '../_includes/homepage/HomeHeader'
import IconContactWithColor from '../assets/icons/IconContactWithColor.js'
import IconWebSkills from '../assets/icons/IconWebSkills.js'
import IconResume from '../assets/icons/IconResume.js'
import IconGithub from '../assets/icons/details-list/icon-github.svg'
import IconTwitter from '../assets/icons/details-list/icon-twitter.svg'
import IconInstagram from '../assets/icons/details-list/icon-instagram.svg'
import IconLinkedin from '../assets/icons/details-list/icon-linkedin.svg'
import IconLink from '../assets/icons/IconLink.js'
import Updates from '../_includes/Updates.js'
import DetailsList from '../_includes/DetailsList.js'

import AnimationWaves from '../assets/randomAnimations/AnimationWaves'

class IndexPage extends React.Component {
  componentDidMount() {
    require('smoothscroll-polyfill').polyfill()
  }

  handleClick() {
    this.refs.about.scrollIntoView({ behavior: 'smooth' })
  }

  render() {
    const { data } = this.props
    const blogPosts = data.allMarkdownRemark.edges
      .filter((i, index) => i.node.frontmatter.type == 'blog')
      .slice(0, 3)
    const caseStudies = data.allMarkdownRemark.edges
      .filter(i => i.node.frontmatter.type == 'work')
      .slice(0, 3)
    return (
      <main className="home-page">
        <section className="home__section-one">
          <HomeHeader onClick={this.handleClick.bind(this)} />
          <AnimationWaves />
          <div className="wrapper--loop margin-center">
            <h2 className="h-2">
              my <span>writings</span>
            </h2>
            <ul className="article-loop">
              {blogPosts.map(post => {
                if (post.node.frontmatter.external) {
                  return (
                    <li key={post.node.frontmatter.path}>
                      <a href={post.node.frontmatter.external} target="_blank">
                        <h3 className="h-3">{post.node.frontmatter.title}</h3>
                        <p>{post.node.frontmatter.tldr}</p>
                        <IconLink />
                      </a>
                    </li>
                  )
                } else {
                  return (
                    <li key={post.node.frontmatter.path}>
                      <Link to={post.node.frontmatter.path}>
                        <h3 className="h-3">{post.node.frontmatter.title}</h3>
                        <p>{post.node.frontmatter.tldr}</p>
                      </Link>
                    </li>
                  )
                }
              })}
            </ul>
          </div>
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
                Falls Church, VA
              </a>. I work with <a href="https://www.viget.com">Viget</a> in the same
              position, but as an apprentice learning about the industry.
            </p>
            <p className="text-level text-level-big">
              If you’re looking for work examples you can check out one of the studies
              linked below:
            </p>
          </div>
          <div className="wrapper--loop margin-center">
            <h2 className="h-2">
              my <span>work</span>
            </h2>
            <ul className="article-loop">
              {caseStudies.map(post => {
                return (
                  <li key={post.node.frontmatter.path}>
                    <Link to={post.node.frontmatter.path}>
                      <h3 className="h-3">{post.node.frontmatter.title}</h3>
                      <p>{post.node.frontmatter.tldr}</p>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </section>
        <section className="home__section-three section-margin">
          <div className="home__section-three__row row wrapper wrapper--responsive margin-center">
            <div className="home__section-three__row__col-left container--medium-to-tablet">
              <p className="text-level text-level-medium u-background-white paragraph-padding">
                I really love learning technologies. I’m not lying here. Here’s a few
                things that I have been able to add to my skillset.
              </p>
            </div>

            <div className="home__section-three__row__col-right html-details position-right">
              <DetailsList />
            </div>
          </div>
          <div className="home__section-three__row row wrapper wrapper--responsive margin-center">
            <div className="home__section-three__row__col-left container--medium-to-tablet">
              <p className="text-level text-level-medium u-background-white">
                If you need a <a href="./static/modayilResume.pdf"> resume </a> then just
                click on that keyword. Also feel free to check-out my{' '}
                <a href="https://codepen.io/modayilme">Codepen</a> and below for more
                examples of this things I like to learn.
              </p>
            </div>

            <div className="home__section-three__row__col-right position-right html-list html-list--resume">
              <div
                className="details-container details-container-resume"
                ref="detailsContainer"
              >
                <h2 className="h-2">
                  Resume{' '}
                  <span className="details-container__sub-title">(very profesh.)</span>
                  <span className="details-container__emoji">💼</span>
                </h2>
                <div className="details-container__inner details-container__inner-resume">
                  <a
                    className="details-container__inner__resume"
                    href="./static/modayilResume.pdf"
                  >
                    <IconResume />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="home__section-three__row row wrapper wrapper--responsive margin-center">
            <div className="home__section-three__row__col-left container--medium-to-tablet">
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
                <a href={data.site.siteMetadata.twitter}>Twitter</a>,{' '}
                <a href={data.site.siteMetadata.instagram}>Instagram</a>, or connect with
                me on <a href={data.site.siteMetadata.linkedIn}>LinkedIn</a>.
              </p>
            </div>

            <div className="home__section-three__row__col-right position-right html-list html-list--social">
              <div className="details-container" ref="detailsContainer">
                <h2 className="h-2">
                  Social <span className="details-container__sub-title">(HMU)</span>
                  <span className="details-container__emoji">📱</span>
                </h2>
                <ul className="details-container__inner">
                  <li>
                    <a href={data.site.siteMetadata.twitter}>
                      <span>Twitter</span>
                      <img src={IconTwitter} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href={data.site.siteMetadata.instagram}>
                      <span>Instagram</span>
                      <img src={IconInstagram} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href={data.site.siteMetadata.linkedIn}>
                      <span>LinkedIn</span>
                      <img src={IconLinkedin} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href={data.site.siteMetadata.github}>
                      <span>Github</span>
                      <img src={IconGithub} alt="" />
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

export default IndexPage

export const indexBlogListingQuery = graphql`
  query IndexingQuery {
    allMarkdownRemark(limit: 100) {
      edges {
        node {
          frontmatter {
            title
            tldr
            path
            type
          }
        }
      }
    }
    site {
      siteMetadata {
        twitter
        instagram
        linkedIn
        github
      }
    }
  }
`
