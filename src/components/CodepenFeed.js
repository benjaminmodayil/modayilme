import React, { Component } from 'react'

import IconSkills from '../assets/icons/home-icons/IconCodepenBlackBg.js'

class CodepenFeed extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    var codepenFeed = 'https://codepen.io/modayilme/public/feed'
    const entryPromise = fetch(codepenFeed)
      .then(data => data.text())
      .then(data => {
        return JSON.parse(JSON.stringify({ data }))
      })
      .then(data => {
        return data.data
      })
      .then(data => {
        var s = data
        var temp = document.createElement('div')
        temp.innerHTML = s
        var htmlObject = temp.firstChild
        var data = { html: htmlObject }
        var items = data.html.querySelectorAll('item')
        items = Array.from(items)

        return items
      })
      .then(data => {
        this.setState({
          codepenData: data
        })
      })
      .catch(err => console.log(err))
  }
  render() {
    return (
      <div className="cp-feed margin-bottom--96">
        <h2 className="h-2 color--white font-size--24 margin-bottom--32">
          Codepens{' '}
          <span className="font-weight--light font-size--16">
            (links open on Codepen.io){' '}
            <IconSkills className="icon-skills s-svg-adjust--down" />
          </span>
        </h2>
        <div className="cp-feed__cards">
          {!this.state.codepenData ? (
            <p>Loading</p>
          ) : (
            this.state.codepenData
              .map(item => {
                return (
                  <div
                    className="cp-feed__cards__pen padding-top-and-bottom--14 padding-bottom--64 padding-left-and-right--16 margin-bottom--32"
                    key={item.childNodes[9].childNodes[7].childNodes[1].getAttribute(
                      'href'
                    )}
                  >
                    <img
                      className="cp-feed__cards__pen__thumb margin-bottom--16"
                      src={item.childNodes[9].childNodes[3].childNodes[0].getAttribute(
                        'src'
                      )}
                      alt=""
                    />
                    <div className="cp-feed__cards__pen__text">
                      <h3 className="h-3 font-size--18 color--link margin-bottom--16">
                        {item.childNodes[1].text}
                      </h3>
                      <p className="color--text font-size--16 margin-bottom--16">
                        {item.childNodes[9].childNodes[9].innerHTML}
                      </p>
                      <a
                        className="font-size--14 link --btn --bg-red --small cp-feed__cards__pen__text__link"
                        href={item.childNodes[9].childNodes[7].childNodes[1].getAttribute(
                          'href'
                        )}
                      >
                        View
                      </a>
                    </div>
                  </div>
                )
              })
              .slice(0, 3)
          )}
        </div>
        <a
          className="cp-feed__cards__pen__external-link u-float--right link --btn --bg-transparent --wide"
          href="https://codepen.io/modayilme/"
        >
          view more
        </a>
      </div>
    )
  }
}

export default CodepenFeed
// cp-feed__cards__pen__text__link
