import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import RecipesList from "../components/RecipeList"
import { RecipeFragment } from "../queries/recipeFragment" // eslint-disable-line

export default ({ data }) => {
  const {
    allMdx: { nodes: recipes, totalCount: numRecipes },
  } = data

  return (
    <Layout>
      <h3>Recipes ({numRecipes})</h3>
      <RecipesList recipes={recipes} />
    </Layout>
  )
}

export const ALL_RECIPES = graphql`
  query ALL_RECIPES {
    allMdx(sort: { fields: frontmatter___title, order: ASC }) {
      nodes {
        ...RecipeFragment
      }
      totalCount
    }
  }
`
