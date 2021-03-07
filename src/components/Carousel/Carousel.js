import React from "react"
import styled from "styled-components"
import MainImage from "./MainImage"
import ThumbnailStrip from "./ThumbnailStrip"

const Carousel = () => {
  return (
    <StyledCarousel>
      <MainImage image={DEV_IMAGE}></MainImage>
      <ThumbnailStrip></ThumbnailStrip>
    </StyledCarousel>
  )
}

export default Carousel

const StyledCarousel = styled.div`
  padding-bottom: 4rem;
`

const DEV_IMAGE =
  "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"
