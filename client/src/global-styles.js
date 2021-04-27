import styled, { createGlobalStyle } from 'styled-components';
import theme from './theme';
// import theme from './theme';

// rgba(240, 246, 252, 0.1)
// rgba(f0, f6, fc, 0.1)

// export const darkColor = '#0d1117';
// export const mediumColor = '#161b22';
// export const borderColor = '#30363d';
// export const shadowColor = '#f0f6fc19';
// export const textoColor = '#c9d1d9';
// export const textoSecColor = '#8b949e';
// export const linkColor = '#58a6ff';
// export const inputBorderColor = '#21262d';
// export const inputFocusBorderColor = '#388bdf';
// export const buttonBackgroundColor = '#238636';
// export const buttonBorderColor = '#2ea043';
// export const buttonHoverColor = '#3eb053';

export const ligthColor = '#eeeeee';
export const orangeColor = '#ff5722';
export const blueColor = '#2196f3';

export const backgroundColor = {
  primary: {
    normal: '#212121',
    light: '#484848',
    dark: '#000000',
  },
  secondary: {
    normal: '#2962ff',
    light: '#768fff',
    dark: '#0039cb',
  },
};

// export const textColor = {
//   primary: {
//     normal: '#ffffff',
//     light: '#ffffff',
//     dark: '#ffffff',
//   },
//   secondary: {
//     normal: '#ffffff',
//     light: '#000000',
//     dark: '#ffffff',
//   },
// };

export const BackScreen = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
`;

export const GlobalStyles = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body, html {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: 'Open Sans', sans-serif;
  background-attachment: fixed;
  color: ${theme.color.text.primary};
  background-color: ${theme.color.bg.canvas};
  @media (min-width: 544px) {
    background-color: ${theme.color.bg.primary};
  }
}

#root{
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  /* height: 100%; */
  /* background-color: pink; */
}

.selected{
  transform: scale(1.03);
    /* background-color: ${ligthColor}; */
  a{
    color: ${ligthColor};
  /* background-color: ${ligthColor}; */

  }
}

.non-selected{
  transition: background-color 0.8s;
  a{
  color: ${ligthColor};

  }

  &:hover {
    background-color: ${orangeColor};
  }

}




`;

// background-color: ${theme.color.dark.background.strong};
/* background-color: ${darkColor}; */
