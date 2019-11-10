import React from "react"
import { Link } from "gatsby"

export default ({ tags }) => {
  return (
    <>
      <ul>
        {tags.length > 0 ? (
          tags.map((tag, index) => {
            return (
              <li key={`tag-item-${index}`}>
                <Link to={`/tags/${tag}/`}>{tag}</Link>
              </li>
            )
          })
        ) : (
          <li key={0}>No tags</li>
        )}
      </ul>
    </>
  )
}
