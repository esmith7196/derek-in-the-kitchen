import React from "react"
import styled from "styled-components"
import { colors, font, reusable } from "../../style/constants"

const Form = () => {
  return (
    <StyledForm
      method="post"
      netlify-honeypot="bot-field"
      data-netlify="true"
      name="contact"
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
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
      <button type="submit">Send Message</button>
    </StyledForm>
  )
}

export default Form

const StyledForm = styled.form`
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
  button {
    margin-top: 2rem;
    border-radius: ${reusable.borderRadius};
    background: ${colors.primary};
    color: white;
    font-family: ${font.text};
    font-weight: bold;
    text-transform: uppercase;
    padding: 0.5rem 2rem;
    border: 1px solid ${colors.primary};
    transition: all ease 0.25s;
    cursor: pointer;
    &:hover {
      background: transparent;
      color: ${colors.primary};
      transition: all ease 0.25s;
    }
  }
`
