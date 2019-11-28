import React from 'react';
import { withRouter } from 'react-router-dom';
import ProductForm from 'app/modules/Products/components/ProductForm/';

const NewProduct = (props: any) => {
  return <ProductForm />;
};

export default withRouter(NewProduct);
