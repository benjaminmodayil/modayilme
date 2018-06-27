import React, { Component } from 'react'
import Link from 'gatsby-link'

import IconLink from '../assets/icons/IconLink.js'

export default class ArticleLoop extends Component {
  render() {
    const { articleArray } = this.props
    let items = articleArray.map(post => {
      const path = `${this.props.type}/${post.node.slug}`

      return (
        <li className="mb-8 list-reset mx-auto" key={path}>
          <Link
            to={path}
            className="p-4 bg-white no-underline no-border-bottom rounded w-full min-h-24"
          >
            <h3
              className="text-lg mb-2 text-red"
              dangerouslySetInnerHTML={{
                __html: post.node.title
              }}
            />
            <p
              className="text-sm text-black opacity-90 font-serif leading-normal"
              dangerouslySetInnerHTML={{
                __html: post.node.excerpt
              }}
            />
          </Link>
        </li>
      )
    })
    return <ul>{items}</ul>
  }
}
