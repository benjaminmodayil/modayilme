import React from 'react'
import Link from 'gatsby-link'

import IconLink from '../assets/icons/IconLink.js'

class ArticleLoop extends React.Component {
  render() {
    // const { data } = this.props

    const { articleArray } = this.props

    return (
      <ul>
        {articleArray.map(post => {
          const path = post.node.frontmatter.external
            ? post.node.frontmatter.external
            : post.node.frontmatter.path

          const addIcon = post.node.frontmatter.external ? true : false

          if (post.node.frontmatter.external) {
            return (
              <li className="mb-8 list-reset mx-auto" key={path}>
                <a
                  href={path}
                  className="px-4 pt-4 pb-8 bg-white no-underline no-border-bottom rounded w-full min-h-24 relative"
                  target="_blank"
                >
                  <h3
                    className="text-lg mb-2 text-red"
                    dangerouslySetInnerHTML={{
                      __html: post.node.frontmatter.title
                    }}
                  />
                  <p className="text-sm text-black opacity-90 font-serif leading-normal">
                    {post.node.frontmatter.tldr}
                  </p>
                  {addIcon ? (
                    <IconLink className="mr-4 absolute pin-r pin-b mb-4" />
                  ) : null}
                </a>
              </li>
            )
          } else {
            return (
              <li className="mb-8 list-reset mx-auto" key={path}>
                <Link
                  to={path}
                  className="p-4 bg-white no-underline no-border-bottom rounded w-full min-h-24"
                >
                  <h3
                    className="text-lg mb-2 text-red"
                    dangerouslySetInnerHTML={{
                      __html: post.node.frontmatter.title
                    }}
                  />
                  <p className="text-sm text-black opacity-90 font-serif leading-normal">
                    {post.node.frontmatter.tldr}
                  </p>
                </Link>
              </li>
            )
          }
        })}
      </ul>
    )
  }
}

export default ArticleLoop
