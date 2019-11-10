import React from "react"
import { graphql } from "gatsby"
import PageHeader from "../components/PageHeader"
import Sidebar from "../components/Sidebar"
import RecipesList from "../components/RecipeList"
import { RecipeFragment } from "../queries/recipeFragment" // eslint-disable-line

export default ({ data }) => {
  const {
    allMdx: { nodes: recipes, totalCount: numRecipes },
  } = data

  return (
    <>
      <PageHeader />
      <Sidebar />
      <h3>Recipes ({numRecipes})</h3>
      <RecipesList recipes={recipes} />
    </>
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
