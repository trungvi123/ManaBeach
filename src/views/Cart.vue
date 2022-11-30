<template>
  <div class="main-content">
    <HelmetVue :title="'Cart'"></HelmetVue>
    <div class="container cart">
      <div class="cart__info">
        <div class="cart__info__txt">
          <p>Bạn đang có {{ getCartList ? getCartList.length : '' }} sản phẩm trong giỏ hàng</p>
          <div class="cart__info__txt__price">
            <span>Thành tiền </span>
            <span>{{ numberWithCommas(getTotalCart) }}</span>
          </div>
        </div>
        <div class="cart__info__btn mt-2">
          <Button class="w-100 primaryBtn" @click="handleCheckout()">
            <span>Đặt hàng</span>
          </Button>
          <Button class="primaryBtn w-100 mt-2">
            <router-link :to="{ path: '/catalog/tat-ca' }"
              ><span>Tiếp tục xem</span></router-link
            >
          </Button>
        </div>
      </div>

      <div class="cart__list">
        <CartItemVue
          v-for="item in getCartList"
          :key="item.id"
          :data="item"
        ></CartItemVue>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vueX";
import HelmetVue from "../components/Helmet.vue";
import CartItemVue from "../components/cart/CartItem.vue";
import numberWithCommas from "../utils/numberWithCommas";
import orderApi from "../api/orderApi";
import userApi from "../api/userApi";
import sendMailApi from '../api/sendMailApi'

export default {
  data() {
    return {
      numberWithCommas,
    };
  },
  components: {
    CartItemVue,
    HelmetVue,
  },
  computed: {
    ...mapGetters(["getCartList", "getTotalCart", "getUserInfo"]),
  },
  methods: {
    ...mapMutations(["setTotalCart", "setCartList", "setMessageModal"]),
    async handleCheckout() {
      let payload = {
        email: this.getUserInfo,
        cart: this.getCartList,
      };
      let result = await orderApi.createOrder(payload);

      if (result.state == "success") {
        // xoa du lieu cua cart cua user đó
        let ListUser = await userApi.getAllUser();
        ListUser.forEach(async (element) => {
          if (element.email == this.getUserInfo) {
            element.cart = [];
            let user = await userApi.updateUser(element);

            this.setTotalCart(0);
            this.setCartList([]);
            this.setMessageModal({
              show: true,
              heading: "Thông báo",
              content:
                "Đặt hàng thành công, chúng tôi sẽ liên hệ với bạn sớm nhất qua email hoặc số điện thoại!",
              type: "success",
            });

            sendMailApi.sendMail({email: this.getUserInfo})
          }
        });
      }
    },
  },
  mounted() {
    window.scrollTo(0, 0);
    this.$emit("headerBackgr", "normal");
  },
};
</script>

<style>
.cart {
  display: flex;
}

.cart__info {
  width: 40%;
  margin-right: 30px;
  margin-top: 30px;
  padding: 20px;
  box-shadow: var(--box-shadow);
  position: sticky;
  /* top: calc(var(--header-height) + 50px); */
  top: 120px;
}

.cart__txt p {
  font-size: 1.25rem;
}

.cart__txt__price {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  font-size: 1.25rem;
}

.cart__txt__price span:nth-child(2) {
  font-size: 2rem;
  font-weight: 600;
}

.cart__btn > * {
  margin-bottom: 20px;
}

.cart__list {
  flex-grow: 1;
}
</style>
