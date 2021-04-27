import React from 'react';
import styled from 'styled-components';
import { SiJavascript } from 'react-icons/si';
import theme from '../../theme';

const Container = styled.div`
  /* background-color: blue; */
  display: block;
  width: 100%;
  margin-top: -32px;

  @media (max-width: 767px) {
    margin-top: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

const Image = styled.div`
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
  @media (max-width: 767px) {
    width: 16.66667%;
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
      font-size: 26px;
      font-weight: 400;
      line-height: 1.25;
      overflow: hidden;
      margin-bottom: 5px;
      @media (max-width: 767px) {
      }
    }
    .role {
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
            <SiJavascript size="1rem" color={theme.color.jsLogo} />
            &nbsp;Fullstack Development
          </span>
        </div>
      </Body>
    </Container>
  );
};

export default InfoCard;
