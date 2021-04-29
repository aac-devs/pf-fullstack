import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { FaSun, FaMoon } from 'react-icons/fa';
import { changeToDarkMode, changeToLightMode } from '../actions/ui.actions';

const Container = styled.div`
  background-color: ${(props) => props.theme.color.switch.dark};
  width: 45px;
  height: 24px;
  position: relative;
  border-radius: 17px;
  border: 2px solid ${(props) => props.theme.color.switch.border};
  cursor: pointer;
  margin-right: 20px;

  .light {
    position: absolute;
    background-color: lightblue;
    border-radius: 50%;
    height: 32px;
    width: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    top: -6px;
    left: -6px;
    color: ${(props) => props.theme.color.switch.dark};
    filter: drop-shadow(0px 0px 30px white);
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
    /* filter: brightness(70%); */
  }
  .dark {
    position: absolute;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 1) 0%,
      rgba(10, 37, 130, 1) 59%
    );
    border-radius: 50%;
    height: 32px;
    width: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    top: -6px;
    right: -6px;
    color: ${(props) => props.theme.color.switch.light};
    /* filter: brightness(70%); */

    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  }
`;

const ModeSwitch = () => {
  const dispatch = useDispatch();
  const { mode } = useSelector((state) => state.ui);
  const theme = useContext(ThemeContext);
  const colore =
    mode === 'dark' ? theme.color.switch.light : theme.color.switch.dark;

  const handleChangeMode = () => {
    if (mode === 'dark') {
      dispatch(changeToLightMode());
    } else {
      dispatch(changeToDarkMode());
    }
  };

  return (
    <Container color={colore} onClick={handleChangeMode}>
      {mode === 'dark' ? (
        <div className="dark">
          <FaMoon
            color="lightblue"
            size="22px"
            style={{ verticalAlign: 'middle' }}
          />
        </div>
      ) : (
        <div className="light">
          <FaSun color="gold" size="25px" style={{ verticalAlign: 'middle' }} />
        </div>
      )}
    </Container>
  );
};

export default ModeSwitch;
