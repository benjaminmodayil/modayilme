import React from 'react'
import Header from '../components/homepage/Header'
import Updates from '../components/Updates'
import List from '../components/List'
import ArticleLoop from '../components/ArticleLoop'
import SocialMedia from '../components/SocialMedia'

class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const posts = data.allWordpressPost.edges
    const projects = data.allWordpressWpProjects.edges

    return (
      <main className="relative pb-48 home" role="main">
        <Header data={this.props.data} />
        <div>
          <Updates />
          <div className="flex flex-col md-flex-row max-w-xl mx-auto mb-32 md-mb-64">
            <List
              items={data.site.siteMetadata.jobs}
              heading={'Jobs'}
              linkText={null}
              linkPath={null}
            />
            <List
              items={data.site.siteMetadata.projects}
              heading={'Projects'}
              linkText={'view more'}
              linkPath={'/projects'}
            />
          </div>
          <section className="flex flex-col md-flex-row justify-between mx-auto max-w-xl md-mb-64 px-4">
            <div className="w-full mx-auto md-mx-0 md-w-1-2 max-w-xssm">
              <h2 className="screenreader-only">Projects</h2>
              <p className="text-3xl leading-normal font-thin text-shadow mb-8">
                When I’m not at work… I’m probably still working, just on my own projects.
                👨‍💻
              </p>
              <List
                items={null}
                basicList={data.site.siteMetadata.skillset}
                heading={null}
                linkText={null}
                linkPath={null}
              />
            </div>

            <div className="w-full md-w-1-2 mb-32 md-mb-0">
              <h3 aria-hidden="true" className="text-center font-semibold mb-8">
                Projects
              </h3>
              <div className="max-w-xs mx-auto">
                <ArticleLoop data={data} articleArray={projects} type={'projects'} />
              </div>
            </div>
          </section>

          <section className="flex flex-col md-flex-row justify-between mx-auto max-w-xl md-mb-64 px-4">
            <div className="md-order-2 w-full mx-auto md-mx-0 md-w-1-2 max-w-xssm">
              <h2 className="screenreader-only">Writings</h2>
              <p className="text-3xl leading-normal font-thin text-shadow mb-8">
                Or, I’m writing about things I’m learning or interested in.{' '}
                <span role="img" aria-label="" alt="">
                  ✍️
                </span>
              </p>
              <List
                items={null}
                basicList={data.site.siteMetadata.writings}
                heading={null}
                linkText={null}
                linkPath={null}
              />
            </div>
            <div className="md-order-1 w-full md-w-1-2 mb-32 md-mb-0">
              <h3 aria-hidden="true" className="text-center font-semibold mb-8">
                Writings
              </h3>
              <div className="max-w-xs mx-auto">
                <ArticleLoop data={data} articleArray={posts} type={'writings'} />
                {console.log('rendered')}
              </div>
            </div>
          </section>
        </div>
        <p className="text-xl leading-loose md-text-3xl max-w-lg mx-auto px-4 lg-px-0 md-leading-normal font-thin text-shadow mb-24">
          At the moment, I’m working part-time, but also looking for my next role. If
          you’re interested in bringing me on your team or need help with a project, take
          a look at my{' '}
          <a
            className="no-underline"
            href="https://www.modayil.me/assets/resume.pdf"
            target="_blank"
          >
            resume
          </a>{' '}
          and feel free to{' '}
          <a className="no-underline" href="mailto:modayilme@gmail.com">
            email me
          </a>.
        </p>

        <SocialMedia data={this.props.data.site.siteMetadata.social} />
      </main>
    )
  }
}

export default IndexPage

export const indexBlogListingQuery = graphql`
  query IndexingQuery {
    allWordpressPost(sort: { order: DESC, fields: [date] }, limit: 3) {
      edges {
        node {
          slug
          title
          excerpt
          date
        }
      }
    }

    allWordpressWpProjects(sort: { order: DESC, fields: [date] }, limit: 3) {
      edges {
        node {
          slug
          title
          excerpt
          date
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
        jobs {
          title
          company
          companyLink
          bottomline
        }
        projects {
          title
          siteLink
          company
          companyLink
          bottomline
        }
        writings {
          title
          bottomline
        }
      }
    }
  }
`
