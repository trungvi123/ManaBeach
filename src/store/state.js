export default {
    showSearchModel: false,
    cartList:[],
    isAdmin:false,
    totalCart:0,
    searchList:[],
    messageModal:{
        show:false,
        heading:'',
        content:''
    },
    stateLogin: JSON.parse(localStorage.getItem("stateLogin")),
    userInfo: JSON.parse(localStorage.getItem("userInfo")) != ""
    ? JSON.parse(localStorage.getItem("userInfo"))
    : "",
}