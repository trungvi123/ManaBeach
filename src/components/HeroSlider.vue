<template>
  <div class="heroSlider">
    <swiper
      :modules="modules"
      autoplay
      :slides-per-view="1"
      @grab-cursor="true"
      class="swiper"
    >
      <swiper-slide v-for="item in heroSliderData" :key="item.id">
        <HeroSliderItemVue :data="item"> </HeroSliderItemVue>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css/bundle";

import { Autoplay } from "swiper";

import HeroSliderItemVue from "./HeroSliderItem.vue";
import heroSliderData from "@/assets/fake-data/heroSlider.js";
export default {
  components: {
    Swiper,
    SwiperSlide,
    HeroSliderItemVue,
  },
  data() {
    return {
      heroSliderData,
      modules: [Autoplay],
    };
  },
};
</script>

<style>
.heroSlider {
  height: 100vh;
}
.swiper {
  height: 100%;
}

@media only screen and (max-width: 1024px) {
  .heroSlider {
    height: 60%;
  }
}

@media only screen and (max-width: 600px) {
}
</style>
