import React from "react"
import styled from "styled-components"

import Thumbnail from "./Thumbnail"
import { colors, reusable } from "../../style/constants"
import { MdChevronRight, MdChevronLeft } from "react-icons/md"

const ThumbnailStrip = ({ images, onThumbnailClick }) => {
  const arrowSize = "1.75rem"

  return (
    <StyledStrip>
      <CarouselButton left>
        <MdChevronLeft size={arrowSize}></MdChevronLeft>
      </CarouselButton>
      {images.map((image, idx) => (
        <Thumbnail
          onThumbnailClick={onThumbnailClick}
          image={image.src}
          idx={idx}
        ></Thumbnail>
      ))}
      <CarouselButton right>
        <MdChevronRight size={arrowSize}></MdChevronRight>
      </CarouselButton>
    </StyledStrip>
  )
}

export default ThumbnailStrip

const StyledStrip = styled.div`
  display: flex;
  max-width: 1200px;
  margin: auto;
  box-shadow: ${reusable.boxShadow};
  border-radius: 30px;
  margin-top: -3rem;
`

const CarouselButton = styled.button`
  background: ${colors.dark};
  color: white;
  border: none;
  cursor: pointer;
  padding: 0 1rem;
  outline: none;
  ${({ left }) => `
    ${
      left
        ? `
          border-top-left-radius: 30px;
          border-bottom-left-radius: 30px;
          transition: all .25s;
          &:hover {
            padding-right: 2rem;
            transition: all .25s;
          }
          `
        : `
          border-top-right-radius: 30px;
          border-bottom-right-radius: 30px;
          transition: all .25s;
          &:hover {
            padding-left: 2rem;
            transition: all .25s;
          }
        `
    }
  `};
`
