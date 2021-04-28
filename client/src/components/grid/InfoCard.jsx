import React from 'react';
import styled from 'styled-components';
import { SiJavascript } from 'react-icons/si';
import theme from '../../theme';

const Container = styled.div`
  /* background-color: blue; */
  /* text-align: center; */
  /* padding-left: 10px; */
  margin-top: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  /* justify-content: flex-start; */
  justify-content: center;
  @media (min-width: 340px) {
    /* padding-left: 20px; */
  }
  /* padding-left */
  @media (min-width: 768px) {
    display: block;
    width: 100%;
    margin-top: -32px;
  }
`;

const Image = styled.div`
  /* background-color: #fff; */
  img {
    border: 1px solid ${theme.color.border.primary};
    box-shadow: 0 1px 0 ${theme.color.shadow.small};
    aspect-ratio: 260 /260;
    border-radius: 50%;
    line-height: 1;
    width: 100%;
    vertical-align: middle;
    display: inline-block;
    overflow: hidden;
  }
  width: 16.66667%;
  margin-right: 16px;
  @media (min-width: 768px) {
    width: 100%;
    margin-right: 0;
  }
`;

const Body = styled.div`
  /* background-color: dodgerblue; */
  .head {
    padding: 16px 0;
    line-height: 1;
    .name {
      /* background-color: springgreen; */
      /* font-size: 26px; */
      display: block;
      font-size: 23px;
      font-weight: 400;
      line-height: 1.25;
      overflow: hidden;
      margin-bottom: 5px;
      /* text-align: center; */
      @media (min-width: 544px) {
        /* background-color: yellow; */
        font-size: 26px;
      }
      @media (min-width: 768px) {
        /* background-color: dodgerblue; */
        font-size: 19px;
        text-align: center;
      }
      @media (min-width: 1024px) {
        /* background-color: orangered; */
        font-size: 26px;
        text-align: center;
      }
      /* @media (min-width: 1024px) {
        background-color: springgreen;
        font-size: 26px;
      } */
    }
    .role {
      display: block;
      font-size: 20px;
      font-style: normal;
      font-weight: 300;
      line-height: 24px;
      /* background-color: springgreen; */

      /* background-color: fuchsia; */
      /* @media (min-width: 768px) {
        font-size: 18px;
      } */
      @media (min-width: 544px) {
        /* background-color: yellow; */
        font-size: 23px;
      }
      @media (min-width: 768px) {
        /* background-color: dodgerblue; */
        font-size: 16px;
        text-align: center;
      }
      @media (min-width: 1024px) {
        /* background-color: orangered; */
        font-size: 23px;
        text-align: center;
      }
    }
  }
  @media (max-width: 767px) {
    /* flex-grow: 1; */
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
            <SiJavascript size="1rem" color={theme.color.jsLogo} />
            &nbsp;Fullstack Development
          </span>
        </div>
      </Body>
    </Container>
  );
};

export default InfoCard;
