import React, { Component } from 'react'

export default class Updates extends Component {
  render() {
    return (
      <div className="md-w-1-2 md-px-8 max-w-xssm leading-normal mb-16 md-mb-0">
        <h2 className="font-semibold text-lg text-center mb-8">What's happening?</h2>
        <ul className="list-reset">
          <li className="flex mb-4">
            <span className="font-semibold text-base mr-4">02/16</span>
            <p className="text-base">Moved to Atlanta, GA</p>
          </li>

          <li className="flex mb-4">
            <span className="font-semibold text-base mr-4">02/16</span>
            <p className="text-base">Finished remaining college class.</p>
          </li>
        </ul>
      </div>
    )
  }
}
