import React, { useEffect, useState } from "react";
import { Table, Icon } from "antd";
import { connect } from "react-redux";
import { FormattedNumber } from "react-intl";

import { fetchProducts } from "./actions/products";
import classes from "./styles.module.css";

function mapStateToProps(state: any) {
  return {
    products: state.productReducer.products,
    pagination: state.productReducer.pagination
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    fetchProducts: () => dispatch(fetchProducts())
  };
}

const ProductTable: React.FC = (props: any) => {
  // Initial Declaration
  const { fetchProducts, products, pagination } = props;
  // States

  // Life cycles
  useEffect(() => {
    fetchProducts();
  }, []);

  // Table render
  const columns = [
    {
      title: "Ảnh sản phẩm",
      dataIndex: "thumbnail",
      render: (thumbnail: string) => {
        return <img className={classes.thumbnail} src={thumbnail} />;
      }
    },
    {
      title: "Tên sản phẩm",
      dataIndex: "name"
    },
    {
      title: "Hãng",
      dataIndex: "brand",
      width: 100
    },
    {
      title: "Giá đặt bán thấp nhất",
      dataIndex: "sell_price",
      sorter: true,
      render: (sell_price: number) => (
        <FormattedNumber style="currency" currency="VND" value={sell_price} />
      )
    },
    {
      title: "Giá đặt mua cao nhất",
      dataIndex: "buy_price",
      sorter: true,
      render: (buy_price: number) => (
        <FormattedNumber style="currency" currency="VND" value={buy_price} />
      )
    },
    {
      title: "Action",
      key: "operation",
      render: () => (
        <div className={classes.action}>
          <Icon type="delete" className={classes.icon} />
          <Icon
            type="edit"
            className={[classes.icon, classes.edit].join(" ")}
          />
        </div>
      )
    }
  ];

  // Table methods
  const handleTableChange = (
    pagination: object,
    undefined: any,
    sorter: object
  ) => {
    console.log(sorter);
  };

  const rowSelection: object = {
    onChange: (selectedRowKeys: string, selectedRows: string) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    }
  };

  return (
    <div>
      <Table
        rowSelection={rowSelection}
        rowKey="id"
        columns={columns}
        dataSource={products}
        scroll={{ x: 1200, y: 700 }}
        pagination={{
          pageSize: pagination.limit,
          total: pagination.totalProducts
        }}
        onChange={handleTableChange}
      />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductTable);
