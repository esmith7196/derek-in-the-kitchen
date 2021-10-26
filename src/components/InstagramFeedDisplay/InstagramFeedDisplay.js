import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import BasicIGCard from "./BasicIGCard"
import { breakpoints } from "../../style/constants"

const InstagramFeedDisplay = () => {
  return (
    <FeedDisplay>
      {/* <div>
        {data.allInstagramContent.edges.map(({ node }) => (
          <Column>
            <BasicIGCard data={node}></BasicIGCard>
          </Column>
        ))}
      </div> */}
    </FeedDisplay>
  )
}

export default InstagramFeedDisplay

const img =
  "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"

const FeedDisplay = styled.div`
  background: linear-gradient(rgba(164, 44, 214, 0.3), rgba(164, 44, 214, 0.3)),
    url(${img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  > div {
    display: flex;
    flex-wrap: wrap;
    max-width: 1900px;
    margin: auto;
  }
`

const Column = styled.div`
  padding: 16px;
  width: 100%;

  @media (min-width: ${breakpoints.tablet}) {
    width: 50%;
  }
  @media (min-width: ${breakpoints.desktop}) {
    width: 33.33%;
  }
  @media (min-width: ${breakpoints.fullHd}) {
    width: 25%;
  }
`
