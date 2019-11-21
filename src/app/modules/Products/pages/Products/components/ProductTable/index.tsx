import React, { useEffect } from "react";
import { Table, Icon, Input, Button } from "antd";
import { connect } from "react-redux";
import { FormattedNumber } from "react-intl";
import Highlighter from "react-highlight-words";
import { Link } from "react-router-dom";

import { fetchProducts } from "../../actions/products";
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

  // Table

  // Methods

  // on table change
  const handleTableChange = (
    pagination: object,
    undefined: any,
    sorter: object
  ) => {
  };

  // row select data
  const rowSelection: object = {
    onChange: (selectedRowKeys: string, selectedRows: string) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    }
  };

  // Searching
  const getColumnSearchProps = (dataIndex: any) => ({
    filterDropdown: (data: any) => {
      const { setSelectedKeys, selectedKeys, confirm, clearFilters } = data;
      return (
        <div style={{ padding: 8 }}>
          <Input
            placeholder={`Search ${dataIndex}`}
            value={selectedKeys[0]}
            onChange={e =>
              setSelectedKeys(e.target.value ? [e.target.value] : [])
            }
            onPressEnter={() => handleSearch(selectedKeys, confirm)}
            style={{ width: 188, marginBottom: 8, display: "block" }}
          />
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm)}
            icon="search"
            size="small"
            style={{ width: 90, marginRight: 8 }}
          >
            Search
          </Button>
          <Button
            onClick={() => handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
        </div>
      );
    },
    filterIcon: (filtered: any) => (
      <Icon type="search" style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value: any, record: any) => {
      return true;
    },
    // onFilterDropdownVisibleChange: (visible: any) => {},
    render: (text: any) => (
      <Highlighter
        highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
        autoEscape
        searchWords={[]}
        textToHighlight={text.toString()}
      />
    )
  });

  const handleSearch = (selectedKeys: any, confirm: any) => {
    confirm();
    console.log(selectedKeys);
  };

  const handleReset = (clearFilters: any) => {
    clearFilters();
  };

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
      dataIndex: "name",
      ...getColumnSearchProps("name"),
      render: (text: string, record: any) => {
        return <Link to={`/dashboard/products/${record.id}`}>{text}</Link>;
      }
    },
    {
      title: "Hãng",
      dataIndex: "brand",
      width: 100,
      filters: [
        { text: "Nike", value: "Nike" },
        { text: "Adidas", value: "Adidas" }
      ]
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
