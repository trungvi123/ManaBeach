import productApi from "../../api/productApi";

const fetchAllProduct = async () => {
  const products = await productApi.getAllProduct();
  return products;
};

export { fetchAllProduct };
