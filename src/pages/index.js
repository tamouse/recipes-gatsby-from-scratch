import React from "react"
import { graphql, Link } from "gatsby"
import { useSiteMetadata } from "../hooks/useSiteMetadata"
import { useRecipeCategories } from "../hooks/useCategories"

export const RECIPES_QUERY = graphql`
  query RECIPES_QUERY {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        id
        excerpt
        frontmatter {
          title
          date
        }
        fields {
          slug
        }
      }
      pageInfo {
        itemCount
      }
    }
  }
`

export default ({ data }) => {
  const { title, description } = useSiteMetadata()
  const categories = useRecipeCategories()
  const {
    allMdx: {
      nodes: recipes,
      pageInfo: { itemCount: numRecipes },
    },
  } = data

  return (
    <>
      <h2>{title}</h2>
      <div>{description}</div>
      <h3>Categories</h3>
      <ul>
        {categories.length > 0 ? (
          categories.map((category, index) => {
            return <li key={`category-${index}`}>{category}</li>
          })
        ) : (
          <li>No categories</li>
        )}
      </ul>
      <h3>Recipes ({numRecipes})</h3>
      <ul>
        {recipes.length > 0 ? (
          recipes.map((recipe, index) => {
            const {
              id,
              excerpt,
              frontmatter: { title, date },
              fields,
            } = recipe
            return (
              <li key={`recipe-${index}`} style={{ paddingBottom: `10px` }}>
                <Link to={fields.slug}>
                  <strong>{title}</strong>
                </Link>{" "}
                <em>{date}</em> (<code>{id}</code>)
                <p>
                  <em>{excerpt}</em>
                </p>
              </li>
            )
          })
        ) : (
          <li>no recipes</li>
        )}
      </ul>
    </>
  )
}
