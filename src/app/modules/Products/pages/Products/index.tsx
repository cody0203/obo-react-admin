import React from "react";
import { withRouter } from "react-router-dom";
import ProductTable from "./components/ProductTable";

const Products: React.FC = () => {
  return (
    <div>
      <ProductTable />
    </div>
  );
};

export default withRouter(Products);
