<template>
  <div class="main-content">
    <HelmetVue :title="'Catalog'"></HelmetVue>
    <PageTitleVue
      @optionSelect="getOption"
      :catalogFilter="true"
    ></PageTitleVue>
    <div class="row m-0 justify-content-center">
      <CardProductVue
        v-for="item in productsLocal"
        :key="item.id"
        :data="{
          _id: item._id,
          img: item.imgs[0],
          name: item.name,
          price: item.price,
        }"
        class="col-lg-4 col-md-5 col-sm-5"
      ></CardProductVue>
    </div>
  </div>
</template>

<script>
import HelmetVue from "@/components/Helmet.vue";
import PageTitleVue from "@/components/PageTitle.vue";
import CardProductVue from "../components/CardProduct.vue";
import * as fetchProduct from '../assets/api-data/fetchProduct'
export default {
  data() {
    return {
      products: [],
      productsLocal: [],
    };
  },
  components: {
    HelmetVue,
    PageTitleVue,
    CardProductVue,
  },
  methods: {
    getOption(data) {
      if (data.option != "tat-ca") {
        this.productsLocal = this.products.filter((e) => {
          if (e.type.includes(data.option)) {
            return e;
          }
        });
      } else {
        this.productsLocal = this.products;
      }
    },
    async getData (){
      this.products = await fetchProduct.fetchAllProduct()
    }
  },
  emits: ["headerBackgr"],
  mounted() {
    this.$emit("headerBackgr", "normal");
    this.getData()
  },
};
</script>

<style></style>
