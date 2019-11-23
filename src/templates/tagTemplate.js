import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { RecipeFragment } from "../queries/recipeFragment" // eslint-disable-line
import RecipeList from "../components/RecipeList.js"
import PageHeader from "../components/PageHeader"

export default ({ data, pageContext }) => {
  return (
    <Layout>
      <h3>
        Tag {pageContext.tag} ({data.allMdx.totalCount})
      </h3>
      {data ? (
        <RecipeList recipes={data.allMdx.nodes} />
      ) : (
        <div>data is null</div>
      )}
    </Layout>
  )
}

export const query = graphql`
  query RecipesByTag($tag: String!) {
    allMdx(
      filter: { frontmatter: { tags: { in: [$tag] } } }
      sort: { fields: fields___sortTitle, order: ASC }
    ) {
      nodes {
        ...RecipeFragment
      }
      totalCount
    }
  }
`
