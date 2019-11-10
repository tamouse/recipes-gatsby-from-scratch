const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const recipeTemplate = path.resolve("./src/templates/recipeTemplate.js")

  return graphql(`
    {
      allMdx {
        nodes {
          fields {
            slug
          }
          frontmatter {
            title
          }
          fileAbsolutePath
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    const recipes = result.data.allMdx.nodes

    // create page for each mdx file
    recipes.forEach(recipe => {
      createPage({
        path: recipe.fields.slug,
        component: recipeTemplate,
        context: {
          slug: recipe.fields.slug,
          category: recipe.fields.category,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
    createNodeField({
      name: `recipeCategory`,
      node,
      value: value.split("/")[1], // value looks like "/:recipeCategory/:recipeFile"
    })
  }
}
