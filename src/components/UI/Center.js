import React from "react"
import styled from "styled-components"

const Center = ({ children }) => {
  return <C>{children}</C>
}

export default Center

const C = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`
