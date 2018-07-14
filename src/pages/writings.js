import React, { Component } from 'react'
import ArticleLoop from '../components/ArticleLoop'
import Transition from '../layouts/transition'
import Navigation from '../components/Navigation'

export default class Writings extends Component {
  render() {
    const { data } = this.props
    const { edges } = data.allWordpressPost
    return (
      <div className="site-container__inner home bg-purple text-white">
        <Transition location={this.props.location}>
          <Navigation
            navigation={this.props.data.site.siteMetadata.navigation}
            location={this.props.location}
          />
          <main
            className="writings-page relative pb-8 max-w-3xl mx-auto"
            role="main"
            style={this.props.transition && this.props.transition.style}
          >
            <div className="flex w-full items-center lg-items-start lg-justify-between flex-col lg-flex-row">
              <div className="w-full lg-w-1-2 flex flex-col pt-32 px-4 lg-px-8 max-w-mdsm items-center lg-items-start lg-justify-between mb-32 relative lg-sticky lg-pin-t">
                <div className="h-auto">
                  <h1 className="font-sans leading-normal mb-4 mx-auto lg-mx-0 text-center lg-text-left text-shadow">
                    Writings
                  </h1>

                  <p className="max-w-lgsm mx-auto text-center lg-text-left leading-loose text-base text-base mb-16 opacity-90 text-shadow font-normal">
                    I see you have found my writings page. Here you'll find me writing on
                    a variety of topics like:
                  </p>
                  <ul className="max-w-xs mx-auto">
                    <li className="list-special mb-8 leading-normal">
                      <div>
                        <p className="text-base mb-2">
                          <span className="font-semibold">Technology</span>
                        </p>
                        <p className="italic text-sm">
                          Front-end, back-end, AWS, emails, and etc...
                        </p>
                      </div>
                    </li>

                    <li className="list-special mb-8 leading-normal">
                      <div>
                        <p className="text-base mb-2">
                          <span className="font-semibold">Productivity</span>
                        </p>
                        <p className="italic text-sm">
                          How to do things a little bit more smoothly.
                        </p>
                      </div>
                    </li>

                    <li className="list-special mb-8 leading-normal">
                      <div>
                        <p className="text-base mb-2">
                          <span className="font-semibold">Other Stuff</span>
                        </p>
                        <p className="italic text-sm">
                          <a
                            href="https://www.youtube.com/watch?v=4nIUcRJX9-o"
                            className="no-underline"
                          >
                            idkmybffjill
                          </a>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="w-full lg-w-1-2 lg-pt-32 px-4">
                <h3 className="text-center mb-8 font-normal">Writings</h3>
                <div className="max-w-xs mx-auto">
                  <ArticleLoop articleArray={edges} type={'writings'} />
                </div>
              </div>
            </div>
          </main>
        </Transition>
      </div>
    )
  }
}

export const writingsTitledQuery = graphql`
  query writingsQuery {
    allWordpressPost(sort: { order: DESC, fields: [date] }) {
      edges {
        node {
          slug
          title
          excerpt
          content
          date
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
        navigation {
          URL
          title
        }
        writings {
          title
          bottomline
        }
      }
    }
  }
`
