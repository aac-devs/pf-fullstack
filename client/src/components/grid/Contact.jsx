import React from 'react';
import styled from 'styled-components';
import {
  darkColor,
  ligthColor,
  inputBorderColor,
  mediumColor,
  textoColor,
  inputFocusBorderColor,
  buttonBackgroundColor,
  buttonBorderColor,
  buttonHoverColor,
} from '../../global-styles';

const Container = styled.div`
  /* background-color: wheat; */
  padding: 10px;
`;

const Form = styled.form`
  color: ${ligthColor};
  background-color: ${mediumColor};
  padding: 20px;
  border-radius: 6px;
  border: 1px solid ${inputBorderColor};
  max-width: 450px;
  margin: 0 auto;

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
    background-color: ${darkColor};
    color: ${textoColor};
    width: 100%;
    margin-top: 5px;
    padding: 5px 12px;
    font-size: 14px;
    line-height: 20px;
    outline: none;
    border-radius: 6px;
    border: 1px solid ${inputBorderColor};
    &:focus {
      border-color: ${inputFocusBorderColor};
      box-shadow: 0 0 3px ${inputFocusBorderColor};
    }
  }

  textarea {
    resize: none;
    height: 100px;
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
    color: #fff;
    border: 1px solid ${buttonBorderColor};
    border-radius: 6px;
    background-color: ${buttonBackgroundColor};
    transition: all 0.4s;
    &:hover {
      background-color: ${buttonHoverColor};
      transform: scale(1.005);
    }
  }
`;

const Titles = styled.div`
  /* background-color: red; */
  color: ${textoColor};
  /* margin: 20px; */
  margin-bottom: 10px;
  /* padding-left: 20px; */
  text-align: center;
  font-size: 24px;
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
