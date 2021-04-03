import React from "react"
import styled from "styled-components"
import { colors } from "../../style/constants"

const Button = ({ children, type, bold }) => {
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
