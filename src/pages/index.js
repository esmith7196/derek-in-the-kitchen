import * as React from "react"

import Layout from "../components/layout"
// import SEO from "../components/seo"
import IndexLayout from "../templates/layout/IndexLayout"
import InstagramFeedDisplay from "../components/InstagramFeedDisplay/InstagramFeedDisplay"
import IGDisplay from "../components/InstagramFeedDisplay/IGDisplay"

const IndexPage = () => (
  <Layout>
    <IndexLayout />
    <InstagramFeedDisplay />
  </Layout>
)

export default IndexPage
