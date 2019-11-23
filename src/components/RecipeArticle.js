import React from "react"
import styled from "styled-components"
import TagList from "../components/TagList"
import { MDXRenderer } from "gatsby-plugin-mdx"

export default ({ recipe: { frontmatter, body } }) => (
  <Wrapper>
    <Header>
      <h1>{frontmatter.title}</h1>
      <small>{frontmatter.date}</small>
      <TagList tags={frontmatter.tags} />
    </Header>

    <MDXRenderer>{body}</MDXRenderer>
  </Wrapper>
)

const Wrapper = styled.article``

const Header = styled.div`
  > * {
    margin: 0;
    padding: 0;
    display: block;
  }
  h1 {
    font-size: 1.2em;
  }

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: flex-start;
    > * {
      margin-right: 1.5em;
    }
    h1 {
      font-size: 2em;
    }
  }
`
