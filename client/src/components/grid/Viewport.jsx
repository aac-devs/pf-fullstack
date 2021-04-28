import React from 'react';
import { IconContext } from 'react-icons';
import styled from 'styled-components';
import theme from '../../theme';
import Footer from './Footer';
import Main from './Main';
import Navbar from './Navbar';

const Container = styled.div`
  /* background-color: #fff; */
  display: flex;
  flex-direction: column;

  .viewport-header {
    /* background-color: gray; */
    background-color: ${theme.color.header.bg};
    color: ${theme.color.header.text};
    height: 64px;
    min-height: 64px;

    /* @media (min-width: 768px) {
      height: 62px;
      min-height: 62px;
    } */
  }
  .viewport-main {
    /* background-color: yellow; */
    margin-top: 24px;
    flex-grow: 1;
    @media (max-width: 767px) {
      padding: 0 12px;
      margin-top: 0;
    }
  }
  .viewport-footer {
    font-size: 12px;
    padding: 40px;
    margin-top: 40px;
    max-width: 1012px;
    margin-left: auto;
    margin-right: auto;
    /* background-color: royalblue; */
  }
`;

const Viewport = () => {
  return (
    <Container>
      <IconContext.Provider
        value={{
          style: {
            size: '2rem',
          },
        }}
      >
        <div className="viewport-header">
          <Navbar />
        </div>
        <div className="viewport-main">
          <Main />
        </div>
        <div className="viewport-footer">
          <Footer />
        </div>
      </IconContext.Provider>
    </Container>
  );
};

export default Viewport;
