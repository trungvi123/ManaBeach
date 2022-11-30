<template>
  <div class="p-lg-3 p-md-1 m-2 cart-product">
    <router-link v-if="notLink == false" :to="{ path: `/product/${data._id}` }">
      <div class="cart-product__top">
        <img
          v-if="(data.img || data.imgs)"
          class="w-100 h-100 cart-product__top__img"
          :src="data.img || data.imgs[0] || ''"
          alt="img-product"
        />
      </div>
    </router-link>
    <div
      v-else
      class="cart-product__top"
      data-toggle="modal"
      data-target="#myModal"
    >
      <img
      v-if="(data.img || data.imgs)"
        class="w-100 h-100 cart-product__top__img"
        :src="data.img || data.imgs[0] || ''"
        alt="img-product"
      />
    </div>

    <div class="cart-product__bot">
      <router-link
        v-if="notLink == false"
        :to="{ path: `/product/${data._id}` }"
        ><h5 class="cart-product__bot__head mt-1">
          {{ data.name }}
        </h5></router-link
      >
      <div
        v-else
        data-toggle="modal"
        data-target="#myModal"
      >
        <h5 class="cart-product__bot__head mt-1">
          {{ data.name }}
        </h5>
      </div>

      <p class="cart-product__bot__price" v-if="data.price">
        {{ numberWithCommas(data.price) }}
      </p>
    </div>

  </div>
</template>

<script>
import numberWithCommas from "../utils/numberWithCommas";
export default {
  data() {
    return {
      numberWithCommas,
    };
  },
  props: {
    data: { type: Object },
    notLink: {
      type: Boolean,
    },
  },
  methods: {
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
