import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Updates from '../_includes/Updates'
import IconKeurig from '../assets/work-images/IconKeurig'
import * as invert from '../utils/invertColor'

class Template extends React.Component {
  svgRender() {
    if (this.props.data.markdownRemark.frontmatter.svgName == IconKeurig.name) {
      return true
    }
  }

  componentDidMount() {
    this.forceUpdate()
  }

  render() {
    const { markdownRemark: post } = this.props.data

    let note
    if (post.frontmatter.imageNote) {
      note = <p dangerouslySetInnerHTML={{ __html: post.frontmatter.imageNote }} />
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
                <p className="font-size--16 font-style--italic">
                  {post.frontmatter.tldr}
                </p>
              </div>
              {post.frontmatter.svgName == IconKeurig.name ? (
                <div className="work__header-inner--right">
                  <IconKeurig />
                </div>
              ) : null}
            </div>
          </header>
          <div className="post-note color--white">
            <em>Note:</em>
            <p>
              This site is currently being worked on (as of October 31st 👻). If you've
              managed to find your way here, stay tuned for some 👌🏾 looking things on
              November 6th.
            </p>
          </div>

          <section className="work__preview__body">
            <div className="wrapper wrapper--wide margin-center">
              <div className="work__preview__container wrapper wrapper--780 margin-center section-padding--bottom-heavy">
                <div
                  className="post-work__body color--white"
                  dangerouslySetInnerHTML={{ __html: post.html }}
                />
              </div>
            </div>
          </section>
        </article>
      </main>
    )
  }
}

export default Template

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
        script
      }
    }
  }
`
