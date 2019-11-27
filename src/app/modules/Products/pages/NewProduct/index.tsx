import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { uploadProduct } from './actions/index';
import { uploadImage } from 'app/modules/Products/services/firestore';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

function mapDispatchToProps(dispatch: any) {
  return { uploadProduct: (product: any) => dispatch(uploadProduct(product)) };
}

const NewProduct = (props: any) => {
  const { uploadProduct } = props;
  const { getFieldDecorator } = props.form;

  const [image, setImage] = useState('');
  const handleUpload = (e: any) => {
    e.preventDefault();
    let obj = {};
    props.form.validateFields((err: any, values: any) => {
      if (!err) {
        obj = { ...values };
        console.log(obj);
      }
    });

    // uploadProduct({
    //   name: 'Cody',
    //   thumbnail: image
    // });
  };

  const handleUploadImage = async (e: any) => {
    if (e.target.files[0]) {
      const url = await uploadImage(e.target.files[0]);
      setImage(url);
    }
  };

  return (
    <div>
      <Form onSubmit={handleUpload}>
        <Form.Item label="Tên sản phẩm">
          {getFieldDecorator('name')(<Input type="text" />)}
        </Form.Item>
        <Form.Item label="Ngày ra mắt">
          {getFieldDecorator('release_date')(<Input type="text" />)}
        </Form.Item>
        <button type="submit">Upload</button>
        <input type="file" onChange={handleUploadImage} />
      </Form>
    </div>
  );
};

const enhancesNewProduct = Form.create({ name: 'normal_login' })(NewProduct);

const connectedNewProduct = connect(
  null,
  mapDispatchToProps
)(enhancesNewProduct);

export default connectedNewProduct;
