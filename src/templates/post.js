import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Updates from '../_includes/Updates.js'

export default function Template({ data }) {
  console.log({ data })
  const { markdownRemark: post } = data
  // const post = data.markdownRemark;
  // post.frontmatter.category = "productivity",
  // color = blah, then pass this into the post for an inline style on the header.
  return (
    <main className="post__page">
      <article className="post">
        <header className="post__header">
          <div className="post__header-inner">
            <h1 className="heading-level-1">{post.frontmatter.title}</h1>
            <p>
              <span>tl;dr</span>
              {post.frontmatter.tldr}
            </p>
            <img src="/assets/blog/icon-todoList.svg" alt="" />
          </div>
        </header>
        <section className="post__body">
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          <div className="post__blockquote-main">
            <blockquote>
              The future of the web is now. Integrating trends with practice produces
              progression.
            </blockquote>
          </div>
          <p>
            Creating todos are my jam and most likely they are yours too. For a whole lot
            of us there is a joyous feeling of being organized and having things todo. But
            simply, we hate actually doing them.
          </p>
          <p>
            Creating todos are my jam and most likely they are yours too. For a whole lot
            of us there is a joyous feeling of being organized and having things todo. But
            simply, we hate actually doing them.
          </p>
          <blockquote className="post__blockquote-alt">
            The future of the web is now. Integrating trends with practice produces
            progression.
          </blockquote>
          <p>
            Creating todos are my jam and most likely they are yours too. For a whole lot
            of us there is a joyous feeling of being organized and having things todo. But
            simply, we hate actually doing them.
          </p>
          <p>
            Creating todos are my jam and most likely they are yours too. For a whole lot
            of us there is a joyous feeling of being organized and having things todo. But
            simply, we hate actually doing them.
          </p>
          <small className="post__signature">Ben M.</small>
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
      html
      frontmatter {
        path
        title
        tldr
      }
    }
  }
`
