module.exports = {
  siteMetadata: {
    title: 'modayil.me',
    skillset: ['HTML', 'CSS', 'JAVASCRIPT', 'REACT', 'SKETCH', 'MEMES'],
    twitter: 'https://twitter.com/modayilme',
    instagram: 'https://www.instagram.com/modayilme/',
    linkedIn: 'https://www.linkedin.com/in/benjamin-modayil/',
    github: 'https://github.com/benjaminmodayil'
  },
  plugins: [
    `gatsby-plugin-react-next`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/posts`,
        name: `pages`
      }
    },
    `gatsby-plugin-twitter`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          `gatsby-remark-emoji`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 800,
              // Remove the default behavior of adding a link to each
              // image.
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'modayilme',
        short_name: 'modayilme',
        start_url: '/',
        background_color: '#40353F',
        theme_color: '#40353F',
        display: 'minimal-ui',
        icons: [
          {
            // Everything in /static will be copied to an equivalent
            // directory in /public during development and build, so
            // assuming your favicons are in /static/favicons,
            // you can reference them here
            src: `/favicons/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`
          },
          {
            src: `/favicons/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`
          }
        ]
      }
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-90258518-1',
        anonymize: true
      }
    },
    `gatsby-plugin-netlify-cms`
  ]
}
