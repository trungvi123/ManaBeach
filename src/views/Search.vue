<template>
  <div class="main-content">
    <HelmetVue :title="'Cart'"></HelmetVue>
    <PageTitleVue></PageTitleVue>
    <div class="row m-0 justify-content-center">
      <CardProductVue
        v-for="item in getSearchList"
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
import { mapGetters } from "vueX";
import HelmetVue from "../components/Helmet.vue";
import CardProductVue from '../components/CardProduct.vue'
import PageTitleVue from '../components/PageTitle.vue'
export default {
  data(){
    return {
      
    }
  },
  components: {
    HelmetVue,CardProductVue,PageTitleVue
  },
  computed:{
    ...mapGetters(['getSearchList'])
  },  
  mounted(){
    window.scrollTo(0, 0);
    this.$emit("headerBackgr", "normal");
  }
};
</script>

<style></style>
