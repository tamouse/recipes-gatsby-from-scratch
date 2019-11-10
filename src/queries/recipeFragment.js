import { graphql } from "gatsby"

export const RecipeFragment = graphql`
  fragment RecipeFragment on Mdx {
    id
    # excerpt # This just sucks in the first n chars, with no regard for structure
    rawBody # This is for getting the real excerpt, i.e. first paragraph
    frontmatter {
      title
      date
      tags
      source
    }
    fields {
      slug
      recipeCategory
    }
  }
`
