module.exports = {
  siteMetadata: {
    title: 'modayil.me',
    skillset: ['HTML', 'CSS', 'JAVASCRIPT', 'REACT', 'SKETCH', 'MEMES']
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
    `gatsby-transformer-remark`
  ]
}
