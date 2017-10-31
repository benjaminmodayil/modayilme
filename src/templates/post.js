import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Updates from '../_includes/Updates.js'

export default function Template({ data }, props) {
  const { markdownRemark: post } = data

  return (
    <main className="post__page">
      <article className="post">
        <header className="post__header">
          <div className="post__header-inner wrapper wrapper--medium margin-center">
            <h1 className="h-1">{post.frontmatter.title}</h1>
            <p>
              <span>tl;dr</span>
              {post.frontmatter.tldr}
            </p>
            <img src="/assets/blog/icon-todoList.svg" alt="" />
          </div>
        </header>
        <section className="post__body">
          <div className="wrapper wrapper--medium margin-center section-padding--bottom-heavy">
            <div
              className="post-work__body"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
            <small className="post__signature">Ben M.</small>
          </div>
        </section>

        <div className="post__misc">
          <Updates />
        </div>
      </article>
    </main>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        path
        title
        tldr
      }
    }
  }
`
