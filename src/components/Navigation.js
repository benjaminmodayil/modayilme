import React, { Component } from 'react'
import Link from 'gatsby-link'

export default class Navigation extends Component {
  render() {
    return (
      <nav className="global-nav container mx-auto py-4 flex flex-wrap md-flex-no-wrap px-4 justify-between">
        <div className="nav__left w-2-3">
          <Link>
            <span role="img" aria-label="" alt="" className="nav__left__img">
              🏠
            </span>
            <span className="text">Home</span>
          </Link>
        </div>
        <div className="nav__right w-full max-w-md flex flex-wrap md-flex-no-wrap justify-between">
          <Link to="/">
            <span role="img" aria-label="" alt="" className="nav__left__img">
              🧔🏾
            </span>
            <span className="text">Writings</span>
          </Link>
          <Link to="/">
            <span role="img" aria-label="" alt="" className="nav__left__img">
              🏠
            </span>
            <span className="text">Home</span>
          </Link>
          <Link to="/">
            <span role="img" aria-label="" alt="" className="nav__left__img">
              🏠
            </span>
            <span className="text">Home</span>
          </Link>
          <Link to="/">
            <span role="img" aria-label="" alt="" className="nav__left__img">
              🏠
            </span>
            <span className="text">Home</span>
          </Link>
        </div>
      </nav>
    )
  }
}
