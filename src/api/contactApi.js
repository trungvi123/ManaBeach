import axiosClient from "./axiosClient";

const contactApi = {
  getAllContact: () => {
    const url = "contact/";
    return axiosClient.get(url);
  },
  createContact: (payload) => {
    const url = "contact/";
    return axiosClient.post(url, payload);
  },
  deleteContact:(id) => {
    const url = `contact/${id}`;
    return axiosClient.delete(url);
  },
};

export default contactApi;
