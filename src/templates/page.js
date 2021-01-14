import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import Header from "../components/header"
import SEO from "../components/seo"

function PageTemplate({ data: { mdx }, ...rest }) {
  return (
    <Layout>
      <SEO title={`${mdx.frontmatter.title} | Benjamin Modayil`} />
      <Header
        primary={mdx.frontmatter.title}
        secondary={mdx.frontmatter.description}
      />
      <main className="post__page leading-normal mt-8 px-8 lg-px-0 lg-mt-48 pb-16">
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </main>
    </Layout>
  )
}

export default PageTemplate

export const pageQuery = graphql`
  query PageById($url: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(frontmatter: { url: { eq: $url } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        description
      }
    }
  }
`
