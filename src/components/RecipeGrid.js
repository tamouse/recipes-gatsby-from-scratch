import React from "react"
import styled from "styled-components"
import RecipeItem from "./RecipeItem"

export default ({ recipes }) => (
  <GridWrapper>
    {recipes.length > 0 ? (
      recipes.map((recipe, index, allRecipes) => (
        <RecipeItem recipe={recipe} key={`recipe-${index}`} />
      ))
    ) : (
      <div>No recipes</div>
    )}
  </GridWrapper>
)

const GridWrapper = styled.div`
  display: grid;
  margin: 0 auto;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: minmax(150px, auto);
  grid-gap: 0.5em;
`
