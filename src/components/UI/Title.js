import React from "react"
import styled from "styled-components"
import { colors, font as defaultFont, breakpoints } from "../../style/constants"

const Title = ({ children, font, color, size, type, xl, underline }) => {
  if (type === "subtitle") {
    return <StyledSubTitle>{children}</StyledSubTitle>
  }
  return (
    <StyledTitle underline={underline} xl color={color} font={font} size={size}>
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
				font-size: 5rem;
			}
		`
  }
  if (size === "medium") {
    return `
			font-size: 2rem;
			@media (min-width: ${breakpoints.tablet}) {
				font-size:  3rem;
			}
			@media (min-width: ${breakpoints.desktop}) {
				font-size: 3.5rem;
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
  text-decoration: ${({ underline }) => (underline ? "underline" : "")};
`

const StyledSubTitle = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  font-family: ${defaultFont.text};
`
