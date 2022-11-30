<template>
  <div>
    <h4>SẢN PHẨM TƯƠNG TỰ</h4>
    <div class="row m-0 justify-content-center">
      <div
        v-for="item in sameProducts"
        :key="item.id"
        class="col-lg-3 col-md-3 col-sm-5"
      >
        <CardProductVue @click="handleEmit" :data="item"></CardProductVue>
      </div>
    </div>
  </div>
</template>

<script>
import CardProductVue from "../CardProduct.vue";
import * as fetchProduct from "../../assets/api-data/fetchProduct";

export default {
  data() {
    return {
      sameProductId: [],
      products: [],
      sameProducts: [],
      productCurrent: {},
    };
  },
  watch: {
    productCurrent: function () {
      this.sameProducts = [];
      this.sameProductId = [];
      this.handleMethod();
    },
  },
  components: {
    CardProductVue,
  },
  methods: {
    getSameProductIdByType(type) {
      // lấy các id của sản phẩm tương tự
      this.products.forEach((e) => {
        if (e.type.includes(type)) {
          // push vao mảng nếu id đó chưa có trong mảng và id đó khác sản phẩm hiện tại
          if (
            !this.sameProductId.includes(e._id) &&
            e._id !== this.productCurrent._id
          ) {
            this.sameProductId.push(e._id);
          }
        }
      });
    },
    getProductsById(_id) {
      // lấy sẳn phẩm bằng _id của nó
      let item = this.products.filter((e) => e._id == _id);
      this.sameProducts.push(item); // push vào mảng để sử dụng
    },
    getProduct() {
      // lặp qua các id và lấy sản phẩm
      this.sameProductId.forEach((id) => {
        this.getProductsById(id);
      });
    },
    handleMethod() {
      this.productCurrent.type?.forEach((type) => {
        this.getSameProductIdByType(type);
      });

      this.getProduct();
      this.sameProducts = this.sameProducts.flat();
    },
    async getData() {
      this.products = await fetchProduct.fetchAllProduct();
      // từ  các sản phẩm đó lấy 1 sp bằng id
      this.productCurrent = this.products.find((e) => {
        if (e._id == this.$route.params.id) {
          return e;
        }
      });
      this.handleMethod();
    },
    handleEmit() {
      window.scrollTo(0, 0);
      this.$emit("changeProduct", this.$route.params.id);
      this.getData();
    },
  },
  emits: ["changeProduct"],
  mounted() {
    this.getData();
  },
};
</script>

<style></style>
