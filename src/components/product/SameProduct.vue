<template>
  <div>
    <h4>SẢN PHẨM TƯƠNG TỰ</h4>
    <div class="row m-0">
      <CardProductVue
        class="col-lg-3"
        v-for="item in sameProducts"
        :key="item.id"
        :data="item"
      ></CardProductVue>
    </div>
  </div>
</template>

<script>
import CardProductVue from "../CardProduct.vue";
import products from "../../assets/fake-data/products";
export default {
  data() {
    return {
      sameProductId: [],
      products,
      sameProducts: [],
    };
  },
  props: {
    data2: { type: Object },
  },
  watch: {
    data2: function () {
      this.sameProducts = [];
      this.sameProductId = []
      this.handleMethod();
    },
  },
  components: {
    CardProductVue,
  },
  methods: {
    getSameProductIdByType(type) {
      // lấy các id của sản phẩm tương tự
      products.forEach((e) => {
        if (e.type.includes(type)) {
          // push vao mảng nếu id đó chưa có trong mảng và id đó khác sản phẩm hiện tại
          if (!this.sameProductId.includes(e.id) && e.id != this.data2.id) {
            this.sameProductId.push(e.id);
          }
        }
      });
    },
    getProductsById(id) {
      // lấy sẳn phẩm bằng id của nó
      let item = products.filter((e) => e.id == id);
      this.sameProducts.push(item); // push vào mảng để sử dụng
    },
    getProduct() {
      // lặp qua các id và lấy sản phẩm
      this.sameProductId.forEach((id) => {
        this.getProductsById(id);
      });
    },
    handleMethod() {
      this.data2.type.forEach((type) => {
        this.getSameProductIdByType(type);
      });
      this.getProduct();
      this.sameProducts = this.sameProducts.flat();
    },
  },
  mounted() {
    this.handleMethod();
  },
};
</script>

<style></style>
