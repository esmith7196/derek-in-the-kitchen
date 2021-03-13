import React from "react"
import styled from "styled-components"

const MainImage = ({ image }) => {
  return (
    <ActiveCarouselImage src={image.src} alt={image.alt}></ActiveCarouselImage>
  )
}

export default MainImage

const ActiveCarouselImage = styled.img`
  width: 100%;
  object-fit: cover;
  max-height: 625px;
  border-radius: 45px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`
