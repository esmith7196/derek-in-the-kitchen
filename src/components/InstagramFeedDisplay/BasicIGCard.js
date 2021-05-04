import React, { useState } from "react"
import styled from "styled-components"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"

import logo from "../../assets/logo.png"
import { breakpoints, colors, reusable } from "../../style/constants"

dayjs.extend(relativeTime)

const BasicIGCard = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false)
  const stringGap = 100

  const getWordText = () => (isOpen ? "less" : "more")

  return (
    <Card>
      <div className="card-top">
        <img src={data.media_url} alt={data.caption} />
      </div>
      <div className="card-body">
        <Profile
          href="https://www.instagram.com/derekinthekitchen/"
          target="_blank"
          rel="noopener"
        >
          <img src={logo} alt="Derek In The Kitchen" />
          <span>@{data.username}</span>
        </Profile>

        <p>
          {data.caption.length > stringGap && !isOpen
            ? `${data.caption.substring(0, stringGap)}...`
            : data.caption}
          <span onClick={() => setIsOpen(!isOpen)}>Read {getWordText()}</span>
        </p>
        <p className="time">{dayjs(data.timestamp).fromNow()}</p>
      </div>
    </Card>
  )
}

export default BasicIGCard

const Card = styled.div`
  background-color: white;
  border-radius: ${reusable.borderRadius};
  box-shadow: ${reusable.boxShadowSubtle};

  .card-body {
    padding: 8px 16px;
  }
  p {
    margin-top: 16px;
    span {
      display: inline-block;
      color: ${colors.primary};
      padding: 4px 0;
      cursor: pointer;
      font-weight: bold;
      &:hover {
        color: ${colors.dark};
      }
    }
    &.time {
      margin-top: 8px;
      font-size: 14px;
      font-style: italic;
    }
  }
  img {
    max-height: 255px;
    object-fit: cover;
    object-position: top;
    border-top-left-radius: ${reusable.borderRadius};
    border-top-right-radius: ${reusable.borderRadius};

    @media (min-width: ${breakpoints.tablet}) {
      max-height: none;
    }
  }
`

const Profile = styled.a`
  display: flex;
  align-items: center;
  &:hover {
    span {
      color: ${colors.primary};
    }
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 100%;
    object-fit: cover;
    margin-right: 12px;
  }

  span {
    /* color: ${colors.primary}; */
    font-weight: bold;
    font-size: 18px;
  }
`
