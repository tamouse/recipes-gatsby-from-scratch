const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const recipeTemplate = path.resolve("./src/templates/recipeTemplate.js")
  const categoryTemplate = path.resolve("./src/templates/categoryTemplate.js")
  const tagTemplate = path.resolve("./src/templates/tagTemplate.js")

  return graphql(`
    {
      allMdx {
        nodes {
          fields {
            slug
          }
          frontmatter {
            title
            tags
          }
          fileAbsolutePath
        }
      }
      allDirectory(filter: { absolutePath: { glob: "**/recipes/*" } }) {
        nodes {
          relativePath
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    const recipes = result.data.allMdx.nodes
    let tags = new Set()

    // create page for each mdx file
    recipes.forEach(recipe => {
      createPage({
        path: recipe.fields.slug,
        component: recipeTemplate,
        context: {
          slug: recipe.fields.slug,
          category: recipe.fields.category,
          sortTitle: recipe.fields.sortTitle,
        },
      })

      if (recipe && recipe.frontmatter && recipe.frontmatter.tags) {
        recipe.frontmatter.tags.map(tag => {
          tags.add(tag)
        })
      }
    })

    const categories = result.data.allDirectory.nodes

    categories.forEach(category => {
      createPage({
        path: "/" + category.relativePath + "/",
        component: categoryTemplate,
        context: {
          category: category.relativePath,
        },
      })
    })

    tags.forEach(tag => {
      createPage({
        path: `/tags/${tag}/`,
        component: tagTemplate,
        context: {
          tag,
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
      name: `sortTitle`,
      node,
      value: node.frontmatter.title.toLowerCase(),
    })
    // console.log({
    //   dump: node.frontmatter.title.toLowerCase(),
    //   typeof: typeof node.frontmatter.title,
    // })
    createNodeField({
      name: `recipeCategory`,
      node,
      value: value.split("/")[1], // value looks like "/:recipeCategory/:recipeFile"
    })
  }
}
