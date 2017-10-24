import React, { Component } from 'react'

class DetailsList extends Component {
  toggleLists() {
    const lists = Array.from(document.querySelectorAll('.html-list'))
    console.log(lists)
    lists.map(item => {
      console.log(item)
      item.classList.toggle('a-spacing--y')
    })
  }

  render() {
    return (
      <div className="details-container" ref="detailsContainer">
        <h2 className="h-2">
          Skills <span>(to pay the bills)</span>
        </h2>
        <ul className="details-container__inner">
          <li>
            <details onClick={this.toggleLists}>
              <summary>HTML, CSS</summary>
              <article>
                <p>More info about the details.</p>
              </article>
            </details>
          </li>
          <li>
            <details onClick={this.toggleLists}>
              <summary>Javascript</summary>
              <article>
                <p>More info about the details.</p>
              </article>
            </details>
          </li>
          <li>
            <details onClick={this.toggleLists}>
              <summary>ReactJS</summary>
              <article>
                <p>More info about the details.</p>
              </article>
            </details>
          </li>
          <li>
            <details onClick={this.toggleLists}>
              <summary>
                <span>Craft CMS</span>{' '}
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z" />
                </svg>
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
