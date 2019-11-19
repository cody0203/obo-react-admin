import axios from "axios";

export const fetchProducts = async () => {
  const limit = 10;
  const page = 1;
  const sort = "id";
  const order = "desc";

  const response = await axios.get(
    `https://cody-json-server.herokuapp.com/products?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${order}`
  );
  const data = await response;
  const products = data.data;
  const totalProducts = Number(data.headers["x-total-count"]);

  return {
    products: products,
    pagination: { totalProducts, limit, page, sort, order }
  };
};
