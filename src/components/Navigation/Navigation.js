import React, { useState } from "react"
import { Link } from "gatsby"
import Flip from "react-reveal/Flip"
import Fade from "react-reveal/Fade"
import styled from "styled-components"
import { MdMenu, MdClose } from "react-icons/md"

import logo from "../../assets/logo.png"
import { reusable, colors, breakpoints } from "../../style/constants"
import Container from "../UI/Container"
import navItems from "../../data/navItems"

const Navigation = () => {
  const [navIsOpen, setNavIsOpen] = useState(false)

  const toggleNav = () => setNavIsOpen(!navIsOpen)

  if (navIsOpen) {
    return (
      <OpenNavigation>
        <Fade left delay={250}>
          <div className="left">
            <div>
              <img src={logo} alt="Derek In The Kitchen" />
            </div>
          </div>
        </Fade>
        <div className="right">
          {navItems.map((itm, idx) => (
            <Flip left delay={(idx + 1) * 250}>
              <NavItem>
                <Link to={itm.ref}>{itm.title}</Link>
                <div className="small-border">
                  <span></span>
                </div>
              </NavItem>
            </Flip>
          ))}
          <Flip left delay={(navItems.length + 1) * 250}>
            <div
              role="button"
              className="close-nav"
              tabIndex={0}
              onClick={toggleNav}
              onKeyDown={toggleNav}
            >
              <MdClose color={colors.alternate} size={"60px"}></MdClose>
            </div>
          </Flip>
        </div>
      </OpenNavigation>
    )
  }

  return (
    <>
      <Nav>
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
    </>
  )
}

export default Navigation

const Nav = styled.nav`
  position: fixed;
  z-index: 999;
  top: 0;
  width: 100%;
  padding: 0.25rem 1rem;
  box-shadow: ${reusable.boxShadow};
  background: ${colors.white};

  .nav-logo-container {
    max-width: 125px;
    img {
      display: flex;
    }
  }

  .mobile-nav-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
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
    }
  }
`

const OpenNavigation = styled.div`
  height: 100vh;
  width: 100%;
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;

  display: flex;

  > div {
    flex: 1;
  }
  .left {
    padding: 0.5rem;
    display: flex;
    height: 100%;
    align-items: center;
    background: ${colors.primary};
  }
  .right {
    display: flex;
    flex-direction: column;
  }
  .close-nav {
    display: none;
    justify-content: center;
    align-items: center;
    flex: 1;
    background: ${colors.dark};
    @media (min-width: ${breakpoints.tablet}) {
      display: flex;
    }
  }
`

const NavItem = styled.div`
  background: ${({ desktop }) => (desktop ? "none" : colors.primary)};
  padding: 1.5rem 0.5rem;
  text-align: center;
  position: relative;

  a {
    color: ${({ desktop }) => (desktop ? colors.dark : "white")};
    text-decoration: none;
    font-size: 1.5rem;
    text-transform: uppercase;
    transition: all 0.3s;
    font-weight: bold;
    @media (min-width: ${breakpoints.tablet}) {
      font-size: 1rem;
    }
    &:hover {
      color: ${colors.primary};
      transition: all 0.3s;
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
