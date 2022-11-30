<template>
  <div class="cart__item">
    <div class="cart__item__img">
      <img :src="data.imgs ? data.imgs[0] : ''" alt="" />
    </div>
    <div class="cart__item__info">
      <div class="cart__item__info__name">
        <router-link :to="{ path: `/product/${data._id}` }">{{
          data.name
        }}</router-link>
      </div>

      <div class="cart__item__info__price">
        {{ numberWithCommas(data.price) }}
      </div>

      <div class="cart__item__info__quantity">
        <div class="product__info__item__quantity">
          <div
            class="product__info__item__quantity__btn mr-2"
            @click="updateQuantity('minus')"
          >
            <BIconDashCircle></BIconDashCircle>
          </div>
          <div class="product__info__item__quantity__input">
            {{ itemQuantity }}
          </div>
          <div
            class="product__info__item__quantity__btn ml-2"
            @click="updateQuantity('plus')"
          >
            <BIconPlusCircle></BIconPlusCircle>
          </div>
        </div>
      </div>
      <div class="cart__item__info__del" @click="deletaItemCart(data._id)">
        <BIconTrash></BIconTrash>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vueX";
import {
  BIconTrash,
  BIconDashCircle,
  BIconPlusCircle,
} from "bootstrap-icons-vue";
import numberWithCommas from "../../utils/numberWithCommas";
import userApi from "../../api/userApi";
export default {
  data() {
    return {
      numberWithCommas,
      itemQuantity: this.data.quantity,
    };
  },
  components: {
    BIconDashCircle,
    BIconPlusCircle,
    BIconTrash,
  },
  props: {
    data: { type: Object },
  },
  computed: {
    ...mapGetters(["getCartList"]),
  },
  methods: {
    ...mapMutations(["setCartList", "setTotalCart"]),
    updateQuantity(type) {
      if (type === "minus") {
        if (this.itemQuantity - 1 >= 1) {
          this.itemQuantity = this.itemQuantity - 1;
          this.changeQuantity(this.itemQuantity);
        }
      } else {
        this.itemQuantity = this.itemQuantity + 1;
        this.changeQuantity(this.itemQuantity);
      }
    },
    async deletaItemCart(id) {
      // lay cac item khong bi xoa
      let itemsNotDelete = this.getCartList.filter((e) => e._id != id);
      // cap nhat lai list
      this.setCartList(itemsNotDelete);
      this.updateUserCart();

    },
    async updateUserCart() {
      // cap nhat lai cart tren database
      let infoUser = JSON.parse(localStorage.getItem("userInfo"));
      let ListUser = await userApi.getAllUser();

      ListUser.forEach(async (element) => {
        if (element.email == infoUser) {
          element.cart = this.getCartList;

          let user = await userApi.updateUser(element);
          let totalCart = 0;
          user.cart?.forEach((e) => {
            totalCart += Number(e.price) * Number(e.quantity);
          });
          this.setTotalCart(totalCart);
        }
      });
    },
    changeQuantity(quantityy) {
      //  Lấy các item của Cart
      let updateCart = this.getCartList;
      //result là item mà ta cần tìm để chỉnh sửa số lượng khi ng dùng thay đổi
      var result = updateCart.find((itemCart) => {
        return itemCart._id === this.data._id;
      });
      // Gán giá trị của item trên Cart bằng giá trị mà ng dùng thay đổi
      result.quantity = quantityy;
      // cẬP NHẬT lại Cart
      this.setCartList(updateCart);
      // cap nhat lai cart tren database
      this.updateUserCart();
    },
  },
};
</script>

<style>
.cart__item {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
}

.cart__item__img {
  margin-right: 20px;
}
.cart__item__img img {
  height: 120px;
}
.cart__item__info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
}

.cart__item__info__name {
  width: 40%;
}
.cart__item__info__name a {
  word-wrap: break-word;
}
.cart__item__info__name,
.cart__item__info__price {
  font-size: 1.25rem;
}
.cart__item__info__quantity {
  width: 70px;
}
.product__info__item__quantity {
  display: flex;
}

.cart__item__info__del {
  font-size: 1.5rem;
  cursor: pointer;
}
.cart__item__info__del:hover {
  color: crimson;
}

.product__info__item__quantity__btn,
.product__info__item__quantity__input {
  font-size: 1.2rem;
  cursor: pointer;
}
</style>
