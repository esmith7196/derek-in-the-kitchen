import React from "react"
import styled from "styled-components"
import { font, reusable } from "../../style/constants"

const Form = () => {
  return (
    <StyledForm>
      <label htmlFor="name">
        <span>Name</span>
        <input type="text" name="name" />
      </label>

      <label htmlFor="email">
        <span>Email</span>
        <input type="email" name="email" />
      </label>

      <label htmlFor="email">
        <span>Message</span>
        <textarea name="email" />
      </label>
    </StyledForm>
  )
}

export default Form

const StyledForm = styled.div`
  width: 100%;

  label {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    font-family: ${font.text};
    text-transform: uppercase;

    font-weight: bold;
  }
  span {
    margin-bottom: 8px;
  }
  input,
  textarea {
    border: 2px solid #eee;
    border-radius: ${reusable.borderRadius};
    padding: 2px 12px;
  }
  textarea {
    height: 150px;
  }
`
