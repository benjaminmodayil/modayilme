import React, { Component } from 'react'
import RandomAnimation from '../../assets/RandomAnimation'

class HomeHeader extends Component {
  render() {
    return (
      <header className="home__section-one__header row wrapper wrapper--tablet margin-center">
        <div className="home__section-one__header__col-left">
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
        <div className="home__section-one__header__col-right">
          <RandomAnimation />
        </div>
      </header>
    )
  }
}

export default HomeHeader
