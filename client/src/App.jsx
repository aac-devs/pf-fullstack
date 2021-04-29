import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import Viewport from './components/Viewport';
import GlobalStyles from './global-styles';

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Viewport />
    </Provider>
  );
};

export default App;
