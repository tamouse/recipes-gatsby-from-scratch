import React from "react"
import { graphql } from "gatsby"
import { useSiteMetadata } from "../hooks/useSiteMetadata"
import { useRecipeCategories } from "../hooks/useCategories"

export const RECIPES_QUERY = graphql`
  query RECIPES_QUERY {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          title
          date
        }
        fileAbsolutePath
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
            return <li key={`category-${index}`}>{category.relativePath}</li>
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
              frontmatter: { title, date },
              fileAbsolutePath,
            } = recipe
            return (
              <li key={`recipe-${index}`}>
                <strong>{title}</strong> <em>{date}</em>
                <br />
                <code>{fileAbsolutePath}</code>
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
