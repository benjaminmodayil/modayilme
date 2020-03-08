const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPost = path.resolve(`./src/templates/blog-post.js`);
  return graphql(
    `
      {
        allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: 1000) {
          edges {
            node {
              fileAbsolutePath
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors;
    }

    // Create blog posts pages.
    const blog = result.data.allMdx.edges.filter(({ node }) =>
      node.fileAbsolutePath.includes('blog')
    );
    // Create project-log pages.
    const projectLog = result.data.allMdx.edges.filter(({ node }) =>
      node.fileAbsolutePath.includes('project-log')
    );

    blog.forEach((item, index) => {
      const previous = index === blog.length - 1 ? null : blog[index + 1].node;
      const next = index === 0 ? null : blog[index - 1].node;

      createPage({
        path: `blog${item.node.fields.slug}`,
        component: blogPost,
        context: {
          slug: item.node.fields.slug,
          previous,
          next
        }
      });
    });

    projectLog.forEach((log, index) => {
      const previous =
        index === projectLog.length - 1 ? null : projectLog[index + 1].node;
      const next = index === 0 ? null : projectLog[index - 1].node;

      createPage({
        path: `project-log${log.node.fields.slug}`,
        component: blogPost,
        context: {
          slug: log.node.fields.slug,
          previous,
          next
        }
      });
    });

    return null;
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (
    node.internal.type === `Mdx` ||
    node.internal.type === `Md` ||
    node.internal.type === `markdown`
  ) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value
    });
  }
};
