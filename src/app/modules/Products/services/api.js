import axios from 'axios';

export const fetchProducts = async payload => {
  const { query } = payload;
  const limit = 10;
  let page = 1;
  let sort = 'id';
  let order = 'desc';

  if (query !== undefined) {
    page = query.page;
    sort = query.sort;
    order = query.order;
  }

  const response = await axios.get(
    `https://cody-json-server.herokuapp.com/products?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${order}`
  );
  const data = await response;

  const products = data.data;

  const totalProducts = Number(data.headers['x-total-count']);

  return {
    products: products,
    pagination: { totalProducts, limit, page, sort, order }
  };
};
