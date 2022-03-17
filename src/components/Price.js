import React from "react"
import styled from "styled-components"
import { colors, font, breakpoints } from "../style/constants"

const Price = ({ defaultProductVariant, variants = [] }) => {
  const getPrice = (arr, className) => {
    console.log("arr is ", arr)
    return arr.map(variant => (
      <p className={`price-txt ${className}`}>
        {variant.title} - ${variant.price}
      </p>
    ))
  }

  return (
    <ItemPricing>
      <div>{getPrice([defaultProductVariant], "price-txt__default")}</div>
      <div className="mt-8">{getPrice(variants, "price-tx__extra")}</div>
    </ItemPricing>
  )
}

export default Price

const ItemPricing = styled.div`
  .price-txt {
    color: ${colors.primary};
    font-family: ${font.text};
    font-size: 16px;
    font-weight: 500;
  }
  .price-txt__default {
    font-weight: 900;
  }
  .price-tx__extra {
    font-size: 14px;
    margin-top: 12px;

    color: ${colors.primaryTransparent};
    @media (min-width: ${breakpoints.tablet}) {
      margin-top: 0px;
    }
  }
  .mt-8 {
    margin-top: 8px;
    @media (min-width: ${breakpoints.tablet}) {
      margin-top: 4px;
    }
  }
`
