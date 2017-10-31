const path = require('path')

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  const postTemplate = path.resolve('src/templates/post.js')
  const workPreviewTemplate = path.resolve('src/templates/workPreview.js')

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            html
            id
            frontmatter {
              layout
              path
              title
              tldr
              type
              category
            }
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) {
      return Promise.reject(res.errors)
    }

    res.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const checkType = () => {
        if (node.frontmatter.layout.includes('post')) {
          return postTemplate
        } else if (node.frontmatter.layout.includes('work')) {
          return workPreviewTemplate
        } else {
          return postTemplate
        }
      }

      createPage({
        path: node.frontmatter.path ? node.frontmatter.path : '',
        component: checkType()
      })
    })
  })
}
