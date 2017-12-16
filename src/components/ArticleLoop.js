import React from 'react'
import Link from 'gatsby-link'

import IconLink from '../assets/icons/IconLink.js'

class ArticleLoop extends React.Component {
  render() {
    const { data } = this.props

    const { articleArray } = this.props

    return (
      <ul>
        {articleArray.map(post => {
          const path = post.node.frontmatter.external
            ? post.node.frontmatter.external
            : post.node.frontmatter.path

          const addIcon = post.node.frontmatter.external ? true : false

          return (
            <li className="margin-bottom--32" key={path}>
              <a
                href={path}
                className="padding-left-and-right--16 padding-top-and-bottom--16"
              >
                <h3
                  className="h-3 font-size--18 margin-bottom--14"
                  dangerouslySetInnerHTML={{
                    __html: post.node.frontmatter.title
                  }}
                />
                <p className="font-size--16">{post.node.frontmatter.tldr}</p>
                {addIcon ? <IconLink className="margin-top--16" /> : null}
              </a>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default ArticleLoop
