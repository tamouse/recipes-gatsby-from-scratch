import React from "react"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import PageHeader from "../components/PageHeader"
import BreadCrumbs from "../components/BreadCrumbs"

export default ({ data }) => {
  const { frontmatter, fields, body } = data.mdx
  const backlinks = [
    { to: "/allRecipes", text: "Recipes" },
    { to: `/${fields.recipeCategory}`, text: fields.recipeCategory },
  ]

  return (
    <>
      <PageHeader />
      <BreadCrumbs backlinks={backlinks} />
      <article>
        <h1>{frontmatter.title}</h1>
        <p>{frontmatter.date}</p>
        <MDXRenderer>{body}</MDXRenderer>
      </article>
    </>
  )
}

export const query = graphql`
  query RecipesBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "YYYY MMM Do")
      }
      fields {
        recipeCategory
      }
      body
    }
  }
`
