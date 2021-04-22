import React from 'react';
import styled from 'styled-components';
import {
  borderColor,
  darkColor,
  shadowColor,
  textoColor,
  textoSecColor,
} from '../../global-styles';

const Container = styled.div`
  /* background-color: ${darkColor}; */
  /* position: absolute; */
  /* flex-grow: 1; */
  display: block;
  width: 100%;
  /* height: 500px; */
  /* width: calc(100% - 16px); */

  @media (min-width: 768px) {
    margin-top: -32px;
    /* width: calc(100% - 32px); */
  }
  @media (min-width: 1012px) {
    /* margin-top: -32px; */
    /* width: calc(100% - 32px); */
  }
`;

const Image = styled.div`
  img {
    aspect-ratio: 260 /260;
    border-radius: 50%;
    line-height: 1;
    width: 100%;
    vertical-align: middle;
    display: inline-block;
    overflow: hidden;
    box-shadow: 0 0 0 1px ${shadowColor};
    border: 1px solid ${borderColor};
  }
`;

const Body = styled.div`
  /* background-color: dodgerblue; */
  .head {
    padding: 16px 0;
    line-height: 1;
    .name {
      /* background-color: springgreen; */
      font-size: 26px;
      display: block;
      color: ${textoColor};
      font-size: 26px;
      font-weight: 400;
      line-height: 1.25;
      overflow: hidden;
      margin-bottom: 5px;
    }
    .role {
      color: ${textoSecColor};
      display: block;
      font-size: 18px;
      font-style: normal;
      font-weight: 300;
      line-height: 24px;
      /* background-color: fuchsia; */
      i {
        color: gold;
      }
    }
  }
`;

const InfoCard = () => {
  return (
    <Container>
      <Image>
        <img
          src="github-image.jpeg"
          style={{ height: 'auto' }}
          width="260"
          height="260"
          alt="foto"
        />
      </Image>
      <Body>
        <div className="head">
          <span className="name">Andrés Arana Castillo</span>
          <span className="role">
            <i className="fab fa-js-square" />
            &nbsp;Fullstack Development
          </span>
        </div>
      </Body>
    </Container>
  );
};

export default InfoCard;
