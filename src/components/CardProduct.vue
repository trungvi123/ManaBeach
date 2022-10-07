<template>
  <div class="p-lg-3 p-md-1 m-2 cart-product">
    <router-link :to="{ path: `/product/${data._id}` }">
      <div class="cart-product__top">
        <img
          class="w-100 h-100 cart-product__top__img"
          :src="data.img || data.imgs[0]"
          alt="img-product"
        />
      </div>
    </router-link>
    <div class="cart-product__bot">
      <router-link :to="{ path: `/product/${data.id}` }"
        ><h5 class="cart-product__bot__head mt-1">
          {{ data.name }}
        </h5></router-link
      >
      <p class="cart-product__bot__price" v-if="data.price">{{numberWithCommas(data.price)  }}</p>
    </div>
  </div>
</template>

<script>
import numberWithCommas from "../utils/numberWithCommas";
export default {
  data() {
    return {
      numberWithCommas,
    }
  },
  props: {
    data: { type: Object },
  },
};
</script>

<style>
.cart-product__top {
  overflow: hidden;
}

.cart-product__top__img:hover {
  transform: scale(1.1);
  cursor: pointer;
  transition: transform 0.8s ease;
}
.cart-product__bot__head {
  font-weight: 700;
  cursor: pointer;
  display: block;
  display: -webkit-box;
  font-size: 16px;
  line-height: 1.3;
  -webkit-line-clamp: 2; /* số dòng hiển thị */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.cart-product__bot__head:hover {
  color: var(--five-text-color);
}

</style>
