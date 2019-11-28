import React, { useState } from 'react';
import { connect } from 'react-redux';
import { uploadProduct, updateProduct } from './actions/index';
import { uploadImage } from 'app/modules/Products/services/firestore';
import {
  Form,
  Input,
  Button,
  DatePicker,
  InputNumber,
  Select,
  Icon
} from 'antd';
import { Editor } from '@tinymce/tinymce-react';
import classes from './styles.module.css';
import moment from 'moment';

function mapDispatchToProps(dispatch) {
  return {
    uploadProduct: product => dispatch(uploadProduct(product)),
    updateProduct: data => dispatch(updateProduct(data))
  };
}

const { Option } = Select;

const ProductForm = props => {
  const { uploadProduct, product, updateProduct } = props;
  const { getFieldDecorator } = props.form;
  const [editorData, setEditorData] = useState('');
  const [image, setImage] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleUpload = e => {
    e.preventDefault();
    let obj = {};
    props.form.validateFields((err, values) => {
      if (!err) {
        const release_date =
          new Date(values.release_date['_d']) / (1000).toString();
        const release_year = new Date(values.release_date['_d']).getFullYear();
        obj = {
          ...values,
          thumbnail: image || product.thumbnail,
          description: editorData,
          release_date,
          release_year,
          total_sold: 0
        };
        if (product) {
          updateProduct({ data: obj, id: product.id });
        } else {
          uploadProduct({
            ...obj
          });
        }
      }
    });
  };

  const handleEditorChange = e => {
    setEditorData(e.target.getContent());
  };

  const handleUploadImage = async e => {
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

  const putInitialValue = type => {
    if (product) {
      if (type === 'release_date') {
        return product[type] * 1000;
      }
      return product[type] || undefined;
    } else {
      return undefined;
    }
  };

  return (
    <div>
      <Form onSubmit={handleUpload}>
        <Form.Item label="Tên sản phẩm">
          {getFieldDecorator('name', { initialValue: putInitialValue('name') })(
            <Input type="text" />
          )}
        </Form.Item>
        <Form.Item label="Mô tả">
          {getFieldDecorator('description', {
            initialValue: putInitialValue('description')
          })(
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
                toolbar: `undo redo | formatselect | bold italic backcolor |
             alignleft aligncenter alignright alignjustify |
             bullist numlist outdent indent | removeformat | help`
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
              {getFieldDecorator('retail_price', {
                initialValue: putInitialValue('retail_price')
              })(
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
              {getFieldDecorator('sell_price', {
                initialValue: putInitialValue('sell_price')
              })(
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
              {getFieldDecorator('buy_price', {
                initialValue: putInitialValue('buy_price')
              })(
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
              {getFieldDecorator('release_date', {
                initialValue: moment(putInitialValue('release_date'))
              })(
                <DatePicker
                  className={classes.InlineFormControl}
                  placeholder="Chọn ngày ra mắt"
                  format="DD/MM/YYYY"
                />
              )}
            </Form.Item>

            <Form.Item label="Hãng" className={classes.InlineFormControl}>
              {getFieldDecorator('brand', {
                initialValue: putInitialValue('brand')
              })(
                <Select
                  placeholder="Chọn hãng sản xuất"
                  className={classes.InlineFormControl}
                >
                  {brandsRender}
                </Select>
              )}
            </Form.Item>

            <Form.Item label="Giới tính" className={classes.InlineFormControl}>
              {getFieldDecorator('gender', {
                initialValue: putInitialValue('gender')
              })(
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
              {getFieldDecorator('status', {
                initialValue: putInitialValue('status')
              })(
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
              {getFieldDecorator('available_size', {
                initialValue: putInitialValue('available_size')
              })(
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

        <Form.Item label="Ảnh sản phẩm">
          {getFieldDecorator('thumbnail')(
            <>
              <input
                type="file"
                name="productImage"
                id="productImage"
                hidden
                onChange={handleUploadImage}
              />
              <Button>
                <label htmlFor="productImage" className={classes.UploadLabel}>
                  <Icon type="upload" className={classes.UploadIcon} /> Click to
                  Upload
                </label>
              </Button>
              <img
                src={
                  image
                    ? image
                    : product
                    ? product['thumbnail']
                    : 'https://via.placeholder.com/200'
                }
                alt="product-thumbnail"
                className={classes.Thumbnail}
              />
            </>
          )}
        </Form.Item>

        <Button type="primary" htmlType="submit" disabled={isDisabled}>
          Upload
        </Button>
      </Form>
    </div>
  );
};

const enhancesProductForm = Form.create({ name: 'normal_login' })(ProductForm);

const connectedProductForm = connect(
  null,
  mapDispatchToProps
)(enhancesProductForm);

export default connectedProductForm;
