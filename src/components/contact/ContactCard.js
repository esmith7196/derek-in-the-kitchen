import React from "react"
import styled from "styled-components"
import { breakpoints, colors, reusable } from "../../style/constants"
import Container from "../UI/Container"
import Form from "./Form"
import Title from "../UI/Title"
import { FaInstagram } from "react-icons/fa"

const ContactCard = () => {
  return (
    <Wrapper>
      <Container size={"1000px"}>
        <Flex>
          <div className="left">
            <div>
              <Title>Send Me A Message</Title>
              <Form></Form>
            </div>
          </div>
          <div className="right">
            <a
              href="https://www.instagram.com/derekinthekitchen"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram color="white" size="32px"></FaInstagram>
            </a>
          </div>
        </Flex>
      </Container>
    </Wrapper>
  )
}

export default ContactCard

const Wrapper = styled.div`
  margin-top: -7rem;
  padding-bottom: 8rem;
  padding: 0 1.5rem 8rem 1.5rem;
  @media (min-width: ${breakpoints.tablet}) {
    padding: 0;
  }
`

const Flex = styled.div`
  box-shadow: ${reusable.boxShadow};
  padding: 16px;
  background: white;
  border-radius: ${reusable.borderRadius};
  display: flex;
  flex-wrap: wrap;

  > div {
    width: 100%;
    @media (min-width: ${breakpoints.tablet}) {
      width: 50%;
    }
  }
  .left {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (min-width: ${breakpoints.tablet}) {
      padding-right: 12px;
    }
    div {
      width: 100%;
      h1 {
        color: ${colors.primary};
      }
    }
  }
  .right {
    background-color: ${colors.primary};
    border-radius: ${reusable.borderRadius};
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 200px;
    margin-top: 2rem;
    @media (min-width: ${breakpoints.tablet}) {
      margin-top: 0;
    }
  }
`
