import Link from 'gatsby-link'
import React from 'react'
import ArticleGrid from '../components/homepage/ArticleGrid'
import CloserSection from '../components/homepage/CloserSection'
import Header from '../components/homepage/Header'
import IntroSection from '../components/homepage/IntroSection'
import SkillsSection from '../components/homepage/SkillsSection'
import WorkGrid from '../components/homepage/WorkGrid'

class IndexPage extends React.Component {
  // componentDidMount() {
  //   require('smoothscroll-polyfill').polyfill()
  // }

  // handleClick() {
  //   this.refs.about.scrollIntoView({ behavior: 'smooth' })
  // }

  render() {
    const { data } = this.props
    const meta = data.site.siteMetadata.skillset.map((el, index) => (
      <li
        key={index}
        className="text-red text-sm font-semibold uppercase w-1-4 flex justify-center px-2 md-px-4 my-4"
      >
        <span className="bg-white shadow-md p-2 rounded w-full text-center">{el}</span>
      </li>
    ))
    const { edges } = data.allMarkdownRemark
    const articles = edges
      .filter((i, index) => i.node.frontmatter.type == 'blog')
      .slice(0, 4)
    const workExamples = edges.filter(i => i.node.frontmatter.type == 'work').slice(0, 6)

    return (
      <main className="relative min-h-screen pb-16 md-pb-64" role="main">
        <div className="announcement announcement--animate bg-blue py-2 absolute z-0 w-full">
          <p className="text-white text-center font-serif text-md">
            <span className="italic mr-4 sans text-sm">Latest:</span>{' '}
            <Link to="/writings/post" className="no-underline hover-underline text-white">
              New Year Resolutions
            </Link>
          </p>
        </div>

        <Header />

        <div className="home-info__container container xl-bg-white mx-auto py-16 px-4 lg-px-0">
          <IntroSection />
          <SkillsSection meta={meta} />
          <WorkGrid items={workExamples} />
          <ArticleGrid items={articles} />
          <CloserSection />
        </div>
      </main>

      // <ArticleLoop data={data} articleArray={caseStudies} />
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
        skillset
        social {
          URL
          title
          svgURL
        }
      }
    }
  }
`
