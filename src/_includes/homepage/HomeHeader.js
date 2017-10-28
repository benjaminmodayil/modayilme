import React, { Component } from 'react'
import FeaturedItem from '../../components/FeaturedItem'

class HomeHeader extends Component {
  render() {
    const data = this.props.info
    return (
      <header className="home__section-one__header row wrapper--responsive margin-center">
        <div className="home__section-one__header__col-left">
          <div className="home__section-one__header__col-left__inner">
            <h1 className="h-1">Benjamin Modayil</h1>
            <p>is a Front-End Developer from Philadelphia, Pennsylvannia.</p>
            <a
              className="home__section-one__header__link link__read"
              href="#about"
              onClick={() => {
                this.props.onClick()
              }}
            >
              learn more
            </a>
          </div>
        </div>
        <div className="home__section-one__header__col-right">
          <FeaturedItem info={data} />
        </div>
      </header>
    )
  }
}

export default HomeHeader
