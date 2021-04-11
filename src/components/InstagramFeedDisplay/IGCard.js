import React from "react"
import styled from "styled-components"
import { reusable } from "../../style/constants"

const IGCard = () => {
  return (
    <Card>
      <CardImage>
        <img
          src="https://images.unsplash.com/photo-1513135065346-a098a63a71ee?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2549&q=80"
          alt="Chef"
        />
      </CardImage>
      <CardBody>
        <h2>
          <span>PROFILE</span> @IG Handle Here
        </h2>
        <p>Caption goes here</p>
        <a href="">View on instagram</a>
      </CardBody>
    </Card>
  )
}

export default IGCard

const Card = styled.div`
  background-color: white;
  border-radius: ${reusable.borderRadius};
  max-width: 425px;
  box-shadow: ${reusable.boxShadow};
`

const CardImage = styled.div`
  img {
    border-radius: ${reusable.borderRadius};
  }
`

const CardBody = styled.div``
