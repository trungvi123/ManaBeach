import axiosClient from "./axiosClient";

const productApi = {
  getAllProduct: () => {
    const url = "product/";
    return axiosClient.get(url);
  },
  createProduct: (payload) => {
    const url = "product/";
    return axiosClient.post(url, payload);
  },
  createImgForProduct: (payload,config) => {
    const url = "product/upload/";
    return axiosClient.post(url, payload,config);
  },
};

export default productApi;
