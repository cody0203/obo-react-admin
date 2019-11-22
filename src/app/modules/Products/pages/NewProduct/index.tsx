import React from 'react';
import { withRouter } from 'react-router-dom';

const NewProduct = (props: any) => {
  console.log(props);
  return <div>New Product run</div>;
};

export default withRouter(NewProduct);
