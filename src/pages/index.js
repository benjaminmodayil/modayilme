import React from 'react'
import Header from '../components/homepage/Header'
import RecentWritings from '../components/RecentWritings'
import Updates from '../components/Updates'

class IndexPage extends React.Component {
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
      <main className="relative pb-8" role="main">
        <Header />
        <div>
          <div className="flex flex-col md-flex-row max-w-lgxl mx-auto items-center md-items-start md-justify-between">
            <Updates />
            <RecentWritings />
          </div>
        </div>
      </main>
    )

    // <ArticleLoop data={data} articleArray={caseStudies} />
    // <ArticleLoop data={data} articleArray={caseStudies} />
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
