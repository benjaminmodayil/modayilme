import React, { Component } from 'react'
import IconMore from '../assets/icons/IconMore.js'

class DetailsList extends Component {
  constructor() {
    super()

    this.addLists = () => {
      const lists = Array.from(document.querySelectorAll('.html-list'))
      lists.map(item => {
        item.classList.add('a-spacing--y')
      })
    }

    this.removeLists = () => {
      const lists = Array.from(document.querySelectorAll('.html-list'))
      lists.map(item => {
        item.classList.remove('a-spacing--y')
      })
    }
  }

  triggerDetails = e => {
    e.stopPropagation()
    e.preventDefault()

    const details = Array.from(document.querySelectorAll('.html-details details'))

    const current = e.currentTarget
    console.log(current)

    if (current.getAttribute('aria-expanded') == 'true') {
      current.setAttribute('aria-expanded', 'false')
      current.removeAttribute('open')
      this.removeLists()
    } else {
      details.map(item => {
        if (item.hasAttribute('open')) {
          item.removeAttribute('open')
          item.setAttribute('aria-expanded', 'false')
        }

        current.setAttribute('aria-expanded', 'true')
        current.setAttribute('open', '')
        this.addLists()
      })
    }
  }

  render() {
    return (
      <div className="details-container" ref="detailsContainer">
        <h2 className="h-2">
          Skills <span className="details-container__sub-title">(to pay the bills)</span>
          <span className="details-container__emoji">👨‍💻</span>
        </h2>
        <ul className="details-container__inner">
          <li>
            <details aria-expanded="false" onClick={e => this.triggerDetails(e)}>
              <summary>
                <span>HTML, CSS</span>
                <IconMore />
              </summary>
              <article>
                <p>More info about the details.</p>
              </article>
            </details>
          </li>
          <li>
            <details aria-expanded="false" onClick={e => this.triggerDetails(e)}>
              <summary>
                <span>JavaScript</span>
                <IconMore />
              </summary>
              <article>
                <p>More info about the details.</p>
              </article>
            </details>
          </li>
          <li>
            <details aria-expanded="false" onClick={e => this.triggerDetails(e)}>
              <summary>
                <span>ReactJS</span>
                <IconMore />
              </summary>
              <article>
                <p>More info about the details.</p>
              </article>
            </details>
          </li>
          <li>
            <details aria-expanded="false" onClick={e => this.triggerDetails(e)}>
              <summary>
                <span>Craft CMS</span>
                <IconMore />
              </summary>
              <article>
                <p>More info about the details.</p>
              </article>
            </details>
          </li>
        </ul>
      </div>
    )
  }
}

export default DetailsList
