import React from "react"
import styled from "styled-components"
import { colors, font as defaultFont, breakpoints } from "../../style/constants"

const Title = ({ children, font, color, size, type, xl }) => {
  if (type === "subtitle") {
    return <StyledSubTitle>{children}</StyledSubTitle>
  }
  return (
    <StyledTitle xl color={color} font={font} size={size}>
      {children}
    </StyledTitle>
  )
}

export default Title

const getSize = size => {
  if (size === "large") {
    return `
			font-size: 2.5rem;
			@media (min-width: ${breakpoints.tablet}) {
				font-size:  3.5rem;
			}
			@media (min-width: ${breakpoints.desktop}) {
				font-size: 4.5rem;
			}
			@media (min-width: ${breakpoints.fullHd}) {
				font-size: 5.5rem;
			}
		`
  }
}

const StyledTitle = styled.h1`
  font-size: ${({ size }) => (size ? getSize(size) : "2rem")};
  margin: 0 0 16px 0 !important;
  margin-left: 8px;
  font-weight: bold;
  font-family: ${({ font }) => (font ? font : defaultFont.primary)};
  color: ${({ color }) => (color ? color : colors.dark)};
`

const StyledSubTitle = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  font-family: ${defaultFont.text};
`
