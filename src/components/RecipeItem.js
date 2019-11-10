import React from "react"
import { Link } from "gatsby"

function excerptReipe(body) {
  // NOTE: I need this since the standard `excerpt` just snags all the text and only
  // allows for length truncation. This method takes the rawBody of the recipe and gets
  // the first paragraph of the content part.
  return body
    .split("---\n")[2] // [null, frontmatter, content]
    .trim() // takes care of content that might have white space at the top
    .split("\n\n")[0] // splits into paragraphs, just return the first one
}

export default ({ recipe }) => (
  <>
    <Link to={recipe.fields.slug}>
      <strong>{recipe.frontmatter.title}</strong>
    </Link>{" "}
    <em>{recipe.frontmatter.date}</em> (<code>{recipe.id}</code>)
    <p>
      <em>{excerptReipe(recipe.rawBody)}</em>
    </p>
  </>
)
