<template>
  <div>
    <div id="demo" class="carousel slide" data-ride="carousel">
      <!-- The slideshow -->
      <div class="carousel-inner">
        <div
          v-for="(item, index) in data.imgs"
          :key="item.id"
          class="carousel-item"
          :class="{ active: index == 0 }"
        >
          <img :src="item" alt="img" class="w-100 h-100"/>
        </div>
      </div>

      <!-- Left and right controls -->
      <a class="carousel-control-prev" href="#demo" data-slide="prev">
        <span class="carousel-control-prev-icon"></span>
      </a>
      <a class="carousel-control-next" href="#demo" data-slide="next">
        <span class="carousel-control-next-icon"></span>
      </a>
    </div>
    <div v-if="!hideBotCarousel" class="mt-3 d-flex justify-content-between">
      <div
        data-target="#demo"
        :data-slide-to="index"
        v-for="(item, index) in data.imgs"
        :key="item.id"
        class="carousel-img-btn"
      >
        <img class="w-100 h-100" :src="item" alt="img" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: { type: Object },
    hideBotCarousel: { type: Boolean, default: false },
  },
};
</script>

<style scoped>
.carousel-img-btn {
  height: 120px;
  cursor: pointer;
  width: 23%;
}
img {
  object-fit: cover !important;
}
</style>
