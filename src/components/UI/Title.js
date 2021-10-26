import React from "react"
import styled from "styled-components"
import { colors, font } from "../../style/constants"

const Title = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>
}

export default Title

const StyledTitle = styled.h1`
  font-size: 2rem;
  margin: 0 0 16px 0 !important;
  margin-left: 8px;
  font-weight: bold;
  font-family: ${font.text};
  color: ${colors.dark};
`
