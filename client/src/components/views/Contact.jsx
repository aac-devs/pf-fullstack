import React from 'react';
import styled from 'styled-components';
import { ligthColor } from '../../global-styles';

const Container = styled.div`
  color: ${ligthColor};
`;

const Contact = () => {
  return (
    <Container>
      <h1>Contact</h1>
    </Container>
  );
};

export default Contact;
