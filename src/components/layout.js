import * as React from "react"
import PropTypes from "prop-types"
import { createGlobalStyle } from "styled-components"
import { colors } from "../style/constants"
import { useStaticQuery, graphql } from "gatsby"

import "./layout.css"
import Navigation from "../components/Navigation/Navigation"

const GlobalStyle = createGlobalStyle`

  body {
    background: ${colors.white};
    font-family: 'Raleway', cursive;
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyle />
      <Navigation></Navigation>
      {children}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
