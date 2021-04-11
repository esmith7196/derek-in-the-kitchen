import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { font, reusable, breakpoints } from "../../style/constants"
import slugify from "slugify"

const RecipePreview = ({ data }) => {
  const {
    title,
    shortDescription: { shortDescription },
  } = data.node

  const { mainImage } = data.node

  const truncate = str => str.substring(0, 50)

  return (
    <Preview>
      <Link to={`/recipes/${slugify(title, { lower: true })}`}>
        <PreviewImage>
          <img src={mainImage ? mainImage.fluid.src : ""} alt={title} />
        </PreviewImage>
        <PreviewDetails>
          <h4>{title}</h4>
          <p>{truncate(shortDescription)}</p>
        </PreviewDetails>
      </Link>
    </Preview>
  )
}

export default RecipePreview

const Preview = styled.div`
  display: flex;
  padding: 12px 0;
  a {
    display: block;
  }
`

const PreviewImage = styled.div`
  flex: 1 1 33%;
  min-height: 105px;
  overflow: hidden !important;
  border-radius: ${reusable.borderRadius};
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: ${reusable.borderRadius};
    transition: transform 0.5s;
    &:hover {
      border-radius: ${reusable.borderRadius};
      transition: all 0.5s ease;
      transform: scale(1.5);
    }
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
