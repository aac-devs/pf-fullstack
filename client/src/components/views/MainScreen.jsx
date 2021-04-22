import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
import { borderColor, darkColor } from '../../global-styles';
import BodyScreen from './BodyScreen';
import Tabs from './Tabs';

const Container = styled.div`
  /* background-color: cyan; */
  /* height: 100%; */
`;

const Main = styled.div`
  background-color: ${darkColor};
  max-width: 1280px;
  margin-right: auto;
  margin-left: auto;
  padding: 0;
  @media (min-width: 768px) {
    padding: 0 24px;
  }
  @media (min-width: 1012px) {
    padding: 0 32px;
  }
`;

const Header = styled.div`
  margin-top: 24px;
  /* background-color: purple; */
  border-bottom: 1px solid ${borderColor};

  .header-container {
    background-color: ${darkColor};
    max-width: 1280px;
    display: flex;
    margin-right: auto;
    margin-left: auto;
    @media (min-width: 768px) {
      padding: 0 24px;
    }
    @media (min-width: 1012px) {
      padding: 0 32px;
    }
  }

  @media (min-width: 768px) {
    .empty {
      width: 25%;
    }
  }
  @media (min-width: 1012px) {
    .empty {
      padding: 0 16px;
    }
  }
`;

const MainScreen = () => {
  return (
    <Container>
      <Router>
        <Header>
          <div className="header-container">
            <div className="empty" />
            <Tabs />
          </div>
        </Header>
        <Main>
          <BodyScreen />
        </Main>
      </Router>
    </Container>
  );
};

export default MainScreen;
