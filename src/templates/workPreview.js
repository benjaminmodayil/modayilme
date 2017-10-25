import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Updates from '../_includes/Updates.js'

export default function Template({ data }) {
  const { markdownRemark: post } = data
  // const post = data.markdownRemark;
  // post.frontmatter.category = "productivity",
  // color = blah, then pass this into the post for an inline style on the header.
  return (
    <main className="work__preview-page">
      <article className="work">
        <header className="work__header">
          <div className="work__header-inner wrapper wrapper--wide margin-center">
            <div className="work__header-inner--left container--medium-to-small ">
              <h1 className="h-1">{post.frontmatter.title}</h1>
            </div>
            <div className="work__header-inner--right">
              <img src="https://picsum.photos/g/500/300" alt="" />
            </div>
          </div>
        </header>

        <section className="work__preview__body">
          <div className="work__preview__container wrapper wrapper--medium margin-center section-padding--bottom-heavy">
            <div
              className="post-work__body"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
            <small className="post__signature col__left">Ben M.</small>
          </div>
        </section>

        <div className="post__misc">
          <Updates />
        </div>
      </article>
    </main>
  )
}

export const workQuery = graphql`
  query WorkStudyByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`
