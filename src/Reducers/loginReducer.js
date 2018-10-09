const initialState = {
  loginPending: false,
  logged: false,
  registerPage: false,
  user: {
    id: -1,
    name: '',
  },
  errorMessage: '',
};

const loggedUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER_DETAIL':
      return ({
        ...state,
        logged: true,
        user: action.payload.data,
        loginPending: !state.loginPending,
      });
    case 'TOGGLE_PAGE':
      return ({
        ...state,
        registerPage: !state.registerPage,
      });
    case 'LOGIN_PENDING':
      return ({
        ...state,
        loginPending: !state.loginPending,
      });
    case 'LOGOUT':
      return ({
        ...state,
        user: initialState.user,
        logged: false,
      });
    case 'ERROR_MESSAGE':
      return ({
        ...state,
        errorMessage: action.payload.data,
        loginPending: false,
      });
    default:
      return state;
  }
};

export default loggedUserReducer;
