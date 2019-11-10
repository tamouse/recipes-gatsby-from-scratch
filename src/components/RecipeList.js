import React from "react"
import RecipeItem from "./RecipeItem"

export default ({ recipes }) => (
  <>
    <ul>
      {recipes.length > 0 ? (
        recipes.map((recipe, index, allRecipes) => (
          <li key={`recipe-${index}`}>
            <RecipeItem recipe={recipe} />
          </li>
        ))
      ) : (
        <li>No recipes</li>
      )}
    </ul>
  </>
)
