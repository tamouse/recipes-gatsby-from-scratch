import React from "react"
import { Link } from "gatsby"
import { useSiteMetadata } from "../hooks/useSiteMetadata"

export default () => {
  const { title, description } = useSiteMetadata()
  return (
    <header>
      <Link to="/">
        <h1 title={description}>{title}</h1>
      </Link>
      <Link to="/allRecipes/">All Recipes</Link>
    </header>
  )
}
