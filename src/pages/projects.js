import Link from 'gatsby-link'
import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    const { data } = this.props
    const meta = data.site.siteMetadata.skillset.map((el, index) => (
      <li
        key={index}
        className="text-purple text-sm font-semibold uppercase w-1-4 flex justify-center px-2 lg-px-4 my-4"
      >
        <span className="bg-white shadow-lg p-2 rounded w-full text-center">{el}</span>
      </li>
    ))
    const { edges } = data.allMarkdownRemark
    const articles = edges
      .filter((i, index) => i.node.frontmatter.type == 'blog')
      .slice(0, 4)
    const workExamples = edges.filter(i => i.node.frontmatter.type == 'work').slice(0, 6)

    return (
      <main className="projects-page relative pb-8 max-w-3xl mx-auto" role="main">
        <div className="flex w-full items-center lg-items-start lg-justify-between flex-col lg-flex-row">
          <div className="mx-auto flex  w-full items-center lg-items-start lg-justify-between flex-col lg-flex-row">
            <div className="w-full lg-w-1-2 flex flex-col pt-32 px-4 lg-px-8 max-w-mdsm items-center lg-items-start lg-justify-between mb-32 relative lg-sticky lg-pin-t">
              <div className="h-auto">
                <h1 className="font-sans leading-normal mb-4 mx-auto lg-mx-0 text-center lg-text-left text-shadow">
                  Projects
                </h1>
                {/*
               <p className="font-sans leading-normal mb-4 mx-auto lg-mx-0 text-center lg-text-left text-shadow">
                  <span role="img" aria-label="" alt="" className="text-3xl">
                    👋{' '}
                  </span>
                  <span className="text-3xl">Hi I’m</span>{' '}
                  <span className="text-4xl font-semibold block inline-block">
                    Benjamin Modayil.
                  </span>
                </p>
              */}
                <p className="max-w-lgsm mx-auto text-center lg-text-left leading-loose text-lg mb-8 opacity-90 text-shadow font-normal">
                  <span role="img" aria-label="" alt="">
                    👋
                  </span>{' '}
                  Hi there!{' '}
                </p>
                <p className="max-w-lgsm mx-auto text-center lg-text-left leading-loose text-lg mb-8 opacity-90 text-shadow font-normal">
                  I’m a Front-End Developer from Philadelphia, Pennsylvannia.{' '}
                  <br className="lg-hidden" /> While from Philadelphia, I’ve spent time in
                  Ohio for college studying under a broadcasting major while also learning
                  front-end web development.
                </p>
                <p className="max-w-lgsm mx-auto text-center lg-text-left leading-loose text-lg opacity-90 mb-6 text-shadow font-normal">
                  I’ve since completed a bootcamp program and have done two internships
                  and an apprenticeship in the field. But feel free to look at some of my
                  projects for a better judgment of my skillset.
                </p>
                <a
                  href="../assets/resume.pdf"
                  className=" font-normal text-center no-underline mx-auto py-2 text-white lg-float-right"
                  target="_blank"
                >
                  {/* <img src={IconResume} alt="" className="mr-2" /> */}
                  <span>view resume</span>
                </a>
              </div>
            </div>

            <div className="w-full lg-w-1-2 lg-pt-32 px-4 lg-px-6 max-w-mdsm ">
              <h3 className="text-center mb-8 font-normal">Projects</h3>
              <ul className="mx-auto list-reset">
                <li className="mb-16">
                  <Link to="/" className="flex shadow-lg no-underline rounded bg-white">
                    <article className="p-4">
                      <img
                        className="mb-4"
                        src="http://via.placeholder.com/484x257"
                        alt=""
                      />
                      <h3 className="text-purple font-sans text-base mb-2">
                        No Fuss Fitness
                      </h3>
                      <p className="text-black font-serif text-sm leading-normal mb-4">
                        Lorem ipsum dolor sit amet, natum mollis mediocritatem eam cu.
                        Utamur tacimates cu mei.
                      </p>
                      <ul className="list-reset flex">
                        <li className="mr-2 bg-purple text-white rounded-full py-1 px-2 text-sm">
                          NodeJS
                        </li>
                        <li className="mr-2 bg-purple text-white rounded-full py-1 px-2 text-sm">
                          Express
                        </li>
                        <li className="mr-2 bg-purple text-white rounded-full py-1 px-2 text-sm">
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
                      <h3 className="text-purple font-sans text-base mb-2">
                        No Fuss Fitness
                      </h3>
                      <p className="text-black font-serif text-sm leading-normal mb-4">
                        Lorem ipsum dolor sit amet, natum mollis mediocritatem eam cu.
                        Utamur tacimates cu mei.
                      </p>
                      <ul className="list-reset flex">
                        <li className="mr-2 bg-purple text-white rounded-full py-1 px-2 text-sm">
                          NodeJS
                        </li>
                        <li className="mr-2 bg-purple text-white rounded-full py-1 px-2 text-sm">
                          Express
                        </li>
                        <li className="mr-2 bg-purple text-white rounded-full py-1 px-2 text-sm">
                          PostCSS
                        </li>
                      </ul>
                    </article>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export const projectTitledQuery = graphql`
  query projectsQuery {
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
        skillset {
          title
          skills
        }
        social {
          URL
          title
          svgURL
        }
      }
    }
  }
`
