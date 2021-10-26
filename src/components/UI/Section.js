import React from "react"
import Styled from "styled-components"

const Section = ({ children }) => {
  return <StyledSection>{children}</StyledSection>
}

export default Section

const StyledSection = Styled.section`
  padding: 1rem 1.5rem;
  padding-bottom: 5rem;
`
