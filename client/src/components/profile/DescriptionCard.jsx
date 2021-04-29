import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';
import { ImLocation } from 'react-icons/im';
import { SiLinkedin, SiGithub } from 'react-icons/si';
import { VscFilePdf } from 'react-icons/vsc';
import { useSelector } from 'react-redux';

const Container = styled.div`
  .note {
    font-size: 16px;
    overflow: hidden;
    margin-top: 4px;
    margin-bottom: 16px;
    @media (min-width: 360px) {
      font-size: 19px;
    }
    @media (min-width: 400px) {
      font-size: 21px;
    }
    @media (min-width: 544px) {
      font-size: 23px;
    }
    @media (min-width: 768px) {
      font-size: 14px;
      margin-top: 0;
    }
    @media (min-width: 896px) {
      font-size: 16px;
    }
    @media (min-width: 1024px) {
      font-size: 19px;
    }
    @media (min-width: 1152px) {
      font-size: 21px;
    }
    @media (min-width: 1280px) {
      font-size: 24px;
    }
    @media (min-width: 1408px) {
      font-size: 26px;
    }
    @media (min-width: 1536px) {
      font-size: 28px;
    }
  }
  .country-networks {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .country {
      font-size: 16px;
      font-weight: 600;
      @media (min-width: 544px) {
        font-size: 19px;
      }
      @media (min-width: 768px) {
        font-size: 14px;
      }
      @media (min-width: 1024px) {
        font-size: 19px;
      }
    }
    .networks {
      background-color: ${(props) => props.theme.color.bg.tertiary};
      border: 1px solid ${(props) => props.theme.color.border.primary};
      display: inline-block;
      padding: 5px 10px 8px 10px;
      border-radius: 6px;
      width: 100px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      a {
        color: ${(props) => props.theme.color.text.primary};
      }
    }
  }
`;

const DescriptionCard = () => {
  const { mode, language } = useSelector((state) => state.ui);
  const theme = useContext(ThemeContext);
  return (
    <Container>
      <div className="note">
        {language === 'eng'
          ? 'Always learning and ready for new challenges.'
          : 'Siempre aprendiendo y listo para nuevos desafíos.'}
      </div>
      <div className="country-networks">
        <div className="country">
          <ImLocation color="red" />
          &nbsp;Argentina
        </div>
        <div className="networks">
          <Tippy
            interactiveBorder={20}
            delay={100}
            placement="top"
            content={
              <span style={{ color: `${theme.color.bg.primary}` }}>
                {language === 'eng' ? 'Go to LinkedIn' : 'Ir a LinkedIn'}
              </span>
            }
            theme={mode === 'dark' && 'light'}
          >
            <a href="/">
              <SiLinkedin size="18px" style={{ verticalAlign: 'middle' }} />
            </a>
          </Tippy>
          <Tippy
            interactiveBorder={20}
            delay={100}
            placement="top"
            content={
              <span style={{ color: `${theme.color.bg.primary}` }}>
                {language === 'eng' ? 'Open Repository' : 'Abrir Repositorio'}
              </span>
            }
            theme={mode === 'dark' && 'light'}
          >
            <a href="/">
              <SiGithub size="18px" style={{ verticalAlign: 'middle' }} />
            </a>
          </Tippy>
          <Tippy
            interactiveBorder={20}
            delay={100}
            placement="top"
            content={
              <span style={{ color: `${theme.color.bg.primary}` }}>
                {language === 'eng' ? 'Open CV' : 'Abrir CV'}
              </span>
            }
            theme={mode === 'dark' && 'light'}
          >
            <a href="/">
              <VscFilePdf size="19px" style={{ verticalAlign: 'middle' }} />
            </a>
          </Tippy>
        </div>
      </div>
    </Container>
  );
};

export default DescriptionCard;
