import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    let links = this.props.data.map((i, index) => {
      return (
        <a
          className="flex justify-center w-1-4 text-white hover-text-red no-underline hover-underline"
          href={i.URL}
          key={index}
        >
          <span className="social__icon mr-1">
            <img src={i.svgURL} alt={i.title} />
          </span>
        </a>
      )
    })

    return (
      <footer className="bg-black text-white">
        <nav className="py-8 max-w-xs md-max-w-sm mx-auto" role="Social Navigation">
          <div className="social-nav__links flex justify-center">{links}</div>
        </nav>
      </footer>
    )
  }
}
