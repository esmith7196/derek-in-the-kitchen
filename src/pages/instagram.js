import React, { useState } from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import { FaInstagram } from "react-icons/fa"
import Fade from "react-reveal/Fade"

import Layout from "../components/layout"
import { breakpoints, colors, font, reusable } from "../style/constants"

const Instagram = ({ data }) => {
  const [hoveredPhoto, setHoveredPhoto] = useState("")
  const photos = data.allInstagramContent.edges
  const renderPhotos = () =>
    photos.map(({ node }, idx) => (
      <Photo
        onMouseEnter={() => setHoveredPhoto(node.permalink)}
        onMouseLeave={() => setHoveredPhoto("")}
        hovered={hoveredPhoto === node.permalink}
      >
        <a href={node.permalink} target="_blank">
          <Fade bottom delay={400 * idx}>
            <div className="ig-photo-container">
              <img src={node.media_url} alt={node.caption} />
              {hoveredPhoto === node.permalink ? (
                <Fade left>
                  <p className="caption">{node.caption}</p>
                </Fade>
              ) : (
                ""
              )}
            </div>
          </Fade>
        </a>
      </Photo>
    ))

  return (
    <Layout>
      <Title>
        Follow me{" "}
        <span>
          <FaInstagram></FaInstagram>{" "}
          <a target="_blank" href="https://www.instagram.com/derekinthekitchen">
            DerekInTheKitchen
          </a>
        </span>
      </Title>
      <InstagramDisplay>{renderPhotos()}</InstagramDisplay>
    </Layout>
  )
}

export default Instagram

const InstagramDisplay = styled.section`
  padding: 16px;
  display: flex;
  flex-wrap: wrap;
`

const Photo = styled.div`
  width: 50%;
  padding: 1rem;

  @media (min-width: ${breakpoints.tablet}) {
    width: 33%;
  }
  @media (min-width: ${breakpoints.fullHd}) {
    width: 25%;
  }

  img {
    height: 100%;
    object-fit: cover;
    border-radius: ${reusable.borderRadius};
  }

  .ig-photo-container {
    position: relative;
    overflow: hidden;
  }
  .caption {
    display: none;
    position: absolute;
    bottom: 0;
    background: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 8px;
    text-align: center;
    font-size: 14px;
    margin: 1rem;
    border-radius: ${reusable.borderRadius};
    transition: all 1s;

    @media (min-width: ${breakpoints.tablet}) {
      display: block;
    }
  }
`

const Title = styled.h1`
  font-size: 64px;
  font-weight: bold;
  text-align: center;
  padding-top: 120px;
  font-family: ${font.primary};

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 72px;
  }
  @media (min-width: ${breakpoints.fullHd}) {
    font-size: 86px;
  }

  span {
    font-family: ${font.text};
    display: block;
    font-size: 24px;
    margin-top: 1rem;
    text-decoration: underline;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${colors.primary};

    a {
      color: ${colors.primary};
    }
  }
`

export const query = graphql`
  {
    allInstagramContent {
      edges {
        node {
          username
          media_url
          caption
          permalink
        }
      }
    }
  }
`
