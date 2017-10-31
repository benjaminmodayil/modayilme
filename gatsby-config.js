module.exports = {
  pathPrefix: `/modayilme`,
  siteMetadata: {
    title: 'modayil.me',
    skillset: ['HTML', 'CSS', 'JAVASCRIPT', 'REACT', 'SKETCH', 'MEMES'],
    twitter: 'https://twitter.com/modayilme',
    instagram: 'https://www.instagram.com/modayilme/',
    linkedIn: 'https://www.linkedin.com/in/benjamin-modayil/',
    github: 'https://github.com/benjaminmodayil'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/posts`,
        name: `pages`
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-netlify`
  ]
}
