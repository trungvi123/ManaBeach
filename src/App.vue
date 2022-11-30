<template>
  <div id="app">
    <Header :backgrProps="backgr" />
    <MessageModalVue></MessageModalVue>
    <router-view @headerBackgr="backgrEmit" />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import MessageModalVue from "./components/MessageModal.vue";
import { mapGetters, mapMutations } from "vueX";
import userApi from "./api/userApi";
export default {
  data() {
    return {
      backgr: "",
    };
  },
  components: {
    Header,MessageModalVue,
    Footer,
  },
  computed: {
    ...mapGetters(["getCartList", "getUserInfo"]),
  },
  methods: {
    ...mapMutations([
      "setStateLogin",
      "setUserInfo",
      "setCartList",
      "setTotalCart",
    ]),
    backgrEmit(data) {
      this.backgr = data;
    },
    async getDataWhenUserRefresh() {
      this.setStateLogin(JSON.parse(localStorage.getItem("stateLogin")));
      this.setUserInfo(JSON.parse(localStorage.getItem("userInfo")));
      let email = JSON.parse(localStorage.getItem("userInfo"));
      if (email != "") {
        let result = await userApi.getUser({ email });
        //  load gio hang cua user
        let cart = result?.user?.userCart;
        this.setCartList(cart);

        // cap nhat lai gia tien tong
        let totalCart = 0;
        this.getCartList?.forEach((e) => {
          totalCart += Number(e.price) * Number(e.quantity);
        });
        this.setTotalCart(totalCart);
      }
    },
  },
  mounted() {
    this.getDataWhenUserRefresh();
  },
};
</script>

<style>
#app {
  position: relative;
}
</style>
