import { COLLAPSED_HANDLER } from 'app/types';

const initialState = {
  collapsed: true
};

const changeLayoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case COLLAPSED_HANDLER:
      return { ...state, collapsed: action.payload };
    default:
      return state;
  }
};

export default changeLayoutReducer;
