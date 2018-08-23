import React, { Component } from 'react'

export default class Updates extends Component {
  render() {
    return (
      <div className="px-4 md-px-8 max-w-sm mx-auto leading-normal mb-64 clearfix">
        <h2 className="font-semibold text-lg text-center mb-8 text-shadow">
          What's been happening lately?
        </h2>
        <ul className="list-reset">
          <li className="flex mb-4 bg-white rounded shadow">
            <span className="font-semibold text-base mr-4 text-white bg-purple-light p-4 rounded">
              08/20{' '}
            </span>
            <p className="text-base text-black p-4">
              Joined Hothouse Inc. as a remote developer.
            </p>
          </li>
          <li className="flex mb-4 bg-white rounded shadow">
            <span className="font-semibold text-base mr-4 text-white bg-purple-light p-4 rounded">
              06/29{' '}
            </span>
            <p className="text-base text-black p-4">Graduated from Thinkful</p>
          </li>
          <li className="flex mb-4 bg-white rounded shadow">
            <span className="font-semibold text-base mr-4 text-white bg-purple-light p-4 rounded">
              05/14
            </span>
            <p className="text-base text-black p-4">Joined Hothouse Inc. as an intern.</p>
          </li>

          <li className="flex mb-4 bg-white rounded shadow">
            <span className="font-semibold text-base mr-4 text-white bg-purple-light p-4 rounded">
              05/13
            </span>
            <p className="text-base text-black p-4">Moved to Atlanta, GA</p>
          </li>
        </ul>
      </div>
    )
  }
}

// <a href="#" className="no-underline float-right text-sm tracking-wide">
//           what else?
//         </a>
