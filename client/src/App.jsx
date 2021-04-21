import React from 'react';
import { GlobalStyles } from './global-styles';
import AppRouter from './routes/app.routes';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <AppRouter />
    </>
  );
};

export default App;
