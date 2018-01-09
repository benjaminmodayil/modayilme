import React, { Component } from 'react'
import Link from 'gatsby-link'

import ArticleLoop from '../../components/ArticleLoop'

import IconLaptop from '../../assets/icons/home-icons/IconLaptop.js'
import IconStopwatch from '../../assets/icons/home-icons/IconStopwatch.js'

class HomeHeader extends Component {
  render() {
    const data = this.props.info.slice(0, 3)

    return (
      <header className="home__section-one__header padding-top-and-bottom--80 wrapper wrapper--wide margin-center">
        <div className="home__section-one__header__intro margin-bottom--64">
          <div className="container--medium-to-small">
            <span className="home__header__lead color--white font-weight--normal font-style--italic font-family--heading margin-bottom--16 display--block">
              <span
                role="img"
                alt=""
                aria-label=""
                className="font-style--normal padding-left-and-right--14"
              >
                👋
              </span>
              Hi there! I'm
            </span>
            <h1 className="h-1 color--white font-weight--bold margin-bottom--16">
              <span className="display--block margin-bottom--14">Benjamin</span> Modayil
            </h1>
            <p className="color--white font-weight--normal">
              <span className="color--red display--block font-weight--bold">
                Front-End Developer <IconLaptop />
              </span>{' '}
              from Philadelphia, Pennsylvania.
            </p>
          </div>
        </div>

        <div className="home__section-one__header__updates">
          <div className="latest-updates">
            <h2 className="h-2 color--white font-size--24 margin-bottom--32">
              The Latest <IconStopwatch className="s-svg-adjust--down" />
            </h2>
            <ArticleLoop articleArray={data} />
          </div>
        </div>
      </header>
    )
  }
}

export default HomeHeader
