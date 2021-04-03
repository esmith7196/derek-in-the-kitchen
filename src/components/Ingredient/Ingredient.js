import React from "react"

const Ingredient = ({ data }) => {
  const { amount, ingredient, measurement } = data
  return (
    <li>
      <p>
        {amount} {measurement ? measurement : ""} {ingredient}
      </p>
    </li>
  )
}

export default Ingredient
