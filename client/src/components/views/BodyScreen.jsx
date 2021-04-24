import React from 'react';
import styled from 'styled-components';
import { darkColor, textoColor } from '../../global-styles';
import DescriptionCard from '../grid/DescriptionCard';
import InfoCard from '../grid/InfoCard';

const Container = styled.div`
  background-color: wheat;
  display: flex;
  margin-right: -8px;
  margin-left: -8px;
`;

const Sidebar = styled.div`
  background-color: ${darkColor};
  background-color: lime;
  position: relative;
  /* display: flex; */

  @media (max-width: 767px) {
    background-color: violet;
    padding: 0 8px;
    width: 25%;
  }
  @media (min-width: 1012px) {
    padding: 0 16px;
  }
`;

const RoutesBody = styled.div`
  background-color: orange;
  margin-top: 24px;
  padding: 0 8px;
  color: ${textoColor};
  @media (max-width: 767px) {
    width: 75%;
  }
`;

const BodyScreen = () => {
  return (
    <Container>
      <Sidebar>
        <InfoCard />
        <DescriptionCard />
      </Sidebar>
      <RoutesBody>rutas</RoutesBody>
    </Container>
  );
};

export default BodyScreen;
