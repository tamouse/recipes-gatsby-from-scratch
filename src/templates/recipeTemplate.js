import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

export default ({ data }) => {
  const { frontmatter, body } = data.mdx

  return (
    <article>
      <h3>{frontmatter.title}</h3>
      <p>{frontmatter.date}</p>
      <MDXRenderer>{body}</MDXRenderer>
    </article>
  )
}

export const query = graphql`
  query RecipesBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "YYYY MMM Do")
      }
      body
    }
  }
`
