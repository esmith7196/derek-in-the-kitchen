import React, { useEffect } from "react"
import axios from "axios"
import styled from "styled-components"
import { graphql } from "gatsby"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

// import { Grid } from "@horacioh/gatsby-theme-instagram"

import Layout from "../components/layout"
import Container from "../components/UI/Container"
import { reusable } from "../style/constants"

export const galleryQuery = graphql`
  {
    allSanityProduct {
      nodes {
        defaultProductVariant {
          images {
            asset {
              url
            }
          }
          title
        }
      }
    }
  }
`

const Gallery = ({ data }) => {
  const { nodes } = data.allSanityProduct

  //   useEffect(() => {
  //     axios
  //       .get("/.netlify/functions/instagram-scraper")
  //       .then(res => {
  //         console.log("res: ", res)
  //         return res
  //       })
  //       .catch(e => console.log(e))
  //   }, [])

  const mapThroughImages = () =>
    nodes
      .filter(node => node.defaultProductVariant.images.length)
      .map(node => {
        return (
          <Box>
            {console.log("node ", node)}
            <img
              src={node.defaultProductVariant.images[0].asset.url}
              alt={
                node.defaultProductVariant.title
                  ? node.defaultProductVariant.title
                  : "A creation of Derek In The Kitchen"
              }
            />
          </Box>
        )
      })

  return (
    <Layout
      page="Gallery"
      title="Derek In The Kitchen"
      description="View Derek's work here in the gallery."
    >
      <Wrapper>
        <Container size={"1200px"}>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          >
            <Masonry>{mapThroughImages()}</Masonry>
          </ResponsiveMasonry>
        </Container>
      </Wrapper>
    </Layout>
  )
}

export default Gallery

const Box = styled.div`
  padding: 12px;

  img {
    box-shadow: ${reusable.boxShadow};
  }
`

const Wrapper = styled.div`
  margin-top: 8px;
`
