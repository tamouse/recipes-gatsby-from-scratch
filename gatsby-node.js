const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)

// NOTE: Taking a page from my old Jekyllrb blogging, creating both categories and tags
// pages to help navigate using them.

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const recipeTemplate = path.resolve("./src/templates/recipeTemplate.js")
  const categoryTemplate = path.resolve("./src/templates/categoryTemplate.js")
  const tagTemplate = path.resolve("./src/templates/tagTemplate.js")

  // NOTE: Did you know you can specify multiple queries in a single request? This is so
  // cool! It's just standard GraphQL, nothing magical. Except of course GraphQL is pretty
  // magical, innit?
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

    // NOTE: None of the tutorials show this, exactly, but this is plain old business type
    // logic and could probably be ripped out into another file, with suitable contextual
    // params passed in.

    const recipes = result.data.allMdx.nodes
    let tags = new Set() // tags should be unique, so a Set is the vehicle I'll use to ensure that

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

      // Build up the set of tags included in the frontmatter for the recipe, if there is
      // any. One thing I'm not too pleased about is the properties must be null-checked
      // all the way down. It would be cool if there was a way in GraphQL to say "give me
      // an empty structure, even if there's no data".
      if (recipe && recipe.frontmatter && recipe.frontmatter.tags) {
        recipe.frontmatter.tags.map(tag => {
          tags.add(tag)
        })
      }
    })

    // NOTE: building the separate category and tag pages here. This is just like I had to
    // do in JekyllRB long ago.
    const categories = result.data.allDirectory.nodes
    categories.forEach(category => {
      createPage({
        path: "/" + category.relativePath + "/", // NOTE: going to URL/main-dishes/ gets
        // you all the recipes in the
        // content/main-dishes/ directory.
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
    // NOTE: This is explained pretty heavily in most Gatsby tutorials, how to generate a page slug.
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })

    // NOTE: I needed a sortable title that would be lexigraphic sorting; there might be
    // an even better way to do this, but I didn't want to use the slug in particular. The
    // title seems more appropriate, with everything downcased.
    createNodeField({
      name: `sortTitle`,
      node,
      value: node.frontmatter.title.toLowerCase(),
    })

    // NOTE: This field provides the category for the recipe, which is derived from the
    // location in the content file tree.
    createNodeField({
      name: `recipeCategory`,
      node,
      value: value.split("/")[1], // value looks like "/:recipeCategory/:recipeFile"
    })
  }
}
