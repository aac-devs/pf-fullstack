const initialState = {
  loading: false,
  error: null,
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case 1:
      return initialState;

    default:
      return state;
  }
};

export default uiReducer;
