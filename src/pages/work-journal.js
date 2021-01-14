import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Header from "../components/header"
import SEO from "../components/seo"
import ArticleCard from "../components/ArticleCard"
// add inspired by // https://samselikoff.com/work-journal
const ProjectLog = ({ location, data }) => {
  const posts = data.allMdx.edges
  const listItems = posts.map(({ node }) => {
    const { fields, frontmatter } = node
    return (
      <ArticleCard
        as="li"
        link={`/work-journal${fields.slug}`}
        isExternal={false}
        title={frontmatter.title}
        preview={frontmatter.description}
        date={frontmatter.date}
      />
    )
  })
  return (
    <Layout path={location.pathname}>
      <SEO title="Work Journal | Benjamin Modayil" />
      <Header
        primary={"Work Journal"}
        secondary={
          'An "anything goes" space where I document what I did during the week as well as any side-hustle/projects.'
        }
      />
      <main>
        <ul className="list-reset text-left max-w-sm mx-auto">{listItems}</ul>
      </main>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/work-journal/" } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            isExternal
          }
        }
      }
    }
  }
`
export default ProjectLog
