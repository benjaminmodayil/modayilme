import Link from 'gatsby-link';
import React, { Component } from 'react';

export default class Navigation extends Component {
  render() {
    console.log(this.props)
    let navigation = this.props.navigation.map((i, index) => (
      <Link
        key={index}
        to={i.URL}
        className="hover-underline text-black no-underline font-semibold hover-border-b-2"
      >
        {i.title}
      </Link>
    ))

    return (
      <nav
        className="relative z-20 flex max-w-xs mx-auto w-full text-center justify-between mt-4"
        role="navigation"
      >
        {navigation}
      </nav>
    )
  }
}
