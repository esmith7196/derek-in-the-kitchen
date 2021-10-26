import React from "react"
import styled from "styled-components"
import { colors, font, reusable } from "../style/constants"

const CategoriesRender = ({ categories }) => {
  return (
    <StyledCategories>
      {categories.map(cat => (
        <span>{cat.title}</span>
      ))}
    </StyledCategories>
  )
}

export default CategoriesRender

const StyledCategories = styled.div`
  display: flex;
  span {
    font-size: 12px;
    font-weight: 900;
    font-family: ${font.text};
    font-style: italic;
    margin-right: 4px;
    color: white;
    padding: 4px 8px;
    border-radius: ${reusable.borderRadius};
    background-color: ${colors.primary};
  }
`
