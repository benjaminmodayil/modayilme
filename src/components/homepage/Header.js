import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <header className="home-header pt-32 text-center text-3xl md-text-5xl mb-32">
        <h1 className="screenreader-only">Welcome to Benjamin Modayil's site!</h1>
        <p className="font-sans leading-normal">
          <span className="block text-2xl md-text-4xl">
            <span role="img" aria-label="" alt="">
              👋 {' '}
            </span>
            Hi I’m{' '}
          </span>
          <span className="block">
            Benjamin <span className="font-semibold">Modayil</span>.
          </span>{' '}
          <span className="text-2xl md-text-4xl">I’m a</span> Front-End Developer{' '}
          <span className="block text-2xl md-text-3xl">
            from Philadelphia, Pennsylvannia.
          </span>
        </p>
      </header>
    )
  }
}
