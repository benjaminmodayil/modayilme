import React, { Component } from 'react'

import IconContactWithColor from '../assets/icons/IconContactWithColor.js'

class Updates extends Component {
  render() {
    return (
      <div className="banner-newsletter">
        <div className="component__updates">
          <div className="component__updates__inner">
            <div className="component__updates__col-left">
              <h2 className="heading-level-2">
                Want to stay <span>updated?</span>
              </h2>
              <p>Probs not, but you still should signup.</p>
              <form action="">
                <label className="screenreader-only" htmlFor="email">
                  email address
                </label>
                <input type="email" placeholder="pls let me eat yer email ԅ( ͒ ۝ ͒ )ᕤ" />
                <button className="btn--bg">Subscribe</button>
              </form>
              <p className="contact__callout">
                ...or perhaps you were trying to <a href="/contact.html">contact me?</a>
              </p>
            </div>
            <div className="component__updates__col-right">
              <IconContactWithColor />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Updates
