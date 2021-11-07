import React from "react"
import { colors } from "../style/constants"
import styled from "styled-components"
import Center from "./UI/Center"
import Title from "./UI/Title"
import Button from "./UI/Button"

const SocialBanner = () => {
  return (
    <SolidBanner>
      <Center>
        <div>
          <Title size="medium" color={colors.white}>
            Follow me @derekinthekitchen
          </Title>
          <Center>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/derekinthekitchen"
            >
              <Button outline>View My Instagram</Button>
            </a>
          </Center>
        </div>
      </Center>
    </SolidBanner>
  )
}

export default SocialBanner

const SolidBanner = styled.section`
  background-color: ${colors.primary};
  height: 300px;
`
