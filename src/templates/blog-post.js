import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import Header from "../components/header"
import SEO from "../components/seo"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const { previous, next } = this.props.pageContext
    return (
      <Layout>
        <SEO title="Blog | Benjamin Modayil" />
        <Header
          primary={post.frontmatter.title}
          secondary={post.frontmatter.date}
        />
        <main className="post__page leading-normal mt-8 px-8 lg-px-0 lg-mt-48 pb-16">
          <MDXRenderer>{post.body}</MDXRenderer>
        </main>
        <hr className="mt-48" />
        <ul className="flex max-w-3xl mx-auto justify-between py-24">
          <li>
            {previous && (
              <Link
                to={`blog${previous.fields.slug}`}
                rel="prev"
                dangerouslySetInnerHTML={{
                  __html: `← ${previous.frontmatter.title}`,
                }}
              />
            )}
          </li>
          <li>
            {next && (
              <Link
                to={`blog${next.fields.slug}`}
                rel="next"
                dangerouslySetInnerHTML={{
                  __html: `${next.frontmatter.title} →`,
                }}
              />
            )}
          </li>
        </ul>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
