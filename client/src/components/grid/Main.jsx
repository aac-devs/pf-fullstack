import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
import { borderColor } from '../../global-styles';
import DescriptionCard from './DescriptionCard';
import InfoCard from './InfoCard';
import Tabs from './Tabs';
import Routers from './Routers';

const Container = styled.div`
  margin-right: -8px;
  margin-left: -8px;
  /* margin-top: 24px; */
  /* background-color: cyan; */
  display: grid;
  grid-template-columns: 6% 22% 66% 6%;
  grid-template-rows: 48px 1fr;
  grid-template-areas:
    'left-side empty header right-side'
    '. sidebar routes .';

  @media (max-width: 767px) {
    /* background-color: olivedrab; */
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
    border-bottom: 1px solid ${borderColor};
  }
  .right-side {
    border-bottom: 1px solid ${borderColor};
  }

  .empty {
    grid-area: empty;
    border-bottom: 1px solid ${borderColor};

    /* background-color: #fff; */
  }
  .main-header {
    grid-area: header;
    border-bottom: 1px solid ${borderColor};
    padding-left: 16px;

    /* background-color: purple; */
    /* background-color: orangered; */
    /* max-width: 1280px; */
    @media (max-width: 767px) {
      margin-top: 16px;
      padding-left: 0;
    }
  }
  .main-sidebar {
    grid-area: sidebar;
    /* background-color: lime; */
    @media (min-width: 1012px) {
      /* padding: 0 16px; */
    }
  }
  .main-routes {
    grid-area: routes;
    /* background-color: orange; */
    padding: 8px 0 8px 24px;
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
