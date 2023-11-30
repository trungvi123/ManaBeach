import axiosClient from "./axiosClient";

const productApi = {
  getAllProduct: () => {
    const url = "product/";
    return axiosClient.get(url);
  },
  checkQuantity: (payload) => {
    const url = `product/checkQuantity/${payload.id}`;
    return axiosClient.post(url,payload);
  },
  createProduct: (payload) => {
    const url = "product/";
    return axiosClient.post(url, payload);
  },
  createImgForProduct: (payload,config) => {
    const url = "product/upload/";
    return axiosClient.post(url, payload,config);
  },
  updateProduct: (payload) => {
    const url = "product/updateProduct";
    return axiosClient.put(url, payload);
  },
  deleteProduct:(id) => {
    const url = `product/${id}`;
    return axiosClient.delete(url);
  },
};

export default productApi;
