import React from 'react';
import { withRouter } from 'react-router-dom';

const Product = (props: any) => {
  const {
    match: { params }
  } = props;
  console.log(params);
  return <div>This is product {params.productId} </div>;
};

export default withRouter(Product);
