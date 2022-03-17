import React from "react"
import Styled from "styled-components"
import { Link } from "gatsby"
import { breakpoints, colors, font, reusable } from "../style/constants"

const MenuItem = props => {
  const { blurb, slug, title, defaultProductVariant } = props.data
  const { images, price } = defaultProductVariant
  const priceTitle = defaultProductVariant.title
  const itemHasImage = images.length
  return (
    <Link to={`/menu/${slug.current}`}>
      <Item>
        {itemHasImage ? (
          <div>
            <ItemImage src={images[0].asset.url} alt={title} />{" "}
          </div>
        ) : (
          ""
        )}
        <div className="item__content">
          <h3>{title}</h3>
          <p>{blurb}</p>
          <div className="mt-auto price">
            <span>
              {priceTitle} ~ ${price}
            </span>
          </div>
        </div>
      </Item>
    </Link>
  )
}

export default MenuItem

const { boxShadow, borderRadius, boxShadowSubtle, boxShadowHarsh } = reusable
const Item = Styled.div`
  border-radius: ${borderRadius};
  box-shadow: ${boxShadow};
  padding: 8px;
  background-color: white;
  margin-bottom: 20px;
  display: flex;
  height: 100%;
  transition: all .25s;

  @media (min-width: ${breakpoints.tablet}) {
	  min-height: 167px;
  }

  &:hover {
	  box-shadow: ${boxShadowHarsh};
	  transition: all .25s;
  }

  .item__content {
	  padding: 8px 0 0 16px;
	  display: flex;
	  flex-direction: column;
	  h3 {
		  font-size: 14px;
		  font-weight: 500;
		  color: ${colors.eerieBlack};
		  margin-bottom: 4px;
		  @media (min-width: ${breakpoints.tablet}) {
			font-size: 18px;
			margin-bottom: 8px;
  		  }
		  
	  }
	  p {
		  color: #272727;
		  font-family: ${font.text};
		  font-size: 12px;
		  line-height: 1.25;
	  }
	  .mt-auto {
		  margin-top: auto;
	  }
	  .categories {
		  span {
			  font-size: 9px;
			  font-weight: 900;
			  font-family: ${font.text};
			  font-style: italic;
			  margin-right: 4px;
			  color: white;
			  padding: 4px 8px;
			  border-radius: ${borderRadius};
			  background-color: ${colors.primary};
		  }
	  }
	  .price {
		  span {
			  font-size: 12px;
			  font-weight: 900;
			  font-family: ${font.text};
			  color: ${colors.primary};
		  }
	  }
  }
`

const ItemImage = Styled.img`
  border-radius: ${borderRadius};
  width: 100px;
  object-fit: cover;
  aspect-ratio: 1 / 1;
  height: 100%;


  @media (min-width: ${breakpoints.tablet}) {
	width: 130px;
  }
`
