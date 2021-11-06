import React from "react"
import styled from "styled-components"
import { font } from "../../style/constants"

const Text = ({ children, weight = "600" }) => {
  return <StyledText weight={weight}>{children}</StyledText>
}

export default Text

const StyledText = styled.p`
  font-size: 1.25rem;
  line-height: 1.75;
  font-family: ${font.text};
  font-weight: ${({ weight }) => weight};
`
