import React from "react"
import styled from "styled-components"
import Carousel from "../../components/Carousel/Carousel"
import { colors } from "../../style/constants"
import Button from "../../components/UI/Button"

console.log("constants: ", colors)

const IndexLayout = () => {
  return (
    <Grid>
      <div class="navigation">Navigation will go here</div>
      <div class="index-carousel">
        <Carousel></Carousel>
      </div>
      <div class="image-text-content">
        <div class="img-left">
          <img
            style={{
              borderRadius: "100%",
              width: "100%",
              border: "10px solid white",
            }}
            src="https://images.unsplash.com/photo-1529059997568-3d847b1154f0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=80"
            alt="img"
          />
        </div>
        <div class="content-right" style={{ paddingLeft: "2rem" }}>
          <h2>Lorem ipsum, dolor sit amet consectetur </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, neque
            exercitationem, maxime ea deserunt praesentium libero sapiente numq
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, neque
            exercitationem, maxime ea deserunt praesentium libero sapiente numq
          </p>
          <Button>Read More About Me</Button>
        </div>
      </div>

      <div class="collections-container"></div>
      <div class="side-bar-right"></div>
      <div class="footer"></div>
    </Grid>
  )
}

export default IndexLayout

const Grid = styled.main`
  background: ${colors.white};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: auto auto auto auto auto;
  gap: 0px 0px;

  grid-template-areas:
    "navigation navigation navigation navigation navigation navigation"
    "index-carousel index-carousel index-carousel index-carousel index-carousel index-carousel"
    "image-text-content image-text-content image-text-content  image-text-content side-bar-right side-bar-right"
    "collections-container collections-container collections-container collections-container  side-bar-right side-bar-right"
    "footer footer footer footer footer footer";

  .container {
    max-width: 1600px;
  }

  .navigation {
    grid-area: navigation;
    height: 75px;
  }
  .index-carousel {
    max-width: 1600px;
    margin: auto;
    grid-area: index-carousel;
  }
  .image-text-content {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 0px 0px;
    grid-template-areas: "img-left content-right content-right";
    grid-area: image-text-content;
    height: 450px;
    max-width: 1600px;
    margin-left: 100px;
    align-items: center;
    .img-left {
      grid-area: img-left;
    }
    .content-right {
      grid-area: content-right;
    }
  }
  .collections-container {
    grid-area: collections-container;
    height: 375px;
  }
  .side-bar-right {
    grid-area: side-bar-right;
    height: 775px;
    background: white;
    border-radius: 30px;
    margin-right: 100px;
  }
  .footer {
    grid-area: footer;
    height: 500px;
  }
`
