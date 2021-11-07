import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { MdMenu } from "react-icons/md"

import logo from "../../assets/logo.png"
import { reusable, colors, breakpoints } from "../../style/constants"
import Container from "../UI/Container"
import navItems from "../../data/navItems"
import MobileNavbar from "../MobileNavbar"

const Navigation = () => {
  const [navIsOpen, setNavIsOpen] = useState(false)

  const toggleNav = () => setNavIsOpen(!navIsOpen)

  return (
    <>
      <Nav>
        <MobileLogo>
          <img src={logo} alt="Derek In The Kitchen"></img>
        </MobileLogo>

        <Container size="1600px">
          <div className="mobile-nav-content">
            <div className="nav-logo-container">
              <img src={logo} alt="Derek In The Kitchen" />
            </div>
            <div className="nav-right">
              <div className="hamburger-container">
                <MdMenu onClick={toggleNav} size={"35px"}></MdMenu>
              </div>
              <div className="items-desktop">
                {navItems.map(itm => (
                  <NavItem key={itm.title} desktop>
                    <Link to={itm.ref}>{itm.title}</Link>
                  </NavItem>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Nav>
      <MobileNavbar></MobileNavbar>
    </>
  )
}

export default Navigation

const Nav = styled.nav`
  position: static;
  z-index: 999;
  top: 0;
  ${({ reverse }) =>
    reverse ? "bottom: 0; top: unset;" : "top: 0; bottom: unset"};
  width: 100%;
  padding: 0.25rem 1rem;

  background: none;

  @media (min-width: ${breakpoints.desktop}) {
    box-shadow: ${reusable.boxShadow};
    background: ${colors.white};
    position: static;
  }

  .nav-logo-container {
    max-width: 125px;
    @media (min-width: ${breakpoints.tablet}) {
      max-width: 168px;
    }
    @media (min-width: ${breakpoints.tablet}) {
      max-width: 168px;
    }
    img {
      display: flex;
    }
  }

  .mobile-nav-content {
    display: none;
    align-items: center;
    justify-content: space-between;

    @media (min-width: ${breakpoints.tablet}) {
      padding: 16px 0;
      display: flex;
    }
  }

  .hamburger-container {
    @media (min-width: ${breakpoints.tablet}) {
      display: none;
    }
  }

  .items-desktop {
    display: none;

    @media (min-width: ${breakpoints.tablet}) {
      display: flex;
      justify-content: center;
    }
  }
`

const NavItem = styled.div`
  background: ${({ desktop }) => (desktop ? "none" : colors.primary)};
  padding: 1.5rem 0.5rem;
  text-align: center;
  position: relative;

  @media (min-width: ${breakpoints.tablet}) {
    margin-top: 16px;
    padding: 0;
    text-align: center;
  }

  a {
    color: ${({ desktop }) => (desktop ? colors.dark : "white")};
    text-decoration: none;
    font-size: 1.5rem;
    text-transform: uppercase;
    transition: all 0.3s;
    font-weight: bold;

    @media (min-width: ${breakpoints.tablet}) {
      font-size: 1rem;
      padding: 8px 16px;
      border-radius: ${reusable.borderRadius};
    }

    &:hover {
      color: ${colors.primary};
      transition: all 0.3s;
      @media (min-width: ${breakpoints.tablet}) {
        background: ${colors.primary};
        color: white;
      }
    }
  }
  .small-border {
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 0;
    width: 100%;
    span {
      width: 25px;
      height: 1px;
      background-color: white;
      opacity: 0.3;
    }
  }
`

const MobileLogo = styled.div`
  text-align: center;
  img {
    width: 175px;
  }
  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }
`
