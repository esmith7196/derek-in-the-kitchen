import React, { useState } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { FaInstagram } from "react-icons/fa"
import Fade from "react-reveal/Fade"

import Layout from "../components/layout"
import { breakpoints, colors, font, reusable } from "../style/constants"

const Instagram = ({ data }) => {
  const [hoveredPhoto, setHoveredPhoto] = useState("")

  const renderHashTags = txt => {
    const textAsArray = txt.split(" ")
    console.log(
      "🚀 ~ file: instagram.js ~ line 16 ~ renderHashTags ~ textAsArray",
      textAsArray
    )
    const hashTagWords = textAsArray
      .filter(word => word.includes("#"))
      .map(word => word.replace(/^\s+|\s+$/g, ""))
    console.log(
      "🚀 ~ file: instagram.js ~ line 23 ~ Instagram ~ hashTagWords",
      hashTagWords
    )
    return ""
  }
  return (
    <Layout>
      <Title>
        Follow me{" "}
        <span>
          <FaInstagram></FaInstagram>{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/derekinthekitchen"
          >
            DerekInTheKitchen
          </a>
        </span>
      </Title>
      {/* <InstagramDisplay>{renderPhotos()}</InstagramDisplay> */}
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
  transition: all 0.5s;

  @media (min-width: ${breakpoints.tablet}) {
    width: 33%;
  }
  @media (min-width: ${breakpoints.fullHd}) {
    width: 25%;
  }

  img {
    transition: all 0.5s;
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
  padding-top: 0px;
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
