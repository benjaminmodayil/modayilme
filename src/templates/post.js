import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Updates from '../_includes/Updates.js'

import IconArrowLeft from '../assets/post-assets/IconArrowLeft'
import IconArrowRight from '../assets/post-assets/IconArrowRight'

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
      <div className="bg-color--grey">
        <article className="post">
          <section className="post__body">
            <header className="post__header bg-color--bg">
              <div className="wrapper content-align wrapper--780 margin-center section-padding color--white">
                <h1
                  className="h-1"
                  dangerouslySetInnerHTML={{ __html: post.frontmatter.title }}
                />
                <p className="tldr margin-top--32">
                  <span className="font-style--italic font-size--18 font-weight--light">
                    tl;dr:
                  </span>
                  {post.frontmatter.tldr}
                </p>
                <span className="post__date margin-top--32 font-style--italic">
                  {post.frontmatter.date}
                </span>
              </div>
            </header>

            <div className="work__preview__container wrapper wrapper--780 margin-center section-padding--bottom-heavy">
              <div
                className="post-work__body margin-bottom--96"
                dangerouslySetInnerHTML={{ __html: post.html }}
              />
              <div className="post__related">
                <h2 className="screenreader-only">
                  Other articles you might like to read:
                </h2>
                <nav className="post__related-articles">
                  <a
                    href=""
                    className="post__related-articles__item margin-top-and-bottom--16 padding-top-and-bottom--16 padding-left-and-right--16 u-text-decoration--none"
                  >
                    <span className="arrow --left">
                      <IconArrowLeft />
                    </span>
                    <span className="post__related-articles__item__text">
                      <h3
                        className="h-3 font-size--18"
                        dangerouslySetInnerHTML={{ __html: post.frontmatter.title }}
                      />
                      <p className="font-size--16">{post.frontmatter.tldr}</p>
                    </span>
                  </a>
                  <a
                    href=""
                    className="post__related-articles__item margin-top-and-bottom--16 padding-top-and-bottom--16 padding-left-and-right--16 u-text-decoration--none"
                  >
                    <span className="post__related-articles__item__text">
                      <h3
                        className="h-3 font-size--18"
                        dangerouslySetInnerHTML={{ __html: post.frontmatter.title }}
                      />
                      <p className="font-size--16">{post.frontmatter.tldr}</p>
                    </span>
                    <span className="arrow --right">
                      <IconArrowRight />
                    </span>
                  </a>
                </nav>
              </div>
            </div>
          </section>
        </article>
      </div>
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
