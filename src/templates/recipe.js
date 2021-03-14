import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

import Layout from "../components/layout"
import { reusable, colors, font } from "../style/constants"
import Container from "../components/UI/Container"
import RecipeDetailsContainer from "../components/RecipeDetailsContainer/RecipeDetailsContainer"
import RecipeTabs from "../components/RecipeTabs/RecipeTabs"
import MasonryPhotoGallery from "../components/Masonry/MasonryPhotoGallery"

const Recipe = ({ pageContext }) => {
  const detailsData = {
    cookTime: pageContext.cook,
    prepTime: pageContext.prepTime,
    servings: pageContext.servings,
  }
  return (
    <Layout>
      <StyledRecipe>
        <Container size="1600px">
          <RecipeImage>
            <img src={pageContext.mainImage.fluid.srcWebp} alt="" />
            <h1>{pageContext.title}</h1>
          </RecipeImage>
          <RecipeDetailsContainer data={detailsData}></RecipeDetailsContainer>
          <div className="recipe-tabs">
            <RecipeTabs data={pageContext}></RecipeTabs>
          </div>
          <MasonryPhotoGallery photos={pageContext.extraImages} />
        </Container>
      </StyledRecipe>
    </Layout>
  )
}

export default Recipe

const StyledRecipe = styled.main`
  padding: 120px 1rem 1rem 1rem;

  .recipe-tabs {
    margin-bottom: 1.5rem;
  }
`

const RecipeImage = styled.div`
  position: relative;
  img {
    border-radius: ${reusable.borderRadius};
    border-bottom-left-radius: 0;
    display: flex;
    max-height: 625px;
    object-fit: cover;
  }
  h1 {
    font-size: 1.75rem;
    color: white;
    background: ${colors.primaryTransparent};
    position: absolute;
    bottom: 0;
    left: 0;
    margin: 0;
    padding: 0.5rem 1rem;
    font-weight: 700;
    font-family: ${font.primary};
    border-top-right-radius: ${reusable.borderRadius};
  }
`
