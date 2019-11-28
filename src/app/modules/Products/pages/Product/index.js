import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import ProductForm from "app/modules/Products/components/ProductForm";
import { fetchProductCreator, removeProduct } from "./action/product";
import { Spin } from "antd";

function mapStateToProps(state) {
  return {
    product: state.ProductReducer.product,
    loading: state.loadingReducer.loading
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchProductCreator: id => dispatch(fetchProductCreator(id)),
    removeProduct: () => dispatch(removeProduct())
  };
}

const Product = props => {
  const { fetchProductCreator, product, removeProduct, loading } = props;
  const {
    match: { params }
  } = props;

  useEffect(() => {
    fetchProductCreator(params.productId);
    return () => {
      removeProduct();
    };
  }, [fetchProductCreator, params, removeProduct]);
  return (
    <div>
      <Spin spinning={loading}>
        <ProductForm product={product} />
      </Spin>
    </div>
  );
};

const connectedProduct = connect(mapStateToProps, mapDispatchToProps)(Product);

export default withRouter(connectedProduct);
