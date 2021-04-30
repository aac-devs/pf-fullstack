import { combineReducers } from 'redux';
import dataReducer from './data.reducer';
import uiReducer from './ui.reducer';

const rootReducer = combineReducers({
  ui: uiReducer,
  data: dataReducer,
});

export default rootReducer;
