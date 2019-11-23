import React from "react"
import styled from "styled-components"
import RecipeItem from "./RecipeItem"

export default ({ recipes }) => (
  <RecipeListWrapper>
    {recipes.length > 0 ? (
      recipes.map((recipe, index, allRecipes) => (
        <li key={`recipe-${index}`}>
          <RecipeItem recipe={recipe} />
        </li>
      ))
    ) : (
      <li>No recipes</li>
    )}
  </RecipeListWrapper>
)

const RecipeListWrapper = styled.ul`
  list-style: none;
  margin: 0;
`
