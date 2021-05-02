import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import useForm from '../../hooks/useForm';

const Container = styled.div`
  margin-top: 10px;
  @media (min-width: 768px) {
    margin-top: 20px;
  }
  .error-value {
    &:focus {
      border-color: red;
      box-shadow: 0 0 3px red;
    }
  }
  .success-value {
    &:focus {
      border-color: ${(props) => props.theme.color.input.focus_border};
      box-shadow: 0 0 3px ${(props) => props.theme.color.input.focus_border};
    }
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
  const [formValues, handleInputChange] = useForm({
    name: '',
    email: '',
    message: '',
    solve: '',
  });
  const { name, email, message, solve } = formValues;
  const [operation, setOperation] = useState({
    a: 0,
    b: 0,
    res: 0,
  });
  const { a: valA, b: valB } = operation;
  const [validate, setValidate] = useState({
    name: false,
    email: false,
    message: false,
    solve: false,
  });

  useEffect(() => {
    const a = Math.round(Math.random() * 100);
    const b = Math.round(Math.random() * 100);
    setOperation({ a, b, res: a + b });
  }, []);

  useEffect(() => {
    const nameRegex = RegExp(/^[a-zA-Záéíóúü ,.'-]+$/u);
    setValidate({
      ...validate,
      name: nameRegex.test(name),
    });
  }, [formValues.name]);

  useEffect(() => {
    const emailRegex = RegExp(
      /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
    );
    setValidate({
      ...validate,
      email: emailRegex.test(email),
    });
  }, [formValues.email]);

  useEffect(() => {
    setValidate({
      ...validate,
      message: formValues.message.length > 3,
    });
  }, [formValues.message]);

  useEffect(() => {
    const resp = formValues.solve * 1;
    const state = !Number.isNaN(resp) && resp === operation.res;
    setValidate({ ...validate, solve: state });
  }, [formValues.solve]);

  return (
    <Container>
      <Form id="contact-form">
        <label htmlFor="contact-name">
          {language === 'eng' ? 'Name:' : 'Nombre:'}
          <br />
          <input
            className={validate.name ? 'success-value' : 'error-value'}
            type="text"
            id="contact-name"
            form="contact-form"
            autoComplete="off"
            maxLength="50"
            value={name}
            name="name"
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="contact-email">
          {language === 'eng' ? 'Email:' : 'Correo:'}
          <br />
          <input
            className={validate.email ? 'success-value' : 'error-value'}
            type="text"
            id="contact-email"
            form="contact-form"
            autoComplete="off"
            maxLength="50"
            value={email}
            name="email"
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="contact-message">
          {language === 'eng' ? 'Message:' : 'Mensaje:'}
          <br />
          <textarea
            className={validate.message ? 'success-value' : 'error-value'}
            id="contact-message"
            form="contact-form"
            maxLength="200"
            value={message}
            name="message"
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="contact-verify">
          {language === 'eng'
            ? 'Please, solve this operation: '
            : 'Por favor, resuelva esta operación: '}
          {valA} + {valB} =
          <br />
          <input
            className={validate.solve ? 'success-value' : 'error-value'}
            type="text"
            id="contact-verify"
            form="contact-form"
            autoComplete="off"
            value={solve}
            name="solve"
            onChange={handleInputChange}
          />
        </label>

        <button type="submit">{language === 'eng' ? 'Send' : 'Enviar'}</button>
      </Form>
    </Container>
  );
};

export default Contact;
