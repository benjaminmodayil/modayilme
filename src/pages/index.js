import React from 'react'
import ReactDOM from 'react-dom'
import Link from 'gatsby-link'

import CodepenFeed from '../components/CodepenFeed'
import ArticleLoop from '../components/ArticleLoop'

// Icons
import IconContactWithColor from '../assets/icons/IconContactWithColor.js'
import IconWebSkills from '../assets/icons/IconWebSkills.js'
import IconGithub from '../assets/icons/details-list/icon-github.svg'
import IconTwitter from '../assets/icons/details-list/icon-twitter.svg'
import IconInstagram from '../assets/icons/details-list/icon-instagram.svg'
import IconLinkedin from '../assets/icons/details-list/icon-linkedin.svg'

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
