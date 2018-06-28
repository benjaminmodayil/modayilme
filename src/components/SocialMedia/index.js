import React, { Component } from 'react'

export default class SocialMedia extends Component {
  render() {
    let links = this.props.data.map((i, index) => {
      return (
        <a
          className="flex justify-center no-border-bottom w-1-4 text-white hover-text-red no-underline"
          href={i.URL}
          key={index}
          target="_blank"
        >
          <span className="social__icon mr-1">
            <img src={i.svgURL} alt={i.title} />
          </span>
        </a>
      )
    })
    return (
      <nav
        className="pt-8 mb-12 max-w-xs md-max-w-sm mx-auto w-full"
        role="Social Navigation"
      >
        <div className="social-nav__links flex justify-center items-center">{links}</div>
      </nav>
    )
  }
}
