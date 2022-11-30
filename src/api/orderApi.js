import axiosClient from "./axiosClient";

const orderApi = {
  getAllOrder: () => {
    const url = "order/";
    return axiosClient.get(url);
  },
  createOrder: (payload) => {
    const url = "order/";
    return axiosClient.post(url, payload);
  },
  deleteOrder:(id) => {
    const url = `order/${id}`;
    return axiosClient.delete(url);
  },
};

export default orderApi;
