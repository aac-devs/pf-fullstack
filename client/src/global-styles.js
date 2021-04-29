import { createGlobalStyle } from 'styled-components';
import theme from './light-theme';

const GlobalStyles = createGlobalStyle`
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
  @media (min-width: 544px) {
    /* background-color: ${theme.color.bg.primary}; */
  }
}
#root{
  position: relative;
  width: 100%;
  min-height: 100%;
  background-color: pink;
}
`;

export default GlobalStyles;
