import types from '../types/types';

const initialState = {
  mode: 'light', // dark | light
  language: 'eng', // eng | esp
  loading: false,
  error: null,
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ui.changeToLight:
      return {
        ...state,
        mode: 'light',
      };
    case types.ui.changeToDark:
      return {
        ...state,
        mode: 'dark',
      };
    case types.ui.changeToSpanish:
      return {
        ...state,
        language: 'esp',
      };
    case types.ui.changeToEnglish:
      return {
        ...state,
        language: 'eng',
      };

    default:
      return state;
  }
};

export default uiReducer;
