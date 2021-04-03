import React from "react"
import styled from "styled-components"
import { colors, reusable, breakpoints } from "../../style/constants"
import Button from "../UI/Button"

const ContactForm = () => {
  return (
    <Form name="contact" method="POST" data-netlify="true">
      <p>
        <label>
          Your Name: <input type="text" name="name" />
        </label>
      </p>
      <p>
        <label>
          Your Email: <input type="email" name="email" />
        </label>
      </p>
      <p>
        <label>
          Message: <textarea name="message"></textarea>
        </label>
      </p>
      <p>
        <Button type="submit" bold>
          Send
        </Button>
      </p>
    </Form>
  )
}

export default ContactForm

const Form = styled.form`
  padding: 16px;
  border-radius: ${reusable.borderRadius};
  background: white;

  @media (min-width: ${breakpoints.tablet}) {
    padding: 24px 32px;
  }

  label {
    font-weight: bold;
  }

  input,
  button,
  textarea {
    width: 100%;
    margin-bottom: 16px;
  }

  textarea {
    height: 100px;
  }

  input,
  textarea {
    border: 2px solid ${colors.primary};
    border-radius: 12px;
    padding: 8px;
    outline: none;
  }
`
