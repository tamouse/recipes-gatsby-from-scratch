import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import BreadCrumbs from "../components/BreadCrumbs"
import RecipeArticle from "../components/RecipeArticle"

export default ({ data }) => {
  const { fields } = data.mdx
  const backlinks = [
    { to: "/allRecipes", text: "Recipes" },
    { to: `/${fields.recipeCategory}`, text: fields.recipeCategory },
  ]

  return (
    <Layout>
      <BreadCrumbs backlinks={backlinks} />
      <RecipeArticle recipe={data.mdx} />
    </Layout>
  )
}

export const query = graphql`
  query RecipesBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "YYYY MMM Do")
        tags
      }
      fields {
        recipeCategory
      }
      body
    }
  }
`
