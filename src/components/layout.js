import * as React from "react"
import PropTypes from "prop-types"
import { createGlobalStyle } from "styled-components"

import { breakpoints, colors } from "../style/constants"
import "./layout.css"
import Navigation from "../components/Navigation/Navigation"
import Footer from "./Footer"

const GlobalStyle = createGlobalStyle`

  body {
    background: ${colors.white};
    font-family: 'Raleway', sans-serif;
    padding-top: 0;
	padding-bottom: 54px;
	@media (min-width: ${breakpoints.desktop}) {
		padding-bottom: 0;
	}
	p, a {
		font-family: 'Raleway', sans-serif;
	}
  }
  .slide .legend {
    background-color: rgba(0,0,0,.8)!important;
	opacity: 1!important;
  }

`

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Navigation></Navigation>
      {children}
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
