import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

export default ({ tags }) => {
  if (!tags || tags.length < 1) {
    return null
  }
  return (
    <TagListWrapper>
      {tags.map((tag, index) => {
        return (
          <TagListItem key={`tag-item-${index}`}>
            <Link to={`/tags/${tag}/`}>{tag}</Link>
          </TagListItem>
        )
      })}
    </TagListWrapper>
  )
}

const TagListWrapper = styled.ul`
  display: inline;
  list-style: none;
`
const TagListItem = styled.li`
  display: inline-block;
  &:after {
    content: ", ";
    padding-right: 0.5em;
  }
  &:last-child:after {
    content: "";
  }
`
