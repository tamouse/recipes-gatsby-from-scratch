import React from "react"
import { Link } from "gatsby"
import { useRecipeCategories } from "../hooks/useCategories.js"

export default () => {
  const categories = useRecipeCategories()

  return (
    <ul>
      {categories.map((category, index) => (
        <li key={`category-menu-item-${index}`}>
          <Link to={`/${category}/`}>{category}</Link>
        </li>
      ))}
    </ul>
  )
}
