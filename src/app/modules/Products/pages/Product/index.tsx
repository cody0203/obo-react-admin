import React from "react";

const Product = (props: any) => {
  const {
    match: { params }
  } = props;
  return <div>This is product {params.productId}</div>;
};

export default Product;
