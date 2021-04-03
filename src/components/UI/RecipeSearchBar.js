import React, { useState } from "react"
import styled from "styled-components"

import SearchContext from "../../context/searchContext"

import { MdSearch } from "react-icons/md"
import { colors, reusable, font } from "../../style/constants"

const RecipeSearchBar = ({ setSearchState, searchState }) => {
  return (
    <div className="form-element">
      <Desc>Search for a recipe</Desc>
      <Label htmlFor="">
        <input
          value={searchState}
          onChange={e => setSearchState(e.target.value)}
        ></input>
        <span>
          <MdSearch></MdSearch>
        </span>
      </Label>
    </div>
  )
}

export default RecipeSearchBar

const Label = styled.label`
  margin-top: 1.5rem;
  display: flex;
  width: 100%;
  position: relative;
  align-items: center;
  border: 1px solid ${colors.white};
  background: white;
  box-shadow: ${reusable.boxShadow};
  border-radius: ${reusable.borderRadius};
  padding: 16px 8px;

  span {
    position: absolute;
    right: 16px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  input {
    width: 100%;
    padding-right: 16px;
    background: transparent;
    border: none;
    outline: none;
  }
`

const Desc = styled.p`
  font-family: ${font.primary};
  font-size: 32px;
  font-weight: bold;
`
