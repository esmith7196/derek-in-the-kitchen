import React from "react"
import styled from "styled-components"
import Layout from "../layout"
import IGCard from "./IGCard"

const IGDisplay = () => {
  return (
    <Layout>
      <Page></Page>
    </Layout>
  )
}

export default IGDisplay

const Page = styled.section`
  padding: 16px;
`
