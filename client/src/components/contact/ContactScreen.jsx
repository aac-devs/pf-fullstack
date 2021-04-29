import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 10px;
  @media (min-width: 768px) {
    margin-top: 20px;
  }
`;
const Form = styled.form`
  padding: 20px;
  border-radius: 6px;
  max-width: 450px;
  margin: 0 auto;
  background-color: ${(props) => props.theme.color.bg.tertiary};
  border: 1px solid ${(props) => props.theme.color.border.secondary};
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
    background-color: ${(props) => props.theme.color.input.bg};
    color: ${(props) => props.theme.color.text.primary};
    width: 100%;
    margin-top: 5px;
    padding: 5px 12px;
    font-size: 14px;
    line-height: 20px;
    outline: none;
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme.color.input.border};
    &:focus {
      border-color: ${(props) => props.theme.color.input.focus_border};
      box-shadow: 0 0 3px ${(props) => props.theme.color.input.focus_border};
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
    box-shadow: ${(props) => props.theme.color.btn.shadow};
    color: ${(props) => props.theme.color.btn.text};
    background-color: ${(props) => props.theme.color.btn.bg};
    border: 1px solid ${(props) => props.theme.color.btn.border};
    &:hover {
      border: 1px solid ${(props) => props.theme.color.btn.hover_border};
      background-color: ${(props) => props.theme.color.btn.hover_bg};
    }
  }
`;

const Contact = () => {
  const { language } = useSelector((state) => state.ui);

  return (
    <Container>
      <Form id="contact-form">
        <label htmlFor="contact-name">
          {language === 'eng' ? 'Name:' : 'Nombre:'}
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
          {language === 'eng' ? 'Email:' : 'Correo:'}
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
          {language === 'eng' ? 'Message:' : 'Mensaje:'}
          <br />
          <textarea id="contact-message" form="contact-form" maxLength="200" />
        </label>
        <label htmlFor="contact-verify">
          {language === 'eng' ? 'Solve: ' : 'Resuelva: '}
          25 + 41 =
          <br />
          <input
            type="text"
            id="contact-verify"
            form="contact-form"
            autoComplete="off"
          />
        </label>

        <button type="submit">{language === 'eng' ? 'Send' : 'Enviar'}</button>
      </Form>
    </Container>
  );
};

export default Contact;
