import React from 'react';
import styled from 'styled-components';
import { SiJavascript } from 'react-icons/si';
import {
  borderColor,
  darkColor,
  shadowColor,
  textoColor,
  textoSecColor,
} from '../../global-styles';

const Container = styled.div`
  /* background-color: ${darkColor}; */
  /* background-color: blue; */
  /* position: absolute; */
  /* flex-grow: 1; */
  display: block;
  width: 100%;
  /* height: 500px; */
  /* width: calc(100% - 16px); */
  margin-top: -32px;

  @media (max-width: 767px) {
    margin-top: 0;
    display: flex;
    flex-direction: row;
    /* margin-bottom: 16px; */
    align-items: center;

    /* margin: 0 8px; */
    /* width: calc(100% - 32px); */
  }
  /* @media (min-width: 1012px) { */
  /* margin-top: -32px; */
  /* width: calc(100% - 32px); */
  /* } */
`;

const Image = styled.div`
  /* background-color: green; */
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
  @media (max-width: 767px) {
    width: 16.66667%;
    /* margin-bottom: 24px; */
    margin-right: 16px;
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
      @media (max-width: 767px) {
        /* flex-grow: 1; */
      }
    }
    .role {
      color: ${textoSecColor};
      display: block;
      font-size: 18px;
      font-style: normal;
      font-weight: 300;
      line-height: 24px;
      /* background-color: fuchsia; */
      @media (max-width: 767px) {
        font-size: 20px;
      }
    }
  }
  @media (max-width: 767px) {
    flex-grow: 1;
  }
`;

const InfoCard = () => {
  return (
    <Container>
      <Image>
        <img
          src="https://res.cloudinary.com/aac-devs-data/image/upload/v1619362248/portfolio/github-image_iv3b80.jpg"
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
            <SiJavascript size="1rem" color="gold" />
            &nbsp;Fullstack Development
          </span>
        </div>
      </Body>
    </Container>
  );
};

export default InfoCard;
