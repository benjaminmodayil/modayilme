import React, { Component } from 'react'
import Link from 'gatsby-link'

import featuredImage from '../assets/featured-item/preview.png'

class FeaturedItem extends Component {
  render() {
    // const data = this.props.info

    return (
      <div className="home__featured">
        <img src={featuredImage} alt="" />
        <div className="home__featured__inner">
          <h2 className="h-2">
            Featured:
            <span>Ground Rules</span>
          </h2>
          <Link to="/work/ground-rules">View</Link>
        </div>
      </div>
    )
  }
}

export default FeaturedItem
