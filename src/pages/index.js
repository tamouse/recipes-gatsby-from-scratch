import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
// import RecipesList from "../components/RecipeList"
import RecipeGrid from "../components/RecipeGrid"
import { RecipeFragment } from "../queries/recipeFragment" // eslint-disable-line

export default ({ data }) => {
  const {
    allMdx: { nodes: recipes, totalCount: numRecipes },
  } = data

  return (
    <Layout>
      <h3>Recipes ({numRecipes})</h3>
      <RecipeGrid recipes={recipes} />
    </Layout>
  )
}

export const FrontPageRecipes = graphql`
  query FrontPageRecipes {
    allMdx(sort: { fields: frontmatter___date, order: DESC }, limit: 30) {
      nodes {
        ...RecipeFragment
      }
      totalCount
    }
  }
`
