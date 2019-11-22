import React from 'react';
import { withRouter } from 'react-router-dom';
import Permission from 'app/services/Permission';
import { compose } from 'redux';

const NewProduct = () => <div>New Product run</div>;
const enhancedNewProduct = compose(withRouter, Permission)(NewProduct);

export default enhancedNewProduct;
