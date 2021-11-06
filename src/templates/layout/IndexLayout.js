import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Carousel from "../../components/Carousel/Carousel"
import { colors, breakpoints, font } from "../../style/constants"
import Button from "../../components/UI/Button"
import Section from "../../components/UI/Section"
import HPIllustration from "../../components/icons/HPIllustration"
import Title from "../../components/UI/Title"
import Text from "../../components/UI/Text"

const IndexLayout = () => {
  return (
    <Section>
      <Flex>
        <Box className="illustration-container left">
          <HPIllustration />
        </Box>
        <Box className="right">
          <Title xl font={font.primary} color={colors.primary} size="large">
            Derek In The Kitchen
          </Title>
          <Title type="subtitle">Local baked goods, snacks and more!</Title>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            soluta quasi laboriosam voluptatibus impedit, porro sint aliquid
            harum esse at dicta quae. Similique quibusdam ab deleniti odit?
            Quaerat, natus esse?
          </Text>
          <Link to="/menu">
            <Button bold>View The Menu</Button>
          </Link>
        </Box>
      </Flex>
    </Section>
  )
}

export default IndexLayout

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (min-width: ${breakpoints.desktop}) {
    padding-top: 4.5rem;
  }

  > div {
    width: 100%;
    @media (min-width: ${breakpoints.tablet}) {
      &.left {
        width: 33.33%;
      }
      &.right {
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
