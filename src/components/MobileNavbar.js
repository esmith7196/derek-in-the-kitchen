import React from "react"
import styled from "styled-components"
import {
  MdHome,
  MdPhotoLibrary,
  MdOutlineRestaurantMenu,
  MdContactPage,
} from "react-icons/md"
import navItems from "../data/navItems"
import { Link } from "gatsby"
import { breakpoints, colors, reusable } from "../style/constants"

const MobileNavbar = () => {
  const iconSize = 32
  const getIcon = ico => {
    switch (ico) {
      case "Home":
        return <MdHome size={iconSize} />
      case "Gallery":
        return <MdPhotoLibrary size={iconSize} />
      case "Menu":
        return <MdOutlineRestaurantMenu size={iconSize} />
      case "Contact":
        return <MdContactPage size={iconSize} />
      default:
        return ""
    }
  }
  return (
    <StyledBottomNav>
      <div className="items">
        {navItems.map(item => (
          <Link to={`${item.ref}`} activeClassName="active">
            <div className="item">{getIcon(item.title)}</div>
          </Link>
        ))}
      </div>
    </StyledBottomNav>
  )
}

export default MobileNavbar

const StyledBottomNav = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 8px;
  padding-bottom: 15px;
  background: ${colors.white};
  box-shadow: ${reusable.boxShadow};

  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }

  .items {
    display: flex;
    justify-content: space-around;
    .active {
      path {
        color: ${colors.primary};
      }
    }
  }
`
