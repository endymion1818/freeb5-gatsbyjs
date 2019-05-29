const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

const createCategoryPages = (createPage, edges) => {
  const tagTemplate = path.resolve(`src/templates/catgories.js`);
  const posts = {};

  edges
    .forEach(({ node }) => {
      if (node.frontmatter.categories) {
        node.frontmatter.categories
          .forEach(categories => {
            if (!posts[categories]) {
              posts[categories] = [];
            }
            posts[categories].push(node);
          });
      }
    });

  createPage({
    path: '/categories',
    component: path.resolve(`./src/templates/categories.js`),
    context: {
      posts
    }
  });

  Object.keys(posts)
    .forEach(categoryName => {
      const post = posts[categoryName];
      createPage({
        path: `/categories/${categoryName}`,
        component: categoryTemplate,
        context: {
          posts,
          post,
          tag: categoryName
        }
      })
    });
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.map(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/blog-post.js`),
          context: {
            slug: node.fields.slug,
          },
        })
      })
      resolve()
    })
  })
}
