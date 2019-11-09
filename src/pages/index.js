import React from "react"
import { useSiteMetadata } from "../hooks/useSiteMetadata"
import { useRecipeCategories } from "../hooks/useCategories.js"

export default () => {
  const { title, description } = useSiteMetadata()
  const categories = useRecipeCategories()

  return (
    <>
      <h2>{title}</h2>
      <div>{description}</div>
      <h3>Categories</h3>
      <ul>
        {categories.length > 0 ? (
          categories.map((category, index) => {
            return <li key={`${category}-${index}`}>{category.relativePath}</li>
          })
        ) : (
          <div>No categories</div>
        )}
      </ul>
    </>
  )
}
