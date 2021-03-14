import React from "react"
import styled from "styled-components"

const MasonryPhotoGallery = ({ photos }) => {
  return (
    <MasonryGallery>
      {photos.map((photo, idx) => (
        <div>
          <img
            src={photo.fluid.src}
            alt={
              photo.fluid.name ||
              photo.fluid.description ||
              "Derek In The Kitchen Creations"
            }
          />
        </div>
      ))}
    </MasonryGallery>
  )
}

export default MasonryPhotoGallery

const MasonryGallery = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 8px;

  img {
    border-radius: 15px;
  }
`
