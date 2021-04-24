import React from 'react';
import Viewport from './components/grid/Viewport';
// import { TotalScreen } from './components';

import { GlobalStyles } from './global-styles';
// import AppRouter from './routes/app.routes';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Viewport />
      {/* <AppRouter /> */}
    </>
  );
};

export default App;
// {/* <TotalScreen /> */}
