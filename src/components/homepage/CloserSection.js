import React, { Component } from 'react'

export default class CloserSection extends Component {
  render() {
    return (
      <section className="section-5 max-w-lg mx-auto mt-32">
        <p className="text-lg md-text-xl lg-text-2xl leading-loose mb-8">
          At the moment, I’m doing an internship, but also looking{' '}
          <span role="img" aria-label="" alt="">
            👀
          </span>{' '}
          for my next role. If you’re interested in bringing me onto your team or need
          help with a project, feel free to send me a message below or{' '}
          <a href="#email" className="font-bold text-red no-underline hover-underline">
            email
          </a>{' '}
          me.
        </p>
      </section>
    )
  }
}
