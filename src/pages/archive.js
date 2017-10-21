import React from 'react'
import Link from 'gatsby-link'

const Archive = () => (
  <main className="archive__page">
    <h1 className="screenreader-only">Archives</h1>
    <div className="archive__featured__post">
      <div className="featured__inner">
        <h2>Featured Post</h2>
        <div className="post__header-inner">
          <h3>The end is the beginning</h3>
          <p>
            <span>tl;dr</span>Creating todos are my jam and most likely they are yours
            too.
          </p>
          <img src="/assets/blog/icon-todoList.svg" alt="" />
          <Link className="link__read" href="/learnmore.html">
            Read more
          </Link>
        </div>
      </div>
    </div>
    <section className="archive__list">
      <h2>
        <span>archive</span> of my life
      </h2>
      <ul>
        <li>
          <Link to="">
            <div className="archive__item-inner">
              <h3>The end is the Beginning</h3>
              <p>Ben learns how to read</p>
            </div>
            <img src="/assets/blog/icon-todoList.svg" alt="" />
          </Link>
        </li>
        <li>
          <Link to="">
            <div className="archive__item-inner">
              <h3>The end is the Beginning</h3>
              <p>Ben learns how to read</p>
            </div>
            <img src="/assets/blog/icon-todoList.svg" alt="" />
          </Link>
        </li>
        <li>
          <Link to="">
            <div className="archive__item-inner">
              <h3>The end is the Beginning</h3>
              <p>Ben learns how to read</p>
            </div>
            <img src="/assets/blog/icon-todoList.svg" alt="" />
          </Link>
        </li>
        <li>
          <Link to="">
            <div className="archive__item-inner">
              <h3>The end is the Beginning</h3>
              <p>Ben learns how to read</p>
            </div>
            <img src="/assets/blog/icon-todoList.svg" alt="" />
          </Link>
        </li>
        <li>
          <Link to="">
            <div className="archive__item-inner">
              <h3>The end is the Beginning</h3>
              <p>Ben learns how to read</p>
            </div>
            <img src="/assets/blog/icon-todoList.svg" alt="" />
          </Link>
        </li>
        <li>
          <Link to="">
            <div className="archive__item-inner">
              <h3>The end is the Beginning</h3>
              <p>Ben learns how to read</p>
            </div>
            <img src="/assets/blog/icon-todoList.svg" alt="" />
          </Link>
        </li>
        <li>
          <Link to="">
            <div className="archive__item-inner">
              <h3>The end is the Beginning</h3>
              <p>Ben learns how to read</p>
            </div>
            <img src="/assets/blog/icon-todoList.svg" alt="" />
          </Link>
        </li>
        <li>
          <Link to="">
            <div className="archive__item-inner">
              <h3>The end is the Beginning</h3>
              <p>Ben learns how to read</p>
            </div>
            <img src="/assets/blog/icon-todoList.svg" alt="" />
          </Link>
        </li>
        <li>
          <Link to="">
            <div className="archive__item-inner">
              <h3>The end is the Beginning</h3>
              <p>Ben learns how to read</p>
            </div>
            <img src="/assets/blog/icon-todoList.svg" alt="" />
          </Link>
        </li>
        <li>
          <Link to="">
            <div className="archive__item-inner">
              <h3>The end is the Beginning</h3>
              <p>Ben learns how to read</p>
            </div>
            <img src="/assets/blog/icon-todoList.svg" alt="" />
          </Link>
        </li>
      </ul>
    </section>
  </main>
)

export default Archive
