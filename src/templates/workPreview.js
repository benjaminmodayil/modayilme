import React from 'react'
import Helmet from 'react-helmet'
// import WorkPostHeader from '../components/work/WorkPostHeader'
import RelatedArticles from '../components/RelatedArticles.js'

// import '../layouts/_scss/vendor/prism.css'

class Template extends React.Component {
  render() {
    const { markdownRemark: post } = this.props.data
    const { wordpressWpProjects } = this.props.data
    console.log(this.props.data)
    // let projectLinkButton

    // if (wordpressWpProjects.website) {
    //   projectLinkButton = (
    //     <a
    //       href={wordpressWpProjects.website}
    //       className="work-preview__body__meta__data-and-link__link font-weight--light font-family--heading"
    //     >
    //       Visit the site
    //     </a>
    //   )
    // } else if (wordpressWpProjects.pen) {
    //   projectLinkButton = (
    //     <a
    //       href={wordpressWpProjects.pen}
    //       className="work-preview__body__meta__data-and-link__link font-weight--light font-family--heading"
    //     >
    //       See the pen
    //     </a>
    //   )
    // }

    return (
      <React.Fragment>
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
            { itemprop: 'image', content: 'static/google-plus-image.png' },

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
            { name: 'twitter:image:src', content: 'static/twitter-image.png' },

            // <!-- Open Graph data -->
            { property: 'og:title', content: wordpressWpProjects.title },
            { property: 'og:type', content: 'website' },
            { property: 'og:url', content: 'www.modayil.me' },
            // <!-- Open graph image should be 1200 x 1200 (more info here: http://www.h3xed.com/web-and-internet/how-to-use-og-image-meta-tag-facebook-reddit) -->
            { property: 'og:image', content: 'static/op-image.jpg' },
            {
              property: 'og:description',
              content: wordpressWpProjects.excerpt
            },
            { property: 'og:site_name', content: wordpressWpProjects.excerpt },
            { name: 'theme-color', content: '#F7484E' }
          ]}
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
      </React.Fragment>
    )
  }
}
// <WorkPostHeader posts={post} />

export default Template

export const query = graphql`
  query WorkQuery($slug: String!) {
    wordpressWpProjects(slug: { eq: $slug }) {
      title
      excerpt
      date(formatString: "MMMM Do, YYYY")
      slug
      content
    }
  }
`
