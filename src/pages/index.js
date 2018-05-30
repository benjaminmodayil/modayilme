import React from 'react'

class IndexPage extends React.Component {
  // componentDidMount() {
  //   require('smoothscroll-polyfill').polyfill()
  // }

  // handleClick() {
  //   this.refs.about.scrollIntoView({ behavior: 'smooth' })
  // }

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
      <h1>Hi</h1>
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
        twitter
        instagram
        linkedIn
        github
      }
    }
  }
`
