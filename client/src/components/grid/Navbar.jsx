import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IoInvertModeOutline, IoInvertModeSharp } from 'react-icons/io5';
// import { VscColorMode } from 'react-icons/vsc';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';
import theme from '../../theme';

// import { ligthColor } from '../../global-styles';

/* color: ${ligthColor}; */
const Container = styled.div`
  /* background-color: wheat; */
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;

  .mode-lang {
    /* background-color: lime; */
    display: flex;
    justify-items: space-between;
  }
`;

const Brand = styled.div`
  /* background-color: purple; */
  /* text-decoration: none; */
  font-size: 32px;
  /* font-weight: 600; */
  font-family: 'Poppins', sans-serif;
`;

/* color: ${ligthColor}; */
const Lang = styled.div`
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  overflow: hidden;
  height: 32px;
  width: 32px;
  border-radius: 50%;
  cursor: pointer;
`;

const Mode = styled.div`
  /* background-color: red; */
  cursor: pointer;
  margin-right: 20px;
`;

const Navbar = () => {
  const [engLang, setEngLang] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  // const darkTheme = false;
  // const engLang = false;
  const spaImage =
    'https://res.cloudinary.com/aac-devs-data/image/upload/v1619578851/portfolio/spain_esrivj.png';
  const engImage =
    'https://res.cloudinary.com/aac-devs-data/image/upload/v1619578843/portfolio/england_pkyhvp.png';

  let toolTipLang = '';
  let toolTipMode = '';
  if (engLang) {
    toolTipLang = 'Cambiar a Español';
    toolTipMode = darkMode ? 'Change to light mode' : 'Change to dark mode';
  } else {
    toolTipLang = 'Change to English';
    toolTipMode = darkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro';
  }

  return (
    <Container>
      <Brand>aac-devs</Brand>

      <div className="mode-lang">
        <Tippy
          interactiveBorder={20}
          delay={100}
          placement="left"
          content={
            <span style={{ color: `${theme.color.text.language}` }}>
              {toolTipMode}
            </span>
          }
          theme="light"
        >
          <Mode onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? (
              <IoInvertModeSharp
                size="32px"
                style={{ verticalAlign: 'middle' }}
              />
            ) : (
              <IoInvertModeOutline
                size="32px"
                style={{ verticalAlign: 'middle' }}
              />
            )}
          </Mode>
        </Tippy>

        {/* <VscColorMode /> */}
        <Tippy
          interactiveBorder={20}
          delay={100}
          placement="left"
          content={
            <span style={{ color: `${theme.color.text.language}` }}>
              {toolTipLang}
            </span>
          }
          theme="light"
        >
          <Lang
            image={engLang ? engImage : spaImage}
            onClick={() => setEngLang(!engLang)}
          />
        </Tippy>
      </div>
    </Container>
  );
};

export default Navbar;
