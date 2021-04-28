import React from 'react';
import styled from 'styled-components';
import { ImLocation } from 'react-icons/im';

const Container = styled.div`
  /* background-color: green; */
  display: flex;
  flex-direction: column;

  .note {
    /* background-color: orangered; */
    font-size: 18px;
    overflow: hidden;
    margin-top: 4px;
    margin-bottom: 8px;
    /* @media (max-width: 767px) {
    font-size: 16px;
    } */

    @media (min-width: 544px) {
      /* background-color: yellow; */
      margin-top: 8px;
      margin-bottom: 8px;
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
  .country {
    font-size: 16px;
    font-weight: 600;
    /* background-color: deepskyblue; */

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
`;

const DescriptionCard = () => {
  return (
    <Container>
      <div className="note">Always learning and ready for new challenges.</div>
      <div className="country">
        <ImLocation color="red" />
        &nbsp;Argentina
      </div>
    </Container>
  );
};

export default DescriptionCard;
