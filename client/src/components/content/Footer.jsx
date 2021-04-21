import React from 'react';
import styled from 'styled-components';
import { ligthColor } from '../../global-styles';

const Container = styled.div`
  color: ${ligthColor};
  font-size: 18px;
  /* background-color: yellow; */
`;

const Footer = () => {
  return <Container>&copy; Andrés Arana Castillo - 2021</Container>;
};

export default Footer;
