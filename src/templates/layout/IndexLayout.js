import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"
import { colors, breakpoints, font, reusable } from "../../style/constants"
import Button from "../../components/UI/Button"
import Section from "../../components/UI/Section"
import HPIllustration from "../../components/icons/HPIllustration"
import Title from "../../components/UI/Title"
import Text from "../../components/UI/Text"
import Container from "../../components/UI/Container"
import SocialBanner from "../../components/SocialBanner"
// import SideBySideContainer from "../../components/SideBySideContainer"
import SideBySideContainer from "../../components/SideBySideContainer"

const IndexLayout = ({ productImages }) => {
  return (
    <>
      <Section>
        <Container size="1200px">
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
        </Container>
      </Section>
      <SocialBanner />
      <Section>
        <Container size="1200px">
          <SideBySideContainer
            title="Let me cater for you"
            subtitle="Parties, holidays and more!"
            text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt vitae rem laborum. Sapiente, minima. Nostrum molestias molestiae autem excepturi dicta amet eligendi esse, voluptatibus vero odit quae totam, temporibus facere."
            btnText="Contact Me"
            btnLink="/contact"
          >
            {productImages.length > 0 ? (
              <Carousel
                autoPlay
                showThumbs={false}
                showArrows={false}
                showStatus={false}
                showIndicators={false}
                interval={5000}
                infiniteLoop={true}
                animationHandler="fade"
                autoFocus={true}
              >
                {productImages
                  .filter(prod => prod.defaultProductVariant.images.length)
                  .map(product => (
                    <CarouselImage>
                      <img
                        src={product.defaultProductVariant.images[0].asset.url}
                        alt={product.title}
                      />
                      <p className="legend">{product.title}</p>
                    </CarouselImage>
                  ))}
              </Carousel>
            ) : (
              ""
            )}
          </SideBySideContainer>
        </Container>
      </Section>
    </>
  )
}

export default IndexLayout

const CarouselImage = styled.div`
  img {
    aspect-ratio: 9 / 16;
    object-position: center;
    object-fit: cover;
    border-radius: ${reusable.borderRadius};
    max-width: 350px;
    @media (min-width: ${breakpoints.tablet}) {
      max-width: none;
    }
  }
`

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (min-width: ${breakpoints.desktop}) {
    padding-top: 4.5rem;
  }

  > div {
    width: 100%;
    @media (min-width: ${breakpoints.desktop}) {
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
      max-width: 500px;
    }
    @media (min-width: ${breakpoints.desktop}) {
      max-width: none;
    }
  }
`
