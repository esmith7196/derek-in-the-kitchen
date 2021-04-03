import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import RecipeSearchBar from "../components/UI/RecipeSearchBar"
import RecipePreview from "../components/UI/RecipePreview"
import { reusable } from "../style/constants"

const Recipes = ({ data }) => {
  // Loop through recipes from graphql query
  const renderRecipes = () =>
    data.allContentfulRecipe.edges.map(recipe => (
      <RecipePreview data={recipe}></RecipePreview>
    ))

  return (
    <Layout>
      <Page>
        <RecipeSearchBar></RecipeSearchBar>
        <Content>
          <RecipesContainer>{renderRecipes()}</RecipesContainer>
        </Content>
      </Page>
    </Layout>
  )
}

export default Recipes

const Page = styled.section`
  padding: 120px 1rem 1rem 1rem;
`

const RecipesContainer = styled.div`
  display: flex;
  flex-direction: column;
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
