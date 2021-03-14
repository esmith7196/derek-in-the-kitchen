import React from "react"
import styled from "styled-components"
import { MdAvTimer, MdRestaurant, MdPerson } from "react-icons/md"

import { reusable, colors } from "../../style/constants"

const RecipeDetailsContainer = ({ data }) => {
  const iconSize = "30px"
  return (
    <DetailsBox>
      <div className="detail-content">
        <div>
          <MdPerson size={iconSize}></MdPerson>
        </div>
        <p>Servings</p>
        <p>{data.servings}</p>
      </div>
      <div className="detail-content">
        <div>
          <MdAvTimer size={iconSize}></MdAvTimer>
        </div>
        <p>Cook Time</p>
        <p>{data.cookTime ? data.cookTime : "0"}</p>
      </div>
      <div className="detail-content">
        <div>
          <MdRestaurant size={iconSize}></MdRestaurant>
        </div>
        <p>Prep Time</p>
        <p>{data.prepTime}</p>
      </div>
    </DetailsBox>
  )
}

export default RecipeDetailsContainer

const DetailsBox = styled.div`
  border-radius: ${reusable.borderRadius};
  background: white;
  padding: 0.5rem;
  margin: 1.5rem 0;
  display: flex;
  justify-content: space-evenly;

  .detail-content {
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      text-transform: uppercase;
      font-size: 0.75rem;
      font-weight: bold;
    }
  }
`
