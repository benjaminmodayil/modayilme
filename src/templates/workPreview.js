import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Updates from '../_includes/Updates.js'

export default function Template({ data }) {
  const { markdownRemark: post } = data
  // const post = data.markdownRemark;
  // post.frontmatter.category = "productivity",
  // color = blah, then pass this into the post for an inline style on the header.
  return (
    <main className="work__preview-page">
      <article className="post">
        <header className="post__header">
          <div className="post__header-inner wrapper wrapper--medium margin-center">
            <h1 className="h-1">{post.frontmatter.title}</h1>
            <p>
              <span>tl;dr</span>Creating todos are my jam and most likely they are yours
              too.
            </p>
            <img src="/assets/blog/icon-todoList.svg" alt="" />
          </div>
        </header>

        <section className="work__preview__body">
          <div className="work__preview__container wrapper wrapper--medium margin-center">
            <blockquote className="col__left post__blockquote-work-preview">
              I want to change how text-based games are envisioned. Why just text?
            </blockquote>
            <div className="col__right">
              <img src="/assets/blog/icon-todoList.svg" alt="" />
            </div>
            <p className="col__left">
              Creating todos are my jam and most likely they are yours too. For a whole
              lot of us there is a joyous feeling of being organized and having things
              todo. But simply, we hate actually doing them.
            </p>
            <p className="col__left">
              Creating todos are my jam and most likely they are yours too. For a whole
              lot of us there is a joyous feeling of being organized and having things
              todo. But simply, we hate actually doing them. Creating todos are my jam and
              most likely they are yours too. For a whole lot of us there is a joyous
              feeling of being organized and having things todo. But simply, we hate
              actually doing them. Unless those todos relate themselves to a passion, they
              will most likely not get done on time… or ever.
            </p>
            <p className="col__left">
              Creating todos are my jam and most likely they are yours too. For a whole
              lot of us there is a joyous feeling of being organized and having things
              todo. But simply, we hate actually doing them.
            </p>
            <div className="component__list col__right">
              <h2>
                my <span>featured</span> work
              </h2>
              <ul>
                <li>
                  <Link to="/post">
                    <h3>Lighthouse Hill</h3>
                  </Link>
                </li>
                <li>
                  <Link to="/post.html">
                    <h3>GroundRulesCo</h3>
                  </Link>
                </li>
                <li>
                  <Link to="/post.html">
                    <h3>Polygon Animation</h3>
                  </Link>
                </li>
              </ul>
            </div>
            <p className="col__left">
              I always tell myself that finding the right todo list will actually make me
              productive. That it will make me want to get stuff done.
            </p>

            <p className="col__left">
              Creating todos are my jam and most likely they are yours too. For a whole
              lot of us there is a joyous feeling of being organized and having things
              todo. But simply, we hate actually doing them.
            </p>
            <p className="col__left">
              Creating todos are my jam and most likely they are yours too. For a whole
              lot of us there is a joyous feeling of being organized and having things
              todo. But simply, we hate actually doing them.
            </p>
            <p className="col__left">
              Unless those todos relate themselves to a passion, they will most likely not
              get done on time… or ever.
            </p>

            <p className="col__left">
              Creating todos are my jam and most likely they are yours too. For a whole
              lot of us there is a joyous feeling of being organized and having things
              todo. But simply, we hate actually doing them.
            </p>
            <p className="col__left">
              Creating todos are my jam and most likely they are yours too. For a whole
              lot of us there is a joyous feeling of being organized and having things
              todo. But simply, we hate actually doing them.
            </p>
            <small className="post__signature col__left">Ben M.</small>
          </div>
        </section>

        <div className="post__misc">
          <Updates />
        </div>
      </article>
    </main>
  )
}

export const workQuery = graphql`
  query WorkStudyByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`
