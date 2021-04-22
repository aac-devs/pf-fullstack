import React from 'react';
import styled from 'styled-components';
import { textoColor } from '../../global-styles';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: ${textoColor};

  .note {
    /* background-color: orangered; */
    margin-bottom: 16px;
    overflow: hidden;
    font-size: 14px;
    @media (min-width: 768px) {
      font-size: 16px;
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
        <i className="fas fa-map-marker-alt" />
        &nbsp;&nbsp;Argentina
      </div>
    </Container>
  );
};

export default DescriptionCard;
