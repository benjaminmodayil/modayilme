import Link from 'gatsby-link'
import React, { Component } from 'react'

export default class Navigation extends Component {
  render() {
    let navigation = this.props.navigation.map((i, index) => {
      let activeBorder =
        i.URL === this.props.location.pathname ? 'border-red' : 'border-transparent'

      return (
        <Link
          key={index}
          to={i.URL}
          className={`no-underline no-border-bottom text-base font-medium ${activeBorder} border-b-4 hover-border-red rounded-sm hover-border-b-4 opacity-90 hover-opacity-100`}
        >
          {i.title}
        </Link>
      )
    })

    return (
      <nav
        className="relative z-20 flex max-w-xs w-64 mx-auto text-center justify-between pt-4"
        role="navigation"
      >
        {navigation}
      </nav>
    )
  }
}
