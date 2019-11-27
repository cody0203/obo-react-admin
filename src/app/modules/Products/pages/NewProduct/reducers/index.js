const initialState = {
  newProduct: {}
};

const newProductReducer = (state = initialState, action) => {
  if (action.type === 'DATA_LOADED') {
    return state;
  }
  return state;
};

export default newProductReducer;
