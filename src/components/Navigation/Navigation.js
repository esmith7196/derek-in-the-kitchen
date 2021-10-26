import React, { useState } from "react"
import { Link } from "gatsby"
import Flip from "react-reveal/Flip"
import Fade from "react-reveal/Fade"
import Slide from "react-reveal/Slide"
import styled from "styled-components"
import { MdMenu, MdClose } from "react-icons/md"
import { CSSTransition } from "react-transition-group"

import logo from "../../assets/logo.png"
import { reusable, colors, breakpoints } from "../../style/constants"
import Container from "../UI/Container"
import navItems from "../../data/navItems"
import { useScrollPosition } from "../../hooks/useScrollPosition"
import MobileNavbar from "../MobileNavbar"

const Navigation = () => {
  const [navIsOpen, setNavIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const toggleNav = () => setNavIsOpen(!navIsOpen)

  useScrollPosition(({ prevPos, currPos }) => {
    if (Math.sign(currPos.y) === -1) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  })

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
      <LT>
        <CSSTransition in={!scrolled} timeout={9999999999} classNames="my-node">
          <Nav>
            <MobileLogoContainer>
              <img src={logo} alt="Derek In The Kitchen" />
            </MobileLogoContainer>

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
        </CSSTransition>
      </LT>
      <LT>
        <CSSTransition
          in={!scrolled}
          timeout={9999999999}
          classNames="my-node-alt"
        >
          <Nav reverse>
            <Container size="1600px">
              <div className="mobile-nav-content">
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
        </CSSTransition>
      </LT>
      <MobileNavbar></MobileNavbar>
    </>
  )
}

export default Navigation

const BottomNav = styled.div`
  nav {
    position: fixed !important;
    bottom: 0 !important;
    width: 100%;
    left: 0;
    height: 20px;
    overflow: hidden;
  }
`

const LT = styled.div`
  .my-node-enter {
    opacity: 0;
  }
  .my-node-enter-active {
    opacity: 1;
    transition: ease opacity 425ms;
  }
  .my-node-exit {
    opacity: 1;
  }
  .my-node-exit-active {
    opacity: 0;
    transition: ease opacity 650ms;
  }

  .my-node-alt-enter {
    opacity: 1;
  }
  .my-node-alt-enter-active {
    opacity: 0;
    transition: ease opacity 425ms;
  }
  .my-node-alt-exit {
    opacity: 0;
  }
  .my-node-alt-exit-active {
    opacity: 1;
    transition: ease opacity 650ms;
  }
`

const Nav = styled.nav`
  position: fixed;
  z-index: 999;
  top: 0;
  ${({ reverse }) =>
    reverse ? "bottom: 0; top: unset;" : "top: 0; bottom: unset"};
  width: 100%;
  padding: 0.25rem 1rem;

  background: ${colors.white};

  @media (min-width: ${breakpoints.desktop}) {
    box-shadow: ${reusable.boxShadow};
  }

  .nav-logo-container {
    max-width: 125px;
    @media (min-width: ${breakpoints.tablet}) {
      max-width: 175px;
    }
    img {
      display: flex;
    }
  }

  .mobile-nav-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    display: none;

    @media (min-width: ${breakpoints.desktop}) {
      display: block;
    }
    @media (min-width: ${breakpoints.tablet}) {
      flex-direction: column;
      padding: 16px 0;
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
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    background: ${colors.dark};
    @media (min-width: ${breakpoints.tablet}) {
      display: none;
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
    /* padding: 0px 16px 0 16px; */
    /* margin-top: 16px; */
    /* border-left: 1px solid ${colors.secondary}; */
    text-align: center;
    /* border-right: 1px solid ${colors.primary}; */
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

const MobileLogoContainer = styled.div`
  text-align: center;
  img {
    max-width: 100px;
  }
  @media (min-width: ${breakpoints.desktop}) {
    display: none;
  }
`
