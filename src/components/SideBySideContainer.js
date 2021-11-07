import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import HPIllustration from "./icons/HPIllustration"
import Title from "./UI/Title"
import Text from "./UI/Text"
import Button from "./UI/Button"
import { colors, font, breakpoints } from "../style/constants"

const SideBySideContainer = ({
  title,
  subtitle,
  text,
  btnText,
  btnLink,
  children,
}) => {
  return (
    <Flex>
      <Box className="left">
        <Title xl font={font.primary} color={colors.primary} size="large">
          {title}
        </Title>
        <Title type="subtitle">{subtitle}</Title>
        <Text>{text}</Text>
        <Link to={btnLink}>
          <Button bold>{btnText}</Button>
        </Link>
      </Box>
      <Box className="illustration-container right">{children}</Box>
    </Flex>
  )
}

export default SideBySideContainer
const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (min-width: ${breakpoints.desktop}) {
    padding-top: 4.5rem;
  }

  > div {
    width: 100%;
    @media (min-width: ${breakpoints.tablet}) {
      &.right {
        width: 33.33%;
      }
      &.left {
        width: 66.66%;
        padding-left: 2rem;
      }
    }
  }
`

const Box = styled.div`
  &.illustration-container {
    margin-bottom: 2rem;
  }

  p {
    margin-bottom: 1.5rem;
    max-width: 900px;
  }

  svg {
    max-width: 250px;
    margin: auto;
    width: 100%;
    height: auto;
    @media (min-width: ${breakpoints.tablet}) {
      max-width: none;
    }
  }
`
