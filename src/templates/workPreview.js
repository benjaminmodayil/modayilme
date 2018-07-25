import React from 'react'
import Helmet from 'react-helmet'
import Transition from '../layouts/transition'
import '../layouts/css/vendor/prism.css'
import Navigation from '../components/Navigation'

class Template extends React.Component {
  render() {
    const { wordpressWpProjects } = this.props.data

    return (
      <div className="bg-white text-black">
        <div className="bg-white text-black">
          <Helmet
            title="Projects | 💻"
            meta={[
              {
                name: 'description',
                content: wordpressWpProjects.excerpt
              },
              { itemprop: 'name', content: wordpressWpProjects.title },
              {
                itemprop: 'description',
                content: wordpressWpProjects.excerpt
              },
              // <!-- Schema image tag must be at least 180x120px -->
              { itemprop: 'image', content: 'assets/google-plus-meta.png' },

              // <!-- Twitter Card data -->
              { name: 'twitter:card', content: 'summary_large_image' },
              { name: 'twitter:site', content: '@modayilme' },
              { name: 'twitter:title', content: wordpressWpProjects.title },
              {
                name: 'twitter:description',
                content: wordpressWpProjects.excerpt
              },
              { name: 'twitter:creator', content: '@modayilme' },
              // <!-- Twitter summary card with large image must be at least 280x150px -->
              { name: 'twitter:image:src', content: 'assets/twitter-meta.png' },

              // <!-- Open Graph data -->
              { property: 'og:title', content: wordpressWpProjects.title },
              { property: 'og:type', content: 'website' },
              { property: 'og:url', content: 'www.modayil.me' },
              // <!-- Open graph image should be 1200 x 1200 (more info here: http://www.h3xed.com/web-and-internet/how-to-use-og-image-meta-tag-facebook-reddit) -->
              { property: 'og:image', content: 'assets/oggraph-meta.png' },
              {
                property: 'og:description',
                content: wordpressWpProjects.excerpt
              },
              { property: 'og:site_name', content: wordpressWpProjects.excerpt },
              { name: 'theme-color', content: '#5E548E' }
            ]}
          />
          <Transition location={this.props.pathContext.slug}>
            <Navigation
              navigation={this.props.data.site.siteMetadata.navigation}
              location={this.props.pathContext.slug}
            />
            <main className="post__page leading-normal mt-32 pb-16">
              <span className="block font-semibold text-center italic font-sans">
                {wordpressWpProjects.date}
              </span>
              <h1
                className="text-center text-5xl max-w-md mx-auto font-sans"
                dangerouslySetInnerHTML={{ __html: wordpressWpProjects.title }}
              />
              <div
                className="text-center max-w-sm font-sans mx-auto mb-24 px-4 md-px-0 opacity-90"
                dangerouslySetInnerHTML={{ __html: wordpressWpProjects.excerpt }}
              />
              <div
                className="post__page__inner font-thin"
                dangerouslySetInnerHTML={{ __html: wordpressWpProjects.content }}
              />
            </main>
          </Transition>
        </div>
      </div>
    )
  }
}

export default Template

export const query = graphql`
  query WorkQuery($slug: String!) {
    site {
      pathPrefix
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
      }
    }

    wordpressWpProjects(slug: { eq: $slug }) {
      title
      excerpt
      date(formatString: "MMMM Do, YYYY")
      slug
      content
    }
  }
`
