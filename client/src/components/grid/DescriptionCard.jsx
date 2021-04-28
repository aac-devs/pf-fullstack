import React from 'react';
import styled from 'styled-components';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';
import { ImLocation } from 'react-icons/im';
import { SiLinkedin, SiGithub } from 'react-icons/si';
// import { DiGithubBadge } from 'react-icons/di';
// import { GrDocumentPdf } from 'react-icons/gr';
import { VscFilePdf } from 'react-icons/vsc';
import theme from '../../theme';

const Container = styled.div`
  /* background-color: green; */
  /* display: flex; */
  /* flex-direction: column; */

  .note {
    /* background-color: orangered; */
    font-size: 18px;
    overflow: hidden;
    margin-top: 4px;
    margin-bottom: 16px;
    /* @media (max-width: 767px) {
    font-size: 16px;
    } */

    @media (min-width: 544px) {
      /* background-color: yellow; */
      margin-top: 8px;
      /* margin-bottom: 8px; */
      font-size: 21px;
    }
    @media (min-width: 768px) {
      /* background-color: dodgerblue; */
      margin-top: 0;
      font-size: 16px;
      /* text-align: center; */
    }
    @media (min-width: 1024px) {
      /* background-color: orangered; */
      font-size: 21px;
      margin-top: 0;
      /* text-align: center; */
    }
  }

  .country-networks {
    /* background-color: springgreen; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    .country {
      font-size: 16px;
      font-weight: 600;
      /* background-color: deepskyblue; */
      /* margin-bottom: 8px; */

      @media (min-width: 544px) {
        /* background-color: yellow; */
        /* margin-top: 8px; */
        font-size: 19px;
      }
      @media (min-width: 768px) {
        /* background-color: dodgerblue; */
        /* margin-top: 0; */
        font-size: 14px;
        /* text-align: center; */
      }
      @media (min-width: 1024px) {
        /* background-color: orangered; */
        font-size: 19px;
        /* margin-top: 0; */
        /* text-align: center; */
      }
    }
    .networks {
      background-color: ${theme.color.bg.tertiary};
      /* background-color: yellow; */
      border: 1px solid ${theme.color.border.primary};
      display: inline-block;
      padding: 5px 10px 8px 10px;
      border-radius: 6px;
      width: 100px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      a {
        color: ${theme.color.text.primary};
        /* cursor: pointer; */
        /* color: yellow; */
      }
    }
  }
`;

const DescriptionCard = () => {
  const darkTheme = true;

  return (
    <Container>
      <div className="note">Always learning and ready for new challenges.</div>
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
                Go to LinkedIn
              </span>
            }
            theme={darkTheme && 'light'}
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
                Open Repository
              </span>
            }
            theme={darkTheme && 'light'}
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
                Open CV
              </span>
            }
            theme={darkTheme && 'light'}
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
