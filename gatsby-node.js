import path from 'path'
import _ from 'lodash'
import { paginate } from 'gatsby-awesome-pagination'

const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`./src/components/Templates/Post.tsx`)
  const categoryTemplate = path.resolve(`./src/components/Templates/Category.tsx`)
  const archiveTemplate = path.resolve(`./src/components/Templates/Archive.tsx`)

  return graphql(
    `
      {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 1000) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                categories
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const posts = result.data.allMarkdownRemark.edges

    paginate({
      createPage, // The Gatsby `createPage` function
      items: posts, // An array of objects
      itemsPerPage: 10, // How many items you want per page
      pathPrefix: '/post', // Creates pages like `/blog`, `/blog/2`, etc
      component: archiveTemplate, // Just like `createPage()`
    })

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node
      createPage({
        path: post.node.fields.slug,
        component: blogPostTemplate,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      })
    })
    let categories = []
    // Iterate through each post, putting all found categories into `categories`
    _.each(posts, edge => {
      if (_.get(edge, `node.frontmatter.categories`)) {
        categories = categories.concat(edge.node.frontmatter.categories)
      }
    })
    // Eliminate duplicate categories
    categories = _.uniq(categories)

    // Make category pages
    categories.forEach(category => {
      createPage({
        path: `/categories/${_.kebabCase(category)}/`,
        component: categoryTemplate,
        context: {
          category,
        },
      })
    })
    return null
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      name: `slug`,
      node,
      value: slug,
    })
  }
}
