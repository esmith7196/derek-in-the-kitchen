import React from "react"
import styled from "styled-components"
import { breakpoints, colors, reusable } from "../style/constants"
import Text from "./UI/Text"
import { FaInstagram } from "react-icons/fa"

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <StyledFooter>
      <div className="footer-left">
        <Text size={"1rem"}>Copyright {year} | Derek In The Kitchen </Text>
      </div>
      <div className="footer-right">
        <a
          href="https://www.instagram.com/derekinthekitchen"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram color={"#000"} size="25px" />
        </a>
      </div>
    </StyledFooter>
  )
}

export default Footer

const StyledFooter = styled.footer`
  box-shadow: ${reusable.boxShadow};
  border-top-left-radius: ${reusable.borderRadius};
  border-top-right-radius: ${reusable.borderRadius};
  padding: 0.5rem 2rem;
  border-bottom: 6px solid ${colors.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;

  .footer-left {
    p {
      font-size: 0.75rem;
      @media (min-width: ${breakpoints.tablet}) {
        font-size: 1rem;
      }
    }
  }

  svg {
    &:hover {
      fill: ${colors.primary};
    }
  }
`
