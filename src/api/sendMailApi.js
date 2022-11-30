import axiosClient from "./axiosClient";

const sendMailApi = {
    sendMail: (payload) => {
        const url = 'sendMail/';
        return axiosClient.post(url,payload);
    },
}

export default sendMailApi