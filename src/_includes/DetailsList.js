import React, { Component } from 'react'
import Link from 'gatsby-link'
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

    if (current.parentNode.getAttribute('aria-expanded') == 'true') {
      current.parentNode.setAttribute('aria-expanded', 'false')
      current.parentNode.removeAttribute('open')
      this.removeLists()
    } else {
      details.map(item => {
        if (item.hasAttribute('open')) {
          item.removeAttribute('open')
          item.setAttribute('aria-expanded', 'false')
        }

        current.parentNode.setAttribute('aria-expanded', 'true')
        current.parentNode.setAttribute('open', '')
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
            <details aria-expanded="false">
              <summary onClick={e => this.triggerDetails(e)}>
                <span>HTML, CSS, JS</span>
                <IconMore />
              </summary>
              <article>
                <ul className="details-container__inner__list">
                  <li>
                    <Link className="link color--link" to="/work/ground-rules">
                      Ground Rules
                    </Link>
                  </li>
                  <li>
                    <a
                      className="link color--link"
                      href="http://www.jennifermoorespeech.com/"
                    >
                      Jennifer Moore
                    </a>
                  </li>
                  <li>
                    <a
                      className="link color--link"
                      href="https://ctl2.cedarville.edu/cove/"
                    >
                      The Cove
                    </a>
                  </li>
                </ul>
              </article>
            </details>
          </li>
          <li>
            <details aria-expanded="false">
              <summary onClick={e => this.triggerDetails(e)}>
                <span>Web Animations</span>
                <IconMore />
              </summary>
              <article>
                <ul className="details-container__inner__list">
                  <li>
                    <a
                      className="link color--link"
                      href="https://codepen.io/modayilme/pen/ybXErO"
                    >
                      Lighthouse Hill preview
                    </a>
                  </li>
                  <li>
                    <a
                      className="link color--link"
                      href="https://codepen.io/modayilme/pen/qqRRgd"
                    >
                      Cat in a Box
                    </a>
                  </li>
                  <li>
                    <a
                      className="link color--link"
                      href="https://codepen.io/modayilme/pen/dNozqe"
                    >
                      Logo Animation
                    </a>
                  </li>
                </ul>
              </article>
            </details>
          </li>
          <li>
            <details aria-expanded="false">
              <summary onClick={e => this.triggerDetails(e)}>
                <span>Craft CMS</span>
                <IconMore />
              </summary>
              <article>
                <ul className="details-container__inner__list">
                  <li>Silent Sentinels (ask to see)</li>
                </ul>
              </article>
            </details>
          </li>
        </ul>
      </div>
    )
  }
}

export default DetailsList
