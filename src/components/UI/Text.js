import React from "react"
import styled from "styled-components"
import { font } from "../../style/constants"

const Text = ({ children, weight = "600", size }) => {
  return (
    <StyledText size={size} weight={weight}>
      {children}
    </StyledText>
  )
}

export default Text

const StyledText = styled.p`
  font-size: ${({ size }) => (size ? size : "1.25rem")};
  line-height: 1.75;
  font-family: ${font.text};
  font-weight: ${({ weight }) => weight};
`
