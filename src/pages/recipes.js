import React, { useState } from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import RecipeSearchBar from "../components/UI/RecipeSearchBar"
import RecipePreview from "../components/UI/RecipePreview"
import { reusable, breakpoints } from "../style/constants"
import SearchContext from "../context/SearchContext"
import Container from "../components/UI/Container"

const Recipes = ({ data }) => {
  const [searchState, setSearchState] = useState("")

  // Loop through recipes from graphql query
  const renderRecipes = () =>
    data.allContentfulRecipe.edges
      .filter(recipe => filterData(recipe))
      .map(recipe => <RecipePreview data={recipe}></RecipePreview>)

  const filterData = data => {
    const {
      shortDescription: { shortDescription },
      title,
    } = data.node
    const isIncluded =
      title.toLowerCase().includes(searchState.toLowerCase()) ||
      shortDescription.toLowerCase().includes(searchState.toLowerCase())

    if (!searchState.length || isIncluded) {
      return true
    }
    return false
  }

  return (
    <Layout>
      <SearchContext.Provider>
        <Container size="1600px">
          <Page>
            <RecipeSearchBar
              searchState={searchState}
              setSearchState={setSearchState}
            ></RecipeSearchBar>
            <Content>
              <RecipesContainer>{renderRecipes()}</RecipesContainer>
            </Content>
          </Page>
        </Container>
      </SearchContext.Provider>
    </Layout>
  )
}

export default Recipes

const Page = styled.section`
  padding: 225px 1rem 1rem 1rem;
`

const RecipesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
    flex-wrap: wrap;
    > div {
      width: 50%;
      padding: 12px;
    }
  }
  @media (min-width: ${breakpoints.desktop}) {
    flex-direction: row;
    flex-wrap: wrap;
    > div {
      width: 33.333%;
    }
  }
`

const Content = styled.section`
  border-radius: ${reusable.borderRadius};
  background: white;
  padding: 16px;
  box-shadow: ${reusable.boxShadow};
  margin-top: 32px;
  min-height: 300px;
`

export const query = graphql`
  {
    allContentfulRecipe {
      edges {
        node {
          mainImage {
            fluid {
              src
            }
          }
          shortDescription {
            shortDescription
          }
          title
        }
      }
    }
  }
`
