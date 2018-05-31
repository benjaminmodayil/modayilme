import React from 'react'
import Helmet from 'react-helmet'
import ArticleLoop from '../components/ArticleLoop'
export default class Archive extends React.Component {
  render() {
    const allPosts = this.props.data.allMarkdownRemark.edges
    const blogPosts = allPosts.filter((i, index) => i.node.frontmatter.type == 'blog')
    // .slice(0, 4)
    const caseStudies = allPosts.filter(i => i.node.frontmatter.type == 'work')
    // .slice(0, 4)

    return (
      <React.Fragment>
        <Helmet
          title="Archive | 🗝️"
          meta={[{ name: 'description', content: 'Archive of Content' }]}
        />

        <main className="archive__page padding-top-and-bottom--64">
          <div className="wrapper wrapper--tablet margin-center">
            <h1 className="h-1 color--black font-size--24 margin-bottom--16">
              Archived Articles and Work
            </h1>
            <div className="archive__page__inner">
              <div className="latest-updates margin-top--80">
                <h2
                  className="h-2 color--black font-size--24 margin-bottom--32"
                  id="articles"
                >
                  Articles Archive
                </h2>
                <ArticleLoop articleArray={blogPosts} />
              </div>

              <div className="latest-updates margin-top--64">
                <h2
                  className="h-2 color--black font-size--24 margin-bottom--32"
                  id="work"
                >
                  Work Archive
                </h2>
                <ArticleLoop articleArray={caseStudies} />
              </div>
            </div>
          </div>
        </main>
      </React.Fragment>
    )
  }
}

export const archiveQuery = graphql`
  query ArchiveQuery {
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
  }
`
