import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { SiJavascript } from 'react-icons/si';
import { useSelector } from 'react-redux';

const Container = styled.div`
  margin-top: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (min-width: 768px) {
    justify-content: center;
    display: block;
    width: 100%;
    margin-top: -32px;
  }
`;

const Image = styled.div`
  img {
    border: 1px solid ${(props) => props.theme.color.border.primary};
    box-shadow: 0 1px 0 ${(props) => props.theme.color.shadow.small};
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
  .head {
    padding: 16px 0;
    line-height: 1;
    .name {
      display: block;
      font-size: 23px;
      font-weight: 400;
      line-height: 1.25;
      overflow: hidden;
      margin-bottom: 5px;
      @media (min-width: 360px) {
        font-size: 26px;
      }
      @media (min-width: 400px) {
        font-size: 29px;
      }
      @media (min-width: 544px) {
        font-size: 32px;
      }
      @media (min-width: 768px) {
        font-size: 19px;
        text-align: center;
      }
      @media (min-width: 896px) {
        font-size: 22px;
      }
      @media (min-width: 1024px) {
        font-size: 26px;
      }
      @media (min-width: 1152px) {
        font-size: 29px;
      }
      @media (min-width: 1280px) {
        font-size: 32px;
      }
      @media (min-width: 1408px) {
        font-size: 35px;
      }
      @media (min-width: 1536px) {
        font-size: 38px;
      }
    }
    .role {
      display: block;
      font-size: 16px;
      font-style: normal;
      font-weight: 300;
      line-height: 24px;
      @media (min-width: 360px) {
        font-size: 18px;
      }
      @media (min-width: 400px) {
        font-size: 20px;
      }
      @media (min-width: 544px) {
        font-size: 22px;
      }
      @media (min-width: 768px) {
        font-size: 13px;
        text-align: center;
      }
      @media (min-width: 896px) {
        font-size: 15px;
      }
      @media (min-width: 1024px) {
        font-size: 18px;
      }
      @media (min-width: 1152px) {
        font-size: 20px;
      }
      @media (min-width: 1280px) {
        font-size: 23px;
      }
      @media (min-width: 1408px) {
        font-size: 25px;
      }
      @media (min-width: 1536px) {
        font-size: 27px;
      }
    }
  }
`;

const InfoCard = () => {
  const { language } = useSelector((state) => state.ui);
  const theme = useContext(ThemeContext);

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
            {language === 'eng'
              ? ' Fullstack Web Development'
              : ' Desarrollo Web Fullstack'}
          </span>
        </div>
      </Body>
    </Container>
  );
};

export default InfoCard;
