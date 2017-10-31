import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Updates from '../_includes/Updates'
import IconKeurig from '../assets/work-images/IconKeurig'
import * as invert from '../utils/invertColor'

export default function Template({ data }) {
  const { markdownRemark: post } = data

  let note
  if (post.frontmatter.imageNote) {
    note = <p dangerouslySetInnerHTML={{ __html: post.frontmatter.imageNote }} />
  }

  let svgAlias
  let value
  if (post.frontmatter.svgName) {
    svgAlias = post.frontmatter.svgName
  }
  if (IconKeurig.name == svgAlias) {
    value = true
  }

  return (
    <main className="work__preview-page">
      <article className="work">
        <header
          className="work__header"
          style={{ backgroundColor: post.frontmatter.themeColor }}
        >
          <div className="work__header-inner wrapper wrapper--wide margin-center">
            <div className="work__header-inner--left container--medium-to-small ">
              <h1 className="h-1">{post.frontmatter.title}</h1>
              <p>{post.frontmatter.tldr}</p>
            </div>
            <div className="work__header-inner--right">
              {value == true ? <IconKeurig /> : undefined}
              {note}
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
      id
      html
      frontmatter {
        path
        title
        tldr
        website
        themeColor
        imageNote
        svgName
      }
    }
  }
`