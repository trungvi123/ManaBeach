<template>
  <div class="main-content">
    <div class="pt-lg-5">
      <div class="row m-0 justify-content-center">
        <div class="left-content col-lg-5 col-md-6">
          <CarouselVue :data="data"></CarouselVue>
        </div>
        <div class="right-content col-lg-4 col-md-5 p-3">
          <h3 class="right-content__name">{{ data.name }}</h3>
          <div class="small__line mt-3"></div>
          <p class="right-content__price mt-1" v-if="data.price">
            {{ numberWithCommas(data.price) }}
          </p>
          <button class="primaryBtn">
            <span>Đặt ngay</span>
          </button>
          <div class="mt-2 typeRoom">
            <span class="mr-1">Danh mục:</span>
            <span class="mr-1" v-for="(item, index) in typeCurrent" :key="item">
              <span v-if="index != 0">,</span>
              {{ item.display.toLocaleLowerCase() }}
            </span>
          </div>
        </div>
      </div>
      <div class="row m-0 mt-5 justify-content-center">
        <CollapseVue class="col-lg-9 col-md-11"></CollapseVue>
      </div>
      <div class="row m-0 mt-5 justify-content-center">
        <SameProductVue
          v-if="!ispending"
          @changeProduct="handleChangeProduct"
          class="col-lg-9 col-md-11"
        ></SameProductVue>
      </div>
    </div>
  </div>
</template>

<script>
import CarouselVue from "../components/product/Carousel.vue";
import CollapseVue from "../components/product/Collapse.vue";
import SameProductVue from "../components/product/SameProduct.vue";
import typeRoom from "../assets/fake-data/typeRoom";
import numberWithCommas from "../utils/numberWithCommas";
import * as fetchProduct from "../assets/api-data/fetchProduct.js";

export default {
  data() {
    return {
      typeRoom, // chua tat ca type cua sp
      products: [], // de chua tat ca sp
      data: {}, // data cua sp hien tai
      typeCurrent: [], // type cua sp hien tai
      numberWithCommas,
    };
  },
  components: {
    CarouselVue,
    CollapseVue,
    SameProductVue,
  },
  methods: {
    async getData() {
      try {
        // lấy tất cả sản phẩm
        this.products = await fetchProduct.fetchAllProduct();

        // từ  các sản phẩm đó lấy 1 sp thong qua id tren router
        this.data = this.products.find((e) => {
          if (e._id == this.$route.params.id) {
            return e;
          }
        });

        // từ sản phẩm đó lấy các type của nó
        const tmpType = this.data.type.map((e) => e);
        const types = typeRoom.filter((e) => {
          if (tmpType.includes(e.option)) return e;
        });
        this.typeCurrent = types;

        this.ispending = false;

        return this.products;
      } catch (error) {
        console.log(error);
      }
    },
    handleChangeProduct() {
      this.getData();
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style>
.right-content__name {
  font-weight: 700;
}

.right-content__price {
  font-size: 1.7rem;
  color: var(--five-text-color);
  font-weight: 700;
  font-style: italic;
}

.typeRoom {
  color: var(--secondary-text-color);
  font-style: italic;
}
</style>
