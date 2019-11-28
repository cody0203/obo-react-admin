import axios from 'axios';

export const fetchProducts = async ({ query }) => {
  const limit = 10;
  let page = 1;
  let sort = 'id';
  let order = 'desc';
  let brand = '';
  let search = '';
  if (query !== undefined) {
    page = query.page;
    sort = query.sort;
    order = query.order;
    if (query.brand !== '') {
      brand = `&brand=${query.brand}`;
    }
    if (query.searched !== '') {
      search = `&q=${query.searched}`;
    }
  }

  const response = await axios.get(
    `https://cody-json-server.herokuapp.com/products?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${order}${brand}${search}`
  );

  const data = await response;

  const products = data.data;

  const totalProducts = Number(data.headers['x-total-count']);

  return {
    products: products,
    pagination: { totalProducts, limit, page, sort, order }
  };
};

export const deleteProduct = payload => {
  const ids = payload.id;
  let response;
  Promise.all(
    ids.map(async id => {
      response = axios.delete(
        `https://cody-json-server.herokuapp.com/products/${id}`
      );
    })
  );

  return response;
};

export const uploadedProduct = async payload => {
  const data = payload.data;
  console.log(data);

  const response = await axios.post(
    `https://cody-json-server.herokuapp.com/products/`,
    data
  );
  return response;
};

export const fetchProduct = async payload => {
  const { id } = payload;
  const response = await axios.get(
    `https://cody-json-server.herokuapp.com/products/${id}`
  );

  const product = await response.data;
  return {
    product
  };
};

export const updateProduct = async payload => {
  const { data, id } = payload.data;
  console.log(payload);
  const response = await axios.put(
    `https://cody-json-server.herokuapp.com/products/${id}`,
    data
  );

  const product = await response.data;
  return {
    product
  };
};
