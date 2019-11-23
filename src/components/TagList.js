import React from "react"
import { Link } from "gatsby"

export default ({ tags }) => {
  if (!tags || tags.length < 1) {
    return null
  }
  return (
    <>
      <ul>
        {tags.map((tag, index) => {
          return (
            <li key={`tag-item-${index}`}>
              <Link to={`/tags/${tag}/`}>{tag}</Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}
