import React from "react"
import styled from "styled-components"

const Thumbnail = ({ image, onThumbnailClick, idx }) => {
  return (
    <StyledThumbnail onClick={() => onThumbnailClick(idx)}>
      <img src={image} alt={image.alt} />
    </StyledThumbnail>
  )
}

export default Thumbnail

const StyledThumbnail = styled.div`
  flex: 1;
  cursor: pointer;
  img {
    margin: 0;
    width: 100%;
    max-height: 150px;
    height: 100%;
    object-fit: cover;
    display: flex;
  }
`
