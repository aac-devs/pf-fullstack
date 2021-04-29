import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';
import { IconContext } from 'react-icons';
import Footer from './Footer';
import Main from './main/Main';
import Navbar from './Navbar';
import lightTheme from '../light-theme';
import darkTheme from '../dark-theme';

const Container = styled.div`
  height: 100%;
  min-height: 100%;
  .viewport-header {
    background-color: ${(props) => props.theme.color.header.bg};
    color: ${(props) => props.theme.color.header.text};
    height: 64px;
    min-height: 64px;
  }
  .viewport-main {
    margin-top: 24px;
    flex-grow: 1;
    @media (max-width: 767px) {
      padding: 0 12px;
      margin-top: 0;
    }
  }
  .viewport-footer {
    font-size: 12px;
    padding: 40px;
    margin-top: 40px;
    text-align: center;
  }
`;

const Viewport = () => {
  const { mode } = useSelector((state) => state.ui);
  useEffect(() => {
    const root = window.document.getElementById('root');
    const bg =
      mode === 'dark'
        ? darkTheme.color.bg.primary
        : lightTheme.color.bg.primary;
    const color =
      mode === 'dark'
        ? darkTheme.color.text.primary
        : lightTheme.color.text.primary;
    root.style.backgroundColor = bg;
    root.style.color = color;
  }, [mode]);

  return (
    <ThemeProvider theme={mode === 'dark' ? darkTheme : lightTheme}>
      <Container>
        <IconContext.Provider
          value={{
            style: {
              size: '2rem',
            },
          }}
        >
          <div className="viewport-header">
            <Navbar />
          </div>
          <div className="viewport-main">
            <Main />
          </div>
          <div className="viewport-footer">
            <Footer />
          </div>
        </IconContext.Provider>
      </Container>
    </ThemeProvider>
  );
};

export default Viewport;
