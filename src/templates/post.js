import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Updates from '../_includes/Updates.js'

export default function Template({ data }, props) {
  const { markdownRemark: post } = data

  return (
    <main className="post__page">
      <Helmet
        title="Blog | ✍️"
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
        date(formatString: "DD MMMM, YYYY")
        title
        tldr
        path
      }
    }
  }
`
