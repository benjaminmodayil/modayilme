import React, { Component } from 'react'

export default class Updates extends Component {
  render() {
    return (
      <div className="px-4 md-px-8 max-w-xssm mx-auto leading-normal mb-64 clearfix">
        <h2 className="font-semibold text-lg text-center mb-8 text-shadow">
          What's been happening lately?
        </h2>
        <ul className="list-reset">
          <li className="flex mb-4 bg-white rounded shadow">
            <span className="font-semibold text-base mr-4 text-white bg-purple-light p-4 rounded">
              02/16
            </span>
            <p className="text-base text-black p-4">Moved to Atlanta, GA</p>
          </li>
        </ul>
        <a href="#" className="no-underline float-right text-sm tracking-wide">
          what else?
        </a>
      </div>
    )
  }
}
