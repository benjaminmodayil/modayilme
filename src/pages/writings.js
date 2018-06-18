import Link from 'gatsby-link'
import React, { Component } from 'react'

export default class Writings extends Component {
  render() {
    const { data } = this.props
    // const meta = data.site.siteMetadata.skillset.map((el, index) => (
    //   <li
    //     key={index}
    //     className="text-blue text-sm font-semibold uppercase w-1-4 flex justify-center px-2 lg-px-4 my-4"
    //   >
    //     <span className="bg-white shadow-lg p-2 rounded w-full text-center">{el}</span>
    //   </li>
    // ))
    const { edges } = data.allMarkdownRemark
    const articles = edges
      .filter((i, index) => i.node.frontmatter.type == 'blog')
      .slice(0, 4)
    const workExamples = edges.filter(i => i.node.frontmatter.type == 'work').slice(0, 6)

    return (
      <main className="relative px-2 lg-px-4 pb-8 max-w-3xl mx-auto" role="main">
        <div className="flex w-full items-center lg-items-start lg-justify-between flex-col lg-flex-row lg-mx-4">
          <div className="w-full lg-w-1-2 flex flex-col pt-24 px-4 lg-px-0 max-w-sm items-center lg-items-start lg-justify-between mb-32 relative lg-sticky lg-pin-t">
            <div className="h-auto">
              <h1 className="screenreader-only">Writings Page</h1>
              <p className="font-sans leading-normal mb-4 mx-auto lg-mx-0 text-center lg-text-left text-shadow">
                <span role="img" aria-label="" alt="" className="text-3xl">
                  👋{' '}
                </span>
                <span className="text-3xl">Hi I’m</span>{' '}
                <span className="text-4xl font-semibold block inline-block">
                  Benjamin Modayil.
                </span>
              </p>
              <p className="max-w-lgsm mx-auto text-center lg-text-left leading-normal text-lg mb-4 opacity-90 text-shadow">
                I’m a Front-End Developer from Philadelphia, Pennsylvannia.{' '}
                <br className="lg-hidden" /> While from Philadelphia, I’ve spent time in
                Ohio for college studying under a broadcasting major while also learning
                front-end web development.
              </p>
              <p className="max-w-lgsm mx-auto text-center lg-text-left leading-normal text-lg opacity-90 mb-6 text-shadow">
                I’ve since completed a bootcamp program and have done two internships and
                an apprenticeship in the field. But feel free to look below for a better
                judgment of my skillset.
              </p>
              <a
                href="../assets/resume.pdf"
                className="block w-32 font-normal text-center no-underline mx-auto border-red bg-red border-2 border-solid rounded px-3 py-1 hover-text-blue hover-bg-white hover-border-white hover-shadow-lg text-white lg-float-right"
              >
                {/* <img src={IconResume} alt="" className="mr-2" /> */}
                <span>view resume</span>
              </a>
            </div>
          </div>

          <div className="w-full lg-w-1-2 lg-pt-24 px-4">
            <h3 className="text-center mb-8">Writings</h3>
            <ul className="max-w-sm mx-auto list-reset">
              <li className="mb-16">
                <Link to="/" className="flex shadow-lg no-underline rounded bg-white">
                  <article className="p-4">
                    <img
                      className="mb-4"
                      src="http://via.placeholder.com/484x257"
                      alt=""
                    />
                    <h3 className="text-blue-darker font-sans text-base mb-2">
                      No Fuss Fitness
                    </h3>
                    <p className="text-black font-serif text-sm leading-normal mb-4">
                      Lorem ipsum dolor sit amet, natum mollis mediocritatem eam cu.
                      Utamur tacimates cu mei.
                    </p>
                    <ul className="list-reset flex">
                      <li className="mr-2 bg-blue-darker text-white rounded-full py-1 px-2 text-sm">
                        NodeJS
                      </li>
                      <li className="mr-2 bg-blue-darker text-white rounded-full py-1 px-2 text-sm">
                        Express
                      </li>
                      <li className="mr-2 bg-blue-darker text-white rounded-full py-1 px-2 text-sm">
                        PostCSS
                      </li>
                    </ul>
                  </article>
                </Link>
              </li>

              <li className="mb-16">
                <Link to="/" className="flex shadow-lg no-underline rounded bg-white">
                  <article className="p-4">
                    <img
                      className="mb-4"
                      src="http://via.placeholder.com/484x257"
                      alt=""
                    />
                    <h3 className="text-blue-darker font-sans text-base mb-2">
                      No Fuss Fitness
                    </h3>
                    <p className="text-black font-serif text-sm leading-normal mb-4">
                      Lorem ipsum dolor sit amet, natum mollis mediocritatem eam cu.
                      Utamur tacimates cu mei.
                    </p>
                    <ul className="list-reset flex">
                      <li className="mr-2 bg-blue-darker text-white rounded-full py-1 px-2 text-sm">
                        NodeJS
                      </li>
                      <li className="mr-2 bg-blue-darker text-white rounded-full py-1 px-2 text-sm">
                        Express
                      </li>
                      <li className="mr-2 bg-blue-darker text-white rounded-full py-1 px-2 text-sm">
                        PostCSS
                      </li>
                    </ul>
                  </article>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </main>
    )
  }
}

export const writingsTitledQuery = graphql`
  query writingsQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 50) {
      edges {
        node {
          frontmatter {
            title
            tldr
            path
            type
            external
          }
        }
      }
    }
    site {
      siteMetadata {
        social {
          URL
          title
          svgURL
        }
      }
    }
  }
`
