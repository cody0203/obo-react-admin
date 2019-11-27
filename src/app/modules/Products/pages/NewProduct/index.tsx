import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { uploadProduct } from './actions/index';
import { uploadImage } from 'app/modules/Products/services/firestore';
import { Form, Input, Button, DatePicker, InputNumber, Select } from 'antd';
import { Editor } from '@tinymce/tinymce-react';
import classes from './styles.module.css';

function mapDispatchToProps(dispatch: any) {
  return { uploadProduct: (product: any) => dispatch(uploadProduct(product)) };
}

const { Option } = Select;

const NewProduct = (props: any) => {
  const { uploadProduct } = props;
  const { getFieldDecorator } = props.form;

  const [editorData, setEditorData] = useState('');
  const [image, setImage] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleUpload = (e: any) => {
    e.preventDefault();
    let obj = {};

    props.form.validateFields((err: any, values: any) => {
      if (!err) {
        const release_date = new Date(values.release_date['_d'])
          .getTime()
          .toString();
        const release_year = new Date(values.release_date['_d']).getFullYear();
        console.log(release_year);
        obj = {
          ...values,
          thumbnail: image,
          description: editorData,
          release_date,
          release_year,
          total_sold: 0
        };
        uploadProduct({
          ...obj
        });
      }
    });
  };

  const handleEditorChange = (e: any) => {
    setEditorData(e.target.getContent());
  };

  const handleUploadImage = async (e: any) => {
    if (e.target.files[0]) {
      setIsDisabled(true);

      const url = await uploadImage(e.target.files[0]);
      setImage(url);
      setIsDisabled(false);
    }
  };

  const brands = ['Adidas', 'Asics', 'Converse', 'Nike', 'Vans'];
  const sizes = [
    38.5,
    39,
    40,
    40.5,
    41,
    42,
    42.5,
    43,
    44,
    44.5,
    45,
    45.5,
    46,
    47,
    47.5,
    48,
    48.5,
    49.5,
    50.5,
    51.5
  ];

  const brandsRender = brands.map(brand => {
    return (
      <Option value={brand} key={brand}>
        {brand}
      </Option>
    );
  });

  const sizesRender = sizes.map(size => {
    return (
      <Option value={size} key={size}>
        {size}
      </Option>
    );
  });

  return (
    <div>
      <Form onSubmit={handleUpload}>
        <Form.Item label="Tên sản phẩm">
          {getFieldDecorator('name')(<Input type="text" />)}
        </Form.Item>
        <Form.Item label="Mô tả">
          {getFieldDecorator('description')(
            <Editor
              apiKey="6ftbgayw1aznxtynwtmf25y3lxbfau6wien4tm2ullzlyyrz"
              init={{
                height: 500,
                menubar: false,
                plugins: [
                  'advlist autolink lists link image charmap print preview anchor',
                  'searchreplace visualblocks code fullscreen',
                  'insertdatetime media table paste code help wordcount'
                ],
                toolbar:
                  'undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help'
              }}
              onChange={handleEditorChange}
            />
          )}
        </Form.Item>

        <Form.Item>
          <div className={classes.FormGroup}>
            <Form.Item
              label="Giá bán của hãng"
              className={classes.InlineFormControl}
            >
              {getFieldDecorator('retail_price')(
                <InputNumber
                  className={classes.InlineFormControl}
                  formatter={value =>
                    `${value} ₫`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                  }
                />
              )}
            </Form.Item>
            <Form.Item
              label="Giá bán thấp nhất mặc định"
              className={classes.InlineFormControl}
            >
              {getFieldDecorator('sell_price')(
                <InputNumber
                  className={classes.InlineFormControl}
                  formatter={value =>
                    `${value} ₫`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                  }
                />
              )}
            </Form.Item>
            <Form.Item
              label="Giá bán cao nhất mặc định"
              className={classes.InlineFormControl}
            >
              {getFieldDecorator('buy_price')(
                <InputNumber
                  className={classes.InlineFormControl}
                  formatter={value =>
                    `${value} ₫`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                  }
                />
              )}
            </Form.Item>
          </div>
        </Form.Item>

        <Form.Item>
          <div className={classes.FormGroup}>
            <Form.Item
              label="Ngày ra mắt"
              className={classes.InlineFormControl}
            >
              {getFieldDecorator('release_date')(
                <DatePicker
                  className={classes.InlineFormControl}
                  placeholder="Chọn ngày ra mắt"
                />
              )}
            </Form.Item>

            <Form.Item label="Hãng" className={classes.InlineFormControl}>
              {getFieldDecorator('brand')(
                <Select
                  placeholder="Chọn hãng sản xuất"
                  className={classes.InlineFormControl}
                >
                  {brandsRender}
                </Select>
              )}
            </Form.Item>

            <Form.Item label="Giới tính" className={classes.InlineFormControl}>
              {getFieldDecorator('gender')(
                <Select
                  placeholder="Chọn giới tính"
                  className={classes.InlineFormControl}
                >
                  <Option value="Nam">Nam</Option>
                  <Option value="Nữ">Nữ</Option>
                </Select>
              )}
            </Form.Item>
          </div>
        </Form.Item>

        <Form.Item>
          <div className={classes.FormGroup}>
            <Form.Item label="Danh mục" className={classes.InlineFormControl}>
              {getFieldDecorator('status')(
                <Select
                  placeholder="Chọn danh mục"
                  className={classes.InlineFormControl}
                >
                  <Option value="Best Seller">Best Seller</Option>
                  <Option value="Staff Choose">Staff Choose</Option>
                  <Option value="Under Retails">Under Retails</Option>
                </Select>
              )}
            </Form.Item>

            <Form.Item label="Size" className={classes.InlineFormControl}>
              {getFieldDecorator('available_size')(
                <Select
                  mode="multiple"
                  placeholder="Chọn size hiện có"
                  className={classes.InlineFormControl}
                >
                  {sizesRender}
                </Select>
              )}
            </Form.Item>
          </div>
        </Form.Item>

        <Button type="primary" htmlType="submit" disabled={isDisabled}>
          Upload
        </Button>
        <Form.Item label="Ảnh sản phẩm">
          {getFieldDecorator('thumbnail')(
            <Input type="file" onChange={handleUploadImage} />
          )}
        </Form.Item>
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
