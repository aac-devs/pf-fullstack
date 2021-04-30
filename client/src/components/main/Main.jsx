import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
import DescriptionCard from '../profile/DescriptionCard';
import InfoCard from '../profile/InfoCard';
import Tabs from './Tabs';
import Routers from './Routers';

const Container = styled.div`
  margin-right: 0px;
  margin-left: 0px;
  display: grid;
  grid-template-columns: 5% 25% 65% 5%;
  grid-template-rows: 48px 1fr;
  grid-template-areas:
    'left-side empty header right-side'
    '. sidebar routes .';
  @media (max-width: 767px) {
    grid-template-columns: 100%;
    grid-template-rows: repeat(3, auto);
    grid-template-areas:
      'sidebar'
      'header'
      'routes';
    margin-right: 0;
    margin-left: 0;
    margin-top: 8px;
  }
  .left-side {
    border-bottom: 1px solid ${(props) => props.theme.color.border.primary};
  }
  .right-side {
    border-bottom: 1px solid ${(props) => props.theme.color.border.primary};
  }
  .empty {
    grid-area: empty;
    border-bottom: 1px solid ${(props) => props.theme.color.border.primary};
  }
  .main-header {
    grid-area: header;
    padding-left: 16px;
    border-bottom: 1px solid ${(props) => props.theme.color.border.primary};
    @media (max-width: 767px) {
      margin-top: 16px;
      padding-left: 0;
    }
  }
  .main-sidebar {
    grid-area: sidebar;
    @media (min-width: 1012px) {
    }
  }
  .main-routes {
    grid-area: routes;
    padding: 0 0 8px 24px;
    @media (max-width: 767px) {
      padding: 8px 0;
    }
  }
`;

const Main = () => {
  return (
    <Container>
      <Router>
        <div className="empty" />
        <div className="left-side" />
        <div className="main-header">
          <div className="header-container">
            <Tabs />
          </div>
        </div>
        <div className="main-sidebar">
          <InfoCard />
          <DescriptionCard />
        </div>
        <div className="main-routes">
          <Routers />
        </div>
        <div className="right-side" />
      </Router>
    </Container>
  );
};

export default Main;
