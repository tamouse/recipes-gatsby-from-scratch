import React from "react"
import { graphql } from "gatsby"
import { RecipeFragment } from "../queries/recipeFragment" // eslint-disable-line
import RecipeList from "../components/RecipeList.js"
import PageHeader from "../components/PageHeader"

export default ({ data, pageContext }) => {
  return (
    <>
      <PageHeader />
      <h3>
        Category {pageContext.category} ({data.allMdx.totalCount})
      </h3>
      {data ? (
        <RecipeList recipes={data.allMdx.nodes} />
      ) : (
        <div>data is null</div>
      )}
    </>
  )
}

export const query = graphql`
  query RecipesByCategory($category: String!) {
    allMdx(
      filter: { fields: { recipeCategory: { eq: $category } } }
      sort: { fields: frontmatter___title, order: ASC }
    ) {
      nodes {
        ...RecipeFragment
      }
      totalCount
    }
  }
`
