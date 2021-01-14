module.exports = {
  // flags: { PRESERVE_WEBPACK_CACHE: true },
  siteMetadata: {
    title: `Ben Modayil`,
    description: `Ben Modayil is a front-end engineer who streams games and code on twitch while helping clients build their brands through websites and applications.`,
    author: `@24props`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-mdx`,
      extensions: [".md", ".mdx"],
      // gatsbyRemarkPlugins: [`gatsby-remark-prismjs`],
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Inter:100,200,300,400,500,600,700,800,900"],
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/work-journal`,
        name: `work-journal`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/content/pages/`,
      },
    },
    // {
    //   resolve: 'gatsby-plugin-page-creator',
    //   options: {
    //     path: `${__dirname}/src/posts`
    //   }
    // },
    // {
    //   resolve: 'gatsby-remark-prismjs',
    //   options: {
    //     inlineCodeMarker: '÷',
    //   },
    // },

    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    //   },
    // },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-remove-serviceworker`,
  ],
}
