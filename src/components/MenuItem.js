import React from "react"
import Styled from "styled-components"
import { Link } from "gatsby"
import { breakpoints, colors, font, reusable } from "../style/constants"

const MenuItem = props => {
  const { blurb, categories, slug, title, defaultProductVariant } = props.data
  const { images } = defaultProductVariant
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
          <div className="categories">
            {categories.map(({ title }) => (
              <span>{title}</span>
            ))}
          </div>
        </div>
      </Item>
    </Link>
  )
}

export default MenuItem

const { boxShadow, borderRadius, boxShadowSubtle } = reusable
const Item = Styled.div`
  border-radius: ${borderRadius};
  box-shadow: ${boxShadow};
  padding: 8px;
  background-color: white;
  margin-bottom: 16px;
  display: flex;
  height: 100%;
  transition: all .25s;

  @media (min-width: ${breakpoints.tablet}) {
	  min-height: 167px;
  }

  &:hover {
	  box-shadow: ${boxShadowSubtle};
	  transition: all .25s;
  }

  .item__content {
	  padding-left: 16px;
	  h3 {
		  font-size: 1.15rem;
		  font-weight: 500;
		  color: ${colors.eerieBlack};
		  margin-bottom: 4px;
	  }
	  p {
		  color: #272727;
		  font-family: ${font.text};
		  font-size: .75rem;
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
