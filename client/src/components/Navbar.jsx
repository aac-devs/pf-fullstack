import React from 'react';
import styled from 'styled-components';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';
import LangSwitch from './switches/LangSwitch';
import ModeSwitch from './switches/ModeSwitch';

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  .mode-lang {
    display: flex;
    align-items: center;
  }
`;

const Brand = styled.div`
  font-size: 32px;
  font-family: 'Poppins', sans-serif;
`;

const Navbar = () => {
  return (
    <Container>
      <Brand>aac-devs</Brand>
      <div className="mode-lang">
        <ModeSwitch />
        <LangSwitch />
      </div>
    </Container>
  );
};

export default Navbar;
