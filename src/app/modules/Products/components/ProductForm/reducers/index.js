const initialState = {
  newProduct: {}
};

const ProductFormReducer = (state = initialState, action) => {
  if (action.type === 'DATA_LOADED') {
    return state;
  }
  return state;
};

export default ProductFormReducer;
