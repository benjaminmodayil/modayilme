import React, { Component } from 'react'

class HomeHeader extends Component {
  render() {
    const data = this.props.info
    return (
      <header className="home__section-one__header row margin-center min-height--85vh margin-top-and-bottom--64">
        <div className="home__section-one__header__intro margin-bottom--64">
          <div className="container--medium-to-small">
            <span className="home__header__lead color--white font-weight--bold font-style--italic font-family--heading margin-bottom--16 display--block">
              it's yerr boy
            </span>
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
              <li className="margin-bottom--32">
                <a href="#todo">
                  <h3 className="h-3 font-size--18 color--red margin-bottom--14">
                    A New Way TODO
                  </h3>
                  <p className="font-size--16 color--white">
                    Creating todos are my jam and most likely they are yours too.{' '}
                  </p>
                </a>
              </li>
              <li className="margin-bottom--32">
                <a href="#todo">
                  <h3 className="h-3 font-size--18 color--red margin-bottom--14">
                    A New Way TODO
                  </h3>
                  <p className="font-size--16 color--white">
                    Creating todos are my jam and most likely they are yours too.{' '}
                  </p>
                </a>
              </li>
              <li className="margin-bottom--32">
                <a href="#todo">
                  <h3 className="h-3 font-size--18 color--red margin-bottom--14">
                    A New Way TODO
                  </h3>
                  <p className="font-size--16 color--white">
                    Creating todos are my jam and most likely they are yours too.{' '}
                  </p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    )
  }
}

export default HomeHeader
