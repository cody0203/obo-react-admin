import React, { useEffect, useState } from "react";
import { Table, Icon, Input, Button } from "antd";
import { connect } from "react-redux";
import { FormattedNumber } from "react-intl";
import Highlighter from "react-highlight-words";
import { Link } from "react-router-dom";
import ConfirmModal from "app/components/modals/Confirm";

import {
  fetchProducts,
  deleteProduct,
  setCurrentProduct
} from "../../actions/products";
import classes from "./styles.module.css";

function mapStateToProps(state: any) {
  return {
    products: state.ProductsReducer.products,
    pagination: state.ProductsReducer.pagination,
    currentProduct: state.ProductsReducer.currentProduct
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    fetchProducts: (payload: any) => dispatch(fetchProducts(payload)),
    deleteProduct: (id: any) => dispatch(deleteProduct(id)),
    setCurrentProduct: (product: any) => dispatch(setCurrentProduct(product))
  };
}

const ProductTable: React.FC = (props: any) => {
  // Initial Declaration
  const {
    fetchProducts,
    products,
    pagination,
    deleteProduct,
    setCurrentProduct,
    currentProduct
  } = props;

  // States
  const [searchText, setSearchText] = useState("");
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

  // Life cycles
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // Table Methods

  // Onchange Select

  const onSelectChange = (selectedRowKeys: any) => {
    setSelectedRowKeys(selectedRowKeys);
  };

  // row select data
  const rowSelection: object = {
    selectedRowKeys,
    onChange: onSelectChange
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
    setSearchText(selectedKeys[0] || "");
  };

  const handleReset = (clearFilters: any) => {
    clearFilters();
    setSearchText("");
  };

  // on table change
  const handleTableChange = (pagination: any, filters: any, sorter: any) => {
    let order = "desc";
    let sort = sorter.field || "id";
    let brand = "";
    const searched = searchText;

    if (sorter.order === "ascend") {
      order = "asc";
    } else {
      order = "desc";
    }
    if (filters.brand) {
      brand = filters.brand.join("");
    }
    fetchProducts({
      page: pagination.current,
      sort: sort,
      order,
      brand,
      searched
    });
  };

  // handle delete a product
  const handleModalDelete = (product: any) => {
    // deleteProduct([id]);
    setCurrentProduct(product);
    setIsConfirmModalOpen(!isConfirmModalOpen);
  };

  const handleDeleteProduct = (id: any) => {
    deleteProduct([id]);

    setIsConfirmModalOpen(!isConfirmModalOpen);
  };

  const bulkDelete = () => {
    deleteProduct(selectedRowKeys);
    setSelectedRowKeys([]);
  };

  // Table render
  const columns = [
    {
      title: "Ảnh sản phẩm",
      dataIndex: "thumbnail",
      render: (thumbnail: string) => {
        return (
          <img className={classes.thumbnail} src={thumbnail} alt={thumbnail} />
        );
      }
    },
    {
      title: "Tên sản phẩm",
      dataIndex: "name",
      ...getColumnSearchProps("name"),
      render: (text: string, record: any) => {
        return (
          <a
            href={`https://nextjs-obo-stadium.congdinh2395.now.sh/shop/${record.id}`}
            target="_blank"
          >
            {text}
          </a>
        );
      }
    },
    {
      title: "Hãng",
      dataIndex: "brand",
      width: 100,
      filterMultiple: false,
      filters: [
        { text: "Adidas", value: "Adidas" },
        { text: "Asics", value: "Asics" },
        { text: "Converse", value: "Converse" },
        { text: "Nike", value: "Nike" },
        { text: "Vans", value: "Vans" }
      ]
    },
    {
      title: "Giá đặt bán thấp nhất",
      dataIndex: "sell_price",
      sorter: true,
      render: (sell_price: number) => (
        <FormattedNumber style={`currency`} currency="VND" value={sell_price} />
      )
    },
    {
      title: "Giá đặt mua cao nhất",
      dataIndex: "buy_price",
      sorter: true,
      render: (buy_price: number) => (
        <FormattedNumber style={`currency`} currency="VND" value={buy_price} />
      )
    },
    {
      title: "Action",
      key: "operation",
      render: (record: any) => (
        <div className={classes.action}>
          <Icon
            type="delete"
            className={[classes.icon, classes.delete].join(" ")}
            onClick={handleModalDelete.bind(null, record)}
          />
          <Link to={`/dashboard/products/${record.id}`}>
            <Icon
              type="edit"
              className={[classes.icon, classes.edit].join(" ")}
            />
          </Link>
        </div>
      )
    }
  ];

  // Modals
  const toggleConfirmModal = () => {
    setIsConfirmModalOpen(!isConfirmModalOpen);
  };

  const isDisabled = selectedRowKeys.length < 1;

  return (
    <div>
      <div className={classes.TableOperator}>
        <Button onClick={bulkDelete} disabled={isDisabled}>
          Bulk Delete
        </Button>
      </div>

      <Table
        rowSelection={rowSelection}
        rowKey="id"
        columns={columns}
        dataSource={products}
        scroll={{ x: 1200, y: 700 }}
        pagination={{
          current: pagination.page,
          pageSize: pagination.limit,
          total: pagination.totalProducts
        }}
        onChange={handleTableChange}
      />

      {/* Modals */}
      <ConfirmModal
        isOpen={isConfirmModalOpen}
        toggleConfirmModal={toggleConfirmModal}
        detail={currentProduct}
        okLogic={handleDeleteProduct}
      />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductTable);
