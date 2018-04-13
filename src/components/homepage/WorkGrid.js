import React, { Component } from 'react'

export default class WorkGrid extends Component {
  render() {
    return (
      <section className="section-3 max-w-lg mx-auto mt-32 clearfix">
        <p className="text-lg md-text-xl lg-text-2xl leading-loose text-right mb-8">
          …creating
          <span role="img" aria-label="" alt="">
            💯
          </span>{' '}
          projects{' '}
          <span role="img" aria-label="" alt="">
            👷
          </span>
        </p>

        <div className="section-3__work-grid">
          <ul className="work-grid__container list-reset">
            <li className="work-grid__item bg-green two-by-one">
              <a href="#todo">
                <div className="work-grid__text text-white">
                  <h3 className="h3">Test Title</h3>
                  <p>Lorem ipsum dolor sit amet, natum mollis mediocritatem eam cu.</p>
                </div>
              </a>
            </li>
            <li className="work-grid__item bg-orange one-by-two">
              <a href="#todo">
                <div className="work-grid__text text-white">
                  <h3 className="h3">Test Title</h3>
                  <p>Lorem ipsum dolor sit amet, natum mollis mediocritatem eam cu.</p>
                </div>
              </a>
            </li>
            <li className="work-grid__item bg-yellow one-by-two">
              <a href="#todo">
                <div className="work-grid__text text-white">
                  <h3 className="h3">Test Title</h3>
                  <p>Lorem ipsum dolor sit amet, natum mollis mediocritatem eam cu.</p>
                </div>
              </a>
            </li>
            <li className="work-grid__item bg-blue one-by-one">
              <a href="#todo">
                <div className="work-grid__text text-white">
                  <h3 className="h3">Test Title</h3>
                  <p>Lorem ipsum dolor sit amet, natum mollis mediocritatem eam cu.</p>
                </div>
              </a>
            </li>
            <li className="work-grid__item bg-green one-by-one">
              <a href="#todo">
                <div className="work-grid__text text-white">
                  <h3 className="h3">Test Title</h3>
                  <p>Lorem ipsum dolor sit amet, natum mollis mediocritatem eam cu.</p>
                </div>
              </a>
            </li>
            <li className="work-grid__item bg-yellow one-by-one">
              <a href="#todo">
                <div className="work-grid__text text-white">
                  <h3 className="h3">Test Title</h3>
                  <p>Lorem ipsum dolor sit amet, natum mollis mediocritatem eam cu.</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </section>
    )
  }
}
