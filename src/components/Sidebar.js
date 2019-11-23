import React from "react"
import CategoryMenu from "../components/CategoryMenu"
import styled from "styled-components"

export default () => {
  return (
    <Wrapper>
      <h3>Categories</h3>
      <CategoryMenu />
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  margin-left: 2em;
  margin-right: 3em;
`
