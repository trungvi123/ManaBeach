<template>
  <div class="main-content">
    <div class="pt-5">
      <div class="row m-0 justify-content-center">
        <div class="left-content col-lg-4">
          <CarouselVue :data="getData()"></CarouselVue>
        </div>
        <div class="right-content col-lg-3 p-3">
          <h3 class="right-content__name">{{ data.name }}</h3>
          <div class="small__line mt-3"></div>
          <p class="right-content__price mt-1">{{ data.price }}</p>
          <button class="primaryBtn">
            <span>Đặt ngay</span>
          </button>
          <div class="mt-2 typeRoom">
            <span class="mr-1">Danh mục:</span>
            <span class="mr-1" v-for="(item, index) in getType()" :key="item">
              <span v-if="index != 0">,</span>
              {{ item.display.toLocaleLowerCase() }}
            </span>
          </div>
        </div>
      </div>
      <div class="row m-0 mt-5 justify-content-center">
        <CollapseVue class="col-lg-7"></CollapseVue>
      </div>
      <div class="row m-0 mt-5 justify-content-center">
        <SameProductVue class="col-lg-7" :data2="getData()"></SameProductVue>
      </div>
    </div>
  </div>
</template>

<script>
import CarouselVue from "../components/product/Carousel.vue";
import CollapseVue from "../components/product/Collapse.vue";
import SameProductVue from "../components/product/SameProduct.vue";
import products from "../assets/fake-data/products";
import typeRoom from "../assets/fake-data/typeRoom";

export default {
  data() {
    return {
      data: {},
      typeRoom,
    };
  },
  components: {
    CarouselVue,
    CollapseVue,
    SameProductVue,
  },
  methods: {
    getData() {
      this.data = products.find((e) => {
        if (e.id == this.$route.params.id) {
          return e;
        }
      });
      return this.data;
    },
    getType() {
      const tmpType = this.data.type.map((e) => e);
      const types = typeRoom.filter((e) => {
        if (tmpType.includes(e.option)) return e;
      });
      return types;
    },
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
