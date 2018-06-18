import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import RelatedArticles from '../components/RelatedArticles.js'

import IconArrowLeft from '../assets/post-assets/IconArrowLeft'
import IconArrowRight from '../assets/post-assets/IconArrowRight'

import IconLink from '../assets/icons/IconLink.js'
// import '../layouts/_scss/vendor/prism.css'

export default function Template({ data, pathContext }, props) {
  const { markdownRemark: post } = data

  const { prev, next } = pathContext

  return (
    <React.Fragment>
      <Helmet
        title="Blog | ✍️"
        meta={[
          {
            name: 'description',
            content: post.frontmatter.tldr
          },
          { itemprop: 'name', content: post.frontmatter.title },
          {
            itemprop: 'description',
            content: post.frontmatter.tldr
          },
          // <!-- Schema image tag must be at least 180x120px -->
          { itemprop: 'image', content: 'static/google-plus-image.png' },

          // <!-- Twitter Card data -->
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:site', content: '@modayilme' },
          { name: 'twitter:title', content: post.frontmatter.title },
          {
            name: 'twitter:description',
            content: post.frontmatter.tldr
          },
          { name: 'twitter:creator', content: '@modayilme' },
          // <!-- Twitter summary card with large image must be at least 280x150px -->
          { name: 'twitter:image:src', content: 'static/twitter-image.png' },

          // <!-- Open Graph data -->
          { property: 'og:title', content: post.frontmatter.title },
          { property: 'og:type', content: 'website' },
          { property: 'og:url', content: 'www.modayil.me' },
          // <!-- Open graph image should be 1200 x 1200 (more info here: http://www.h3xed.com/web-and-internet/how-to-use-og-image-meta-tag-facebook-reddit) -->
          { property: 'og:image', content: 'static/op-image.jpg' },
          {
            property: 'og:description',
            content: post.frontmatter.tldr
          },
          { property: 'og:site_name', content: post.frontmatter.tldr },
          { name: 'theme-color', content: '#F7484E' }
        ]}
      />

      <main className="post__page leading-normal mt-32">
        <span className="block font-semibold text-center italic font-sans">
          {post.frontmatter.date}
        </span>
        <h1
          className="text-center text-5xl max-w-md mx-auto font-sans"
          dangerouslySetInnerHTML={{ __html: post.frontmatter.title }}
        />
        <p className="text-center max-w-sm font-sans mx-auto mb-24 px-2 md-px-0 opacity-90">
          {post.frontmatter.tldr}
        </p>

        <p className="max-w-mdlg mx-auto font-serif text-base mb-8 px-2 md-px-0 opacity-90">
          Lorem ipsum dolor sit amet, natum mollis mediocritatem eam cu. Utamur tacimates
          cu mei, at posse luptatum usu, cu ludus ancillae postulant qui. Duo accumsan
          atomorum comprehensam in? Id qui illum malis appareat, pro nulla mentitum
          molestiae an.
        </p>

        <p className="max-w-mdlg mx-auto font-serif text-base mb-8 px-2 md-px-0 opacity-90">
          Lorem ipsum dolor sit amet, natum mollis mediocritatem eam cu. Utamur tacimates
          cu mei, at posse luptatum usu, cu ludus ancillae postulant qui. Duo accumsan
          atomorum comprehensam in? Id qui illum malis appareat, pro nulla mentitum
          molestiae an.
        </p>

        <div className="max-w-mdlg mx-auto font-serif px-2 md-px-0">
          <div className="md--mx-4 flex flex-col md-flex-row">
            <p className="md-w-1-2 md-px-4 mb-8 opacity-90">
              Lorem ipsum dolor sit amet, natum mollis mediocritatem eam cu. Utamur
              tacimates cu mei, at posse luptatum usu, cu ludus ancillae postulant qui.
              Duo accumsan atomorum comprehensam in? Id qui illum malis appareat, pro
              nulla mentitum molestiae an.
            </p>
            <p className="md-w-1-2 md-px-4 mb-8 opacity-90">
              Lorem ipsum dolor sit amet, natum mollis mediocritatem eam cu. Utamur
              tacimates cu mei, at posse luptatum usu, cu ludus ancillae postulant qui.
              Duo accumsan atomorum comprehensam in? Id qui illum malis appareat, pro
              nulla mentitum molestiae an.
            </p>
          </div>
        </div>

        <p className="max-w-mdlg mx-auto font-serif text-base mb-8 px-2 md-px-0 opacity-90">
          Lorem ipsum dolor sit amet, natum mollis mediocritatem eam cu. Utamur tacimates
          cu mei, at posse luptatum usu, cu ludus ancillae postulant qui. Duo accumsan
          atomorum comprehensam in? Id qui illum malis appareat, pro nulla mentitum
          molestiae an. Lorem ipsum dolor sit amet, natum mollis mediocritatem eam cu.
          Utamur tacimates cu mei, at posse luptatum usu, cu ludus ancillae postulant qui.
          Duo accumsan atomorum comprehensam in? Id qui illum malis appareat, pro nulla
          mentitum molestiae an.
        </p>

        <p className="max-w-mdlg mx-auto font-serif text-base mb-8 px-2 md-px-0 opacity-90">
          Lorem ipsum dolor sit amet, natum mollis mediocritatem eam cu. Utamur tacimates
          cu mei, at posse luptatum usu, cu ludus ancillae postulant qui. Duo accumsan
          atomorum comprehensam in? Id qui illum malis appareat, pro nulla mentitum
          molestiae an.
        </p>

        <div className="max-w-mdlg mx-auto font-serif px-2 md-px-0">
          <div className="md--mx-4 flex flex-col md-flex-row">
            <p className="md-w-1-2 md-px-4 mb-8 opacity-90">
              Lorem ipsum dolor sit amet, natum mollis mediocritatem eam cu. Utamur
              tacimates cu mei, at posse luptatum usu, cu ludus ancillae postulant qui.
              Duo accumsan atomorum comprehensam in? Id qui illum malis appareat, pro
              nulla mentitum molestiae an.
            </p>
            <div className="flex justify-center md-w-1-2 md-px-4 mb-8 opacity-90">
              <img src="http://via.placeholder.com/350x150" />
            </div>
          </div>
        </div>

        <div className="max-w-mdlg mx-auto font-serif px-2 md-px-0">
          <div className="md--mx-4 flex flex-col md-flex-row">
            <div className="md-w-1-2 md-px-4 mb-8">
              <p className="mb-8 opacity-90">
                Lorem ipsum dolor sit amet, natum mollis mediocritatem eam cu. Utamur
                tacimates cu mei, at posse luptatum usu, cu ludus ancillae postulant qui.
                Duo accumsan atomorum comprehensam in? Id qui illum malis appareat, pro
                nulla mentitum molestiae an.
              </p>
              <p className="mb-8 opacity-90">
                Lorem ipsum dolor sit amet, natum mollis mediocritatem eam cu. Utamur
                tacimates cu mei, at posse luptatum usu, cu ludus ancillae postulant qui.
                Duo accumsan atomorum comprehensam in? Id qui illum malis appareat, pro
                nulla mentitum molestiae an.
              </p>
            </div>
            <div className="md-block flex justify-center md-w-1-2 md-px-4 mb-8 opacity-90">
              <img
                className="h-auto md-w-full"
                src="http://via.placeholder.com/350x350"
              />
            </div>
          </div>
        </div>
        <ul className="mx-auto font-serif w-64 my-16">
          <li>This is list item #1</li>
          <li>This is list item #2 hahaha</li>
          <li>This is list item #3</li>
        </ul>

        <figure className="bg-red w-full m-0 pb-8 md-pb-16 md-pt-24">
          <img
            className="mx-auto max-w-lg max-w-full block h-auto"
            src="http://via.placeholder.com/650x350"
            alt="An awesome picture"
          />
          <figcaption className="text-center text-white mt-8 italic">MDN Logo</figcaption>
        </figure>
      </main>
    </React.Fragment>
  )
}

// default paragraph stylings: text-base mb-8 opacity-90
// image to figures
// {post.frontmatter.date}

// <RelatedArticles related={pathContext} />
// <div
// className="font-serif text-base"
// dangerouslySetInnerHTML={{ __html: post.html }}
// />
export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM Do YYYY")
        title
        tldr
        path
      }
    }
  }
`
