import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import ProductForm from 'app/modules/Products/components/ProductForm';
import { fetchProductCreator } from './action/product';

function mapStateToProps(state) {
  return {
    product: state.ProductReducer.product
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchProductCreator: id => dispatch(fetchProductCreator(id))
  };
}

const Product = props => {
  const { fetchProductCreator, product } = props;
  const {
    match: { params }
  } = props;

  useEffect(() => {
    fetchProductCreator(params.productId);
  }, [fetchProductCreator, params]);
  return <ProductForm product={product} />;
};

const connectedProduct = connect(mapStateToProps, mapDispatchToProps)(Product);

export default withRouter(connectedProduct);
