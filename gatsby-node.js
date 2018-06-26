const path = require('path')

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    graphql(
      `
        {
          allWordpressPost {
            edges {
              node {
                slug
              }
            }
          }

          allWordpressWpProjects {
            edges {
              node {
                slug
              }
            }
          }
        }
      `
    ).then(result => {
      console.log(result.data)
      if (result.errors) {
        console.log(result.errors)
        reject(result.errors)
      }

      result.data.allWordpressPost.edges.forEach(({ node }) => {
        createPage({
          path: `writings/${node.slug}`,
          component: path.resolve('src/templates/post.js'),
          context: {
            slug: node.slug
          }
        })
      })
      resolve()

      result.data.allWordpressWpProjects.edges.forEach(({ node }) => {
        createPage({
          path: `projects/${node.slug}`,
          component: path.resolve('src/templates/workPreview.js'),
          context: {
            slug: node.slug
          }
        })
      })
      resolve()
    })
  })
}

// const path = require('path')

// exports.createPages = ({ boundActionCreators, graphql }) => {
//   const { createPage } = boundActionCreators

//   const postTemplate = path.resolve('src/templates/post.js')
//   const workPreviewTemplate = path.resolve('src/templates/workPreview.js')

//   return graphql(`
//     {
//       allWordpressPage {
//         edges {
//           node {
//             id
//             slug
//             title
//           }
//         }
//       }
//       allWordpressPost {
//         edges {
//           node {
//             slug
//           }
//         }
//       }
//     }
//   `).then(res => {
//     if (res.errors) {
//       return Promise.reject(res.errors)
//     }

//     const posts = res.data.allMarkdownRemark.edges

//     posts.forEach(({ node }, index) => {

//       // const checkType = () => {
//       //   switch (node.frontmatter.layout) {
//       //     case 'post':
//       //       return postTemplate
//       //     case 'work':
//       //       return workPreviewTemplate
//       //     default:
//       //       return postTemplate
//       //   }
//       // }

//       // createPage({
//       //   path: node.slug,
//       //   component: postTemplate,
//       //   context: {
//       //     slug: node.slug
//       //     // prev: index === 0 ? null : posts[index - 1].node,
//       //     // next: index === posts.length - 1 ? null : posts[index + 1].node
//       //   }
//       // })

//       // result.data.allWordpressPage.edges.forEach(({ node }) => {
//       //   createPage({
//       //     path: node.slug,
//       //     component: path.resolve('./src/templates/page.js'),
//       //     context: {
//       //       slug: node.slug,
//       //     },
//       //   })
//       // })

//       result.data.allWordpressPost.edges.forEach(({ node }) => {
//         createPage({
//           path: `posts/${node.slug}`,
//           component: path.resolve('./src/templates/post.js'),
//           context: {
//             slug: node.slug
//           }
//         })
//       })
//     })
//   })
// }
