import React, { Component } from 'react'

export default class ArticleGrid extends Component {
  render() {
    return (
      <section className="section-4 max-w-lg mx-auto mt-32">
        <p className="text-lg md-text-xl lg-text-2xl leading-loose mb-8">
          And I try to{' '}
          <span role="img" aria-label="write" alt="write">
            ✍️
          </span>{' '}
          along the way:
        </p>

        <ul className="article-preview__container list-reset">
          <li>
            <a href="#todo">
              <span className="article-preview__text">
                <h3 className="h3">A New Way Todo</h3>
                <p>
                  Lorem ipsum dolor sit amet, natum mollis mediocritatem eam cu. Utamur
                  tacimates.
                </p>
              </span>
            </a>
          </li>
          <li>
            <a href="#todo">
              <span className="article-preview__text">
                <h3 className="h3">A New Way Todo</h3>
                <p>
                  Lorem ipsum dolor sit amet, natum mollis mediocritatem eam cu. Utamur
                  tacimates.
                </p>
              </span>
            </a>
          </li>
          <li>
            <a href="#todo">
              <span className="article-preview__text">
                <h3 className="h3">A New Way Todo</h3>
                <p>
                  Lorem ipsum dolor sit amet, natum mollis mediocritatem eam cu. Utamur
                  tacimates.
                </p>
              </span>
            </a>
          </li>
          <li>
            <a href="#todo">
              <span className="article-preview__text">
                <h3 className="h3">A New Way Todo</h3>
                <p>
                  Lorem ipsum dolor sit amet, natum mollis mediocritatem eam cu. Utamur
                  tacimates.
                </p>
              </span>
            </a>
          </li>
        </ul>
      </section>
    )
  }
}
