import React from 'react';
import styled from 'styled-components';
import { darkColor } from '../../global-styles';
import Main from './Main';

const Container = styled.div`
  background-color: #fff;
  background-color: ${darkColor};

  /* min-height: 100%; */
  /* height: 100%; */
  /* display: grid; */
  /* grid-template-columns: 1fr; */
  /* grid-template-rows: 64px auto 110px; */
  /* justify-items: center; */
  display: flex;
  flex-direction: column;
  /* justify-content: stretch; */
  /* align-items: stretch; */

  .viewport-header {
    background-color: gray;
    height: 64px;
    min-height: 64px;

    @media (min-width: 768px) {
      height: 62px;
      min-height: 62px;
      /* grid-template-rows: 62px auto 110px; */
    }
  }
  .viewport-main {
    /* background-color: yellow; */
    /* max-width: 1280px; */
    /* justify-self: center; */
    /* margin-right: auto; */
    /* margin-left: auto; */
    margin-top: 24px;
    margin-bottom: 48px;
    flex-grow: 1;
    @media (max-width: 767px) {
      padding: 0 12px;
      margin-top: 0;
    }
  }
  .viewport-footer {
    /* margin-bottom: 0; */
    height: 110px;
    min-height: 110px;
    background-color: royalblue;
  }
`;

const Viewport = () => {
  return (
    <Container>
      <div className="viewport-header">Header</div>
      <div className="viewport-main">
        <Main />
      </div>
      <div className="viewport-footer">Footer</div>
    </Container>
  );
};

export default Viewport;
