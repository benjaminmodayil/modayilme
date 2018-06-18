import React from 'react'
import Header from '../components/homepage/Header'
import RecentWritings from '../components/RecentWritings'
import Updates from '../components/Updates'
import Link from 'gatsby-link'
import List from '../components/List'

class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const meta = data.site.siteMetadata.skillset.map((el, index) => (
      <li
        key={index}
        className="text-red text-sm font-semibold uppercase w-1-4 flex justify-center px-2 md-px-4 my-4"
      >
        <span className="bg-white shadow-md p-2 rounded w-full text-center">{el}</span>
      </li>
    ))
    const { edges } = data.allMarkdownRemark
    const articles = edges
      .filter((i, index) => i.node.frontmatter.type == 'blog')
      .slice(0, 4)
    const workExamples = edges.filter(i => i.node.frontmatter.type == 'work').slice(0, 6)

    return (
      <main className="relative pb-48 home" role="main">
        <Header data={this.props.data} />
        <div>
          <Updates />
          <div className="flex flex-col md-flex-row max-w-xl mx-auto">
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
          <section>
            <h2 className="screenreader-only">Projects</h2>
            <p>
              When I’m not at work… I’m probably still working, just on my own projects.
              👨‍💻
            </p>
            <List
              items={data.site.siteMetadata.projects}
              basicList={data.site.siteMetadata.skillset}
              heading={null}
              linkText={null}
              linkPath={null}
            />
            <h3 aria-hidden="true">Projects</h3>
          </section>
        </div>
        <p className="text-3xl max-w-lg mx-auto px-4 md-px-0 leading-normal font-thin text-shadow">
          At the moment, I’m working part-time, but also looking for my next role. If
          you’re interested in bringing me on your team or need help with a project, feel
          free to send me a message below or{' '}
          <a className="no-underline" href="mailto:modayilme@gmail.com">
            email me
          </a>.
        </p>
      </main>
    )
    // <ArticleLoop data={data} articleArray={caseStudies} />
  }
}

export default IndexPage

export const indexBlogListingQuery = graphql`
  query IndexingQuery {
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
      }
    }
  }
`
