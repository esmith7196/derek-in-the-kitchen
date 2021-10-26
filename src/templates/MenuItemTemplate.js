import React from "react"
import Styled from "styled-components"
import { MdOutlineArrowBack } from "react-icons/md"
import BlockContent from "@sanity/block-content-to-react"

import Layout from "../components/layout"
import Button from "../components/UI/Button"
import Section from "../components/UI/Section"
import Title from "../components/UI/Title"
import CategoriesRender from "../components/CategoriesRender"
import { breakpoints, colors, font } from "../style/constants"
import { Link } from "gatsby"
import Container from "../components/UI/Container"

const MenuItemTemplate = ({ pageContext }) => {
  const {
    title,
    tags,
    body,
    blurb,
    categories,
    defaultProductVariant,
    slug,
  } = pageContext
  const { images } = defaultProductVariant
  const itemHasImage = images.length
  return (
    <Layout>
      <Section>
        <Container size={"1200px"}>
          <Button bold>
            <Link to="/menu">
              <Flex>
                <MdOutlineArrowBack /> <span>Back To Menu</span>
              </Flex>
            </Link>
          </Button>
          <Content>
            <div className="image-container">
              <MainImage
                src={
                  itemHasImage
                    ? images[0].asset.url
                    : "https://via.placeholder.com/150"
                }
                alt={title}
              />
            </div>

            <div className="text-container">
              <Title>{title}</Title>
              <CategoriesRender categories={categories} />
              <Blurb>{blurb}</Blurb>
              <BodyContainer>
                <BlockContent blocks={body._rawEn} />
              </BodyContainer>
            </div>
          </Content>
        </Container>
      </Section>
    </Layout>
  )
}

export default MenuItemTemplate

const Flex = Styled.div`
	display: flex;
	align-items: center;

	span {
		margin-left: 8px;
	}
	
`

const Content = Styled.div`
	padding-top: 2rem;
	.image-container {
		padding-bottom: 2rem
	}
	
	@media (min-width: ${breakpoints.desktop}) {
		display: flex;

		.text-container {
			padding: 0 1.5rem;
		}
	}
`

const MainImage = Styled.img`
  width: 100%;
`

const Blurb = Styled.p`
  color: ${colors.text};
  font-size: 1rem;
  line-height: 1.75;
  margin-top: 8px;
  font-weight: 400;
  font-family: ${font.text};
`

const BodyContainer = Styled.div`
	padding: 1rem 0;
	border-top: 2px solid ${colors.primary};
	margin-top: 1rem;
	
	p, span {
		font-size: 18px;
		font-family: ${font.text};
	line-height: 1.75rem;
	font-weight: 500;
	}
`
