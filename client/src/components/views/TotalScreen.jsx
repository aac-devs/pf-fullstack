import React from 'react';
import styled from 'styled-components';
import { darkColor, mediumColor } from '../../global-styles';
import MainScreen from './MainScreen';

const Container = styled.div`
  /* background-color: green; */
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  /* background-color: gray; */
  background-color: ${mediumColor};

  height: 64px;

  @media (min-width: 768px) {
    height: 62px;
  }
`;

const Main = styled.div`
  flex-grow: 1;
  /* background-color: yellow; */
  background-color: ${darkColor};
`;

const Footer = styled.div`
  height: 110px;
  background-color: dodgerblue;
  width: 100%;
  max-width: 1280px;
  margin-right: auto;
  margin-left: auto;
`;

const TotalScreen = () => {
  return (
    <Container>
      <Header>header</Header>
      <Main>
        <MainScreen />
      </Main>
      <Footer>footes</Footer>
    </Container>
  );
};

export default TotalScreen;
