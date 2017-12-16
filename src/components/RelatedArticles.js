import React, { Component } from 'react'

import IconArrowLeft from '../assets/post-assets/IconArrowLeft'
import IconArrowRight from '../assets/post-assets/IconArrowRight'

class RelatedArticles extends Component {
  render() {
    const { prev, next } = this.props.related

    const prevPath = prev ? (prev.frontmatter.external
      ? prev.frontmatter.external
      : prev.frontmatter.path) : null

    const nextPath = next ? (next.frontmatter.external
      ? next.frontmatter.external
      : next.frontmatter.path) : null

    return (
      <nav className="post__related-articles">
        {prev && (
          <a
            href={prevPath}
            className="post__related-articles__item margin-top-and-bottom--16 padding-top-and-bottom--16 padding-left-and-right--16 u-text-decoration--none"
          >
            <span className="arrow --left">
              <IconArrowLeft />
            </span>
            <span className="post__related-articles__item__text">
              <h3
                className="h-3 font-size--18 margin-bottom--16"
                dangerouslySetInnerHTML={{ __html: prev.frontmatter.title }}
              />
              <p className="font-size--16">{prev.frontmatter.tldr}</p>
            </span>
          </a>
        )}

        {next && (
          <a
            href={nextPath}
            className="post__related-articles__item margin-top-and-bottom--16 padding-top-and-bottom--16 padding-left-and-right--16 u-text-decoration--none"
          >
            <span className="post__related-articles__item__text">
              <h3
                className="h-3 font-size--18 margin-bottom--16"
                dangerouslySetInnerHTML={{ __html: next.frontmatter.title }}
              />
              <p className="font-size--16">{next.frontmatter.tldr}</p>
            </span>
            <span className="arrow --right">
              <IconArrowRight />
            </span>
          </a>
        )}
      </nav>
    )
  }
}

export default RelatedArticles
