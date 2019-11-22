import { AUTH_HANDLER } from '../types';

const initialAuth = {
  authStatus: {
    isLogged: false,
    role: null
  }
};

const authReducer = (state = initialAuth, action) => {
  switch (action.type) {
    case AUTH_HANDLER:
      return { ...state, authStatus: action.payload };
    default:
      return state;
  }
};

export default authReducer;
