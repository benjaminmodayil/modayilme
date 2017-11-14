import React from 'react'
import ReactDOM from 'react-dom'
import Link from 'gatsby-link'

import HomeHeader from '../_includes/homepage/HomeHeader'
import IconContactWithColor from '../assets/icons/IconContactWithColor.js'
import IconWebSkills from '../assets/icons/IconWebSkills.js'
import IconGithub from '../assets/icons/details-list/icon-github.svg'
import IconTwitter from '../assets/icons/details-list/icon-twitter.svg'
import IconInstagram from '../assets/icons/details-list/icon-instagram.svg'
import IconLinkedin from '../assets/icons/details-list/icon-linkedin.svg'
import IconLink from '../assets/icons/IconLink.js'
import Updates from '../_includes/Updates.js'
import DetailsList from '../_includes/DetailsList.js'
import CodeImage from '../assets/home-code.png'

class IndexPage extends React.Component {
  componentDidMount() {
    require('smoothscroll-polyfill').polyfill()
  }

  handleClick() {
    this.refs.about.scrollIntoView({ behavior: 'smooth' })
  }

  render() {
    const { data } = this.props
    const allPosts = data.allMarkdownRemark.edges
    const blogPosts = allPosts
      .filter((i, index) => i.node.frontmatter.type == 'blog')
      .slice(0, 4)
    const caseStudies = allPosts
      .filter(i => i.node.frontmatter.type == 'work')
      .slice(0, 4)

    return (
      <main className="home-page wrapper wrapper--wide margin-center">
        <section className="home__section-one">
          <HomeHeader onClick={this.handleClick.bind(this)} info={allPosts} />
        </section>

        <section
          className="home__section-two color--white font-weight--normal margin-bottom--15vh"
          ref="about"
        >
          <div className="home__section-two__text-and-image" id="bio">
            <div className="home__section-two__text-and-image__text wrapper wrapper--780 align-center-under--1200">
              <p className="home__big-text">
                I’m a{' '}
                <a href="https://en.wikipedia.org/wiki/Front-end_web_development">
                  Front-End Developer
                </a>{' '}
                currently living in{' '}
                <a href="https://www.google.com/maps/place/Falls+Church,+VA/@38.8860194,-77.1898726,14z/data=!3m1!4b1!4m5!3m4!1s0x89b64b6e7a4663ad:0x6e536688973d9759!8m2!3d38.882334!4d-77.1710914">
                  Philadelphia, PA
                </a>. I recently finished an apprenticeship with{' '}
                <a href="https://www.viget.com">Viget</a> in the same position, but as an
                apprentice learning about working within an agency.
              </p>
            </div>
            <div className="home__section-two__text-and-image__image margin-top--48">
              <img src={CodeImage} alt="" />
            </div>
          </div>
          <div className="wrapper wrapper--780 font-weight--normal margin-bottom--64 align-center-under--1200">
            <p className="home__big-text margin-top--48">
              If you're looking to hire a <abbr title="Front-End Developer">FED</abbr>,
              don't feel shy and{' '}
              <Link to="/contact">
                <abbr title="Hit Me Up">HMU</abbr>
              </Link>
            </p>
            <p className="home__big-text margin-top--48">
              If you’re looking for{' '}
              <span role="img" aria-label="work">
                👷🏾‍♂️{' '}
              </span>{' '}
              examples you can check out one of the studies linked below:
            </p>

            <div className="latest-updates margin-top--64">
              <h2 className="h-2 color--white font-style--italic font-size--24 margin-bottom--32">
                Work Examples
              </h2>
              <ul>
                {caseStudies.map(post => {
                  if (post.node.frontmatter.external) {
                    return (
                      <li className="margin-bottom--32" key={post.node.frontmatter.path}>
                        <a
                          href={post.node.frontmatter.external}
                          className="padding-left-and-right--16 padding-top-and-bottom--16"
                        >
                          <h3 className="h-3 font-size--18 margin-bottom--14">
                            {post.node.frontmatter.title}
                          </h3>
                          <p className="font-size--16">
                            {post.node.frontmatter.tldr}
                          </p>
                          <IconLink className="margin-top--16" />
                        </a>
                      </li>
                    )
                  } else {
                    return (
                      <li className="margin-bottom--32" key={post.node.frontmatter.path}>
                        <Link
                          to={post.node.frontmatter.path}
                          className="padding-left-and-right--16 padding-top-and-bottom--16"
                        >
                          <h3 className="h-3 font-size--18 margin-bottom--14">
                            {post.node.frontmatter.title}
                          </h3>
                          <p className="font-size--16">
                            {post.node.frontmatter.tldr}
                          </p>
                        </Link>
                      </li>
                    )
                  }
                })}
              </ul>
            </div>
          </div>
        </section>

        <section
          className="home__section-two color--white font-weight--normal margin-bottom--15vh"
          ref="about"
        >
          <div className="home__section-two__inner home__section-two__text-and-image__text align-center-under--1200 home__section-three__row">
            <div className="container--temp home__section-three__row__col-left container--medium">
              <p className="home__big-text">
                I also like to write whenever I get a chance of reflection or have an
                ongoing idea I want to entertain. If you’re interested in things I’m
                interested check out the links below.
              </p>
            </div>
            <div className="home__section__aside-emoji margin-top--48 home__section-three__row__col-right position-right margin-top-and-bottom--32">
              <span role="img" aria-label="writings">
                ✍️
              </span>
            </div>
            <div className="latest-updates margin-top--64 wrapper wrapper--780 align-center-under--1200">
              <h2 className="h-2 color--white font-style--italic font-size--24 margin-bottom--32">
                My thoughts
              </h2>
              <ul>
                {blogPosts.map(post => {
                  if (post.node.frontmatter.external) {
                    return (
                      <li className="margin-bottom--32" key={post.node.frontmatter.path}>
                        <a
                          href={post.node.frontmatter.external}
                          className="padding-left-and-right--16 padding-top-and-bottom--16"
                        >
                          <h3 className="h-3 font-size--18 margin-bottom--14">
                            {post.node.frontmatter.title}
                          </h3>
                          <p className="font-size--16">
                            {post.node.frontmatter.tldr}
                          </p>
                          <IconLink />
                        </a>
                      </li>
                    )
                  } else {
                    return (
                      <li className="margin-bottom--32" key={post.node.frontmatter.path}>
                        <Link
                          to={post.node.frontmatter.path}
                          className="padding-left-and-right--16 padding-top-and-bottom--16"
                        >
                          <h3 className="h-3 font-size--18 margin-bottom--14">
                            {post.node.frontmatter.title}
                          </h3>
                          <p className="font-size--16">
                            {post.node.frontmatter.tldr}
                          </p>
                        </Link>
                      </li>
                    )
                  }
                })}
              </ul>
            </div>
          </div>
        </section>

        <section className="home__section-three section-margin font-weight--normal home__section-two__inner home__section-two__text-and-image__text wrapper align-center-under--1200">
          <div className="home__section-three__row">
            <div className="home__section-three__row__col-left container--medium">
              <p className="home__medium-text color--white margin-bottom--32">
                I really love learning new things related to development. I’m not lying.
                Here’s a few things that I have been able to add to my skillset.
              </p>
            </div>

            <div className="home__section-three__row__col-right html-details position-right margin-top-and-bottom--32">
              <DetailsList />
            </div>
          </div>
          <div className="home__section-three__row">
            <div className="home__section-three__row__col-left container--medium">
              <p className="home__medium-text color--white margin-bottom--32">
                If you need a <a href="./static/resumeModayil.pdf"> resume </a> then just
                click on that keyword. Also feel free to check-out my{' '}
                <a href="https://codepen.io/modayilme">Codepen</a> and below for more
                examples of this things I like to learn.
              </p>
            </div>
          </div>

          <div className="home__section-three__row">
            <div className="home__section-three__row__col-left container--medium">
              <p className="home__medium-text color--white margin-bottom--32">
                If you’re wondering what I’m like outside of work, well, sorry to be a
                bummer, but I like to work. Usually I’m learning something new code-wise,
                reading a{' '}
                <a href="https://www.goodreads.com/user/show/50421880-benjamin">
                  book
                </a>/comics, listening to a podcast, or perhaps, on the rare occasion,
                relaxing.
              </p>
              <p className="home__medium-text color--white margin-bottom--32">
                Interested in following me or keeping updated on things I write or do?
                Follow me on my <a href={data.site.siteMetadata.twitter}>Twitter</a>,{' '}
                <a href={data.site.siteMetadata.instagram}>Instagram</a>, or connect with
                me on <a href={data.site.siteMetadata.linkedIn}>LinkedIn</a>.
              </p>
            </div>

            <div className="home__section-three__row__col-right position-right html-list html-list--social margin-top-and-bottom--64">
              <div className="details-container" ref="detailsContainer">
                <h2 className="h-2">
                  Social <span className="details-container__sub-title">(HMU)</span>
                  <span className="details-container__emoji">📱</span>
                </h2>
                <ul className="details-container__inner">
                  <li>
                    <a href={data.site.siteMetadata.twitter}>
                      <span className="font-style--italic color--black">Twitter</span>
                      <img src={IconTwitter} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href={data.site.siteMetadata.instagram}>
                      <span className="font-style--italic color--black">Instagram</span>
                      <img src={IconInstagram} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href={data.site.siteMetadata.linkedIn}>
                      <span className="font-style--italic color--black">LinkedIn</span>
                      <img src={IconLinkedin} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href={data.site.siteMetadata.github}>
                      <span className="font-style--italic color--black">Github</span>
                      <img src={IconGithub} alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
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
            external
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
