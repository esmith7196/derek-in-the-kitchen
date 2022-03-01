import React from "react"
import { graphql } from "gatsby"
import Styled from "styled-components"

import Layout from "../components/layout"
import Container from "../components/UI/Container"
import MenuItem from "../components/MenuItem"
import { breakpoints, colors, font } from "../style/constants"
import Title from "../components/UI/Title"

const Menu = ({ data }) => {
  const { edges } = data.allSanityProduct
  return (
    <Layout
      page="Menu"
      title="Derek In The Kitchen"
      description="View and order baked goods and more from Derek."
    >
      <PageSection>
        <Container size="1400px">
          <Box>
            <Title font={font.primary} color={colors.primary} size="large">
              My Menu
            </Title>
          </Box>
          <Row>
            {edges.map(({ node }) => (
              <RowItem key={node.id}>
                <MenuItem data={node} />
              </RowItem>
            ))}
          </Row>
        </Container>
      </PageSection>
    </Layout>
  )
}

export const query = graphql`
  {
    allSanityProduct {
      edges {
        node {
          title
          tags
          slug {
            current
          }
          id
          defaultProductVariant {
            price
            taxable
            title
            images {
              asset {
                url
              }
            }
          }
          categories {
            title
          }
          body {
            _rawEn
          }
          blurb
        }
      }
    }
  }
`

const Box = Styled.div`
  padding-left: 1.5rem;
`

const Row = Styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
`
const RowItem = Styled.div`
  width: 100%;
  height: 100%;
  align-self: stretch;

  @media (min-width: ${breakpoints.tablet}) {
	  padding: 8px;
	  width: 50%;
  }
  @media (min-width: ${breakpoints.desktop}) {
	  padding: 16px;
	  width: 33.33%;
  }
  @media (min-width: ${breakpoints.fullHd}) {
	  padding: 24px;
	  width: 33.33%;
  }
`
const PageSection = Styled.section`
  padding: 1rem 1.5rem;
  @media (min-width: ${breakpoints.desktop}) {
	  padding-top: 2.5rem
  }

`

// const Title = Styled.h1`
// 	font-size: 2.75rem;
// 	margin-bottom: 16px;
// 	margin-left: 8px;
// 	font-weight: bold;
//     font-family: ${font.primary};
// 	color: ${colors.dark};
// `

export default Menu
