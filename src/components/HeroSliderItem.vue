<template>
  <div class="w-100 slide">
    <img :src="data.img" alt="" class="w-100" />

    <div class="slide-info">
      <p class="slide-info__title">{{ data.title }}</p>
      <p class="slide-info__description">{{ data.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: { type: Object, default: {} },
  },
  data() {
    return {};
  },
 
};
</script>

<style scoped>
.slide {
  position: relative;
  height: 100%;
}

img {
  filter: brightness(60%);
  object-position: center;
}

.slide-info {
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translateX(-50%);
  color: var(--third-text-color);
  padding: 20px 50px;
  width: 50%;
}
.slide-info__title {
  font-size: 5.4rem;
  text-align: center;
  font-weight: 400;
}
.slide-info__description {
  font-size: 1.6rem;
  text-align: center;
  font-weight: 400;
}

/* Responsive */
@media only screen and (max-width: 1024px) {
  .slide-info {
    width: 80%;
    top: 20%;
  }

  .slide-info__title {
    font-size: 4.2rem;
  }
}

@media only screen and (max-width: 600px) {
  .slide-info {
    width: 90%;
    top: 30%;
  }
  .slide-info__title {
    font-size: 1.8rem;
  }

  .slide-info__description {
    font-size: 1rem;
  }
}
</style>
