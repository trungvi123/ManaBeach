<template>
  <div class="main-content">
    <HelmetVue :title="'news'"></HelmetVue>
    <PageTitleVue></PageTitleVue>
    <div class="row m-0 justify-content-center mt-3">
      <div class="col-lg-7 col-md-7 col-sm-7 row mt-4">
        <div
          class="about-text col-lg-4 col-md-4 col-sm-4 text-center"
          v-for="item in aboutText"
          :key="item.id"
        >
          <h4>{{ item.title }}</h4>
          <p>{{ item.description }}</p>
        </div>
      </div>
      <div class="col-lg-7 col-md-7 col-sm-7 p-5 row about-slider">
        <CarouselVue class="w-100" :hideBotCarousel="true" :data="aboutImg"></CarouselVue>
      </div>
    </div>
  </div>
</template>

<script>
import HelmetVue from "@/components/Helmet.vue";
import PageTitleVue from "@/components/PageTitle.vue";
import { aboutText, aboutImg } from "../assets/fake-data/about-us";
import CarouselVue from "../components/product/Carousel.vue";
export default {
  data() {
    return {
      aboutText,
      aboutImg,
    };
  },
  components: {
    HelmetVue,
    PageTitleVue,
    CarouselVue,
  },
  emits: ["headerBackgr"],
  mounted() {
    this.$emit("headerBackgr", "normal");
  },
};
</script>

<style>
.about-text ~ .about-text {
  border-left: 1px solid var(--third-backgr-color);
}

.about-text p {
  color: var(--secondary-text-color);
  font-size: 1.1rem;
}
</style>
