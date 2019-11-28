import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import ProductForm from 'app/modules/Products/components/ProductForm';
import { fetchProductCreator, removeProduct } from './action/product';
import { Spin } from 'antd';

function mapStateToProps(state) {
  return {
    product: state.ProductReducer.product
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchProductCreator: id => dispatch(fetchProductCreator(id)),
    removeProduct: () => dispatch(removeProduct())
  };
}

const Product = props => {
  const {
    fetchProductCreator,
    product,
    removeProduct,
    loading,
    setLoading
  } = props;
  const {
    match: { params }
  } = props;

  useEffect(() => {
    fetchProductCreator(params.productId);
    return () => {
      removeProduct();
    };
  }, [fetchProductCreator, params, removeProduct, setLoading]);
  return <ProductForm product={product} />;
};

const connectedProduct = connect(mapStateToProps, mapDispatchToProps)(Product);

export default withRouter(connectedProduct);
