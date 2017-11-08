import React, { Component } from 'react'
import Link from 'gatsby-link'
import IconLink from '../../assets/icons/IconLink.js'

class HomeHeader extends Component {
  render() {
    const data = this.props.info.slice(0, 3)

    return (
      <header className="home__section-one__header row margin-center min-height--85vh margin-top-and-bottom--64">
        <div className="home__section-one__header__intro margin-bottom--64">
          <div className="container--medium-to-small">
            <h1 className="h-1 color--white font-weight--bold margin-bottom--16">
              <span className="display--block margin-bottom--14">Benjamin</span> Modayil
            </h1>
            <p className="color--white font-weight--normal">
              is a{' '}
              <span className="color--red font-weight--bold">
                Front-End Developer
              </span>{' '}
              from Philadelphia, Pennsylvannia.
            </p>
            {/* <a
              className="home__section-one__header__link link__read"
              href="#about"
              onClick={() => {
                this.props.onClick()
              }}
            >
              learn more
            </a> */}
          </div>
        </div>
        <div className="home__section-one__header__updates">
          <div className="latest-updates">
            <h2 className="h-2 color--white font-style--italic font-size--24 margin-bottom--32">
              The Latest
            </h2>
            <ul>
              {data.map(post => {
                if (post.node.frontmatter.external) {
                  return (
                    <li className="margin-bottom--32" key={post.node.frontmatter.path}>
                      <a href={post.node.frontmatter.external}>
                        <h3 className="h-3 font-size--18 color--red margin-bottom--14">
                          {post.node.frontmatter.title}
                        </h3>
                        <p className="font-size--16 color--white">
                          {post.node.frontmatter.tldr}
                        </p>
                        <IconLink className="margin-top--16" />
                      </a>
                    </li>
                  )
                } else {
                  return (
                    <li className="margin-bottom--32" key={post.node.frontmatter.path}>
                      <Link to={post.node.frontmatter.path}>
                        <h3 className="h-3 font-size--18 color--red margin-bottom--14">
                          {post.node.frontmatter.title}
                        </h3>
                        <p className="font-size--16 color--white">
                          {post.node.frontmatter.tldr}
                        </p>
                      </Link>
                    </li>
                  )
                }
              })}
            </ul>
          </div>
        </div>
      </header>
    )
  }
}

export default HomeHeader
