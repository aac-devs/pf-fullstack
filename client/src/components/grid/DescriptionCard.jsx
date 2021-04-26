import React from 'react';
import styled from 'styled-components';
import { ImLocation } from 'react-icons/im';

import { textoColor } from '../../global-styles';

const Container = styled.div`
  /* background-color: pink; */
  display: flex;
  flex-direction: column;
  color: ${textoColor};

  .note {
    /* background-color: orangered; */
    margin-bottom: 16px;
    overflow: hidden;
    font-size: 16px;
    @media (max-width: 767px) {
      font-size: 14px;
      margin-top: 8px;
    }
  }
  .country {
    font-size: 14px;
    font-weight: 600;
    /* background-color: deepskyblue; */
  }
`;

const DescriptionCard = () => {
  return (
    <Container>
      <div className="note">Always learning and ready for new challenges.</div>
      <div className="country">
        {/* <i className="fas fa-map-marker-alt" /> */}
        <ImLocation color="red" />
        &nbsp;Argentina
      </div>
    </Container>
  );
};

export default DescriptionCard;
