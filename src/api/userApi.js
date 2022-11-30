import axiosClient from "./axiosClient";

const userApi = {
  getAllUser: () => {
    const url = "user/";
    return axiosClient.get(url);
  },
  updateUser: (payload) => {
    const url = `user/${payload._id}`;
    return axiosClient.patch(url, payload);
  },
  getUser: (payload) => {
    const url = "user/";
    return axiosClient.post(url, payload);
  },
};

export default userApi;
