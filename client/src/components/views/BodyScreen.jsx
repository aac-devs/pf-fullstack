import React from 'react';
import styled from 'styled-components';
import { darkColor, textoColor } from '../../global-styles';
import DescriptionCard from '../content/DescriptionCard';
import InfoCard from '../content/InfoCard';

const Container = styled.div`
  /* background-color: wheat; */
  display: flex;
  margin-right: -8px;
  margin-left: -8px;
`;

const Sidebar = styled.div`
  background-color: ${darkColor};
  position: relative;
  /* display: flex; */

  @media (min-width: 768px) {
    padding: 0 8px;
    width: 25%;
  }
  @media (min-width: 1012px) {
    padding: 0 16px;
  }
`;

const RoutesBody = styled.div`
  /* background-color: orange; */
  margin-top: 24px;
  padding: 0 8px;
  color: ${textoColor};
  @media (min-width: 768px) {
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
