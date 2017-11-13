import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Updates from '../_includes/Updates.js'

export default function Template({ data }, props) {
  const { markdownRemark: post } = data

  return (
    <main className="post__page">
      <article className="post">
        <section className="post__body">
          <div className="wrapper wrapper--wide margin-center">
            <div className="wrapper content-align wrapper--780 margin-center section-padding--bottom-heavy color--white">
              <header className="post__header">
                <h1 className="h-1">{post.frontmatter.title}</h1>
                <p className="tldr margin-top--32 ">
                  <span>tl;dr</span>
                  {post.frontmatter.tldr}
                </p>
              </header>
              <div
                className="post-work__body"
                dangerouslySetInnerHTML={{ __html: post.html }}
              />
            </div>
          </div>
        </section>
      </article>
    </main>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        title
        tldr
        path
      }
    }
  }
`
