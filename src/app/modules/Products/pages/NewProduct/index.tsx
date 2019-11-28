import React from "react";
import { withRouter } from "react-router-dom";
import ProductForm from "app/modules/Products/components/ProductForm/";
import { connect } from "react-redux";
import { Spin } from "antd";

function mapStateToProps(state) {
  return {
    loading: state.loadingReducer.loading
  };
}

const NewProduct = (props: any) => {
  const { loading } = props;
  return (
    <div>
      <Spin spinning={loading}>
        <ProductForm />
      </Spin>
    </div>
  );
};

const enhancesNewProduct = connect(mapStateToProps)(NewProduct);

export default withRouter(enhancesNewProduct);
