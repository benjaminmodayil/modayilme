import React, { Component } from 'react'

export default class RecentWritings extends Component {
  render() {
    return (
      <div className="md-w-1-2 md-px-8 max-w-xssm leading-normal">
        <h2 className="font-semibold text-lg text-center mb-4">
          Recent Writings & Projects
        </h2>

        <ul className="list-reset">
          <li className="bg-white hover-shadow-md mb-3 rounded max-w-xs md-max-w-md mx-auto">
            <a href="" className="no-underline px-4 md-px-8 py-2 w-full flex flex-col">
              <h3 className="text-red text-base font-semibold mb-1">Title of article</h3>
              <p className="text-black text-xs font-serif opacity-90">
                Lorem ipsum dolor sit amet, natum mollis mediocritatem eam cu.
              </p>
            </a>
          </li>
          <li className="bg-white hover-shadow-md mb-3 rounded max-w-xs md-max-w-md mx-auto">
            <a href="" className="no-underline px-4 md-px-8 py-2 w-full flex flex-col">
              <h3 className="text-red text-base font-semibold mb-1">Title of article</h3>
              <p className="text-black text-xs font-serif opacity-90">
                Lorem ipsum dolor sit amet, natum mollis mediocritatem eam cu.
              </p>
            </a>
          </li>
          <li className="bg-white hover-shadow-md mb-3 rounded max-w-xs md-max-w-md mx-auto">
            <a href="" className="no-underline px-4 md-px-8 py-2 w-full flex flex-col">
              <h3 className="text-red text-base font-semibold mb-1">Title of article</h3>
              <p className="text-black text-xs font-serif opacity-90">
                Lorem ipsum dolor sit amet, natum mollis mediocritatem eam cu.
              </p>
            </a>
          </li>
        </ul>
      </div>
    )
  }
}
