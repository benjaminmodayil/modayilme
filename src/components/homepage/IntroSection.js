import React, { Component } from 'react'

export default class IntroSection extends Component {
  render() {
    return (
      <section className="section-1 max-w-lg mx-auto clearfix">
        <p className="text-lg md-text-xl lg-text-2xl leading-loose">
          I’m a graduate of a Full-Stack JS program from{' '}
          <a
            className="link--special bg-thinkful hover-underline"
            href="https://thinkful.com"
          >
            Thinkful
          </a>{' '}
          and a Broadcasting and Digital Media major from{' '}
          <a
            className="link--special bg-cedarville hover-underline"
            href="https://cedarville.edu"
          >
            Cedarville University
          </a>. I’ve recently finished an internship and then an apprenticeship with{' '}
          <a className="link--special bg-viget hover-underline" href="https://viget.com">
            Viget
          </a>{' '}
          but also have experience working with film, audio, and photography. At the
          moment, I’m working part-time in Atlanta, Georgia, but would love to hear about
          more full-time opportunities.
        </p>
        <a
          className="bg-red text-white font-semibold px-4 py-2 rounded mt-8 inline-block float-right no-underline hover-underline"
          href="assets/resumemodayil.pdf"
        >
          <span className="screenreader-only">view </span>resume
        </a>
      </section>
    )
  }
}
