import React from 'react'
import Helmet from 'react-helmet'
import Transition from '../layouts/transition'

// import '../layouts/_scss/vendor/prism.css'

export default function Template({ data, pathContext }, props) {
  const { wordpressPost } = data
  const { prev, next } = pathContext

  return (
    <React.Fragment>
      <Helmet
        title="Blog | ✍️"
        meta={[
          {
            name: 'description',
            content: wordpressPost.excerpt
          },
          { itemprop: 'name', content: wordpressPost.title },
          {
            itemprop: 'description',
            content: wordpressPost.excerpt
          },
          // <!-- Schema image tag must be at least 180x120px -->
          { itemprop: 'image', content: 'assets/google-plus-image.png' },

          // <!-- Twitter Card data -->
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:site', content: '@modayilme' },
          { name: 'twitter:title', content: wordpressPost.title },
          {
            name: 'twitter:description',
            content: wordpressPost.excerpt
          },
          { name: 'twitter:creator', content: '@modayilme' },
          // <!-- Twitter summary card with large image must be at least 280x150px -->
          { name: 'twitter:image:src', content: 'assets/twitter-image.png' },

          // <!-- Open Graph data -->
          { property: 'og:title', content: wordpressPost.title },
          { property: 'og:type', content: 'website' },
          { property: 'og:url', content: 'www.modayil.me' },
          // <!-- Open graph image should be 1200 x 1200 (more info here: http://www.h3xed.com/web-and-internet/how-to-use-og-image-meta-tag-facebook-reddit) -->
          { property: 'og:image', content: 'assets/op-image.jpg' },
          {
            property: 'og:description',
            content: wordpressPost.excerpt
          },
          { property: 'og:site_name', content: wordpressPost.excerpt },
          { name: 'theme-color', content: '#F7484E' }
        ]}
      />
      <Transition location={pathContext.slug}>
        <main
          className="post__page leading-normal mt-32 pb-16 bg-white text-black"
          style={props.transition && props.transition.style}
        >
          <span className="block font-semibold text-center italic font-sans">
            {wordpressPost.date}
          </span>
          <h1
            className="text-center text-5xl max-w-md mx-auto font-sans"
            dangerouslySetInnerHTML={{ __html: wordpressPost.title }}
          />
          <div
            className="text-center max-w-sm font-sans mx-auto mb-24 px-4 md-px-0 opacity-90"
            dangerouslySetInnerHTML={{ __html: wordpressPost.excerpt }}
          />
          <div
            className="post__page__inner font-thin"
            dangerouslySetInnerHTML={{ __html: wordpressPost.content }}
          />
        </main>
      </Transition>
    </React.Fragment>
  )
}

// <p className="max-w-mdlg mx-auto font-serif text-base mb-12 px-4 md-px-0 opacity-90">
// Lorem ipsum dolor sit amet, natum mollis mediocritatem eam cu. Utamur
// tacimates cu mei, at posse luptatum usu, cu ludus ancillae postulant qui. Duo
// accumsan atomorum comprehensam in? Id qui illum malis appareat, pro nulla
// mentitum molestiae an.
// </p>

// <p className="max-w-mdlg mx-auto font-serif text-base mb-12 px-4 md-px-0 opacity-90">
// Lorem ipsum dolor sit amet, natum mollis mediocritatem eam cu. Utamur
// tacimates cu mei, at posse luptatum usu, cu ludus ancillae postulant qui. Duo
// accumsan atomorum comprehensam in? Id qui illum malis appareat, pro nulla
// mentitum molestiae an.
// </p>

// <div className="max-w-mdlg mx-auto font-serif px-4 md-px-0">
// <div className="md--mx-4 flex flex-col md-flex-row">
//   <p className="md-w-1-2 md-px-4 mb-12 opacity-90">
//     Lorem ipsum dolor sit amet, natum mollis mediocritatem eam cu. Utamur
//     tacimates cu mei, at posse luptatum usu, cu ludus ancillae postulant qui.
//     Duo accumsan atomorum comprehensam in? Id qui illum malis appareat, pro
//     nulla mentitum molestiae an.
//   </p>
//   <p className="md-w-1-2 md-px-4 mb-12 opacity-90">
//     Lorem ipsum dolor sit amet, natum mollis mediocritatem eam cu. Utamur
//     tacimates cu mei, at posse luptatum usu, cu ludus ancillae postulant qui.
//     Duo accumsan atomorum comprehensam in? Id qui illum malis appareat, pro
//     nulla mentitum molestiae an.
//   </p>
// </div>
// </div>

// <p className="max-w-mdlg mx-auto font-serif text-base mb-12 px-4 md-px-0 opacity-90">
// Lorem ipsum dolor sit amet, natum mollis mediocritatem eam cu. Utamur
// tacimates cu mei, at posse luptatum usu, cu ludus ancillae postulant qui. Duo
// accumsan atomorum comprehensam in? Id qui illum malis appareat, pro nulla
// mentitum molestiae an. Lorem ipsum dolor sit amet, natum mollis mediocritatem
// eam cu. Utamur tacimates cu mei, at posse luptatum usu, cu ludus ancillae
// postulant qui. Duo accumsan atomorum comprehensam in? Id qui illum malis
// appareat, pro nulla mentitum molestiae an.
// </p>

// <p className="max-w-mdlg mx-auto font-serif text-base mb-12 px-4 md-px-0 opacity-90">
// Lorem ipsum dolor sit amet, natum mollis mediocritatem eam cu. Utamur
// tacimates cu mei, at posse luptatum usu, cu ludus ancillae postulant qui. Duo
// accumsan atomorum comprehensam in? Id qui illum malis appareat, pro nulla
// mentitum molestiae an.
// </p>

// <div className="max-w-mdlg mx-auto font-serif px-4 md-px-0">
// <div className="md--mx-4 flex flex-col md-flex-row">
//   <p className="md-w-1-2 md-px-4 mb-12 opacity-90">
//     Lorem ipsum dolor sit amet, natum mollis mediocritatem eam cu. Utamur
//     tacimates cu mei, at posse luptatum usu, cu ludus ancillae postulant qui.
//     Duo accumsan atomorum comprehensam in? Id qui illum malis appareat, pro
//     nulla mentitum molestiae an.
//   </p>
//   <div className="flex justify-center md-w-1-2 md-px-4 mb-12 opacity-90">
//     <img src="http://via.placeholder.com/350x150" />
//   </div>
// </div>
// </div>

// <div className="max-w-mdlg mx-auto font-serif px-4 md-px-0">
// <div className="md--mx-4 flex flex-col md-flex-row">
//   <div className="md-w-1-2 md-px-4 mb-12">
//     <p className="mb-12 opacity-90">
//       Lorem ipsum dolor sit amet, natum mollis mediocritatem eam cu. Utamur
//       tacimates cu mei, at posse luptatum usu, cu ludus ancillae postulant
//       qui. Duo accumsan atomorum comprehensam in? Id qui illum malis appareat,
//       pro nulla mentitum molestiae an.
//     </p>
//     <p className="mb-12 opacity-90">
//       Lorem ipsum dolor sit amet, natum mollis mediocritatem eam cu. Utamur
//       tacimates cu mei, at posse luptatum usu, cu ludus ancillae postulant
//       qui. Duo accumsan atomorum comprehensam in? Id qui illum malis appareat,
//       pro nulla mentitum molestiae an.
//     </p>
//   </div>
//   <div className="md-block flex justify-center md-w-1-2 md-px-4 mb-12 opacity-90">
//     <img
//       className="h-auto md-w-full"
//       src="http://via.placeholder.com/350x350"
//     />
//   </div>
// </div>
// </div>
// <ul className="mx-auto font-serif w-64 my-16">
// <li>This is list item #1</li>
// <li>This is list item #2 hahaha</li>
// <li>This is list item #3</li>
// </ul>

// <figure className="bg-red w-full m-0 pb-8 md-pb-16 md-pt-24">
// <img
//   className="mx-auto max-w-lg max-w-full block h-auto"
//   src="http://via.placeholder.com/650x350"
//   alt="An awesome picture"
// />
// <figcaption className="text-center text-white mt-8 italic">
//   MDN Logo
// </figcaption>
// </figure>
// default paragraph stylings: text-base mb-12 opacity-90
// image to figures
// {wordpressPost.date}

// <RelatedArticles related={pathContext} />
// <div
// className="font-serif text-base"
// dangerouslySetInnerHTML={{ __html: post.html }}
// />
// export const pageQuery = graphql`
//   query BlogPostByPath($path: String!) {
//     markdownRemark(frontmatter: { path: { eq: $path } }) {
//       id
//       html
//       frontmatter {
//         date(formatString: "MMMM Do YYYY")
//         title
//         excerpt
//         path
//       }
//     }
//   }
// `

export const query = graphql`
  query PostQuery($slug: String!) {
    sitePage {
      path
    }

    site {
      pathPrefix
    }

    wordpressPost(slug: { eq: $slug }) {
      title
      excerpt
      date(formatString: "MMMM Do, YYYY")
      slug
      content
    }
  }
`
