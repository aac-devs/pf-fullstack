import React from 'react';
import styled from 'styled-components';
import theme from '../../theme';

const Container = styled.div`
  /* background-color: wheat; */
  padding: 10px;
`;
const Form = styled.form`
  padding: 20px;
  border-radius: 6px;
  max-width: 450px;
  margin: 0 auto;
  background-color: ${theme.color.bg.tertiary};
  border: 1px solid ${theme.color.border.secondary};

  label {
    display: block;
    margin-bottom: 7px;
    font-weight: 400;
    text-align: left;
    font-size: 14px;
  }

  input,
  textarea {
    display: block;
    background-color: ${theme.color.input.bg};
    color: ${theme.color.text.primary};
    width: 100%;
    margin-top: 5px;
    padding: 5px 12px;
    font-size: 14px;
    line-height: 20px;
    outline: none;
    border-radius: 6px;
    border: 1px solid ${theme.color.input.border};
    &:focus {
      border-color: ${theme.color.input.focus_border};
      box-shadow: 0 0 3px ${theme.color.input.focus_border};
    }
  }

  textarea {
    resize: none;
    height: 100px;
    font-family: 'Open Sans', sans-serif;
  }

  button {
    height: 35px;
    margin-top: 20px;
    display: block;
    width: 100%;
    text-align: center;
    padding: 5px 16px;
    font-size: 14px;
    line-height: 20px;
    cursor: pointer;
    font-weight: 600;
    border-radius: 6px;
    transition: all 0.4s;
    box-shadow: ${theme.color.btn.shadow};
    color: ${theme.color.btn.text};
    background-color: ${theme.color.btn.bg};
    border: 1px solid ${theme.color.btn.border};
    &:hover {
      border: 1px solid ${theme.color.btn.hover_border};
      background-color: ${theme.color.btn.hover_bg};
    }
  }
`;

const Titles = styled.div`
  /* background-color: red; */
  margin-bottom: 10px;
  text-align: center;
  font-size: 24px;
  font-weight: 300;
`;

const Contact = () => {
  return (
    <Container>
      <Titles>Contact</Titles>
      <Form id="contact-form">
        <label htmlFor="contact-name">
          Name:
          <br />
          <input
            type="text"
            id="contact-name"
            form="contact-form"
            autoComplete="off"
            maxLength="50"
          />
        </label>
        <label htmlFor="contact-email">
          Email:
          <br />
          <input
            type="text"
            id="contact-email"
            form="contact-form"
            autoComplete="off"
            maxLength="50"
          />
        </label>
        <label htmlFor="contact-message">
          Message:
          <br />
          <textarea id="contact-message" form="contact-form" maxLength="200" />
        </label>
        <label htmlFor="contact-verify">
          Resolve: 25 + 41 =
          <br />
          <input
            type="text"
            id="contact-verify"
            form="contact-form"
            autoComplete="off"
          />
        </label>

        <button type="submit">Send</button>
      </Form>
    </Container>
  );
};

export default Contact;
