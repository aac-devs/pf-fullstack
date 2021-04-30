import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { changeToEnglish, changeToSpanish } from '../../actions/ui.actions';

const Container = styled.div`
  background-color: ${(props) => props.theme.color.switch.bg};
  width: 26px;
  height: 40px;
  position: relative;
  border-radius: 17px;
  border: 2px solid ${(props) => props.theme.color.switch.border};
  cursor: pointer;
  div {
    border-radius: 50px;
    position: absolute;
    background-size: cover;
    background-position: top;
    background-repeat: no-repeat;
  }
`;

const Spanish = styled.div`
  visibility: ${(props) => (props.visible ? 'hidden' : 'visible')};
  left: -5px;
  bottom: -5px;
  height: 32px;
  width: 32px;
  /* background-color: red; */
  background-image: url(${(props) => props.url});
`;
const English = styled.div`
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
  left: -4px;
  top: -4px;
  height: 30px;
  width: 30px;
  /* background-color: blue; */
  background-image: url(${(props) => props.url});
`;

const LangSwitch = () => {
  const dispatch = useDispatch();
  const { language } = useSelector((state) => state.ui);
  const handleChangeLanguage = () => {
    if (language === 'eng') {
      dispatch(changeToSpanish());
      localStorage.setItem('language', 'esp');
    } else {
      dispatch(changeToEnglish());
      localStorage.setItem('language', 'eng');
    }
  };
  return (
    <Container onClick={handleChangeLanguage}>
      <Spanish
        visible={language === 'eng'}
        url="https://res.cloudinary.com/aac-devs-data/image/upload/v1619578851/portfolio/spain_esrivj.png"
      />
      <English
        visible={language === 'eng'}
        url="https://res.cloudinary.com/aac-devs-data/image/upload/v1619578843/portfolio/england_pkyhvp.png"
      />
    </Container>
  );
};

export default LangSwitch;
