const fs = require('fs')
const icon = name => fs.readFileSync(`./src/assets/icons/Icon${name}.js`)

module.exports = {
  siteMetadata: {
    title: 'modayil.me',
    skillset: [
      {
        title: 'Front-end',
        skills: ['HTML', 'CSS', 'SCSS', 'JS', 'REACT']
      },
      {
        title: 'Back-end',
        skills: [
          'NODEJS',
          'EXPRESS',
          'APIs',
          'MONGO',
          'REST',
          'MOCHA',
          'CHAI',
          'WORDPRESS',
          'CRAFTCMS'
        ]
      },
      {
        title: 'Other',
        skills: ['SKETCH', 'SVG', 'MEMES', 'PHOTOSHOP', 'PREMIERE']
      }
    ],
    social: [
      {
        URL: 'https://twitter.com/modayilme',
        title: 'Twitter',
        svgURL: `/assets/icons/footer/icon-twitter.svg`
      },
      {
        URL: 'https://www.github.com/benjaminmodayil',
        title: 'Github',
        svgURL: `/assets/icons/footer/icon-github.svg`
      },
      {
        URL: 'https://www.linkedin.com/in/benjamin-modayil',
        title: 'LinkedIn',
        svgURL: `/assets/icons/footer/icon-linkedIn.svg`
      },
      {
        URL: 'https://angel.co/benjaminmodayil',
        title: 'AngelList',
        svgURL: `/assets/icons/footer/icon-angellist.svg`
      },
      {
        URL: '/assets/resume.pdf',
        title: 'Resume',
        svgURL: `/assets/icons/footer/icon-resume.svg`
      },
      {
        URL: 'mailTo:modayilme@gmail.com',
        title: 'Email',
        svgURL: `/assets/icons/footer/icon-contact.svg`
      }
    ],
    navigation: [
      {
        URL: '/',
        title: 'Home',
        bgColor: 'bg-purple text-white'
      },
      {
        URL: '/writings',
        title: 'Writings',
        bgColor: 'bg-purple text-white'
      },
      {
        URL: '/projects',
        title: 'Projects',
        bgColor: 'bg-purple text-white'
      }
    ],
    jobs: [
      {
        title: 'Front-end Developer Apprentice',
        company: 'Viget',
        companyLink: 'https://www.viget.com',
        bottomline: 'in Falls Church, VA'
      },
      {
        title: 'Front-end Developer Intern',
        company: 'Viget',
        companyLink: 'https://www.viget.com',
        bottomline: 'in Falls Church, VA'
      },
      {
        title: 'Media Intern',
        company: 'Cedarville University',
        companyLink: 'https://www.cedarville.edu',
        bottomline: 'in Cedarville, OH'
      }
    ],
    projects: [
      {
        title: 'Fifa World Cup Hub',
        company: 'Hothouse Inc.',
        siteLink: 'http://hothouseinc.com/project/2018-fifa-world-cup/',
        companyLink: 'https://www.hothouseinc.com',
        bottomline: 'Assisted the lead developer with deadlines.'
      },
      {
        title: 'Groundrules Co.',
        siteLink: 'https://groundrules.co/',
        company: 'Viget',
        companyLink: 'https://www.viget.com',
        bottomline: 'A group of interns tackle an informational piece.'
      },
      {
        title: 'Jennifer Moore Speech',
        siteLink: 'http://www.jennifermoorespeech.com/',
        company: null,
        companyLink: null,
        bottomline: 'A site for Jennifer Moore, a speech therapist.'
      }
    ],
    writings: [
      {
        title: 'Technology',
        bottomline: 'Front-end, back-end, AWS, emails, and etc...'
      },
      {
        title: 'Productivity',
        bottomline: 'How to do things a little bit more smoothly.'
      },
      {
        title: 'Other Stuff',
        bottomline:
          '<a class="no-underline" href="https://www.youtube.com/watch?v=4nIUcRJX9-o" target="_blank">idkmybffjill</a>'
      }
    ]
  },
  plugins: [
    `gatsby-plugin-react-next`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/posts`,
        name: `pages`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/assets`,
        name: `img`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-'
            }
          }
        ]
      }
    },
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-twitter`,
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
    // `gatsby-plugin-netlify-cms`
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: 'modayil.club',
        protocol: 'http',
        hostingWPCOM: false,
        useACF: true
      }
    }
  ]
}
