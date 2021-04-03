import React from "react"
import { graphql } from "gatsby"
import {
  FaInstagram,
  FaFacebookSquare,
  FaMailBulk,
  FaTwitter,
  FaYoutube,
  FaMapPin,
  FaMobile,
} from "react-icons/fa"
import styled from "styled-components"
import Layout from "../components/layout"
import { breakpoints, colors, font } from "../style/constants"
import ContactForm from "../components/Forms/ContactForm"

const contact = ({ data }) => {
  const {
    title,
    description: { description },
    // includeTheContactForm,
  } = data.contentfulContactPage
  const links = data.allContentfulLinks.edges

  const renderLinks = () => {
    return links.map(({ node }) => {
      return (
        <li key={node.url}>
          <span>{getIcon(node.type)}</span>
          <a href={node.url}>{node.title}</a>
        </li>
      )
    })
  }

  const getIcon = ico => {
    console.log(ico)
    switch (ico) {
      case "instagram":
        return <FaInstagram color={colors.primary} size={"30px"} />
      case "twitter":
        return <FaTwitter />
      case "email":
        return <FaMailBulk color={colors.primary} size={"30px"} />
      case "phone":
        return <FaMobile />
      case "facebook":
        return <FaFacebookSquare />
      case "youtube":
        return <FaYoutube />
      case "address":
        return <FaMapPin />
      default:
        return ""
    }
  }

  return (
    <Layout>
      <Page>
        <Grid>
          <div className="details">
            <Title>{title}</Title>
            <Description>{description}</Description>
            <ul>{renderLinks()}</ul>
          </div>
          <div className="form">
            <ContactForm />
          </div>
        </Grid>
      </Page>
    </Layout>
  )
}

export default contact

const Page = styled.section`
  padding: 120px 16px 16px 16px;
`

const Grid = styled.div`
  display: block;

  @media (min-width: ${breakpoints.tablet}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 900px;
    margin: auto;
  }
  li,
  ul {
    margin: 0;
    list-style: none;
    font-weight: bold;
  }
`

const Title = styled.h1`
  font-size: 24px;
  font-family: ${font.primary};
  font-weight: bold;
  @media (min-width: ${breakpoints.tablet}) {
    font-size: 64px;
  }
`

const Description = styled.p`
  padding-right: 42px;
  margin-bottom: 1rem;
`

export const query = graphql`
  {
    contentfulContactPage {
      title
      description {
        description
      }
      includeTheContactForm
    }
    allContentfulLinks {
      edges {
        node {
          url
          type
          title
        }
      }
    }
  }
`
