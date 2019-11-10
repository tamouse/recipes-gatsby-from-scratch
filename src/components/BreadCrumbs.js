import React from "react"
import { Link } from "gatsby"

export default ({ backlinks }) => (
  <div>
    {backlinks.map((backlink, index) => (
      <span key={`breadcrumb-${index}`}>
        / <Link to={backlink.to}>{backlink.text}</Link>{" "}
      </span>
    ))}
  </div>
)
