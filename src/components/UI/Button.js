import React from "react"
import styled from "styled-components"
import { colors, reusable } from "../../style/constants"

const Button = ({ children, type, bold, outline }) => {
  if (outline) {
    return <StyledOutline>{children}</StyledOutline>
  }
  return (
    <StyledButton bold={bold} type={type === "submit" ? "submit" : ""}>
      {children}
    </StyledButton>
  )
}

export default Button

const StyledButton = styled.button`
  background: ${colors.primary};
  padding: 0.75rem 2rem;
  border: none;
  color: ${colors.white};
  border-radius: 13px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  border: 2px solid ${colors.primary};
  transition: all 0.25s;
  font-weight: ${({ bold }) => (bold ? "bold" : "")};

  &:hover {
    background: transparent;
    color: ${colors.dark};
    transition: all 0.25s;
  }
`

const StyledOutline = styled.button`
  background: transparent;
  color: white;
  border-radius: ${reusable.borderRadius};
  border: 2px solid ${colors.white};
  padding: 0.75rem 2rem;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    background-color: ${colors.white};
    transition: all 0.25s;
    color: ${colors.primary};
  }
`
