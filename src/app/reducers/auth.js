import { AUTH_HANDLER } from '../types';

const initialAuth = {
  isLogged: false
};

const authReducer = (state = initialAuth, action) => {
  switch (action.type) {
    case AUTH_HANDLER:
      return { ...state, isLogged: action.payload };
    default:
      return state;
  }
};

export default authReducer;
