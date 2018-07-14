import Link from 'gatsby-link'
import React, { Component } from 'react'
import ScrollIndicator from '../../assets/icons/ScrollIndicator.js'
import SocialMedia from '../SocialMedia'

export default class Header extends Component {
  render() {
    return (
      <header className="min-height-90vh pt-20vh text-center mb-24 clearfix max-w-mdsm mx-auto px-4 md-px-0 text-shadow">
        <div className="min-height-80vh flex flex-col justify-center">
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
          <p className="text-2xl leading-normal md-leading-loose mb-2 opacity-90 mb-8 font-thin">
            I’m currently an intern{' '}
            <span className="font-medium block md-inline">Front-End Developer </span>
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
            className="text-white tracking-wide w-24 self-center text-sm no-underline mx-auto md-mx-0 font-semibold text-md text-center mb-24 pb-1"
          >
            learn more
          </Link>
        </div>

        <SocialMedia data={this.props.data.site.siteMetadata.social} />
        <div className="mx-auto">
          <ScrollIndicator />
        </div>
      </header>
    )
  }
}
