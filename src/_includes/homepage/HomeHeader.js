import React, { Component } from 'react'
import Link from 'gatsby-link'

import IconLink from '../../assets/icons/IconLink.js'
import IconLaptop from '../../assets/icons/home-icons/IconLaptop.js'
import IconStopwatch from '../../assets/icons/home-icons/IconStopwatch.js'

class HomeHeader extends Component {
  render() {
    const data = this.props.info.slice(0, 3)

    return (
      <header className="home__section-one__header row margin-center margin-top-and-bottom--96">
        <div className="home__section-one__header__intro margin-bottom--64">
          <div className="container--medium-to-small">
            <span className="home__header__lead color--white font-weight--normal font-style--italic font-family--heading margin-bottom--16 display--block">
              Hi there! I'm
            </span>
            <h1 className="h-1 color--white font-weight--bold margin-bottom--16">
              <span className="display--block margin-bottom--14">Benjamin</span> Modayil
            </h1>
            <p className="color--white font-weight--normal">
              <span className="color--red display--block font-weight--bold">
                Front-End Developer <IconLaptop />
              </span>{' '}
              from Philadelphia, Pennsylvannia.
            </p>
          </div>
        </div>
        <div className="home__section-one__header__updates">
          <div className="latest-updates">
            <h2 className="h-2 color--white font-size--24 margin-bottom--32">
              The Latest <IconStopwatch className="s-svg-adjust--down" />
            </h2>
            <ul>
              {data.map(post => {
                if (post.node.frontmatter.external) {
                  return (
                    <li className="margin-bottom--32" key={post.node.frontmatter.path}>
                      <a
                        href={post.node.frontmatter.external}
                        className="padding-left-and-right--16 padding-top-and-bottom--16"
                      >
                        <h3
                          className="h-3 font-size--18 margin-bottom--14"
                          dangerouslySetInnerHTML={{
                            __html: post.node.frontmatter.title
                          }}
                        />
                        <p className="font-size--16">{post.node.frontmatter.tldr}</p>
                        <IconLink />
                      </a>
                    </li>
                  )
                } else {
                  return (
                    <li className="margin-bottom--32" key={post.node.frontmatter.path}>
                      <Link
                        to={post.node.frontmatter.path}
                        className="padding-left-and-right--16 padding-top-and-bottom--16"
                      >
                        <h3
                          className="h-3 font-size--18 margin-bottom--14"
                          dangerouslySetInnerHTML={{
                            __html: post.node.frontmatter.title
                          }}
                        />
                        <p className="font-size--16">{post.node.frontmatter.tldr}</p>
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
