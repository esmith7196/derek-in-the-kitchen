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
import Title from "../components/UI/Title"
import ContactCard from "../components/contact/ContactCard"

const contact = ({ data }) => {
  //   const {
  //     title,
  //     description: { description },
  //     // includeTheContactForm,
  //   } = data.contentfulContactPage
  //   const links = data.allContentfulLinks.edges

  //   const renderLinks = () => {
  //     return links.map(({ node }) => {
  //       return (
  //         <li key={node.url}>
  //           <span>{getIcon(node.type)}</span>
  //           <a href={node.url}>{node.title}</a>
  //         </li>
  //       )
  //     })
  //   }

  //   const getIcon = ico => {
  //     console.log(ico)
  //     switch (ico) {
  //       case "instagram":
  //         return <FaInstagram color={colors.primary} size={"30px"} />
  //       case "twitter":
  //         return <FaTwitter />
  //       case "email":
  //         return <FaMailBulk color={colors.primary} size={"30px"} />
  //       case "phone":
  //         return <FaMobile />
  //       case "facebook":
  //         return <FaFacebookSquare />
  //       case "youtube":
  //         return <FaYoutube />
  //       case "address":
  //         return <FaMapPin />
  //       default:
  //         return ""
  //     }
  //   }
  const {
    overlayImage: {
      asset: { url },
    },
    mainHeadingText,
  } = data.sanityContactPageSettings

  return (
    <Layout
      page="Contact"
      title="Derek In The Kitchen"
      description="For booking, questions and more please reach out to Derek today by filling out our form!"
    >
      <Page>
        <Overlay bg={data.sanityContactPageSettings.overlayImage.asset.url}>
          <div>
            <Title>{mainHeadingText}</Title>
          </div>
        </Overlay>
        <ContactCard />
      </Page>
    </Layout>
  )
}

export const query = graphql`
  {
    sanityContactPageSettings {
      mainHeadingText
      overlayImage {
        asset {
          url
        }
      }
    }
  }
`

export default contact

const Overlay = styled.div`
  background-image: linear-gradient(
      rgba(164, 44, 214, 0.65),
      rgba(164, 44, 214, 0.65)
    ),
    url(${({ bg }) => bg});
  background-position: center;
  background-size: cover;
  display: flex;
  height: 500px;
  width: 100%;
  justify-content: center;
  align-items: center;

  h1 {
    color: white;
    font-size: 3rem;
    @media (min-width: ${breakpoints.tablet}) {
      font-size: 3.5rem;
    }
    @media (min-width: ${breakpoints.desktop}) {
      font-size: 4.5rem;
    }
  }
`

const Page = styled.section`
  /* padding: 0px 16px 16px 16px; */
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

const Description = styled.p`
  padding-right: 42px;
  margin-bottom: 1rem;
`
