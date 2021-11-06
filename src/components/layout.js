import * as React from "react"
import PropTypes from "prop-types"
import { createGlobalStyle } from "styled-components"
import { breakpoints, colors } from "../style/constants"

import "./layout.css"
import Navigation from "../components/Navigation/Navigation"

const GlobalStyle = createGlobalStyle`

  body {
    background: ${colors.white};
    font-family: 'Raleway', sans-serif;
    padding-top: 0;
	p, a {
		font-family: 'Raleway', sans-serif;
	}
	@media (min-width: ${breakpoints.desktop}) {
		padding-top: 225px;
	}
  }
`

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

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
