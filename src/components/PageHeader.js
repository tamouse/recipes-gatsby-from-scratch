import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { useSiteMetadata } from "../hooks/useSiteMetadata"

export default () => {
  const { title, description } = useSiteMetadata()
  return (
    <Header>
      <Nav role="nav">
        <NavLink to="/">
          <h1 title={description}>{title}</h1>
        </NavLink>
        <NavLink to="/allRecipes/">All Recipes</NavLink>
      </Nav>
    </Header>
  )
}

const Header = styled.header`
  margin: 0;
  padding: 0;
`

const Nav = styled.nav`
  background-color: rebeccapurple;
  color: white;
  display: flex;
  align-items: center;
  justify-content: flex-begin;
  & > * {
    margin-left: 1em;
  }
  h1 {
    font-size: 1.3em;
    @media (min-size: 768px) {
      font-size: inherit;
    }
  }
`
const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  &:active {
    color: white;
  }
  &:visited {
    color: white;
  }
  &:hover {
    color: white;
    text-decoration: underline;
  }
`
