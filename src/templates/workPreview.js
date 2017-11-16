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
    this.svgRender()
  }

  render() {
    const { markdownRemark: post } = this.props.data

    const cssColor = {
      '--header': post.frontmatter.headerColor,
      '--link': post.frontmatter.linkColor,
      '--text': post.frontmatter.textColor,
      '--bg': post.frontmatter.textBackground,
      '--bg-light': post.frontmatter.metaBackground
    }

    let note
    if (post.frontmatter.imageNote) {
      note = <p dangerouslySetInnerHTML={{ __html: post.frontmatter.imageNote }} />
    }

    return (
      <main className="work__preview-page" style={cssColor}>
        <Helmet
          title="Work | 💼"
          meta={[
            {
              name: 'description',
              content: post.frontmatter.tldr
            },
            { itemprop: 'name', content: post.frontmatter.title },
            {
              itemprop: 'description',
              content: post.frontmatter.tldr
            },
            // <!-- Schema image tag must be at least 180x120px -->
            { itemprop: 'image', content: 'static/google-plus-image.png' },

            // <!-- Twitter Card data -->
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:site', content: '@modayilme' },
            { name: 'twitter:title', content: post.frontmatter.title },
            {
              name: 'twitter:description',
              content: post.frontmatter.tldr
            },
            { name: 'twitter:creator', content: '@modayilme' },
            // <!-- Twitter summary card with large image must be at least 280x150px -->
            { name: 'twitter:image:src', content: 'static/twitter-image.png' },

            // <!-- Open Graph data -->
            { property: 'og:title', content: post.frontmatter.title },
            { property: 'og:type', content: 'website' },
            { property: 'og:url', content: 'www.modayil.me' },
            // <!-- Open graph image should be 1200 x 1200 (more info here: http://www.h3xed.com/web-and-internet/how-to-use-og-image-meta-tag-facebook-reddit) -->
            { property: 'og:image', content: 'static/op-image.jpg' },
            {
              property: 'og:description',
              content: post.frontmatter.tldr
            },
            { property: 'og:site_name', content: post.frontmatter.tldr },
            { name: 'theme-color', content: '#F7484E' }
          ]}
        />
        <article className="work-article">
          <header className="work__header">
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

          <section className="work__preview__body">
            <div className="work__preview__meta-container padding-top-and-bottom--32">
              <div className="work-preview__body__meta color--white wrapper--responsive--medium margin-center">
                <div className="work-preview__body__meta__synopsis container--small">
                  <h2 className="h-2 margin-bottom--32">Synopsis</h2>
                  <p>{post.frontmatter.description}</p>
                </div>
                <div className="work-preview__body__meta__data-and-link">
                  <h2 className="h-2 margin-bottom--32">Created on</h2>
                  <span className="font-weight--light margin-bottom--48">
                    {post.frontmatter.textDate}
                  </span>
                  <a
                    href={post.frontmatter.website}
                    className="work-preview__body__meta__data-and-link__link font-weight--light font-family--heading"
                  >
                    Visit the site
                  </a>
                </div>
              </div>
            </div>
            <div className="wrapper wrapper--wide margin-center">
              <div className="work__preview__container wrapper wrapper--780 margin-center section-padding--bottom-heavy">
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
        description
        textDate
        tldr
        website
        headerColor
        linkColor
        textColor
        textBackground
        metaBackground
        imageNote
        svgName
      }
    }
  }
`
