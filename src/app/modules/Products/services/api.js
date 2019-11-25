import axios from "axios";

export const fetchProducts = async ({ query }) => {
  const limit = 10;
  let page = 1;
  let sort = "id";
  let order = "desc";
  let brand = "";
  let search = "";
  if (query !== undefined) {
    page = query.page;
    sort = query.sort;
    order = query.order;
    if (query.brand !== "") {
      brand = `&brand=${query.brand}`;
    }
    if (query.searched !== "") {
      console.log(query);
      search = `&q=${query.searched}`;
    }
  }
  console.log(sort, order);

  const response = await axios.get(
    `https://cody-json-server.herokuapp.com/products?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${order}${brand}${search}`
  );

  const data = await response;

  const products = data.data;

  const totalProducts = Number(data.headers["x-total-count"]);

  return {
    products: products,
    pagination: { totalProducts, limit, page, sort, order }
  };
};

export const deleteProduct = async payload => {
  const ids = payload.id;
  Promise.all(
    ids.map(async id => {
      const response = await axios.delete(
        `https://cody-json-server.herokuapp.com/products/${id}`
      );
    })
  );
  return "ok";
};
