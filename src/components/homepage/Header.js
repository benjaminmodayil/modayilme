import Link from 'gatsby-link'
import React, { Component } from 'react'
import Caret from '../../assets/icons/home-icons/caret-right.svg'
export default class Header extends Component {
  render() {
    return (
      <header className="pt-24 text-center mb-24 clearfix max-w-mdsm mx-auto px-4 md-px-0">
        <h1 className="screenreader-only">Welcome to my (Benjamin Modayil's) site!</h1>
        <p className="font-sans leading-normal mb-4">
          <span role="img" aria-label="" alt="" className="text-3xl">
            👋{' '}
          </span>
          <span className="text-3xl">Hi I’m</span>{' '}
          <span className="text-4xl font-semibold block md-inline-block">
            Benjamin Modayil.
          </span>
        </p>
        <p className="text-lg leading-normal mb-2">
          I’m a <span className="font-semibold">Front-End Developer </span>
          from Philadelphia, Pennsylvannia.
        </p>
        <Link
          to="/projects"
          className="text-red text-sm hover-underline no-underline float-right font-semibold text-md flex  w-24 justify-between"
        >
          <span className="mr-2">Learn more</span> <img src={Caret} alt="" />
        </Link>
      </header>
    )
  }
}
