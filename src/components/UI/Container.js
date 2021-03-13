import React from "react"
import styled from "styled-components"

const Container = ({ children, size, noMargin }) => {
  return (
    <StyledContainer size={size} noMargin={noMargin}>
      {children}
    </StyledContainer>
  )
}

export default Container

const StyledContainer = styled.div`
  max-width: ${({ size }) => size};
  margin: ${({ noMargin }) => (noMargin ? "0" : "auto")};
`
