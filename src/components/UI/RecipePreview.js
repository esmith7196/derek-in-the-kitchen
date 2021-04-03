import { node } from "prop-types"
import React from "react"
import styled from "styled-components"
import { font, reusable, breakpoints } from "../../style/constants"

const RecipePreview = ({ data }) => {
  const {
    mainImage: {
      fluid: { src },
    },
    title,
    shortDescription: { shortDescription },
  } = data.node

  const truncate = str => str.substring(0, 50)

  return (
    <Preview>
      <PreviewImage>
        <img src={src} alt="" />
      </PreviewImage>
      <PreviewDetails>
        <h4>{title}</h4>
        <p>{truncate(shortDescription)}</p>
      </PreviewDetails>
    </Preview>
  )
}

export default RecipePreview

const Preview = styled.div`
  display: flex;
  padding: 12px 0;
`

const PreviewImage = styled.div`
  flex: 1 1 33%;
  min-height: 105px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: ${reusable.borderRadius};
  }
`
const PreviewDetails = styled.div`
  flex: 1 1 75%;
  padding-left: 16px;

  h4 {
    font-size: 28px;
    font-weight: 900;
    font-family: ${font.primary};
    margin-bottom: 8px;

    @media (min-width: ${breakpoints.desktop}) {
      font-size: 32px;
    }
    @media (min-width: ${breakpoints.fullHd}) {
      font-size: 42px;
    }
  }
`
