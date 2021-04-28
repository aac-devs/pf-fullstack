const initialState = {
  name: '',
  email: '',
  message: '',
  resolve: '',
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case 1:
      return initialState;

    default:
      return state;
  }
};

export default messageReducer;
