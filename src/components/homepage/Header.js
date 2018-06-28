import Link from 'gatsby-link'
import React, { Component } from 'react'
import ScrollIndicator from '../../assets/icons/ScrollIndicator.js'
import SocialMedia from '../SocialMedia'

export default class Header extends Component {
  render() {
    return (
      <header className="pt-48 text-center mb-24 clearfix max-w-mdsm mx-auto px-4 md-px-0 text-shadow">
        <h1 className="screenreader-only">Welcome to my (Benjamin Modayil's) site!</h1>
        <p className="font-sans font-thin leading-normal mb-4">
          <span role="img" aria-label="" alt="" className="text-3xl">
            👋{' '}
          </span>
          <span className="text-3xl">Hi I’m</span>{' '}
          <span className="text-4xl font-medium block md-inline-block">
            Benjamin Modayil.
          </span>
        </p>
        <p className="text-2xl leading-normal mb-2 opacity-90 mb-8 font-thin">
          I’m currently an intern{' '}
          <span className="font-medium">Front-End Developer </span>
          <br />
          at{' '}
          <a
            className="no-underline font-medium"
            href="http://hothouseinc.com"
            target="_blank"
          >
            Hothouse Inc.
          </a>{' '}
          in Atlanta, Georgia.
        </p>
        <Link
          to="/projects"
          className="text-white tracking-wide text-sm no-underline mx-auto md-mx-0 font-semibold text-md text-center mb-32 pb-1"
        >
          learn more
          {/*<img src={Caret} alt="" />*/}
        </Link>
        <div className="mx-auto mb-8">
          <ScrollIndicator />
        </div>
        <SocialMedia className="mb-48" data={this.props.data.site.siteMetadata.social} />
      </header>
    )
  }
}
