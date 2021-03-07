import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import IndexLayout from "../templates/layout/IndexLayout"

const IndexPage = () => (
  <Layout>
    <IndexLayout></IndexLayout>
  </Layout>
)

export default IndexPage
