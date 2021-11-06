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
  }
`

const Layout = ({ children }) => {
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
