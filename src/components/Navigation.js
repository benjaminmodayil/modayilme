import React, { Component } from 'react'
import Link from 'gatsby-link'

export default class Navigation extends Component {
  render() {
    return (
      <nav className="bg-white relative z-20 shadow" role="navigation">
        <div className="nav__inner global-nav max-w-lg md-max-w-xl lg-max-w-3xl mx-auto py-4 flex flex-wrap md-flex-no-wrap px-4 justify-center">
          <div className="nav__left w-full max-w-md md-max-w-auto md-w-2-3">
            <Link to="/" className="hover-underline">
              <span role="img" aria-label="" alt="" className="nav__left__img">
                🏠
              </span>
              <span className="text">Home</span>
            </Link>
          </div>
          <div className="nav__right w-full max-w-md md-max-w-sm flex flex-col flex-wrap items-end md-flex-no-wrap md-flex-row justify-between">
            <Link
              to="/writings"
              className="hover-underline flex justify-end border-b w-24 my-2 py-2 md-py-0 md-py-0 md-my-0"
            >
              <span role="img" aria-label="" alt="" className="nav__left__img">
                ✍️
              </span>
              <span className="text">Writings</span>
            </Link>
            <Link
              to="/about"
              className="hover-underline flex justify-end border-b w-24 my-2 py-2 md-py-0 md-py-0 md-my-0"
            >
              <span role="img" aria-label="" alt="" className="nav__left__img">
                🧔🏾
              </span>
              <span className="text">About</span>
            </Link>
            <Link
              to="/work"
              className="hover-underline flex justify-end border-b w-24 my-2 py-2 md-py-0 md-py-0 md-my-0"
            >
              <span role="img" aria-label="" alt="" className="nav__left__img">
                💼
              </span>
              <span className="text">Work</span>
            </Link>
            <Link
              to="/contact"
              className="hover-underline flex justify-end border-b w-24 my-2 py-2 md-py-0 md-py-0 md-my-0"
            >
              <span role="img" aria-label="" alt="" className="nav__left__img">
                🤙
              </span>
              <span className="text">Contact</span>
            </Link>
          </div>
        </div>
      </nav>
    )
  }
}
