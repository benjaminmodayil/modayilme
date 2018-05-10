import React from 'react'
import ReactDOM from 'react-dom'
import Link from 'gatsby-link'

import HomeHeader from '../_includes/homepage/HomeHeader'
import CodepenFeed from '../components/CodepenFeed'
import ArticleLoop from '../components/ArticleLoop'

import DetailsList from '../_includes/DetailsList.js'
import CodeImage from '../assets/home-code.png'

// Icons
import IconContactWithColor from '../assets/icons/IconContactWithColor.js'
import IconWebSkills from '../assets/icons/IconWebSkills.js'
import IconGithub from '../assets/icons/details-list/icon-github.svg'
import IconTwitter from '../assets/icons/details-list/icon-twitter.svg'
import IconInstagram from '../assets/icons/details-list/icon-instagram.svg'
import IconLinkedin from '../assets/icons/details-list/icon-linkedin.svg'

import IconCheck from '../assets/icons/home-icons/IconCheck.js'
import IconMic from '../assets/icons/home-icons/IconMic.js'
import IconMobile from '../assets/icons/home-icons/IconMobile.js'
import IconSkills from '../assets/icons/home-icons/IconSkills.js'
import IconThought from '../assets/icons/home-icons/IconThought.js'
import IconWeb from '../assets/icons/home-icons/IconWeb.js'
import IconWork from '../assets/icons/home-icons/IconWork.js'
import IconWrite from '../assets/icons/home-icons/IconWrite.js'

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
      <main className="home-page padding-bottom--64">
        <section className="home__section-one">
          <HomeHeader onClick={this.handleClick.bind(this)} info={allPosts} />
        </section>

        <section
          className="home__section-two color--black font-weight--normal wrapper wrapper--wide margin-center padding-top-and-bottom--96"
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
          <div className="wrapper wrapper--780 font-weight--normal margin-bottom--96 align-center-under--1200">
            <p className="home__big-text margin-top--48">
              If you're looking to hire a <abbr title="Front-End Developer">FED</abbr>,
              don't feel shy and <Link to="/contact">Contact Me</Link>
            </p>
            <p className="home__big-text margin-top--48">
              If you’re looking for work examples you can check out one of the studies
              linked below:
            </p>

            <div className="latest-updates margin-top--96">
              <h2 className="h-2 color--black font-size--24 margin-bottom--32">
                Work Examples{' '}
                <span className="font-style--normal">
                  <IconWork className="s-svg-adjust--down" />
                </span>
              </h2>
              <ArticleLoop data={data} articleArray={caseStudies} />
            </div>
          </div>
          <CodepenFeed />
        </section>

        <section
          className="home__section-two color--black font-weight--normal wrapper wrapper--wide margin-center margin-bottom--15vh"
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
              <IconWrite className="icon-write" />
            </div>
            <div className="latest-updates margin-top--64 wrapper wrapper--780 align-center-under--1200">
              <h2 className="h-2 color--black font-size--24 margin-bottom--32">
                My thoughts <IconThought className="s-svg-adjust--down" />
              </h2>
              <ArticleLoop data={data} articleArray={blogPosts} />
            </div>
          </div>
        </section>

        <section className="home__section-three font-weight--normal home__section-two__inner home__section-two__text-and-image__text wrapper wrapper--wide margin-center align-center-under--1200 padding-bottom--96">
          <div className="home__section-three__row">
            <div className="home__section-three__row__col-left container--medium">
              <p className="home__medium-text color--black margin-bottom--32">
                I really love learning new things related to development. Sounds, boring,
                but it's not as bad as it sounds... I think. Here’s a few things that I
                have been able to add to my skillset.
              </p>
            </div>

            <div className="home__section-three__row__col-right html-details position-right margin-top-and-bottom--32">
              <DetailsList />
            </div>
          </div>
          <div className="home__section-three__row">
            <div className="home__section-three__row__col-left container--medium">
              <p className="home__medium-text color--black margin-bottom--32">
                If you need a{' '}
                <a href="./assets/resume.pdf">
                  resume<span className="screenreader-only">(pdf)</span>
                </a>
                then just click on that keyword. Also feel free to check-out my
                <a href="https://codepen.io/modayilme"> Codepen</a> and below for more
                examples of this things I like to learn.
              </p>
            </div>
          </div>

          <div className="home__section-three__row">
            <div className="home__section-three__row__col-left container--medium">
              <p className="home__medium-text color--black margin-bottom--32">
                If you’re wondering what I’m like outside of work, well, sorry to be a
                bummer, but I like to work. Usually I’m learning something new code-wise,
                reading a{' '}
                <a href="https://www.goodreads.com/user/show/50421880-benjamin">
                  book
                </a>/comics, listening to a podcast, or perhaps, on the rare occasion,
                relaxing.
              </p>
              <p className="home__medium-text color--black margin-bottom--32">
                Interested in following me or keeping updated on things I write or do?
                Follow me on my <a href={data.site.siteMetadata.twitter}>Twitter</a>,{' '}
                <a href={data.site.siteMetadata.instagram}>Instagram</a>, or connect with
                me on <a href={data.site.siteMetadata.linkedIn}>LinkedIn</a>.
              </p>
            </div>

            <div className="home__section-three__row__col-right position-right html-list html-list--social margin-top-and-bottom--64">
              <div className="details-container" ref="detailsContainer">
                <h2 className="h-2">
                  Social{' '}
                  <span className="details-container__sub-title color--black">(HMU)</span>
                  <span className="details-container__emoji">
                    <IconMobile />
                  </span>
                </h2>
                <ul className="details-container__inner">
                  <li>
                    <a
                      className="link --h-text-decoration-underline"
                      href={data.site.siteMetadata.twitter}
                    >
                      <span className="color--black">Twitter</span>
                      <img src={IconTwitter} alt="" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="link --h-text-decoration-underline"
                      href={data.site.siteMetadata.instagram}
                    >
                      <span className="color--black">Instagram</span>
                      <img src={IconInstagram} alt="" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="link --h-text-decoration-underline"
                      href={data.site.siteMetadata.linkedIn}
                    >
                      <span className="color--black">LinkedIn</span>
                      <img src={IconLinkedin} alt="" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="link --h-text-decoration-underline"
                      href={data.site.siteMetadata.github}
                    >
                      <span className="color--black">Github</span>
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
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 50) {
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
