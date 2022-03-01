import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
// import SEO from "../components/seo"
import IndexLayout from "../templates/layout/IndexLayout"
// import InstagramFeedDisplay from "../components/InstagramFeedDisplay/InstagramFeedDisplay"

const IndexPage = ({ data }) => {
  const { nodes } = data.allSanityProduct
  return (
    <Layout
      title="Derek In The Kitchen"
      description="Welcome to Derek In The Kitchen."
      page="Home"
    >
      <IndexLayout productImages={nodes} />
      {/* <InstagramFeedDisplay /> */}
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  {
    allSanityProduct {
      nodes {
        defaultProductVariant {
          images {
            asset {
              url
            }
          }
        }
        title
        blurb
      }
    }
  }
`
